A narrow homepage section rail (production's four-up section rails): the section title, a lead story (1Col Article Card) and a few headlines. Pass the lead in `lead` and the headlines in `items`; pick `device` for the screen range. The card fills its column: production puts it in a full-width column below 640px, half the row at 640–1039px and a quarter from 1040px.

```js
const { SectionRailCardNarrow } = window.mng_web_design_system;
h(SectionRailCardNarrow, {
  device: '(≥800px)',
  title: 'Sports', href: '/sports',
  lead: { headline: 'Rockies win in extra innings', excerpt: 'A walk-off double in the 11th.', image: '/img/rockies.jpg', imageAlt: 'Coors Field', href: '/sports/rockies' },
  items: [
    { headline: 'Broncos sign veteran safety', href: '/sports/broncos' },
    { headline: 'Avalanche open camp Thursday', href: '/sports/avs' }
  ]
})
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'(≤799px)'` (rule under the lead), `'(≥800px)'` (no rule); `'XS'`, `'S'`, `'M'`, `'L'`, `'XL'` also work | `'(≤799px)'` |
| `title`, `href` | section title; `href` makes it a link | `'Section Title'` |
| `lead` | 1Col Article Card props (Style is always Standard) | the Figma sample |
| `items` | `[{ headline, href, target }]`; the last has no rule | 3 Figma samples |
| `headingLevel` | heading level of the lead and list headlines | `3` |

Renders a `div`: the title (`h2`, Section Title / Eyebrow), the lead `article` and a `ul` of Headline List Items.
