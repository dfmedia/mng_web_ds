---
name: Spinner
slug: spinner
layer: core
figma_file: jFHYqhZbJjvWQmDI4myCsd
figma_set: "Spinner"
figma_node: "7673:28421"
component_key: 465145e1ad9b44e38ef9d1d7c5210b70ee9cc32b
variants: 4
tokens: spinner.tokens.json
skeleton: spinner.html
exported: 2026-11-25
---

# Spinner

> The loading animation (Loading Animation page; moved there from the Icons page 2026-11-24, Karl). A ring with a 30% track and a quarter arc that turns. Size = 20 (inside a button) or 48 (content area); Color = On dark (`color/gray/max`) or On light (`color/gray/min`).

## Figma

- File: **MNG Web Design System** (`jFHYqhZbJjvWQmDI4myCsd`), page **Loading Animation | 2026.11.25**
- Component set: [`Spinner` · 7673:28421](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7673-28421) · key `465145e1ad9b44e38ef9d1d7c5210b70ee9cc32b`
- Documentation frame: [Spinner Container](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7682-25714) · overview: [previews/spinner--documentation.png](previews/spinner--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Color | On dark | On dark, On light |
| Size | 20 | 20, 48 |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `On dark / 20` | 20×20 | [7673:28415](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7673-28415) | 12 | ![](previews/spinner--on-dark-20.png) |
| `On dark / 48` | 48×48 | [7682:25708](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7682-25708) | 0 | ![](previews/spinner--on-dark-48.png) |
| `On light / 20` | 20×20 | [7673:28418](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7673-28418) | 6 | ![](previews/spinner--on-light-20.png) |
| `On light / 48` | 48×48 | [7682:25711](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7682-25711) | 1 | ![](previews/spinner--on-light-48.png) |

## Anatomy

Default variant `On dark / 20` (hidden layers marked):

- **Size=20, Color=On dark** `COMPONENT`: 20×20, fixed×fixed
  - **Track** `ELLIPSE`: 20×20, fixed×fixed
  - **Arc** `ELLIPSE`: 20×20, fixed×fixed

## Component tokens

From `spinner.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `spinner.color-on-dark.arc.background` | `{color.gray.max}` |
| `spinner.color-on-dark.track.background` | `{color.gray.max}` |
| `spinner.color-on-light.arc.background` | `{color.gray.min}` |
| `spinner.color-on-light.track.background` | `{color.gray.min}` |
| `spinner.size-20.arc.height` | 20px |
| `spinner.size-20.arc.width` | 20px |
| `spinner.size-20.root.height` | 20px |
| `spinner.size-20.root.width` | 20px |
| `spinner.size-20.track.height` | 20px |
| `spinner.size-20.track.width` | 20px |
| `spinner.size-48.arc.height` | 48px |
| `spinner.size-48.arc.width` | 48px |
| `spinner.size-48.root.height` | 48px |
| `spinner.size-48.root.width` | 48px |
| `spinner.size-48.track.height` | 48px |
| `spinner.size-48.track.width` | 48px |
| `spinner.base.track.opacity` | 0.3 |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Preferred:** the 48px Spinner in the content area, centered where the new content will appear, with a short message 16px (`spacing/200`) below it (Noto Sans Regular 16, `color/gray/min`). The buttons keep their labels.
- **Inside a button:** 20px, 8px (`spacing/100`) before a waiting label (Button Primary / Tertiary State=Loading).
- **Ring:** always 1/8 of the size, so it scales with the spinner: 2.5px at 20px, 6px at 48px (inner radius 75%; Karl, 2026-11-24, was 4px at 48px); the track is the same color at 30% opacity; the arc is a quarter turn, from 12 to 3 o'clock at rest.
- **Motion:** one turn every 0.8s, linear (Karl, 2026-11-24); with reduced motion, one turn every 2 seconds instead of stopping (Karl, 2026-11-24), so the page still shows it is working.
- **Timing:** the spinner shows as soon as loading starts, with no delay (Karl, 2026-11-25). What happens when loading takes long or fails isn't decided yet.
- **Accessibility:** the Spinner is decorative (`aria-hidden="true"`); the area or button that is waiting carries `aria-busy="true"`, and the message (or the button's waiting label) says what is happening.
- **Other loading animation:** the panel loading screen (Embedded Login page, Body Content=Loading, `7686:25912`): the icon font's newspaper glyph pulsing every 3s, with animated dots after the message (2s cycle).

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **MNG Web Design System** only (other files that use the library are not counted). Total: **19**.

Inside components: Button Primary ×12, Button Tertiary ×6.

**Built from:** no nested components.

## Production

Production shows a spinner inside buttons today (checkout and sign-in); the design prefers the content area (Karl, 2026-11-24).

## Known issues

None open.

## Files

- `spinner.tokens.json`: component tokens (DTCG 2025.10).
- `spinner.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
