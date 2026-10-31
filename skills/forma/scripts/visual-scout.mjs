import {mkdir, readFile, writeFile, stat} from 'node:fs/promises'
import path from 'node:path'
import {lookup} from 'node:dns/promises'
import {isIP} from 'node:net'
import {createRequire} from 'node:module'
import {createHash} from 'node:crypto'
import {renderPixelGlyphs} from './pixel-lab.mjs'

const sources = [
  {group:'Design references',name:'Awwwards',url:'https://www.awwwards.com/websites/'},
  {group:'Design references',name:'Mobbin',url:'https://mobbin.com/'},
  {group:'Design references',name:'Dribbble',url:'https://dribbble.com/'},
  {group:'Design references',name:'Behance',url:'https://www.behance.net/'},
  {group:'Design references',name:'SiteInspire',url:'https://www.siteinspire.com/'},
  {group:'Design references',name:'Godly',url:'https://godly.website/'},
  {group:'Design references',name:'One Page Love',url:'https://onepagelove.com/'},
  {group:'Potential licensed assets',name:'Unsplash',url:'https://unsplash.com/'},
  {group:'Potential licensed assets',name:'Pexels',url:'https://www.pexels.com/'},
  {group:'Potential licensed assets',name:'Wikimedia Commons',url:'https://commons.wikimedia.org/'}
]

const helpText = `Forma Visual Scout

Commands:
  node scripts/visual-scout.mjs sources
  node scripts/visual-scout.mjs audit <public-url> [--out .forma-review/site]
  node scripts/visual-scout.mjs image-audit <local-image> [--site-report visual-scout-report.json] [--out .forma-review/image-analysis]
  node scripts/visual-scout.mjs pixelize <local-image> [--mode source|mono|duotone] [--cell-size 12] [--out .forma-review/pixel-art]
  node scripts/visual-scout.mjs assets search <query> [--limit 8] [--out .forma-review/assets]
  node scripts/visual-scout.mjs assets stage --results <search.json> --id <page-id> --license-checked --confirm [--out .forma-review/assets]

The audit needs Playwright and Chromium installed in the target project:
  npm install --save-dev playwright
  npx playwright install chromium

Design galleries are references, not asset-download endpoints. Pixel rendering writes a new deterministic PNG and settings manifest without replacing the input. Asset staging only handles a selected Wikimedia Commons candidate, writes into a review folder, and preserves its source/license metadata. It never modifies the live site.`

function getFlag(args,name,fallback='') {
  const i=args.indexOf(name)
  return i<0 ? fallback : (args[i+1] ?? '')
}

function positional(args,valuedFlags=[]) {
  const result=[]
  for (let i=0;i<args.length;i++) {
    if (valuedFlags.includes(args[i])) { i++; continue }
    if (args[i].startsWith('--')) continue
    result.push(args[i])
  }
  return result
}

function safeSlug(value) {
  return value.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,70) || 'visual-scout'
}

function htmlText(value='') {
  return String(value).replace(/<[^>]*>/g,' ').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;|&apos;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/\s+/g,' ').trim()
}

function licenseIsUnknown(value='') {
  return !value || /unknown|no license|all rights reserved|copyrighted|not provided/i.test(value)
}

function forbiddenIpv4(address) {
  const p=address.split('.').map(Number)
  if (p.length!==4 || p.some(n=>!Number.isInteger(n) || n<0 || n>255)) return true
  return p[0]===0 || p[0]===10 || p[0]===127 || (p[0]===169&&p[1]===254) || (p[0]===172&&p[1]>=16&&p[1]<=31) || (p[0]===192&&p[1]===168) || (p[0]===100&&p[1]>=64&&p[1]<=127) || (p[0]===198&&(p[1]===18||p[1]===19)) || p[0]>=224
}

function forbiddenIpv6(address) {
  const a=address.toLowerCase().split('%')[0]
  return a==='::' || a==='::1' || a.startsWith('fc') || a.startsWith('fd') || a.startsWith('fe80:') || a.startsWith('ff') || a.startsWith('2001:db8:') || a.startsWith('::ffff:')
}

async function publicHostname(hostname) {
  const host=hostname.toLowerCase().replace(/^\[|\]$/g,'')
  if (host==='localhost' || host.endsWith('.localhost') || host.endsWith('.local') || host.endsWith('.internal')) return false
  const ipVersion=isIP(host)
  if (ipVersion===4) return !forbiddenIpv4(host)
  if (ipVersion===6) return !forbiddenIpv6(host)
  try {
    const addresses=await lookup(host,{all:true,verbatim:true})
    return addresses.length>0 && addresses.every(item=>item.family===4 ? !forbiddenIpv4(item.address) : !forbiddenIpv6(item.address))
  } catch {
    return false
  }
}

