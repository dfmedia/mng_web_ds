One headline in a section rail's headline list (Section Rail Card Narrow, Feature + List Content Block). Pass the headline and its link; pick the rule. The item fills its column; put items in a `ul` with 16px (`spacing/200`) between them, as the rails do.

```js
const { HeadlineListItem } = window.mng_web_design_system;
h('ul', null,
  h('li', null, h(HeadlineListItem, { headline: 'Storm closes I-70', href: '/news/storm' })),
  h('li', null, h(HeadlineListItem, { headline: 'School board votes on budget', href: '/news/budget', rule: 'None' })))
```

| Prop | Values | Default |
|---|---|---|
| `rule` | `'Default'` (12px, then a 1px rule), `'None'` (no rule), `'Dark'` (darker rule right under the text) | `'Default'` |
| `headline`, `href`, `target` | headline text; `href` makes it the link | the Figma sample |
| `headingLevel` | heading level of the headline | `3` |

Renders an `article` with the headline heading inside.
