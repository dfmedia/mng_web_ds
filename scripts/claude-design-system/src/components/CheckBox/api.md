The check box control on its own. For a check box with its text and error row use `CheckboxTerms`; anywhere else, wrap it in a `<label>` with its text or give it an `aria-label`. The consumer supplies the checked state.

```js
const { CheckBox } = window.mng_web_design_system;
h('label', { style: { display: 'flex', alignItems: 'center' } },
  h(CheckBox, { status: on ? 'selected' : 'unselected', onChange: e => setOn(e.target.checked) }),
  'Email me the newsletter')
h(CheckBox, { status: 'partial', 'aria-label': 'Select all' })   // some, not all, selected
```

| Prop | Values | Default |
|---|---|---|
| `status` / `onChange` | `'unselected'`, `'selected'`, `'partial'`; controlled when `onChange` is given | `'unselected'` |
| `interaction` | `'Default'`, `'hover'`, `'pressed'`, `'disabled'` (forces the look) | `'Default'` |
| `inFocus` | `'True'`, `'False'` (forces the focus ring) | `'False'` |
| `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-invalid`, `id`, `name`, `value`, `required`, `disabled` | passed to the input | |

The whole 40x40 area is clickable; the pointer turns into a hand there.
