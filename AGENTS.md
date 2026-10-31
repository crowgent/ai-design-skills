# Forma · Agent Playbook

> **Purpose** — Guide agents working with Forma on product design, interface improvements, visual systems, and purposeful motion. The complete reusable workflow lives in [`skills/forma/SKILL.md`](skills/forma/SKILL.md).

**Design with evidence. Build with character. Verify every state.**

[Setup](#1-set-up-forma) · [Choose a guide](#2-route-the-task) · [Workflow](#3-work-in-six-passes) · [Quality boundaries](#4-protect-the-product) · [Handoff](#5-report-the-work)

---

## 1. Set up Forma

If Forma is not installed in the target agent, run:

```bash
npx --yes skills add crowgent/forma --all --global --copy
```

This installs the repository’s skills to all supported agents detected by the [Skills CLI](https://github.com/vercel-labs/skills), globally across projects. `--copy` installs independent copies. The command requires Node.js 22.20+, npm/npx, and network access. For project-only installation, remove `--global`.

The installer adds the skill package; it does **not** load this root `AGENTS.md` in a different project. Agents working in this repository should read this file directly. In another project, provide [the Forma agent guide](https://github.com/crowgent/forma/blob/main/AGENTS.md) separately. Chat-only agents or agents unsupported by the CLI need the files imported through their own workflow; do not claim automatic installation.

## 2. Route the task

Start with [`skills/forma/SKILL.md`](skills/forma/SKILL.md), then load only the guide that can change a decision.

| Work requested | Start with | Add only when useful |
|---|---|---|
| Landing page, campaign, offer, or onboarding | [`design-strategy.md`](skills/forma/references/design-strategy.md) | [`visual-systems.md`](skills/forma/references/visual-systems.md), [`design-tokens.md`](skills/forma/references/design-tokens.md), [`quality-and-audits.md`](skills/forma/references/quality-and-audits.md) |
| Product UI, dashboard, or responsive component system | [`visual-systems.md`](skills/forma/references/visual-systems.md) | [`design-tokens.md`](skills/forma/references/design-tokens.md), [`quality-and-audits.md`](skills/forma/references/quality-and-audits.md) |
| Existing screen critique or UX audit | [`quality-and-audits.md`](skills/forma/references/quality-and-audits.md) | [`design-strategy.md`](skills/forma/references/design-strategy.md), [`visual-systems.md`](skills/forma/references/visual-systems.md) |
| Visual research, public-site review, or licensed image sourcing | [`visual-research-and-assets.md`](skills/forma/references/visual-research-and-assets.md) | [`visual-systems.md`](skills/forma/references/visual-systems.md), [`quality-and-audits.md`](skills/forma/references/quality-and-audits.md) |
| Product interaction or interface motion | [`motion-design.md`](skills/forma/references/motion-design.md) | [`design-tokens.md`](skills/forma/references/design-tokens.md), [`motion-review.md`](skills/forma/references/motion-review.md) |
| Source-faithful motion showcase, capture, or export | [`motion-production.md`](skills/forma/references/motion-production.md) | [`motion-design.md`](skills/forma/references/motion-design.md), [`motion-review.md`](skills/forma/references/motion-review.md) |
| Installer targets or dated model/agent landscape | [`CATALOG.md`](CATALOG.md) | Confirm current support and terms from the linked source |

## 3. Work in six passes

1. **Frame** the audience, task, context, constraints, and observable success.
2. **Inspect** the existing product, repository, rendered output, real states, content, and available evidence.
3. **Decide** the design thesis and information hierarchy before choosing surface treatments.
4. **Build** a complete user path in the project’s established stack, including relevant pending, empty, error, and recovery states.
5. **Prove** the result at useful viewport sizes and with keyboard, focus, reduced motion, and realistic content where applicable.
6. **Hand off** changed files, important decisions, checks actually run, and untested conditions.

Scale the work to the request. Keep a bounded fix small; review a public launch or high-risk interaction more deeply.

## 4. Protect the product

- Keep confirmed facts, direct observations, assumptions, and examples distinct. Never invent pricing, features, metrics, customer proof, legal terms, or product outcomes.
- Preserve the existing framework, behavior, and useful design system unless evidence shows a specific problem.
- Make interaction states truthful. Acknowledge input promptly, but show success only after the real operation confirms it. Motion must not be required to understand status or complete a task.
- Treat galleries and competitor sites as visual references, not asset libraries. Verify the exact license, attribution, and intended use before using an image; never insert random imagery.
- Use Visual Scout and Pixel Glyph only when they serve the brief. Follow [`visual-research-and-assets.md`](skills/forma/references/visual-research-and-assets.md); its scripts create review artifacts and do not authorize edits or publishing.
- Test the rendered interface, not just its source. Do not claim certification, performance, or accessibility conformance without evidence.

## 5. Report the work

For meaningful work, leave a concise handoff:

```text
Goal and audience:
Key design decision:
Files or preview changed:
Checks actually performed:
Assumptions and known limits:
Next useful step:
```

For a small fix, report the result and one specific verification note. If a command, browser, dependency, or permission was unavailable, say so plainly.
