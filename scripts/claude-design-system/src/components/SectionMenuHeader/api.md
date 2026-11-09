The section menu toggle: the hamburger when the drawer is closed, the × when it's open, in the same place. `SectionMenu` and `Masthead` draw it for you; use it alone for a custom header.

```js
const { SectionMenuHeader } = window.mng_web_design_system;
h(SectionMenuHeader, { device: 'Desktop', view: open ? 'Open' : 'Closed', menuId: 'all-sections', onClick: toggle })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'Desktop'` (icon + label), `'TabletV'`, `'Mobile'` (icon only) | `'Desktop'` |
| `view` | `'Closed'`, `'Open'` (sets `aria-expanded`) | `'Closed'` |
| `label` | text | `'All Sections'` |
| `openLabel`, `closeLabel` | accessible names when icon only | production's |
| `menuId` | the drawer's id (`aria-controls`) | |
| `onClick` | toggles the drawer | |
