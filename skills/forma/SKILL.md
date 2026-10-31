---
name: forma
description: "A product-first workflow for designing, building, and improving websites, apps, responsive interfaces, visual systems, and purposeful motion. Use when planning a new experience, redesigning or auditing an existing interface, researching licensed imagery, or checking accessibility, interaction states, and handoff. Includes modular design guides, optional Visual Scout tools, and deterministic pixel-glyph previews."
---
# Forma

Forma is a design and implementation playbook for digital experiences. It helps an agent move from **user need → product evidence → design decisions → working interface → verified handoff**. It is not a visual preset; its values and examples must be adapted to the product, audience, platform, and real constraints.

> **Working rule:** clarify what must become easier to understand or do before choosing what should look different.

## The Forma loop

| Stage | Work | Exit condition |
|---|---|---|
| **01 · Frame** | Identify audience, task or offer, context, constraints, and definition of success | The user need and scope can be stated plainly |
| **02 · Inspect** | Review source, routes, real render, brand assets, states, evidence, and failure paths | Observations are separated from assumptions |
| **03 · Decide** | Create a design thesis, information order, token roles, and high-risk interaction model | Major choices have a reason and unsupported claims are excluded |
| **04 · Make** | Build the smallest complete path with realistic content and the existing stack | Primary and recovery paths work in context |
| **05 · Prove** | Test representative screens, states, devices, accessibility, and motion behavior | Blockers are fixed; remaining limits are named |
| **06 · Handoff** | Summarize decisions, files/preview, tested conditions, open issues, and next steps | The next person can understand and continue the work |

Scale each stage to the request. A single control fix does not need a formal strategy deck. A public launch, high-stakes claim, or source-faithful showcase needs a more explicit plan.

## 1. Route the work

Choose the smallest relevant mode and load its guide:

| Request | Start here | Add these references when needed |
|---|---|---|
| Landing page, campaign, offer, or onboarding | [Design strategy](references/design-strategy.md) | [Visual systems](references/visual-systems.md), [Quality & audits](references/quality-and-audits.md), [Tokens](references/design-tokens.md) |
| Product UI, dashboard, responsive system | [Visual systems](references/visual-systems.md) | [Tokens](references/design-tokens.md), [Quality & audits](references/quality-and-audits.md) |
| Existing screen critique or redesign | [Quality & audits](references/quality-and-audits.md) | [Design strategy](references/design-strategy.md), [Visual systems](references/visual-systems.md) |
| Visual research, site audit, or image sourcing | [Visual research and assets](references/visual-research-and-assets.md) | [Visual systems](references/visual-systems.md), [Tokens](references/design-tokens.md), [Quality & audits](references/quality-and-audits.md) |
| Decorative pixel-glyph image treatment | [Visual systems](references/visual-systems.md) | [Visual research and assets](references/visual-research-and-assets.md), [Tokens](references/design-tokens.md), [Quality & audits](references/quality-and-audits.md) |
| Interaction animation or product motion | [Motion design](references/motion-design.md) | [Tokens](references/design-tokens.md), [Motion review](references/motion-review.md) |
| Source-based showcase, loop, or export | [Motion production](references/motion-production.md) | [Motion design](references/motion-design.md), [Motion review](references/motion-review.md) |

Read only the reference sections that will change a decision. Do not load every guide by default.

## Tool-assisted visual research

When a public target site or candidate image benefits from repeatable inspection, resolve the bundled [`visual-scout.mjs`](scripts/visual-scout.mjs) relative to this `SKILL.md`, then invoke it from the target project directory. It requires Node.js 20+; the browser audit and image analysis require Playwright and Chromium installed in that project. Read [Visual research and assets](references/visual-research-and-assets.md) before selecting or staging media.

