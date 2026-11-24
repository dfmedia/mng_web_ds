The loading animation. Prefer the 48px Spinner in the content area, centered where the new content will appear, with a short message 16px below it; inside a button use Button Primary / Tertiary `state: 'Loading'` (or `loading`), which draws the 20px Spinner for you. The Spinner is decorative (`aria-hidden`): put `aria-busy="true"` on the area that is waiting, and a message (or the button's waiting label) that says what is happening.

```js
const { Spinner } = window.mng_web_design_system;
h('div', { 'aria-busy': 'true', style: { textAlign: 'center' } },
  h(Spinner, { size: 48 }),
  h('p', null, 'Checking your subscription…'))
```

| Prop | Values | Default |
|---|---|---|
| `size` | `20`, `48` | `48` |
| `color` | `'On light'` (`color/gray/min`), `'On dark'` (`color/gray/max`) | `'On light'` |

One turn every 0.8s, linear; with reduced motion, one turn every 2 seconds instead of stopping, so the page still shows it is working.
