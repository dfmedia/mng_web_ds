---
name: Form Field Assembly / Name pair
slug: name-pair
layer: core
figma_file: jFHYqhZbJjvWQmDI4myCsd
figma_set: "Form Field Assembly / Name pair"
figma_node: "7003:28636"
component_key: 9f22b5b30dacf8c88668cf02f7d14e0dcc90e27a
variants: 2
tokens: name-pair.tokens.json
skeleton: name-pair.html
exported: 2026-11-04
---

# Form Field Assembly / Name pair

> First Name and Last Name side by side, each half the row width. Desktop 16px gap (`spacing/200`); Mobile 8px (`spacing/100`). On a very narrow screen, stack them.

## Figma

- File: **MNG Web Design System** (`jFHYqhZbJjvWQmDI4myCsd`), page **Form Fields | 2026.11.04**
- Component set: [`Form Field Assembly / Name pair` · 7003:28636](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7003-28636) · key `9f22b5b30dacf8c88668cf02f7d14e0dcc90e27a`
- Documentation frame: [Assembly: Name pair — Documentation](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=6965-7166) · overview: [previews/name-pair--documentation.png](previews/name-pair--documentation.png)

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
| `Desktop` | 480×111 | [7003:28627](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7003-28627) | 0 | ![](previews/name-pair--desktop.png) |
| `Mobile` | 328×89 | [7003:28635](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7003-28635) | 0 | ![](previews/name-pair--mobile.png) |

## Anatomy

Default variant `Desktop` (hidden layers marked):

- **Size=Desktop** `COMPONENT`: 480×111, vertical, gap 8, padding 0/0/0/0, fixed×hug
  - **Fields** `FRAME`: 480×78, horizontal, gap 16, padding 0/0/0/0, fill×hug
    - **Form Field** `INSTANCE`: 232×78, vertical, gap 0, padding 0/0/0/0, fill×hug, instance of Form Field (Size=Desktop, State=Blank)
    - **Form Field** `INSTANCE`: 232×78, vertical, gap 0, padding 0/0/0/0, fill×hug, instance of Form Field (Size=Desktop, State=Blank)
  - **Error Message Container (Shared)** `FRAME`: 480×25, horizontal, gap 8, padding 0/0/0/0, fill×fixed
    - **Error Message Text.** `TEXT`: 480×25, fixed×fixed, "Error message text.", Noto Sans Regular 18px, **hidden**

## Component tokens

From `name-pair.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `name-pair.size-desktop.error-message-container-shared.height` | 25px |
| `name-pair.size-desktop.fields.gap` | `{spacing.200}` |
| `name-pair.size-desktop.fields.form-field.height` | 78px |
| `name-pair.size-desktop.fields.form-field.width` | 232px |
| `name-pair.size-desktop.root.width` | 480px |
| `name-pair.size-mobile.error-message-container-shared.height` | 22px |
| `name-pair.size-mobile.fields.gap` | `{spacing.100}` |
| `name-pair.size-mobile.fields.form-field.height` | 59px |
| `name-pair.size-mobile.fields.form-field.width` | 160px |
| `name-pair.size-mobile.root.width` | 328px |
| `name-pair.base.fields.form-field.icon-color` | `{color.gray.min}` |
| `name-pair.base.root.gap` | `{spacing.100}` |

## Behavior and breakpoints

| Size value | Viewport |
|---|---|
| Desktop | Desktop, TabletH, TabletV |
| Mobile | Mobile, Fold |

*Same switch as Form Field (production breakpoint not re-checked for this export, Karl 2026-11-04).*

- First Name and Last Name side by side, each half the row width. Desktop 16px gap (`spacing/200`); Mobile 8px (`spacing/100`). On a very narrow screen, stack them.
- Built from Form Field instances (exposed: set each field's State, Label, Value and Placeholder on the instance). Use Show icon = off inside assemblies.
- **Errors:** the fields' own error rows are hidden and one shared error row below the group (Show error, Error message) covers every field in it; the field in error still gets the red outline. Point that field's `aria-describedby` at the shared message.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **MNG Web Design System** only (other files that use the library are not counted). Total: **0**.


**Built from:** Form Field ×4

## Production

Not checked against production for this export (Karl, 2026-11-04).

## Known issues

1. Not checked against production for this export (Karl, 2026-11-04).

## Files

- `name-pair.tokens.json`: component tokens (DTCG 2025.10).
- `name-pair.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-04 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
