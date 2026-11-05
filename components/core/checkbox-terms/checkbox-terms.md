---
name: Form Field Assembly / Checkbox + Terms
slug: checkbox-terms
layer: core
figma_file: jFHYqhZbJjvWQmDI4myCsd
figma_set: "Form Field Assembly / Checkbox + Terms"
figma_node: "7003:29236"
component_key: 815cbc290cc86fc6abaf1b0fc9f441c19a79100d
variants: 2
tokens: checkbox-terms.tokens.json
skeleton: checkbox-terms.html
exported: 2026-11-04
---

# Form Field Assembly / Checkbox + Terms

> A CheckBox and the terms text in a row, centered on the box (8px gap), with a shared error row below. Desktop: 40px check box, 16px text; Mobile: the check box scaled to 28px, 13px text.

## Figma

- File: **MNG Web Design System** (`jFHYqhZbJjvWQmDI4myCsd`), page **Form Fields | 2026.11.04**
- Component set: [`Form Field Assembly / Checkbox + Terms` · 7003:29236](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7003-29236) · key `815cbc290cc86fc6abaf1b0fc9f441c19a79100d`
- Documentation frame: [Code Box — Documentation](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=6977-25689) · overview: [previews/checkbox-terms--documentation.png](previews/checkbox-terms--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Size | Desktop | Desktop, Mobile |

| Other property | Type | Default |
|---|---|---|
| Terms text | text | I agree to the Terms of Service and Privacy Policy. |
| Show error | boolean | False |
| Error message | text | Please accept terms and conditions. |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Desktop` | 388×77 | [7003:29229](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7003-29229) | 7 | ![](previews/checkbox-terms--desktop.png) |
| `Mobile` | 294×62 | [7003:29235](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7003-29235) | 8 | ![](previews/checkbox-terms--mobile.png) |

## Anatomy

Default variant `Desktop` (hidden layers marked):

- **Size=Desktop** `COMPONENT`: 388×77, vertical, gap 8, padding 0/0/0/0, fixed×hug
  - **Fields** `FRAME`: 388×44, horizontal, gap 8, padding 0/0/0/0, fill×hug
    - **CheckBox** `INSTANCE`: 40×40, horizontal, gap 8, padding 0/0/0/0, fixed×fixed, instance of CheckBox (status=unselected, inFocus=False, interaction=Default)
    - **I agree to the Terms of Service and Privacy Policy.** `TEXT`: 340×44, fill×hug, "I agree to the Terms of Service and Priv", Noto Sans Regular 16px
  - **Error Message Container (Shared)** `FRAME`: 388×25, horizontal, gap 0, padding 0/0/0/0, fill×fixed
    - **Error Message Text.** `TEXT`: 388×25, fixed×fixed, "Please accept terms and conditions.", Noto Sans Regular 18px, **hidden**

## Component tokens

From `checkbox-terms.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `checkbox-terms.size-desktop.error-message-container-shared.height` | 25px |
| `checkbox-terms.size-desktop.fields.checkbox.height` | 40px |
| `checkbox-terms.size-desktop.fields.checkbox.width` | 40px |
| `checkbox-terms.size-desktop.fields.i-agree-to-the-terms-of-service-and-privacy-policy.font-size` | `{font.size.16}` |
| `checkbox-terms.size-desktop.root.gap` | `{spacing.100}` |
| `checkbox-terms.size-desktop.root.width` | 388px |
| `checkbox-terms.size-mobile.error-message-container-shared.height` | 22px |
| `checkbox-terms.size-mobile.fields.checkbox.height` | 28px |
| `checkbox-terms.size-mobile.fields.checkbox.width` | 28px |
| `checkbox-terms.size-mobile.fields.i-agree-to-the-terms-of-service-and-privacy-policy.font-size` | `{font.size.13}` |
| `checkbox-terms.size-mobile.root.gap` | `{spacing.050}` |
| `checkbox-terms.size-mobile.root.width` | 294px |
| `checkbox-terms.base.fields.gap` | `{spacing.100}` |
| `checkbox-terms.base.fields.checkbox.icon-color` | `{color.gray.max}` |
| `checkbox-terms.base.fields.i-agree-to-the-terms-of-service-and-privacy-policy.color` | `{color.gray.black}` |
| `checkbox-terms.base.fields.i-agree-to-the-terms-of-service-and-privacy-policy.font-family` | `{font.family.noto-sans}` |
| `checkbox-terms.base.fields.i-agree-to-the-terms-of-service-and-privacy-policy.font-weight` | `{font.weight.regular}` |

## Behavior and breakpoints

| Size value | Viewport |
|---|---|
| Desktop | Desktop, TabletH, TabletV |
| Mobile | Mobile, Fold |

*Same switch as Form Field (production breakpoint not re-checked for this export, Karl 2026-11-04).*

- A CheckBox and the terms text in a row, centered on the box (8px gap), with a shared error row below. Desktop: 40px check box, 16px text; Mobile: the check box scaled to 28px, 13px text.
- "Terms of Service" and "Privacy Policy" are links in product use. Use the CheckBox's own variants for selected, focus, hover, pressed and disabled.
- Error: Show error with the message ("Please accept terms and conditions."), Noto Sans Regular 18 (Mobile 16), `color/feedback/high-error`.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **MNG Web Design System** only (other files that use the library are not counted). Total: **15**.

Inside components: InLineMessage ×3.
Placed on pages: Check Boxes | 2026.11.04 ×9, In-Line Content Containers | 2026.01.02 ×3.

**Built from:** CheckBox ×2

## Production

Not checked against production for this export (Karl, 2026-11-04).

## Known issues

1. Not checked against production for this export (Karl, 2026-11-04).

## Files

- `checkbox-terms.tokens.json`: component tokens (DTCG 2025.10).
- `checkbox-terms.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-04 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
