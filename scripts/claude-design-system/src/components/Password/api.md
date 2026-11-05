New password and its confirmation, for sign-up and password changes (not sign-in). The consumer runs the checks and sets each field's state.

```js
const { Password } = window.mng_web_design_system;
h(Password, { fields: {
  password: { value: pw, onChange: onPw, onBlur: checkRules, state: rulesMet ? 'Success' : pwState },
  confirm:  { value: pw2, onChange: onPw2, onBlur: checkMatch, state: matches ? 'Success' : cfState } },
  errorMessage: "Passwords don't match." })
```

| Prop | Values | Default |
|---|---|---|
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `fields.password` / `fields.confirm` | FormField props | labels Password / Confirm Password, `type: 'password'`, `autoComplete: 'new-password'` |
| `hint` / `showHint` | the requirements under Password | 3 rules / `true` |
| `errorMessage` | the one error row's message (either field) | the field's `errorMessage` |

Order: Password (no error row), the hint directly under it, Confirm Password and the only error row. Success: Password on blur once all three rules are met; Confirm once it matches. Never on a sign-in password. The field in error keeps its red outline and points at the shared message; Password also points at the hint.
