A status dot. On its own it marks a level; inside `UserPic` its corner gives the meaning (top left = the reader is active, bottom right = an alert or message). Color alone isn't enough: give it a `label`, or say the same thing in nearby text.

```js
const { AlertLevel } = window.mng_web_design_system;
h(AlertLevel, { level: 'high', label: 'Payment problem' })
h(AlertLevel, { level: 'low', size: 'Large' })
```

| Prop | Values | Default |
|---|---|---|
| `level` | `'none'` (renders nothing), `'low'`, `'medium'`, `'high'` | `'none'` |
| `size` | `'Small'` (8px), `'Large'` (16px) | `'Small'` |
| `label` | accessible text; without it the dot is `aria-hidden` | |
