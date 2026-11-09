# Navigation

> **Updated 2026-11-09** for the Weather Bug's second e-Edition link and market labels (§3.11), and the five-width check of the section menu drawer and Karl's changes (§3.8, §3.9). **Earlier, 2026-11-06,** for the six-site section menu audit and Karl's decisions (§3).
>
> **Updated 2026-09-25 — read this first.**
> - **Where the header lives now.** The production-accurate header is the **Masthead** component set (`456:2572`, 75 variants: Device × State × Page) on the "Menus and Parts" page of **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`, formerly "Website Page Templates"). Its breakpoint audit is `breakpoint-audit.md` (this folder), and its production gaps are design-vs-production entries 7, 9, 28.2 and 33. The account dropdown's source is **AccountMenu** (`910:16425`) in the same file. The pilot Header, Account Trigger, Off-Canvas Section Panel and Account Dropdown Menu components mentioned in §3.2 and §9 were retired on 2026-09-25; the measurements in those sections are still valid.
> - **Token names.** `color/base/ink` is now `color/theme/near-black` / `color/theme/nav-text` in the main file's Colors collection (see `tokens/colors/`).
> - **Themes.** There are 3 shared themes. "Morning Call" (mcall.com) is a site on Modern Earthy, not a theme. Greeley Tribune is a Prairie Mountain Publishing site (Modern Earthy + PMP color override), so it isn't a Modern Earthy color reference; Modern Earthy's nav text color is still unconfirmed live.

**Status:** Audited (live sites). Built in Figma as the Masthead component set in WordPress Elements (see note above).
**Pilot sites:** Chicago Tribune (CT), Denver Post (DP), Orange County Register (OCR), Orlando Sentinel (OS) — structurally audited. Greeley Tribune and mcall.com joined the pilot set 2026-08-27 (added to give Modern Earthy a live representative — mcall.com also runs Modern Earthy, not a separate theme, see §5.2) but have only been checked for platform-wide typography so far — nav structure, tokens, and breakpoints haven't been looked at on either yet. See §5.2 for one concrete, ready-to-check gap this closes.
**Platform:** shared CMS (WordPress, parent theme "mason", child theme "scng"), each site runs one of 3 shared CSS themes (Measured Vibrant, Bold Coastal, Modern Earthy) plus its own color override layered on top via the WordPress Customizer — confirmed via literal theme stylesheet filenames (`measuredvibrant.css`, `boldcoastal.css`, `modernearthy.css`) and by checking the cascade directly (2026-08-27).

---

## 1. Anatomy

The header is one shared component across every page type and every pilot site. It has three structural rows:

1. **Utility bar** — weather + date + e-edition link (left), account icon + chevron + search icon (right)
2. **Masthead** — centered site wordmark/logo
3. **Primary nav row** (`.nav-primary-bottom`) — either the site's full section list (homepage only), or a section title + sub-category tabs (section fronts and articles)

A **trending ticker** sits below row 3, homepage only.

Below ~1039px, rows 1–3 collapse into a single 65px bar: hamburger icon + centered logo + account icon + search icon. The trending ticker and full nav row are removed from the layout entirely, not just hidden.

---

## 2. States

### 2.1 Breakpoint (collapsed ↔ expanded)

**Exactly `max-width: 64.9375em` = 1039px.** Confirmed by reading the literal CSS source (not inferred from screenshots) on Chicago Tribune, OC Register, and Orlando Sentinel:

```css
@media (max-width: 64.9375em) {
  .nav-wrapper-primary .nav-primary-bottom { display: none; }
  .nav-primary .icon-hamburger, .nav-primary .icon-search { display: block; }
}
```

Binary switch — there is no separate tablet layout. Verified identical behavior at 375px (mobile) and 768px (tablet); both show the collapsed 65px header. Denver Post not source-confirmed but behaves identically empirically; near-certain same shared value.

| Width | Header height | Primary nav row | Trending ticker |
|---|---|---|---|
| ≤ 1039px | 65px | removed | removed |
| > 1039px | ~226–228px | shown | shown (homepage only) |

### 2.2 Scroll (persist vs. hide)

**Header always persists — it never hides on scroll, in either direction.** This corrects an earlier misread: the CSS uses the "headroom.js" library's `headroom--pinned` / `headroom--unpinned` class names (which conventionally mean shown/hidden), but this theme has no rule that actually hides the header in the "unpinned" state — the classes are vestigial. Confirmed via computed style, not just class name, on Chicago Tribune and OC Register (both showed `transform: none`, header still rendered at `y: 0` after scrolling 500–600px).

Real visual change on scroll is background/elevation only:

| | At page top (`headroom--top`) | Scrolled (`headroom--not-top`) |
|---|---|---|
| `position` | relative | fixed, `top: 0` |
| `background` | transparent | `#FBFBFB` / `rgb(251,251,251)` |
| `box-shadow` | none | `0 3px 3px rgba(0,0,0,0.25)` |

### 2.3 Logged-out vs. logged-in

**Logged out:** clicking the account icon navigates to a full external login page (`login.npuserlogin.com`, Auth0-style), not a dropdown. Confirmed on Chicago Tribune and Orlando Sentinel.

**Logged in:** clicking the account icon opens the account dropdown menu — see §4.

⚠️ Automation note: the account-icon toggle (`div.digisubs-toggle.pushnav`) resisted both a real OS-level click and a scripted JS click/event-dispatch — likely intentional trusted-event gating on this subscription-related widget. It only opened when a human clicked it directly. Worth knowing if this component needs QA automation later.

### 2.4 Page type (homepage vs. section front vs. article)

No breadcrumb pattern exists (an earlier read of one was a width-comparison artifact, since corrected). Instead:

- **Homepage:** primary nav row shows the site's full section list.
- **Section front:** primary nav row is replaced by the section's title (styled in the site's brand/accent color — e.g. blue-purple on Chicago Tribune, teal on OC Register) plus a horizontal row of that section's sub-category tabs.
- **Article page:** identical to section front, but using the *article's own* category as the active context — not necessarily the section it happened to be linked from.

Confirmed at a consistent 1280px width on Chicago Tribune, OC Register, and Orlando Sentinel:

| Site | Section front example | Article example |
|---|---|---|
| Chicago Tribune | "Business" + Careers / Top Workplaces / Real Estate / Transportation | "Real Estate" + same 4 tabs |
| OC Register | "Sports" + Angels / Dodgers / Chargers / Rams / Ducks / Kings / Lakers / Clippers / High School / College / Soccer | "Crime and Public Safety" + Crime / Investigative Reporting / Election / Business / Housing / Politics / Environment / Weather |
| Orlando Sentinel | "News" + Latest Headlines / Politics / Education / Environment / Crime and Public Safety / Space / Transportation | "Election" + same tabs as News |

---

## 3. Sub-component: section menu drawer ("All Sections" / hamburger)

