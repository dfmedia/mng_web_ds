One radio button, with or without its label. Put every choice for one question in a `<fieldset>` with a `<legend>`, give them the same `name`, and keep the selected value in state. The consumer supplies the checked state.

```js
const { RadioButton } = window.mng_web_design_system;
h('fieldset', { style: { border: 0, margin: 0, padding: 0 } },
  h('legend', null, 'Payment'),
  ['Credit/Debit Card', 'Google Pay'].map(m =>
    h(RadioButton, { key: m, name: 'payment', value: m, label: m,
      status: method === m ? 'selected' : 'unselected', onChange: () => setMethod(m) })))
h(RadioButton, { name: 'size', value: 's', 'aria-label': 'Small' })   // circle alone
```

| Prop | Values | Default |
|---|---|---|
| `status` / `onChange` | `'unselected'`, `'selected'`; controlled when `onChange` is given | `'unselected'` |
| `label` | the text (Figma `Label`); omit it for the circle alone | |
| `interaction` | `'Default'`, `'hover'`, `'pressed'`, `'disabled'` (forces the look) | `'Default'` |
| `inFocus` | `'True'`, `'False'` (forces the focus ring) | `'False'` |
| `name`, `value`, `id`, `required`, `disabled`, `aria-label`, `aria-labelledby`, `aria-describedby` | passed to the input | |

The circle's 40x40 touch area and the label are clickable; the pointer turns into a hand there, and the focus ring goes around the touch area, not the label. Tab moves into the group, the arrow keys move the choice, Space selects.
