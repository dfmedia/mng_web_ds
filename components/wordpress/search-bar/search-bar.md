---
name: SearchBar
slug: search-bar
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "SearchBar"
figma_node: "456:5910"
component_key: 408765eef4ffc037695dd7789e51f02a61120df8
variants: 2
tokens: search-bar.tokens.json
skeleton: search-bar.html
exported: 2026-11-25
---

# SearchBar

> The masthead search. Status = Default (search icon) or Open (text field with a submit button).

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Menus and Parts**
- Component set: [`SearchBar` · 456:5910](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5910) · key `408765eef4ffc037695dd7789e51f02a61120df8`
- Documentation frame: [Search Bar](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5908) · overview: [previews/search-bar--documentation.png](previews/search-bar--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Status | Default | Default, Open |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Default` | 30×45 | [456:5911](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5911) | 386 | ![](previews/search-bar--default.png) |
| `Open` | 480×64 | [456:5913](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5913) | 0 | ![](previews/search-bar--open.png) |

## Anatomy

Default variant `Default` (hidden layers marked):

- **Status=Default** `COMPONENT`: 30×45, horizontal, gap 8, padding 20/0/5/0, fixed×hug
  - **Icons** `INSTANCE`: 20×20, horizontal, gap 8, padding 0/0/0/0, fixed×fixed, instance of Icons (Name=search)

## Component tokens

From `search-bar.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `search-bar.base.icons.height` | 20px |
| `search-bar.base.icons.icon-color` | `{color.gray.min}` |
| `search-bar.base.icons.width` | 20px |
| `search-bar.base.root.background` | `{color.gray.max}` |
| `search-bar.status-open.root.border-bottom-width` | 1px |
| `search-bar.status-open.root.border-color` | `{color.gray.300}` |
| `search-bar.status-open.root.border-style` | solid |
| `search-bar.status-open.root.gap` | `{spacing.200}` |
| `search-bar.status-open.root.height` | 64px |
| `search-bar.status-open.root.padding-bottom` | `{spacing.200}` |
| `search-bar.status-open.root.padding-left` | `{spacing.300}` |
| `search-bar.status-open.root.padding-right` | `{spacing.300}` |
| `search-bar.status-open.root.padding-top` | `{spacing.200}` |
| `search-bar.status-open.root.width` | 480px |
| `search-bar.status-open.search-button.background` | `{color.theme.primary}` |
| `search-bar.status-open.search-button.border-radius` | `{radius.utility}` |
| `search-bar.status-open.search-button.padding-bottom` | 6px |
| `search-bar.status-open.search-button.padding-left` | `{spacing.200}` |
| `search-bar.status-open.search-button.padding-right` | `{spacing.200}` |
| `search-bar.status-open.search-button.padding-top` | 6px |
| `search-bar.status-open.search-button.search.color` | `{color.gray.max}` |
| `search-bar.status-open.search-button.search.font-family` | `{font.family.noto-sans}` |
| `search-bar.status-open.search-button.search.font-size` | `{font.size.15}` |
| `search-bar.status-open.search-button.search.font-weight` | `{font.weight.semibold}` |
| `search-bar.status-open.type-your-search.color` | `{color.gray.200}` |
| `search-bar.status-open.type-your-search.font-family` | `{font.family.noto-sans}` |
| `search-bar.status-open.type-your-search.font-size` | `{font.size.16}` |
| `search-bar.status-open.type-your-search.font-weight` | `{font.weight.regular}` |
| `search-bar.status-default.root.padding-bottom` | 5px |
| `search-bar.status-default.root.padding-top` | `{spacing.250}` |
| `search-bar.status-default.root.width` | 30px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- Opens from the search icon in the Masthead; the field gets focus when it opens.
- **Accessibility:** a `form role=search` with a labelled input and a submit button.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **386**.

Inside components: Masthead ×110, ObitMastHead ×28, AccountMenu ×22.
Placed on pages: null ×116, Menus and Parts ×98, Homepage ×6, Article Page ×4, Section Front ×2.

**Built from:** Icons ×2
Icon variants: `search` ×2.

## Production

Production masthead search.

## Known issues

1. Raw values with no token: 5px and 6px spacing, 5px radius.
2. **Values not bound to a token** (literal in the component tokens): `status-default` root padding-bottom = 5px; `status-open` search-button padding-bottom = 6px; `status-open` search-button padding-top = 6px.

## Files

- `search-bar.tokens.json`: component tokens (DTCG 2025.10).
- `search-bar.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
