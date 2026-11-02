---
name: Related Article List Item
slug: related-article-list-item
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Related Article List Item"
figma_node: "3334:43017"
component_key: b713574ec2e2bb93789c51812dfb4f34cb971a71
variants: 1
tokens: related-article-list-item.tokens.json
skeleton: related-article-list-item.html
exported: 2026-11-02
---

# Related Article List Item

> One related story in the Zone 1 Lead Article Card's Related list (production `.feature-primary ul.primary-related li`): a bullet, then the title with its time inline right after it. No variants. Its own component in the export since 2026-11-02 (it was only in the legacy export).

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`Related Article List Item` · 3334:43017](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3334-43017) · key `b713574ec2e2bb93789c51812dfb4f34cb971a71`
- Documentation frame: [Related Article List Item Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3484-67572) · overview: [previews/related-article-list-item--documentation.png](previews/related-article-list-item--documentation.png)

## Properties

No variant properties (single component).

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Related Article List Item` | 295×41 | [3334:43017](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3334-43017) | 75 | ![](previews/related-article-list-item--default.png) |

## Anatomy

Default variant `Related Article List Item` (hidden layers marked):

- **Related Article List Item** `COMPONENT`: 295×41, horizontal, gap 0, padding 0/0/0/0, fixed×hug
  - **Bullet** `FRAME`: 16×41, vertical, gap 0, padding 4/0/0/0, fixed×fill
    - **Bullet Dot** `VECTOR`: 4×4, fixed×fixed
  - **Content** `FRAME`: 279×41, vertical, gap 0, padding 0/0/0/0, fill×hug
    - **Headline and Time** `TEXT`: 279×41, fill×hug, "Game Day: Turning LeBron James’ record n", Noto Serif Bold 12px

## Component tokens

From `related-article-list-item.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `related-article-list-item.base.bullet.padding-top` | `{spacing.050}` |
| `related-article-list-item.base.bullet.width` | 16px |
| `related-article-list-item.base.bullet.bullet-dot.background` | `{color.gray.black}` |
| `related-article-list-item.base.bullet.bullet-dot.height` | 4px |
| `related-article-list-item.base.bullet.bullet-dot.width` | 4px |
| `related-article-list-item.base.content.headline-and-time.color` | `{color.gray.black}` |
| `related-article-list-item.base.content.headline-and-time.font-family` | `{font.theme.heading-family}` |
| `related-article-list-item.base.content.headline-and-time.font-size` | `{font.size.12}` |
| `related-article-list-item.base.content.headline-and-time.font-weight` | `{font.weight.bold}` |
| `related-article-list-item.base.content.headline-and-time.letter-spacing` | -0.12px |
| `related-article-list-item.base.content.headline-and-time.line-height` | 19px |
| `related-article-list-item.base.root.width` | 295px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Matches production on the 4 / 8 grid** (Karl, 2026-10-30; CLAUDE.md). CSS `.feature-primary .primary-related` read 2026-11-02 on ocregister.com, denverpost.com (same rules), chicagotribune.com (same item values; only the header rule color differs), canoncitydailyrecord.com (same, with Noto Sans for the title: Modern Earthy's heading family), and orlandosentinel.com and mcall.com (same rules, read from their stylesheets later the same day; their homepages had no Related list). Measured on ocregister.com at 360, 778, 900, 1100 and 1280px: the same at every width.
- **Bullet:** a 16px column (`spacing/200`; production indents the list 1rem) with a 4px round `color/gray/black` dot, 4px (`spacing/050`) from the top. Production draws the browser's `disc` marker (about 3.3px, black) in that indent. Before 2026-11-02 the design had a 22px column and a 6px `color/gray/min` dot with a 1px `color/gray/600` inside stroke.
- **Headline and Time** are one text layer, as production sets them inline (`h4` and `time` both `display: inline`). Title: `font/theme/heading-family` Bold 12 (`font/size/12`), 19px line height (production's `h4` line box), −1% letter spacing, `color/gray/black` on `color/gray/max`, 21:1. Noto Serif in Bold Coastal and Measured Vibrant, Noto Sans in Modern Earthy, as production. Production is 12.25px with CSS weight 600; the sites load only the 400 and 700 faces, so it renders Bold.
- **Time:** right after the title in the same text layer: Noto Sans Regular 11 (`font/size/11`), 20.625px line height, `color/gray/200`, 6.6:1. It wraps with the title.
- **Height** hugs the text (Figma had fixed 41 / 45px items, so a two-line title ran into the next item). The 4px (`spacing/050`) between items belongs to the list (Zone 1 Lead Article Card's Related Articles Body; production `li` margin-bottom 4.375px).
- **Width** fills the list; drawn at 295 (the Desktop lead's text column).
- **Markup:** `ul > li > article`, the title an `h4` link followed by a `time` element (both inline). The list is labelled by its "Related" header.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **75**.

Inside components: Zone 1 Lead Article Card ×39, TOP ZONE Block ×15.
Placed on pages: Homepage ×21.

**Built from:** no nested components.

## Production

Production `.feature-primary ul.primary-related li` (homepage Zone 1 lead, Related list). CSS read on all 6 review sites and measured on ocregister.com at 360, 778, 900, 1100, 1280 and 1371px, 2026-11-02.

## Known issues

1. Production's title is 12.25px; the design uses 12 (`font/size/12`, the nearest size token). Production's item spacing is 4.375px; the design uses 4 (design-vs-production 16.10).
2. Production's time color is #5D5B5A; the design keeps `color/gray/200` (#5E5D5C).
3. Production turns the title `--primary` on hover; Figma has no hover state.
4. Figma draws mixed line heights about 1px taller than browsers: a one-line item is 21 (production 20.63), two lines 41 (39.63), three 60 (58.63).
5. The component tokens carry the title's values for the Headline and Time layer (the exporter reads its first text run); the inline time's values are in the rules above.

## Files

- `related-article-list-item.tokens.json`: component tokens (DTCG 2025.10).
- `related-article-list-item.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-02 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