async function parsePublicUrl(value) {
  let url
  try { url=new URL(value) } catch { throw new Error('Enter a complete public URL, including https://') }
  if (!['http:','https:'].includes(url.protocol)) throw new Error('Only public HTTP and HTTPS pages can be audited')
  if (url.username || url.password) throw new Error('URLs containing credentials are not accepted')
  if (!(await publicHostname(url.hostname))) throw new Error('Private, local, or unresolved hosts are blocked')
  return url
}

function countTop(values,limit=12) {
  const counts=new Map()
  for (const value of values.filter(Boolean)) counts.set(value,(counts.get(value)||0)+1)
  return [...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,limit).map(([value,count])=>({value,count}))
}

function loadChromium() {
  try { return createRequire(path.join(process.cwd(),'__forma_visual_scout__.cjs'))('playwright').chromium }
  catch { throw new Error('Playwright is required. In the target project run: npm install --save-dev playwright && npx playwright install chromium') }
}

function launchBrowser(chromium) {
  return chromium.launch({headless:true,executablePath:process.env.FORMA_CHROMIUM_PATH||undefined})
}

async function auditSite(urlValue,outValue) {
  const url=await parsePublicUrl(urlValue)
  const chromium=loadChromium()
  const outDir=path.resolve(outValue || '.forma-review/site')
  await mkdir(outDir,{recursive:true})
  const browser=await launchBrowser(chromium)
  const context=await browser.newContext({ignoreHTTPSErrors:false,serviceWorkers:'block',viewport:{width:1440,height:1000},deviceScaleFactor:1})
  const page=await context.newPage()
  const consoleErrors=[]
  const failedRequests=[]
  page.on('console',message=>{if(message.type()==='error') consoleErrors.push(message.text().slice(0,500))})
  page.on('requestfailed',request=>failedRequests.push({url:request.url(),failure:request.failure()?.errorText||'request failed'}))
  await page.route('**/*',async route=>{
    const requestUrl=route.request().url()
    if (!requestUrl.startsWith('http://') && !requestUrl.startsWith('https://')) return route.continue()
    let allowed=false
    try { allowed=await publicHostname(new URL(requestUrl).hostname) } catch {}
    if (allowed) return route.continue()
    return route.abort('blockedbyclient')
  })
  const viewports=[{name:'desktop',width:1440,height:1000},{name:'mobile',width:390,height:844}]
  const captures=[]
  let responseStatus=null
  let finalUrl=url.href
  try {
    await page.setViewportSize({width:viewports[0].width,height:viewports[0].height})
    const response=await page.goto(url.href,{waitUntil:'domcontentloaded',timeout:30000})
    responseStatus=response?.status() ?? null
    finalUrl=page.url()
    if (!(await publicHostname(new URL(finalUrl).hostname))) throw new Error('The page redirected to a private or local host; navigation stopped')
    await page.evaluate(()=>Promise.race([document.fonts?.ready||Promise.resolve(),new Promise(resolve=>setTimeout(resolve,4000))]))
    for (const viewport of viewports) {
      await page.setViewportSize({width:viewport.width,height:viewport.height})
      await page.waitForTimeout(250)
      const data=await page.evaluate(()=>{
        const clean=value=>String(value||'').replace(/\s+/g,' ').trim().slice(0,220)
        const visible=element=>{
          const style=getComputedStyle(element)
          const rect=element.getBoundingClientRect()
          return style.display!=='none'&&style.visibility!=='hidden'&&Number(style.opacity)!==0&&rect.width>0&&rect.height>0
        }
        const nameOf=element=>clean(element.getAttribute('aria-label')||element.getAttribute('title')||element.innerText||element.value||element.getAttribute('alt'))
        const headings=[...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter(visible).map(element=>({level:Number(element.tagName.slice(1)),text:nameOf(element)}))
        const images=[...document.images].map(image=>({src:image.currentSrc||image.src,alt:image.getAttribute('alt'),width:image.naturalWidth,height:image.naturalHeight,loaded:image.complete&&image.naturalWidth>0})).slice(0,250)
        const buttons=[...document.querySelectorAll('button,[role="button"]')].filter(visible).map(element=>({name:nameOf(element),type:element.getAttribute('type')||element.tagName.toLowerCase()})).slice(0,250)
        const links=[...document.querySelectorAll('a[href]')].filter(visible).map(element=>({name:nameOf(element),href:element.href,target:element.target,rel:element.rel})).slice(0,300)
        const fields=[...document.querySelectorAll('input:not([type="hidden"]),select,textarea,[role="textbox"]')].filter(visible).map(element=>({type:element.type||element.tagName.toLowerCase(),name:nameOf(element)||clean(document.querySelector(`label[for="${CSS.escape(element.id||'__missing__')}"]`)?.innerText),required:element.required||element.getAttribute('aria-required')==='true'})).slice(0,200)
        const sampled=[...document.querySelectorAll('body *')].filter(visible).slice(0,900)
        const styles=sampled.map(element=>{const style=getComputedStyle(element);return {color:style.color,background:style.backgroundColor,font:style.fontFamily,size:style.fontSize,lineHeight:style.lineHeight}})
        const opaque=value=>value&&value!=='transparent'&&!/^rgba\([^)]*,\s*0\s*\)$/.test(value)
        const top=(values,limit)=>{const counts=new Map();for(const value of values.filter(Boolean))counts.set(value,(counts.get(value)||0)+1);return [...counts].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,limit).map(([value,count])=>({value,count}))}
        const root=getComputedStyle(document.documentElement)
        return {
          title:clean(document.title),description:clean(document.querySelector('meta[name="description"]')?.content),canonical:document.querySelector('link[rel="canonical"]')?.href||null,language:document.documentElement.lang||null,
          headings,h1Count:headings.filter(item=>item.level===1).length,hasMain:Boolean(document.querySelector('main,[role="main"]')),hasNavigation:Boolean(document.querySelector('nav,[role="navigation"]')),
          images,buttons,links,fields,
          viewport:{width:innerWidth,height:innerHeight,documentWidth:document.documentElement.scrollWidth,hasHorizontalOverflow:document.documentElement.scrollWidth>innerWidth},
          rootTokens:{font:root.fontFamily,fontSize:root.fontSize,foreground:root.color,background:root.backgroundColor},
          styles:{colors:top(styles.map(item=>item.color),10),surfaces:top(styles.map(item=>item.background).filter(opaque),10),fonts:top(styles.map(item=>item.font),8),fontSizes:top(styles.map(item=>item.size),12),lineHeights:top(styles.map(item=>item.lineHeight),8)}
        }
      })
      const screenshot=path.join(outDir,`${viewport.name}-${viewport.width}x${viewport.height}.png`)
      await page.screenshot({path:screenshot,fullPage:false,animations:'disabled'})
      captures.push({name:viewport.name,width:viewport.width,height:viewport.height,screenshot,data})
    }
  } finally {
    await context.close()
    await browser.close()
  }
  const issues=[]
  const desktop=captures.find(item=>item.name==='desktop')?.data
  if (responseStatus!==200) issues.push({level:'review',finding:`HTTP response status ${responseStatus}`,evidence:'Check redirects, authorization boundaries, and server status.'})
  if (desktop?.h1Count!==1) issues.push({level:'review',finding:`Expected one visible H1; found ${desktop?.h1Count??0}`,evidence:'Confirm the page title hierarchy and document outline.'})
  if (!desktop?.hasMain) issues.push({level:'review',finding:'No main landmark detected',evidence:'Check semantic page regions and assistive navigation.'})
  for (const capture of captures) {
    if (capture.data.viewport.hasHorizontalOverflow) issues.push({level:'review',finding:`Horizontal overflow at ${capture.name} ${capture.width}px`,evidence:`Document width ${capture.data.viewport.documentWidth}px exceeds viewport width.`})
    const noAlt=capture.data.images.filter(image=>image.alt===null)
    if (noAlt.length) issues.push({level:'review',finding:`${noAlt.length} image elements have no alt attribute at ${capture.name}`,evidence:'Check whether each image is informative or decorative; use appropriate alternative text or alt="".'})
    const unnamedButtons=capture.data.buttons.filter(button=>!button.name)
    if (unnamedButtons.length) issues.push({level:'review',finding:`${unnamedButtons.length} visible buttons lack a detectable accessible name at ${capture.name}`,evidence:'Inspect aria-label, visible text, and icon-only controls.'})
    const unnamedFields=capture.data.fields.filter(field=>!field.name)
    if (unnamedFields.length) issues.push({level:'review',finding:`${unnamedFields.length} visible form fields lack a detectable label at ${capture.name}`,evidence:'Inspect associated labels, fieldset/legend, and accessible naming.'})
  }
  const report={tool:'Forma Visual Scout',version:1,createdAt:new Date().toISOString(),requestedUrl:url.href,finalUrl,responseStatus,limits:['Heuristic browser audit only; not an accessibility conformance test, penetration test, performance certification, or design verdict.','The browser context is fresh and unauthenticated. Login-only pages, private networks, localhost, and local files are not supported.','Screenshots cover the first viewport at each size; the DOM inventory covers visible document elements and is capped.'],captures,issues,consoleErrors:[...new Set(consoleErrors)].slice(0,80),failedRequests:failedRequests.slice(0,100)}
  const reportPath=path.join(outDir,'visual-scout-report.json')
  await writeFile(reportPath,JSON.stringify(report,null,2)+'\n')
  const summaryPath=path.join(outDir,'visual-scout-summary.md')
  const issueLines=issues.length?issues.map(item=>`- **${item.level}** — ${item.finding}. ${item.evidence}`).join('\n'):'- No heuristic findings were raised; this is not proof of quality or accessibility.'
  const summary=`# Visual Scout audit\n\n- Requested URL: ${url.href}\n- Final URL: ${finalUrl}\n- HTTP status: ${responseStatus}\n- Captures: ${captures.map(item=>`${item.name} ${item.width}×${item.height}`).join(', ')}\n\n## Review findings\n\n${issueLines}\n\n## Main-page signals\n\n- Title: ${desktop?.title||'(none detected)'}\n- Description: ${desktop?.description||'(none detected)'}\n- Language: ${desktop?.language||'(not set)'}\n- H1 count: ${desktop?.h1Count??0}\n- Images inspected: ${desktop?.images.length??0}\n- Visible links inspected: ${desktop?.links.length??0}\n\n## Interpretation\n\nTreat these results as inspection prompts. Confirm each item in the rendered product, inspect the screenshots, verify claim truth with the product owner, and test keyboard and assistive-technology paths directly. The scanner does not change source files or download page images.\n`
  await writeFile(summaryPath,summary)
  process.stdout.write(JSON.stringify({report:reportPath,summary:summaryPath,screenshots:captures.map(item=>item.screenshot),issues:issues.length},null,2)+'\n')
}

