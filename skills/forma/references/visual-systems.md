# Visual systems

Use this guide to translate a design thesis into a visual language that is recognizable, usable, and practical to maintain. A system is not a uniform skin: it creates dependable roles and behaviors while allowing each page, data view, and component to do its own job.

## At a glance

| Pass | Establish | Check |
|---|---|---|
| Art direction | Concrete visual behavior linked to product meaning | Can the direction be applied without relying on vague adjectives? |
| Composition | Reading order, alignment, density, and spatial rhythm | Does the layout serve the task at each width? |
| Type and color | Legible roles and meaningful emphasis | Do real content and states remain distinguishable? |
| Data and imagery | Honest evidence and purposeful visual assets | Is the visual accurate, interpretable, and accessible? |
| Components | Reusable contracts for states and content variation | Does the pattern behave beyond its default case? |
| Responsive review | Reflow and adaptation, not just scale-down | Can the intended task still be completed? |

## 1. Translate art direction into behavior

Start with the strategy, not a moodboard. Identify what needs immediate attention, what should feel dependable, and where emphasis earns its place. Convert those observations into decisions another person can implement: alignment style, information density, image treatment, contrast pattern, motion restraint, and the relationship between content and interface chrome.

| Direction prompt | Concrete translation |
|---|---|
| What should be noticed first? | Reserve the strongest scale or contrast for the task's primary signal |
| What establishes trust? | Use stable navigation, legible terms, consistent state feedback, and traceable proof |
| What makes the product particular? | Use its real vocabulary, workflow, material, data, or a recognizable brand asset |
| What should stay quiet? | Keep secondary controls and structural surfaces low-emphasis without reducing legibility |
| What would be the wrong signal? | Avoid treatments that imply urgency, success, live status, or capability when it is not true |

Describe a direction as an observable rule, e.g. “dense monitoring information is grouped by incident state; the current condition leads, while historical context stays visually secondary.” Avoid unsupported shorthand such as “premium,” “clean,” or “modern.” Preserve useful brand assets and patterns. If a pattern conflicts with accessibility, actual behavior, or the brief, explain the conflict and propose the smallest justified change.

**Gate — direction:** Each notable visual choice has a reason connected to task, evidence, brand, or accessibility. No prominent treatment exists only to fill space.

## 2. Compose the page before tuning detail

Set reading order, content measure, alignment anchors, section relationships, and density before adding decoration. Use consistent placement for recurring functions; let content with a different role have a different composition. Align by meaning: labels and values should scan as groups, related controls should stay near their consequence, and section transitions should be easy to perceive.

### Composition checklist

- Define the first, second, and supporting visual priorities; do not assign equal emphasis to every block.
- Choose a content width that suits the reading task. Long-form explanation, a dense workspace, and a marketing comparison do not share one ideal measure.
- Use grid or intrinsic layout relationships for repeated structures; reserve fixed dimensions for known controls or media with a stable ratio.
- Group related items with proximity and shared alignment; distinguish adjacent groups with deliberate separation rather than miscellaneous borders.
- Keep the main action near the information needed to choose it. Keep destructive actions apart from routine actions and make their effect explicit.
- Avoid clipping content to preserve a preset card height. Let copy, locale, and error states expand the layout.

The first viewport is a composition boundary, not a mandate to hide the rest. Preserve context and a credible continuation cue when a task or story extends below it. A restrained, consistent rhythm is more useful than forcing every screen into identical card grids.

## 3. Select typography for content and audience

Choose typefaces only after checking the languages and scripts required, character coverage, numeral forms, available weights, licensing, download cost, and rendering. Use a small set of roles. Establish hierarchy through a combination of size, line height, measure, contrast, and weight; do not expect weight alone to organize a page.

### Scale decisions

| Content role | Consider |
|---|---|
| Display or page title | Short measure, stable wrapping, and a scale that does not overpower task content |
| Section heading | Clear relationship to the section below; avoid a jump that implies a false hierarchy |
| Body and instructions | Comfortable line length and line height, especially for multi-step or consequential guidance |
| Labels and metadata | Legible at the actual device size; do not use faint color or tight spacing to make them “quiet” |
| Numeric data | Consistent formatting, aligned figures when comparison matters, and readable unit/context labels |

Test real titles, long names, dates, currency, punctuation, translated strings, and user-generated content. Set a distinct measure for sustained reading and brief display copy. Prefer editing or changing container width before inserting manual line breaks. Check fallback font metrics and loading behavior to reduce layout shifts. Use a display face only when its expressive benefit survives small screens and the full content set.

## 4. Build color roles and verify contrast

Choose colors by function rather than by component. Keep structural surfaces, text, borders, focus, actions, and semantic states distinct in the system. A brand accent is not automatically a success color; warning and error should not depend on hue alone. Use [design tokens](design-tokens.md) for sample values and implementation roles; this guide focuses on the decisions and review process.

| Role family | Typical responsibility | Review states |
|---|---|---|
| Canvas and surface | Separate page, grouped content, and overlays | Theme, nesting, elevation |
| Text and icon | Indicate primary, supporting, or tertiary information | Default, disabled, inverse surface |
| Action and selection | Show affordance, current choice, or focus | Hover, pressed, selected, keyboard focus |
| Semantic | Communicate outcome, caution, or failure | Icon/label pairing, color-vision differences |
| Data series | Differentiate values or categories | Legend, direct labels, grayscale or pattern fallback |

