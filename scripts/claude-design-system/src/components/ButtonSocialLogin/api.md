The pill button for social sign-in and the Embedded Login footer CTAs. Set `brand` for Apple, Google and Facebook sign-in: each is drawn the way the vendor requires, with its own logo and a "Continue with ..." label. Give an icon-only button an `aria-label`.

```js
const { ButtonSocialLogin } = window.mng_web_design_system;
h(ButtonSocialLogin, { brand: 'Google', fill: true, onClick: signIn })          // "Continue with Google"
h(ButtonSocialLogin, { brand: 'Apple', label: 'Sign in with Apple', fill: true })
h(ButtonSocialLogin, { brand: 'Facebook', iconPosition: 'only', 'aria-label': 'Continue with Facebook' })
h(ButtonSocialLogin, { iconPosition: 'only', icon: 'email', 'aria-label': 'Continue with email' })
h(ButtonSocialLogin, { label: 'Continue', fill: true })
```

| Prop | Values | Default |
|---|---|---|
| `brand` | `'None'` (our gray button), `'Apple'`, `'Google'`, `'Facebook'` | `'None'` |
| `iconPosition` | `'None'`, `'left'`, `'right'`, `'only'` (a 40x40 circle, no label); brands take `'left'` or `'only'` | `'None'`; brands `'left'` |
| `icon` | an icon name (`'email'`, ...); ignored when a brand is set (the brand's logo is fixed) | `'new-tab'` |
| `iconColor` | a CSS color for the icon (Brand None only) | inherits `color/gray/min` |
| `label` / children | the text | `'Social Button'`; brands `'Continue with <Brand>'` (Apple also allows Sign in / Sign up with Apple) |
| `fill` | the button fills its container (inside the 8px side margin) | `false` (hugs the label) |
| `interaction` | `'Default'`, `'hover'`, `'pressed'` (forces the look) | `'Default'` |
| `inFocus` | `'True'`, `'False'` (forces the focus ring) | `'False'` |
| `href`, `target` | renders a link instead of a button | |
| `onClick`, `type`, `disabled`, `aria-label` | passed to the control | |

Facebook's blue (#1877F2) with white 16px text is 4.2:1 and fails WCAG AA; accepted by Karl (2026-11-17). The blue Facebook circle isn't allowed by Facebook; kept at Karl's request. Not checked against production; used in the Embedded Login designs.
