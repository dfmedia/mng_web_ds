The content of a wide section rail (inside Section Rail Card Wide): the lead story as a Horizontal Feature Card and three or so headlines. Pass the lead in `feature` and the headlines in `items`; pick `device` for the screen range. The block fills its column and sets each item's rule itself.

```js
const { FeatureListContentBlock } = window.mng_web_design_system;
h(FeatureListContentBlock, {
  device: 'XL (≥1280px)',
  feature: { headline: 'Storm closes I-70', excerpt: 'Crews expect the road to reopen Tuesday.', href: '/news/storm' },
  items: [
    { headline: 'School board votes on budget', href: '/news/budget' },
    { headline: 'New bike lanes open downtown', href: '/news/bikes' }
  ]
})
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'(≤799px)'`, `'M (800–1039px)'`, `'L (1040–1279px)'`, `'XL (≥1280px)'`; `'M'`, `'L'`, `'XL'` also work | `'(≤799px)'` |
| `feature` | Horizontal Feature Card props (`headline`, `excerpt`, `image`, `imageAlt`, `href`) | the Figma sample |
| `items` | `[{ headline, href, target }]` | 3 Figma samples |
| `headingLevel` | heading level of every headline | `3` |

Renders a `div`: the feature, then a `ul` of Headline List Items. The last item's rule is Dark below 1040px and None from 1040px.
