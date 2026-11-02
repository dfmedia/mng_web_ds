The homepage Zone 2 Blueconic list ("Most Popular" or "Recommended For You"): a title, a primary rule and ten numbered headlines, in one column on phones and two from 640px. Pass the headlines in `items`; the block fills its column. Pick `device` for the screen range: production switches at 640 and 1040px.

```js
const { BlueconicBlock } = window.mng_web_design_system;
h(BlueconicBlock, {
  device: '(≥1040px)',
  title: 'Most Popular',
  items: [{ headline: 'Storm closes I-70', href: '/news/storm' }, { headline: 'School board votes on budget', href: '/news/budget' }]
})
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'XS'` (639px and below: one column), `'(640–1039px)'` (two columns), `'(≥1040px)'` (two columns, larger metrics) | `'XS'` |
| `title` | the title text (Blueconic sets it) | `'Most Popular'` |
| `items` | `[{ headline, href, target }]`, numbered in order | the 10 Figma samples |
| `headingLevel` | the title element | `'h2'` |

Renders a `section` with an `h2` title and an `ol` of Blueconic List Items, in CSS columns from 640px (as production).
