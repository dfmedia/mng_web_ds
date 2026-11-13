---
name: Zone 1 Lead Article Card
slug: zone-1-lead-article-card
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Zone 1 Lead Article Card"
figma_node: "3336:46157"
component_key: 20dc946d8602b998c7cb522bb6e28d102459bf66
variants: 6
tokens: zone-1-lead-article-card.tokens.json
skeleton: zone-1-lead-article-card.html
exported: 2026-11-13
---

# Zone 1 Lead Article Card

> The homepage Zone 1 lead story (production lead with Related list); Gallery=Image or Gallery=Slideshow (a photo gallery lead, which shows the Zone 1 Slideshow instead of the image). The For You featured story is its own component, Blocks Lead Article Card (2026-10-28).

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`Zone 1 Lead Article Card` · 3336:46157](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3336-46157) · key `20dc946d8602b998c7cb522bb6e28d102459bf66`
- Documentation frame: [Zone 1 Lead Article Card Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3484-67601) · overview: [previews/zone-1-lead-article-card--documentation.png](previews/zone-1-lead-article-card--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Style | Standard | Standard |
| Device | Mobile | Desktop, Mobile, Tablet |
| Gallery | Image | Image, Slideshow |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Standard / Desktop / Image` | 700×366 | [3336:46155](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3336-46155) | 2 | ![](previews/zone-1-lead-article-card--standard-desktop-image.png) |
| `Standard / Desktop / Slideshow` | 700×375 | [3640:50328](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3640-50328) | 0 | ![](previews/zone-1-lead-article-card--standard-desktop-slideshow.png) |
| `Standard / Mobile / Image` | 340×620.01 | [3336:46156](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3336-46156) | 7 | ![](previews/zone-1-lead-article-card--standard-mobile-image.png) |
| `Standard / Mobile / Slideshow` | 340×702.01 | [3640:50288](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3640-50288) | 0 | ![](previews/zone-1-lead-article-card--standard-mobile-slideshow.png) |
| `Standard / Tablet / Image` | 748×366 | [3383:46111](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3383-46111) | 2 | ![](previews/zone-1-lead-article-card--standard-tablet-image.png) |
| `Standard / Tablet / Slideshow` | 748×366 | [3640:50388](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3640-50388) | 0 | ![](previews/zone-1-lead-article-card--standard-tablet-slideshow.png) |

## Anatomy

Default variant `Standard / Desktop / Image` (hidden layers marked):

- **Style=Standard, Device=Desktop, Gallery=Image** `COMPONENT`: 700×366, horizontal, gap 20, padding 0/0/16/0, hug×hug
  - **1st Col** `FRAME`: 296×350, vertical, gap 4, padding 0/0/0/0, fixed×hug
    - **Article Status Badge** `INSTANCE`: 0.01×0.01, horizontal, gap 0, padding 0/0/0/0, hug×hug, instance of Article Status Badge (Type=None), **hidden**
    - **Headline Container** `FRAME`: 296×132, horizontal, gap 8, padding 0/0/0/0, fill×hug
      - **Man charged with murder after fatal attack on bicycling doctor in Dana Point** `TEXT`: 296×132, fill×hug, "Man charged with murder after fatal atta", Noto Serif Bold 29px
    - **Excerpt Container** `FRAME`: 296×38, horizontal, gap 8, padding 0/0/0/0, fill×hug
      - **Vanroy Evan Smith, 39, of Long Beach is being held on $1 million bail.** `TEXT`: 296×38, fill×hug, "Vanroy Evan Smith, 39, of Long Beach is ", Noto Sans Regular 15px
    - **Relate Articles Zone 1 Container** `FRAME`: 296×172, vertical, gap 4, padding 0/0/0/0, fill×hug
      - **Related Articles Header** `FRAME`: 296×16, horizontal, gap 8, padding 0/0/0/0, fill×hug
        - **Header** `TEXT`: 47×16, hug×hug, "Related", Noto Serif Bold 12px
      - **Related Articles Body** `FRAME`: 296×152, vertical, gap 4, padding 0/0/0/0, fill×hug
        - **Related Article List Item** `INSTANCE`: 295×41, horizontal, gap 0, padding 0/0/0/0, fixed×hug, instance of Related Article List Item ()
        - **Related Article List Item** `INSTANCE`: 295×41, horizontal, gap 0, padding 0/0/0/0, fixed×hug, instance of Related Article List Item ()
        - **Related Article List Item** `INSTANCE`: 295×62, horizontal, gap 0, padding 0/0/0/0, fixed×hug, instance of Related Article List Item ()
  - **2nd Col** `FRAME`: 384×256, vertical, gap 8, padding 0/0/0/0, fixed×fixed
    - **Article Image Placeholder** `INSTANCE`: 384×256, vertical, gap 8, padding 0/0/0/0, fixed×fixed, instance of Article Image Placeholder ()

## Component tokens

From `zone-1-lead-article-card.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `zone-1-lead-article-card.base.1st-col.gap` | 4px |
| `zone-1-lead-article-card.base.1st-col.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.color` | `{color.gray.100}` |
| `zone-1-lead-article-card.base.1st-col.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-family` | `{font.theme.body-family}` |
| `zone-1-lead-article-card.base.1st-col.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-size` | `{font.size.15}` |
| `zone-1-lead-article-card.base.1st-col.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-weight` | `{font.weight.regular}` |
| `zone-1-lead-article-card.base.1st-col.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.line-height` | 19px |
| `zone-1-lead-article-card.base.1st-col.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.color` | `{color.gray.min}` |
| `zone-1-lead-article-card.base.1st-col.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.font-family` | `{font.theme.heading-family}` |
| `zone-1-lead-article-card.base.1st-col.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.font-size` | `{font.size.29}` |
| `zone-1-lead-article-card.base.1st-col.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.font-weight` | `{font.weight.bold}` |
| `zone-1-lead-article-card.base.1st-col.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.letter-spacing` | -0.87px |
| `zone-1-lead-article-card.base.1st-col.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.line-height` | 33px |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.gap` | 4px |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-body.gap` | 4px |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-body.related-article-list-item.height` | 62px |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-body.related-article-list-item.icon-color` | `{color.gray.black}` |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-body.related-article-list-item.width` | 295px |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-header.border-bottom-width` | 1px |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-header.border-color` | `{color.gray.200}` |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-header.border-style` | solid |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-header.header.color` | `{color.gray.200}` |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-header.header.font-family` | `{font.family.noto-serif}` |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-header.header.font-size` | `{font.size.12}` |
| `zone-1-lead-article-card.base.1st-col.relate-articles-zone-1-container.related-articles-header.header.font-weight` | `{font.weight.bold}` |
| `zone-1-lead-article-card.base.2nd-col.article-image-placeholder.icon-color` | `{color.gray.min}` |
| `zone-1-lead-article-card.base.2nd-col.zone-1-slideshow.icon-color` | #e1a1ff |
| `zone-1-lead-article-card.base.featured-image.height` | 227px |
| `zone-1-lead-article-card.base.featured-image.article-image-placeholder.height` | 227px |
| `zone-1-lead-article-card.base.featured-image.article-image-placeholder.icon-color` | `{color.gray.min}` |
| `zone-1-lead-article-card.base.featured-image.article-image-placeholder.width` | 340px |
| `zone-1-lead-article-card.base.root.background` | `{color.gray.max}` |
| `zone-1-lead-article-card.base.root.padding-bottom` | 16px |
| `zone-1-lead-article-card.base.slideshow.zone-1-slideshow.height` | 309px |
| `zone-1-lead-article-card.base.slideshow.zone-1-slideshow.icon-color` | #e1a1ff |
| `zone-1-lead-article-card.base.slideshow.zone-1-slideshow.width` | 340px |
| `zone-1-lead-article-card.device-desktop.1st-col.width` | 296px |
| `zone-1-lead-article-card.device-desktop.2nd-col.height` | 256px |
| `zone-1-lead-article-card.device-desktop.2nd-col.article-image-placeholder.height` | 256px |
| `zone-1-lead-article-card.device-desktop.2nd-col.article-image-placeholder.width` | 384px |
| `zone-1-lead-article-card.device-desktop.2nd-col.zone-1-slideshow.height` | 359px |
| `zone-1-lead-article-card.device-desktop.2nd-col.zone-1-slideshow.width` | 352px |
| `zone-1-lead-article-card.device-desktop.root.gap` | 20px |
| `zone-1-lead-article-card.device-desktop.root.width` | 700px |
| `zone-1-lead-article-card.device-tablet.1st-col.width` | 364px |
| `zone-1-lead-article-card.device-tablet.2nd-col.height` | 243px |
| `zone-1-lead-article-card.device-tablet.2nd-col.article-image-placeholder.height` | 243px |
| `zone-1-lead-article-card.device-tablet.2nd-col.article-image-placeholder.width` | 364px |
| `zone-1-lead-article-card.device-tablet.2nd-col.zone-1-slideshow.height` | 319px |
| `zone-1-lead-article-card.device-tablet.2nd-col.zone-1-slideshow.width` | 364px |
| `zone-1-lead-article-card.device-tablet.root.gap` | 20px |
| `zone-1-lead-article-card.device-desktop.gallery-image.2nd-col.width` | 384px |
| `zone-1-lead-article-card.device-desktop.gallery-slideshow.2nd-col.width` | 352px |
| `zone-1-lead-article-card.device-tablet.gallery-image.2nd-col.width` | 364px |
| `zone-1-lead-article-card.device-tablet.gallery-slideshow.2nd-col.width` | 364px |
| `zone-1-lead-article-card.device-mobile.bottom-border-line.border-color` | `{color.gray.500}` |
| `zone-1-lead-article-card.device-mobile.bottom-border-line.border-style` | solid |
| `zone-1-lead-article-card.device-mobile.bottom-border-line.border-width` | 1px |
| `zone-1-lead-article-card.device-mobile.bottom-border-line.height` | 0px |
| `zone-1-lead-article-card.device-mobile.excerpt-container.padding-bottom` | 16px |
| `zone-1-lead-article-card.device-mobile.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.color` | `{color.gray.100}` |
| `zone-1-lead-article-card.device-mobile.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-family` | `{font.theme.body-family}` |
| `zone-1-lead-article-card.device-mobile.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-size` | `{font.size.15}` |
| `zone-1-lead-article-card.device-mobile.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-weight` | `{font.weight.regular}` |
| `zone-1-lead-article-card.device-mobile.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.line-height` | 19px |
| `zone-1-lead-article-card.device-mobile.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.color` | `{color.gray.min}` |
| `zone-1-lead-article-card.device-mobile.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.font-family` | `{font.theme.heading-family}` |
| `zone-1-lead-article-card.device-mobile.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.font-size` | `{font.size.25}` |
| `zone-1-lead-article-card.device-mobile.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.font-weight` | `{font.weight.bold}` |
| `zone-1-lead-article-card.device-mobile.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.letter-spacing` | -0.75px |
| `zone-1-lead-article-card.device-mobile.headline-container.man-charged-with-murder-after-fatal-attack-on-bicycling-doctor-in-dana-point.line-height` | 29px |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.gap` | 4px |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.padding-bottom` | 16px |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-body.gap` | 4px |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-body.related-article-list-item.height` | 41px |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-body.related-article-list-item.icon-color` | `{color.gray.black}` |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-body.related-article-list-item.width` | 340px |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-header.border-bottom-width` | 1px |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-header.border-color` | `{color.gray.200}` |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-header.border-style` | solid |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-header.header.color` | `{color.gray.200}` |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-header.header.font-family` | `{font.family.noto-serif}` |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-header.header.font-size` | `{font.size.12}` |
| `zone-1-lead-article-card.device-mobile.relate-articles-zone-1-container.related-articles-header.header.font-weight` | `{font.weight.bold}` |
| `zone-1-lead-article-card.device-mobile.root.gap` | 8px |
| `zone-1-lead-article-card.device-mobile.root.width` | 340px |

## Behavior and breakpoints

| Device | Viewport | Layout |
|---|---|---|
| Mobile | below 640px, and 800–1279px on the homepage | One column; 25/29 headline below 640px; photo 3:2, full width |
| Tablet | 640–799px | Two columns, 50% / 50%, 20px apart (built 364 + 20 + 364) |
| Desktop | 1280px and up | Two columns, 43.75% / 56.25%, 20px apart (built 296 + 20 + 384); slideshow 50% |

- **Headline and excerpt:** (Noto Serif Bold 29/33, −0.87px at 640px and up; 25/29, −0.03em below; excerpt Noto Sans 15/19 `color/gray/100`, 4px below the headline group on Desktop and Tablet, as in production).
- **Layout:** Desktop and Tablet are two columns (text, then image; 20px (`spacing/250`) apart); Mobile is one column (headline group, image, excerpt, Related list; 8px gaps) with a 1px bottom rule below.
- **Sizes match production** (Karl, 2026-11-03; the lead CSS `.feature-primary .feature-large` is identical on all 6 review sites): the card fills its column. Desktop (1280px and up): text `calc(43.75% − 0.71rem)` and image `calc(56.25% − 0.55rem)`, about 20px apart (`spacing/250`), built 296 + 20 + 384 = 700; a slideshow takes 50% (built 352). Tablet (640–799px): text and image `calc(50% − 0.63rem)` each, 20px apart, built 364 + 20 + 364 = 748 (was 358 + 32 + 358). The photo is 3:2, production's crop, so its height follows its width: 384×256 Desktop, 364×243 Tablet, 340×227 Mobile (was 391×271 and 340×236).
- **Gallery** (Karl, 2026-10-26): `Gallery=Slideshow` replaces the image with the Zone 1 Slideshow, as production does for gallery leads (`.feature-large .article-slideshow`). Zone 1 has no Gallery Icon Badge.
- **Gallery=Slideshow layout follows the lead's width, not the screen:** two columns when the lead is about 700px wide or more (Desktop: text 43.75% and slideshow 50%, the rest of the card between them; Tablet: text and slideshow 50% each, 20px apart); one column when narrower: headline, excerpt, then the Related list, then the slideshow full width. On the homepage the third page column narrows the lead, so it is one column from 800 to 1279px (594 wide at 1024) and below 640px, and two columns from 640 to 799px and from 1280px up (production, checked on develop.denverpost.com 2026-10-26).
- **The For You featured story** moved to Blocks Lead Article Card (Karl, 2026-10-28); its Style=For You variants were deleted. `Style` has one value (Standard) and is kept so existing instances don't change.
- **Headline font follows the theme** (2026-10-30, Karl): bound to `font/theme/heading-family` (Noto Serif in Bold Coastal and Measured Vibrant, Noto Sans in Modern Earthy), like every other headline; it was bound to Noto Serif itself. The excerpt follows `font/theme/body-family`.
- **Related list** (2026-11-02): a "Related" header, then up to three Related Article List Items (their own component, matched to production that day), 4px (`spacing/050`) apart; the items hug their height (they were fixed at 41 / 45px).

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **11**.

Inside components: TOP ZONE Block ×5.
Placed on pages: Homepage ×6.

**Built from:** Related Article List Item ×18, Article Image Placeholder ×3, Zone 1 Slideshow ×3

## Production

Production `.feature-primary .feature-large` (Zone 1 lead).

## Known issues

1. Column gap 20px (`spacing/250`) is a raw value in Figma (not bound to the variable).
2. Fixed 2026-11-03: the Tablet image (391px) was wider than its 358px column.
3. **Values not bound to a token** (literal in the component tokens): `base` 1st-col gap = 4px; `base` 1st-col.relate-articles-zone-1-container gap = 4px; `base` 1st-col.relate-articles-zone-1-container.related-articles-body gap = 4px; `base` 2nd-col.zone-1-slideshow icon-color = #e1a1ff; `device-mobile` excerpt-container padding-bottom = 16px; `device-mobile` relate-articles-zone-1-container gap = 4px; `device-mobile` relate-articles-zone-1-container padding-bottom = 16px; `device-mobile` relate-articles-zone-1-container.related-articles-body gap = 4px; `device-desktop` root gap = 20px; `device-mobile` root gap = 8px; `device-tablet` root gap = 20px; `base` root padding-bottom = 16px; and 1 more.

## Files

- `zone-1-lead-article-card.tokens.json`: component tokens (DTCG 2025.10).
- `zone-1-lead-article-card.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-13 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
