One related story in the Zone 1 Lead Article Card's Related list. Pass the title, its link and the time; the card draws three by default. The item fills its list; put items in a `ul` (labelled by its "Related" header) with 4px (`spacing/050`) between them, as the card does.

```js
const { RelatedArticleListItem } = window.mng_web_design_system;
h('ul', { 'aria-labelledby': 'related-title' },
  h('li', null, h(RelatedArticleListItem, { headline: 'Storm closes I-70', href: '/news/storm', time: '56 mins ago', dateTime: '2026-11-02T14:04:00Z' })),
  h('li', null, h(RelatedArticleListItem, { headline: 'School board votes on budget', href: '/news/budget', time: '3 weeks ago' })))
```

| Prop | Values | Default |
|---|---|---|
| `headline`, `href`, `target` | title text; `href` makes it the link | the Figma sample |
| `time`, `dateTime` | time text right after the title (`''` hides it); ISO date for the `time` element | `'56 mins ago'` |
| `headingLevel` | heading level of the title | `4` |

Renders an `article`: the bullet (decorative, `aria-hidden`), then the title heading and a `time` element, both inline.
