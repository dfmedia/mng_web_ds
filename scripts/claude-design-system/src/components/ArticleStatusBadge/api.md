The label above a story's headline that says what kind of story it is: a subscriber-only story or sponsored content. Pick the `type`; the text is set for you (override it with `label`). The badge is as wide as its text; the card places it above the headline and sets the space around it.

```js
const { ArticleStatusBadge } = window.mng_web_design_system;
h(ArticleStatusBadge, { type: 'Subscriber' })   // SUBSCRIBER ONLY
h(ArticleStatusBadge, { type: 'Sponsored' })    // SPONSORED CONTENT (placeholder: see the note below)
h(ArticleStatusBadge, { type: story.subscriberOnly ? 'Subscriber' : 'None' })
```

| Prop | Values | Default |
|---|---|---|
| `type` | `'Subscriber'`, `'Sponsored'`, `'None'` (renders nothing) | `'Subscriber'` |
| `label` | badge text (shown in caps) | `'Subscriber Only'` / `'Sponsored content'` |

**Sponsored is a placeholder** (Karl, 2026-11-03): production has no sponsored badge to match yet, so it's drawn on the site's secondary color with Gray-Min text until one is designed or found. Gray-Min on secondary fails AA contrast on Denver Post (1.4:1) and The Baltimore Sun (4.2:1).

Renders a `span` with the text, so screen readers read it before the headline. 1Col Article Card (`showSubscriberBadge`) and Latest Headlines List Item (`type: 'Sponsored'`) draw it.
