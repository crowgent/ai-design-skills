export function renderPixelGlyphs(image,options={}) {
  const {width,height,data}=image
  if (!Number.isInteger(width)||!Number.isInteger(height)||width<1||height<1||!data||data.length!==width*height*4) throw new Error('Expected valid RGBA pixel data and positive image dimensions')
  const clamp=(value,min=0,max=1)=>Math.max(min,Math.min(max,value))
  const toLinear=value=>value<=0.04045?value/12.92:((value+0.055)/1.055)**2.4
  const fromLinear=value=>value<=0.0031308?12.92*value:1.055*Math.pow(value,1/2.4)-0.055
  const parseHex=value=>{
    const hex=String(value||'').replace('#','')
    if (!/^(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex)) throw new Error(`Invalid color token: ${value}`)
    const full=hex.length===3?[...hex].map(char=>char+char).join(''):hex
    return [parseInt(full.slice(0,2),16),parseInt(full.slice(2,4),16),parseInt(full.slice(4,6),16)].map(channel=>toLinear(channel/255))
  }
  const toHex=value=>Math.round(clamp(value)*255).toString(16).padStart(2,'0')
  const fromRgbLinear=value=>toHex(fromLinear(value))
  const blend=(a,b,t)=>a+(b-a)*t
  const mode=options.mode||'source'
  if (!['source','mono','duotone'].includes(mode)) throw new Error('Mode must be source, mono, or duotone')
  const background=parseHex(options.background||'#f5f4ef')
  const ink=parseHex(options.ink||'#18323d').map(fromRgbLinear).join('')
  const shadow=parseHex(options.shadow||'#18323d')
  const highlight=parseHex(options.highlight||'#f5d66e')
  const ramp=[...(options.ramp||'MWQ8&%x+=:·. ')]
  if (ramp.length<4||ramp.length>32) throw new Error('The glyph ramp must contain between 4 and 32 characters')
  const cellHeight=Math.round(clamp(Number(options.cellSize)||12,4,48))
  const cellWidth=cellHeight*0.62
  const columns=Math.max(1,Math.ceil(width/cellWidth))
  const rows=Math.max(1,Math.ceil(height/cellHeight))
  const bayer=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]]
  const samples=new Array(columns*rows)
  for (let row=0;row<rows;row++) {
    const y0=Math.floor(row*height/rows)
    const y1=Math.max(y0+1,Math.floor((row+1)*height/rows))
    for (let column=0;column<columns;column++) {
      const x0=Math.floor(column*width/columns)
      const x1=Math.max(x0+1,Math.floor((column+1)*width/columns))
      let red=0,green=0,blue=0,luminance=0,count=0,minimum=1,maximum=0
      for (let y=y0;y<y1;y++) for (let x=x0;x<x1;x++) {
        const index=(y*width+x)*4
        const alpha=data[index+3]/255
        const r=toLinear(data[index]/255)*alpha+background[0]*(1-alpha)
        const g=toLinear(data[index+1]/255)*alpha+background[1]*(1-alpha)
        const b=toLinear(data[index+2]/255)*alpha+background[2]*(1-alpha)
        const l=0.2126*r+0.7152*g+0.0722*b
        red+=r;green+=g;blue+=b;luminance+=l;count++
        minimum=Math.min(minimum,l);maximum=Math.max(maximum,l)
      }
      samples[row*columns+column]={red:red/count,green:green/count,blue:blue/count,luminance:luminance/count,range:maximum-minimum}
    }
  }
  const lumAt=(column,row)=>samples[Math.max(0,Math.min(rows-1,row))*columns+Math.max(0,Math.min(columns-1,column))].luminance
  const ditherValue=Number(options.dither??0.16)
  const contrastValue=Number(options.contrast??1.08)
  const edgeValue=Number(options.edgeThreshold??0.2)
  const dither=clamp(Number.isFinite(ditherValue)?ditherValue:0.16,0,0.8)
  const contrast=clamp(Number.isFinite(contrastValue)?contrastValue:1.08,0.5,2)
  const edgeThreshold=clamp(Number.isFinite(edgeValue)?edgeValue:0.2,0.02,0.8)
  const useEdges=options.edges!==false
  const cells=[]
  for (let row=0;row<rows;row++) for (let column=0;column<columns;column++) {
    const sample=samples[row*columns+column]
    const gx=(lumAt(column+1,row)-lumAt(column-1,row))*0.5
    const gy=(lumAt(column,row+1)-lumAt(column,row-1))*0.5
    const edge=Math.hypot(gx,gy)
    const bias=((bayer[row%4][column%4]+0.5)/16-0.5)*dither
    const adjusted=clamp((sample.luminance-0.5)*contrast+0.5+bias)
    const rampIndex=Math.round((1-adjusted)*(ramp.length-1))
    let glyph=ramp[rampIndex]
    let edgeGlyph=false
    if (useEdges&&edge>=edgeThreshold&&sample.range>=edgeThreshold) {
      const angle=Math.atan2(gy,gx)+Math.PI/2
      const direction=((Math.round(angle/(Math.PI/2))%4)+4)%4
      glyph=['─','╲','│','╱'][direction]
      edgeGlyph=true
    }
    let color
    if (mode==='mono') color=`#${ink}`
    else if (mode==='duotone') {
      const amount=adjusted
      color=`#${fromRgbLinear(blend(shadow[0],highlight[0],amount))}${fromRgbLinear(blend(shadow[1],highlight[1],amount))}${fromRgbLinear(blend(shadow[2],highlight[2],amount))}`
    } else color=`#${fromRgbLinear(sample.red)}${fromRgbLinear(sample.green)}${fromRgbLinear(sample.blue)}`
    cells.push({column,row,glyph,color,luminance:Number(sample.luminance.toFixed(4)),edge:edgeGlyph})
  }
  return {columns,rows,cellWidth,cellHeight,outputWidth:Math.ceil(columns*cellWidth),outputHeight:rows*cellHeight,mode,ramp:ramp.join(''),dither,contrast,edges:useEdges,cells}
}
