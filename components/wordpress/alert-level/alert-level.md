---
name: AlertLevel
slug: alert-level
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "AlertLevel"
figma_node: "456:5683"
component_key: 9196a8bca6b630f7ea65099a7307f7429a80d2c2
variants: 8
tokens: alert-level.tokens.json
skeleton: alert-level.html
exported: 2026-11-13
---

# AlertLevel

> A status dot. Level = none (no dot), low, medium, high; Size = Small (8px: masthead, Account Dropdown Menu) / Large (16px: Reader Dashboard profile). UserPic uses two: top left, the reader is active; bottom right, the reader has an alert or message to see (Karl, 2026-11-13).

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Menus and Parts**
- Component set: [`AlertLevel` · 456:5683](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5683) · key `9196a8bca6b630f7ea65099a7307f7429a80d2c2`
- Documentation frame: [AlertLevel Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3812-50002) · overview: [previews/alert-level--documentation.png](previews/alert-level--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Level | none | none, low, medium, high |
| Size | Small | Small, Large |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `none / Small` | 8×8 | [456:5684](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5684) | 467 | ![](previews/alert-level--none-small.png) |
| `none / Large` | 16×16 | [456:5696](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5696) | 3 | ![](previews/alert-level--none-large.png) |
| `low / Small` | 8×8 | [456:5687](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5687) | 4 | ![](previews/alert-level--low-small.png) |
| `low / Large` | 16×16 | [456:5699](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5699) | 2 | ![](previews/alert-level--low-large.png) |
| `medium / Small` | 8×8 | [456:5690](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5690) | 1 | ![](previews/alert-level--medium-small.png) |
| `medium / Large` | 16×16 | [456:5702](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5702) | 1 | ![](previews/alert-level--medium-large.png) |
| `high / Small` | 8×8 | [456:5693](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5693) | 18 | ![](previews/alert-level--high-small.png) |
| `high / Large` | 16×16 | [456:5705](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=456-5705) | 0 | ![](previews/alert-level--high-large.png) |

## Anatomy

Default variant `none / Small` (hidden layers marked):

- **Level=none, Size=Small** `COMPONENT`: 8×8, fixed×fixed
  - **Indicator** `FRAME`: 8×8, horizontal, gap 0, padding 0/0/0/0, hug×hug
    - **Dot** `ELLIPSE`: 8×8, fixed×fixed, **hidden**

## Component tokens

From `alert-level.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `alert-level.level-low.indicator.dot.background` | `{color.feedback.low-success}` |
| `alert-level.level-medium.indicator.dot.background` | `{color.feedback.medium}` |
| `alert-level.level-high.indicator.dot.background` | `{color.feedback.high-error}` |
| `alert-level.size-small.indicator.dot.height` | 8px |
| `alert-level.size-small.indicator.dot.width` | 8px |
| `alert-level.size-small.root.height` | 8px |
| `alert-level.size-small.root.width` | 8px |
| `alert-level.size-large.indicator.dot.height` | 16px |
| `alert-level.size-large.indicator.dot.width` | 16px |
| `alert-level.size-large.root.height` | 16px |
| `alert-level.size-large.root.width` | 16px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Dot:** a circle, 8px (Small) or 16px (Large); the component is the dot's own size, with no padding. Level = none draws nothing (fixed 2026-11-13: it drew a green dot).
- **Colors:** low `color/feedback/low-success` (#2E8000), medium `color/feedback/medium` (#856A00), high `color/feedback/high-error` (#CC2B27): 5.0, 5.2 and 5.3:1 on white (a dot is a graphic and needs 3:1).
- **Meaning** comes from where it sits in UserPic: top left = active, bottom right = alert or message. Say it in text too (for example in the avatar's accessible name): color alone isn't enough.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **496**.

Inside components: UserPic ×12.
484 instances are nested inside other instances.

**Built from:** no nested components.

## Production

Not in the WordPress masthead (checked on all 6 review sites, logged in, 2026-11-13).

## Known issues

1. Production's masthead avatar shows no dots: they are a design proposal (design-vs-production 10.9).

## Files

- `alert-level.tokens.json`: component tokens (DTCG 2025.10).
- `alert-level.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-13 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