> **Six-site audit, 2026-11-06** (ocregister, denverpost, chicagotribune, orlandosentinel, canoncitydailyrecord, mcall; desktop width, homepages, Karl's own sign-ins). Replaces the Chicago Tribune–only notes from the pilot. Figma source: `SectionMenu` (`456:5837`), `SectionMenuHeader` (`456:5745`) and `SectionMenuItem` (`456:5781`) on Menus and Parts in WordPress Elements; exports in `components/wordpress/section-menu*` (2026-10-30).

One drawer serves both triggers: the desktop "All Sections" toggle and the hamburger below 1040px (§2.1). Same markup and CSS on all six sites; only the menu contents differ.

### 3.1 Container and behavior (same on all six sites)

- `.wrapper-nav.pushnav.pushnav-left` inside `nav[aria-label="Main Menu"]`. Closed: `transform: translateX(-315px)`. Open (`.push-from-left`): `position: fixed`, `left: 0`, `top` = header height (64px), `z-index: 1000`, `overflow-y: auto`, slides in with `transform 0.25s ease-in-out`.
- Width **300px** at every width checked; doesn't scale with the viewport.
- Page overlay: `body::before`, `rgba(0, 0, 0, 0.5)` (black 50%, the same overlay as the modals; no token yet).
- Toggle: `div#menu-toggle[role=button][tabindex=0]`, `aria-label` "Open menu of all sections" / "Close menu", `aria-expanded`. Icon swaps `icon-hamburger` ↔ `icon-close`; the "All Sections" label (15px / 600) stays.
- Order inside the drawer: **Subscribe Now** button → **weather / date / e-Edition** row → **Home Page** row (`icon-home3`, U+E936) → the section list (`ul#pushnav`) → **newsletter** prompt and Sign Up button.
- No hover, focus-visible or current-page styling on any row (checked: hover leaves color, background and underline unchanged; `current-menu-ancestor` classes carry no style).

### 3.2 Rows

| | Production (all six) | Figma today |
|---|---|---|
| Section row | Noto Sans 14px (14.06) / 15px line, weight 600, 13px padding (13.18); the link is 40.6px but its `li` clips it to **37.5px**, so rows are 37.5px apart (corrected 2026-11-09) | Noto Sans 16px Bold, 40px tall |
| Sub-item row | Same type as the section row (no demotion); text starts 29px from the edge (16px indent + 13px padding) | Text at 40px (a hidden icon slot pushes it in) |
| Chevron | icomoon `::before`, 9px. Closed `arrow-right` (U+E907), open `arrow-down` (U+E905) | `arrow-downSMALL` closed, `arrow-upSmall` open |
| Text color | Theme nav text: #0A0908 (OCR, DP), #1F1E1C (CT, OS), #1A1A1A (CCDR, MCall) | #141414 |
| Row background | #FFFFFF (OCR, DP), #FBFBFB (CT, OS), #FAFAFA (CCDR, MCall) | #FFFFFF |
| Subscribe Now | 230px, 15px / 600, 14px / 10px padding, radius 4px, site primary fill, white text | Button Primary, 268px |
| Newsletter | Prompt 14px / 700; Sign Up 230px, radius 4px, site primary; divider above | CTAMessage (16px Bold prompt, Button Primary) |

### 3.3 Subcategories: exclusive accordion, two levels only

- A section with subcategories is an `li.menu-item-has-children` holding its own `ul.sub-menu`. Opening one (`submenu-open`; parent `<a>` gets `aria-expanded="true"`) closes any other: only one open at a time, on every site.
- **No third level on any of the six sites.**
- The section row is an `<a href>` that opens its list instead of going anywhere, so most sites repeat the section as its first sub-item ("News › News"). Not consistent: Branded Content (all six), News on Denver Post, Chicago Tribune and Cañon City (they start with Latest Headlines or Local News), Chicago Tribune's Today's E-Editions and Cañon City's Entertainment have no repeat, so those section pages can't be reached from the drawer.
- Subcategory counts per site (on the page checked):

| Site | Rows (visible) | With subcategories | Largest groups | Site-specific rows |
|---|---|---|---|---|
| OC Register | 15 (13) | 8 | Sports 17, North OC 16, South OC 16, Things To Do 15, News 12 | SCNG Premium, The T.E.A. |
| Denver Post | 14 (12) | 10 | News 17, Sports 15, Outdoors 13, The Know 12, Things To Do 12 | Outdoors, The Know |
| Chicago Tribune | 34 (20) | 13 | News 14, Entertainment 11, Today's E-Editions 10 (one per paper) | Subscriber Services, Advertise with Us, Suburbs, Chicago Magazine |
| Orlando Sentinel | 16 (16) | 12 | Sports, Business, Entertainment, Travel 6 each | Daily / Evening e-Edition first; "Services" group last |
| Cañon City | 16 (15) | 9 | News 11, Marketplace 9 | Submit, On The Record, e-Edition |
| Morning Call | 15 (15) | 10 | News 11, Sports 9, Things to Do 8 | Daily / Evening e-Edition first |

- Menu cruft for engineering: Chicago Tribune has 12 hidden top-level duplicates (5 team pages, 6 suburb papers, Immigration); Morning Call's "Public Notices" has a single sub-item, "Subscribe" (looks like a misplaced menu item).

### 3.4 Account rows by sign-in state

- Rows `Subscribe` (`subscribe-visibility`), `Log In` (`log-in-button`) and `Logout` (`log-out-button`) sit at the end of the list and are shown or hidden by state. Styled like any section row.
- Seen: **subscriber** (OCR, DP, CT, MCall): Subscribe Now button hidden, Logout shown. **Signed in, not a subscriber** (CCDR): Subscribe Now button, a plain "Subscribe" row and Logout. **Orlando Sentinel** has no account rows in its menu at all.
- **Logged out** (Denver Post, 768px and 360px, 2026-11-06): Subscribe Now button shown; the list ends with plain **"Subscribe"** and **"Log in"** rows (lowercase "in", styled like any section row); no Logout.
- **Tablet and mobile** (Denver Post at 768px and 360px, Karl resized the window): the drawer is the same at both widths — 300px wide, below the 64px header, same 14px / 600 rows (41px). The toggle is the × icon alone (the "All Sections" label is hidden below 1040px).
- **Weather / date / e-Edition row:** hidden at desktop width on all six (it's in the utility bar there); shown at 768px and 360px between Subscribe Now and Home Page: temperature (Helvetica 16px / 700, the Weather Bug exception) with the AccuWeather icon, the date (two lines), and an e-Edition link, **"Digital Replica Edition"** on Denver Post (Noto Sans 12px / 500). Figma's row says "Today's E Edition"; the label is per site.

### 3.5 Decisions (Karl, 2026-11-06)

- **Chevrons stay as designed** (down when closed, up when open). Production's › / ⌄ is drift.
- **Rows are 14px SemiBold**, matching production (was 16px Bold in Figma).
- **Section rows are a toggle plus a landing link:** the row is a button that opens its list, and the first sub-item is always the section's own page. Production's link-that-toggles is drift.
- **Add a logged-out state** to `SectionMenu`'s UserType.

### 3.6 Build plan

1. `SectionMenuItem`: 14px SemiBold, sub-item text at 32px (`spacing/400`), remove the leftover hidden icon / chevron layers, add hover and keyboard-focus states, bind text and background to theme tokens.
2. New `SectionMenuGroup`: a section row plus its sub-items, Closed / Open, for the subcategories.
3. `SectionMenu`: use `SectionMenuGroup`, one section shown open, UserType adds loggedOut; existing Figma menu items stay.
4. Documentation container, contrast checks, export, drift doc and Google Sheet, status doc, Claude design system.

### 3.7 Built in Figma (2026-11-06)

WordPress Elements ▸ Menus and Parts:

- **`SectionMenuItem`** (`456:5781`, 21 variants): rows Noto Sans SemiBold 14 (`font/size/14`, `font/style/semibold`), text `color/theme/nav-text`, background `color/surface/nav-panel`, 12px left padding (`spacing/150`), sub-item text at 32px (`spacing/400`; production's 29px rounds to 28, which has no token, so 32); the sub-item's stray visible icon is hidden; new **State** = Default / Hover (label underlined) / InFocus (2px `color/gray/black` ring inside the row, since the drawer clips outside it) on the 6 row variants; `View=open` is now just the row (its nested sub-item moved to `SectionMenuGroup`); newsletter prompt 14px Bold (production). Text case is the text as typed (was Title Case, which turned "and" into "And").
- **`SectionMenuGroup`** (new, `3740:29156`): View = Closed / Open; Section Row (toggle) + Sub Items (6 subItem rows; the first is the section's own page). Hide or add rows in the instance.
- **`SectionMenu`** (`456:5837`, now 20 variants): section rows replaced by `SectionMenuGroup` (News open with News, Latest Headlines, Politics, Crime and Public Safety, Education, Weather); nonSub gets a "Subscribe" row before Log Out; new **UserType=loggedOut** (Subscribe, Log In) for all 5 devices; drawer on `color/surface/nav-panel`. Existing menu items kept.
- Production differences: red-dashed "Production differences" note under Section Menu Group; `design-vs-production.md` 10.4–10.8 (and 10.2 updated); Google Sheet "Other fixes" rows 10.4–10.8.
- Contrast (row text on `color/surface/nav-panel` #FBFBFB): 16.1:1 (#1F1E1C) to 19.2:1 (#0A0908) in every theme mode; focus ring #000000 20.3:1.
- **Still to do:** export (`section-menu`, `section-menu-item`, new `section-menu-group`) and the Claude design system, held until Karl signs off on the 2026-11-09 changes (§3.9).
- ~~Open questions~~ answered 2026-11-09 (Karl): Home icon and rows both at 16px; LG-TabletH matches production (§3.9).

### 3.8 Header and spacing at every width (Denver Post, logged out, 2026-11-09)

Karl resized the window; the drawer was opened by script (no clicks). Same at every width unless noted:

| Width | Toggle | × from the left | "All Sections" | Weather row | Newsletter: divider to prompt |
|---|---|---|---|---|---|
| 1728 | 140 × 64 | 58px (43px page margin + 15) | shown, 4px after the × | hidden | 15px |
| 1280 (1249 page) | 140 × 64 | 46px | shown | hidden | 15px |
| 1024 | 50 × 64 | 41px | hidden | shown, 61px | 30px |
| 768 | 50 × 64 | 34px | hidden | shown | 30px |
| 360 | 50 × 64 | 24px | hidden | shown | 30px |
| 340 | 50 × 64 | 23.5px | hidden | shown | 30px |

- Drawer: 300px, `top: 64px`, **1px #0A0908 top border** across the drawer (not under the toggle only), white on Denver Post; 12px top padding, 48px bottom padding, then a **1px #0A0908 divider** above the newsletter.
- Subscribe Now: 230 × 44, margins 12px 35px. Home row: 36px, icon at 10px, 15px SemiBold #000000. Rows 37.5px apart, text at 13.18px. Newsletter: prompt 14px Bold centered, 12px, Sign Up 230 × 40, 15px below.
- Weather row (below 1040px): padding 0 15px 5px; temperature Helvetica 16px Bold + 26px icon; date 15px SemiBold, 12px to the right; "Digital Replica Edition" 12px Medium, 10.87px below.

### 3.9 Changes from the five-width check (Karl, 2026-11-09)

- **Rows 36px** (production 37.5); **row text and Home icon 16px from the left** (`spacing/200`, design choice); sub-items stay at 32px. Text size unchanged. (The header × also moved to 16px here; replaced in §3.10.)
- **Lines:** the drawer's top border and the newsletter divider use `color/gray/black` (#000000, the nearest gray to #0A0908); the drawer's top border spans the full 300px; the header's own divider is hidden in the open state.
- **Spacing to production:** 12px drawer top padding (`spacing/150`); Subscribe Now 12px above and below, 36px sides (`spacing/450`, new); Button Primary keeps its 8px padding; weather row (replaced in §3.10 by production's exact values); 48px below the last row (`spacing/600`, new); newsletter 16px above the prompt at XL-Desktop and 32px on the other devices, 12px to the button, 16px below, 36px sides.
- **States:** new **Pressed** (underline + `color/gray/600` tile); Hover stays underline only.
- **Title Case forced** on row and sub-item labels (no automatic proper title case exists).
- **LG-TabletH matches production:** × only (no "All Sections"), weather row shown; the closed toggle is the TabletV hamburger.
- New tokens `spacing/450` (36) and `spacing/600` (48): added in the main file, pull request #14 (`review/spacing-450-600`, stacked on #13). Bound in WordPress Elements on 2026-11-09 after Karl published the library (§3.10).
- Drift: `design-vs-production.md` 10.6 (rewritten), 10.7 (lines), 10.8 (Pressed).

### 3.10 Toggle, label and weather row (Karl, later on 2026-11-09)

- **Toggle is the same in both states.** Checked on Morning Call at 1728px: one element (`#menu-toggle`, 15px padding), only the icon swaps (`icon-hamburger` ↔ `icon-close`); position, size and the 4px gap to "All Sections" don't change (closed icon at 57.8px, open at 58.2px: scrollbar). In Figma the open × had been moved to 16px; `SectionMenuHeader`'s Open variants are now copies of the Closed ones with the `close` icon (XL-Desktop: icon at 20px, label at 56px; TabletV / Mobile: icon centered at 24px). The header's own divider stays hidden when open (the drawer's top border is the line). Drift: 10.6.
- **"All Sections" label:** 16px SemiBold in both states (`font/style/semibold`; was Bold). Production is 15px SemiBold; size kept. Drift: 10.6.
- **Subscribe Now:** Button Primary, 40px tall, 8px padding (production 44px). Drift: 10.6. Newsletter prompt spans the full drawer; only the Sign Up button has the 36px side margins (a "Button Container" frame, `spacing/450`).
- **Weather row matches production exactly** (AccuWeather widget, not ours; raw values allowed, Karl; every variant, see §3.11): Weather Bug `Location=SectionMenu` (`654:10019`): padding 0 15 5, 12px gap (`spacing/150`), temperature Helvetica Bold 16 / 16 with a 26.41px icon in a 27.1px row (top-aligned), the pair centered on the date column; date Noto Sans SemiBold 15 / 16; e-Edition Noto Sans Medium 12 / 12.8, 10.87px below (production `margin-top: 5.5%`); text `color/theme/nav-text`; no fill (the drawer shows through); 60.87px tall (production 60.7). Instance overrides in `SectionMenuItem` and `SectionMenu` were reset.
- `spacing/450` and `spacing/600` are now bound (library published): Subscribe Now and Sign Up side margins 36px, 48px above the newsletter divider.

### 3.11 Weather Bug: two e-Edition links, labels by market, production-exact (Karl, 2026-11-09)

- **Variant property `Evening e-Edition` = Off / On** on Weather Bug (`654:10020`), for both Locations. On adds a second link under the first ("Today’s e-Edition", "Evening e-Edition"). Several markets publish two editions; it's not specific to one site. Off is the default. The property is exposed through `SectionMenuItem`'s Weather row (nested instance), so it can be switched in any drawer.
- **Every variant matches production exactly** (AccuWeather widget, third-party; raw values allowed, Karl): temperature Helvetica Bold 16 / 16px with a 26.41px icon in a 27.1px row (top-aligned), the pair centered on the date column; date Noto Sans SemiBold 15 / 16px, 12px after the icon (`spacing/150`); links Noto Sans Medium 12 / 12.8px, shown as typed. Link spacing is production's `margin-top: 5.5%`:

| Location | Padding | Date column | One link: gap / height | Two links: gap / height |
|---|---|---|---|---|
| SectionMenu (drawer, below 1040px) | 0 15 5 | fills (197.6px) | 10.87px / 60.87 (production 60.7) | 4.94px / 72.88 (production 72.47) |
| Masthead (1040px and up) | 0 (the masthead places it) | 213.37px fixed | 11.73px / 40.73 (production 40.53) | 5.33px / 52.66 (production 52.25) |

  Measured on Denver Post (one link) and Morning Call (two links), 2026-11-09. The sample date is production's format, "Monday, November 9th 2026" (no comma before the year). The masthead block narrowed from 345px to 285.78px (production 285.74).
- **Backgrounds** (Karl, for consistency): SectionMenu variants and the `SectionMenuItem` Weather row on `color/surface/nav-panel`; Masthead variants on `color/gray/max`.
- **Reader Dashboard masthead** (Masthead `Page=Dashboard`, XL-Desktop Default `456:2715`): its invisible right-hand spacer (opacity 0, keeps the logo centered) was a detached copy of the old weather block; it's now a hidden Weather Bug instance (`Location=Masthead`, `Evening e-Edition=Off`). The Reader Dashboard v2.0 file uses the WordPress Elements Masthead, SectionMenu and Weather Bug as library instances, so it updates when WordPress Elements is published and the updates are accepted there. Re-check when the Reader Dashboard work starts.
- **The e-Edition labels change by market.** The text in Figma is a placeholder; production uses each site's wording, for example "Digital Replica Edition", "Daily e-Edition" / "Evening e-Edition", or "e-Edition". Not built as options; noted here and in the Weather Bug component description.
- **Note (2026-11-09):** a Figma relaunch lost the WordPress Elements edits made after the library publish that afternoon (toggle copy, label weight, weather row, spacing/450 and /600 bindings, Evening e-Edition, backgrounds, Dashboard spacer). All were re-applied and checked the same day.

### 3.12 Signed off, exported and published (Karl, 2026-11-09)

- **Toggle spacing stays as designed** (Karl): XL-Desktop 8px padding, 40px icon target, "All Sections" 20px after the icon; it's a design choice, logged in design-vs-production 10.6 so production changes to match.
- **Visible button inset:** Subscribe Now and Sign Up sit in a 36px (`spacing/450`) side margin, and Button Primary keeps its own 8px margin, so the visible buttons start 44px from the drawer edge and are 212px wide (production 35px / 230px). Karl accepted this as the design (2026-11-09); recorded in 10.6.
- **Export** (2026-11-09): `section-menu`, `section-menu-header`, `section-menu-item`, new `section-menu-group`, `weather-bug` and `masthead` re-exported to `components/wordpress/` on branch `feature/side-nav-export`, pull request #15 (stacked on #14, whose `spacing/450` / `600` the tokens reference). Merge order #12 → #13 → #14 → #15.
- **Claude design system** (version 56, 2026-11-09): new `SectionMenu`, `SectionMenuHeader`, `SectionMenuItem`, `SectionMenuGroup` and `WeatherBug`; `Masthead` uses `WeatherBug` and a SemiBold "All Sections". Previews checked in a headless render in all three themes.
- **Breakpoint:** the drawer's 1040px switch is listed in `components/breakpoint-audit.md` (site-wide catalog).
- **Reader Dashboard v2.0:** gets the masthead changes through the main file's "ReaderDash Tempates" (MNG Web Design System ▸ Breakpoints and Page Templates). It updates once the main file accepts the WordPress Elements update and is republished.

---

## 4. Sub-component: account dropdown menu

Matches the **"Dropdown (Bootstrap-style)"** component flagged as documented-but-unbuilt in the previous session. Container class `.dropdown-menu.show`.

### 4.1 Sizing — confirmed NOT responsive

Fixed width regardless of viewport. Verified identical `width: 300px` at 1280px, 375px, and 340px viewports. Height grows to fit content (see §4.2). At 340px viewport the panel had only ~6px of margin to the browser edge — no built-in edge-safety margin was observed, so this is a real risk area to design for rather than copy as-is.

- Background: white
- Border radius: `0 0 5px 5px` (bottom corners only — matches the `radius/utility` token, which is for containers; kept by Karl 2026-10-01).
- Box shadow: `0 8px 16px -4px rgba(0,0,0,0.2)`
- Top padding: 8px

### 4.2 Contents — varies by site, use the fullest as reference

**Chicago Tribune (7 real items):**
1. Avatar (image only, no text)
2. Identity block — display name + email, bold 16px
3. Reader Dashboard →
4. Subscription → (secondary line: plan name, e.g. "Standard Digital Access")
5. Gifted Articles →
6. Contact Us →
7. Log Out (no chevron — direct action)

Panel height: 414px.

**Denver Post (8 real items) — use as the item-count reference:**
Same as above, with **Saved Articles** inserted between Gifted Articles and Contact Us. Panel height: 468px (confirms width is fixed but height flexes to item count).

Both sites also carry an 8th/9th hidden row: literal placeholder text **"SAMPLE MARKETING ITEM HERE"** — an unconfigured promotional slot in the shared template. Build this as an optional/empty-state slot, not a guaranteed 7th/8th row.

Reader Dashboard, Subscription, Gifted Articles, and Saved Articles all correspond to surfaces the previous session already audited in depth on the preprod Reader Dashboard — that content can be reused directly.

**OC Register and Orlando Sentinel menus:** not yet audited (deferred by request).

### 4.3 Open item

Visible hairline dividers appear between the identity block and the links, and before Log Out — but every item reports `border: none` in computed style. The actual CSS mechanism (separate element vs. box-shadow trick) is unconfirmed.

---

## 5. Design tokens

### 5.1 Reused from existing token set
- `color/base/ink` (`#1F1E1C`) — nav text color on Measured Vibrant sites
- `font/weight/semibold` (600)
- `radius/utility` (5px) — dropdown corner radius (containers only; buttons use `radius/sm`, 4px)
- Existing spacing scale (approximate matches on off-canvas panel padding)

### 5.2 New — theme-level text color (not per-masthead)
Real, sourced finding: this is **theme-level**, not brand/masthead-level, unlike the button colors. Confirmed via literal theme CSS filenames:

| Theme | File | Nav text color |
|---|---|---|
| Measured Vibrant | `measuredvibrant.css` | `#1F1E1C` (= existing `color/base/ink`, no new value needed) |
| Bold Coastal | `boldcoastal.css` | `#0A0908` (new value needed) |
| Modern Earthy | not yet observed in pilot | unconfirmed |

**Update, 2026-08-27, revised:** the "not yet observed in pilot" excuse for Modern Earthy no longer applies — Greeley Tribune joined the pilot set this date to give it a live site. It hasn't actually been checked for nav text color yet (only platform-wide typography was audited on it so far), but the row above is now directly checkable rather than blocked on site availability. **"Morning Call" is not a separate row/theme** — an earlier version of this note treated it as a 4th shared theme alongside Measured Vibrant/Bold Coastal/Modern Earthy, but a live check of mcall.com shows it loads `modernearthy.css` directly, the same theme file as Greeley Tribune, with its own Customizer color override on top (same pattern as any other one-off site). So there are 3 shared theme files confirmed to exist, not 4 — "Morning Call" is a site name, not a theme name. This also means checking Greeley Tribune for this row's Modern Earthy value effectively covers mcall.com too, modulo any site-specific override mcall.com might carry (unconfirmed either way for nav text specifically).

Recommend modeling as a token in a **theme** collection (modes: Bold Coastal / Measured Vibrant / Modern Earthy), separate from the existing per-masthead **Brand** collection — since this varies by shared theme, not by individual site. `tokens/colors/color-tokens-decision-log.md`'s built `Theme` collection already has exactly these 3 modes — no gap there once "Morning Call" is correctly understood as a site, not a 4th theme.

### 5.3 New — surface tokens needed for build
- Dropdown/off-canvas panel background (`#FBFBFB`)
- Dropdown box-shadow value
- Header scrolled-state box-shadow value
- Fixed panel width (300px) — likely a component-specific constant rather than a spacing-scale token

---

## 5.4 New — page-type variants (Obituaries, Dashboard)

Confirmed via live-site audit (Obituaries) and the Reader Dashboard v2.0 Figma file (Dashboard). Both are real, structurally distinct header variants beyond the Homepage/Section Front/Article set in §2.4.

**Obituaries** — confirmed identical on all 4 pilot sites via `getComputedStyle`/`getBoundingClientRect`, not screenshots:
- Utility bar and masthead/logo rows are unchanged from Homepage.
- The primary nav row (row 3) is entirely replaced by `.obits-search-form` + `.obit-modal-container` (a name search box + a filter modal trigger) — no section tabs, no trending ticker.
- Total header height ~208–211px (vs. Homepage's ~226–228px expanded), consistent with the missing trending ticker.
- ⚠️ **Real deviation from the Homepage breakpoint rule:** on Homepage, the hamburger icon is only visible ≤1039px (confirmed via literal CSS). On Obituaries, at a comfortably-desktop viewport, **both** the hamburger icon (`.menu-toggle .icon-hamburger`, 20×16) and the "All Sections" button (`div.menu-toggle[aria-label="Open menu of all sections"]`, ~140×64) are visible simultaneously — originally confirmed on the 4 original pilot sites, and **re-confirmed 2026-08-27 at a 1728px viewport on Greeley Tribune and mcall.com too** — same elements, same sizes, same simultaneous visibility, no difference by theme. This is a genuine, now platform-wide, content-level finding from live `getBoundingClientRect` checks, not an inference. Not yet root-caused; worth flagging to engineering as either an intentional dual-trigger pattern for this template or an unintentional leftover.
- Confirms the `endlesstributes.com` link is present in the obituaries search/filter area on all 4 pilot sites — cross-validates the "Endless Tributes" color palette built earlier in this project as this page's actual live branding target.
- Not yet tested: actual collapse behavior at ≤1039px on this specific template (window resize via automation didn't reflect in the live viewport this session — needs a manual DevTools check, same limitation as the original audit).

**Dashboard** — pulled from the existing Reader Dashboard v2.0 Figma file (`Basic Page Structure / Nav Menu / LOWA` page), not a fresh live-site audit — this file already modeled the dashboard masthead in a prior session:
- Masthead is only 2 rows (utility bar 64px + logo/masthead row 80px + a hairline divider) — **no primary nav row at all**, total ~144px vs. Homepage's ~226–228px. Makes sense: once inside the account dashboard, site-wide section nav is replaced by the dashboard's own left-hand "Section Menu," not the header.
- That file's own breakpoint convention treats 1024×768 ("Tablet - horizontal") and 1280×960 ("Desktop") as "menu always visible," with Fold/Mobile-Small/Tablet-vertical (≤768px) as togglable open/closed — a different breakpoint value (1024px) than our audited 1039px marketing-site rule. Since the Dashboard is a distinct web app from the marketing site's shared theme, this may be a legitimately different, real breakpoint rather than a conflict to resolve — not treating it as an error, just flagging that it doesn't match the 1039px rule used elsewhere.

## 5.5 New — confirmed live, logged in (Orlando Sentinel, Karl's own account)

**Logged-in header change:** confirmed real. The account icon becomes a small (~22–24px) circular avatar badge — dark navy background, white initials (server-generated, e.g. "PA"), `border-radius: 60%` — replacing whatever renders in the logged-out state. The dropdown chevron next to it is unchanged. Image source is an authenticated URL (JWT-bearing), consistent with the Auth0-style login already documented in §2.3.

**DefaultAdFree — inconclusive, this account isn't on it.** Ads rendered normally at every audited slot (`sponsorship_1`, `top_leaderboard`, `cube1/2/3_rrail`, `sponsorship_2/3/4`, `bottom_leaderboard`) while logged in as this test account (Standard Digital Access plan). So "ad-free" isn't simply "any logged-in user" — it's gated behind a specific plan/entitlement this account doesn't have. Still unaudited; need either an ad-free-eligible account or confirmation this is aspirational/not-yet-live.

**Account Dropdown Menu — content policy decided.** Orlando Sentinel's live dropdown (logged in, confirmed via direct DOM inspection) is leaner than the Denver Post reference: 300×414px, matching the Chicago Tribune reference (414px, 7 items, no Saved Articles) rather than Denver Post's 468px/8-item version. **Decision: Denver Post's item set stays canonical regardless — it's the superset.** Policy going forward: always build from whichever site has the *most* items found so far (currently Denver Post); a site with fewer items (like Orlando Sentinel) doesn't change the built component, but if a future site turns up items beyond Denver Post's 8, add those too. No Figma changes needed from this Orlando Sentinel finding.

**Still open:** OC Register's dropdown remains unaudited (needs Karl logged into that site separately).

**Cross-site SSO confirmed.** The same logged-in session carried over to Denver Post with no re-login — same account, recognized site-to-site. One inconsistency worth flagging: Denver Post rendered an actual photo avatar, while Orlando Sentinel rendered a generated initials badge ("PA") for the identical account. Not yet root-caused — could be a per-site fallback difference, not necessarily a bug.

**DefaultAdFree — found it, on OC Register.** Checked Denver Post first: `top_leaderboard` (1280×250), `cube1_rrail_atf` (305×600), `bottom_leaderboard` (1280×250), and `sponsorship_1` (537×50) all rendered with real dimensions — ads present, same as Orlando Sentinel. `sponsorship_2/3/4`, `cube2/cube3_rrail_mid/lower`, and `mobile_adhesion` were 0×0, which reads as normal unfilled-inventory noise (unrelated to account tier), not ad-free — the primary slots didn't get suppressed.

**OC Register logged in — different from Denver Post/Orlando Sentinel.** Same logged-in account (avatar confirmed via screenshot). Zero `div-gpt-ad-*` elements exist anywhere in the DOM — not zero-sized placeholders like Denver Post's unfilled slots, but no ad containers injected at all. Confirmed on two separate page loads. Visually confirmed too: no ad space between the lead headline and the next story, a genuinely clean ad-free layout.

**Resolved via logged-out re-test:** Karl logged out and had this session rescan the same URL. Logged out, OC Register renders all 11 `div-gpt-ad-*` slots (`sponsorship_1–4`, `interstitial`, `top_leaderboard`, `cube1/2/3_rrail_atf/mid/lower`, `bottom_leaderboard`, `mobile_adhesion`) — ads are back. So the zero-ad-slot state **is tied to account entitlement**, not a site-wide OC Register characteristic.

**Root cause identified — not a bug, a subscriber tier.** Per Karl: he was logged into two *different* accounts across the pilot sites, not the same account everywhere as this audit had assumed — a **Basic** tier (ads shown) on Denver Post and Orlando Sentinel, and a **Premium/ad-free** tier on OC Register. That fully explains the pattern with no inconsistency:

| State | Denver Post | Orlando Sentinel | OC Register |
|---|---|---|---|
| Logged in, Basic account | ads present | ads present | *(not tested — same account not run here)* |
| Logged in, Premium account | *(not yet tested)* | *(not yet tested)* | 0 ad slots — confirmed |
| Logged out | *(not tested)* | *(not tested)* | all 11 ad slots present |

DefaultAdFree is therefore a real, intentional **subscription-tier state** (Basic vs. Premium), independent of the Logged In/Out axis — logged-out and logged-in-Basic both show ads; only logged-in-Premium suppresses them. It should be modeled as its own variant driven by account tier, not by site. To fully confirm the mechanism is uniform across sites, the clean test would be the *same* tier tested on all 4 pilots (e.g. Premium on Denver Post and Orlando Sentinel too) — not yet done, no need to treat the current mixed-account result as a discrepancy anymore.

One unrelated oddity hit while checking this: OC Register's `body` class briefly read `mobile` even in a normal desktop-context tab load, then `desktop` on a fresh tab load of the same URL — while `window.innerWidth` stayed 360 both times, and stayed `mobile` again on this logged-out re-test. So this theme's desktop/mobile class isn't driven purely by viewport width; something else (device/UA detection?) decides it. Not blocking anything, just noted since it's a real inconsistency in the site's own responsive detection, not a fluke of this session's tooling.

**Investigated further, 2026-08-27 — mechanism narrowed down; likely not a bug at all, and not OC-Register-specific.** Set out to catch the flip in the act and instead found several concrete facts that reframe this:

- **It's not server-side at all.** Fetched OC Register's homepage HTML directly (cache-busted query string, 6 fresh fetches, no JS execution) and the literal string `desktop` never appears anywhere in the raw response — not in the `<body>` tag, not in any inline script. Whatever adds the class does it entirely client-side, after the initial HTML is already in the browser. This rules out the "server caching / edge-node UA-sniffing" theory this doc's earlier "worth engineering awareness" note implicitly assumed.
- **It's not viewport-width-driven, and that's confirmed directly, not just inferred.** At a genuinely narrow 500px window (well below both this component's 1039px nav breakpoint and Card/Teaser's 640px breakpoint), the site's own CSS correctly switches to mobile nav — the hamburger icon is `display: flex` / visible, exactly as it should be — while the `body` class at that same moment still reads `desktop`. So the class and the real responsive layout are answering two different questions.
- **Strong lead on what it actually reads:** `localStorage` on OC Register (and Denver Post — same keys, same values, so this isn't OCR-specific) carries several `aps:<id>:deviceSignal/sua` entries — `aps` = Amazon Publishing Services, one of the page's real-time-bidding/ad-tech vendors, present on every pilot site. The cached value includes `"mobile":0` and a `platform`/`browsers` block that's a direct dump of the User-Agent Client Hints structured API (`navigator.userAgentData`) — confirmed by reading `navigator.userAgentData.mobile` directly in the console, which returns `false` on this real desktop Chrome browser. **This strongly suggests the `desktop`/`mobile` body class is set from `navigator.userAgentData.mobile` (or an ad-tech SDK's cached copy of it) — i.e. it reflects the actual device/OS the browser reports itself as, not the current window/viewport size at all.** That's exactly consistent with resizing a real desktop browser window down to 500px and still getting `desktop`: Client Hints keeps reporting "not a mobile device" regardless of window size, because the browser itself hasn't changed.
- **Given that, the original flip most likely came from comparing two different testing contexts, not a live inconsistency in production.** Chrome DevTools' device-toolbar/responsive-mode emulation overrides `navigator.userAgentData.mobile` to `true` for an emulated phone profile, while a plain resized browser window (what this session's tooling does) does not — so a `mobile` reading followed by a `desktop` reading on "the same URL" is very plausibly what happens when a test pass alternates between emulated-mobile-device checks and normal-window checks, rather than the site behaving inconsistently for one real visitor.
- **Could not reproduce the flip live this pass** — 8 consecutive fresh loads of OC Register, at both ~1131px and the narrowest width this session's tooling could reach (500px; window-resize calls below that had no effect on the tab's actual viewport), all read `desktop`, matching what real Client Hints reports for this desktop browser every time.
- **The exact script that reads this signal and sets the class wasn't pinned down.** All first-party/theme JS bundles checked (the loader plugin, DFM ad-mods, the `mng-digisubs`/Sophi bundle, the `wp-mason` theme's `ads.min.js`, and the theme's `boldcoastal-async`/`common-async` chunk bundles) don't contain this logic. The remaining candidates are the third-party ad SDKs themselves (Marfeel `sdk.mrf.io`, Aditude/Raven `raven-static.aditude.io`) — their scripts are cross-origin and blocked by CORS from this tooling, so their source couldn't be read directly to confirm the exact line.

**Net:** this is very likely a real-device-type signal from an ad-tech vendor's Client Hints read, working as designed — not a caching bug, not something unique to OC Register's own code (Denver Post carries the identical signal), and not something that should block anything. Recommend closing this as "explained, not a bug" once engineering confirms which script reads `aps:*:deviceSignal/sua` (or `navigator.userAgentData.mobile` directly) and sets the class — that would fully close the loop, but the class's *purpose* is now well understood even without that last confirmation.

**Fully confirmed, 2026-08-28 — Karl set all 6 pilot tabs to a real Galaxy S8 device profile and refreshed.** This directly tested the Client Hints hypothesis above with a real mobile device signal instead of a resized desktop window, and it confirms the theory cleanly while surfacing one genuine, narrow finding:

- **The classification itself is accurate everywhere.** All 6 pilot sites reported the same emulated device correctly: `navigator.userAgentData.mobile = true`, UA = `SM-G950U`/Android, `window.innerWidth = 360`. The `aps:*:deviceSignal/sua` cache (see above) also read `"mobile":1, "model":"SM-G950U"` correctly on every site checked. No site ever misclassified this device as desktop — the underlying signal is right everywhere.
- **But the class isn't applied instantly, and how long it takes varies by site.** Checked immediately after a fresh page load, Chicago Tribune, OC Register, Orlando Sentinel, and Greeley Tribune already had `mobile` on `document.body`. Denver Post and mcall.com did not yet — their `body` class had neither `mobile` nor `desktop` at that same moment. Re-checked ~2 seconds later, both had `mobile` too, correctly, with no misclassification. Repeated the same fresh-load-then-check sequence a second time on both and got the same pattern: empty immediately after navigation, `mobile` present within about 2 seconds.
- **This fully explains the original "flip."** It was never a random inconsistency or a caching bug — it's a client-side script that applies the class with a small, variable delay after page load, and on two specific sites (Denver Post, mcall.com — one from each of two different themes, so not theme-scoped) that delay is long enough to catch mid-load if checked in the first second or two. A check made at the "wrong" moment on those two sites would read as "missing," which is easy to mistake for "flipping to something else" when compared against a site that already has it.
- **Not root-caused down to the exact script** — still blocked by CORS from reading the Marfeel/Raven SDK source directly, so it's not confirmed whether the extra delay on DP/mcall.com is ad-load weight, script ordering, or something else site-specific. But the mechanism itself is now fully explained: real device detection, working correctly everywhere, applied slightly slower on 2 of 6 sites.
- **Worth a note for engineering, not necessarily a bug ticket:** if any component's CSS depends on this class being present at first paint (rather than tolerating it arriving a beat late), Denver Post and mcall.com visitors on real mobile devices could see a very brief flash of the "no class yet" state that the other 4 sites show less of. Worth asking engineering whether anything actually depends on this class at first paint — if nothing does, this is fully closed with no action needed.

## 5.6 Major finding — Account tier is a full variant axis (sourced from the reference file)

Per Karl: logged-in users aren't just subscriber/not-subscriber — there's a third real-world tier, logged-in non-subscribers, who see ads and a different account menu with a "Subscribe" prompt. Checked the reference file Karl shared earlier ("Website Page Templates," now named "WordPress Elements," `b1iZxkFwtAYq9rElmnCAzd`) rather than guess — it has a page literally named **"Account Dropdown Menu"** with a component set called **AccountMenu** (`910:16425`) that models this in far more depth than our live-site audit captured. Treating this as the canonical structural reference for account-tier content going forward — it supersedes assumptions built only from Denver Post/Orlando Sentinel's live content.

**AccountMenu's real variant axes** (actual Figma component properties, not names we inferred):

- `Status`: loggedIn / loggedOut / alert
- `View`: open / closed
- `Device`: XS-Fold / SM-Mobile / MD-TabletV / XL-Desktop — 4 tiers, richer than the single 1039px breakpoint audited for the header nav itself. May be a legitimately different responsive model for this one component rather than a conflict with §2.1 — not resolving that assumption further without more digging.
- `UserType`: loggedIn (generic, closed-state only) / **nonSub** / **BasicSub** / **PremSub** / **groupSub** / **GroupAnon** / loggedOut

**Content by UserType** (Status=loggedIn, View=open, Device=XL-Desktop unless noted):

| UserType | Identity block | Subscription line | Gifted Articles line | Saved Articles line | Extra CTA |
|---|---|---|---|---|---|
| **nonSub** | Name + email (real account) | "Limited Access" | "Subscribe for access" | "Subscribe to Premium for access" | Prominent **"Subscribe Now"** button, right under the identity block |
| **BasicSub** | Name + email | "Basic Digital Subscriber" | "Gift articles remaining: 6" | "Subscribe for access" (still locked) | none |
| **PremSub** | Name + email | "Premium Digital Subscriber" | "Gift articles remaining: 6" | "You've saved 2 articles" (unlocked) | none |
| **groupSub** | Name + email | "Ad-Free Partner Access [...] provided by [Institution]" (placeholder text, contains a literal typo in the reference file — not a live-audited string) | "Gift articles remaining: 6" | "You've saved 2 articles" | none |
| **GroupAnon** | "Anonymous User" + an ID string, no name/email | same Subscription line as groupSub | "Gift articles remaining: 6" | "You've saved 2 articles" | none |
| **loggedOut** | — (no dropdown shown this way) | — | — | — | Header shows **"Subscribe"** + **"Log In"** buttons directly (closed, XL-Desktop); open mobile state shows "Subscribe Now" / "Log In" buttons plus the newsletter Sign Up CTA |

Every open-view variant, regardless of tier, also carries the "SAMPLE Marketing Slot content" placeholder we'd already found, **plus** a "Get Morning Report and other email newsletters" + "Sign Up" CTA footer row.

**`alert` status** (checked on PremSub): inserts a payment-issue block right after Reader Dashboard — "We're having trouble processing the payment for your subscription. To keep reading uninterrupted, please update your payment information today." plus an "Update Payment Info" button — layered on top of otherwise-unchanged PremSub content (still full access, i.e. a grace-period state, not an immediate downgrade). This is a third `Status` value alongside logged in/out, not itself a subscriber tier.

**Off-canvas Section Panel carries a matching but simpler axis**: `UserType`: all / subscriber / nonSub. Only content difference found: `nonSub` inserts one extra row, "Subscribe Now," directly under "All Sections" — the rest (11 section links, Log out, newsletter signup) is identical to `subscriber`.

**Logged-out header buttons — confirmed live on OC Register, resolves the discrepancy.** Rechecked OC Register logged out at a real 1728px desktop viewport (not the earlier mobile-emulated tab): the utility bar shows explicit **"Subscribe"** and **"Log in"** pill buttons at top-right, screenshot-confirmed — matching the reference file's `Status=loggedOut, View=closed, Device=XL-Desktop` variant exactly, real button text, real link targets (`/login?returnUrl=...`). Ads also fully present, consistent with logged-out = no entitlement.

This isn't actually a contradiction with §2.3's "account icon → external login page" finding — it's device-dependent, same as the rest of the header. §2.3's finding came from narrower/mobile-emulated tabs, where these desktop-only pill buttons have no room and the only visible control is the account icon/hamburger (`#digisubs-toggle`), which is a separate widget from the Subscribe/Log In buttons. Both are real; they just show at different Device tiers, mirroring the reference file's own per-device variants for this exact state. Not yet re-confirmed at a genuine (non-emulated) mobile width, but no reason to expect otherwise now.

**Revised account-tier list** (replaces the two-tier Basic/Premium model from §5.5):

1. **loggedOut** — no entitlement, sees ads (live-confirmed)
2. **loggedIn, nonSub** — sees ads, sees "Subscribe Now" prompts throughout the menu (the tier Karl just flagged; not yet live-audited, only confirmed in the reference file)
3. **loggedIn, BasicSub** — sees ads (live-confirmed on Denver Post/Orlando Sentinel), Saved Articles still locked per reference file
4. **loggedIn, PremSub** — ad-free (live-confirmed on OC Register), full access
5. **loggedIn, groupSub** — ad-free per reference file (institutional/partner access), full access — not yet confirmed on any live pilot site
6. **loggedIn, GroupAnon** — same access as groupSub, anonymous identity — not yet confirmed live
7. **alert** (a `Status`, layers on any tier, e.g. PremSub-with-payment-issue) — not yet confirmed live

Only tiers 1, 3, and 4 have real live-site confirmation so far; tier 2's ad behavior isn't live-confirmed yet either (only its menu content, from the reference file); tiers 5, 6, and `alert` exist only in the reference file so far.

## 6. Known open items

1. Divider mechanism inside the account dropdown — unconfirmed (§4.3)
2. OC Register and Orlando Sentinel account menu contents — not yet audited (deferred)
3. Modern Earthy's nav text color — still not confirmed live (mcall.com and canoncitydailyrecord.com are the Modern Earthy review sites; Morning Call is a site, not a theme)
4. Account dropdown's behavior below 340px viewport — untested, likely starts clipping since no responsive/edge-margin rule was found
5. Automating clicks on the account-icon toggle for future QA — real and scripted clicks both failed; only a genuine human click opened it
6. Obituaries page's simultaneous hamburger + "All Sections" visibility at desktop width (§5.4) — **confirmed 2026-08-27 on Greeley Tribune and mcall.com too, identical pattern, now confirmed platform-wide on all 6 pilot sites.** Still flagged to engineering, still not yet explained — this widens the finding's confidence but doesn't answer whether it's intentional.
7. Obituaries collapse behavior at ≤1039px — not yet tested (viewport resize via automation didn't take effect on the live page this session)
8. ~~Logged-in vs. logged-out header differences beyond account-icon destination, and the DefaultAdFree view~~ — resolved (§5.5): avatar badge confirmed; DefaultAdFree confirmed real and driven by subscriber tier (Basic vs. Premium), not by site
9. Same-tier cross-site confirmation for DefaultAdFree — current evidence used a Premium account on OC Register and Basic accounts on Denver Post/Orlando Sentinel (different accounts per site, per Karl). Testing the *same* Premium account on Denver Post and/or Orlando Sentinel would confirm the mechanism is uniform everywhere, not just inferred from OC Register.
10. Chicago Tribune not yet checked for DefaultAdFree — would complete 4-site coverage of this state.
11. **New (§5.6):** account tier is really a 7-value axis (loggedOut / nonSub / BasicSub / PremSub / groupSub / GroupAnon / alert), not the 2-value Basic/Premium model — only 3 of those 7 have live-site confirmation so far (loggedOut, BasicSub, PremSub). Need live audits for nonSub's ad behavior, and ideally groupSub/GroupAnon/alert if any pilot site actually offers institutional or grace-period states.
12. ~~Reference file shows logged-out as header-level Subscribe/Log In buttons, contradicting the account-icon-navigates-out finding~~ — resolved (§5.6): confirmed live on OC Register at real desktop width; not a contradiction, just device-dependent (same pattern as the rest of the header). Still worth a genuine (non-emulated) mobile-width re-check to fully close this out.
13. Decide whether to model the opened search form (§9) in the Masthead set, with a scrim to represent the `body::before` dimming backdrop.

---

## 9. Header findings from the pilot build

A pilot Header was built to test a decoupled structure: the Header carried only Page Type × Breakpoint × Scroll, with login state in a small nested Account Trigger (logged out = "Subscribe" + "Log in" pill buttons filled with `color/theme/primary-dark`, `#0A5962` on Bold Coastal, confirmed live on OC Register desktop; logged in = avatar + chevron). That pilot was retired on 2026-09-25 in favor of the Masthead set in WordPress Elements. The findings below came out of building and checking it and are still valid.

**Findings** (visually verified with screenshots, not just structurally checked):
- **Row heights** are 64 / 80 / 48 / 34 = 226px, **cross-site confirmed live** (not just on Chicago Tribune): Denver Post and OC Register measured byte-identical (64/80/48/34/226) at a real 1728px desktop viewport. Orlando Sentinel came in at 64/**83**/48/34 = **229px** — a small, real 3px difference in the masthead row specifically, not a measurement error. Worth a note rather than forcing it to match; likely a slightly taller logo asset on that masthead.
- **Desktop "All Sections" trigger:** real desktop headers show a hamburger + "All Sections" text label at the far left of the icon row (identically worded on all 4 pilot sites), which opens the same Off-Canvas Panel as the mobile hamburger. The weather/date group sits in the masthead row (left-aligned), with the wordmark centered.
- **New finding: the search icon toggles a hidden inline search form** (`.search-form.header-search`, `display: none` until triggered) rather than navigating to a separate search page — not previously documented. Neither a scripted click nor the first automated `computer`-tool click (aimed using raw CSS-pixel coordinates) opened it — same trusted-event-gating behavior already documented for the account icon (§2.3), compounded by a coordinate-space mismatch (the `computer` tool's click/screenshot space is scaled relative to CSS pixels — e.g. screenshot width 1465px vs. CSS `innerWidth` 1728px on this session's window, ratio ≈0.848). **Resolved:** taking a screenshot first and clicking the icon's position read directly off the screenshot (screenshot-space ≈1387,27, vs. the CSS-space guess of ≈1638,32 which missed because it exceeded the screenshot's own 1465px width) produced a real, trusted click that opened the form on Orlando Sentinel. This screenshot-space-click technique is the fix for any future automation on these trusted-event-gated toggles, not just this one.

  **Opened search form — captured live on Orlando Sentinel (desktop, 1728px viewport):**
  - Container (`.search-form.header-search`): `position: absolute`, full-width (**1728px**), **64px** tall, sits directly below the header's icon row (`y: 64`, matching the corrected Utility Bar height) — `z-index: 100`.
  - Background: `#FBFBFB` (`rgb(251, 251, 251)`) — same off-white already used elsewhere in the header.
  - Box-shadow: `0 3px 3px rgba(0,0,0,0.25)` — identical to the header's own scrolled-state shadow, already documented elsewhere in this file.
  - Input wrapper (`.input-wrapper`): transparent background, flex, 62px tall, starts at `x: 43`.
  - Text input (`input[name="s"]`): placeholder "Type your search", `15px` font, dark text (`rgb(31, 30, 28)` ≈ `color/base/ink`), left-aligned, spans most of the bar's width (**1510px**), `19.5px 4.5px` padding, starts at `x: 77, y: 66`.
  - Submit button (`.search-button`): right-aligned (`x: 1591, y: 81`), **75×32px**, background `rgb(23, 118, 196)` (`#1776C4`-ish, matches Orlando Sentinel's brand primary blue), white **600**-weight text, **5px** border-radius, `1px 6px` padding, label "Search". Note 2026-10-01: buttons are 4px (`radius/sm`); this 5px is production drift (design-vs-production entry 7).
  - **Resolved — dimming backdrop found:** it's not a DOM element at all, which is why `[class*="backdrop"]`/`[class*="overlay"]` selector searches never found it — it's a **CSS-generated pseudo-element**, `body::before`. Confirmed via `getComputedStyle(document.body, '::before')`: `content: " "`, `background: rgba(0, 0, 0, 0.5)`, `position: fixed`, covers the full viewport (`top/left/right/bottom: 0`), `z-index: 10000` (above the search form's own `z-index: 100`), `pointer-events: auto` (consistent with click-outside-to-dismiss, though dismiss-on-click wasn't separately tested). Worth remembering for any future "why can't I find this overlay in the DOM" moment on this theme — check pseudo-elements, not just elements.
  - Confirmed live on Orlando Sentinel; per Karl, the same shared-theme mechanism applies identically on Chicago Tribune, Denver Post, and OC Register (consistent with every other shared-theme structural finding in this doc) — not independently re-verified per-site, taken as confirmed rather than assumed.

  **Same pattern re-confirmed at mobile/collapsed width (360px CSS viewport, i.e. the ≤1039px Collapsed Header variant):** the search icon in the collapsed icon row (hamburger + logo + account + search) opens the identical form, same mechanism, scaled to the narrower viewport rather than restructured:
  - Container: `360px` wide (full-bleed), **64px** tall, same `#FBFBFB` background, same `0 3px 3px rgba(0,0,0,0.25)` shadow, same `z-index: 100` — but now has `10px` padding on the form itself (desktop had `0px`).
  - Text input: **288px** wide, `20.8px 4.8px` padding (desktop was `19.5px 4.5px` — near-identical, likely a sub-pixel rounding difference from the different viewport width rather than an intentional change).
  - Submit button: **62×32px** (vs. 75×32px on desktop — same height, narrower to fit), identical blue fill/white 600-weight text/5px radius/label.
  - The `body::before` dimming backdrop is present and identical in mechanism at this width too (confirmed same computed styles, scaled to the 360×740 viewport).
  - **Conclusion:** the search form is one component that scales fluidly across breakpoints (full-bleed width, fixed 64px height, same colors/shadow/radius) — it does not need a separate "Collapsed" variant with different structure, just a width-scaling instance of the same component. This simplifies the eventual Figma build.


---

## 7. Methodology notes

- All page loads given a minimum 10-second wait before scraping, per standing project rule
- Breakpoint and theme-color findings were confirmed by reading literal CSS source (stylesheet rules and filenames), not inferred from screenshots
- Mobile/tablet viewports tested via the user's own Chrome DevTools device toolbar (manual, since this session's browser automation cannot drive DevTools itself or resize the real window's viewport)
- Logged-in states required the user to log in directly; this session never enters credentials
- Obituaries findings (§5.4) used `getComputedStyle`/`getBoundingClientRect` via direct JS execution in the live page, not screenshots — consistent with the rest of this audit
- A `resize_window` browser tool exists this session, but resizing the window did not change the page's actual `window.innerWidth` on the live site (stayed fixed) — so breakpoint testing still needs the user's own DevTools device toolbar, same limitation as the original audit
- **Standing rule, added 2026-08-28 (Karl):** any time this audit needs to look at a different screen size going forward, prompt Karl to change the size manually on his end (e.g. Chrome DevTools' device toolbar with a real device profile) rather than reaching for this session's own resize tooling. This isn't just a workaround for the `resize_window` limitation above — a real device profile (like the Galaxy S8 test in §5.5) also spoofs User-Agent Client Hints (`navigator.userAgentData.mobile`, etc.), which some site behavior depends on and a plain window resize does not touch. So even if a future tooling update makes `resize_window` change the viewport, the device-profile step still needs to come from Karl's own browser, not this session's automation.

---

## 8. Should-be vs. as-built — the standing policy for reconciling reference files against production

This project already ran into this exact tension once before: `tokens/colors/color-tokens-decision-log.md` models colors as "should-be" values sourced from the Color Styles page, and for Endless Tributes specifically carries a "Production comparison" column flagging which values are a live match, which have drifted, and which are retired/not-found-live. Extending that same pattern to components, formally, going forward:

**The rule of thumb:** structure comes from the idealized reference; content and existence come from the live audit.

- **Which states/variants exist at all** (e.g., that `UserType` has 7 values, that a payment-issue `alert` status exists, that there's a `groupSub`/`GroupAnon` tier) — default to the reference file. A forward-looking design system is supposed to define target states production hasn't necessarily built yet; that's the point of having one, and it's not our job to shrink it down to only what's live today.
- **What a given state actually contains, or whether it's real today** (exact copy, real item counts, real numbers like "Gift articles remaining: 6," whether logged-out really shows two header buttons at this breakpoint) — always prefer a live audit over the reference file's placeholder content, and mark clearly when something is reference-only because it hasn't been checked, or actively couldn't be checked, live.
- Every component and every variant gets a one-line **audit status**, recorded in two places: as a short note in this doc's content tables/lists (already the pattern used in §5.5/§5.6), and as the literal Figma component **description** field on the built node, so anyone opening the file — not just this doc — sees it. Suggested vocabulary, kept short and consistent:
  - **Confirmed live** — real content from a real audited site, name the site(s)
  - **Partially confirmed** — some sub-parts audited live, others not (e.g. nonSub's menu content is reference-only, but its ad-visible status will need its own separate check)
  - **Reference-only / target** — exists in the idealized design file, no live pilot site confirmed to have it yet; still worth building as the system's intended direction, just don't hand it to engineering as "this is what site X does today"
  - **Drifted** — a live site has it, but the real content differs from the reference file's should-be version (the Endless Tributes precedent)
- This same rule already explains an earlier decision without us naming it as a policy yet: choosing the audited 1039px breakpoint over the reference file's declared tablet tier was "prefer live content over reference content" in miniature. Worth treating as the same policy, not a one-off.
