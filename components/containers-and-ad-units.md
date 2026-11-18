# Containers, Images & Ad Units

> **Updated 2026-11-18** for the Mobile Adhesion z-index (§3.1d): Aditude dropped the ad's z-index to 100000 on 2026-11-17 so it no longer covers the mobile login modal; confirmed on all 6 review sites. The Ad Team's map is linked in §3.1c. **Earlier, 2026-09-01** (last change before that). Current project status is in `MNG-Web-Design-System-Status.md`.

**Status:** Grid/image treatment audited (live sites, homepage, desktop width only) — not yet built in Figma. Ad units fully re-audited 2026-08-31 across all 6 pilot sites, homepage + article, desktop + mobile (see §3), and cross-checked 2026-09-01 against the Ad Team's own "WordPress Ad Map" documentation (§3.1c) — strong agreement, plus new coverage of APP/AMP/vendor-widget surfaces we hadn't audited live.
**Pilot sites:** Chicago Tribune (CT), Denver Post (DP), Orange County Register (OCR), Orlando Sentinel (OS) — audited. Greeley Tribune and mcall.com (both on the Modern Earthy shared theme) joined the pilot set 2026-08-27; ad units on both are now confirmed (2026-08-31, see §3) and match the CT/OCR/DP taxonomy. The grid/container and image-treatment findings in §1–§2 are still CT/DP/OCR/OS only — Greeley/mcall haven't been checked for those yet.
**Platform:** same shared CMS as Navigation/Cards (WordPress, "mason"/"scng" themes)

---

## 1. Page grid / container system

