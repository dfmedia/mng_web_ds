A circular 32px close (X) button. Not used on modals since 2026-11-10: ModalsCenter and ModalsOffset use `ButtonInLineClose` inside the card's top-right corner (Karl). Consumer supplies `onClick` and, when "Close" is not specific enough, a `label`. It renders a `<button>`; the icon is decorative and the `label` is its accessible name.

```js
const { ButtonModalClose } = window.mng_web_design_system;
h(ButtonModalClose, { onClick: closeModal })
h(ButtonModalClose, { label: 'Close sign-in', onClick: closeModal })
```

| Prop | Values | Default |
|---|---|---|
| `state` | `'Default'`, `'Hover'`, `'Pressed'`, `'InFocus'` (documentation only) | unset |
| `label` | accessible name (`aria-label`) | `'Close'` |
| `onClick`, `type`, `disabled`, other button attributes | passed to the `<button>` | `type: 'button'` |

32×32 at every width (no Breakpoint). For a modal, use `ButtonInLineClose` instead (ModalsCenter already includes it).
