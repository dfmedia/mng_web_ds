The bar at the top of the page for a breaking story: "BREAKING NEWS", the headline (a link to the story), the time and a close button. Pick `device` from the page width; it fills its column and puts 16px below itself. The consumer hides it when `onClose` fires.

```js
const { BreakingNewsBanner } = window.mng_web_design_system;
h(BreakingNewsBanner, { device: '(≥800px)', headline: 'Gov. Jared Polis pardons 27 people', href: '/2026/11/12/pardons/',
  date: 'November 12, 2026 at 2:14 pm', dateTime: '2026-11-12T14:14', onClose: () => setShow(false) })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'XS (≤639px)'`, `'S (640–799px)'` (one paragraph) or `'(≥800px)'` (one row) | `'XS (≤639px)'` |
| `headline`, `href` | the story's headline and URL | sample text, `'#'` |
| `date`, `dateTime` | the time as shown and for the `time` element; `date: false` hides it | sample date |
| `title` | the title (shown uppercase) | `'Breaking News'` |
| `onClose`, `closeLabel` | close button handler and its accessible name | `'Close breaking news'` |
| `headingLevel` | heading level of the title | `2` |

Renders a `section` (named "Breaking news") with an `h2` title, an `a` headline, a `time` and a `button`.
