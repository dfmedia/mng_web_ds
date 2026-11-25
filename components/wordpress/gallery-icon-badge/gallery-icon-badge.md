---
name: Gallery Icon Badge
slug: gallery-icon-badge
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Gallery Icon Badge"
figma_node: "3665:32148"
component_key: 413ff05306982d5fd49f97e128f9dc35b3f971b7
variants: 4
tokens: gallery-icon-badge.tokens.json
skeleton: gallery-icon-badge.html
exported: 2026-11-25
---

# Gallery Icon Badge

> The gallery (photo slideshow) badge on an article image's bottom-right corner. Size = Small / Large × State = Default / Hover, in production's format (Karl, 2026-10-28).

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`Gallery Icon Badge` · 3665:32148](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3665-32148) · key `413ff05306982d5fd49f97e128f9dc35b3f971b7`
- Documentation frame: [Gallery Icon Badge Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3484-67733) · overview: [previews/gallery-icon-badge--documentation.png](previews/gallery-icon-badge--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| State | Default | Default, Hover |
| Size | Small | Small, Large |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Default / Small` | 20×20 | [3362:2959](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3362-2959) | 85 | ![](previews/gallery-icon-badge--default-small.png) |
| `Default / Large` | 33×33 | [3665:32139](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3665-32139) | 18 | ![](previews/gallery-icon-badge--default-large.png) |
| `Hover / Small` | 20×20 | [3665:32142](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3665-32142) | 0 | ![](previews/gallery-icon-badge--hover-small.png) |
| `Hover / Large` | 33×33 | [3665:32145](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3665-32145) | 0 | ![](previews/gallery-icon-badge--hover-large.png) |

## Anatomy

Default variant `Default / Small` (hidden layers marked):

- **Size=Small, State=Default** `COMPONENT`: 20×20, horizontal, gap 0, padding 0/0/0/0, fixed×fixed
  - **Icons** `INSTANCE`: 8.4×8.4, horizontal, gap 4.2, padding 0/0/0/0, fixed×fixed, instance of Icons (Name=slideshow)

## Component tokens

From `gallery-icon-badge.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `gallery-icon-badge.size-small.icons.height` | 8.4px |
| `gallery-icon-badge.size-small.icons.width` | 8.4px |
| `gallery-icon-badge.size-small.root.border-radius` | 10px |
| `gallery-icon-badge.size-small.root.height` | 20px |
| `gallery-icon-badge.size-small.root.width` | 20px |
| `gallery-icon-badge.size-large.icons.height` | 16px |
| `gallery-icon-badge.size-large.icons.width` | 16px |
| `gallery-icon-badge.size-large.root.border-radius` | 16.5px |
| `gallery-icon-badge.size-large.root.height` | 33px |
| `gallery-icon-badge.size-large.root.width` | 33px |
| `gallery-icon-badge.base.icons.icon-color` | #ffffff |
| `gallery-icon-badge.base.root.border-style` | solid |
| `gallery-icon-badge.base.root.border-width` | 1px |
| `gallery-icon-badge.base.root.opacity` | 0.85 |
| `gallery-icon-badge.state-default.root.background` | `{color.gray.min}` |
| `gallery-icon-badge.state-default.root.border-color` | `{color.gray.max}` |
| `gallery-icon-badge.state-hover.root.background` | `{color.theme.primary}` |
| `gallery-icon-badge.state-hover.root.border-color` | `{color.theme.primary}` |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Circle:** `color/gray/min` fill, 1px `color/gray/max` border inside, fully round, 85% opacity on the whole badge; white icomoon `slideshow` icon, centered.
- **Size=Large:** 33×33, 16px icon, 5px in from the image's right and bottom edges. Use on card and lead images (production `.feature-medium`, `.feature-large`): Blocks Card, Blocks Article Row at 640px and up.
- **Size=Small:** 20×20, 8.4px icon, 3.75px from the right and 5px from the bottom. Use on thumbnails up to about 120px wide (production `.feature-small`): Horizontal Thumbnail Card, Photos Block, TOP ZONE Block, Blocks Article Row below 640px.
- **State=Hover:** circle and border `color/theme/primary`. Production also turns the badge primary while the whole card is hovered (`.archive-view:hover .icon-slideshow`); the For You prototype's card hover doesn't, so the Blocks components keep the default badge on hover.
- **Contrast:** the icon is a graphic (3:1): white on `color/gray/min` 18.4:1; on Bold Coastal primary 5.45:1.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **103**.

Inside components: Photos Block ×36, Blocks Article Row ×10, Horizontal Thumbnail Card ×9, Blocks Card ×3, 1Col Article Card ×1.
Placed on pages: Homepage ×42.

**Built from:** Icons ×4
Icon variants: `slideshow` ×4.

## Production

Production `.icon-slideshow` (`.feature-small`, `.feature-medium`, `.feature-large`), measured on denverpost.com and ocregister.com 2026-10-28; same CSS on all 6 review sites.

## Known issues

1. Sizes (33, 20), icon sizes (16, 8.4), insets (5, 3.75) and the 85% opacity are production's values, not tokens (Karl: production format; revisit once it's in the For You prototype).
2. Production compiles the circle as #0a0908 on Bold Coastal sites; the design uses `color/gray/min` #141414 (design-vs-production entry 3).
3. **Values not bound to a token** (literal in the component tokens): `base` icons icon-color = #ffffff; `size-small` root border-radius = 10px; `size-large` root border-radius = 16.5px.

## Files

- `gallery-icon-badge.tokens.json`: component tokens (DTCG 2025.10).
- `gallery-icon-badge.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
