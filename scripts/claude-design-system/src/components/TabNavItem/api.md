One tab of the homepage For You tab bar. Normally used through `TabNav`; use it alone only inside your own `role="tablist"`. Consumer supplies `label`, `selected`, `controls` (the panel id) and `onClick`.

```js
const { TabNavItem } = window.mng_web_design_system;
h(TabNavItem, { label: "Editor's Picks", selected: true, controls: 'panel-picks', id: 'tab-picks', onClick: show })
h(TabNavItem, { label: 'For You', controls: 'panel-for-you', id: 'tab-for-you', onClick: show })
```

| Prop | Values | Default |
|---|---|---|
| `selected` | boolean: Active look + `aria-selected` | `false` |
| `state` | `'Default'`, `'Hover'`, `'Active'`, `'Focus'` (documentation only) | unset |
| `label` | text (shown uppercase) | `"Editor's Picks"` |
| `controls` | panel id, set as `aria-controls` | |
| `id`, `onClick`, `tabIndex`, … | button attributes | |

Renders `<button type="button" role="tab">`. The tab has no background of its own: it sits on the bar's `color/gray/max`.
