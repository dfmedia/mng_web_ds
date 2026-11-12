---
name: SocialButtons
slug: social-buttons
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "SocialButtons"
figma_node: "3788:44356"
component_key: f4f69ef49dd7528eea0358079c4ac9c6e1b140d6
variants: 5
tokens: social-buttons.tokens.json
skeleton: social-buttons.html
exported: 2026-11-12
---

# SocialButtons

> The article share bar (in the condensed article header and at the end of the article) and the obituary "Share this obituary" buttons. Theme = Bold Coastal, Measured Vibrant, Modern Earthy, Endless Tributes, TwinCities; one show/hide property per button (Save, Facebook, Bluesky, Reddit, X, Print, Email, LinkedIn, Link, Gift, Share more) and More open. Built from Button_Save, Social Media Button and the Popover.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Menus and Parts**
- Component set: [`SocialButtons` · 3788:44356](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44356) · key `f4f69ef49dd7528eea0358079c4ac9c6e1b140d6`
- Documentation frame: [Example: the share bar on each review site (2026.11.12)](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3793-48498) · overview: [previews/social-buttons--documentation.png](previews/social-buttons--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Theme | Bold Coastal | Bold Coastal, Endless Tributes, TwinCities, Measured Vibrant, Modern Earthy |

| Other property | Type | Default |
|---|---|---|
| Save | boolean | True |
| Facebook | boolean | True |
| Bluesky | boolean | False |
| Reddit | boolean | True |
| X | boolean | True |
| Print | boolean | False |
| Email | boolean | True |
| Share more | boolean | False |
| Gift | boolean | True |
| Link | boolean | True |
| LinkedIn | boolean | False |
| More open | boolean | False |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Bold Coastal` | 329×40 | [3788:44357](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44357) | 5 | ![](previews/social-buttons--bold-coastal.png) |
| `Endless Tributes` | 329×40 | [3788:44397](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44397) | 4 | ![](previews/social-buttons--endless-tributes.png) |
| `TwinCities` | 329×40 | [3788:44412](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44412) | 1 | ![](previews/social-buttons--twincities.png) |
| `Measured Vibrant` | 329×40 | [3788:44367](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44367) | 2 | ![](previews/social-buttons--measured-vibrant.png) |
| `Modern Earthy` | 329×40 | [3788:44382](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44382) | 2 | ![](previews/social-buttons--modern-earthy.png) |

## Anatomy

Default variant `Bold Coastal` (hidden layers marked):

- **Theme=Bold Coastal** `COMPONENT`: 329×40, horizontal, gap 8, padding 0/0/0/0, hug×fixed
  - **Save** `FRAME`: 41×40, horizontal, gap 0, padding 0/0/0/0, hug×hug
    - **Save Button** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/8/0/8, fixed×fixed, instance of Button_Save (Checked=no, interaction=Default, inFocus=False)
    - **Divider** `RECTANGLE`: 1×40, fixed×fixed
  - **Facebook** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of Social Media Button (Network=Facebook, Theme=Bold Coastal, interaction=Default, inFocus=False)
  - **Bluesky** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of Social Media Button (Network=Bluesky, Theme=Bold Coastal, interaction=Default, inFocus=False), **hidden**
  - **Reddit** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of Social Media Button (Network=Reddit, Theme=Bold Coastal, interaction=Default, inFocus=False)
  - **X** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of Social Media Button (Network=X, Theme=Bold Coastal, interaction=Default, inFocus=False)
  - **Print** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of Social Media Button (Network=Print, Theme=Bold Coastal, interaction=Default, inFocus=False), **hidden**
  - **Email** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of Social Media Button (Network=Email, Theme=Bold Coastal, interaction=Default, inFocus=False)
  - **LinkedIn** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of Social Media Button (Network=LinkedIn, Theme=Bold Coastal, interaction=Default, inFocus=False), **hidden**
  - **Link** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of Social Media Button (Network=Link, Theme=Bold Coastal, interaction=Default, inFocus=False)
  - **Gift** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of Social Media Button (Network=Gift, Theme=Bold Coastal, interaction=Default, inFocus=False)
  - **More** `FRAME`: 40×40, horizontal, gap 0, padding 0/0/0/0, hug×hug, **hidden**
    - **More Button** `INSTANCE`: 40×40, horizontal, gap 0, padding 0/0/0/0, fixed×fixed, instance of Social Media Button (Network=Share more, Theme=Bold Coastal, interaction=Default, inFocus=False)
    - **More Panel** `INSTANCE`: 106×63, vertical, gap -1, padding 0/0/0/0, hug×hug, absolute, instance of Popover (Placement=Bottom), **hidden**

## Component tokens

From `social-buttons.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `social-buttons.base.email.height` | 40px |
| `social-buttons.base.email.width` | 40px |
| `social-buttons.base.facebook.height` | 40px |
| `social-buttons.base.facebook.width` | 40px |
| `social-buttons.base.gift.height` | 40px |
| `social-buttons.base.gift.width` | 40px |
| `social-buttons.base.link.height` | 40px |
| `social-buttons.base.link.width` | 40px |
| `social-buttons.base.reddit.height` | 40px |
| `social-buttons.base.reddit.width` | 40px |
| `social-buttons.base.root.gap` | `{spacing.100}` |
| `social-buttons.base.root.height` | 40px |
| `social-buttons.base.save.divider.background` | `{color.gray.500}` |
| `social-buttons.base.save.divider.height` | 40px |
| `social-buttons.base.save.divider.width` | 1px |
| `social-buttons.base.save.save-button.height` | 40px |
| `social-buttons.base.save.save-button.width` | 40px |
| `social-buttons.base.x.height` | 40px |
| `social-buttons.base.x.width` | 40px |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Row:** 40px tall, buttons 8px (`spacing/100`) apart (production 6.25px, design-vs-production 39.1).
- **Order:** Save, then Facebook, Bluesky, Reddit, X, Print, Email, LinkedIn, Link, then Gift, then More (Karl, 2026-11-12). Each site turns on the buttons it uses.
- **Save:** Button_Save followed by a 1px `color/gray/500` divider, 40px tall (Karl, 2026-11-12; production has none, 39.5).
- **More rule (Karl, 2026-11-12):** up to 6 share buttons show with no More; with more than 6, the first 6 show (Gift is always one of them) and More is the 7th, holding the rest.
- **More panel:** More open shows a Popover, Placement=Bottom, centered on the More button with 8px between the button and the caret, holding the extra buttons in a row 8px apart. Esc or a click outside closes it and focus returns to More.
- **Themes:** Bold Coastal, Endless Tributes and TwinCities use the Bold Coastal button style; colors come from each site's color mode (obituaries: the Endless Tributes theme). Measured Vibrant and Modern Earthy use their own styles.
- **Obituaries:** the "Share this obituary:" buttons (Facebook, Email, Copy link) are the same feature: Theme=Endless Tributes, 40x40, 8px apart, 18px icons (Karl, 2026-11-12).
- **Accessibility:** a group named "Share this article" (or "Share this obituary"); More is a button with `aria-expanded` and `aria-controls` pointing at the panel.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **14**.

Inside components: ObitMastHead ×4, Masthead ×2.
Placed on pages: Article Page ×1.

**Built from:** Social Media Button ×30, Button_Save ×5

## Production

Checked 2026-11-12 on the 6 review sites plus twincities.com (article bars) and the ocregister.com and denverpost.com obituary pages. Differences: design-vs-production entry 39 (39.1–39.6).

## Known issues

None open.

## Files

- `social-buttons.tokens.json`: component tokens (DTCG 2025.10).
- `social-buttons.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-12 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
