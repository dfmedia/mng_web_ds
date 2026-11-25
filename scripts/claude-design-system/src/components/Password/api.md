New password and its confirmation, for sign-up and password changes (not sign-in). The consumer runs the checks and sets each field's state.

```js
const { Password } = window.mng_web_design_system;
h(Password, {
  requirements: [
    { label: 'Minimum length is 6', met: pw.length >= 6 },
    { label: 'Include at least 1 letter', met: /[a-z]/i.test(pw) },
    { label: 'Include at least 1 number', met: /[0-9]/.test(pw) }],
  fields: {
  password: { value: pw, onChange: onPw, onBlur: checkRules, state: rulesMet ? 'Success' : pwState },
  confirm:  { value: pw2, onChange: onPw2, onBlur: checkMatch, state: matches ? 'Success' : cfState } },
  errorMessage: "Passwords don't match." })
```

| Prop | Values | Default |
|---|---|---|
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `fields.password` / `fields.confirm` | FormField props | labels Password / Confirm Password, `type: 'password'`, `autoComplete: 'new-password'` |
| `requirements` / `showRequirements` | the rules under Password, each `{ label, met }` | 3 rules, none met / `true` |
| `errorMessage` | the one error row's message (either field) | the field's `errorMessage` |

Order: Password (no error row), the requirements directly under it (near-black, green when met), Confirm Password and the only error row. Success: Password on blur once all three rules are met; Confirm once it matches. Never on a sign-in password. The field in error keeps its red outline and points at the shared message; Password also points at the requirements list. Update `met` as the reader types; the rows say their state to screen readers.
