The main call to action, at most one per view. Consumer supplies `label` (or children), `onClick` or `href`, and the layout's `breakpoint`.

```js
const { ButtonPrimary } = window.mng_web_design_system;
h(ButtonPrimary, { label: 'Subscribe', onClick: go })
h(ButtonPrimary, { label: 'Read the guide', icon: 'Right', iconName: 'new-tab', href: url, target: '_blank' })
h(ButtonPrimary, { label: 'Continue', breakpoint: 'Mobile' })   // below 640px: fills the container
```

| Prop | Values | Default |
|---|---|---|
| `breakpoint` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `icon` | `'None'`, `'Left'`, `'Right'` | `'None'` |
| `iconName` | an `Icon` name | `'new-tab'` |
| `state` | `'Default'`, `'Hover'`, `'Pressed'`, `'InFocus'`, `'Loading'`, `'Disabled'` (documentation only; use `loading` / `disabled` in layouts) | unset |
| `label` | text | `'Primary Button'` |
| `href`, `target` | renders a link | |
| `loading` | waiting: a 20px Spinner (On dark) before `loadingLabel`; can't be pressed again | `false` |
| `loadingLabel` | the waiting label; say what is happening ("Signing in…") | `'Loading…'` |
| `disabled` | the Disabled look (`color/gray/600` fill, `color/gray/500` border, `color/gray/300` label); not focusable | `false` |
| `onClick`, `type` | button attributes | |

The root keeps the Figma variant's 8px side margin (`spacing/100`). The label is capitalized by style (`text-transform: capitalize`, from the Figma text case).

Loading and Disabled (Karl, 2026-11-24): prefer a 48px `Spinner` in the content area where the wait belongs to the content; use `loading` when the wait belongs to this button. Disabled text is 3.3:1 on purpose (WCAG 1.4.3 exempts disabled controls).
