The homepage Zone 1 (the top of the Editor's Picks homepage): the lead story, four secondary stories, the Latest Headlines rail and the right-rail ad. Pass the lead in `lead`, the four stories in `stories` and the headline list in `latest`; pick `device` for the screen range. Leave the ad out for subscribers with `showAd: false`. The block fills its row.

```js
const { TopZoneBlock } = window.mng_web_design_system;
h(TopZoneBlock, {
  device: 'XL (≥1280px)',
  lead: { headline: 'Storm closes I-70', excerpt: 'Crews expect the road to reopen Tuesday.', image: '/img/storm.jpg', imageAlt: 'Snowplows on I-70', href: '/news/storm' },
  stories: [{ headline: 'School board votes on budget', image: '/img/board.jpg', imageAlt: 'Board meeting', href: '/news/budget' }],
  latest: { items: [{ headline: 'Broncos sign kicker', time: '5 mins ago', href: '/sports/kicker' }] },
  showAd: true
})
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'XS (≤639px)'`, `'S (640–799px)'`, `'M (800–1039px)'`, `'L (1040–1279px)'`, `'XL (≥1280px)'`; `'XS'`…`'XL'` also work | `'XS (≤639px)'` |
| `lead` | Zone 1 Lead Article Card props (its Device follows the block) | the Figma sample |
| `stories` | up to 4 TopZone Article Card props (Device follows the block) | 4 Figma samples |
| `latest` | Latest Headlines props (Device follows the block) | the Figma sample |
| `ad` | AdBlocks props, or your own element | Cube 1 RRail ATF 300x250 / 300x1050 |
| `showAd` | `false` hides the ad column (subscribers) | `true` |
| `headingLevel` | heading level of the lead and story headlines | `3` |

Renders a `section`: the lead column (lead card and a `ul` of stories), Latest Headlines, and an `aside` with the ad.
