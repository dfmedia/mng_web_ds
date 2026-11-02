The homepage Photos block (production Zone 7): the section title, a big photo lead, six thumbnail stories and "Show More Photos". Pass the lead in `lead` and the thumbnails in `items`; pick `device` for the screen range. The block fills its column.

```js
const { PhotosBlock } = window.mng_web_design_system;
h(PhotosBlock, {
  device: 'XL (≥1280px)',
  href: '/photos',
  lead: { headline: 'Photos: Fall colors along the Front Range', excerpt: 'Aspens peak a week early.', image: '/img/aspens.jpg', imageAlt: 'Aspens on a hillside', href: '/photos/aspens' },
  items: [{ headline: 'Scenes from the homecoming parade', image: '/img/parade.jpg', imageAlt: 'Marching band', href: '/photos/parade', showGalleryIcon: true }],
  showMoreHref: '/photos'
})
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'XS (≤639px)'`, `'S (640–799px)'`, `'M (800–1039px)'`, `'L (1040–1279px)'`, `'XL (≥1280px)'`; `'XS'`…`'XL'` also work | `'XS (≤639px)'` |
| `title`, `href` | section title; `href` makes it a link | `'Photos'` |
| `lead` | 1Col Article Card props (Style is always Media Lead; the excerpt shows from M) | the Figma sample |
| `items` | up to 6 Horizontal Thumbnail Card props (Device is always Mobile) | 6 Figma samples |
| `showMoreLabel`, `showMoreHref`, `onShowMore` | the Show More Affordance | `'Show More Photos'` |
| `headingLevel` | heading level of the lead and thumbnail headlines | `3` |

Renders a `section`: the title (`h2`, Section Title / Eyebrow), the lead and a `ul` of thumbnails, then Show More Affordance.
