---
name: Form Field Assembly / Address block
slug: address-block
layer: core
figma_file: jFHYqhZbJjvWQmDI4myCsd
figma_set: "Form Field Assembly / Address block"
figma_node: "7003:28741"
component_key: 14866950667431f609aecef5e9619766db2e4043
variants: 2
tokens: address-block.tokens.json
skeleton: address-block.html
exported: 2026-11-04
---

# Form Field Assembly / Address block

> Street Address (full width), then City (fills) / State (2 characters) / Zip Code in a row. Desktop 16px gaps, 8px between rows; Mobile 8px gaps, 4px between rows.

## Figma

- File: **MNG Web Design System** (`jFHYqhZbJjvWQmDI4myCsd`), page **Form Fields | 2026.11.04**
- Component set: [`Form Field Assembly / Address block` · 7003:28741](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7003-28741) · key `14866950667431f609aecef5e9619766db2e4043`
- Documentation frame: [Assembly: Address block — Documentation](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=6965-7359) · overview: [previews/address-block--documentation.png](previews/address-block--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Size | Desktop | Desktop, Mobile |

| Other property | Type | Default |
|---|---|---|
| Error message | text | Error message text. |
| Show error | boolean | False |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Desktop` | 480×197 | [7003:28703](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7003-28703) | 0 | ![](previews/address-block--desktop.png) |
| `Mobile` | 328×148 | [7003:28740](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7003-28740) | 0 | ![](previews/address-block--mobile.png) |

## Anatomy

Default variant `Desktop` (hidden layers marked):

- **Size=Desktop** `COMPONENT`: 480×197, vertical, gap 8, padding 0/0/0/0, fixed×hug
  - **Form Field** `INSTANCE`: 480×78, vertical, gap 0, padding 0/0/0/0, fill×hug, instance of Form Field (Size=Desktop, State=Blank)
  - **Fields** `FRAME`: 480×78, horizontal, gap 16, padding 0/0/0/0, fill×hug
    - **Form Field** `INSTANCE`: 309×78, vertical, gap 0, padding 0/0/0/0, fill×hug, instance of Form Field (Size=Desktop, State=Blank)
    - **Form Field** `INSTANCE`: 55×78, vertical, gap 0, padding 0/0/0/0, fixed×hug, instance of Form Field (Size=Desktop, State=Blank)
    - **Form Field** `INSTANCE`: 84×78, vertical, gap 0, padding 0/0/0/0, fixed×hug, instance of Form Field (Size=Desktop, State=Blank)
  - **Error Message Container (Shared)** `FRAME`: 480×25, horizontal, gap 8, padding 0/0/0/0, fill×fixed
    - **Error Message Text.** `TEXT`: 480×25, fixed×fixed, "Error message text.", Noto Sans Regular 18px, **hidden**

## Component tokens

From `address-block.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `address-block.size-desktop.error-message-container-shared.height` | 25px |
| `address-block.size-desktop.fields.gap` | `{spacing.200}` |
| `address-block.size-desktop.fields.form-field.height` | 78px |
| `address-block.size-desktop.fields.form-field.width` | 84px |
| `address-block.size-desktop.form-field.height` | 78px |
| `address-block.size-desktop.form-field.width` | 480px |
| `address-block.size-desktop.root.gap` | `{spacing.100}` |
| `address-block.size-desktop.root.width` | 480px |
| `address-block.size-mobile.error-message-container-shared.height` | 22px |
| `address-block.size-mobile.fields.gap` | `{spacing.100}` |
| `address-block.size-mobile.fields.form-field.height` | 59px |
| `address-block.size-mobile.fields.form-field.width` | 78px |
| `address-block.size-mobile.form-field.height` | 59px |
| `address-block.size-mobile.form-field.width` | 328px |
| `address-block.size-mobile.root.gap` | `{spacing.050}` |
| `address-block.size-mobile.root.width` | 328px |
| `address-block.base.fields.form-field.icon-color` | `{color.gray.min}` |
| `address-block.base.form-field.icon-color` | `{color.gray.min}` |

## Behavior and breakpoints

| Size value | Viewport |
|---|---|
| Desktop | Desktop, TabletH, TabletV |
| Mobile | Mobile, Fold |

*Same switch as Form Field (production breakpoint not re-checked for this export, Karl 2026-11-04).*

- Street Address (full width), then City (fills) / State (2 characters) / Zip Code in a row. Desktop 16px gaps, 8px between rows; Mobile 8px gaps, 4px between rows.
- Built from Form Field instances (exposed: set each field's State, Label, Value and Placeholder on the instance). Use Show icon = off inside assemblies.
- **Errors:** the fields' own error rows are hidden and one shared error row below the group (Show error, Error message) covers every field in it; the field in error still gets the red outline. Point that field's `aria-describedby` at the shared message.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **MNG Web Design System** only (other files that use the library are not counted). Total: **0**.


**Built from:** Form Field ×8

## Production

Not checked against production for this export (Karl, 2026-11-04).

## Known issues

1. Not checked against production for this export (Karl, 2026-11-04).

## Files

- `address-block.tokens.json`: component tokens (DTCG 2025.10).
- `address-block.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-04 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
