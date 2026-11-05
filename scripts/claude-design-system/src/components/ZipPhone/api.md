Zip Code (84px Desktop, 78px Mobile) and Phone Number filling the row, for quick lookups. Built from `FormField`; the consumer supplies each field's props by key and decides the state.

```js
const { ZipPhone } = window.mng_web_design_system;
h(ZipPhone, { size: 'Mobile' })
h(ZipPhone, { fields: { zip: { state: 'Error', showValue: false, showPlaceholder: true } }, showError: true,
  errorMessage: 'Enter your zip code.' })
```

| Field key | Label | Width |
|---|---|---|
| `zip` | Zip Code | 84px Desktop, 78px Mobile |
| `phone` | Phone Number | fills the row |

| Prop | Values | Default |
|---|---|---|
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `fields` | `{ key: FormField props }` (state, label, value, placeholder, onChange, name…) | Figma labels; value = placeholder |
| `showError` / `errorMessage` | the shared error row under the group | `false` / `'Error message text.'` |


The fields' own error rows are off; one shared row under the group shows the message, and the field in error keeps its red outline and points to that message with `aria-describedby`. The message is announced (`role="alert"`) when it appears.
