---
name: Show More Affordance
slug: show-more-affordance
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Show More Affordance"
figma_node: "3634:49423"
component_key: 5d5fd2d5e30e2f0e8fd3e75e4114960b49aa51d6
variants: 1
tokens: show-more-affordance.tokens.json
skeleton: show-more-affordance.html
exported: 2026-11-25
---

# Show More Affordance

> Show More / Load More button below a block or feed: a rule with a notch and a centered uppercase label. Standalone, freely resizable; Label text property ("Show More Photos" in Photos Block, "Load More" on section fronts and in the For You feed).

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Homepage**
- Component set: [`Show More Affordance` · 3634:49423](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3634-49423) · key `5d5fd2d5e30e2f0e8fd3e75e4114960b49aa51d6`
- Documentation frame: [Show More Affordance Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3484-67739) · overview: [previews/show-more-affordance--documentation.png](previews/show-more-affordance--documentation.png)

## Properties

No variant properties (single component).

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Show More Affordance` | 793×97 | [3634:49423](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3634-49423) | 13 | ![](previews/show-more-affordance--default.png) |

## Anatomy

Default variant `Show More Affordance` (hidden layers marked):

- **Show More Affordance** `COMPONENT`: 793×97, fixed×fixed
  - **Rule** `RECTANGLE`: 793×1, fixed×fixed
  - **Notch** `RECTANGLE`: 36×36, fixed×fixed
  - **Label** `TEXT`: 793×16, fixed×fixed, "Load More", Noto Sans Bold 16px

## Component tokens

From `show-more-affordance.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `show-more-affordance.base.label.color` | `{color.theme.primary}` |
| `show-more-affordance.base.label.font-family` | Noto Sans |
| `show-more-affordance.base.label.font-size` | 16px |
| `show-more-affordance.base.label.font-weight` | 700 |
| `show-more-affordance.base.label.line-height` | 16px |
| `show-more-affordance.base.notch.background` | #fbfbfb |
| `show-more-affordance.base.notch.border-bottom-width` | 1px |
| `show-more-affordance.base.notch.border-color` | #d7d6d2 |
| `show-more-affordance.base.notch.border-left-width` | 1px |
| `show-more-affordance.base.notch.border-style` | solid |
| `show-more-affordance.base.notch.height` | 36px |
| `show-more-affordance.base.notch.width` | 36px |
| `show-more-affordance.base.root.height` | 97px |
| `show-more-affordance.base.root.width` | 793px |
| `show-more-affordance.base.rule.background` | #d7d6d2 |
| `show-more-affordance.base.rule.height` | 1px |
| `show-more-affordance.base.rule.width` | 793px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Production values on purpose (Karl, 2026-10-23):** no component tokens. The colors below are raw hex. A tokens version (`3634:49427`) is kept only as the future target (design-vs-production entry 18, on hold); don't use it yet.
- **Rule:** 1px along the top, full width. Rule and notch edges are a different gray per theme: `#D7D6D2` Bold Coastal (the Figma component), `#C8C4C0` Measured Vibrant, `#DDD8D5` Modern Earthy.
- **Notch:** 35px `#FBFBFB` square with 1px left and bottom edges, rotated −45° and centered on the rule, about 5px right of center (as in production).
- **Label:** Noto Sans Bold 16 / 16, uppercase, `color/theme/primary`, centered.
- **Padding:** 40px above the label (below the rule) and 40px below it; 97px tall.
- **States (production's, not variants):** hover, label `#0A0908`; keyboard focus, 2px black outline with a 5px offset.
- **Width:** fills its column at every width.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **13**.

Inside components: Photos Block ×6.
Placed on pages: Homepage ×6.

**Built from:** no nested components.

## Production

Production `.load-more` / `.show-more-videos`, every width (checked on all 6 review sites, 2026-10-27).

## Known issues

1. Off-token by decision: the notch sits about 5px right of center and the colors aren't tokens (design-vs-production entry 18, on hold).
2. **Values not bound to a token** (literal in the component tokens): `base` label font-family = Noto Sans; `base` label font-size = 16px; `base` label font-weight = 700; `base` notch background = #fbfbfb; `base` notch border-color = #d7d6d2; `base` rule background = #d7d6d2.

## Files

- `show-more-affordance.tokens.json`: component tokens (DTCG 2025.10).
- `show-more-affordance.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
