One round share button. Use it inside `SocialButtons`; on its own, give it an `href` (share link) or an `onClick`.

```js
const { SocialMediaButton } = window.mng_web_design_system;
h(SocialMediaButton, { network: 'Facebook', theme: 'Measured Vibrant', href: shareUrl, target: '_blank' })
h(SocialMediaButton, { network: 'Print', onClick: () => window.print() })
```

| Prop | Values | Default |
|---|---|---|
| `network` | `'Facebook'`, `'Bluesky'`, `'Reddit'`, `'X'`, `'Print'`, `'Email'`, `'LinkedIn'`, `'Link'`, `'Gift'`, `'Share more'` | `'Facebook'` |
| `theme` | `'Bold Coastal'` (filled), `'Measured Vibrant'` (1px outline), `'Modern Earthy'` (2px brand outline) | `'Bold Coastal'` |
| `interaction` | `'Default'`, `'hover'`, `'pressed'` (forces the look) | `'Default'` |
| `inFocus` | `'True'`, `'False'` (forces the focus ring) | `'False'` |
| `href`, `target` | renders a link instead of a button | |
| `aria-label` | the accessible name | the network's action, e.g. "Share on Facebook" |
| `onClick`, `type`, other attributes | passed to the control | |

Colors come from the page's theme (`data-theme`); Modern Earthy's network colors are the vendors' brand colors.
