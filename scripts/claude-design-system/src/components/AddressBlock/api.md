Street Address full width, then City (fills), State (2 characters: 55px Desktop, 53px Mobile) and Zip Code. Desktop 16px gaps and 8px between rows; Mobile 8px gaps and 4px between rows. Built from `FormField`; the consumer supplies each field's props by key and decides the state.

```js
const { AddressBlock } = window.mng_web_design_system;
h(AddressBlock, { size: 'Mobile' })
h(AddressBlock, { fields: { street: { state: 'Error', showValue: false, showPlaceholder: true } }, showError: true,
  errorMessage: 'Enter your street address.' })
```

| Field key | Label | Width |
|---|---|---|
| `street` | Street Address | fills the row |
| `city` | City | fills the row |
| `state` | State | 55px Desktop, 53px Mobile |
| `zip` | Zip Code | 84px Desktop, 78px Mobile |

| Prop | Values | Default |
|---|---|---|
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `fields` | `{ key: FormField props }` (state, label, value, placeholder, onChange, name…) | Figma labels; value = placeholder |
| `showError` / `errorMessage` | the shared error row under the group | `false` / `'Error message text.'` |


The fields' own error rows are off; one shared row under the group shows the message, and the field in error keeps its red outline and points to that message with `aria-describedby`. The message is announced (`role="alert"`) when it appears.
