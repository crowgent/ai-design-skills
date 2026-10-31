# Motion production

Use this guide for motion deliverables that must be faithful, reproducible, reviewable, and safe to hand off. Separate real interface behavior from choreography made only for a demonstration. Treat the source artifact, rendered reference, and delivery file as distinct evidence.

## 1. Define the deliverable

Choose a production mode before building:

| Mode | Source of truth | Primary acceptance question |
|---|---|---|
| Live interface behavior | Product state and user/system event | Does the real task remain truthful, accessible, and operable? |
| Feature demonstration | Real mechanism, with bounded presentation aids | Does it explain an actual capability without implying false behavior? |
| Reference reconstruction | Supplied design/source plus observed render | Which details are verified, approximated, or unavailable? |
| Standalone showcase | Approved story and deterministic timeline | Does the delivered artifact match the brief and remain separate from product UI? |

Record audience, destination, dimensions/aspect, duration, cadence, format/codec, audio, alpha, loop/ending, language, captions, file-size constraints, and fidelity expectations. Confirm rights/approval for source assets and any generation. Resolve only missing decisions that materially change implementation; document reasonable assumptions for the rest.

## 2. Establish source truth and fidelity

Inventory source files, editable objects, fonts, image dependencies, reference captures, and runtime. Render a canonical still from the source before animating. Compare at the intended viewport for frame bounds, crop, hierarchy, copy, typography, color, overlap, masks, clipping, and background. Structural mismatch is a still-image problem; fix it before timeline work.

| Evidence available | Safe claim | Limitation to record |
|---|---|---|
| Editable design/source plus render | Objects can be mapped to named source elements | Rendering differences may remain across tools/fonts |
| Rendered reference only | Composition and visible details can be approximated | Hidden layers, exact type metrics, and independent object motion are unknown |
| Partial source or missing assets | Available regions can be reproduced and identified | Missing portions must not be presented as verified originals |

Preserve source identity: do not rewrite visible copy, substitute a product mark, or invent a replacement background and then call it an exact recreation. If only a flattened image exists, avoid making it behave like independently authored controls. State what is a reconstruction and what cannot be confirmed.

For each moving asset, keep a manifest with stable ID, source filename/version, intended role, pixel dimensions and scale, alpha/painted bounds, anchor point, parent transform, clip/mask owner, z-order, permitted movement, and notes on corrections. Distinguish layout bounds from visible bounds affected by stroke, blur, rotation, or clipping. Use measured geometry to align layers; retain uncertainty where measurements are unavailable.

## 3. Model the scene and layers

Create a scene map before animation:

| Layer field | Required decision |
|---|---|
| Identity | Stable name and source reference |
| Parent | Coordinate space and inherited transform |
| Paint order | What draws above/below it |
| Clip | Owning mask, overflow boundary, or none |
| Motion class | Static, moving, helper, or capture-only |
| Rest pose | Exact canonical position, scale, opacity, and rotation |
| Allowed change | Properties and timeline range that may vary |

Use one documented logical coordinate space and state the conversion to capture pixels. Define the camera/frame separately from scene coordinates. Keep objects that must move as a unit (surface, contents, attached shadow) under a shared parent. Review adjacent translucent layers for seams, double shadows, and unintended overlap. Preserve visible vector characteristics such as stroke weight, caps, joins, and mask edges.

Render a still at the final frame dimensions and verify crop, safe area, readability, clipping, and layer order before adding motion. The canonical still is the baseline for all later comparison.

## 4. Author a deterministic timeline

Describe beats in terms of meaning: initial context, trigger, response, outcome, settle, and (if needed) reset. Use one timeline clock and derive every animated value from absolute time and known input data. A given timestamp must yield the same pose regardless of seek order. Avoid unsynchronized wall-clock timers, independent CSS loops, random values, and network arrival timing in capture mode.

