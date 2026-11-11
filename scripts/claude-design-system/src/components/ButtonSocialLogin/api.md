The pill button for social sign-in and the Embedded Login footer CTAs. Give an icon-only button an `aria-label`.

```js
const { ButtonSocialLogin } = window.mng_web_design_system;
h(ButtonSocialLogin, { iconPosition: 'left', icon: 'google-color', label: 'Google', fill: true, onClick: signIn })
h(ButtonSocialLogin, { iconPosition: 'only', icon: 'appleinc', 'aria-label': 'Continue with Apple' })
h(ButtonSocialLogin, { label: 'Continue', fill: true })
```

| Prop | Values | Default |
|---|---|---|
| `iconPosition` | `'None'`, `'left'`, `'right'`, `'only'` (a 40x40 circle, no label) | `'None'` |
| `icon` | an icon name (`'appleinc'`, `'facebook'`, `'google-color'`, `'email'`, ...) | `'new-tab'` |
| `iconColor` | a CSS color for brand icons that need one (Facebook blue `#1877F2`) | inherits `color/gray/min` |
| `label` / children | the text | `'Social Button'` |
| `fill` | the button fills its container (inside the 8px side margin) | `false` (hugs the label) |
| `interaction` | `'Default'`, `'hover'`, `'pressed'` (forces the look) | `'Default'` |
| `inFocus` | `'True'`, `'False'` (forces the focus ring) | `'False'` |
| `href`, `target` | renders a link instead of a button | |
| `onClick`, `type`, `disabled`, `aria-label` | passed to the control | |

Not checked against production; used in the Embedded Login designs.
