The homepage Zone 1 lead story (production `.feature-primary .feature-large`) with its Related list. The headline is the link, and so is each related title. Consumer supplies the article's `href`, `headline`, `excerpt`, the `related` items, either an `image` with `imageAlt` or, for a photo gallery, `gallery: 'Slideshow'` with the `slideshow` props, and the `device` that matches the lead's width.

```js
const { Zone1LeadArticleCard } = window.mng_web_design_system;
h(Zone1LeadArticleCard, { device: 'Desktop', href: url, headline: title, excerpt: dek, image: src, imageAlt: alt,
  related: [{ headline: 'Game Day: Turning LeBron James’ record numbers into words', time: '56 mins ago', dateTime: iso, href: u1 }] })
h(Zone1LeadArticleCard, { device: 'Mobile', gallery: 'Slideshow', href: url, headline: title, excerpt: dek,
  slideshow: { slides: photos } })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'Desktop'`, `'Tablet'`, `'Mobile'` | `'Mobile'` |
| `gallery` | `'Image'`, `'Slideshow'` | `'Image'` |
| `style` | `'Standard'` | `'Standard'` |
| `headline`, `excerpt` | text | the Figma sample text |
| `related` | `[{ headline, time?, dateTime?, href?, target? }]`; `[]` hides the list | the three Figma sample items |
| `relatedTitle` | text | `'Related'` |
| `image`, `imageAlt` | URL (cover); alt text | placeholder |
| `slideshow` | props for `Zone1Slideshow` (`breakpoint` follows `device`; `fill` on Mobile) | |
| `href`, `target` | makes the headline a link | |
| `headingLevel` | 1–6 | `2` |

Choose `device` by the lead's width, not the screen: two columns when the lead is about 700px wide or more. On the homepage the third page column narrows the lead, so use `'Mobile'` below 640px and from 800 to 1279px, `'Tablet'` from 640 to 799px and `'Desktop'` from 1280px up (spec, production checked 2026-10-26). From 800 to 1279px production keeps the 29/33 headline in the one-column layout; no variant draws that (see Build notes). For Gallery=Slideshow with `'Mobile'` from 800 to 1279px pass `slideshow: { controls: 'Large' }` (Zone 1 Slideshow's controls follow production's 800px breakpoint).

Layout: every Device fills its column (production's split; Karl, 2026-11-03). Desktop: text 43.75% | image 56.25%, 20px apart (or text 43.75% | slideshow 50%, space-between); built 296 | 384 at 700. Tablet: text and image 50% each, 20px apart; built 364 | 364 at 748. The photo is 3:2 at every width. Mobile fills its container: headline, image, excerpt, Related list (or headline, excerpt, Related list, slideshow), 8px apart, then a 1px `color/gray/500` rule. The Related list is a `<ul>` labelled by its header. Nested components: `Zone1Slideshow` and the runtime `ArticleImage`.