```bash
node <forma-skill>/scripts/visual-scout.mjs sources
node <forma-skill>/scripts/visual-scout.mjs audit https://public-site.example --out .forma-review/site
node <forma-skill>/scripts/visual-scout.mjs assets search "specific subject and visual context" --limit 8
node <forma-skill>/scripts/visual-scout.mjs image-audit .forma-review/assets/selected/asset.jpg --site-report .forma-review/site/visual-scout-report.json
node <forma-skill>/scripts/visual-scout.mjs pixelize .forma-review/assets/selected/asset.jpg --mode duotone --cell-size 12 --out .forma-review/pixel-art
```

Use the audit to identify questions for a human review, not to generate an automatic redesign. Keep gallery and portfolio sites as linked visual references; do not scrape or download their work as assets without explicit rights. Search licensed repositories for subject-fit candidates, verify each file's actual terms and attribution, then stage only a chosen asset with `--license-checked --confirm`. Keep it in preview/review scope and preserve the manifest. Do not silently insert random imagery or publish a live-site change.

Treat pixel-glyph rendering as an optional visual accent, never a default site-wide skin. Adapt palette, glyph density, edge treatment, and placement to the product thesis; keep meaningful content readable and provide the original image or accessible equivalent when the rendered art is decorative or loses detail.

## 2. Frame the problem before styling

Extract the user's brief and inspect the actual product where available. Identify:

- **Who:** the primary audience and their familiarity with the product.
- **Why now:** the situation or trigger that brings them to this screen.
- **What:** the task, offer, decision, or result they need.
- **Proof:** facts, product behavior, and evidence that support the experience.
- **Constraints:** existing design system, framework, assets, policies, languages, devices, and delivery target.
- **Success:** the observable result and the guardrails that must remain intact.

Keep supplied facts, direct observations, assumptions, and illustrative content distinguishable. Never invent pricing, capabilities, customer proof, outcomes, product status, or legal terms. Ask for clarification only if a missing answer could change product meaning, cost, scope, or user risk; otherwise state a bounded assumption and proceed.

## 3. Write a concise design thesis

Describe the problem as a design argument: **the user needs X; the product can truthfully provide Y; the experience will make that clear through Z.** Then select the essential content and interaction decisions that support it. If a direction depends on unresolved facts, mark the dependency instead of hiding it in copy or visuals.

Borrow from references at the level of a principle—such as hierarchy, density, material, or rhythm—not their branded composition, exact examples, or wording. Make the result recognizably belong to this product.

## 4. Build a complete path

Inspect and implement the states that belong to the actual experience: initial, active, focus, selected, pending, empty, error, completion, cancellation, and recovery. Use realistic content and data ranges. Keep the working product in its established stack unless a concrete technical or usability issue requires a change.

For animation, write the real trigger and state transition before choosing an effect. For conversion work, make the promise, evidence, terms, action, and post-action result consistent. For visual systems, map choices to reusable roles and verify them across screens and themes rather than styling only the hero.

## 5. Review by evidence and impact

Test the primary task and the most consequential alternate or failure path. Inspect appropriate viewport sizes, keyboard operation, focus visibility, zoom/reflow, reduced motion, contrast, content overflow, real destinations, and the actual rendered output. Use project build, lint, and tests when available. Automated results supplement—not replace—visual and assistive-technology checks.

Fix false product states, blocked tasks, inaccessible essential content, and broken recovery before cosmetic refinement. Report only tests performed. State clearly what could not be tested.

## Non-negotiable boundaries

- Do not silently change product promises, features, pricing, eligibility, privacy/consent behavior, or material terms.
- Do not trade task clarity or accessibility for a visual trend, animation, or reference match.
- Do not pass illustrative examples off as real user, customer, or performance data.
- Do not claim accessibility certification, conversion lift, performance, visual fidelity, or tool usage without evidence.
- Do not ship showcase-only choreography as live product behavior unless the user asks for it and the interface remains correct without the animation.

## Handoff format

For meaningful work, include a short record:

```text
Goal and audience:
Design thesis:
Key decisions:
Changed files or preview:
Checks actually performed:
Assumptions / known limitations:
Next useful step:
```

For a small fix, return the result and one concise verification note instead of filling every field.
