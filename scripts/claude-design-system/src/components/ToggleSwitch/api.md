The on / off switch on its own, built like `CheckBox`. Wrap it in a `<label>` with its text, or give it an `aria-label`. The consumer supplies the on / off state.

```js
const { ToggleSwitch } = window.mng_web_design_system;
h('label', { style: { display: 'flex', alignItems: 'center' } },
  h(ToggleSwitch, { status: on ? 'selected' : 'unselected', onChange: e => setOn(e.target.checked) }),
  'Email me breaking news alerts')
h(ToggleSwitch, { status: 'selected', icon: true, 'aria-label': 'Dark mode' })
```

| Prop | Values | Default |
|---|---|---|
| `status` / `onChange` | `'unselected'` (off), `'selected'` (on); controlled when `onChange` is given | `'unselected'` |
| `interaction` | `'Default'`, `'hover'`, `'pressed'`, `'disabled'` (forces the look) | `'Default'` |
| `inFocus` | `'True'`, `'False'` (forces the focus ring) | `'False'` |
| `icon` | `true` / `'True'`: `close` (off) or `checkmark3` (on) in the handle | `false` |
| `aria-label`, `aria-labelledby`, `aria-describedby`, `id`, `name`, `value`, `disabled` | passed to the input | |

The whole 64x40 area is clickable; the pointer turns into a hand there. Space toggles it from the keyboard. Not in production yet.
