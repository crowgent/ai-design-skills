# Design tokens and UI recipes

> Use this guide to turn a visual direction into implementation-ready values. The examples are a starting kit, not a prescribed Forma theme. Keep a project's established system when it is sound; change values only when the experience needs a different hierarchy, density, or brand expression.

## Contents

- [Build the system in layers](#build-the-system-in-layers)
- [Color roles and contrast](#color-roles-and-contrast)
- [Spacing and layout](#spacing-and-layout)
- [Type system](#type-system)
- [Shape, border, and elevation](#shape-border-and-elevation)
- [Components and states](#components-and-states)
- [Responsive rules](#responsive-rules)
- [Motion tokens](#motion-tokens)
- [Starter CSS](#starter-css)
- [Token review checklist](#token-review-checklist)

## Build the system in layers

Keep the source palette separate from semantic names and from component-specific decisions:

```text
raw values → semantic roles → component rules → rendered states
```

A raw green can later change without editing every button if components refer to `--action-primary`. A component may use a role with a local exception only when that exception has a reason and passes the same state checks.

Prefer a small set of scales with intentional gaps between major steps. Add a new token when it serves a recurring role, not simply because one element needs a unique number. Keep token naming consistent across CSS, design files, and documentation.

## Color roles and contrast

### Choose roles before hues

Define what color communicates before choosing the exact palette. At minimum, decide roles for:

| Role family | Typical roles | Review question |
|---|---|---|
| Canvas | page, raised surface, overlay | Are nested surfaces distinguishable without decoration? |
| Text | primary, secondary, quiet, inverse | Does importance remain clear at normal zoom and in both themes? |
| Action | primary action, secondary action, selected, focus | Can users identify the available action and focus location? |
| Status | success, warning, critical, information | Is status also named with text or an icon, not color alone? |
| Data | series, reference, highlight | Can each series be distinguished and understood in grayscale or with assistive text? |

Build the neutral ramp first. Pick an undertone that supports the product's actual imagery and identity; keep reading surfaces calm enough for sustained use. Then select a brand accent and status colors. Avoid giving every surface a different accent-tinted fill, which removes hierarchy.

### Contrast is a state property

Check actual foreground/background pairs for default, hover, focus, pressed, disabled, error, and selected states. WCAG contrast ratio is calculated from relative luminance, not perceived hue. A useful WCAG 2.2 AA review target is 4.5:1 for ordinary text and 3:1 for large text; important graphical controls and focus indicators generally need at least 3:1 against adjacent colors. Verify the exact criterion for the element, size, and use case. Do not assume a brand color is readable because it looks vivid.

### Light and dark themes

Treat each theme as a designed palette, not a simple inversion. Re-evaluate surface elevation, image crops, focus rings, disabled states, chart series, and status contrast. Keep semantic aliases stable while allowing the raw values to differ by theme.

## Spacing and layout

### Use a rhythm with named purpose

A compact 4px base can work well for web UI, while component internals may use half-steps where the platform requires optical alignment. One possible scale is:

| Token | Example value | Common use |
|---|---:|---|
| `space-1` | 4px | icon/text alignment, tight control inset |
| `space-2` | 8px | related inline items |
| `space-3` | 12px | compact field padding |
| `space-4` | 16px | standard component inset |
| `space-6` | 24px | card padding or grouped content |
| `space-8` | 32px | section group separation |
| `space-10` | 40px | major content break |
| `space-14` | 56px | section separation |
| `space-18` | 72px | broad editorial rhythm |

The missing intermediate values are intentional. Do not interpolate a token for every single use. When a local exception is necessary, explain whether it solves optical alignment, content density, or a platform constraint.

### Layout measures

Use line length and content density to set containers. Long-form reading often works around 60–75 characters per line; dense dashboards may need a wider working surface and a controlled table overflow strategy. Choose page gutters that adapt rather than using one desktop padding everywhere. Avoid fixed heights for content-bearing cards unless overflow behavior is defined.

## Type system

Define roles by function, then choose a family that supports the required scripts, numerals, punctuation, weights, licensing, and loading budget.

| Role | Example size/line-height | Notes |
|---|---|---|
| Micro label | 0.75rem / 1rem | Reserve for short metadata; don't use for essential instructions |
| Supporting | 0.875rem / 1.35 | Secondary descriptions and control details |
| Body | 1rem / 1.5 | Main readable text; allow generous measure |
| Lead | 1.25rem / 1.4 | Introductory copy or important explanation |
| Section title | 1.5rem / 1.25 | Establish group hierarchy without relying only on weight |
| Page title | `clamp(1.875rem, 3vw, 2.75rem)` / 1.1 | Test wraps at the narrowest supported width |
| Display | `clamp(2.75rem, 6vw, 5.25rem)` / 1.0–1.08 | Use only when it serves the page's voice and remains legible |

Treat these as sample CSS values, not a mandate. Define a small set of weights and use line length, contrast, and spacing as part of hierarchy. For dense numeric interfaces, use tabular figures if they improve comparison. Test large values, currency, dates, long translated labels, and fallback fonts.

## Shape, border, and elevation

Choose a radius family that matches interaction density and brand tone. A useful starting ladder might be `4px` for compact marks, `8px` for controls, `14px` for cards, and `20px` for larger surfaces. Avoid applying a maximum pill radius to every component.

For nested surfaces, make the inner corner visually fit the outer corner after accounting for inset. Keep border contrast strong enough to reveal component boundaries where needed, but quiet enough not to compete with content. Use elevation to clarify overlap and hierarchy; avoid stacking several faint shadows when a surface step or separator is clearer.

## Components and states

Map semantic roles to component states rather than styling each instance independently.

| Component | Required states to consider | Contract to specify |
|---|---|---|
| Button | default, hover, pressed, focus, disabled, pending | action, hierarchy, minimum target, loading behavior |
| Text field | idle, focus, invalid, disabled, filled | persistent label, hint, validation timing, error association |
| Navigation item | default, current, hover, focus | destination, current-page semantics, narrow-screen behavior |
| Dialog | closed, opening, open, closing | trigger, focus entry/return, dismissal, scroll handling |
| Data card | loading, populated, empty, stale, failed | source, time range, unit, empty/error recovery |

Do not rely on opacity alone to explain disabled state. Focus indication should remain visible against the component and surrounding surface. Preserve control labels when pending, and prevent duplicate activation when the underlying operation requires it.

## Responsive rules

Define content-driven breakpoints where a composition changes, rather than choosing breakpoints only to match popular device names. For each breakpoint, record what changes: columns, navigation, image crop, control reachability, table behavior, or order of information. Use fluid type within bounds and test at the boundary between layouts. A page is not responsive merely because it avoids horizontal overflow.

## Motion tokens

Keep time and easing semantic. A component can use a feedback role without knowing the raw duration. Example roles:

```css
:root {
  --time-feedback: 140ms;
  --time-local: 220ms;
  --time-context: 360ms;
  --ease-enter: cubic-bezier(0.18, 0.72, 0.24, 1);
  --ease-exit: cubic-bezier(0.42, 0, 1, 1);
  --ease-state: cubic-bezier(0.2, 0.65, 0.25, 1);
}

.control {
  transition:
    color var(--time-feedback) linear,
    background-color var(--time-feedback) linear,
    transform var(--time-feedback) var(--ease-state);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This CSS is illustrative, not a complete reduced-motion strategy: important movement may need a stable alternative rather than simply a near-zero duration. Avoid broad `transition: all`; list the properties that are intentionally animated. See [Motion design](motion-design.md) for state and meaning, and [Motion review](motion-review.md) for tests.

## Starter CSS

```css
:root {
  color-scheme: light;
  --canvas: #f5f7f6;
  --surface: #ffffff;
  --surface-raised: #eef2f0;
  --text-primary: #17211e;
  --text-secondary: #4f5e59;
  --text-muted: #64716d;
  --border-subtle: rgb(23 33 30 / 12%);
  --action-primary: #176a5c;
  --focus-ring: #155eef;
  --status-positive: #217a4a;
  --status-critical: #b42318;

  --font-body: "Inter", system-ui, sans-serif;
  --font-display: "Inter", system-ui, sans-serif;
  --text-body: 1rem;
  --leading-body: 1.5;

  --radius-control: 0.5rem;
  --radius-card: 0.875rem;
  --radius-overlay: 1.25rem;
  --border-width: 1px;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
}

:focus-visible {
  outline: 3px solid var(--focus-ring);
  outline-offset: 2px;
}
```

Before adopting these sample values, test contrast in context, confirm that the focus ring remains visible on every surface, and replace the example typeface and hues with choices supported by the product brief.

## Token review checklist

- [ ] Every token represents a reusable meaning or scale step.
- [ ] Raw colors are referenced through semantic roles in components.
- [ ] Text, controls, focus, and status states have been checked against their actual backgrounds.
- [ ] Light and dark modes were reviewed independently, if both exist.
- [ ] Spacing and type scales support realistic content and translated strings.
- [ ] Component contracts include pending, disabled, empty, invalid, and error states where applicable.
- [ ] Motion roles identify the behavior; reduced motion preserves content and outcome.
- [ ] Exceptions have a reason and are not scattered one-off values.


## Sample palette: calculated contrast checks

The following values were calculated from the example hex colors in the starter CSS. They verify these specific foreground/background pairs only; they do not certify a full interface or cover opacity, focus adjacency, disabled states, images, or theme overrides.

| Foreground | Background | Contrast ratio | Intended example |
|---|---|---:|---|
| `#17211e` | `#f5f7f6` | 15.34:1 | Primary text on canvas |
| `#4f5e59` | `#ffffff` | 6.82:1 | Supporting text on surface |
| `#64716d` | `#ffffff` | 5.09:1 | Quiet text on surface |
| `#ffffff` | `#176a5c` | 6.46:1 | Primary-action label |
| `#155eef` | `#ffffff` | 5.41:1 | Focus indicator against white |
| `#217a4a` | `#ffffff` | 5.32:1 | Positive status text on white |
| `#b42318` | `#ffffff` | 6.57:1 | Critical status text on white |

Recalculate any pair after changing its value or opacity. For the actual component, inspect the state and surface combination a person will encounter, including adjacent colors around a focus indicator.
