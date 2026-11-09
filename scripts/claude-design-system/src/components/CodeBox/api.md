One cell of a verification code or PIN. Usually used through `VerificationCode`, which places six cells, moves focus between them and shows the shared label and error row. On its own, the consumer supplies the value, an accessible name and the state.

```js
const { CodeBox } = window.mng_web_design_system;
h(CodeBox, { 'aria-label': 'Digit 1 of 6', value: d, onChange: e => setDigit(0, e.target.value) })
h(CodeBox, { state: 'Success', value: '7', 'aria-label': 'Digit 2 of 6' })   // the code is complete
```

| Prop | Values | Default |
|---|---|---|
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `state` | `'Blank'`, `'Filled'`, `'Focus'`, `'Error'`, `'Error Focus'`, `'Success'`, `'Disabled'` | `'Blank'` |
| `value` / `onChange` | one character; controlled when `onChange` is given | `''` (Blank) or `'5'` |
| `aria-label` | the cell's name, e.g. 'Digit 1 of 6' | none |
| `inputRef`, `onKeyDown`, `onFocus`, `onBlur`, `inputMode`, `autoComplete`, `name`, `id`, `aria-describedby`, `disabled` | passed to the input | `inputMode: 'numeric'` |

Success means every cell is filled; the server still has to accept the code. If it doesn't, set the cells to Error.