| Timeline requirement | Implementation check |
|---|---|
| Explicit timebase | Clock origin, units, duration, and cadence are documented |
| Reproducible pose | Seeking directly to a timestamp yields the same frame repeatedly |
| Controlled assets | Fonts/images are loaded and decoded before capture begins |
| Stable start/end | Opening and final poses are deliberate and complete |
| Reset/loop | Every dependent property resets; seam reviewed separately |
| Capture isolation | Helpers and debug overlays can be excluded from final output |

Provide a stable still mode and a capture mode that sets time explicitly. Fix viewport, device scale, locale, theme, and data fixtures. Wait for assets; disable uncontrolled animation; seed any unavoidable variability. Save named checkpoints for the opening, major transitions, settled pose, and reset/loop boundary. A loop is optional: prefer a clear ending when that better fits the story.

## 5. Text, audio, and accessibility

Keep live product text as accessible content. In a reference reconstruction, use source-rendered text only when it is necessary for accurate appearance and label the tradeoff; do not invent illegible wording. If text is animated, preserve reading order and use grapheme-aware splitting; test combining marks, ligatures, fallback fonts, right-to-left scripts, and captions. Essential meaning must remain available in a transcript or equivalent static view.

Synchronize any narration, captions, and audio cues to the same timeline. Do not add audio unless requested or clearly approved. Include captions/transcript where speech conveys information, make mute behavior predictable, and inspect sync at the beginning and end. Capture markers, measurement annotations, helper masks, and temporary debug labels must not leak into canonical output.

## 6. Asset provenance and rights

Prefer approved design-source assets for precise product UI. Generated or third-party assets must remain distinguishable from product evidence. For every nontrivial asset, record origin (project source, licensed library, user-provided, generated), file/version or source URL, creator/license/usage terms if known, approvals, transformations, and final output references. Keep generation prompts and selected result provenance when reproducibility matters. Do not assume public availability equals permission to use.

Review each asset for continuity, geometry, text/logo artifacts, crop, accessibility, and rights. Save approved files in the project with stable names; avoid expiring links or undocumented substitutions. Use [design tokens](design-tokens.md) for shared visual values where available, but avoid baking token assumptions into a deliverable without identifying the version/context.

## 7. Capture and export

Before render, validate the delivery profile: pixel dimensions, aspect, frame cadence, duration, codec/container, color handling, audio layout, alpha support, and size limit. Confirm even dimensions if the chosen encoder requires them. Keep a lossless source or numbered frame sequence until review is complete.

A repeatable capture pass should:

1. Set viewport, device scale, locale/theme, and fixture data.
2. Wait for fonts, image decode, and other required assets; fail clearly on timeout.
3. Reset to the known initial state and set an explicit timeline timestamp.
4. Capture at the declared cadence with stable naming and no accidental dropped/duplicate frames.
5. Cover opening, each key beat, settled frame, final frame, and loop seam if applicable.
6. Encode from reviewed frames with the declared export settings.

Inspect the encoded file, not only the browser preview. Verify actual dimensions, duration, cadence, frame count where available, audio presence/sync, transparency, crop, color, legibility at intended display size, and first/last frame behavior. If a GIF is required, inspect palette banding, dithering, frame redundancy, and text readability before reducing size. Retain an export manifest containing source revision, commands/settings, asset manifest, time range, cadence, output checksum, and reviewer/date.

## 8. Handoff and release separation

Deliver the final artifact, editable source or project files when agreed, asset manifest/provenance, export profile, capture instructions, preview/contact sheet, and known limitations. Use stable relative paths and state required fonts, tools, dependencies, and how to reproduce the output. Clearly identify presentation-only classes, timeline controllers, helper layers, and debug switches; remove or isolate them from ordinary product builds.

A handoff is complete when another person can locate the source, reproduce the canonical still and export, understand which details are verified versus approximated, and tell whether the artifact is production UI or a showcase. Report failed/skipped validation honestly; never claim exact fidelity, rights clearance, accessibility, or export compliance without the corresponding evidence. Use [motion review](motion-review.md) for test cases and release gates.
