The lowest-emphasis boxed button: light-gray fill (`color/gray/600`), 1px gray border (`color/gray/400`), near-black label (`color/gray/min`); on Hover and Pressed the fill turns white and the border `color/gray/500`. Same in every theme. Consumer supplies `label` (or children), `onClick` or `href`, and the layout's `breakpoint`.

```js
const { ButtonTertiary } = window.mng_web_design_system;
h(ButtonTertiary, { label: 'Not now', onClick: close })
h(ButtonTertiary, { label: 'Read the guide', icon: 'Right', iconName: 'new-tab', href: url, target: '_blank' })
h(ButtonTertiary, { label: 'Continue', breakpoint: 'Mobile' })   // below 640px: fills the container
```

| Prop | Values | Default |
|---|---|---|
| `breakpoint` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `icon` | `'None'`, `'Left'`, `'Right'` | `'None'` |
| `iconName` | an `Icon` name | `'new-tab'` |
| `state` | `'Default'`, `'Hover'`, `'Pressed'`, `'InFocus'`, `'Loading'`, `'Disabled'` (documentation only; use `loading` / `disabled` in layouts) | unset |
| `label` | text | `'Tertiary Button'` |
| `href`, `target` | renders a link | |
| `loading` | waiting: a 20px Spinner (On light) before `loadingLabel`; can't be pressed again | `false` |
| `loadingLabel` | the waiting label; say what is happening ("Signing in…") | `'Loading…'` |
| `disabled` | the Disabled look (`color/gray/600` fill, `color/gray/500` border, `color/gray/300` label); not focusable | `false` |
| `onClick`, `type` | button attributes | |

The root keeps the Figma variant's 8px side margin (`spacing/100`). Buttons in a row or stack keep a 16px gap on Desktop, 8px stacked on Mobile (the consumer's layout sets it). The label is capitalized by style (`text-transform: capitalize`, from the Figma text case).

Loading and Disabled (Karl, 2026-11-24): prefer a 48px `Spinner` in the content area where the wait belongs to the content; use `loading` when the wait belongs to this button. Disabled text is 3.3:1 on purpose (WCAG 1.4.3 exempts disabled controls).
