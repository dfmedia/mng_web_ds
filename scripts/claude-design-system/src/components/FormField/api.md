A labelled text input with the system's states. The consumer supplies the label, the value or placeholder, and the state its validation decides; the component renders a real `<input>` with the `aria-invalid` / `aria-describedby` wiring.

```js
const { FormField } = window.mng_web_design_system;

// Email that passed the in-browser format check on blur.
h(FormField, { label: 'Email Address', value: email, onChange: setEmailFromEvent, state: 'Success', type: 'email' })

// Required field left empty: show the placeholder, red outline, warning icon and message.
h(FormField, { label: 'Email Address', state: 'Error', showValue: false, showPlaceholder: true,
  placeholder: 'Enter your email', errorMessage: 'Enter your email address.' })

// In a group (no left icon), with the error row removed because the group has a shared one.
h(FormField, { label: 'First Name', showIcon: false, errorRow: false, size: 'Mobile' })
```

| Prop | Values | Default |
|---|---|---|
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `state` | `'Blank'`, `'Filled'`, `'Focus'`, `'Error'`, `'Error Focus'`, `'Success'`, `'Disabled'` | `'Blank'` |
| `label` | text | `'Field Label'` |
| `value` / `onChange` | typed text; controlled when `onChange` is given | `'Text entered by the user'` |
| `placeholder` | gray hint | `'Placeholder text'` |
| `showValue` / `showPlaceholder` | which text shows (Blank always shows the placeholder) | `true` / `false` |
| `errorMessage` | shown in Error and Error Focus | `'Error message text.'` |
| `showIcon` / `icon` | left icon frame (icon font name) | `true` / `'email'` |
| `showLabelIcon` / `labelIcon` | icon before the label | `false` / `'email'` |
| `showRightIcon` / `rightIcon` / `rightIconNode` | trailing icon or element (not in Error, Error Focus, Success) | off |
| `showCardBadge` / `cardBadge` | card brand badge element | off |
| `errorRow` | keep the reserved error row | `true` |
| `id`, `name`, `type`, `autoComplete`, `inputMode`, `disabled`, `readOnly`, `onBlur`, `onFocus`, `aria-describedby` | passed to the input | |

When to use Success and Error: Success only after an in-browser check on blur (valid email format, a new password that meets the rules, a matching re-entry), never on a sign-in password or a value only the server can confirm. Error for an empty required field, a bad format, passwords that don't match; set the field back to Blank / Filled as soon as the user types. Show Error Focus when the user is back in a field in error before typing (with `state: 'Error'`, real focus does this). Form-level errors go in one InLineMessage banner above the fields, not on fields.
