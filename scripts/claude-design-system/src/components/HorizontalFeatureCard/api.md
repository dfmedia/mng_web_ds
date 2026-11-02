The lead story of a wide section rail (used by Feature + List Content Block and Section Rail Card Wide): a 4:3 image, the CardSecondary headline and the excerpt. Pick `device` for the screen range: production stacks it below 800px and puts the image beside the text from 800px. The card fills its column.

```js
const { HorizontalFeatureCard } = window.mng_web_design_system;
h(HorizontalFeatureCard, {
  device: 'L (1040–1279px)',
  headline: 'Storm closes I-70 through the canyon',
  excerpt: 'Crews expect the road to reopen Tuesday.',
  image: '/img/storm.jpg', imageAlt: 'Snowplows on I-70',
  href: '/news/storm'
})
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'(≤799px)'` (stacked), `'M (800–1039px)'`, `'L (1040–1279px)'`, `'XL (≥1280px)'`; `'M'`, `'L'`, `'XL'` also work | `'(≤799px)'` |
| `headline`, `href`, `target` | headline text; `href` makes it the link | the Figma sample |
| `excerpt`, `showExcerpt` | excerpt text; `false` hides it | the Figma sample, `true` |
| `image`, `imageAlt` | 4:3 image | Article Image Placeholder |
| `headingLevel` | heading level of the headline | `3` |

Renders an `article`: the image, then the headline heading and the excerpt `p`.
