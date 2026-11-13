---
name: 1Col Article Card
slug: 1col-article-card
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "1Col Article Card"
figma_node: "3536:39065"
component_key: d527b9d45b9d427355fa4f71183d2232ca6eaf27
variants: 2
tokens: 1col-article-card.tokens.json
skeleton: 1col-article-card.html
exported: 2026-11-13
---

# 1Col Article Card

> Single-column article card. Style=Standard (4:3 image, CardQuaternary headline, compact excerpt: section-highlight lead cards) and Style=Media Lead (16:9 image, TitleMedia headline, excerpt: the Photos lead). The For You tab card is its own component, Blocks Card (2026-10-28).

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`1Col Article Card` · 3536:39065](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3536-39065) · key `d527b9d45b9d427355fa4f71183d2232ca6eaf27`
- Documentation frame: [1Col Article Card Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3484-67695) · overview: [previews/1col-article-card--documentation.png](previews/1col-article-card--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Style | Standard | Standard, Media Lead |

| Other property | Type | Default |
|---|---|---|
| Show Image | boolean | True |
| Show Subscriber Badge | boolean | False |
| Show Excerpt | boolean | True |
| Show Meta | boolean | False |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Standard` | 296×372 | [3352:24163](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3352-24163) | 44 | ![](previews/1col-article-card--standard.png) |
| `Media Lead` | 296×413.5 | [3536:39050](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3536-39050) | 12 | ![](previews/1col-article-card--media-lead.png) |

## Anatomy

Default variant `Standard` (hidden layers marked):

- **Style=Standard** `COMPONENT`: 296×372, vertical, gap 8, padding 0/0/16/0, fixed×hug
  - **Article Graphic** `INSTANCE`: 296×222, vertical, gap 8, padding 0/0/0/0, fill×fixed, instance of Article Image Placeholder ()
  - **SubsOnlyBadge** `INSTANCE`: 122×23, horizontal, gap 8, padding 0/4/0/4, hug×hug, instance of Article Status Badge (Type=Subscriber), **hidden**
  - **Headline Container** `FRAME`: 296×72, vertical, gap 15, padding 0/0/0/0, fill×hug
    - **Article Headline on News paper homepage in first position on 1col section block** `TEXT`: 296×72, fill×hug, "Article Headline on News paper homepage ", Noto Sans SemiBold 19px
  - **Excerpt Container** `FRAME`: 296×38, horizontal, gap 8, padding 0/0/0/0, fill×hug
    - **Vanroy Evan Smith, 39, of Long Beach is being held on $1 million bail.** `TEXT`: 296×38, fill×hug, "Vanroy Evan Smith, 39, of Long Beach is ", Noto Sans Regular 15px
  - **Meta Container** `FRAME`: 296×18, vertical, gap 8, padding 0/0/0/0, fixed×hug, **hidden**
    - **56 mins ago** `TEXT`: 296×18, fill×hug, "56 mins ago", Noto Sans Regular 13px
  - **Bottom Border Line** `LINE`: 296×0, fill×fixed

## Component tokens

From `1col-article-card.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `1col-article-card.style-standard.article-graphic.height` | 222px |
| `1col-article-card.style-standard.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-family` | `{font.theme.small-headline-family}` |
| `1col-article-card.style-standard.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-size` | `{font.size.15}` |
| `1col-article-card.style-standard.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-weight` | `{font.weight.regular}` |
| `1col-article-card.style-standard.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.line-height` | 19px |
| `1col-article-card.style-standard.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.font-family` | `{font.theme.small-headline-family}` |
| `1col-article-card.style-standard.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.font-size` | `{font.size.19}` |
| `1col-article-card.style-standard.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.font-weight` | `{font.weight.semibold}` |
| `1col-article-card.style-standard.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.letter-spacing` | -0.665px |
| `1col-article-card.style-standard.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.line-height` | 24px |
| `1col-article-card.style-media-lead.article-graphic.height` | 166.5px |
| `1col-article-card.style-media-lead.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-family` | `{font.theme.body-family}` |
| `1col-article-card.style-media-lead.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-size` | `{font.size.15}` |
| `1col-article-card.style-media-lead.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.font-weight` | `{font.weight.regular}` |
| `1col-article-card.style-media-lead.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.line-height` | 21px |
| `1col-article-card.style-media-lead.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.font-family` | `{font.theme.heading-family}` |
| `1col-article-card.style-media-lead.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.font-size` | `{font.size.29}` |
| `1col-article-card.style-media-lead.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.font-weight` | `{font.weight.bold}` |
| `1col-article-card.style-media-lead.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.letter-spacing` | -1.16px |
| `1col-article-card.style-media-lead.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.line-height` | 33px |
| `1col-article-card.base.article-graphic.icon-color` | `{color.gray.min}` |
| `1col-article-card.base.article-graphic.width` | 296px |
| `1col-article-card.base.bottom-border-line.border-color` | `{color.gray.500}` |
| `1col-article-card.base.bottom-border-line.border-style` | solid |
| `1col-article-card.base.bottom-border-line.border-width` | 1px |
| `1col-article-card.base.bottom-border-line.height` | 0px |
| `1col-article-card.base.excerpt-container.vanroy-evan-smith-39-of-long-beach-is-being-held-on-1-million-bail.color` | `{color.gray.100}` |
| `1col-article-card.base.headline-container.article-headline-on-news-paper-homepage-in-first-position-on-1col-section-block.color` | `{color.gray.min}` |
| `1col-article-card.base.root.background` | `{color.gray.max}` |
| `1col-article-card.base.root.gap` | 8px |
| `1col-article-card.base.root.padding-bottom` | 16px |
| `1col-article-card.base.root.width` | 296px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Properties:** Show Image, Show Subscriber Badge, Show Excerpt and Show Meta.
- **The For You card** moved to Blocks Card (Karl, 2026-10-28); its Style=For You variant and the Show Gallery Icon property were deleted.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **56**.

Inside components: Section Rail Card ×12, Photos Block ×6, Section Rail Card Narrow ×2.
Placed on pages: Homepage ×6.
30 instances are nested inside other instances.

**Built from:** Article Image Placeholder ×2

## Production

No production selector recorded yet. Production gaps go in `design-vs-production.md`.

## Known issues

1. **Values not bound to a token** (literal in the component tokens): `base` root gap = 8px; `base` root padding-bottom = 16px.

## Files

- `1col-article-card.tokens.json`: component tokens (DTCG 2025.10).
- `1col-article-card.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-13 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
