The featured (lead) story at the top of the Blocks feed (For You tab). Only the headline is a link. Consumer supplies the article's `href`, `section`, `headline`, `excerpt`, `author`, `time` (and `dateTime`), either an `image` with `imageAlt` or, for a photo gallery, `gallery: 'Slideshow'` with the `slideshow` props, and the layout's `device`: two columns when the lead is about 700px wide or more, which in the For You feed (no side column) means `'Tablet'`/`'Desktop'` at 640px and up and `'Mobile'` below.

```js
const { BlocksLeadArticleCard } = window.mng_web_design_system;
h(BlocksLeadArticleCard, { device: 'Desktop', href: url, section: 'Crime and Public Safety', headline: title,
  excerpt: dek, author: 'Ruby Gonzales', time: '56 mins ago', image: src, imageAlt: alt })
h(BlocksLeadArticleCard, { device: 'Mobile', gallery: 'Slideshow', href: url, headline: title,
  slideshow: { slideCount: '1 of 29', caption: captionText } })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'Mobile'`, `'Tablet'`, `'Desktop'` | `'Mobile'` |
| `gallery` | `'Image'`, `'Slideshow'` | `'Image'` |
| `state` | `'Default'`, `'Hover'` (documentation only; `'Focus'` shows the link outline) | unset |
| `section`, `headline`, `excerpt` | text | the Figma sample text |
| `author`, `time`, `dateTime` | text; ISO time | `'Ruby Gonzales'`, `'56 mins ago'` |
| `image`, `imageAlt` | URL (cover); alt text | placeholder |
| `slideshow` | props for `Zone1Slideshow` (`breakpoint` follows `device`) | |
| `href`, `target` | makes the headline a link | |
| `headingLevel` | 1–6 | `2` |

Layout: every Device fills its column, at the Zone 1 lead's production split (Karl, 2026-11-03). Desktop: text 43.75% | image 56.25% (or slideshow 50%), 20px apart; built 296 | 384 at 700. Tablet: 50% each, 20px apart; built 364 | 364 at 748. The photo is 3:2 at every width; Mobile fills its container: headline, image, excerpt, byline (or headline, excerpt, byline, slideshow), 8px apart, then a 1px `color/gray/500` rule. Nested components: `ArticleSectionKicker`, `ArticleAuthor`, `ArticleTimestamp`, `Zone1Slideshow` and the runtime `ArticleImage`.
