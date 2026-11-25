One row of the password requirements list. `Password` renders three of these; use it on its own only to build a different list of rules.

```js
const { PasswordRequirement } = window.mng_web_design_system;
h('ul', { className: 'my-rules' },
  h(PasswordRequirement, { met: pw.length >= 6 }, 'Minimum length is 6'),
  h(PasswordRequirement, { met: /[a-z]/i.test(pw) }, 'Include at least 1 letter'))
```

| Prop | Values | Default |
|---|---|---|
| `met` (or `state`) | `true` / `false` (`'Met'` / `'Not met'`) | `false` |
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `label` or children | the rule's text | `'Minimum length is 6'` |
| `as` | `'li'`, `'div'` | `'li'` |

Not met: open circle, icon and text near-black. Met: check circle, icon and text green. Screen readers hear "…, met" or "…, not met" after the text.