async function auditImage(imageValue,outValue,siteReportValue) {
  const imagePath=path.resolve(imageValue)
  const fileInfo=await stat(imagePath)
  if (!fileInfo.isFile()) throw new Error('Provide a local image file')
  if (fileInfo.size>50*1024*1024) throw new Error('Image exceeds the 50 MB analysis limit')
  const chromium=loadChromium()
  const browser=await launchBrowser(chromium)
  let analysis
  try {
    const page=await browser.newPage()
    await page.setContent('<!doctype html><input id="asset" type="file" accept="image/*">')
    await page.locator('#asset').setInputFiles(imagePath)
    analysis=await page.evaluate(async()=>{
      const file=document.querySelector('#asset').files?.[0]
      if (!file) throw new Error('Image file could not be loaded')
      const bitmap=await createImageBitmap(file)
      const width=bitmap.width
      const height=bitmap.height
      const scale=Math.min(1,160/Math.max(width,height))
      const canvas=document.createElement('canvas')
      canvas.width=Math.max(1,Math.round(width*scale))
      canvas.height=Math.max(1,Math.round(height*scale))
      const context=canvas.getContext('2d',{willReadFrequently:true})
      context.drawImage(bitmap,0,0,canvas.width,canvas.height)
      const pixels=context.getImageData(0,0,canvas.width,canvas.height).data
      const bins=new Map()
      let red=0,green=0,blue=0,luminance=0,alpha=0,transparent=0,dark=0,bright=0,saturation=0,count=0
      for (let i=0;i<pixels.length;i+=4) {
        const a=pixels[i+3]/255
        const r=pixels[i]*a+255*(1-a),g=pixels[i+1]*a+255*(1-a),b=pixels[i+2]*a+255*(1-a)
        const rgb=[r,g,b].map(channel=>{const s=channel/255;return s<=0.04045?s/12.92:((s+0.055)/1.055)**2.4})
        const l=0.2126*rgb[0]+0.7152*rgb[1]+0.0722*rgb[2]
        const max=Math.max(r,g,b),min=Math.min(r,g,b)
        const key=[Math.floor(r/32),Math.floor(g/32),Math.floor(b/32)].join(',')
        const bin=bins.get(key)||{count:0,r:0,g:0,b:0}
        bin.count++;bin.r+=r;bin.g+=g;bin.b+=b;bins.set(key,bin)
        red+=r;green+=g;blue+=b;luminance+=l;alpha+=a;saturation+=max===0?0:(max-min)/max;count++
        if (l<0.18) dark++
        if (l>0.82) bright++
        if (a<0.98) transparent++
      }
      const hex=n=>Math.max(0,Math.min(255,Math.round(n))).toString(16).padStart(2,'0')
      const palette=[...bins.values()].sort((a,b)=>b.count-a.count).slice(0,8).map(bin=>({hex:`#${hex(bin.r/bin.count)}${hex(bin.g/bin.count)}${hex(bin.b/bin.count)}`,share:Number((bin.count/count).toFixed(4))}))
      const result={fileName:file.name,mimeType:file.type||'unknown',bytes:file.size,width,height,aspectRatio:Number((width/height).toFixed(4)),orientation:width>height?'landscape':width<height?'portrait':'square',sampledPixels:count,averageColor:`#${hex(red/count)}${hex(green/count)}${hex(blue/count)}`,averageRelativeLuminance:Number((luminance/count).toFixed(4)),averageSaturation:Number((saturation/count).toFixed(4)),darkPixelShare:Number((dark/count).toFixed(4)),brightPixelShare:Number((bright/count).toFixed(4)),transparentPixelShare:Number((transparent/count).toFixed(4)),dominantColorBins:palette}
      bitmap.close()
      return result
    })
  } finally {
    await browser.close()
  }
  let sourceManifest=null
  const parsed=path.parse(imagePath)
  const manifestPath=path.join(parsed.dir,`${parsed.name}.asset.json`)
  try { sourceManifest=JSON.parse(await readFile(manifestPath,'utf8')) } catch {}
  let siteSignals=null
  if (siteReportValue) {
    const siteReport=JSON.parse(await readFile(path.resolve(siteReportValue),'utf8'))
    const desktop=siteReport.captures?.find(item=>item.name==='desktop')?.data
    siteSignals={url:siteReport.finalUrl||siteReport.requestedUrl||null,rootTokens:desktop?.rootTokens||null,colorFrequency:desktop?.styles?.colors||[],surfaceFrequency:desktop?.styles?.surfaces||[],note:'Compare visually; these measurements do not decide whether an image fits the brand or content.'}
  }
  const outDir=path.resolve(outValue||'.forma-review/image-analysis')
  await mkdir(outDir,{recursive:true})
  const reportPath=path.join(outDir,`${safeSlug(parsed.name)}-image-analysis.json`)
  const report={tool:'Forma Visual Scout',version:1,createdAt:new Date().toISOString(),analysis,sourceManifest,siteSignals,limits:['Palette and luminance are sampled from a downscaled browser canvas; they are not color-managed proof or subject recognition.','Review crop, content meaning, rights, legibility, and the actual design context manually.']}
  await writeFile(reportPath,JSON.stringify(report,null,2)+'\n')
  process.stdout.write(JSON.stringify({report:reportPath,analysis,sourceManifest:sourceManifest?'found':'not found',siteSignals:siteSignals?'included':'not requested'},null,2)+'\n')
}

