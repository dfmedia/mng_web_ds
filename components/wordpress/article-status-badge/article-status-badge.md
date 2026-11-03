---
name: Article Status Badge
slug: article-status-badge
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Article Status Badge"
figma_node: "3344:63995"
component_key: a3c41dc84d271d8fadbefb86d033afe3706c21b6
variants: 3
tokens: article-status-badge.tokens.json
skeleton: article-status-badge.html
exported: 2026-11-03
---

# Article Status Badge

> The label above a story's headline that says what kind of story it is: Subscriber (production `.subscriber-only-tag`, a subscriber-only story) or Sponsored (sponsored content; a placeholder until production has one to match); None draws nothing. Used in 1Col Article Card, Section Rail Card Narrow, Photos Block (Subscriber) and Latest Headlines, TopZone Article Card (Sponsored). Its own component in the export since 2026-11-02 (it was only in the legacy export).

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`Article Status Badge` · 3344:63995](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3344-63995) · key `a3c41dc84d271d8fadbefb86d033afe3706c21b6`
- Documentation frame: [Article Status Badge Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3484-67563) · overview: [previews/article-status-badge--documentation.png](previews/article-status-badge--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Type | None | Sponsored, Subscriber, None |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Subscriber` | 122×23 | [3344:63989](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3344-63989) | 60 | ![](previews/article-status-badge--subscriber.png) |
| `None` | 0.01×0.01 | [3344:63994](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3344-63994) | 155 | — |
| `Sponsored` | 149×23 | [3344:63991](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3344-63991) | 33 | ![](previews/article-status-badge--sponsored.png) |

## Anatomy

Default variant `Subscriber` (hidden layers marked):

- **Type=Subscriber** `COMPONENT`: 122×23, horizontal, gap 8, padding 0/4/0/4, hug×hug
  - **Subscriber Only** `TEXT`: 114×23, hug×hug, "Subscriber Only", Noto Sans Regular 13px

## Component tokens

From `article-status-badge.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `article-status-badge.type-subscriber.root.background` | `{color.theme.primary-dark}` |
| `article-status-badge.type-subscriber.subscriber-only.color` | `{color.gray.max}` |
| `article-status-badge.type-subscriber.subscriber-only.font-family` | `{font.family.noto-sans}` |
| `article-status-badge.type-subscriber.subscriber-only.font-size` | `{font.size.13}` |
| `article-status-badge.type-subscriber.subscriber-only.font-weight` | `{font.weight.regular}` |
| `article-status-badge.type-subscriber.subscriber-only.line-height` | 22.652px |
| `article-status-badge.type-sponsored.root.background` | `{color.theme.secondary}` |
| `article-status-badge.type-sponsored.sponsored-content.color` | #141414 |
| `article-status-badge.type-sponsored.sponsored-content.font-family` | `{font.family.noto-sans}` |
| `article-status-badge.type-sponsored.sponsored-content.font-size` | `{font.size.13}` |
| `article-status-badge.type-sponsored.sponsored-content.font-weight` | `{font.weight.regular}` |
| `article-status-badge.type-sponsored.sponsored-content.line-height` | 22.652px |
| `article-status-badge.base.root.padding-left` | `{spacing.050}` |
| `article-status-badge.base.root.padding-right` | `{spacing.050}` |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Matches production** (Karl, 2026-11-02, after a side-by-side of production and Figma). `.subscriber-only-tag` is identical on all 6 review sites (one rule in each theme stylesheet: `boldcoastal.css`, `measuredvibrant.css`, `modernearthy.css`). No homepage had a subscriber-only story that day, so it was drawn by each site's own CSS on a live card (ocregister.com, canoncitydailyrecord.com) to see what renders.
- **Subscriber:** `color/theme/primary-dark` chip (production `var(--primary-dark)`), white (`color/gray/max`) Noto Sans Regular 13 (`font/size/13`, `font/style/regular`) caps, 22.652px line height, no top or bottom padding and 4px (`spacing/050`) at the sides, so the chip is 22.65px tall and hugs its text. Before 2026-11-02 Figma had SemiBold on `color/theme/primary` with 2px / 5px padding (27px tall). Contrast: 8.0:1 Bold Coastal, 9.3:1 Measured Vibrant, 5.8:1 Modern Earthy.
- **Sponsored is a placeholder** (Karl, 2026-11-03), not a production match: no sponsored badge to match was live on any of the 6 review sites on 2026-11-02 or 2026-11-03. Production labels sponsored stories with a "Sponsored:" or "Branded:" headline prefix (Denver Post, Chicago Tribune), a section breadcrumb ("Sponsored Content", "Branded Content") or a "Sponsored" type-of-work link on the article (Denver Post); the Nativo vendor label wasn't served (design-vs-production 22). The chip is the site's secondary color (`color/theme/secondary`) with Gray-Min `#141414` text as a raw value (no token, Karl), in the Subscriber chip's type and padding. Was `#7D161E` with white text until 2026-11-03.
- **None:** draws nothing (a 0 × 0 frame), for cards without a badge.
- **Placement:** the card puts the badge above the headline and sets the space around it; the chip is as wide as its text (production `width: max-content`, 3px below it in production's own margin).
- **Font:** Noto Sans, as everywhere in the design. Production asks for "Source Sans Pro", which the sites never load, so readers see Helvetica or Arial unless they have that font installed (design-vs-production 22.1).

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **248**.

Inside components: TOP ZONE Block ×52, Latest Headlines ×21, Zone 1 Lead Article Card ×12, TopZone Article Card ×5, 1Col Article Card ×4, Latest Headlines List Item ×3.
Placed on pages: Homepage ×65.
86 instances are nested inside other instances.

**Built from:** no nested components.

## Production

Production `.subscriber-only-tag` (theme stylesheets, identical on all 6 review sites, read 2026-11-02): `background-color: var(--primary-dark); color: #fff; padding: 0 5px; text-transform: uppercase; margin: auto auto 3px 0; font-family: "Source Sans Pro", Helvetica, sans-serif !important; font-size: 13px !important; line-height: 22.652px !important; display: block !important; width: max-content !important`. No weight is set, so it renders Regular. No sponsored badge to match (checked on the 6 review sites 2026-11-03; design-vs-production 22).

## Known issues

1. Production's side padding is 5px; the design uses 4px (`spacing/050`), the 4 / 8 grid value (design-vs-production 22.1).
2. Production's font is "Source Sans Pro" (not loaded), so it falls back to Helvetica / Arial; the design is Noto Sans (design-vs-production 22.1).
3. Sponsored is a placeholder (Karl, 2026-11-03) until production has a sponsored badge to match. Its text is raw `#141414` (Gray-Min, not bound; Karl). Gray-Min on `color/theme/secondary` passes 4.5:1 on 20 of the 22 themes and fails on 2: **Denver Post 1.43:1** (navy `#003459`; white would be 12.8:1) and The Baltimore Sun 4.15:1 (`#98712a`; white is 4.44, also short). Review sites: Bold Coastal 14.9, Measured Vibrant / Chicago Tribune / Orlando Sentinel / Modern Earthy / Morning Call 16.7, Denver Post 1.4 (fails).
4. **Values not bound to a token** (literal in the component tokens): `type-sponsored` sponsored-content color = #141414.

## Files

- `article-status-badge.tokens.json`: component tokens (DTCG 2025.10).
- `article-status-badge.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-03 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
