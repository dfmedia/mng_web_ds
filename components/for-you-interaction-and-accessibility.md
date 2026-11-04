# For You tab: interaction and accessibility (developer notes)

> **Updated 2026-11-04** (Karl). This is how the For You tab is meant to behave for keyboard, screen reader, pointer and reduced-motion users. Engineering should build to it.
> - **Scope:** the For You panel, plus getting there from the homepage tab bar. The rest of Editor's Picks is out of scope.
> - **Reference build:** the Hi-fi v4 canvas (https://claude.ai/artifact/8C2rMAtGVyfqhtByzStWrr) on the MNG Web Design System in Claude (https://claude.ai/artifact/RKJ37zyXP7Wcvm1SDU7nzz).
> - **Component specs:** `components/wordpress/<slug>/<slug>.md`. Code notes are in `scripts/claude-design-system/src/components/<Component>/`.

**Target:** WCAG 2.2 AA. As built on 2026-11-04 the tab passes axe-core 4.10 (tags `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `wcag22aa`) with **0 violations** in these states:
- the subscriber feed at 1280 and 360
- the non-subscriber CTA
- the Welcome modal

It also passed the keyboard walk-through in §9.

---

## 1. Getting to For You: Homepage Tabs

Component: Homepage Tabs (`homepage-tabs`) with Homepage Tab (`homepage-tab`). It follows the WAI-ARIA Tabs pattern with **manual activation**.

**Markup:**
```html
<ul role="tablist" aria-label="Homepage feeds">
  <li role="presentation">
    <button type="button" role="tab" id="fy-tab-ep" aria-controls="fy-panel-ep" aria-selected="true" tabindex="0">Editor’s Picks</button>
  </li>
  <li role="presentation">
    <button type="button" role="tab" id="fy-tab-fy" aria-controls="fy-panel-fy" aria-selected="false" tabindex="-1">For You</button>
  </li>
</ul>
<div role="tabpanel" id="fy-panel-ep" aria-labelledby="fy-tab-ep">…</div>
<div role="tabpanel" id="fy-panel-fy" aria-labelledby="fy-tab-fy" hidden>…</div>
```

**Keyboard:**

| Key | Does |
|---|---|
| Tab / Shift+Tab | Goes to the **selected** tab only (roving `tabindex`: selected tab `0`, the other `-1`), then into the panel |
| Right arrow / Left arrow | Moves focus to the next / previous tab and wraps. **Doesn't select it.** |
| Home / End | Moves focus to the first / last tab |
| Enter / Space | Selects the focused tab: sets `aria-selected`, shows its panel and hides the other with `hidden` |

**Behavior:**
- **Why manual activation:** choosing For You can open the Welcome modal (§2). That shouldn't happen just because someone arrows past the tab.
- **Focus:** after selecting a tab, focus stays on it. The next Tab goes into the panel.
- **After a re-render:** `tabindex` follows the selection again, so Tab always lands on the selected tab.
- **Focus ring:** 2px `color/gray/black` outline set 3px inside the tab. Colors and sizes are in the spec.

## 2. Welcome to For You modal (first visit)

Component: ModalsCenter (`modals-center`), with Button Primary "Got it" and Button Modal Close.

**Markup:**
- `role="dialog"`, `aria-modal="true"`
- `aria-labelledby` points at the title "Welcome to For You"
- `aria-describedby` points at the subtitle

**Opening:**
- Shows the first time a reader selects For You.
- Focus moves into the dialog (the dialog itself, then "Got it").

**While open:**
- Tab and Shift+Tab cycle between **Got it** and **Close** only (focus is trapped).
- The page behind is inert.

**Closing:**
- Got it, Close and **Esc** all close the modal.
- Focus returns to the **For You** tab.

## 3. Feed header

Component: Section Title / Eyebrow (`section-title-eyebrow`) with the subhead and info button, plus Tooltip (`tooltip`), Type = Toggletip, Placement = Bottom.

**Title and subhead:**
- "While You Were Away" is an `h2`.
- The title fills the feed column, so its 2px `color/theme/primary` underline spans it.
- The subhead "Based on what you read." is plain text.

**Info button:**
- A real `button` with `aria-label="About this feed"`, `aria-expanded` and `aria-controls="fy-tip"`.
- The icon is 12px; an invisible `::before` extends the hit area to 36×36.

**Toggletip:**

| Input | Result |
|---|---|
| Enter / Space / click on the info button | Opens it, or closes it if open |
| Esc (focus on the button or inside the box) | Closes it, and focus returns to the button |
| The box's close button | Closes it, and focus returns to the button |
| A click outside | Closes it |

- The box's text is announced through `role="status"` / `aria-describedby`.

## 4. Feed order and headings

DOM order is visual order at every width:
1. Header: info button
2. Lead story
3. Slideshow Previous / Next (gallery leads only)
4. Cards
5. Rows (cards below 768px, §8)
6. Load More

Heading levels:
- `h2`: the feed title and the lead headline
- `h3`: card and row headlines
- Each component has a `headingLevel` prop for other pages.

## 5. Lead story (Blocks Lead Article Card)

- **Link:** only the headline is a link. The image, kicker and byline aren't separate tab stops.
- **Focus:** 2px `color/gray/black` outline, offset 1px, on the headline link. No hover shadow.
- **Image:** has alt text (§7).
- **Gallery lead (Zone 1 Slideshow):**
  - Previous and Next are `button`s with `aria-label="Previous"` / `"Next"`.
  - The slide count ("1 of 5") is an `aria-live="polite"` region, so changing slides is announced.
  - Each slide image has its own alt text. The caption is visible text under the image, separate from the alt.

## 6. Cards and rows (Blocks Card, Blocks Article Row)

**Structure:**
- The whole card or row is **one link** (`a href`).
- Inside it are the image (with alt), the kicker, the headline (`h3`), the author and the time (`<time datetime>`).
- There are no nested interactive elements, so the gallery badge is part of the link.

**Gallery Icon Badge:**
- Decorative (`aria-hidden`) unless a `label` is passed.
- Pass one ("Photo gallery") when the gallery isn't obvious from the headline.

**States:**

| State | Look | Notes |
|---|---|---|
| Default | 1px `color/gray/500` border, 8px radius (`radius/lg`), no shadow | |
| **Hover** | Border **and** a 1px outside ring in `color/theme/primary`, plus **`shadow/md`** under it; headline in `color/theme/primary` | CSS: `box-shadow: 0 0 0 1px <primary>, var(--mng-shadow-md)` (`shadow/md` = `0 4px 8px 0 rgba(0,0,0,.2)`) |
| **Focus** (keyboard) | 2px `color/gray/black` outline 1px outside the card (`outline: 2px solid; outline-offset: 1px`), with a `color/gray/max` gap | Uses `:focus-visible`. Never replaced by the hover style. |

**Hover animation:**
- The border color and the box shadow (ring plus `shadow/md`) ease over **150ms** in and out: `transition: border-color 150ms ease, box-shadow 150ms ease`. On Blocks Card the border is the `::after` overlay, so it gets the same `border-color` transition.
- The headline color changes at once (not animated).
- With `prefers-reduced-motion: reduce` there's no transition.
- The 150ms comes from the For You prototype. The system has no motion tokens yet; when it gets them, this becomes a token.

**Hover isn't the only cue:**
- The cards are links with real headings.
- Hover only reinforces what's clickable.
- The focus ring is separate from hover and always shows for keyboard users.

**Contrast:**
- `color/theme/primary` on white is 4.75:1 or more on every site.
- The headline is large text, so 3:1 would be enough.

**In Figma:**
- The Hover variant carries the `shadow/md` effect style.
- A layer can take only one effect style, so the full look (ring plus `shadow/md`) is a detached **Hover Sample** in each component's Specifications.

## 7. Image alt text

- **Every For You image has alt text.** That covers the lead, the cards, the rows and every slideshow slide.
  - Production does the same: 16 of 17 OC Register homepage images have caption-style alt text (checked 2026-11-04).
  - The canvas's alt text is written to describe each photo.
  - In production, use the CMS image's alt / caption field. Don't use the headline.
- **Writing it:**
  - Describe what the photo shows in one sentence, about 125 characters or fewer.
  - Don't start with "Image of" or "Photo of".
  - Don't repeat the headline.
  - For maps, charts and forecast graphics, say what the graphic shows ("Map of Southern California cities with dots showing how much renters save…"). Don't transcribe it.
- **When to use empty alt:** only for an image that is truly decorative, and only when the link already has its headline text.
- **Slideshow captions:** the canvas uses placeholder captions ("Placeholder caption for photo 1 of this gallery."). In production they're the real captions.

## 8. Feed views and small screens

- **The views** are Zones (default), Rows and Cards. That's a prototype control; the shipping feed is Zones.
- **Below 768px:** rows become cards in every view. The semantics don't change: each is still one link with an `h3`, and DOM order equals visual order. At 768px and up, rows stay rows.
- **Reflow:** the feed works down to 320px wide with no sideways scrolling (WCAG 1.4.10). Checked at 340, 360, 700, 768, 1024 and 1280.

## 9. Load More

Component: Show More Affordance (`show-more-affordance`): a `button` labelled "Load More", whose notch icon is `aria-hidden`.

**When activated:**
1. 7 more stories are added after the current ones (up to 14), in DOM order.
2. **Focus moves to the first new story's link.** The button is removed at 14, and without this focus would fall back to the top of the page (WCAG 2.4.3 Focus Order).
3. A visually hidden `role="status"` / `aria-live="polite"` region in the feed announces "**7 more stories loaded.**" (WCAG 4.1.3 Status Messages).

**Sample code:**
```html
<div class="sr-only" role="status" aria-live="polite">7 more stories loaded.</div>
```
```css
.sr-only{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0}
```

## 10. Non-subscriber view

Component: InLineMessage DashSubsNonSub: a heading (`h2`), a description and a "Subscribe Now" link styled as a button. It has no keyboard traps. The feed isn't rendered at all, so it isn't just hidden visually.

## 11. Keyboard walk-through (as built, 2026-11-04, at 1280)

1. **Tab bar:** the For You tab, then Enter to select it.
2. **Modal:** focus is on the dialog; Got it and Close cycle; Esc closes and focus returns to the For You tab.
3. **Info button:** "About this feed"; Enter opens the toggletip; Esc closes it and focus returns.
4. **Lead headline link.**
5. **Slideshow:** Previous, then Next.
6. **Four cards.**
7. **Two rows.**
8. **Load More:** focus goes to story 8, and the announcement plays.

Every stop has a visible 2px focus ring.

## 12. Known gaps

- **Placeholder captions:** the slideshow captions on the canvas are placeholders. Real captions come from the CMS.
- **Motion tokens:** the system has none; 150ms is a raw value.
- **Editor's Picks:** out of scope here. One known item, for later: a Most Popular link has no accessible name.
