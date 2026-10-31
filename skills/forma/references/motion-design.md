# Motion design

Use motion to make a real change easier to perceive, understand, or feel. Start with the user’s task and the product’s true state; choose the visual treatment afterward. Motion may be expressive, but it must not invent progress, success, data, or a spatial relationship that the interface does not actually have.

## Contents

- [1. Define the motion brief](#1-define-the-motion-brief)
- [2. Set an expressive direction](#2-set-an-expressive-direction)
- [3. Model states before frames](#3-model-states-before-frames)
- [4. Compose the choreography](#4-compose-the-choreography)
- [5. Choose properties by meaning](#5-choose-properties-by-meaning)
- [6. Set timing and easing](#6-set-timing-and-easing)
- [7. Govern reusable motion](#7-govern-reusable-motion)
- [8. Use patterns selectively](#8-use-patterns-selectively)
- [9. Adapt for access and context](#9-adapt-for-access-and-context)
- [10. Review the design](#10-review-the-design)
- [Further reading](#further-reading)

## 1. Define the motion brief

Name the job before choosing an effect. A transition may acknowledge an input, reveal related content, communicate a confirmed result, explain a mechanism, or add optional atmosphere. State which job matters most. If a static state communicates just as clearly, prefer the static state.

Record a compact brief for any motion that affects a task or appears across multiple screens:

```text
user task and context:
semantic job:
trigger and precondition:
source and authoritative destination states:
primary focal element:
intended tone and salience:
properties that change / remain fixed:
interrupt, repeat, cancel, and recovery behavior:
keyboard, touch, and focus behavior:
reduced-motion equivalent:
verification scenario:
```

Distinguish live product behavior from presentation-only choreography. Live behavior must follow the real event and authoritative result. A showcase may use a scripted sequence, but label it as a presentation and keep it separate from product state.

## 2. Set an expressive direction

Expression is a design decision, not a preset to apply everywhere. Translate the product’s language and use context into a few observable motion traits. Useful dimensions include energy, precision, warmth, weight, and restraint. Choose a dominant character and one supporting quality; avoid mixing several unrelated styles in a single interaction.

Turn those traits into a small motion grammar: how important surfaces enter, how routine feedback settles, how focus is emphasized, and which moments may be more expressive. Use the same grammar across related components, while allowing deliberate exceptions for platform convention, task risk, or content meaning.

Treat familiar animation techniques as optional tools:

- Use anticipation only when preparation improves comprehension and does not delay feedback.
- Use follow-through or a settling response only when it clarifies a real relationship between elements.
- Use an arc when it makes a path easier to follow or fits the object; direct movement is appropriate for deliberate, mechanical transitions.
- Use deformation or overshoot for expressive illustration when it suits the product. Avoid applying it automatically to controls, error states, text, or precision tasks.
- Use pauses to separate meaningful beats, not to make routine interactions feel theatrical.

A motion profile should describe when a treatment is appropriate and when it is not. Do not define brand character solely through a named easing curve or a single duration.

## 3. Model states before frames

Describe the product transition in language before storyboarding it:

```text
source state → user/system event → immediate acknowledgement → pending state → authoritative outcome → next step or recovery
```

Check the entire path, not just the successful animation:

- What is true and operable before the event?
- What immediate cue confirms that the input was received?
- What remains available while work is pending?
- Which result is confirmed by the actual product operation?
- What happens on rejection, timeout, cancellation, retry, or repeated input?
- What happens if navigation, dismissal, unmounting, or a newer response interrupts the transition?

Input acknowledgement is not outcome confirmation. A press, selection request, or optimistic update may respond immediately, but show success only when the real operation confirms it. Use indeterminate feedback when duration is unknown; show measured progress only when the system has a real measurement. Never animate invented data to make an interaction feel complete.

Keep essential content available if animation is skipped, delayed, unsupported, or fails. A route change, validation message, or confirmed result must not depend on an animation-completion callback.

## 4. Compose the choreography

Organize the scene by attention, not by the number of animated layers. Identify the focal element first. Supporting motion may explain a relationship or help with orientation. Ambient motion is optional and should remain peripheral. A simple press response may need only one property and one beat; there is no requirement to add secondary or background movement.

For a sequence that genuinely needs multiple beats, plan three possible phases:

1. **Establish:** show the source, trigger, or context if the viewer needs orientation.
2. **Act:** move the focal element or reveal the key information.
3. **Resolve:** settle into the authoritative destination state and allow it to be read.

Omit phases that add no information. Do not insert anticipation into a micro-interaction merely to create a story.

Preserve spatial and causal truth. Move a surface from its trigger only when that relationship is real. Maintain continuity only when the same content persists between states. Direction may imply navigation, arrival, dismissal, or hierarchy, so do not use it to suggest a destination the interface does not provide.

When coordinating elements:

- Lead with the most important change; make secondary motion quieter in distance, contrast, duration, or timing.
- Reveal dependent content after its container is ready. Do not delay independent information for ceremony.
- Order lists and related groups in the same direction people scan or read them, unless another order expresses a real relationship more clearly.
- Synchronize changes that mean “together”; stagger changes that mean “in sequence.” Related elements should share a timing character even when their start times differ.
- Let a departing item and the remaining layout respond as one coherent change. Avoid making the old and new arrangements appear valid at the same time.
- Keep the total sequence brisk. Judge end-to-end elapsed time, not only the duration of each element.

Controls should remain operable during transitions unless a real product constraint requires otherwise. Decide how rapid repeat behaves: retarget, queue, cancel, or settle immediately. A stale completion callback must not overwrite a newer state. When asynchronous work resolves mid-transition, reconcile to the authoritative result rather than animating toward an obsolete target.

## 5. Choose properties by meaning

Choose the smallest set of properties that communicates the change:

1. Select one **primary property** that carries the main meaning.
2. Add one **supporting property** only if it improves recognition, hierarchy, or depth.
3. Check that the combined signals agree with the actual state.

Use position to explain relocation or direction, scale to indicate a modest change in emphasis or proximity, and opacity to manage a reveal. For important outcomes, opacity alone is easy to miss or misread; reinforce it with text, iconography, shape, position, or another meaningful state cue. Never rely on color or motion alone for status.

Prefer transforms and opacity when they preserve legibility, hit targets, and layout stability. Animate layout when reflow itself explains a real change, but inspect measurement cost and surrounding movement. Be cautious with large-area filters, blur, repeated layout reads, broad shadows, and unconstrained scroll handlers. Profile the actual implementation; a property that is usually efficient can still be expensive in a complex scene.

Keep text crisp and readable during movement. Reserve space for content that appears if shifting the surrounding layout would disrupt reading. Focus order and clickable areas must match the settled geometry, not an intermediate animation frame.

## 6. Set timing and easing

Timing communicates urgency, weight, and relationship. Choose it after defining the semantic job and layout context. Account for interaction latency, travel distance, element prominence, content density, platform expectations, and how often a person will see the effect.

Use these as starting relationships, not fixed laws:

- Acknowledgement should be immediate; do not wait for a decorative lead-in.
- An entering element can decelerate into a stable position; an exiting element can accelerate away. A state change that remains in place often benefits from a balanced ease-in/ease-out.
- Linear motion is useful for constant-rate progress or intentionally mechanical movement. It often feels unnatural for ordinary spatial travel, but choose by meaning rather than banning a curve.
- A large travel may need more time than a small one, but a longer path is not permission to delay a frequent task. Simplify the path or reduce distance when responsiveness suffers.
- An exit may clear more decisively than its entrance, but do not force a fixed entrance-to-exit ratio onto every component.
- Repeated feedback should be shorter and quieter than a rare, consequential transition unless the product has a clear reason otherwise.

Test the animation at normal speed and in the real interface. Slow-motion inspection can reveal timing errors, but it cannot prove that the interaction feels responsive in use. Tune start delay, duration, easing, overlap, and settling separately rather than stretching the whole sequence to fix one problem.

Use [design tokens](design-tokens.md) for the shared timing and easing vocabulary. Keep tokens semantic—for example, acknowledgement, local reveal, context change, or optional ambience—and document their intent, safe use, reduced-motion behavior, and exceptions. Do not add component-local constants when the shared system already owns the behavior.

## 7. Govern reusable motion

Treat motion as part of the design system, not a collection of unrelated animation values. Before adding new tokens, audit representative screens and components for existing durations, curves, repeated sequences, and undocumented exceptions. Normalize accidental drift; keep a variation only when it serves a real semantic, platform, or accessibility need.

For each reusable motion role or preset, document:

- the state or interaction it serves;
- when it should and should not be used;
- the properties and sequence it owns;
- its timing and easing role, without overfitting to one component;
- the reduced-motion equivalent and input/focus behavior;
- supported contexts, platform overrides, and known limitations.

Apply the approved primitives where motion is authored, then review real consumers rather than relying on a guideline that teams must reinterpret from scratch. When changing a shared token, check representative controls, overlays, data updates, navigation, and interruption paths. Deprecate aliases deliberately and search for consumers before removal.

Keep motion design distinct from motion-production mechanics. Use [motion production](motion-production.md) for source-based reconstruction, deterministic timelines, capture, and export. Use [motion review](motion-review.md) for repeatable tests, severity, evidence, and release gates.

## 8. Use patterns selectively

### State feedback

Acknowledge an action quickly, then show the result supported by product state. For success, reveal a confirmed result and its next useful action. For errors, preserve entered information, associate the message with the affected control, and explain recovery. Do not shake every invalid field or use a pulse as a substitute for a clear label.

For loading, use indeterminate feedback when the duration is not known. Use determinate progress only from real measurements. Keep the control’s meaning available while pending, and define duplicate-submission behavior from the underlying operation.

### Entrance, exit, and relocation

Use an entrance when it helps identify new or related content. Choose translation, scale, mask, or opacity according to the information relationship, not habit. A dismissal should make the removal or destination clear; animate neighboring content only when the layout change helps explain the new arrangement.

For dialogs and menus, connect the surface to its trigger when that origin is meaningful. Make content available at the right time, manage focus correctly, and provide a valid return path on close. Read [design tokens](design-tokens.md) for shared surface roles and [motion review](motion-review.md) for interaction checks.

### Multi-element sequences

Use sequence order to make hierarchy or reading order easier to follow. Keep dependent elements together; introduce independent details only when each beat earns attention. If a long list or dashboard makes the reveal feel like waiting, reduce or remove the stagger. A stable, complete view is often better than an elaborate entrance.

### Ambient and continuous motion

Use ambience only when it contributes to tone or orientation. Keep it quiet relative to task-bearing content, stop or simplify it when it is offscreen or the tab is backgrounded, and clean up timers and listeners when it ends. Do not make a loop the only signal of status, urgency, or availability. Provide a way to pause or stop persistent, attention-demanding motion where applicable.

For Lottie or another pre-authored animation asset, keep semantic UI state, labels, and controls in the interface layer. Treat the animation as presentation, not as the source of truth for an operation. Use [motion production](motion-production.md) when the task involves source fidelity, a standalone showcase, or an export deliverable.

## 9. Adapt for access and context

Honor `prefers-reduced-motion` and any product-level motion preference from the first render. Preserve the same content, meaning, status, and task result. Replace unnecessary spatial movement, large scale changes, parallax, or long sequences with a stable presentation or a quieter cue; simply forcing every animation to a near-zero duration can create flashes or leave content in a confusing state. See [MDN’s reduced-motion reference](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) for the platform preference behavior.

Support keyboard and touch without a hover prerequisite. Keep focus visible and stable when a surface opens or closes; restore it to a valid control when appropriate. Ensure content and status remain available to assistive technology when animation is skipped. Repeated or auto-starting motion that persists, attracts attention, or conveys information needs an appropriate user control to pause or stop.

Review the real combinations of viewport, theme, content density, and input. Large displacement, scaling, parallax, fast reversals, flashes, and overlapping motion deserve particular scrutiny. Reduce complexity on compact screens when it improves clarity, but do not infer that every mobile interface needs a fixed timing multiplier. Check contrast and labels in every meaningful state; automated animation or asset scores are diagnostic signals, not proof of accessibility conformance.

## 10. Review the design

Before implementation or handoff, answer these questions:

- Can the intended message be stated without describing the effect itself?
- Does the animation acknowledge the input promptly and show only an authoritative outcome?
- Is there one clear focal change? Do any secondary or ambient elements compete with it?
- Do direction, continuity, and timing imply truthful relationships?
- Can people read, operate, interrupt, repeat, and recover without waiting for animation?
- Does reduced motion preserve the same information and task result from the first render?
- Do the chosen properties preserve text clarity, hit targets, focus, and stable layout?
- Does the motion grammar remain coherent across repeated components without erasing purposeful differences?
- Has the full behavior been checked at normal speed and under realistic repeated use?

Use [motion review](motion-review.md) to turn these questions into reproducible test cases. Report observed evidence and untested conditions honestly.

## Further reading

These sources inform the guide’s motion-system, composition, and accessibility practices. The guidance above is adapted for Forma’s product-first workflow rather than copied from a reference skill.

- [LottieFiles Motion Design Skill](https://github.com/LottieFiles/motion-design-skill)
- [LottieFiles Motion System](https://lottiefiles.com/motion-system)
- [LottieFiles Accessibility Analyzer overview](https://lottiefiles.com/blog/working-with-lottie-animations/introducing-lottie-accessibility-analyzer-making-motion-inclusive)
- [MDN: `prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
