---
name: Article Author
slug: article-author
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Article Author"
figma_node: "3609:39115"
component_key: ec64ac51a59dffc8006f2563aa2a26a59e3af327
variants: 1
tokens: article-author.tokens.json
skeleton: article-author.html
exported: 2026-11-25
---

# Article Author

> Author name in the footer of For You cards and rows and in the featured story byline.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`Article Author` · 3609:39115](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3609-39115) · key `ec64ac51a59dffc8006f2563aa2a26a59e3af327`
- Documentation frame: [Article Author Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3609-39159) · overview: [previews/article-author--documentation.png](previews/article-author--documentation.png)

## Properties

No variant properties (single component).

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Article Author` | 84×16 | [3609:39115](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3609-39115) | 44 | ![](previews/article-author--default.png) |

## Anatomy

Default variant `Article Author` (hidden layers marked):

- **Article Author** `COMPONENT`: 84×16, horizontal, gap 0, padding 0/0/0/0, hug×hug
  - **Author** `TEXT`: 84×16, hug×hug, "Ruby Gonzales", Noto Sans Medium 12px

## Component tokens

From `article-author.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `article-author.base.author.color` | `{color.gray.min}` |
| `article-author.base.author.font-family` | `{font.family.noto-sans}` |
| `article-author.base.author.font-size` | `{font.size.12}` |
| `article-author.base.author.font-weight` | `{font.weight.medium}` |
| `article-author.base.author.line-height` | 16px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Text:** the author's name as published (`Author` text property). One line; hugs its text.
- **Type:** Noto Sans Medium 12 (`font/size/12`, `font/style/medium`), line height 16px (no line-height token yet). Color `color/gray/min` (18.4:1 on white).
- **Cards:** the footer has a 1px `color/gray/500` top border and 8px (`spacing/100`) above the author; the Article Timestamp sits directly under it.
- **Rows and the featured story:** author and timestamp side by side, 12px apart (`spacing/150`).
- **Used in:** 1Col Article Card, Horizontal Thumbnail Card and Zone 1 Lead Article Card (`Style=For You`), as an exposed instance.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **44**.

Inside components: Blocks Lead Article Card ×12, Blocks Article Row ×10, Zone 1 Lead Article Card ×6, Horizontal Thumbnail Card ×3, Blocks Card ×3, Style=For You ×1, 1Col Article Card ×1.
Placed on pages: Homepage ×8.

**Built from:** no nested components.

## Production

No production selector recorded yet. Production gaps go in `design-vs-production.md`.

## Known issues

1. Line height 16px has no token.

## Files

- `article-author.tokens.json`: component tokens (DTCG 2025.10).
- `article-author.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