Test actual foreground/background pairs in all relevant themes and interaction states, including focus, disabled, error, and selected. Do not use opacity to mute text until it fails contrast. Ensure focus remains visible adjacent to boundaries and overlays. For color-only distinctions, add text, shape, line style, position, or pattern. Test translucent layers against the surfaces they cover, not just a guessed background. Use shadows, blur, gradients, and texture only when they explain depth or material; reject them when they obscure edges, imply a false status, or cost more than they clarify.

## 5. Make data visualization answer a question

Start by naming the question, measure, unit, period, source, and comparison baseline. Pick a chart form for the relationship: change over time, category comparison, distribution, part-to-whole, or progress toward a defined target. If the data cannot support the question, change the question or present the limitation rather than manufacturing precision.

### Chart review

1. **Meaning:** Is the measure and scope explicit? Are missing, estimated, or delayed values explained?
2. **Encoding:** Does position, length, area, or color represent the data honestly? Are scales and zero-baselines appropriate to the comparison?
3. **Reading:** Can a person identify the important value without decoding a legend that could be labeled directly?
4. **Access:** Are series distinguishable without color alone? Is there a text summary, accessible table, or equivalent where needed?
5. **Context:** Is the comparison period or target visible? Are uncertainty and caveats near the result?

Create hierarchy across a dashboard: a lead analytical view may carry the main question while summaries and tables support it. Do not add miniature charts to empty cards unless they answer a distinct question. Verify number formatting, units, time zones, rounding, and the source of sample values. Label examples when they might be mistaken for live or customer data.

## 6. Give imagery a job

For every significant image, state its purpose: product proof, explanation, orientation, context, or decoration. Keep decorative assets subordinate to task information. When accuracy matters, prefer a current product capture or a deliberately built preview; generated media should not be asked to reproduce exact interface text, logos, prices, or other critical facts.

Before sourcing or creating an asset, specify subject, framing, crop, lighting, palette, background relationship, destination sizes, and text-safe area. Confirm the source is permitted for the intended use and retain useful provenance or usage constraints. Review every crop and breakpoint. Write alternative text for the image's meaningful content; use empty alternative text when it is truly decorative, rather than describing its aesthetic style.

Check file weight, dimensions, responsive sources, loading priority, and layout reservation. Keep interface text as live text. Use a mask or background treatment only when it improves integration without losing important edges or content.

## 7. Specify reusable components as contracts

A reusable component is defined by its responsibility and behavior, not merely by its shape. Document the minimum contract needed to make it reliable across screens.

| Contract item | Questions to answer |
|---|---|
| Role and anatomy | What task does it support? Which parts are required or optional? |
| Content range | What are the shortest and longest realistic values, including localization? |
| States | What do default, hover, focus, selected, disabled, loading, success, and error mean here? |
| Responsive behavior | Does it wrap, stack, scroll, reorder, or simplify? Which content remains essential? |
| Interaction | What are keyboard order, activation, dismissal, and recovery behaviors? |
| Dependencies | Which semantic color, type, spacing, and shape roles does it consume? |
| Failure behavior | What happens when content is missing, delayed, invalid, or unavailable? |

Centralize patterns that repeat. Keep unique expressive treatments local and explain their purpose. Distinguish primary, secondary, destructive, selected, and disabled actions with more than color alone. After a shared component changes, inspect every state and content variant—not only its polished default.

## 8. Design responsive behavior intentionally

Responsive work changes priorities and interaction, not only dimensions. Define where the layout reflows based on content pressure and task needs; do not assume a single device width describes all users. Preserve the order that supports comprehension, unless a different order is explicitly justified and remains understandable.

- Let columns collapse when their content no longer has a useful minimum width; do not shrink a dense workspace into illegibility.
- Keep the primary task, status, and essential context available when secondary material moves, collapses, or becomes scrollable.
- Recheck navigation, table access, charts, dialogs, media crops, and action reach on narrow and wide viewports.
- Provide workable text resizing and zoom without clipping, overlap, or horizontal page scrolling for ordinary content.
- Verify touch targets and separation, keyboard focus visibility, and reduced-motion behavior as layout changes.
- Test content variation: long translations, empty states, validation text, large values, missing images, and text enlargement.

If a data table cannot be usefully reflowed, choose an intentional alternative such as a labeled horizontal scroller with clear affordance or a compact detail view that preserves the same information. Do not silently remove essential columns.

## 9. Final quality gates

### Visual coherence
- [ ] The direction is expressed through concrete, repeatable behavior and product-relevant detail.
- [ ] Reading order, alignment, density, and primary emphasis match the actual user task.
- [ ] Type roles work with real content, required scripts, and fallback fonts.
- [ ] Color roles are semantic; critical states and focus are distinguishable without color alone.
- [ ] Contrast has been checked on actual surfaces and relevant interaction states.

### Truth and accessibility
- [ ] Charts communicate the measure, units, period, source, and honest comparison.
- [ ] Images have a clear job, valid usage, suitable crops, and appropriate alternative text.
- [ ] Illustrative content is identifiable; no image fabricates product facts or critical text.
- [ ] Components cover keyboard, loading, error, disabled, and content-length behavior as relevant.
- [ ] Responsive layouts preserve task context, essential information, and useful control access.

### Delivery
- [ ] Assets reserve layout space and load at a quality and weight appropriate to their role.
- [ ] Shared components were checked in all impacted locations and states.
- [ ] All relative links resolve to files delivered with this guide.
- [ ] Any unresolved limitation is recorded rather than disguised as a design decision.
