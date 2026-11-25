---
name: Section Title / Eyebrow
slug: section-title-eyebrow
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Section Title / Eyebrow"
figma_node: "3333:42278"
component_key: 5328709ebbc037e3ef524cab212533ccb6fb6465
variants: 2
tokens: section-title-eyebrow.tokens.json
skeleton: section-title-eyebrow.html
exported: 2026-11-25
---

# Section Title / Eyebrow

> Section header for homepage blocks and the For You feed. Style = Underline, Bold; Chevron (on by default), Show Subhead (off by default), Subhead text and Show Info properties.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`Section Title / Eyebrow` · 3333:42278](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3333-42278) · key `5328709ebbc037e3ef524cab212533ccb6fb6465`
- Documentation frame: [Section Title / Eyebrow Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3484-67627) · overview: [previews/section-title-eyebrow--documentation.png](previews/section-title-eyebrow--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Style | Underline | Underline, Bold |

| Other property | Type | Default |
|---|---|---|
| Chevron | boolean | True |
| Show Subhead | boolean | False |
| Subhead | text | Based on what you read. |
| Show Info | boolean | True |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Underline` | 214×32 | [3326:41622](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3326-41622) | 96 | ![](previews/section-title-eyebrow--underline.png) |
| `Bold` | 213×27 | [3333:42270](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3333-42270) | 0 | ![](previews/section-title-eyebrow--bold.png) |

## Anatomy

Default variant `Underline` (hidden layers marked):

- **Style=Underline** `COMPONENT`: 214×32, vertical, gap 8, padding 0/0/0/0, hug×hug
  - **Title Row** `FRAME`: 214×22, horizontal, gap 8, padding 0/0/0/0, hug×hug
    - **Latest Headlines** `TEXT`: 190×22, hug×hug, "Latest Headlines", Noto Sans Regular 20px
    - **Icons** `INSTANCE`: 16×16, horizontal, gap 8, padding 0/3/0/3, fixed×fixed, instance of Icons (Name=arrow-right)
  - **Underline** `RECTANGLE`: 214×2, fill×fixed
  - **Subhead Row** `FRAME`: 167×18, horizontal, gap 4, padding 0/0/0/0, hug×hug, **hidden**
    - **Subhead** `TEXT`: 151×18, hug×hug, "Based on what you read.", Noto Sans Regular 13px
    - **Info Button** `INSTANCE`: 12×12, horizontal, gap 6, padding 0/0/0/0, fixed×fixed, instance of Icons (Name=info)

## Component tokens

From `section-title-eyebrow.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `section-title-eyebrow.style-underline.root.gap` | `{spacing.100}` |
| `section-title-eyebrow.style-underline.title-row.latest-headlines.color` | `{color.gray.100}` |
| `section-title-eyebrow.style-underline.title-row.latest-headlines.letter-spacing` | 0.7px |
| `section-title-eyebrow.style-underline.title-row.latest-headlines.line-height` | 22px |
| `section-title-eyebrow.style-underline.underline.background` | `{color.theme.primary}` |
| `section-title-eyebrow.style-underline.underline.height` | 2px |
| `section-title-eyebrow.base.title-row.gap` | `{spacing.100}` |
| `section-title-eyebrow.base.title-row.icons.height` | 16px |
| `section-title-eyebrow.base.title-row.icons.icon-color` | `{color.theme.primary}` |
| `section-title-eyebrow.base.title-row.icons.width` | 16px |
| `section-title-eyebrow.base.title-row.latest-headlines.font-family` | `{font.theme.eyebrow-family}` |
| `section-title-eyebrow.base.title-row.latest-headlines.font-size` | `{font.theme.eyebrow-size}` |
| `section-title-eyebrow.base.title-row.latest-headlines.font-weight` | `{font.theme.eyebrow-weight}` |
| `section-title-eyebrow.style-bold.title-row.latest-headlines.color` | `{color.theme.primary}` |
| `section-title-eyebrow.style-bold.title-row.latest-headlines.letter-spacing` | 0.595px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Title:** the theme's eyebrow tokens (`font/theme/eyebrow-family`, `-size`, `-weight`: Bold Coastal Noto Sans 20 / 400, Measured Vibrant Noto Sans 17 / 700, Modern Earthy Noto Serif 21 / 400), uppercase, 3.5% letter spacing. Underline: `color/gray/100`, line height 22px. Bold: `color/theme/primary`, line height auto.
- **Underline (Style=Underline):** 2px `color/theme/primary`, as wide as the title (the component hugs its text). Bold has no underline.
- **Chevron:** 16px arrow-right icon, `color/theme/primary`; on by default.
- **Spacing:** 8px (`spacing/100`) between the title row, the underline and the subhead row, and between the title and the arrow (Karl, 2026-10-27). 4px (`spacing/050`) between the subhead and the info icon. No outer padding or margins: the block that uses the title sets the space around it.
- **Subhead (optional, For You feed header):** Noto Sans Regular 13 (`font/size/13`), `color/gray/200`, line height auto.
- **Info (Show Info):** 12px info icon, `color/gray/200`, shown with the subhead. It is a button that opens the MNG Web Design System Tooltip, Type=Toggletip, Placement=Bottom.
- **Markup:** an `h2`; the arrow is inside the section link.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **96**.

Inside components: Photos Block ×6, TOP ZONE Block ×5, Section Rail Card Wide ×4, Latest Headlines ×3, Section Rail Card ×3, Blueconic Block ×3, Section Rail Card Narrow ×2.
Placed on pages: Homepage ×66.

**Built from:** Icons ×2
Icon variants: `arrow-right` ×2.

## Production

Production `.section-highlight h2.entry-title` and `.headline-list-title` (homepage blocks, all 6 review sites).

## Known issues

1. Letter spacing (3.5%) and the Underline title's 22px line height have no tokens (none exist yet).
2. Production: title color wrong and underline missing on Bold Coastal and Measured Vibrant (design-vs-production entry 14); title-to-underline and title-to-arrow spacing off-token (entry 14).

## Files

- `section-title-eyebrow.tokens.json`: component tokens (DTCG 2025.10).
- `section-title-eyebrow.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
