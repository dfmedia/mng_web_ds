---
name: Article Timestamp
slug: article-timestamp
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Article Timestamp"
figma_node: "3621:38794"
component_key: e74f8276f3a5fdeea707ba79e98f78cdad2020b8
variants: 1
tokens: article-timestamp.tokens.json
skeleton: article-timestamp.html
exported: 2026-11-25
---

# Article Timestamp

> Relative publish time with a clock icon, in For You cards, rows and the featured story byline.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`Article Timestamp` · 3621:38794](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3621-38794) · key `e74f8276f3a5fdeea707ba79e98f78cdad2020b8`
- Documentation frame: [Article Timestamp Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3621-38786) · overview: [previews/article-timestamp--documentation.png](previews/article-timestamp--documentation.png)

## Properties

No variant properties (single component).

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Article Timestamp` | 90×18 | [3621:38794](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3621-38794) | 46 | ![](previews/article-timestamp--default.png) |

## Anatomy

Default variant `Article Timestamp` (hidden layers marked):

- **Article Timestamp** `COMPONENT`: 90×18, horizontal, gap 4, padding 0/0/0/0, hug×hug
  - **Clock Icon** `INSTANCE`: 11×11, horizontal, gap 5.5, padding 0/0/0/0, fixed×fixed, instance of Icons (Name=access-time)
  - **Time** `TEXT`: 75×18, hug×hug, "56 mins ago", Noto Sans Regular 13px

## Component tokens

From `article-timestamp.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `article-timestamp.base.clock-icon.height` | 11px |
| `article-timestamp.base.clock-icon.icon-color` | `{color.gray.200}` |
| `article-timestamp.base.clock-icon.width` | 11px |
| `article-timestamp.base.root.gap` | `{spacing.050}` |
| `article-timestamp.base.time.color` | `{color.gray.200}` |
| `article-timestamp.base.time.font-family` | `{font.family.noto-sans}` |
| `article-timestamp.base.time.font-size` | `{font.size.13}` |
| `article-timestamp.base.time.font-weight` | `{font.weight.regular}` |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Icon:** Icons `access-time` (production icon font U+E900), 11×11, `color/gray/200`.
- **Text:** relative time ("56 mins ago", "2 hours ago", "3 days ago", "1 week ago"), `Time` text property. One line.
- **Type:** Noto Sans Regular 13 (`font/size/13`, `font/style/regular`), line height auto, `color/gray/200` (6.6:1 on white). Same as production's card meta; 13px chosen over the prototype's 12px (Karl, 2026-10-23).
- **Spacing:** 4px (`spacing/050`) between icon and time, centered vertically; hugs its content.
- **Placement:** under the Article Author in cards; 12px (`spacing/150`) to its right in rows and the featured story.
- **Used in:** 1Col Article Card, Horizontal Thumbnail Card and Zone 1 Lead Article Card (`Style=For You`), as an exposed instance.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **46**.

Inside components: Blocks Lead Article Card ×12, Blocks Article Row ×10, Zone 1 Lead Article Card ×6, Blocks Card ×3, Horizontal Thumbnail Card ×3, 1Col Article Card ×1, Style=For You ×1.
Placed on pages: Homepage ×10.

**Built from:** Icons ×1
Icon variants: `access-time` ×1.

## Production

Card meta time on production homepages: Noto Sans 13px / 400, #5E5D5C (color/gray/200).

## Known issues

None open.

## Files

- `article-timestamp.tokens.json`: component tokens (DTCG 2025.10).
- `article-timestamp.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
