# Interface quality and audits

Use this guide to evaluate a working experience, diagnose a quality risk, or establish release confidence. Inspect the interface as people encounter it: rendered output, content, interaction, failure paths, and assistive access. Source review and automated scores are supporting evidence—not substitutes for observing a real task.

## Audit workflow

### 1. Set scope and capture a baseline

Record the route or artifact, build/revision, viewport, browser/device, theme, input method, user goal, initial state, and any account/data assumptions. Capture a screenshot or short recording for visual findings; retain a reproducible route and steps for behavioral ones. Note whether each observation was directly observed, inferred from code, or reported by someone else.

Bound the audit: identify the key task(s), high-risk claims or actions, relevant breakpoints, and intended launch surface. Do not imply that a sample review covers untested routes, devices, or states.

### 2. Describe findings with evidence

Use one concise record per issue:

| Field | What to capture |
|---|---|
| Finding | Observable condition, location, and reproducible steps |
| Consequence | Who is affected and what task, decision, or trust is at risk |
| Evidence | Screenshot/frame, console/network trace, DOM/state observation, test output, or source location |
| Severity | Rank using the scale below; explain uncertainty |
| Remedy | Smallest credible correction, including owner/dependency if known |
| Verification | Repeatable pass condition and environment |

Separate objective failure from preference. “The submit control has no keyboard focus indication” is testable; “the page feels unfinished” needs a specific observation before it becomes a finding. Group repeated instances only when the cause and remedy are shared; retain each affected location.

### 3. Rank by user consequence

| Rank | Definition | Release treatment |
|---|---|---|
| **P0 — Critical** | A core task is impossible or destructive; a result/claim is materially false; or there is serious safety, privacy, security, legal, or access harm | Stop release or disable the affected path pending resolution and explicit owner review |
| **P1 — High** | A primary flow is unreliable, important information is inaccessible or misleading, or many users face substantial friction | Resolve before launch unless an accountable owner accepts a documented, bounded exception |
| **P2 — Moderate** | A recoverable defect or recurring friction impairs comprehension, confidence, or efficiency | Schedule against user impact; verify the fix before closing |
| **P3 — Refinement** | Low-risk consistency or finish issue with no material task barrier | Address when it does not displace correctness or access work |

Severity is not a visual-size score. State affected users, frequency, task criticality, reversibility, and plausible harm. A low-frequency failure in a high-consequence path may still be P0/P1. Record confidence (observed, reproduced, or suspected) separately from severity.

## Inspect the whole experience

Use the rows that apply to the product and task. For each, record a concrete pass condition rather than a generic “looks good.”

| Dimension | Practical probes | Useful evidence |
|---|---|---|
| Purpose and hierarchy | Identify the page purpose and next action without explanation; compare emphasis to task priority | First-view capture; task observation |
| Content and trust | Verify claims, units, dates, prices, attribution, consent, and terms against an authoritative source; distinguish example data from real data | Source-of-truth comparison; content inventory |
| Interaction and state | Exercise idle, focus, active, selected, disabled, pending, success, error, cancelled, and retry states where applicable; verify actual outcomes | Repro steps; state/network trace |
| Resilience | Try empty, partial, long, malformed, stale, delayed, offline, permission-denied, and server-error conditions | Fixtures; request log; screenshots |
| Responsive behavior | Check narrow and wide layouts, orientation, zoom/reflow, text enlargement, safe areas, and breakpoint edges | Viewport captures; overflow/focus checks |
| Accessibility | Complete the task by keyboard and with an assistive-technology path; check semantics, names, order, contrast, status, and motion | Manual notes plus automated findings |
| Performance and stability | Observe load, input feedback, layout movement, long work, image/font behavior, and optional animation under representative conditions | Browser trace/profile; device and network details |
| Security and privacy | Check sensitive data exposure, permission/consent choices, unsafe redirects or inputs, session/error leakage, and third-party boundaries relevant to the feature | Threat-specific test evidence; headers/logs where authorized |
| Public discovery | For indexable routes, check title/description, language, canonical/indexability, social preview, meaningful links, and content consistency | Rendered metadata/source and link check |

Do not manufacture defects to satisfy a checklist. A familiar visual convention is a finding only when evidence shows it damages clarity, access, trust, or product character.

## Interaction and recovery checks

For every consequential control, name the trigger, expected state change, source of truth, and recovery. Confirm that:

