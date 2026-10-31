<div align="center">
  <p><sub>PRODUCT DESIGN · VISUAL SYSTEMS · INTERFACE MOTION</sub></p>
  <h1>Forma</h1>
  <p><strong>Design with evidence. Build with character. Verify every state.</strong></p>
  <p>A modular AI design skill for turning real product needs into clear, distinctive, accessible digital experiences.</p>
  <p>
    <a href="#install-forma">Install</a> &nbsp;·&nbsp;
    <a href="#how-forma-works">Workflow</a> &nbsp;·&nbsp;
    <a href="#guide-library">Guides</a> &nbsp;·&nbsp;
    <a href="./AGENTS.md">Agent playbook</a> &nbsp;·&nbsp;
    <a href="#visual-scout">Visual Scout</a>
  </p>
</div>

---

## What Forma is

Forma gives AI agents a practical way to move from a product brief to a working, reviewed interface. It starts with the audience, task, evidence, and constraints; then guides design direction, responsive implementation, interaction states, and a clear handoff.

**Forma is a method, not a theme pack.** It does not force one palette, layout, component style, image treatment, or animation onto every project. It helps an agent make choices that fit the product and explain why they fit.

| Clear | Distinct | Dependable |
|---|---|---|
| Organize content around a real user task. | Shape typography, color, imagery, composition, and motion around a design thesis. | Check responsive behavior, accessibility, failure states, and handoff limits. |

## Install Forma

Install Forma globally for all supported agents detected by the [Skills CLI](https://github.com/vercel-labs/skills):

```bash
npx --yes skills add crowgent/forma --all --global --copy
```

Requires **Node.js 22.20 or later**, npm/npx, and network access. `npx` runs the CLI on demand; `--copy` installs independent copies. Remove `--global` to install into the current project instead. See the [official command reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md#skills-add) for current options.

The CLI installs the skill, not this repository’s root [`AGENTS.md`](./AGENTS.md). Agents working here should read that file; when using Forma elsewhere, share the [agent guide](https://github.com/crowgent/forma/blob/main/AGENTS.md) separately.

## How Forma works

Forma uses six passes. Scale them to the task rather than turning every request into a heavyweight process.

1. **Frame** the audience, task, context, constraints, and success condition.
2. **Inspect** the existing product, content, behavior, states, and evidence.
3. **Decide** the design thesis, information order, visual direction, and interaction model.
4. **Build** a complete responsive path in the project’s established stack.
5. **Prove** representative states, accessibility, viewport behavior, and motion.
6. **Hand off** the changed files, actual checks, assumptions, and remaining limits.

Start with the user’s task. Do not invent product facts to fill gaps. Keep examples visibly illustrative, and preserve the behavior that already works.

## Guide library

Begin with [`skills/forma/SKILL.md`](./skills/forma/SKILL.md). It routes the agent to the smallest useful reference; the guides are designed to be loaded as needed.

| Guide | Use it for |
|---|---|
| [Design strategy](./skills/forma/references/design-strategy.md) | Audience, evidence, decision journeys, content order, and design thesis |
| [Visual systems](./skills/forma/references/visual-systems.md) | Art direction, layout, typography, color, imagery, charts, and component contracts |
| [Design tokens & UI recipes](./skills/forma/references/design-tokens.md) | Color roles, contrast, type, spacing, surfaces, states, and starter CSS |
| [Visual research & assets](./skills/forma/references/visual-research-and-assets.md) | Reference sites, public-page audits, image provenance, licensing, and pixel-glyph previews |
| [Quality & audits](./skills/forma/references/quality-and-audits.md) | Severity-led critique, accessibility, responsive checks, resilience, SEO, and release readiness |
| [Motion design](./skills/forma/references/motion-design.md) | Intent-led motion, choreography, state truth, consistency, and reduced-motion behavior |
| [Motion production](./skills/forma/references/motion-production.md) | Source fidelity, scene planning, deterministic capture, assets, and export |
| [Motion review](./skills/forma/references/motion-review.md) | Repeatable tests, diagnosis, acceptance criteria, and honest reporting |

## Visual Scout

Forma includes a two-module Node.js toolkit: the [Visual Scout CLI](./skills/forma/scripts/visual-scout.mjs) and [Pixel Glyph renderer](./skills/forma/scripts/pixel-lab.mjs). Visual Scout can inspect public pages, analyze local images, find image candidates on Wikimedia Commons, and produce an optional deterministic glyph-art preview. It writes review artifacts; it does not edit or publish a website.

The browser audit, image analysis, and pixel renderer require Node.js 20+, Playwright, and Chromium in the target project. Install the browser dependencies there:

```bash
npm install --save-dev playwright
npx playwright install chromium
```

Example commands from the Forma repository:

```bash
node skills/forma/scripts/visual-scout.mjs sources
node skills/forma/scripts/visual-scout.mjs audit https://your-public-site.example --out .forma-review/site
node skills/forma/scripts/visual-scout.mjs assets search "specific image subject and context" --limit 8
node skills/forma/scripts/visual-scout.mjs pixelize .forma-review/assets/selected/asset.jpg --mode duotone --cell-size 12 --out .forma-review/pixel-art
```

Pixel Glyph is an optional art direction, not a site-wide preset. Keep the source image unchanged and review the generated settings/provenance manifest. Before staging an image, verify its exact license and attribution; staging requires `--license-checked --confirm`. Design galleries remain inspiration references unless their work is explicitly licensed for reuse.

## Forma’s quality bar

- **Truth before polish:** claims and interface states match confirmed product behavior.
- **Distinct, not decorated:** hierarchy and content express the product; effects do not replace design decisions.
- **Complete, not screenshot-only:** important loading, empty, error, focus, and recovery states are considered.
- **Accessible without motion:** animation may clarify a change but never carries its only meaning.
- **Verified, not assumed:** report the checks performed and make untested conditions visible.

## Research catalog

[`CATALOG.md`](./CATALOG.md) is a dated, source-linked field guide for installer compatibility and a broader public agent/model landscape. It is not a runtime dependency of Forma. Confirm current support, license, and terms from the linked source before acting.
