The tab nav bar (For You feature). Consumer supplies the `tabs` (label, tab id, panel id), the selection (`selectedIndex` + `onChange`, or `defaultSelectedIndex`), the layout's `breakpoint`, and renders the panels itself (`role="tabpanel"`, `id` = the tab's `panelId`, `aria-labelledby` = the tab's `id`).

```js
const { TabNav } = window.mng_web_design_system;
h(TabNav, {
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

Renders a full-width bar: `ul role="tablist"` > `li role="presentation"` > `TabNavItem` (`button role="tab"`, `aria-selected`, `aria-controls`). The bar fills its container; Figma's 1280 / 360 widths are the frame sizes.

More tabs than fit (option C1, Karl, 2026-11-24): the bar stays full width; tabs stay 8px apart, so the tab at the edge shows partly; the side with more tabs fades over 48px; a chevron (36px, 16px arrow-left / arrow-right icon in color/gray/300, no fill or shadow) sits on each side that has more and scrolls about 80% of the visible width, sliding in 250ms ease-in-out (the section menu drawer's speed; instant with reduced motion). The fade ends just inside the chevron so the cut tab still shows. Chevrons are pointer aids (aria-hidden, not in the Tab order); keyboard and screen-reader users move with the arrow keys. Measured again on resize, scroll and when fonts load.