- controls expose an accurate action and destination; disabled, pending, and selected states are distinguishable;
- keyboard focus is visible, follows a sensible order, and is not hidden by overlays or sticky regions;
- async feedback acknowledges input promptly but does not present success before the operation succeeds;
- duplicate submissions are handled safely where repetition could cause harm;
- recoverable failures preserve user input and explain a viable next step;
- dismiss/cancel, browser back, refresh, and reopening do not leave stale or contradictory state;
- status is not communicated by color, sound, or movement alone.

A loading indicator is not proof of completion. Verify the authoritative result, including persisted data or the actual navigation target when feasible.

## Accessibility and inclusion

Use the applicable standard and product commitments as the review target. WCAG 2.2 AA can be a useful baseline when no stronger target is specified, but a checklist run is not a conformance certification. Test the task, not just isolated components.

- Verify semantic landmarks, heading order, labels, accessible names, error associations, and meaningful alternative text; decorative media should not create redundant announcements.
- Navigate and activate with keyboard only. Check focus visibility, order, trapping, restoration, and skip paths.
- Check text/non-text contrast across default, focus, selected, error, disabled, and overlay states. Do not treat color as the only differentiator.
- Test reflow, zoom, increased text size, target reachability, orientation where relevant, and content that is otherwise hover-only.
- Confirm dynamic status and validation are announced at an appropriate time without stealing focus or flooding speech.
- Check captions/transcripts for relevant media, accessible summaries for complex data graphics, and an equivalent path for drag-only interactions.
- Honor reduced-motion preferences while preserving information and task outcome; avoid flashing and unexpected movement.

Automated checks find classes of issues but cannot establish meaningful reading order, task equivalence, or usability with assistive technology. Record the exact assistive technology, browser, device, and gaps in coverage.

## Responsive, resilience, and performance probes

Choose viewports from the product's actual usage, then test just before and after each composition breakpoint. Check that long names, translated content, validation text, and enlarged type do not overlap, truncate essential information, or force horizontal scrolling. Ensure sticky UI does not obscure focused controls, safe-area content, consent choices, or reading position.

Test missing images, delayed fonts, slow/failed requests, empty results, large result sets, and validation at the edges—not only ideal sample content. Prefer an explicit, recoverable fallback to silent omission. Confirm a mobile adaptation preserves the task and required terms.

Inspect performance where it changes the experience: critical-content loading, image/font cost, layout shifts, long tasks, third-party scripts, and repeated timers. Defer non-critical media; do not defer the asset needed for the immediate primary view without reason. Pause optional work when hidden and stop it when obsolete. Make numerical claims only from a named representative device, conditions, and measurement method.

## Security, trust, and public launch

Scope security checks to the feature and authorization: confirm sensitive values are not exposed in UI, URLs, logs, or errors; user content is treated safely; external links and redirects have expected destinations; permissions and consent are understandable and reversible where promised; and third-party data sharing matches the disclosed behavior. Escalate suspected vulnerabilities rather than probing beyond authorization.

Before a public release, verify titles, descriptions, language, canonical and robots behavior, social cards, internal links, and that structured data (if present) agrees with visible content. Metadata can improve interpretation but does not guarantee search placement or rich results. Verify product claims, pricing/terms, endorsements, and required notices with their accountable source; route regulated or high-consequence claims to qualified review.

For experiments, define the intended outcome, guardrails, event boundaries, and a rollback/stop condition. A click is not necessarily task completion. Avoid capturing sensitive values in analytics, and verify event firing at the boundary actually intended.

## Finding lifecycle and release gate

| Gate | Evidence required |
|---|---|
| Scope understood | Tested routes/tasks, environments, exclusions, and assumptions recorded |
| Critical paths work | Core task completed on supported input path; important failure and recovery exercised |
| Access reviewed | Keyboard, responsive, contrast/semantics, and reduced-motion checks relevant to the change recorded |
| Trust and data correct | Material claims, outcomes, consent, and analytics boundaries checked against sources |
| Stability acceptable | Relevant automated tests/build pass; meaningful manual checks and known regressions recorded |
| Findings dispositioned | P0/P1 resolved or affected path held; remaining issues have owner, rationale, and follow-up |
| Launch details checked | Relevant links, metadata/indexability, support/error route, and rollback or disable path confirmed |

After a change, rerun the original steps and verify the stated pass condition. Close findings only with evidence. Report what was tested, what was not, which failures remain, and any accepted risk; a score or green build alone is not a quality verdict. For shared visual values, consult [design tokens](design-tokens.md) where available, without treating token conformance as proof of usability.
