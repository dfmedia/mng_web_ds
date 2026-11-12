---
name: Popover
slug: popover
layer: core
figma_file: jFHYqhZbJjvWQmDI4myCsd
figma_set: "Popover"
figma_node: "7574:28804"
component_key: fab5de29ad3a5603f21b7381ec9be63c4ecb63e6
variants: 2
tokens: popover.tokens.json
skeleton: popover.html
exported: 2026-11-12
---

# Popover

> A small floating panel that holds interactive content (buttons or links), opened by a trigger button. The Toggletip's look with a Content slot. Placement = Top, Bottom.

## Figma

- File: **MNG Web Design System** (`jFHYqhZbJjvWQmDI4myCsd`), page **Tooltips | 2026.10.23**
- Component set: [`Popover` · 7574:28804](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7574-28804) · key `fab5de29ad3a5603f21b7381ec9be63c4ecb63e6`
- Documentation frame: [Popover Container](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7574-28806) · overview: [previews/popover--documentation.png](previews/popover--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Placement | Top | Top, Bottom |

| Other property | Type | Default |
|---|---|---|
| Content | slot | None |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Top` | 71×42 | [7574:28776](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7574-28776) | 0 | ![](previews/popover--top.png) |
| `Bottom` | 71×42 | [7574:28789](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7574-28789) | 2 | ![](previews/popover--bottom.png) |

## Anatomy

Default variant `Top` (hidden layers marked):

- **Placement=Top** `COMPONENT`: 71×42, vertical, gap -1, padding 0/0/0/0, hug×hug
  - **Box** `FRAME`: 71×37, horizontal, gap 0, padding 8/8/8/8, hug×hug
    - **Content** `SLOT`: 53×19, horizontal, gap 8, padding 0/0/0/0, hug×hug
      - **Content** `TEXT`: 53×19, hug×hug, "Content", Noto Sans Regular 14px
  - **Caret** `FRAME`: 12×6, fixed×fixed
    - **Caret Border** `VECTOR`: 12×6, fixed×fixed
    - **Caret Fill** `VECTOR`: 10×5, fixed×fixed

## Component tokens

From `popover.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `popover.base.box.background` | `{color.gray.max}` |
| `popover.base.box.border-color` | `{color.gray.300}` |
| `popover.base.box.border-radius` | `{radius.sm}` |
| `popover.base.box.border-style` | solid |
| `popover.base.box.border-width` | 1px |
| `popover.base.box.padding-bottom` | `{spacing.100}` |
| `popover.base.box.padding-left` | `{spacing.100}` |
| `popover.base.box.padding-right` | `{spacing.100}` |
| `popover.base.box.padding-top` | `{spacing.100}` |
| `popover.base.box.content.content.color` | `{color.gray.min}` |
| `popover.base.box.content.content.font-family` | Noto Sans |
| `popover.base.box.content.content.font-size` | 14px |
| `popover.base.box.content.content.font-weight` | 400 |
| `popover.base.caret.height` | 6px |
| `popover.base.caret.width` | 12px |
| `popover.base.caret.caret-border.background` | `{color.gray.300}` |
| `popover.base.caret.caret-border.height` | 6px |
| `popover.base.caret.caret-border.width` | 12px |
| `popover.base.caret.caret-fill.background` | `{color.gray.max}` |
| `popover.base.caret.caret-fill.height` | 5px |
| `popover.base.caret.caret-fill.width` | 10px |
| `popover.base.root.gap` | -1px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Look:** the Toggletip's: `color/gray/max` box, 1px inside border (the Toggletip's border color), `radius/sm` (4px), `shadow/lg`, 12x6 caret centered on the box pointing at the trigger.
- **Padding and gaps:** 8px (`spacing/100`) inside the box; items in the Content slot sit in a row, 8px apart; the box hugs them.
- **Placement:** Bottom (below the trigger, caret on top) or Top (above it, caret below); centered on the trigger, 8px between the trigger and the caret tip.
- **Not a tooltip:** a Popover takes keyboard focus; use Tooltip or Toggletip for text that describes a control (Karl, 2026-11-12).
- **Behavior:** the trigger is a button with `aria-expanded` and `aria-controls`; when it opens, focus moves to the first item; Tab and the arrow keys move between items; Esc or a click outside closes it and returns focus to the trigger.
- **First use:** the share bar's More panel (SocialButtons, WordPress Elements).

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **MNG Web Design System** only (other files that use the library are not counted). Total: **2**.


**Built from:** no nested components.

## Production

New in the design (2026-11-12). Production's Twin Cities More panel is the closest pattern and is broken (design-vs-production 39.4).

## Known issues

1. **Values not bound to a token** (literal in the component tokens): `base` box.content.content font-family = Noto Sans; `base` box.content.content font-size = 14px; `base` box.content.content font-weight = 400; `base` root gap = -1px.

## Files

- `popover.tokens.json`: component tokens (DTCG 2025.10).
- `popover.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-12 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
