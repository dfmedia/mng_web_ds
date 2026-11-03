---
name: TopZone Article Card
slug: topzone-article-card
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "TopZone Article Card"
figma_node: "3336:46079"
component_key: 4daecb8ad8cafb30916853070665c768d1fc18e8
variants: 5
tokens: topzone-article-card.tokens.json
skeleton: topzone-article-card.html
exported: 2026-11-02
---

# TopZone Article Card

> The four homepage Zone 1 story cards beside the Zone 1 lead (Editor's Picks). Device values are production's own breakpoints for these cards (`.busy .feature-small`, identical on all 6 review sites): image beside the headline at XS, S and L, image over the headline at M and XL.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`TopZone Article Card` · 3336:46079](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3336-46079) · key `4daecb8ad8cafb30916853070665c768d1fc18e8`
- Documentation frame: [TopZone Article Card Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3484-67610) · overview: [previews/topzone-article-card--documentation.png](previews/topzone-article-card--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Device | XS (≤639px) | XS (≤639px), S (640–799px), M (800–1039px), L (1040–1279px), XL (≥1280px) |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `XS (≤639px)` | 340×107 | [3336:46078](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3336-46078) | 12 | ![](previews/topzone-article-card--xs-639px.png) |
| `S (640–799px)` | 330×89 | [3692:40921](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3692-40921) | 8 | ![](previews/topzone-article-card--s-640-799px.png) |
| `M (800–1039px)` | 197×191.81 | [3553:32800](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3553-32800) | 8 | ![](previews/topzone-article-card--m-800-1039px.png) |
| `L (1040–1279px)` | 507×173 | [3553:32811](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3553-32811) | 8 | ![](previews/topzone-article-card--l-1040-1279px.png) |
| `XL (≥1280px)` | 336×261 | [3336:46077](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3336-46077) | 8 | ![](previews/topzone-article-card--xl-1280px.png) |

## Anatomy

Default variant `XS (≤639px)` (hidden layers marked):

- **Device=XS (≤639px)** `COMPONENT`: 340×107, vertical, gap 16, padding 0/0/16/0, fixed×hug
  - **Content** `FRAME`: 340×75, horizontal, gap 8, padding 0/0/0/0, fill×hug
    - **Article Image Placeholder** `INSTANCE`: 100×67, vertical, gap 8, padding 0/0/0/0, fixed×fixed, instance of Article Image Placeholder ()
    - **Headline** `FRAME`: 232×75, vertical, gap 15, padding 0/0/0/0, fixed×hug
      - **Article Status Badge** `INSTANCE`: 0.01×0.01, horizontal, gap 0, padding 0/0/0/0, hug×hug, instance of Article Status Badge (Type=None), **hidden**
      - **Article Headline on News paper homepage in second zone position** `TEXT`: 232×75, fill×hug, "Article Headline on News paper homepage ", Noto Serif Bold 18px
  - **Bottom Border Line** `LINE`: 340×0, fill×fixed

## Component tokens

From `topzone-article-card.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `topzone-article-card.device-m-800-1039px.article-image-placeholder.height` | 110.81px |
| `topzone-article-card.device-m-800-1039px.article-image-placeholder.width` | 197px |
| `topzone-article-card.device-m-800-1039px.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-family` | `{font.theme.heading-family}` |
| `topzone-article-card.device-m-800-1039px.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-size` | `{font.size.16}` |
| `topzone-article-card.device-m-800-1039px.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-weight` | `{font.weight.bold}` |
| `topzone-article-card.device-m-800-1039px.headline.article-headline-on-news-paper-homepage-in-second-zone-position.line-height` | 18.88px |
| `topzone-article-card.device-m-800-1039px.root.gap` | `{spacing.100}` |
| `topzone-article-card.device-m-800-1039px.root.width` | 197px |
| `topzone-article-card.device-xl-1280px.article-image-placeholder.height` | 189px |
| `topzone-article-card.device-xl-1280px.article-image-placeholder.width` | 336px |
| `topzone-article-card.device-xl-1280px.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-family` | `{font.theme.heading-family}` |
| `topzone-article-card.device-xl-1280px.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-size` | `{font.size.20}` |
| `topzone-article-card.device-xl-1280px.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-weight` | `{font.weight.bold}` |
| `topzone-article-card.device-xl-1280px.headline.article-headline-on-news-paper-homepage-in-second-zone-position.letter-spacing` | -0.4px |
| `topzone-article-card.device-xl-1280px.headline.article-headline-on-news-paper-homepage-in-second-zone-position.line-height` | 23.6px |
| `topzone-article-card.device-xl-1280px.root.gap` | `{spacing.100}` |
| `topzone-article-card.device-xl-1280px.root.width` | 336px |
| `topzone-article-card.base.article-image-placeholder.icon-color` | `{color.gray.min}` |
| `topzone-article-card.base.bottom-border-line.border-color` | `{color.gray.500}` |
| `topzone-article-card.base.bottom-border-line.border-style` | solid |
| `topzone-article-card.base.bottom-border-line.border-width` | 1px |
| `topzone-article-card.base.bottom-border-line.height` | 0px |
| `topzone-article-card.base.content.article-image-placeholder.icon-color` | `{color.gray.min}` |
| `topzone-article-card.base.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.color` | `{color.gray.min}` |
| `topzone-article-card.base.headline.article-headline-on-news-paper-homepage-in-second-zone-position.color` | `{color.gray.min}` |
| `topzone-article-card.base.root.background` | `{color.gray.max}` |
| `topzone-article-card.base.root.padding-bottom` | `{spacing.200}` |
| `topzone-article-card.device-xs-639px.content.gap` | `{spacing.100}` |
| `topzone-article-card.device-xs-639px.content.article-image-placeholder.height` | 67px |
| `topzone-article-card.device-xs-639px.content.article-image-placeholder.width` | 100px |
| `topzone-article-card.device-xs-639px.content.headline.width` | 232px |
| `topzone-article-card.device-xs-639px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-family` | `{font.theme.heading-family}` |
| `topzone-article-card.device-xs-639px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-size` | `{font.size.18}` |
| `topzone-article-card.device-xs-639px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-weight` | `{font.weight.bold}` |
| `topzone-article-card.device-xs-639px.root.gap` | `{spacing.200}` |
| `topzone-article-card.device-xs-639px.root.width` | 340px |
| `topzone-article-card.device-s-640-799px.content.gap` | `{spacing.250}` |
| `topzone-article-card.device-s-640-799px.content.article-image-placeholder.height` | 54px |
| `topzone-article-card.device-s-640-799px.content.article-image-placeholder.width` | 97px |
| `topzone-article-card.device-s-640-799px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-family` | `{font.theme.heading-family}` |
| `topzone-article-card.device-s-640-799px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-size` | `{font.size.16}` |
| `topzone-article-card.device-s-640-799px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-weight` | `{font.weight.bold}` |
| `topzone-article-card.device-s-640-799px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.line-height` | 18.88px |
| `topzone-article-card.device-s-640-799px.root.gap` | `{spacing.200}` |
| `topzone-article-card.device-s-640-799px.root.width` | 330px |
| `topzone-article-card.device-l-1040-1279px.content.gap` | `{spacing.250}` |
| `topzone-article-card.device-l-1040-1279px.content.article-image-placeholder.height` | 157px |
| `topzone-article-card.device-l-1040-1279px.content.article-image-placeholder.width` | 280px |
| `topzone-article-card.device-l-1040-1279px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-family` | `{font.theme.heading-family}` |
| `topzone-article-card.device-l-1040-1279px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-size` | `{font.size.18}` |
| `topzone-article-card.device-l-1040-1279px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.font-weight` | `{font.weight.bold}` |
| `topzone-article-card.device-l-1040-1279px.content.headline.article-headline-on-news-paper-homepage-in-second-zone-position.line-height` | 21.6px |
| `topzone-article-card.device-l-1040-1279px.root.width` | 507px |

## Behavior and breakpoints

| Device (production range) | Grid token | Production layout | Built at | Future MNG Device breakpoint (not adopted yet) |
|---|---|---|---|---|
| XS (≤639px) | `wordpress-grid.xs` | One per row, image beside the headline (1/3) | 340px | Mobile (below 768) |
| S (640–799px) | `wordpress-grid.s` | Two per row, image beside the headline (97×54), 16/1.18 | 330px | Mobile / Tablet (decide when standardizing) |
| M (800–1039px) | `wordpress-grid.m` | Two per row, image over the headline, 16/1.18 | 197px | Tablet (768–1023) |
| L (1040–1279px) | `wordpress-grid.l` | One per row, image beside the headline (280×157), 18/1.2 | 507px | Tablet landscape (1024–1279) |
| XL (≥1280px) | `wordpress-grid.xl` | Two per row, image over the headline, 20/1.18, −0.02em | 336px | Desktop (1280 and up) |

- **Breakpoints are production's, for this component** (Karl, 2026-10-30): each Device value is named by the range it covers (`XS (≤639px)`, `S (640–799px)`, `M (800–1039px)`, `L (1040–1279px)`, `XL (≥1280px)`); the width a variant is drawn at is a note, not a breakpoint. Production CSS: `.busy .feature-small` at 640 / 800 / 1040 / 1280px, the same on all 6 review sites (scan 2026-10-30, `components/breakpoint-audit.md`).
- **XL** (1280px and up, built 336): two per row. Article Image 336×189; 8px (`spacing/100`) to the headline; headline `Editorial/Titles/CardTertiary` (20/23.6, −0.4px); 16px (`spacing/200`) bottom padding.
- **L** (1040–1279px, built 507): one per row, thumbnail row. Article Image 280×157; 20px (`spacing/250`) to the headline column; headline `Editorial/Titles/CardTertiaryRow` (18/21.6); 16px bottom padding; the bottom rule is hidden. Matches production, measured live at 1100px (2026-10-30).
- **M** (800–1039px, built 197): two per row. Article Image 197×111; 8px; headline `Editorial/Titles/CardTertiaryCompact` (16/18.88); 16px bottom padding.
- **S** (640–799px, built 330; added 2026-10-30 from production, measured live at 700px, Karl): two per row, thumbnail row. Article Image 97×54; 20px (`spacing/250`) to the headline column; headline `Editorial/Titles/CardTertiaryCompact` (16/18.88); 16px (`spacing/200`) to the 1px `color/gray/500` bottom rule.
- **XS** (639px and below, built 340): one per row, thumbnail row. Article Image 100×67; 8px to the headline column; headline Noto Serif Bold 18 (`font/size/18`), auto line height; 16px to the 1px `color/gray/500` bottom rule.
- **Headline font follows the theme** (`font/theme/heading-family`; the XS headline bound to it 2026-10-30, like the other headlines). `color/gray/min` on `color/gray/max`, 18.4:1.
- **Headline group gap 15px is raw on purpose** (Karl, 2026-10-30): no token is made for it. It only shows when the Article Status Badge is on.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **44**.

Inside components: TOP ZONE Block ×20.
Placed on pages: Homepage ×24.

**Built from:** Article Image Placeholder ×5

## Production

Production homepage Zone 1 (`.feature-primary.busy .feature-small`), the four secondary stories beside the lead. CSS scanned on all 6 review sites 2026-10-30; measured live on ocregister.com at 1728px (XL, 345 wide), 1100px (L) and 700px (S).

## Known issues

1. Production images keep their own proportions inside the image box, top-aligned, with 8px below the box; Figma fills the box (design-vs-production 16.4).
2. Production headline #000000 and, at 640–799px, rule #AAA7A4; the design is `color/gray/min` and `color/gray/500` (design-vs-production 16.4).
3. Article Status Badge: hidden in every variant and no component property turns it on; XL and M hold it outside the headline group (Type = Sponsored), XS, S and L inside it (Type = None).
4. The headline-group gap is 15px with no token (kept raw by decision, Karl 2026-10-30).

## Files

- `topzone-article-card.tokens.json`: component tokens (DTCG 2025.10).
- `topzone-article-card.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-02 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
