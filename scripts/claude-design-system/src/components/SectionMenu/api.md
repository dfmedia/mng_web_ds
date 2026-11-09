The "All Sections" / hamburger toggle and the drawer it opens. Consumer supplies the device, open state, reader type and the site's sections (from its CMS menu); the component keeps one section open at a time.

```js
const { SectionMenu } = window.mng_web_design_system;
h(SectionMenu, { device: 'SM-Mobile', view: open ? 'Open' : 'Closed', userType: 'loggedOut', onToggle: toggle,
  weather: { eveningEdition: true },
  sections: [{ label: 'News', items: [{ label: 'News', href: '/news' }, { label: 'Politics', href: '/politics' }] },
             { label: 'BestReviews', href: '/best-reviews', items: false }] })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'XS-Fold'`, `'SM-Mobile'`, `'MD-TabletV'`, `'LG-TabletH'`, `'XL-Desktop'` | `'XS-Fold'` |
| `view` | `'Closed'`, `'Open'` | `'Closed'` |
| `userType` | `'subscriber'`, `'nonSub'`, `'loggedOut'` (`'all'` when closed) | `'subscriber'` |
| `sections` | `{ label, href, items }`; `items: false` for a plain link | the Figma sample |
| `openSection` / `defaultOpenSection`, `onSectionToggle` | which section is open | `0` |
| `weather` | WeatherBug props for the weather row | |
| `homeLabel`, `homeHref`, `subscribeHref`, `logInHref`, `logOutHref`, `menuId`, `label`, `onToggle` | | |

Esc should close the drawer and return focus to the toggle; the page supplies the black 50% overlay.
