Card Number (optional: `showCardNumber`), then Exp. Date, CVV and Zip Code, each sized to its content. Desktop 16px gaps; Mobile 8px gaps and 4px between rows. Built from `FormField`; the consumer supplies each field's props by key and decides the state.

```js
const { CcDetails } = window.mng_web_design_system;
h(CcDetails, { size: 'Mobile' })
h(CcDetails, { fields: { number: { state: 'Error', showValue: false, showPlaceholder: true } }, showError: true,
  errorMessage: 'Enter your card number.' })
```

| Field key | Label | Width |
|---|---|---|
| `number` | Card Number | 312px Desktop, 264px Mobile |
| `exp` | Exp. Date | 96px Desktop, 90px Mobile |
| `cvv` | CVV | 74px Desktop, 69px Mobile |
| `zip` | Zip Code | 84px Desktop, 78px Mobile |

| Prop | Values | Default |
|---|---|---|
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `fields` | `{ key: FormField props }` (state, label, value, placeholder, onChange, name…) | Figma labels; value = placeholder |
| `showError` / `errorMessage` | the shared error row under the group | `false` / `'Error message text.'` |
| `showCardNumber` | the Card Number row | `true` |

The fields' own error rows are off; one shared row under the group shows the message, and the field in error keeps its red outline and points to that message with `aria-describedby`. The message is announced (`role="alert"`) when it appears.
