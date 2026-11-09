A one-time code entry: six `CodeBox` cells under a label, with one shared error row. The consumer supplies the code state and the server's answer.

```js
const { VerificationCode } = window.mng_web_design_system;
h(VerificationCode, { value: code, onChange: setCode,
  state: rejected ? 'Error' : code.length === 6 ? 'Success' : undefined,
  showError: rejected, errorMessage: "That code didn't work. Check it and try again." })
```

| Prop | Values | Default |
|---|---|---|
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `label` | text | `'Verification Code'` |
| `value` / `defaultValue` / `onChange` / `onComplete` | the code | empty |
| `length` | number of cells | `6` |
| `state` | every cell's state (`'Success'`, `'Error'`…) | per cell: Blank or Filled |
| `showError` / `errorMessage` | the shared error row | `false` / `'Error message text.'` |

Typing moves to the next cell; Backspace on an empty cell goes back; the arrow keys move between cells; pasting a code fills the cells. The first cell has `autocomplete="one-time-code"` so phones can offer the code from a text message. Success (green, no checkmark) means the code is complete, not confirmed.
