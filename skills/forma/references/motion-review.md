# Motion review

Review motion as part of a task and as a delivered artifact. Establish whether it communicates the intended event, preserves truthful state, remains controllable and accessible, and survives the actual runtime or export path. Do not infer quality from a design preview alone.

## 1. Make the test reproducible

Record enough context for another reviewer to repeat the check:

| Context | Record |
|---|---|
| Build and target | Revision/build, route or scene, browser/device, operating system if relevant |
| Starting conditions | Viewport, scale/zoom, theme, fixture/account state, network or service condition |
| Access path | Pointer, keyboard, touch, screen reader/assistive technology, reduced-motion preference |
| Trigger and expectation | Exact action, expected semantic message, expected settled state and recovery |
| Capture/export | Output file/version, dimensions, cadence, duration, codec, audio/alpha, loop policy |

Write the intended message in one sentence. Use stable fixture data, reset to a known starting state, and record exact steps. Preserve a screen recording or frames for visual timing claims, and traces/logs for state or performance claims. Mark each assertion as directly observed, automated, inferred, or unavailable.

## 2. Triage by consequence

| Severity | Examples | Decision |
|---|---|---|
| **Blocker** | Motion communicates false success/data; traps or loses focus; hides required content; breaks reduced-motion task access; output lacks a required segment or is materially invalid | Stop the affected release/delivery until corrected or the behavior is disabled |
| **Major** | Delays a frequent action, masks hierarchy, repeats without appropriate control, misleads about progress, or fails on a supported input path | Fix before release or document a narrow, accountable exception and mitigation |
| **Moderate** | Interruptions or resets are inconsistent, visible jank impairs comprehension, containment fails, or an unnecessary wait remains | Plan and verify a bounded correction |
| **Polish** | Timing, path, or emphasis refinement after correctness, access, and stability pass | Improve when useful without obscuring higher-priority work |

Record affected users, occurrence, task importance, reversibility, confidence, and evidence. Do not downgrade a severe state-integrity or access failure because it is visually subtle.

## 3. Execute the behavior pass

For each relevant semantic behavior:

1. Reset to the documented initial state and verify it visually and, where possible, in product data.
2. Trigger via the supported pointer, keyboard, or touch route; record time to acknowledgement separately from time to outcome.
3. Observe intermediate states only where they carry meaning, then confirm the authoritative settled result.
4. Repeat or interrupt before completion: toggle quickly, navigate away, dismiss, cancel, submit again, or deliver a newer value as applicable.
5. Exercise success, rejection, timeout, offline/service failure, and retry where the product supports these conditions.
6. Repeat with reduced motion, narrow layout, zoom/text enlargement, and background/visibility changes where relevant.
7. Confirm the task still works if motion is skipped, cancelled, or unavailable; verify focus and recovery.

For persistent ambient behavior, leave it running long enough to observe recurrence, move it offscreen, background the tab, return, and stop it. Check both intended pause/resume behavior and unnecessary CPU/battery use.

For an exported showcase, inspect a canonical still, opening, each key transition, final settled state, reset, and loop seam (if any). Compare the encoded output at full resolution and intended playback size. Check masks/clips, frame bounds, motion continuity, and whether helper elements appear in the final artifact.

## 4. Diagnose from symptoms

| Symptom | Investigate first | Corrective direction |
|---|---|---|
| Abrupt or confusing | Is the trigger visible? Are unrelated objects crossing? Is source/destination identity valid? | Clarify event and continuity; add an intermediate pose only if orientation improves |
| Slow response | Input-to-acknowledgement, delayed focus, serial waits, long travel, idle gaps | Remove idle time and unblock the task; do not lengthen essential acknowledgement to beautify it |
| Distracting | Simultaneous focal changes, recurrence, large moving areas, repeated entrances | Keep state-bearing motion; reduce optional movement and concurrency |
| State disagreement | Optimistic UI, stale response, callback order, queued input, unmount cleanup | Bind outcome to authoritative state; cancel or version obsolete work |
| Inconsistent | Same semantic role across components/platforms, token overrides, nested transitions, multiple owners | Consolidate accidental drift; retain documented platform/task exceptions |
| Jank or layout shift | Paint/composite cost, synchronous measurements, fonts/images, reflow, competing timelines | Profile representative hardware; reduce work or reserve stable layout space |
| Bad ending/reset | Completion callback, cancellation, focus return, timer cleanup, hidden helper state | Reset every dependent property; test end and direct seek, not just visual fade |
| Reduced motion fails | Late preference detection, content gated on animation, residual spatial effects | Provide a stable equivalent from first render with the same meaning and outcome |

Capture before/after evidence for significant timing or layout fixes. Do not diagnose a performance issue solely by watching on an unrecorded device.

## 5. Acceptance matrix

Select applicable cases and record pass/fail/not tested with evidence:

| Case | Acceptance evidence |
|---|---|
| Pointer and hover | Hover is optional, reversible, and does not flicker on re-entry |
| Keyboard | Focus stays visible; activation, dismissal, and return focus are predictable |
| Touch | No hover dependency, precision-timing demand, or blocked target during movement |
| Reduced motion | Same content, status, and task result with nonessential movement removed |
| Narrow viewport / zoom | No essential clipping; controls and focus remain reachable |
| Theme / contrast | State and content remain perceivable; no disorienting flash or color-only meaning |
| Slow / failed request | Pending and outcome are truthful; cancellation/recovery works where offered |
| Rapid repeat / stale response | Latest authoritative state wins; callbacks do not resurrect old state |
| Background / hidden surface | Timers and loops follow the declared pause/resume/cleanup policy |
| Sustained use | Repeated feedback is tolerable; persistent motion can be controlled when needed |
| Export | Dimensions, crop, duration, cadence, audio/alpha, ending, and loop match the brief |
| Assistive access | Relevant announcements, semantics, focus, and equivalent task route are verified |

“Not tested” is a valid status; replace it with the exact limitation and a proposed test, not an implied pass.

## 6. Release gates and honest reporting

Before releasing a shared motion change or export, confirm:

- the intended semantic message and authoritative result are correct;
- representative supported inputs work, including a rapid-interruption case;
- focus, reduced-motion, responsive, and relevant assistive paths are verified;
- no essential content depends on playback or animation completion;
- performance is acceptable on the named representative environment, or the claim is withheld;
- capture/export matches the declared profile and the actual final file was inspected;
- open blockers are resolved or the affected path is disabled; remaining exceptions have an owner, rationale, scope, and follow-up;
- source revision, test environment, evidence, and output version are recorded.

A concise report should state the behavior reviewed, intended message, environment, cases performed, outcome, evidence references, unresolved risks, and exact limitations. Do not claim universal compatibility, a frame-rate target, exact source fidelity, or accessibility conformance without the corresponding test scope and results. Link related implementation guidance through [motion design](motion-design.md) and [motion production](motion-production.md).
