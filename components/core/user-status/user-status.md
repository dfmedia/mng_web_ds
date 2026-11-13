---
name: UserStatus
slug: user-status
layer: core
figma_file: jFHYqhZbJjvWQmDI4myCsd
figma_set: "UserStatus"
figma_node: "7594:29617"
component_key: 07fcdba468fb281768372247ea738bb81fa0c953
variants: 4
tokens: user-status.tokens.json
skeleton: user-status.html
exported: 2026-11-13
---

# UserStatus

> The account area of the masthead. status = none (logged out), nonSub, subscriber; Device = Desktop / mobile. Nested in AccountMenu; it decides buttons vs avatar in every Masthead variant.

## Figma

- File: **MNG Web Design System** (`jFHYqhZbJjvWQmDI4myCsd`), page **User Avatars and Status | 2026.11.13**
- Component set: [`UserStatus` · 7594:29617](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7594-29617) · key `07fcdba468fb281768372247ea738bb81fa0c953`
- Documentation frame: [UserStatus Container](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7594-29609) · overview: [previews/user-status--documentation.png](previews/user-status--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| status | none | none, nonSub, subscriber |
| Device | Desktop | Desktop, mobile |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `none / Desktop` | 240×40 | [7594:29618](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7594-29618) | 1 | ![](previews/user-status--none-desktop.png) |
| `none / mobile` | 30×30 | [7594:29626](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7594-29626) | 7 | ![](previews/user-status--none-mobile.png) |
| `nonSub / Desktop` | 172×40 | [7594:29621](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7594-29621) | 0 | ![](previews/user-status--nonsub-desktop.png) |
| `subscriber / Desktop` | 30×30 | [7594:29624](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7594-29624) | 0 | ![](previews/user-status--subscriber-desktop.png) |

## Anatomy

Default variant `none / Desktop` (hidden layers marked):

- **Device=Desktop, status=none** `COMPONENT`: 240×40, horizontal, gap 16, padding 0/0/0/0, hug×hug
  - **Button Primary** `INSTANCE`: 126×40, vertical, gap 8, padding 0/8/0/8, hug×hug, instance of Button Primary (Icon=None, State=Default, Breakpoint=Desktop)
  - **Button Primary** `INSTANCE`: 98×40, vertical, gap 8, padding 0/8/0/8, hug×hug, instance of Button Primary (Icon=None, State=Default, Breakpoint=Desktop)

## Component tokens

From `user-status.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `user-status.base.button-primary.height` | 40px |
| `user-status.base.root.gap` | `{spacing.200}` |
| `user-status.base.userpic.height` | 30px |
| `user-status.base.userpic.width` | 30px |
| `user-status.status-none.button-primary.width` | 98px |
| `user-status.status-nonsub.button-primary.width` | 126px |
| `user-status.device-mobile.userpic.icon-color` | `{color.gray.max}` |

## Behavior and breakpoints

No Breakpoint property: one size at every width.

- Logged out on Desktop: Subscribe and Log In (Button Primary); on mobile: the account icon (UserPic with UserImage unknown).
- nonSub: Subscribe, then the avatar (UserPic Small). subscriber: the avatar only.
- **Spacing:** 16px (`spacing/200`) between the parts (production 15px), centered vertically.
- AccountMenu adds the chevron next to the avatar.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **MNG Web Design System** only (other files that use the library are not counted). Total: **8**.

Placed on pages: Modal Panels | 2026.11.10 ×7.
1 instances are nested inside other instances.

**Built from:** Button Primary ×3, UserPic ×3

## Production

Production `#dfm-digisubs-menu` (all 6 review sites, logged in, 2026-11-13).

## Known issues

1. Production's header Subscribe is `color/theme/primary-dark`, Noto Sans SemiBold 15 / 26px, padding 10 / 7px, 45px tall; the design keeps Button Primary (design-vs-production 10.10).
2. Logged-out production wasn't checked this time (Karl is logged in on the review sites).

## Files

- `user-status.tokens.json`: component tokens (DTCG 2025.10).
- `user-status.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-13 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
