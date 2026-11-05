First Name and Last Name side by side, each half the row. Desktop 16px gap (`spacing/200`), Mobile 8px (`spacing/100`). On a very narrow screen, stack them (`stack: true`). Built from `FormField`; the consumer supplies each field's props by key and decides the state.

```js
const { NamePair } = window.mng_web_design_system;
h(NamePair, { size: 'Mobile' })
h(NamePair, { fields: { first: { state: 'Error', showValue: false, showPlaceholder: true } }, showError: true,
  errorMessage: 'Enter your first name.' })
```

| Field key | Label | Width |
|---|---|---|
| `first` | First Name | fills the row |
| `last` | Last Name | fills the row |

| Prop | Values | Default |
|---|---|---|
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `fields` | `{ key: FormField props }` (state, label, value, placeholder, onChange, name…) | Figma labels; value = placeholder |
| `showError` / `errorMessage` | the shared error row under the group | `false` / `'Error message text.'` |
| `stack` | stack the fields (very narrow screens) | `false` |

The fields' own error rows are off; one shared row under the group shows the message, and the field in error keeps its red outline and points to that message with `aria-describedby`. The message is announced (`role="alert"`) when it appears.
