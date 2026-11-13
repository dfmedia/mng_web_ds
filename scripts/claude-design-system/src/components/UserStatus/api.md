The masthead's account area by reader status: logged out (Subscribe and Log In, or the user icon on mobile), logged in without a subscription (Subscribe and the avatar), subscriber (the avatar). The Masthead and AccountMenu add the chevron and the menu button around the avatar.

```js
const { UserStatus } = window.mng_web_design_system;
h(UserStatus, { status: 'nonSub', user: { name: 'Gritty McGee', src: reader.photoUrl }, subscribeHref: '/subscribe' })
h(UserStatus, { status: 'none', onLogIn: openLogin, subscribeHref: '/subscribe' })
```

| Prop | Values | Default |
|---|---|---|
| `status` | `'none'`, `'nonSub'`, `'subscriber'` | `'none'` |
| `device` | `'Desktop'`, `'mobile'` | `'Desktop'` |
| `user` | `{ src, name, initials, status, alert }` for UserPic | |
| `subscribeLabel` / `subscribeHref` / `onSubscribe` | the Subscribe button | `'Subscribe'` |
| `logInLabel` / `logInHref` / `onLogIn` | the Log In button | `'Log In'` |
