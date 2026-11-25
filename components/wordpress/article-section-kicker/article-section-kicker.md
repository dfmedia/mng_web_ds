---
name: Article Section Kicker
slug: article-section-kicker
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Article Section Kicker"
figma_node: "3609:39112"
component_key: 7dde4a7df8f6985f2ef46cb5e9339c07942becc4
variants: 1
tokens: article-section-kicker.tokens.json
skeleton: article-section-kicker.html
exported: 2026-11-25
---

# Article Section Kicker

> Section label above an article headline in For You cards, rows and the featured story: the article's section (articleSection), shown uppercase in the theme primary color.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`Article Section Kicker` · 3609:39112](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3609-39112) · key `7dde4a7df8f6985f2ef46cb5e9339c07942becc4`
- Documentation frame: [Article Section Kicker Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3609-39117) · overview: [previews/article-section-kicker--documentation.png](previews/article-section-kicker--documentation.png)

## Properties

No variant properties (single component).

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Article Section Kicker` | 135×13 | [3609:39112](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3609-39112) | 44 | ![](previews/article-section-kicker--default.png) |

## Anatomy

Default variant `Article Section Kicker` (hidden layers marked):

- **Article Section Kicker** `COMPONENT`: 135×13, horizontal, gap 0, padding 0/0/0/0, hug×hug
  - **Section** `TEXT`: 135×13, hug×hug, "Crime and Public Safety", Noto Sans Bold 10px

## Component tokens

From `article-section-kicker.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `article-section-kicker.base.section.color` | `{color.theme.primary}` |
| `article-section-kicker.base.section.font-family` | `{font.family.noto-sans}` |
| `article-section-kicker.base.section.font-size` | `{font.size.10}` |
| `article-section-kicker.base.section.font-weight` | `{font.weight.bold}` |
| `article-section-kicker.base.section.line-height` | 12.5px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Text:** the section name typed as written (`Section` text property); uppercase comes from the text case. One line.
- **Type:** Noto Sans Bold 10 (`font/size/10`, `font/style/bold`), line height 12.5px (no line-height token yet), no letter spacing, matching the production top nav and Subscriber Only badge (Karl, 2026-10-23).
- **Color:** `color/theme/primary`, so it changes per theme. Passes WCAG AA on white on all 96 sites (lowest 4.75:1, orlandosentinel.com).
- **Size and spacing:** hugs its text, no padding. 8px (`spacing/100`) between it and the headline in For You cards and rows; 4px (`spacing/050`) in the featured story.
- **Used in:** 1Col Article Card, Horizontal Thumbnail Card and Zone 1 Lead Article Card (`Style=For You`), as an exposed instance.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **44**.

Inside components: Blocks Lead Article Card ×12, Blocks Article Row ×10, Zone 1 Lead Article Card ×6, Horizontal Thumbnail Card ×3, Blocks Card ×3, 1Col Article Card ×1, Style=For You ×1.
Placed on pages: Homepage ×8.

**Built from:** no nested components.

## Production

No production selector recorded yet. Production gaps go in `design-vs-production.md`.

## Known issues

1. Line height 12.5px has no token.

## Files

- `article-section-kicker.tokens.json`: component tokens (DTCG 2025.10).
- `article-section-kicker.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
