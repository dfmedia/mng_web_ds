The avatar with its two status dots (Karl, 2026-11-13): top left = the reader is active, bottom right = the reader has an alert or message to see. It isn't a button: the account menu's button (with the chevron) goes around it, and its accessible name should say what the dots say.

```js
const { UserPic } = window.mng_web_design_system;
h('button', { 'aria-label': 'Account menu, Gritty McGee, 1 alert', 'aria-haspopup': 'true' },
  h(UserPic, { name: 'Gritty McGee', src: reader.photoUrl, status: 'Active', alert: 'high' }))
```

| Prop | Values | Default |
|---|---|---|
| `size` | `'Small'` (32px), `'Medium'` (40px), `'Large'` (64px, 16px dots) | `'Small'` |
| `status` | `'Default'`, `'Active'` (green dot, top left) | `'Default'` |
| `alert` | `'none'`, `'low'`, `'medium'`, `'high'` (dot, bottom right) | `'none'` |
| `src`, `name`, `initials`, `graphic`, `background`, `color`, `alt` | passed to UserImage | |
| `activeLabel`, `alertLabel` | accessible text on the dots | |
