A section with subcategories. The section row opens and closes the list; make the first item the section's own page. `SectionMenu` builds these from its `sections` and keeps only one open.

```js
const { SectionMenuGroup } = window.mng_web_design_system;
h(SectionMenuGroup, { label: 'News', view: open ? 'Open' : 'Closed', onToggle: toggle,
  items: [{ label: 'News', href: '/news' }, { label: 'Politics', href: '/politics' }, { label: 'Weather', href: '/weather' }] })
```

| Prop | Values | Default |
|---|---|---|
| `view` | `'Closed'`, `'Open'` | `'Closed'` |
| `label` | section name | `'Section Item Name'` |
| `items` | strings or `{ label, href }`; first = the section page | the Figma sample |
| `listId`, `onToggle` | list id, click handler | from the label |
