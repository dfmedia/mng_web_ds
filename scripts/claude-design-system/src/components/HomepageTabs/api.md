The homepage tab bar (For You feature). Consumer supplies the `tabs` (label, tab id, panel id), the selection (`selectedIndex` + `onChange`, or `defaultSelectedIndex`), the layout's `breakpoint`, and renders the panels itself (`role="tabpanel"`, `id` = the tab's `panelId`, `aria-labelledby` = the tab's `id`).

```js
const { HomepageTabs } = window.mng_web_design_system;
h(HomepageTabs, {
  breakpoint: 'Desktop', 'aria-label': 'Homepage feeds',
  tabs: [{ label: "Editor's Picks", id: 'tab-picks', panelId: 'panel-picks' },
         { label: 'For You', id: 'tab-for-you', panelId: 'panel-for-you' }],
  selectedIndex: i, onChange: setI
})
```

| Prop | Values | Default |
|---|---|---|
| `breakpoint` | `'Desktop'` (640px and up), `'Mobile'` (below 640px) | `'Desktop'` |
| `tabs` | `[{ label, id?, panelId? }]` | Editor's Picks, For You |
| `selectedIndex` / `defaultSelectedIndex` | index | `0` |
| `onChange` | `(index, event) => void` | |
| `aria-label` | name of the tablist | |

Keyboard (WAI-ARIA Tabs pattern, manual activation): Tab reaches only the selected tab; Left / Right move between tabs (wrapping), Home / End go to the first / last; Enter or Space selects. Choosing a tab doesn't move focus; the page's panel follows `aria-controls`.

Renders a full-width bar: `ul role="tablist"` > `li role="presentation"` > `HomepageTab` (`button role="tab"`, `aria-selected`, `aria-controls`). The bar fills its container; Figma's 1280 / 360 widths are the frame sizes.
