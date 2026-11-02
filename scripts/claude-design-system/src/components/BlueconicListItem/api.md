One numbered headline in the Blueconic Block (homepage Zone 2). Usually you use `BlueconicBlock`, which numbers and lays out ten of these; use the item alone for a custom list. It fills its column.

```js
const { BlueconicListItem } = window.mng_web_design_system;
h(BlueconicListItem, { device: '(≥1040px)', number: 3, headline: 'Storm closes I-70', href: '/news/storm' })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'(≤1039px)'` or `'(≥1040px)'` (production switches the line height and letter spacing at 1040px) | `'(≤1039px)'` |
| `number` | the number in the circle | `1` |
| `headline` | text or nodes | the Figma sample |
| `href`, `target` | the row becomes the link | |

Renders a `div` with the number (decorative, `aria-hidden`) and the headline; with `href` the row is an `a`, as in production.
