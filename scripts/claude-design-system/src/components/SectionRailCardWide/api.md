A wide homepage section rail (production's rail beside the Blueconic Block): the section title, then the lead story and a few headlines (Feature + List Content Block). Pass the lead in `feature` and the headlines in `items`; pick `device` for the screen range. The card fills its column.

```js
const { SectionRailCardWide } = window.mng_web_design_system;
h(SectionRailCardWide, {
  device: 'XL (≥1280px)',
  title: 'News', href: '/news',
  feature: { headline: 'Storm closes I-70', excerpt: 'Crews expect the road to reopen Tuesday.', image: '/img/storm.jpg', imageAlt: 'Snowplows on I-70', href: '/news/storm' },
  items: [{ headline: 'School board votes on budget', href: '/news/budget' }]
})
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'(≤799px)'`, `'M (800–1039px)'`, `'L (1040–1279px)'`, `'XL (≥1280px)'`; `'M'`, `'L'`, `'XL'` also work | `'(≤799px)'` |
| `title`, `href` | section title; `href` makes it a link | `'Section Title'` |
| `feature` | Horizontal Feature Card props | the Figma sample |
| `items` | `[{ headline, href, target }]` | 3 Figma samples |
| `headingLevel` | heading level of the feature and list headlines | `3` |

Renders a `div`: the title (`h2`, Section Title / Eyebrow), then Feature + List Content Block.
