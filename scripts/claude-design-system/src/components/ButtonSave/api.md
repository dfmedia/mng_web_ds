The Save (bookmark) toggle at the start of the share bar. `SocialButtons` includes it; use it alone only outside the bar.

```js
const { ButtonSave } = window.mng_web_design_system;
h(ButtonSave, { checked: saved, onChange: (next) => setSaved(next) })
```

| Prop | Values | Default |
|---|---|---|
| `checked` | `true` / `'yes'` (filled bookmark), `false` / `'no'` (outline) | `false` |
| `onChange` | called with the next checked value on click | |
| `interaction` | `'Default'`, `'hover'`, `'pressed'` (forces the look) | `'Default'` |
| `inFocus` | `'True'`, `'False'` (forces the focus ring) | `'False'` |
| `aria-label` | the accessible name | "Save this article to read later." (production's) |
