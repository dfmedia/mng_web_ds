The article share bar and the obituary "Share this obituary" buttons. Pass the buttons the site uses; the component keeps the order, applies the More rule and handles the More panel (Popover).

```js
const { SocialButtons } = window.mng_web_design_system;
h(SocialButtons, { theme: 'Bold Coastal', networks: ['Facebook', 'Reddit', 'X', 'Print', 'Gift'],
  saved, onSave: setSaved, links: { Facebook: fbUrl, Reddit: redditUrl, X: xUrl }, onShare: (network, e) => track(network) })
h(SocialButtons, { theme: 'Endless Tributes', save: false, label: 'Share this obituary', networks: ['Facebook', 'Email', 'Link'] })
```

| Prop | Values | Default |
|---|---|---|
| `theme` | `'Bold Coastal'`, `'Measured Vibrant'`, `'Modern Earthy'`, `'Endless Tributes'` (obituaries), `'TwinCities'` | `'Bold Coastal'` |
| `networks` | any of `'Facebook'`, `'Bluesky'`, `'Reddit'`, `'X'`, `'Print'`, `'Email'`, `'LinkedIn'`, `'Link'`, `'Gift'` (order doesn't matter) | Facebook, Reddit, X, Email, Link, Gift |
| `save` | show Save and its divider | `true` |
| `saved`, `onSave` | Save's checked state and change handler | |
| `links` | `{ network: url }`: renders those buttons as links | |
| `onShare` | `(network, event)` on any share button click | |
| `moreOpen`, `onMoreOpenChange` | force the More panel open or closed, or listen to it | the panel opens and closes itself |
| `label` | the group's accessible name | "Share this article" |

More appears only when there are more than 6 share buttons: the first 6 show (Gift always one of them), the rest go in the panel.