async function pixelizeImage(imageValue,args) {
  const imagePath=path.resolve(imageValue)
  const fileInfo=await stat(imagePath)
  if (!fileInfo.isFile()) throw new Error('Provide a local image file')
  if (fileInfo.size>50*1024*1024) throw new Error('Image exceeds the 50 MB pixel-render limit')
  const options={
    mode:getFlag(args,'--mode','source'),
    cellSize:Number(getFlag(args,'--cell-size','12')),
    dither:Number(getFlag(args,'--dither','0.16')),
    contrast:Number(getFlag(args,'--contrast','1.08')),
    edgeThreshold:Number(getFlag(args,'--edge-threshold','0.2')),
    edges:!args.includes('--no-edges'),
    background:getFlag(args,'--background','#f5f4ef'),
    ink:getFlag(args,'--ink','#18323d'),
    shadow:getFlag(args,'--shadow','#18323d'),
    highlight:getFlag(args,'--highlight','#f5d66e'),
    ramp:getFlag(args,'--ramp','MWQ8&%x+=:·. ')
  }
  const chromium=loadChromium()
  const browser=await launchBrowser(chromium)
  let rendered
  try {
    const page=await browser.newPage()
    await page.setContent('<!doctype html><input id="asset" type="file" accept="image/*">')
    await page.locator('#asset').setInputFiles(imagePath)
    await page.addScriptTag({content:'window.__formaRenderPixelGlyphs = ('+renderPixelGlyphs.toString()+')'})
    rendered=await page.evaluate(async(options)=>{
      const file=document.querySelector('#asset').files?.[0]
      if (!file) throw new Error('Image file could not be loaded')
      const bitmap=await createImageBitmap(file)
      const sourceWidth=bitmap.width
      const sourceHeight=bitmap.height
      const scale=Math.min(1,1200/Math.max(bitmap.width,bitmap.height))
      const width=Math.max(1,Math.round(bitmap.width*scale))
      const height=Math.max(1,Math.round(bitmap.height*scale))
      const sampleCanvas=document.createElement('canvas')
      sampleCanvas.width=width
      sampleCanvas.height=height
      const sampleContext=sampleCanvas.getContext('2d',{willReadFrequently:true})
      sampleContext.drawImage(bitmap,0,0,width,height)
      const pixels=sampleContext.getImageData(0,0,width,height)
      const artwork=window.__formaRenderPixelGlyphs({width,height,data:pixels.data},options)
      const canvas=document.createElement('canvas')
      canvas.width=artwork.outputWidth
      canvas.height=artwork.outputHeight
      const context=canvas.getContext('2d')
      context.fillStyle=options.background
      context.fillRect(0,0,canvas.width,canvas.height)
      context.font=`${artwork.cellHeight}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`
      context.textAlign='center'
      context.textBaseline='middle'
      for (const cell of artwork.cells) {
        context.fillStyle=cell.color
        context.fillText(cell.glyph,(cell.column+0.5)*artwork.cellWidth,(cell.row+0.5)*artwork.cellHeight)
      }
      const pngBase64=canvas.toDataURL('image/png').split(',')[1]
      const {cells,...metadata}=artwork
      bitmap.close()
      return {pngBase64,metadata,source:{width:sourceWidth,height:sourceHeight,sampledWidth:width,sampledHeight:height},cells:cells.length}
    },options)
  } finally {
    await browser.close()
  }
  const outDir=path.resolve(getFlag(args,'--out','.forma-review/pixel-art'))
  await mkdir(outDir,{recursive:true})
  const parsed=path.parse(imagePath)
  const base=`${safeSlug(parsed.name)}-glyph-art`
  const pngPath=path.join(outDir,`${base}.png`)
  const manifestPath=path.join(outDir,`${base}.json`)
  for (const targetPath of [pngPath,manifestPath]) {
    try { await stat(targetPath); throw new Error(`Refusing to overwrite existing file: ${targetPath}`) } catch (error) { if (error.code!=='ENOENT') throw error }
  }
  const imageBytes=Buffer.from(rendered.pngBase64,'base64')
  const inputBytes=await readFile(imagePath)
  const manifest={tool:'Forma Visual Scout',renderer:'Forma Pixel Glyph Lab',algorithm:'per-pixel tile sampling; linear-light luminance; 4x4 ordered dither; Sobel-inspired edge direction; deterministic tone glyph mapping',source:{file:imagePath,sha256:createHash('sha256').update(inputBytes).digest('hex'),width:rendered.source.width,height:rendered.source.height,sampledWidth:rendered.source.sampledWidth,sampledHeight:rendered.source.sampledHeight},output:{file:pngPath,sha256:createHash('sha256').update(imageBytes).digest('hex'),width:rendered.metadata.outputWidth,height:rendered.metadata.outputHeight,cells:rendered.cells},options,render:rendered.metadata,createdAt:new Date().toISOString(),status:'preview artifact; does not replace the source image or modify a website'}
  await writeFile(pngPath,imageBytes,{flag:'wx'})
  await writeFile(manifestPath,JSON.stringify(manifest,null,2)+'\n',{flag:'wx'})
  process.stdout.write(JSON.stringify({artwork:pngPath,manifest:manifestPath,width:rendered.metadata.outputWidth,height:rendered.metadata.outputHeight,grid:`${rendered.metadata.columns} × ${rendered.metadata.rows}`,mode:rendered.metadata.mode,deterministic:true},null,2)+'\n')
}

