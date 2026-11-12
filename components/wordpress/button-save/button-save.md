---
name: Button_Save
slug: button-save
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Button_Save"
figma_node: "3788:44251"
component_key: f1b1194ce0b623c078b7912e50aa8ce3342d7c9f
variants: 8
tokens: button-save.tokens.json
skeleton: button-save.html
exported: 2026-11-12
---

# Button_Save

> The Save (bookmark) button at the start of the article share bar. Checked = no (bookmark3 outline) or yes (bookmark2 filled); interaction = Default, hover, pressed; inFocus adds the focus ring.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Menus and Parts**
- Component set: [`Button_Save` · 3788:44251](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44251) · key `f1b1194ce0b623c078b7912e50aa8ce3342d7c9f`
- Documentation frame: [Frame 13011](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44243) · overview: [previews/button-save--documentation.png](previews/button-save--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| interaction | Default | Default, hover, pressed |
| inFocus | False | False, True |
| Checked | no | yes, no |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Default / False / yes` | 40×40 | [3788:44258](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44258) | 0 | ![](previews/button-save--default-false-yes.png) |
| `Default / False / no` | 40×40 | [3788:44252](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44252) | 19 | ![](previews/button-save--default-false-no.png) |
| `Default / True / yes` | 40×40 | [3793:48053](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3793-48053) | 0 | ![](previews/button-save--default-true-yes.png) |
| `Default / True / no` | 40×40 | [3793:48042](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3793-48042) | 0 | ![](previews/button-save--default-true-no.png) |
| `hover / False / yes` | 40×40 | [3793:48048](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3793-48048) | 0 | ![](previews/button-save--hover-false-yes.png) |
| `hover / False / no` | 40×40 | [3788:44254](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44254) | 0 | ![](previews/button-save--hover-false-no.png) |
| `pressed / False / yes` | 40×40 | [3788:44256](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3788-44256) | 0 | ![](previews/button-save--pressed-false-yes.png) |
| `pressed / False / no` | 40×40 | [3793:48039](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3793-48039) | 0 | ![](previews/button-save--pressed-false-no.png) |

## Anatomy

Default variant `Default / False / yes` (hidden layers marked):

- **Checked=yes, interaction=Default, inFocus=False** `COMPONENT`: 40×40, horizontal, gap 0, padding 0/8/0/8, fixed×fixed
  - **Icon** `INSTANCE`: 24×24, horizontal, gap 8, padding 0/3/0/3, fixed×fixed, instance of Icons (Name=bookmark2)

## Component tokens

From `button-save.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `button-save.infocus-true.focus-ring.border-color` | `{color.gray.black}` |
| `button-save.infocus-true.focus-ring.border-style` | solid |
| `button-save.infocus-true.focus-ring.border-width` | 2px |
| `button-save.base.icon.height` | 24px |
| `button-save.base.icon.width` | 24px |
| `button-save.base.root.height` | 40px |
| `button-save.base.root.padding-left` | `{spacing.100}` |
| `button-save.base.root.padding-right` | `{spacing.100}` |
| `button-save.base.root.width` | 40px |
| `button-save.interaction-default.icon.icon-color` | `{color.theme.primary}` |
| `button-save.interaction-hover.icon.icon-color` | `{color.theme.primary-light}` |
| `button-save.interaction-pressed.icon.icon-color` | `{color.theme.primary-light}` |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- **Size:** 40x40, 8px (`spacing/100`) side padding; the bookmark is a 24px icon-font glyph, centered, matching production.
- **Colors:** icon `color/theme/primary`; hover and pressed `color/theme/primary-light`. No fill, no border.
- **Focus ring:** 2px `color/gray/black`, 1px outside the 40x40 box, square corners.
- **Accessibility:** a toggle button, `aria-pressed` true when saved; named "Save this article to read later" (production's label).

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **19**.

Inside components: SocialButtons ×5, ObitMastHead ×4, Masthead ×2.
Placed on pages: Menus and Parts ×7, Article Page ×1.

**Built from:** Icons ×8
Icon variants: `bookmark2` ×4, `bookmark3` ×4.

## Production

Shown only on ocregister.com of the review sites (2026-11-12): 24px bookmark, `color/theme/primary`, hover `primary-light`.

## Known issues

None open.

## Files

- `button-save.tokens.json`: component tokens (DTCG 2025.10).
- `button-save.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-12 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