**Core content container:** `main` — **1260px** wide at a 1280px viewport (10px left/right gutter to the browser edge), confirmed on Chicago Tribune. Denver Post measured **1245px** at the same 1280px viewport — a small, real difference (15px) rather than an exact match; not yet root-caused (could be a scrollbar-width artifact of that particular page load rather than a genuine CSS difference — flagged, not resolved). **2026-08-27 correction:** an earlier note here speculated that this difference might be explained by Denver Post running a fully bespoke theme rather than sharing Chicago Tribune's. That speculation doesn't hold up — a live check confirms Denver Post actually loads `boldcoastal.css` (Chicago Tribune loads `measuredvibrant.css`; they're different shared themes from each other, not "bespoke vs. shared"), with its own color override via the Customizer on top, the same pattern as every other one-off site. So this width difference remains genuinely unexplained — not attributable to Denver Post being architecturally special.

**Two-column desktop layout:** primary content column (**940px**) + right rail (**300px**), with a **~20px gutter** between them (940 + 20 + 300 = 1260). The right rail is where standalone rail ads live (see §3).

### 1.1 "Landing row" grid variants

Reused, named grid patterns for arranging groups of teaser cards (see `card-teaser.md` §3 for the Section Highlight widget that lives inside these):

| Class | Layout | Confirmed on |
|---|---|---|
| `.landing-row.landing-three-one` | flex, wrap: one **940px** left zone (`.three-one-left`) + one **300px** right zone (`.three-one-right`) | CT, DP |
| `.landing-row.landing-four-up` | flex, wrap, `justify-content: space-between`: **4 × 300px** columns spanning the full 1260px width | CT, DP |
| `.landing-four-up-hybrid` | — | **Not observed on any of the 4 pilot homepages.** The class name exists in the shared CSS (referenced in card-teaser.md's container-specific breakpoint rules) but no live instance was found on CT, DP, OCR, or OS homepages during this pass — it may only appear on section fronts, or only under certain content conditions. Not resolved. |

All of these are plain flexbox (`display: flex; flex-wrap: wrap`), not CSS Grid — worth knowing before modeling this in Figma, since flex-wrap's gap behavior (space-between, not a fixed `gap` value) is what's actually producing the even spacing, not a grid-gap token.

---

## 2. Image treatment

**`object-fit: fill` on both hero and feature-medium images** (confirmed on Chicago Tribune and Denver Post) — no `aspect-ratio` CSS property is set on either the `<img>` or its wrapper (`aspectCSS: auto` in both cases). This means the site is **not** using the more common "crop to fill, preserve proportions" pattern (`object-fit: cover`) — it's stretching the image to exactly fill the container's box. On the samples checked, natural image aspect ratio happened to be close to 3:2, so visible distortion was minimal, but this is a real risk area: an editor uploading an image with a different aspect ratio would visibly stretch/squash it. Worth flagging to engineering as a possible bug rather than assuming it's intentional, and worth deciding whether the Figma component should model `fill` faithfully or standardize on `cover`.

**Responsive image delivery:** images are served through a CDN with a `?w=<width>` query-string parameter (e.g. `...jpg?w=718`, `...jpg?w=1545`) — confirmed via `img.currentSrc` on the hero image at different viewport widths. This is a real, working responsive-images mechanism; not yet mapped to specific width breakpoints/steps (i.e., which `w=` values the srcset actually offers) — that would need a deeper look at the `srcset` attribute itself, not yet done.

---

## 3. Ad units

### 3.1 System

Ads are served via **Google Publisher Tag (GPT/DFP)**. Each ad slot is a `<div id="div-gpt-ad-<slot-name>">` (or, on Chicago Tribune/Denver Post/OC Register/Greeley Tribune/mcall.com, a numbered `#htlad-N-gpt` id) wrapped in a `.dfp-ad` div, itself wrapped in an `.htl-ad` / `#htlad-N` container, and (for content-area placements) a semantic outer wrapper like `.sponsorship-ad-wrapper` or `aside.sidebar-ad-container`.

**2026-08-31 re-audit — queried `googletag.pubads().getSlots()` directly (GPT's own API) rather than scraping rendered pixel sizes,** across all 6 pilot sites, both homepage and one article page, at both desktop (1280px) and mobile (360px, Galaxy S8 emulation) — a full 4-pass matrix per Karl's request. This is more reliable than the original DOM-measurement pass: it returns every slot's *declared* creative sizes directly from GPT, not just whatever happened to be rendered at the moment of the snapshot (which is why the original `sponsorship_1` "~401×250" estimate below doesn't match — that was almost certainly the outer wrapper measured while a differently-sized creative happened to be loaded; the slot's actual declared sizes are much smaller, see table).

**Confirmed 11-slot homepage taxonomy — identical across Chicago Tribune, OC Register, Denver Post, Greeley Tribune, and mcall.com** (Orlando Sentinel has the same functional 11 slots but a structurally different implementation — see §3.1b):

| Slot name | Role | Declared sizes (desktop, 1280px) | Declared sizes (mobile, 360px) |
|---|---|---|---|
| `sponsorship_1` | Small ad beside the masthead/logo, inside `.nav-primary-middle` | `300x50`, `320x50` | same |
| `sponsorship_2`, `sponsorship_3` | Additional in-content sponsorship slots | `728x90`, `970x90`, `970x250`, **+ `fluid`** (CT/OCR/Greeley/mcall; Denver Post lacks `fluid` on these two — a real, small cross-site difference) | `320x50`, `300x50`, `fluid` (where present) |
| `sponsorship_4` | Additional in-content sponsorship slot | `728x90`, `970x90`, `970x250` (no `fluid` option on any site) | `320x50`, `300x50` |
| `top_leaderboard` | Full-width banner directly below the primary nav row, above the hero | `728x90`, `970x90`, `970x250` | `300x50`, `320x50`, `320x100` |
| `bottom_leaderboard` | Full-width banner, page bottom | `728x90`, `970x90`, `970x250` | `300x50`, `320x50`, `320x100` |
| `cube1_rrail_atf` | Right-rail ad, "Above The Fold" | `300x250`, `300x600`, `300x1050`, `160x600` | `300x250` |
| `cube2_rrail_mid`, `cube3_rrail_lower` | Right-rail ads, "Mid" / "Lower" | `300x600`, `300x250` | `300x600`, `300x250` |
| `interstitial` | **Resolved — this is a GPT "1×1" out-of-page-style unit**, confirmed identical (`1x1`) on all 6 sites. This is *why* it never appeared to "render" as a visible box in earlier passes — it's designed to report a 1×1 placeholder size regardless of what the actual creative does (typically an overlay/takeover triggered by the ad's own JS, separate from normal in-page layout). Still haven't directly observed a live interstitial overlay actually trigger — that would need a dedicated session watching for it, not just checking slot definitions. | `1x1` | `1x1` |
| `mobile_adhesion` | **Mobile-only sticky ad**, fixed near the bottom of the viewport with a close (✕) control. **Confirmed, 2026-08-31:** at desktop width the slot's size-mapping resolves to an empty size list (`[]`) — genuinely no valid creative size at desktop, not just visually hidden. At mobile width it resolves to `300x50`/`320x50` and renders at `320×50` inside a `360px`-wide container. | `[]` (no valid size — confirms desktop-absence is real, not a CSS hide) | `300x50`, `320x50` → renders `320×50` |

**Also found, not previously documented:** OC Register, Denver Post, and mcall.com each carry one additional ad slot outside the 11-slot taxonomy — a `300x250` unit on a completely separate ad-manager network path (`/22181265,12230023/<site>_widget`, random-UUID element id). Chicago Tribune and Greeley Tribune do **not** have this extra widget slot. Not yet clear what drives this ("widget" ad network vs. the site's primary GPT network) — worth asking engineering rather than assuming it's a template difference.

### 3.1a Article-page ad taxonomy differs from the homepage — likely by content type, not by site

Same method, run on one article per site. Standard long-form news articles (Chicago Tribune, OC Register, Orlando Sentinel, mcall.com) get a **10–11 slot set that swaps `sponsorship_3`/`sponsorship_4` out for two article-specific units**: `outstream_video` (declared `480x360` desktop / `300x250` mobile — an inline video ad) and `cube_article` (declared `300x250` desktop; Orlando Sentinel's version of this slot is notably larger, also accepting `300x50`/`320x50`/`468x60`/`728x90`/`300x100`/`320x100`). Denver Post's article (a photo-gallery page) and Greeley Tribune's article (an opinion piece) both came back with a **reduced ~9-slot set** — no `outstream_video`, no `cube_article`, and no `sponsorship_3`/`sponsorship_4` either. **This looks content-type-dependent (standard article vs. gallery vs. opinion template) rather than a real per-site difference, but only one article was sampled per site — worth confirming with a same-template article on Denver Post/Greeley before treating this as settled.**

### 3.1b Orlando Sentinel: confirmed structurally different ad implementation

Unlike the other 5 pilot sites (which use a numbered `#htlad-N-gpt` element-id convention and a per-slot GPT ad-unit path like `/4011/chicagotribune.com/home/top_leaderboard`), Orlando Sentinel runs a **Freestar header-bidding wrapper**:
- Element ids are bare `div-gpt-ad-<slotname>` (matching the generic GPT convention directly, no `htlad-N` numbering), and the widget-network slot gets a random-UUID id like the other sites' widget slots.
- **Every named slot shares one flat GPT ad-unit path** (e.g. `/4011/orlandosentinel.com/home` or `/4011/orlandosentinel.com/news/science`) — slot identity is carried entirely through the `pos` GPT targeting key (`pos: "top_leaderboard"`, `pos: "Sponsorship_2"`, etc.), not through a per-slot path segment the way the other 5 sites do it.
- Extensive Freestar/header-bidding targeting keys are present (`fs_bidder`, `fs_auction_id`, `fsrefresh`, `amznbid`, etc.) that don't appear on the other 5 sites' slots.
- `cube1_rrail_atf` and `cube3_rrail_lower` additionally accept a `120x600` creative size the other 5 sites don't list.
- **Confirmed real, not a viewport artifact:** `mobile_adhesion` is genuinely absent from `getSlots()` on desktop (matching the other 5) but *is* present on mobile — Freestar defines it conditionally per viewport, whereas the other 5 sites' `htlad` system always defines it with an empty size-mapping at desktop instead of omitting it. Same end result, different mechanism.
- **New finding, mobile homepage only:** on Orlando Sentinel's mobile homepage, only `mobile_adhesion` registers with GPT at initial page load — the other 10 `.dfp-ad` containers exist in the DOM (confirmed) but don't show up in `getSlots()` until scrolled near, and even after scrolling most of the page and waiting, only `mobile_adhesion` had registered by the time this pass ended. This reads as Freestar registering slots lazily/progressively (likely scroll- or viewport-proximity-triggered) rather than upfront the way the other 5 sites' slots all register immediately — genuinely different behavior worth flagging to engineering, not a scan failure (the mobile *article* page pass, by contrast, did return the full slot set for Orlando Sentinel — so this may be specific to the homepage's lazier ad loading, or to how much scrolling/dwell time a real visit gets before slots resolve).

### 3.1c Cross-checked against the Ad Team's own documentation — "MNG/Tribune – WordPress Ad Map" (updated 2025-12-26)

The sheet: [MNG/Tribune – WordPress Ad Map](https://docs.google.com/spreadsheets/d/12p8rvDIj4a58vzR1vxjferjJ58rCS-ekcpW7deLEOZw/edit?gid=103080138#gid=103080138) (Google Sheet, view only; tabs Desktop, Tablet, Mobile, APP, AMP, Vendor Ad Slots, Newsletter overview, Obits Newsletters). Recheck it whenever the ad components change.

Karl located the Ad team's internal ad-slot reference sheet (Google Sheet, view-only) and it strongly corroborates the GPT-scan findings above — but it's for a different MNG property (**The Press Democrat**, on the same shared WordPress ad system as our 6 pilot sites) and, critically, covers several surfaces our live-site scans never touched (APP, AMP, and third-party vendor widgets). Cross-checked 2026-09-01:

- **Confirms every desktop/mobile slot name and size we measured**, independently: `sponsorship_1` (`300x50`/`320x50`), `top_leaderboard`/`bottom_leaderboard` (`728x90,970x90,970x250` desktop → `300x50,320x50,320x100` mobile), `cube1_rrail_atf` (`300x250,300x600,300x1050,160x600` desktop → `300x250` mobile), `cube2_rrail_mid`/`cube3_rrail_lower` (`300x250,300x600`), `sponsorship_2/3/4` (`728x90,970x90,970x250` desktop → `320x50,300x50` mobile), and `interstitial` (`1x1`, annotated "Not Pictured" — consistent with our finding that it never renders as a visible box). The sheet doesn't mention `fluid` as an option anywhere, which may mean that's a more recent addition on top of this map (updated Dec 2025) rather than a documentation gap on our side.
- **Confirms the `#htlad-N-gpt` element-id convention with real captured GPT debug overlays** (visible in the sheet's own annotated screenshots — e.g. `#htlad-3-gpt ... pos: top_leaderboard`, `#htlad-6-gpt ... pos: cube2_rrail_mid`), independently validating our live DOM findings.
- **New slot found, not in our taxonomy: `Article Video Player (SendtoNews)`, `680x480v`** — a video-specific unit on article pages, distinct from `outstream_video`. Not seen in our live scans; worth checking for on a future article-page pass.
- **`outstream_video` is explicitly labeled "PROGRAMMATIC ONLY"** on the Ad Team's map — meaning it's not directly sold/booked by the sales team, only filled via programmatic demand. Useful context our GPT scan couldn't have surfaced on its own.
- **Resolves open item #9 (the unexplained `*_widget` slots on OC Register/Denver Post/mcall.com):** the Ad Team's sheet has a dedicated "Vendor Ad Slots (Can not be targeted)" tab documenting third-party widget-driven placements — e.g. a "CitySpark Widget" (an events-listing module) with an adjacent "CitySpark Ad slot (Can not be targeted)" — that sit outside the main GPT taxonomy and are explicitly called out as not directly targetable/bookable inventory. This is a strong candidate explanation for the `*_widget` slots we found: they may be CitySpark (or a similar syndicated-widget vendor) rather than a core taxonomy gap, though we haven't yet confirmed CitySpark specifically is what's running on OCR/DP/mcall — worth a quick live check to match the exact vendor.
- **APP and AMP are entirely separate, simpler ad surfaces we've never audited live:**
  - **APP** (native mobile app): documented as "ROS" (Run of Site) with just two slot types — a `320x480` unit and a `320x50` banner — and a note to "Use GAM Taxonomy Mobile-APP" for booking. Far simpler than the web taxonomy; we have no live coverage of the app at all.
  - **AMP**: in-article units named `Amp_01`, `Amp_02`, etc. (GAM POS values), `300x250` each, with explicit business rules documented that a live DOM scan would never reveal: capped at **10 in-article ads per AMP article**, placed **every three paragraphs**, available for **both programmatic and direct-sold** demand.
- The sheet also has **Newsletter overview** and **Obits Newsletters** tabs (ad placements inside MNG's email newsletters) — not reviewed in depth this pass; flagged as a separate surface if newsletter ad units ever need documenting here.

**Open item #12 is resolved** — the Ad Team documentation Karl found is genuinely useful and has been cross-checked in full above.

### 3.1d Mobile Adhesion stacking (z-index), 2026-11-18

The Ad Team added a note to the Mobile tab of the [MNG/Tribune – WordPress Ad Map](https://docs.google.com/spreadsheets/d/12p8rvDIj4a58vzR1vxjferjJ58rCS-ekcpW7deLEOZw/edit?gid=103080138#gid=103080138) next to `Mobile_Adhesion`: on 2026-11-17 Aditude lowered the adhesion's z-index because it covered the mobile login modal. The cause was Seedtag's inScreen placement on the adhesion unit, which wrote its own maximum z-index inline; Aditude's custom CSS overrides it to **100000** ("still pretty high, just not covering your modal"). Aditude also notes that ad refresh only runs while the unit is at least 50% in view and not `display: none`.

Checked live 2026-11-18 on all 6 review sites (ocregister, denverpost, chicagotribune, orlandosentinel, canoncitydailyrecord, mcall), loaded stylesheets at desktop width; identical on every site:

| Layer | Selector | z-index |
|---|---|---|
| Theme wrapper | `#mobile-adhesion` | 9999 |
| Close button | `#mobile-adhesion .close-mobile-adhesion` | 99999 |
| The ad (Aditude override of Seedtag inScreen) | `.st-placement.inScreen .st-adunit-ad` | 100000 `!important` |
| Account drawer | `#account-content` / `#anchorProfileDropDown` | 149999 / 150000 |
| Login modal (DigiSubs) | `#digisubs-modalContainer` | 2147483647 |

So the order is now adhesion < account drawer < login modal. Design rule (Ad Blocks spec, Behavior): anything that must cover the adhesion, such as modals, stacks above 100000. The design system has no z-index tokens yet.

### 3.2 No visible "Advertisement" text label found

Searched the DOM for any "Advertisement"/"Sponsored" text node near ad containers and found none, and no `aria-label` on the wrapper either. The small disclosure icon visible in ad creatives in screenshots (a "▷"-style icon in the ad's top corner) appears to be Google's own AdChoices icon rendered inside the ad iframe itself, not site-authored markup. **Flagging as a real finding, not filling in an assumption:** this theme does not appear to add its own ad-disclosure label at the container level. Worth confirming with engineering/legal whether that's intentional or a gap, since AdChoices icons alone are a different (and weaker) disclosure than an explicit "Advertisement" label many other publishers use.

### 3.3 Not yet tested

- ~~Ad slot behavior/reflow at mobile width~~ **Done, 2026-08-31** — see §3.1/§3.1a/§3.1b. All slots' mobile declared sizes captured; `mobile_adhesion` confirmed rendering at mobile width on every site.
- ~~OC Register and Orlando Sentinel's ad slot markup was not directly inspected this pass~~ **Done, 2026-08-31** — both confirmed (along with Greeley Tribune and mcall.com). OC Register matches the CT/DP taxonomy exactly; Orlando Sentinel is functionally equivalent but structurally different — see §3.1b.
- `interstitial` slot's actual trigger/behavior — **partially resolved**: now known to be a GPT `1x1` out-of-page-style unit (consistent across all 6 sites), which explains why it never renders as a visible box in a normal layout scan. Still haven't directly observed it actually trigger a visible overlay/takeover live — that needs a dedicated watch-and-wait session, not a slot-definition check.

---

## 4. Open items

1. **1260px vs. 1245px main-container width discrepancy** (CT vs. DP at the same 1280px viewport) — not root-caused, §1.
2. `.landing-four-up-hybrid` grid variant exists in CSS but wasn't found live on any of the 4 pilot homepages — §1.1.
3. **`object-fit: fill`** on card images — flag to engineering as a possible unintentional choice (risk of visual distortion on off-ratio uploads) rather than assume it's deliberate — §2.
4. Responsive image `srcset` width steps not mapped — §2.
5. ~~Ad slot sizes/behavior not fully captured for `sponsorship_2/3/4`, `bottom_leaderboard`, `interstitial`, and `mobile_adhesion`'s actual mobile dimensions~~ **Done, 2026-08-31** — full 4-pass audit (desktop/mobile × homepage/article, all 6 sites) via GPT's own `getSlots()` API. See §3.1/§3.1a/§3.1b.
6. No ad-disclosure text label found — worth a follow-up question to engineering/legal rather than treating as settled — §3.2.
7. ~~OC Register and Orlando Sentinel not directly inspected for this component~~ **Done, 2026-08-31.** OC Register matches CT/DP's taxonomy exactly. Orlando Sentinel is functionally equivalent (same 11 named roles) but structurally different — Freestar header-bidding wrapper, flat ad-unit path instead of per-slot paths, and slots that register with GPT lazily/progressively on its mobile homepage rather than all upfront — see §3.1b.
8. ~~Greeley Tribune and mcall.com not inspected for this component at all~~ **Done, 2026-08-31.** Both match the CT/OCR/DP 11-slot taxonomy exactly at both desktop and mobile — no divergence found for this component (unlike the container-width finding in item 1, which remains CT-vs-DP only).
9. ~~OC Register, Denver Post, and mcall.com each carry an extra `300x250` ad slot on a separate ad-manager network path (`*_widget`) that Chicago Tribune and Greeley Tribune don't have — not yet explained~~ **Substantially resolved, 2026-09-01** — the Ad Team's documentation (§3.1c) shows a "Vendor Ad Slots (Can not be targeted)" category for syndicated widgets like "CitySpark," which sit outside the main GPT taxonomy exactly like our `*_widget` slots do. Not yet 100% confirmed CitySpark specifically is what's on OCR/DP/mcall — worth one quick live check to match the vendor name, but the taxonomy question (why it's outside the standard 11 slots) is answered.
10. **New, 2026-08-31:** Article-page ad taxonomy (adds `outstream_video` + `cube_article`, drops `sponsorship_3`/`sponsorship_4`) looks content-type-dependent (standard article vs. gallery vs. opinion piece) rather than site-dependent, but this is based on only one article sample per site — worth confirming with matched content types across sites before treating as settled — §3.1a.
11. **New, 2026-08-31:** Orlando Sentinel's mobile homepage only registered 1 of 11 ad slots with GPT even after scrolling most of the page and waiting — likely lazy/scroll-triggered slot registration specific to its Freestar wrapper, not seen on the other 5 sites. Worth a longer dwell-time or full-scroll re-check, and worth asking engineering whether this is expected — §3.1b.
12. ~~Everything in §3 so far is reverse-engineered from live-site scans (GPT's own API + DOM structure) — we should cross-check against MediaNews Group's own Ad Team documentation once available~~ **Resolved, 2026-09-01** — Karl found and shared the Ad Team's "WordPress Ad Map" sheet; cross-checked in full, see §3.1c.
13. **New, 2026-09-01:** `Article Video Player (SendtoNews)`, `680x480v` — found in the Ad Team's documentation, not in our live scans. Worth checking for on a future article-page pass — §3.1c.
14. **New, 2026-09-01:** APP and AMP are separate, simpler ad surfaces (APP: `320x480` + `320x50` banner, "ROS"; AMP: `Amp_01`/`Amp_02`/etc., `300x250`, capped at 10 per article, every 3 paragraphs) that we have zero live audit coverage of — worth a dedicated pass if the design system needs to extend to app/AMP surfaces — §3.1c.

---

## 5. Methodology notes

- All page loads given a minimum 10-second wait before scraping, per standing project rule.
- Findings based on `getComputedStyle`, `getBoundingClientRect`, and DOM-structure walks — consistent with the Navigation and Card/Teaser audits.
- This pass covered homepage instances at desktop width only, plus one targeted mobile check for `mobile_adhesion`. A dedicated mobile pass for this component (ads + grid reflow) has not been done yet and is a natural next step if this component needs to be considered complete.