async function searchCommons(query,limitValue,outValue) {
  const queryText=query.trim()
  if (queryText.length<3) throw new Error('Use a specific search phrase of at least three characters')
  const limit=Math.max(1,Math.min(12,Number(limitValue)||8))
  const params=new URLSearchParams({action:'query',generator:'search',gsrsearch:`filetype:bitmap ${queryText}`,gsrnamespace:'6',gsrlimit:String(limit),prop:'imageinfo',iiprop:'url|size|mime|extmetadata',iiurlwidth:'1200',format:'json',formatversion:'2'})
  const endpoint=`https://commons.wikimedia.org/w/api.php?${params}`
  const response=await fetch(endpoint,{headers:{'User-Agent':'FormaVisualScout/1.0 (+https://github.com/crowgent/forma/issues)'},signal:AbortSignal.timeout(25000)})
  if (!response.ok) throw new Error(`Wikimedia Commons returned HTTP ${response.status}`)
  const payload=await response.json()
  const pages=payload.query?.pages||[]
  const candidates=pages.map(page=>{
    const info=page.imageinfo?.[0]
    const meta=info?.extmetadata||{}
    const get=name=>htmlText(meta[name]?.value||'')
    if (!info || !String(info.mime||'').startsWith('image/')) return null
    return {
      id:String(page.pageid),title:page.title,sourcePage:info.descriptionurl||`https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title.replaceAll(' ','_'))}`,
      previewUrl:info.thumburl||info.url,downloadUrl:info.thumburl||info.url,originalUrl:info.url,mime:info.mime,width:info.width,height:info.height,
      creator:get('Artist')||get('Credit')||'',credit:get('Credit')||'',license:{name:get('LicenseShortName'),url:get('LicenseUrl'),terms:get('UsageTerms')},
      description:get('ImageDescription'),reviewRequired:true
    }
  }).filter(Boolean)
  const outDir=path.resolve(outValue||'.forma-review/assets')
  await mkdir(outDir,{recursive:true})
  const filePath=path.join(outDir,`commons-${safeSlug(queryText)}-candidates.json`)
  const result={tool:'Forma Visual Scout',source:'Wikimedia Commons',createdAt:new Date().toISOString(),query:queryText,limit,candidates,notice:'Search results are candidates only. Open each source page, inspect the exact file license and attribution, and check suitability before staging. No files were downloaded.'}
  await writeFile(filePath,JSON.stringify(result,null,2)+'\n')
  process.stdout.write(JSON.stringify({results:filePath,candidateCount:candidates.length,candidates:candidates.map(({id,title,sourcePage,previewUrl,mime,width,height,creator,license})=>({id,title,sourcePage,previewUrl,mime,width,height,creator,license}))},null,2)+'\n')
}

