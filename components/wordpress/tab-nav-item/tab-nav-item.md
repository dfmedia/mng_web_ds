---
name: Tab Nav Item
slug: tab-nav-item
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Tab Nav Item"
figma_node: "3629:44949"
component_key: 555019e430769d437d2dc590677f75803092cc5e
variants: 4
tokens: tab-nav-item.tokens.json
skeleton: tab-nav-item.html
exported: 2026-11-25
---

# Tab Nav Item

> One tab in the Tab Nav bar (For You feature: Editor's Picks / For You). Named Homepage Tab until 2026-11-16. State = Default, Hover, Active, Focus; Label text property.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Menus and Parts**
- Component set: [`Tab Nav Item` · 3629:44949](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44949) · key `555019e430769d437d2dc590677f75803092cc5e`
- Documentation frame: [Tab Nav Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44928) · overview: [previews/tab-nav-item--documentation.png](previews/tab-nav-item--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| State | Default | Default, Hover, Focus, Active |

| Other property | Type | Default |
|---|---|---|
| Label | text | Editor's Picks |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Default` | 107×42 | [3629:44932](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44932) | 84 | ![](previews/tab-nav-item--default.png) |
| `Hover` | 107×42 | [3629:44936](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44936) | 0 | ![](previews/tab-nav-item--hover.png) |
| `Active` | 107×42 | [3629:44940](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44940) | 10 | ![](previews/tab-nav-item--active.png) |
| `Focus` | 107×42 | [3629:44944](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44944) | 0 | ![](previews/tab-nav-item--focus.png) |

## Anatomy

Default variant `Default` (hidden layers marked):

- **State=Default** `COMPONENT`: 107×42, vertical, gap 0, padding 0/0/0/0, hug×hug
  - **Label Container** `FRAME`: 107×40, horizontal, gap 0, padding 12/8/12/8, hug×hug
    - **Label** `TEXT`: 91×16, hug×hug, "Editor's Picks", Noto Sans SemiBold 12px
  - **Underline** `RECTANGLE`: 107×2, fill×fixed

## Component tokens

From `tab-nav-item.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `tab-nav-item.state-focus.focus-ring.border-color` | `{color.gray.black}` |
| `tab-nav-item.state-focus.focus-ring.border-style` | solid |
| `tab-nav-item.state-focus.focus-ring.border-width` | 2px |
| `tab-nav-item.state-focus.label-container.label.color` | `{color.gray.black}` |
| `tab-nav-item.base.label-container.padding-bottom` | `{spacing.150}` |
| `tab-nav-item.base.label-container.padding-left` | `{spacing.100}` |
| `tab-nav-item.base.label-container.padding-right` | `{spacing.100}` |
| `tab-nav-item.base.label-container.padding-top` | `{spacing.150}` |
| `tab-nav-item.base.label-container.label.font-family` | `{font.family.noto-sans}` |
| `tab-nav-item.base.label-container.label.font-size` | `{font.size.12}` |
| `tab-nav-item.base.label-container.label.font-weight` | `{font.weight.semibold}` |
| `tab-nav-item.base.underline.height` | 2px |
| `tab-nav-item.state-default.label-container.label.color` | `{color.gray.200}` |
| `tab-nav-item.state-hover.label-container.label.color` | `{color.gray.min}` |
| `tab-nav-item.state-active.label-container.label.color` | `{color.gray.black}` |
| `tab-nav-item.state-active.underline.background` | `{color.theme.primary}` |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Text:** Noto Sans SemiBold 12 (`font/size/12`, `font/style/semibold`), line height auto, letter spacing 0, uppercase.
- **Colors:** Default `color/gray/200`; Hover `color/gray/min`; Active `color/gray/black` with a 2px `color/theme/primary` underline; Focus a 2px `color/gray/black` ring set 3px inside the tab.
- **Padding:** 12px (`spacing/150`) top and bottom, 8px (`spacing/100`) left and right (Karl, 2026-11-24; was 16px), then a 2px underline (transparent unless Active) that overlaps the bar's 1px rule.
- **Accessibility:** a button with `role=tab`, `aria-selected` and `aria-controls`; keyboard focus shows the Focus state.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **94**.


**Built from:** no nested components.

## Production

Production World Cup tabs (`ul.sr-nav-tabs > button.tab-btn`, staging.dailylocal.com/world-cup/); differences are design-vs-production entry 12.

## Known issues

None open.

## Files

- `tab-nav-item.tokens.json`: component tokens (DTCG 2025.10).
- `tab-nav-item.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
