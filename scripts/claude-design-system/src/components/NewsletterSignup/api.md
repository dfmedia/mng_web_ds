The newsletter prompt and Sign Up button at the end of the Zone 1 Latest Headlines list, shown to readers who aren't signed in. `LatestHeadlines` draws it for you; use it alone anywhere the same prompt belongs. It fills its column.

```js
const { NewsletterSignup } = window.mng_web_design_system;
h(NewsletterSignup, { device: '(≥800px)', prompt: 'Get the latest news delivered daily!', href: '/newsletters' })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'(≤799px)'` (full width) or `'(≥800px)'` (side column); the layout is the same, only the width you put it in changes. `'Mobile'` / `'Desktop'` also work | `'(≤799px)'` |
| `prompt` | the prompt text (each site sets its own) | `'Sign up for Newsletters and Alerts'` |
| `label` | button text | `'Sign Up'` |
| `href`, `target`, `onClick` | the button becomes a link with `href`; otherwise a `button` | |

Renders a `div` with the prompt (`p`) and a Button Primary.