async function stageCommons(args) {
  if (!args.includes('--confirm')) throw new Error('Staging requires --confirm; this writes only to a review folder, never the live site')
  if (!args.includes('--license-checked')) throw new Error('Open the file page and verify its exact license and conditions first, then pass --license-checked')
  const resultsPath=getFlag(args,'--results')
  const id=getFlag(args,'--id')
  if (!resultsPath || !id) throw new Error('Provide --results <search.json> and --id <candidate-page-id>')
  const payload=JSON.parse(await readFile(path.resolve(resultsPath),'utf8'))
  const candidate=payload.candidates?.find(item=>String(item.id)===String(id))
  if (!candidate) throw new Error(`Candidate ${id} was not found in the selected search file`)
  if (licenseIsUnknown(candidate.license?.name)) throw new Error('Candidate has no clearly identified license; staging is blocked')
  if (!candidate.sourcePage || !candidate.downloadUrl) throw new Error('Candidate is missing a source page or download URL')
  const downloadUrl=new URL(candidate.downloadUrl)
  if (downloadUrl.protocol!=='https:' || !['upload.wikimedia.org','thumb.wikimedia.org'].includes(downloadUrl.hostname)) throw new Error('Only HTTPS media hosted by Wikimedia Commons can be staged')
  const response=await fetch(downloadUrl,{headers:{'User-Agent':'FormaVisualScout/1.0 (+https://github.com/crowgent/forma/issues)'},signal:AbortSignal.timeout(30000)})
  if (!response.ok) throw new Error(`Image host returned HTTP ${response.status}`)
  const finalDownloadUrl=new URL(response.url)
  if (finalDownloadUrl.protocol!=='https:' || !['upload.wikimedia.org','thumb.wikimedia.org'].includes(finalDownloadUrl.hostname)) throw new Error('The media request redirected outside Wikimedia hosting; staging stopped')
  const mime=(response.headers.get('content-type')||'').split(';')[0].toLowerCase()
  const extensions={'image/jpeg':'jpg','image/png':'png','image/webp':'webp','image/gif':'gif'}
  if (!extensions[mime]) throw new Error(`Unsupported staged image type: ${mime||'unknown'}; supported types are JPEG, PNG, WebP, and GIF`)
  const length=Number(response.headers.get('content-length')||0)
  if (length>15*1024*1024) throw new Error('Image exceeds the 15 MB staging limit')
  if (!response.body) throw new Error('Image response has no body')
  const chunks=[]
  let byteCount=0
  for await (const chunk of response.body) {
    byteCount+=chunk.byteLength
    if (byteCount>15*1024*1024) { await response.body.cancel(); throw new Error('Image exceeds the 15 MB staging limit') }
    chunks.push(Buffer.from(chunk))
  }
  if (!byteCount) throw new Error('Image response is empty')
  const buffer=Buffer.concat(chunks,byteCount)
  const outDir=path.resolve(getFlag(args,'--out','.forma-review/assets/selected'))
  await mkdir(outDir,{recursive:true})
  const base=safeSlug(candidate.title.replace(/^File:/i,''))
  const imagePath=path.join(outDir,`${base}.${extensions[mime]}`)
  const manifestPath=path.join(outDir,`${base}.asset.json`)
  for (const targetPath of [imagePath,manifestPath]) {
    try { await stat(targetPath); throw new Error(`Refusing to overwrite existing file: ${targetPath}`) } catch (error) { if (error.code!=='ENOENT') throw error }
  }
  await writeFile(imagePath,buffer,{flag:'wx'})
  const manifest={tool:'Forma Visual Scout',asset:imagePath,source:'Wikimedia Commons',title:candidate.title,sourcePage:candidate.sourcePage,originalUrl:candidate.originalUrl,stagedUrl:candidate.downloadUrl,creator:candidate.creator||'Not clearly listed; review before use',credit:candidate.credit||candidate.creator||'Creator attribution must be checked on the source page',license:candidate.license,mediaType:mime,dimensions:{width:candidate.width,height:candidate.height},stagedAt:new Date().toISOString(),modified:false,approval:'Staged for review only; not approved or copied into the website'}
  await writeFile(manifestPath,JSON.stringify(manifest,null,2)+'\n',{flag:'wx'})
  const attributionPath=path.join(outDir,'ATTRIBUTION.md')
  const attribution=`# Staged asset attribution\n\n- **File:** ${path.basename(imagePath)}\n- **Creator/credit:** ${manifest.credit}\n- **Source page:** ${candidate.sourcePage}\n- **License:** ${candidate.license.name}${candidate.license.url?` ([license details](${candidate.license.url}))`:''}\n- **Review status:** staged only; verify the exact license terms and project compatibility before use.\n`
  await writeFile(attributionPath,attribution,{flag:'a'})
  process.stdout.write(JSON.stringify({staged:imagePath,manifest:manifestPath,attribution:attributionPath,status:'review-only'},null,2)+'\n')
}

