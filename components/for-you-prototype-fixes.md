# For You prototype fixes: prompt for the prototype project

> **Updated 2026-10-28 (latest):** the For You cards are their own Blocks components now (the old Style=For You variants were deleted, Karl), so the prompt names them: a component map under the intro, section 10 points at Blocks Lead Article Card, and new section 11 adds the featured story's headline focus outline. **Earlier, 2026-10-28 (later):** section 6, the gallery badge, now uses production's format and sizes (Karl). The card and row hover already match the Blocks components. **Earlier, 2026-10-28,** after the For You components cleanup and export: section 4 (subhead gap 6 → 8px, Section Title now uses spacing/100), section 5 (the rule gray is per theme; the prototype is Bold Coastal), section 8 (header icon on the title's baseline) and a pointer to the exported specs. The list is complete: paste everything below the line into the For You Tab MVP project in one go. Card hover is parked (Karl). **2026-10-26:** added section 10, the featured-story slideshow. **First written 2026-10-23.** Status and node IDs: `components/for-you-ds-components-status.md`.

Every value below is an existing MNG Web Design System token (hex shown for Bold Coastal). Where production used a value with no token, it has been rounded to the nearest token (Karl, 2026-10-23), so don't reintroduce the old production values.

---

In `claude-design-v3/Main.dc.html`, update the For You prototype to match the MNG Web Design System components built from it. Use only the values given below. Don't add new colors, sizes or spacing, and don't change anything else on the page. When you're done, check at 340, 360, 768, 1024 and 1280 that nothing overflows the page.

Reference specs for every component below (exported 2026-10-28; Markdown spec, DTCG tokens, an HTML/CSS skeleton and previews per component): https://github.com/kuscholdMNG/mng_web_ds/tree/main/components (`core/` for the MNG Web Design System, `wordpress/` for WordPress Elements; list in `components/index.json`). If a spec and this prompt disagree, follow this prompt and tell me.

Which design-system component each part of the page matches (all in WordPress Elements unless noted; specs under `components/wordpress/<slug>/`):
- Feed cards (`.card`): **Blocks Card** (`blocks-card`).
- Feed rows (`.row`): **Blocks Article Row** (`blocks-article-row`).
- Featured story (`.fy-lead`): **Blocks Lead Article Card** (`blocks-lead-article-card`), with **Zone 1 Slideshow** for galleries.
- Gallery badge: **Gallery Icon Badge** (`gallery-icon-badge`).
- Kicker, author and timestamp: **Article Section Kicker**, **Article Author**, **Article Timestamp**.
- Tab bar: **Tab Nav** / **Tab Nav Item**. Feed header: **Section Title / Eyebrow**. Load More: **Show More Affordance**.
- Toggletip: **Tooltip** (MNG Web Design System, `components/core/tooltip/`). CTA panel: **InLineMessage DashSubsNonSub** (`components/core/inline-message-dashsubsnonsub/`). Welcome modal: **ModalsCenter** (`components/core/modals-center/`).

The card and row hover (`border-color` and a 1px `box-shadow` ring in #007580, headline #007580) and their focus outline (2px solid #000000, offset 1px) already match Blocks Card and Blocks Article Row: keep them.

## 1. Tab Nav bar (Editor's Picks / For You)

Rebuild the tab bar to match the production World Cup tabs (staging.dailylocal.com/world-cup/), with token values. Keep the tab labels, the order and the existing tab-switching behavior (`st.tab`).

Markup (production pattern):
- `<ul class="tabs-list" role="tablist">` > `<li role="presentation">` > `<button class="tab" role="tab" aria-selected="true|false" aria-controls="[panel id]">`
- Give each panel a matching id and `role="tabpanel"`. Update `aria-selected` when the tab changes.

Bar (`.tabs`):
- Full width, background #FFFFFF (color/gray/max), 1px solid #838280 bottom border (color/gray/300).

Nav (`.tabs-in`):
- max-width 1200px, centered, padding 0 24px (spacing/300).
- At ≤639px (the existing `@container page (max-width:639px)` query): padding 0.
- Tabs are left-aligned, not spread out: remove `justify-content:space-between`.
- Tab list: display flex, gap 24px (spacing/300), `overflow-x:auto` with the scrollbar hidden (`scrollbar-width:none` and `::-webkit-scrollbar{display:none}`), so extra tabs scroll sideways.

Tab (`.tab`):
- `font: 600 12px/normal 'Noto Sans', sans-serif`; letter-spacing 0; text-transform uppercase.
- padding 12px 16px (spacing/150, spacing/200) at every width (remove the 12px 14px mobile override).
- background none, border 0, plus a 2px solid transparent bottom border and margin-bottom -1px, so the active underline sits over the bar's 1px border.
- Default color #5E5D5C (color/gray/200).
- Hover color #141414 (color/gray/min).
- Active (`.tab.on` / `aria-selected="true"`): color #000000 (color/gray/black), border-bottom-color #007580 (color/theme/primary). Remove the old `::after` 3px teal bar and the teal active text.
- Focus-visible: outline 2px solid #000000, outline-offset -3px.
- Check that the tabs line up and the active underline covers the bar border.

## 2. Article kicker letter spacing

- `.kick`: letter-spacing 0 (was 1px), to match production's top nav items and Subscriber Only badge. Leave its other values as they are.

## 3. Feed header info toggletip (replaces the hover tooltip)

The info icon after "Based on what you read." becomes a click/tap **toggletip**, matching the MNG Web Design System Tooltip component (Type=Toggletip, Placement=Bottom). Apply this to both copies of the feed header (`.fyh`).

Behavior:
- Remove the hover/focus-within reveal (`.tipw:hover .tip, .tipw:focus-within .tip`). The box opens when the info button is clicked or tapped, and closes on a second click, the close button, Esc, or a click outside it. When it closes from the close button or Esc, move focus back to the info button.
- Info button (`.tipb`): add `aria-expanded="false|true"` and `aria-controls` pointing at the box. Change its aria-label to "About this feed". Keep its icon, size, the 12px invisible hit-area extension and the focus-visible outline.
- Box (`.tip`): give it an id and `role="status"` (so the text is read when it opens); remove `aria-hidden`; use the `hidden` attribute when closed.

Box styles:
- Position: below the info button, centered on it, 8px gap (spacing/100), with a caret pointing up at the button.
- width 275px (max-width calc(100vw - 32px) so it never overflows on phones); background #FFFFFF (color/gray/max); 1px solid #838280 border (color/gray/300); border-radius 4px (radius/sm); box-shadow 0 8px 16px 0 rgba(0,0,0,.2) (shadow/lg).
- Layout: a row with the text area and the close button, top-aligned. Text area padding 12px (spacing/150).
- Text: `font: 400 13px/normal 'Noto Sans', sans-serif`, color #393938 (color/gray/100), not italic. Keep the placeholder copy: "Placeholder text with more information about this feature."
- Close button: 40×40px, transparent, a 12px "close" icon in #000000, `aria-label="Close"`. Focus-visible: 2px solid #000000 outline.
- Caret: 12px wide × 6px tall, pointing up, centered, with the same #838280 1px edge and #FFFFFF fill, overlapping the box's top border so it looks like one shape.

## 4. Feed header subhead

The line under "While You Were Away" ("Based on what you read." + the info button), in both copies of `.fyh`:

- `.fyh p`: `font: 400 13px/normal 'Noto Sans', sans-serif`; color #5E5D5C (color/gray/200); top margin 8px (spacing/100; was 6px, the Section Title gaps are now 8px); gap between the text and the info button 4px (spacing/050; was 6px).
- Info icon (`.tipb .ic`): 12px, color #5E5D5C (was 13px). Keep the button's invisible 12px hit-area extension and focus outline.
- Leave the eyebrow (`.eb`) as it is.

## 5. Load More (replaces the "Load More Articles" link)

Use the production Load More (the same rule as production's `.load-more` / `.show-more-videos`, Figma: WordPress Elements ▸ Show More Affordance). Apply to both copies of the `.lm` block. Keep the click behavior (`loadMore`, `canMore`).

- Change the label to "Load More" (shown uppercase by CSS). Make the button a full-width block; remove `.btn-link` from it.
- Copy production's CSS exactly, including its colors (this one deliberately uses production values, not tokens):

```css
.load-more { position: relative; display: inline-block; width: 100%; padding: 40px 0; border: 0; border-top: 1px solid #D7D6D2; background: none; font: 700 16px/1 'Noto Sans', sans-serif; color: #007580; text-align: center; text-transform: uppercase; cursor: pointer; }
.load-more::before { content: ""; position: absolute; left: 50%; top: -5px; width: 35px; height: 35px; background-color: #FBFBFB; border-bottom: 1px solid #D7D6D2; border-left: 1px solid #D7D6D2; transform: rotate(-45deg) translateY(-50%); }
.load-more:hover { color: #0A0908; }
.load-more:focus-visible { outline: 2px solid #000000; outline-offset: 5px; }
```

- The rule and notch-edge gray differs per theme in production (#D7D6D2 Bold Coastal, #C8C4C0 Measured Vibrant, #DDD8D5 Modern Earthy). The prototype is Bold Coastal, so keep #D7D6D2.
- Remove the old `.lm` padding (16px 0 8px) so the 40px above and below comes from the button. It's the same at every width; don't add breakpoints.

## 6. Article rows on phones, and the gallery badge

- Article rows (`.row`) at ≤639px: the image is 90×54 (5:3), pinned to the top-left of the row, with white space below it; it no longer stretches to the row's height. Change `.row{grid-template-columns:120px …}` to 90px and give `.row .img` `height:54px; min-height:0; align-self:start` in the ≤639px query. At 640px and up nothing changes (220px wide, filling the row height, minimum 132px).
- Gallery articles get a badge on their image (cards and rows only; the featured story gets the slideshow in section 10 instead): production's badge format (Gallery Icon Badge): a `#141414` circle (color/gray/min) with a 1px `#FFFFFF` border (color/gray/max), `opacity:.85`, `border-radius:50%`, and the white `slideshow` icon centered. On cards and on rows at 640px and up it's 33×33 with a 16px icon, 5px in from the image's right and bottom edges; on rows below 640px (the 90×54 image) it's 20×20 with an 8.4px icon, 3.75px from the right and 5px from the bottom. It doesn't change when the card is hovered. Only show it when the article is a photo gallery; the sample data can mark one card and one row as galleries.

## 7. Non-subscriber CTA panel (reuse the Reader Dashboard "subscribe" panel)

Replace the `.cta` block with the MNG Web Design System InLineMessage panel used by Reader Dashboard for locked features (Figma: In-Line Content Containers ▸ InLineMessage, Priority=Medium, Location=DashSubsNonSub, PanelType=Alert).

Content:
- Title: "Your personalized feed is waiting"
- Description: "Subscribe to unlock a feed tailored to what you actually read — local news, sports, tech, and more."
- One button: "Subscribe Now" (the existing primary button, `.btn .btn-p`).
- Remove the padlock circle (`.cta-ic`), the "Sign in" button and the price line ("Starting at $1.99/week…").

Styles:
- Panel: background #F1EFEB (color/gray/600), border-radius 5px (radius/utility), no border, no shadow. Full width of the feed column.
- Padding 24px (spacing/300) and 16px between rows (spacing/200); at ≤639px, padding 16px (spacing/200) and 8px between rows (spacing/100).
- Header row: the `notification2` icon (16px, icomoon U+E94E) then the title, 8px apart (spacing/100), left-aligned. Icon and title color #856A00 (color/feedback/medium).
- Title: `font: 700 16px/normal 'Noto Sans', sans-serif`.
- Description: `font: 400 16px/normal 'Noto Sans', sans-serif`, color #141414 (color/gray/min), left-aligned.
- Button: centered under the description, at its natural width.
- Keep the panel's spacing from the content above and below as it is now.

## 8. Welcome to For You modal (one small fix)

The modal (`.mc`) already matches the MNG Web Design System ModalsCenter: 444px card (24px narrower than the viewport on phones), 8px radius, 1px gray/300 border, shadow 0 8px 16px rgba(0,0,0,.2) (shadow/lg), 40/40/24 padding (24 at ≤639px), 16px gaps, 20px Bold title and 16px subtitle, the bordered body box (gray/500, 4px radius, 24px padding, 16px at ≤639px), the centered primary button, the round close button (32px, gray/600 with a gray/400 edge; white with a gray/500 edge on hover), and the 50% black backdrop.

- Change the card border color from #83827F to #838280 (the exact color/gray/300 value).
- Keep the `info` icon in the header (ModalsCenter's sample uses `notification`; the icon is content and can change).
- Header: the icon sits in its own box before the title/subtitle stack, aligned to the title's first-line baseline (`align-items:baseline` or equivalent; no extra top padding), so it stays level with the title when the title wraps, and the subtitle lines up under the title, not under the icon.

## 9. Article timestamp (already done 2026-10-23)

- `.tm` is `font: 400 13px/normal 'Noto Sans', sans-serif` (was 12px/16px), matching production's card meta. No change needed; listed so the prompt is complete.

## 10. Featured story as a photo gallery: inline slideshow (replaces the image)

When the featured story (`.fy-lead`) is a photo gallery, production doesn't show a gallery badge. It swaps the image for an inline slideshow (production `article.slideshow.feature-large > .article-slideshow`, seen on develop.denverpost.com). Figma: WordPress Elements ▸ Homepage ▸ Zone 1 Slideshow, and Blocks Lead Article Card, Gallery=Slideshow.

- Sample data: mark the featured story as a gallery with 5 sample photos (reuse existing sample images), each with a caption. When it isn't a gallery, keep the current image.
- Layout:
  - The layout follows the featured story's width, not the screen: two columns when it's about 700px wide or more, one column when it's narrower. The For You feed has no side column, so that means two columns at 640px and up and one column below.
  - **Two columns:** the slideshow takes the image's place on the right (356px wide when the feed is at full width, otherwise filling the image column), and the text column stays as is; the space left between them goes in the gap.
  - **One column (≤639px):** headline, excerpt, byline, then the slideshow full width.
- Image area: 16:9 (`aspect-ratio:16/9`), no background; the photo is `object-fit:contain`, centered (letterboxed).
- Arrows:
  - **Look:** `<button type="button" aria-label="Previous">` and `aria-label="Next"`, absolutely positioned at the left and right edges of the image area and vertically centered. Background #000000 (color/gray/black) at `opacity:.75`; no border; the icomoon arrow-left (U+E906) and arrow-right (U+E907) icons in #FFFFFF (color/gray/max).
  - **Size:** 40×60px with a 30px icon at 800px and up; 35×53px with a 26px icon below 800px (`@container page (max-width:799px)`). The controls use production's 800px breakpoint, not the layout breakpoints.
  - **States:** hover changes nothing (cursor pointer). Focus-visible: `outline:2px solid #FFFFFF; outline-offset:3px`.
  - **Behavior:** the gallery loops (Previous on the first photo goes to the last). Also support swipe/drag on the image. No dots, no autoplay.
- Caption block, under the image:
  - **Spacing:** padding 12px top (spacing/150); bottom 16px at 800px and up (spacing/200), 12px below 800px (spacing/150); 8px between lines at 800px and up (spacing/100), 4px below 800px (spacing/050).
  - **Rule:** `border-bottom:3px solid #CCCAC7` (color/gray/500).
  - **Slide count**, e.g. "1 of 5", updated on every change: `font:700 13px/normal 'Noto Sans',sans-serif` (11px below 800px), color #000000 (color/gray/black). Give it `aria-live="polite"` so the new count is announced (required; production doesn't do this yet, design-vs-production entry 17.2).
  - **Caption:** `font:400 13px/normal 'Noto Sans',sans-serif` (11px below 800px), color #5E5D5C (color/gray/200).
  - **No photo credit line** (it's optional and off by default in the design system).
- 12px (spacing/150) below the slideshow, then the featured story's existing bottom spacing and rule.
- Check at 340, 360, 768, 1024 and 1280 that the arrows stay inside the page and nothing overflows.

## 11. Featured story headline focus

- The featured story's headline link (`.fy-lead h2 a`) has no focus style. Give it the same outline as the cards and rows: `.fy-lead h2 a:focus-visible{outline:2px solid #000000;outline-offset:1px}` (color/gray/black). Keep its hover as it is (headline #007580, from `a:hover`).
