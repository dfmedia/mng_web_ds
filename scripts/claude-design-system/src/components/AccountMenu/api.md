The masthead's account control and its menu. Logged in, the avatar (UserPic) and chevron open a 300px dropdown at every width (full width at 340px and below: `fullWidth`). Logged out, below 1040px the user icon opens a panel that slides in from the right; from 1040px up, Subscribe and Log In show instead. The menu opens and closes itself (Esc, a click on the scrim or tabbing past the last link closes it and returns focus to the avatar); `view` forces a state for documentation.

```js
const { AccountMenu } = window.mng_web_design_system;
h(AccountMenu, {
  status: 'loggedIn', userType: 'subscriber',
  user: { src: reader.photoUrl, name: 'Gritty McGee', email: 'gritty@gmail.com' },
  subscriptionType: 'Premium Digital Subscriber',
  readerDashboardHref: '/dashboard', onLogOut: logOut, onSearchClick: openSearch
})
```

| Prop | Values | Default |
|---|---|---|
| `status` | `'loggedOut'`, `'loggedIn'`, `'alert'` (payment issue panel) | `'loggedIn'` |
| `view` | `'Closed'`, `'Open'` (documentation; leave out in use) | interactive |
| `device` | `'(up to 1039px)'`, `'(1040px and up)'` (logged out), `'(all widths)'` | by status |
| `userType` | `'subscriber'`, `'nonSub'` (Subscribe Now and the "Subscribe for access" links) | `'subscriber'` |
| `user` | `{ src, name, email, initials, graphic, status, alert }` (UserPic) | |
| `userName`, `userEmail`, `subscriptionType` | the Figma text properties (group partner text, "Anonymous User") | sample text |
| `fullWidth` | the open menu spans the screen (340px and below) | `false` |
| `*Href`, `on*` | links and handlers for every row and button | |
| `marketing` | content for the marketing slot (at most 268px wide) | none |
| `inline` | draw the open panel in the flow (documentation) | `false` |