function showSources() {
  for (const group of [...new Set(sources.map(item=>item.group))]) {
    process.stdout.write(`\n${group}\n`)
    for (const item of sources.filter(entry=>entry.group===group)) process.stdout.write(`  ${item.name.padEnd(20)} ${item.url}\n`)
  }
  process.stdout.write('\nGallery and portfolio links are for visual research, not automatic image downloads. Use official asset terms and per-file licenses.\n')
}

async function main() {
  const args=process.argv.slice(2)
  if (!args.length || args.includes('--help') || args.includes('-h')) { process.stdout.write(helpText+'\n'); return }
  if (args[0]==='sources') { showSources(); return }
  if (args[0]==='audit') {
    const url=positional(args.slice(1),['--out'])[0]
    if (!url) throw new Error('Provide a public URL: audit https://example.com')
    await auditSite(url,getFlag(args,'--out','.forma-review/site'))
    return
  }
  if (args[0]==='image-audit') {
    const image=positional(args.slice(1),['--site-report','--out'])[0]
    if (!image) throw new Error('Provide a local image file: image-audit ./path/to/image.jpg')
    await auditImage(image,getFlag(args,'--out','.forma-review/image-analysis'),getFlag(args,'--site-report',''))
    return
  }
  if (args[0]==='pixelize') {
    const image=positional(args.slice(1),['--mode','--cell-size','--dither','--contrast','--edge-threshold','--background','--ink','--shadow','--highlight','--ramp','--out'])[0]
    if (!image) throw new Error('Provide a local image file: pixelize ./path/to/image.jpg')
    await pixelizeImage(image,args)
    return
  }
  if (args[0]==='assets' && args[1]==='search') {
    const query=positional(args.slice(2),['--limit','--out']).join(' ')
    await searchCommons(query,getFlag(args,'--limit','8'),getFlag(args,'--out','.forma-review/assets'))
    return
  }
  if (args[0]==='assets' && args[1]==='stage') { await stageCommons(args.slice(2)); return }
  throw new Error('Unknown command. Run with --help for usage.')
}

main().catch(error=>{
  process.stderr.write(`Forma Visual Scout: ${error.message}\n`)
  process.exitCode=1
})
