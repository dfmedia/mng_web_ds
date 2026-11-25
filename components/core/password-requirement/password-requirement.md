---
name: Password Requirement
slug: password-requirement
layer: core
figma_file: jFHYqhZbJjvWQmDI4myCsd
figma_set: "Password Requirement"
figma_node: "7672:27628"
component_key: f6e05608d74ef999426608f14175708d9375d09e
variants: 4
tokens: password-requirement.tokens.json
skeleton: password-requirement.html
exported: 2026-11-25
---

# Password Requirement

> One row of the password requirements list in Form Field Assembly / Password: an icon and the requirement text. State = Not met / Met; Size = Desktop (13px text) / Mobile (12px).

## Figma

- File: **MNG Web Design System** (`jFHYqhZbJjvWQmDI4myCsd`), page **Form Fields | 2026.11.04**
- Component set: [`Password Requirement` · 7672:27628](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7672-27628) · key `f6e05608d74ef999426608f14175708d9375d09e`
- Documentation frame: [Frame 11522](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=6965-7506) · overview: [previews/password-requirement--documentation.png](previews/password-requirement--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| State | Not met | Not met, Met |
| Size | Mobile | Desktop, Mobile |

| Other property | Type | Default |
|---|---|---|
| Requirement | text | Minimum length is 6 |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Not met / Desktop` | 142×18 | [7672:27620](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7672-27620) | 6 | ![](previews/password-requirement--not-met-desktop.png) |
| `Not met / Mobile` | 132×16 | [7672:27612](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7672-27612) | 30 | ![](previews/password-requirement--not-met-mobile.png) |
| `Met / Desktop` | 142×18 | [7672:27624](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7672-27624) | 0 | ![](previews/password-requirement--met-desktop.png) |
| `Met / Mobile` | 132×16 | [7672:27616](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7672-27616) | 0 | ![](previews/password-requirement--met-mobile.png) |

## Anatomy

Default variant `Not met / Desktop` (hidden layers marked):

- **Size=Desktop, State=Not met** `COMPONENT`: 142×18, horizontal, gap 4, padding 0/0/0/0, hug×hug
  - **Icon** `INSTANCE`: 12×12, horizontal, gap 6, padding 0/0/0/0, fixed×hug, instance of Icons (Name=radio-unchecked)
  - **Requirement** `TEXT`: 126×18, hug×hug, "Minimum length is 6", Noto Sans Regular 13px

## Component tokens

From `password-requirement.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `password-requirement.base.icon.height` | 12px |
| `password-requirement.base.icon.width` | 12px |
| `password-requirement.base.requirement.font-family` | `{font.family.noto-sans}` |
| `password-requirement.base.requirement.font-weight` | `{font.weight.regular}` |
| `password-requirement.base.root.gap` | `{spacing.050}` |
| `password-requirement.state-not-met.icon.icon-color` | `{color.gray.min}` |
| `password-requirement.state-not-met.requirement.color` | `{color.gray.min}` |
| `password-requirement.state-met.icon.icon-color` | `{color.feedback.low-success}` |
| `password-requirement.state-met.requirement.color` | `{color.feedback.low-success}` |
| `password-requirement.size-desktop.requirement.font-size` | `{font.size.13}` |
| `password-requirement.size-mobile.requirement.font-size` | `{font.size.12}` |

## Behavior and breakpoints

| Size value | Viewport |
|---|---|
| Desktop | Desktop, TabletH, TabletV |
| Mobile | Mobile, Fold |

*Same switch as Form Field (production breakpoint not re-checked for this export).*

- **Not met:** open circle (`radio-unchecked`, 12px), icon and text `color/gray/min` (18.4:1 on white). **Met:** check circle (`checkmark-circle`, 12px), icon and text `color/feedback/low-success` (5.0:1). Requirements start near-black and turn green when met (Karl, 2026-11-25; it was the reverse until then, so an unmet rule read as passing).
- The icon shape changes with the state, so met is never shown by color alone.
- Icon and text 4px apart (`spacing/050`), centered. Text Noto Sans Regular 13 (Desktop) or 12 (Mobile), line height auto.
- Used only inside Form Field Assembly / Password, three rows stacked with no gap; set each row's State from the assembly's exposed properties.
- **Screen readers:** each row is read with its state (met or not met); announce changes politely, not on every keystroke.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **MNG Web Design System** only (other files that use the library are not counted). Total: **36**.

Inside components: Body ×6.
Placed on pages: Embedded Login | 2026.11.20 ×21, Form Fields | 2026.11.04 ×3.

**Built from:** Icons ×4
Icon variants: `radio-unchecked` ×2, `checkmark-circle` ×2.

## Production

No production selector recorded yet. Production gaps go in `design-vs-production.md`.

## Known issues

None open.

## Files

- `password-requirement.tokens.json`: component tokens (DTCG 2025.10).
- `password-requirement.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-25 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
