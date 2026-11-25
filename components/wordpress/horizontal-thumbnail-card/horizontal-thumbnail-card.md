---
name: Horizontal Thumbnail Card
slug: horizontal-thumbnail-card
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Horizontal Thumbnail Card"
figma_node: "3362:2992"
component_key: c64c9a57e8074d5ae0481728bc08aa3f8c828174
variants: 3
tokens: horizontal-thumbnail-card.tokens.json
skeleton: horizontal-thumbnail-card.html
exported: 2026-11-25
---

# Horizontal Thumbnail Card

> Horizontal article row: compact thumbnail list item (Photos Block secondary list). The For You tab article row is its own component, Blocks Article Row (2026-10-28).

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`Horizontal Thumbnail Card` · 3362:2992](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3362-2992) · key `c64c9a57e8074d5ae0481728bc08aa3f8c828174`
- Documentation frame: [Horizontal Thumbnail Card Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3484-67724) · overview: [previews/horizontal-thumbnail-card--documentation.png](previews/horizontal-thumbnail-card--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Style | Standard | Standard |
| Device | Mobile | Desktop, Mobile, Tablet |

| Other property | Type | Default |
|---|---|---|
| Show Gallery Icon | boolean | True |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Standard / Desktop` | 336×98 | [3362:2990](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3362-2990) | 6 | ![](previews/horizontal-thumbnail-card--standard-desktop.png) |
| `Standard / Mobile` | 336×67 | [3362:2991](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3362-2991) | 66 | ![](previews/horizontal-thumbnail-card--standard-mobile.png) |
| `Standard / Tablet` | 358×84 | [3383:46153](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3383-46153) | 0 | ![](previews/horizontal-thumbnail-card--standard-tablet.png) |

## Anatomy

Default variant `Standard / Desktop` (hidden layers marked):

- **Style=Standard, Device=Desktop** `COMPONENT`: 336×98, vertical, gap 8, padding 8/0/8/0, fixed×hug
  - **Content** `FRAME`: 336×74, horizontal, gap 12, padding 0/0/0/0, fill×hug
    - **Image Container** `FRAME`: 110×74, horizontal, gap 0, padding 0/0/0/0, fixed×fixed
      - **Article Image Placeholder** `INSTANCE`: 110×74, vertical, gap 8, padding 0/0/0/0, fixed×fixed, instance of Article Image Placeholder ()
      - **Gallery Icon Badge** `INSTANCE`: 20×20, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, absolute, instance of Gallery Icon Badge (Size=Small, State=Default)
    - **Headline** `FRAME`: 214×57, vertical, gap 0, padding 0/0/0/0, fill×hug
      - **Article Headline on News paper homepage in thumbnail list position** `TEXT`: 214×57, fill×hug, "Article Headline on News paper homepage ", Noto Sans SemiBold 15px
  - **Bottom Border Line** `LINE`: 336×0, fill×fixed

## Component tokens

From `horizontal-thumbnail-card.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `horizontal-thumbnail-card.base.bottom-border-line.border-color` | `{color.gray.500}` |
| `horizontal-thumbnail-card.base.bottom-border-line.border-style` | solid |
| `horizontal-thumbnail-card.base.bottom-border-line.border-width` | 1px |
| `horizontal-thumbnail-card.base.bottom-border-line.height` | 0px |
| `horizontal-thumbnail-card.base.content.headline.article-headline-on-news-paper-homepage-in-thumbnail-list-position.color` | `{color.gray.min}` |
| `horizontal-thumbnail-card.base.content.headline.article-headline-on-news-paper-homepage-in-thumbnail-list-position.font-family` | `{font.theme.small-headline-family}` |
| `horizontal-thumbnail-card.base.content.headline.article-headline-on-news-paper-homepage-in-thumbnail-list-position.font-size` | `{font.size.15}` |
| `horizontal-thumbnail-card.base.content.headline.article-headline-on-news-paper-homepage-in-thumbnail-list-position.font-weight` | `{font.weight.semibold}` |
| `horizontal-thumbnail-card.base.content.headline.article-headline-on-news-paper-homepage-in-thumbnail-list-position.letter-spacing` | -0.15px |
| `horizontal-thumbnail-card.base.content.headline.article-headline-on-news-paper-homepage-in-thumbnail-list-position.line-height` | 19px |
| `horizontal-thumbnail-card.base.content.image-container.article-image-placeholder.icon-color` | `{color.gray.min}` |
| `horizontal-thumbnail-card.base.content.image-container.gallery-icon-badge.height` | 20px |
| `horizontal-thumbnail-card.base.content.image-container.gallery-icon-badge.width` | 20px |
| `horizontal-thumbnail-card.device-desktop.content.gap` | 12px |
| `horizontal-thumbnail-card.device-desktop.content.image-container.height` | 74px |
| `horizontal-thumbnail-card.device-desktop.content.image-container.width` | 110px |
| `horizontal-thumbnail-card.device-desktop.content.image-container.article-image-placeholder.height` | 74px |
| `horizontal-thumbnail-card.device-desktop.content.image-container.article-image-placeholder.width` | 110px |
| `horizontal-thumbnail-card.device-desktop.root.gap` | 8px |
| `horizontal-thumbnail-card.device-desktop.root.padding-bottom` | 8px |
| `horizontal-thumbnail-card.device-desktop.root.padding-top` | 8px |
| `horizontal-thumbnail-card.device-desktop.root.width` | 336px |
| `horizontal-thumbnail-card.device-mobile.content.gap` | 15px |
| `horizontal-thumbnail-card.device-mobile.content.headline.height` | 51px |
| `horizontal-thumbnail-card.device-mobile.content.image-container.height` | 51px |
| `horizontal-thumbnail-card.device-mobile.content.image-container.width` | 90px |
| `horizontal-thumbnail-card.device-mobile.content.image-container.article-image-placeholder.height` | 51px |
| `horizontal-thumbnail-card.device-mobile.content.image-container.article-image-placeholder.width` | 90px |
| `horizontal-thumbnail-card.device-mobile.root.gap` | 4px |
| `horizontal-thumbnail-card.device-mobile.root.padding-bottom` | 6px |
| `horizontal-thumbnail-card.device-mobile.root.padding-top` | 6px |
| `horizontal-thumbnail-card.device-mobile.root.width` | 336px |
| `horizontal-thumbnail-card.device-tablet.content.gap` | 12px |
| `horizontal-thumbnail-card.device-tablet.content.image-container.height` | 60px |
| `horizontal-thumbnail-card.device-tablet.content.image-container.width` | 90px |
| `horizontal-thumbnail-card.device-tablet.content.image-container.article-image-placeholder.height` | 60px |
| `horizontal-thumbnail-card.device-tablet.content.image-container.article-image-placeholder.width` | 90px |
| `horizontal-thumbnail-card.device-tablet.root.gap` | 8px |
| `horizontal-thumbnail-card.device-tablet.root.padding-bottom` | 8px |
| `horizontal-thumbnail-card.device-tablet.root.padding-top` | 8px |
| `horizontal-thumbnail-card.device-tablet.root.width` | 358px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Gallery Icon Badge** (`Show Gallery Icon`): Size=Small (20px, 3.75px from the right and 5px from the bottom) on the 90 and 110px images. See Gallery Icon Badge.
- **The For You row** moved to Blocks Article Row (Karl, 2026-10-28); its Style=For You variants were deleted. `Style` has one value (Standard) and is kept so existing instances don't change.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **72**.

Inside components: Photos Block ×36.
Placed on pages: Homepage ×36.

**Built from:** Article Image Placeholder ×3, Gallery Icon Badge ×3

## Production

No production selector recorded yet. Production gaps go in `design-vs-production.md`.

## Known issues

1. **Values not bound to a token** (literal in the component tokens): `device-desktop` content gap = 12px; `device-mobile` content gap = 15px; `device-tablet` content gap = 12px; `device-desktop` root gap = 8px; `device-mobile` root gap = 4px; `device-tablet` root gap = 8px; `device-desktop` root padding-bottom = 8px; `device-mobile` root padding-bottom = 6px; `device-tablet` root padding-bottom = 8px; `device-desktop` root padding-top = 8px; `device-mobile` root padding-top = 6px; `device-tablet` root padding-top = 8px.

## Files

- `horizontal-thumbnail-card.tokens.json`: component tokens (DTCG 2025.10).
- `horizontal-thumbnail-card.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
