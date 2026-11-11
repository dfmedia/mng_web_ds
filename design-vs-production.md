# Design vs. Production — Engineering Handoff

**Purpose:** A running list of every place live production has been found diverging from the Figma design-system spec, or where something was explicitly flagged as needing engineering (or legal) attention. Figma is the source of truth for these systems; when production disagrees, the fix belongs here as an engineering item rather than being silently absorbed into design tokens. Each entry says where the drift is, what Figma says vs. what's live, and what engineering should do about it.

**Color fixes checklist (Google Sheet, one row per fix with a Done checkbox):** [MNG color fixes checklist](https://docs.google.com/spreadsheets/d/17oRvVmGWZgnfvKzupvgX7SEtA9b-uK6guqyufM4bxBk/edit). The same rows are in `tokens/colors/mng-colors-fixes.csv`.

**Contents**

- **Icons**
  - [1. Icon font — mismatches with the Figma icon page, dead and duplicate glyphs, and known missing icons](#1-icon-font--mismatches-with-the-figma-icon-page-dead-and-duplicate-glyphs-and-known-missing-icons)
- **Fonts**
  - [2. Font fallbacks — Helvetica instead of the design stacks (all sites)](#2-font-fallbacks--helvetica-instead-of-the-design-stacks-all-sites)
- **Colors**
  - [3. Color Tokens — Universal Grays and Alert colors (all three themes)](#3-color-tokens--universal-grays-and-alert-colors-all-three-themes)
  - [4. Color Tokens — Endless Tributes (obituaries) palette](#4-color-tokens--endless-tributes-obituaries-palette)
  - [5. Color Tokens — theme and sub-theme color fixes (every publication)](#5-color-tokens--theme-and-sub-theme-color-fixes-every-publication)
  - [37. Check box — white checkmark on primary-lighter fails 3:1 (The Mercury News + East Bay Times)](#37-check-box--white-checkmark-on-primary-lighter-fails-31-the-mercury-news--east-bay-times)
- **Spacing, radius and breakpoints**
  - [6. Spacing — 10px and 14px values off the 4/8 grid](#6-spacing--10px-and-14px-values-off-the-48-grid)
  - [7. Radius — buttons are 4px; 5px on a button is drift](#7-radius--buttons-are-4px-5px-on-a-button-is-drift)
  - [8. Breakpoints off the official sets — WordPress themes, trust indicators, digisubs (all 6 sites)](#8-breakpoints-off-the-official-sets--wordpress-themes-trust-indicators-digisubs-all-6-sites)
- **Masthead and navigation**
  - [9. Masthead — nav overflow, article scrolled-state headline and nav bottom border](#9-masthead--nav-overflow-article-scrolled-state-headline-and-nav-bottom-border)
  - [10. Navigation menus — section menu drawer, avatar, hidden duplicate links and device-class timing](#10-navigation-menus--section-menu-drawer-avatar-hidden-duplicate-links-and-device-class-timing)
  - [11. Account menu — dropdown shadow isn't the design token](#11-account-menu--dropdown-shadow-isnt-the-design-token)
  - [12. Homepage tabs (World Cup tabs) — font, colors, spacing and breakpoint off the design system](#12-homepage-tabs-world-cup-tabs--font-colors-spacing-and-breakpoint-off-the-design-system)
  - [13. Breaking News bar — Denver Post uses primary-lighter instead of secondary](#13-breaking-news-bar--denver-post-uses-primary-lighter-instead-of-secondary)
  - [36. Footer — legal links fail WCAG AA contrast in the design (URGENT)](#36-footer--legal-links-fail-wcag-aa-contrast-in-the-design-urgent)
- **Homepage blocks**
  - [14. Section title (eyebrow) — color, underline and spacing don't match the design](#14-section-title-eyebrow--color-underline-and-spacing-dont-match-the-design)
  - [15. Section Highlight block — Denver Post shows 4 headline items instead of 3](#15-section-highlight-block--denver-post-shows-4-headline-items-instead-of-3)
  - [16. Article card / teaser — layout rules, excerpt color and image fit](#16-article-card--teaser--layout-rules-excerpt-color-and-image-fit)
  - [17. Zone 1 slideshow (gallery lead) — type, spacing and colors off the design tokens; slide count not announced](#17-zone-1-slideshow-gallery-lead--type-spacing-and-colors-off-the-design-tokens-slide-count-not-announced)
  - [18. Load More / Show More Photos — notch off center and colors off the design tokens](#18-load-more--show-more-photos--notch-off-center-and-colors-off-the-design-tokens)
  - [19. Blueconic Block (was Most Popular) — resolved: the design now matches production](#19-blueconic-block-was-most-popular--resolved-the-design-now-matches-production)
  - [20. Video carousel ("Videos from @OCRegister") — fixed-height iframe leaves ~200px of unused blank space at narrow (340–360px) widths](#20-video-carousel-videos-from-ocregister--fixed-height-iframe-leaves-200px-of-unused-blank-space-at-narrow-340360px-widths)
  - [21. Upcoming Events (CitySpark widget) — font family](#21-upcoming-events-cityspark-widget--font-family)
  - [22. Sponsored content badge — needs to be fixed in production](#22-sponsored-content-badge--needs-to-be-fixed-in-production)
- **Article page**
  - [23. Article breadcrumbs — label font family and text color](#23-article-breadcrumbs--label-font-family-and-text-color)
  - [35. Article "type of work" popup — should be the Toggletip](#35-article-type-of-work-popup--should-be-the-toggletip)
- **Obituaries**
  - [24. Obituaries masthead — shadow and bottom border don't match the main masthead](#24-obituaries-masthead--shadow-and-bottom-border-dont-match-the-main-masthead)
  - [25. Obituaries navigation — hamburger and "All Sections" both visible at desktop width](#25-obituaries-navigation--hamburger-and-all-sections-both-visible-at-desktop-width)
  - [26. Obituaries page CTA button — should be Button Primary, Default (Chicago Tribune, Denver Post)](#26-obituaries-page-cta-button--should-be-button-primary-default-chicago-tribune-denver-post)
  - [27. Obituaries — breakpoints that don't match the WordPress grid (for the CMS team)](#27-obituaries--breakpoints-that-dont-match-the-wordpress-grid-for-the-cms-team)
- **Ads and page layout**
  - [28. Ad slots — sizes, lazy registration, disclosure label and mobile adhesion](#28-ad-slots--sizes-lazy-registration-disclosure-label-and-mobile-adhesion)
  - [29. Main content container width — Chicago Tribune vs. Denver Post](#29-main-content-container-width--chicago-tribune-vs-denver-post)
- **Reader Dashboard**
  - [30. Reader Dashboard — Typography (2026-09-10)](#30-reader-dashboard--typography-2026-09-10)
  - [31. Reader Dashboard — Modal](#31-reader-dashboard--modal)
  - [32. Reader Dashboard — Disclosure](#32-reader-dashboard--disclosure)
  - [33. Reader Dashboard masthead — shows the top nav-links row and "TRENDING:" bar, which the design excludes](#33-reader-dashboard-masthead--shows-the-top-nav-links-row-and-trending-bar-which-the-design-excludes)
  - [34. Reader Dashboard — breakpoints (questions for DigiScrum)](#34-reader-dashboard--breakpoints-questions-for-digiscrum)
  - [38. Reader Dashboard — Subscription Access role picker: Button ActionMenu replaced by Dropdown Menu](#38-reader-dashboard--subscription-access-role-picker-button-actionmenu-replaced-by-dropdown-menu)
- [Notes (reading live colors, renumbering, removed entries)](#notes)

---

## 1. Icon font — mismatches with the Figma icon page, dead and duplicate glyphs, and known missing icons

**Found:** 2026-08-28 to 2026-08-31, icon font audit (`components/icons.md` §3, §5, §6). Added here 2026-09-25: `icons.md` said these were in this handoff, but they had never been logged.

**Figma spec (source of truth):** the `Icons` component set in the main MNG Web Design System file (node `4693:5`, 95 variants) and the documented icon list on its Icons page.

**Production (live icon font, checked on chicagotribune.com):**

| Item | What's wrong | Action |
|---|---|---|
| `google-plus` | Still in the live font. Google+ was shut down years ago, and the icon isn't documented. | Remove from the font. |
| `mng-podcast1` | Same codepoint (`e902`) as `android` — a font-build duplicate, not a separate icon. | Remove the alias. |
| `grid2` | Renders the same gift-box glyph as `gift2`, not a grid. The requested "grid" icon has not shipped. | Remove the alias; ship the real `grid` icon (artwork exists in Figma). |
| U+E941 (unused second padlock) | A second closed padlock, drawn off-center to the left, is in the live font with no class. Nothing can show it. The padlock in use is `icon-padlock` (U+EA26, centered), confirmed live on ocregister.com 2026-10-22. *Added 2026-10-22 (Karl).* | Remove the U+E941 glyph from the font. Keep `icon-padlock` (U+EA26). Already left out of the next font build (see 1.2). |
| `notification`, `notification2` | New outline and filled alert artwork is designed in Figma to replace the IcoMoon glyphs. The class names stay: both are in use (Reader Dashboard inline-message headings, Save Article modal). *Updated 2026-10-22: this is new artwork under the existing names, not two new icons.* | Replace the glyphs at U+E94D (`notification`, outline) and U+E94E (`notification2`, filled); keep the classes. See 1.2. |


**Updated 2026-10-08:** re-checked glyph by glyph against the Figma **Icon Categories** frame (main file, Icons | 2026.08.28, node `1412:13`) using the font extracted from ocregister.com (`tokens/icons/`). **All MNG sites use the same icon font** (Karl, 2026-10-08), so these findings apply everywhere. Of the 171 documented icons, 162 match production by name and glyph. Third-party vendor icons and the "Need to source/make/add" list are out of scope.

### 1.1 Mismatches between the Figma page and the production font

| Figma name | Production | Action |
|---|---|---|
| `grid2` | `icon-grid2` shows the gift glyph (U+E930, same as `gift2`). The Figma grid2 artwork (9 dots) **is in the font** at U+E932, with no class. | Point `icon-grid2` at U+E932. (Supersedes the 2026-08 note above that the grid hasn't shipped: the 9-dot glyph is there, just not wired up. The square-tile `grid` in Pending Updates is a different icon; see 20.2.) |
| `windows8` | `icon-windows8` shows warning2 (U+E986). The Windows logo is in the font at U+E987, with no class. | Point `icon-windows8` at U+E987. |
| `book3` | `icon-book3` points at U+0065 (the letter "e"). The closed book is in the font at U+E993, with no class. | Point `icon-book3` at U+E993. |
| `content_copy` | No class. The glyph is in the font at U+E921. | Add `icon-content_copy` (or the agreed name) → U+E921. |
| `ios_share` | No class. The glyph is in the font at U+E93A. | Add `icon-ios_share` → U+E93A. |
| ~~`home`, `menu7`, `enlarge7`, "iTunes / Apple Music"~~ | **Resolved 2026-10-22 (Karl): production names win.** These are `icon-home3`, `icon-hamburger`, `icon-enlarge` and `icon-music5`; the design system now uses those names. | None. |
| *(none)* | `icon-google-plus` (no glyph), `icon-mng-podcast1` (= android) and `icon-users4` (= user4) have no Figma entry. `google-plus` and `mng-podcast1` are in the table above; `users4` was set aside by Karl 2026-08-31. U+E941 (a second padlock) is in the font with no class and no Figma entry. | Remove the dead classes. U+E941: see the table above (remove, 2026-10-22). |

### 1.2 Next font build (updated 2026-10-22)

Karl updated the MNG IcoMoon project and exported it on 2026-10-22 (187 icons). None of these is in the production font yet. Engineering gets the font package directly from the MNG IcoMoon project when they're ready (Karl, 2026-10-23). Codepoints are in `tokens/icons/icons.json` (`nextFontBuild`); artwork is in `tokens/icons/svg-missing/`.

- **Add (17 new icons):** `plus-circle`, `plus-circle2`, `minus-circle`, `minus-circle2`, `list`, `grid` (square tiles), `crown`, `giving-hand`, `yield-filled`, `yield-outline`, `headphones`, `sort`, `sort2`, `sort-alpha-asc`, `sort-alpha-desc`, `filter3`, `filter4`.
- **New artwork, same class and codepoint:** `notification` (U+E94D, outline) and `notification2` (U+E94E, filled). Where they show today: `notification2` in the Reader Dashboard's inline-message headings (Saved Articles, Gifted Articles and Subscription pages; seen on Cañon City Daily Record 2026-10-21) and `notification` in the Save Article modal's "out of space" messages (`mng-digisubs` plugin CSS).
- **Production class names are kept.** The IcoMoon project was renamed to match production: `hamburger` (was `menu7`), `enlarge` (was `enlarge7`), `threads` (was `Threads-square`), `user4` (was `users4`). Every production class is in the export's CSS with the same codepoint. Not in it: the duplicates `icon-users4` and `icon-mng-podcast1` and the dead `icon-google-plus` (see the table above). New in it: `icon-content_copy` and `icon-ios_share` (see 1.1).
- **Removed:** U+E941, the unused second padlock (drawn off-center; never had a class). The centered `padlock` (U+EA26) stays.

**Status:** Open.

---

## 2. Font fallbacks — Helvetica instead of the design stacks (all sites)

**Found:** 2026-10-14, computed `font-family` on all 6 review sites (ocregister, denverpost, chicagotribune, orlandosentinel, canoncitydailyrecord, mcall): nav labels, section headers, card headlines, excerpts, footer and obituaries. **Team:** CMS (WordPress themes).

**Design** (main file, Fonts page, Font Styles and Fallbacks `2768:1051`; tokens `font.family.noto-sans` / `font.family.noto-serif`, CSS `--mng-font-family-noto-sans` / `-serif`):

| Stack | Design (should be) | Production |
|---|---|---|
| Sans (`$body`) | `"Noto Sans", "Helvetica Neue", Arial, sans-serif` | `"Noto Sans", Helvetica, sans-serif` |
| Serif (`$heading`) | `"Noto Serif", Georgia, "Times New Roman", serif` | `"Noto Serif", Helvetica, serif` |

The same two stacks apply on every theme; each theme only chooses which one its headings and body use. Obituaries follow the site's theme.

**Fix:** in the theme font-family definitions, replace `Helvetica` with **Helvetica Neue** (then Arial) in the sans stack (Karl, 2026-10-14), and use Georgia, then Times New Roman, in the serif stack instead of Helvetica. The fallbacks only show when Noto doesn't load, so nothing changes visually when the web fonts work.

**Status:** Open.

---

## 3. Color Tokens — Universal Grays and Alert colors (all three themes)

**Figma spec (source of truth):** the Universal Grays (`color/gray/*`) and Alert colors (`color/feedback/*`) in the main file's Colors collection, shown in the **Grays & Alerts** block of the Bold Coastal, Modern Earthy and Measured Vibrant theme style guides on the Color Pallets page (production beside them, red-dashed where it differs). Requested again in ticket CI-14848.

**Production (all 6 review sites, checked live 2026-10-19):** Bold Coastal, Modern Earthy and Measured Vibrant ship the same legacy grays, black body text and no alert colors, so every theme needs the same fixes. NEPA-PMP runs modernearthy.css and gets the Modern Earthy fixes.

| Universal (design) | Production, all 3 themes | Fix |
|---|---|---|
| base text = `gray-min` `#141414` | `#000000`, hard-coded (×66 in boldcoastal.css and measuredvibrant.css, ×72 in modernearthy.css) | Change body text from `#000000` to `#141414`. |
| `gray-min` `#141414` | `#0a0908` (`$gray-min`, compiled in; no CSS variable): ×97 boldcoastal.css, ×40 measuredvibrant.css; modernearthy.css mixes `#0a0908` ×40 and `#141414` ×45 | Replace `#0a0908` with `#141414`. |
| `gray-100` `#393938` | `--site-branding-gray-100` `#38322a` | Change the value (`:root`). |
| `gray-200` `#5e5d5c` | `--site-branding-gray-200` `#5d5b5a` | Change the value (`:root`). |
| `gray-300` `#838280` | `--site-branding-gray-300` `#9d9a98` | Change the value (`:root`). |
| `gray-400` `#a7a6a3` | `--site-branding-gray-400` `#aaa7a4` | Change the value (`:root`). |
| `gray-500` `#cccac7` | `--site-branding-gray-500` `#d7d6d2` | Change the value (`:root`). |
| `gray-600` `#f1efeb` | `--site-branding-gray-600` `#f1efeb` | None (matches). |
| `gray-max` `#ffffff` | `#ffffff` | None (matches). |
| Alert low-success `#2e8000`, medium `#856a00`, high-error `#cc2b27` | Not defined in any theme file | Add all three to every theme. |

**Background:** the production grays are CRUX Style Library's older `grayRoot/100–600` scale. Design keeps `color/gray/*` as the source of truth; `grayRoot` isn't a token (Karl, 2026-09-10). The theme-specific Near Black / White neutrals (Bold Coastal `#0a0908`, Modern Earthy `#1a1a1a`, Measured Vibrant `#1f1e1c`) are separate theme tokens and keep their "Replace with gray-min" notes in Figma.

**Status:** Open. These rows are also in `tokens/colors/mng-colors-fixes.csv`.

---

## 4. Color Tokens — Endless Tributes (obituaries) palette

**Figma spec (source of truth):** the 9 `color/tributes/*` variables in the main file's Colors collection (same value in every mode, because obituary pages look the same on every site), shown in the Endless Tributes style guide on the Color Pallets page. Requested in ticket CI-14848.

| Token | Hex |
|---|---|
| primary-lighter | `#f15f87` |
| primary-light | `#c00c3d` |
| primary ("Scarlet") | `#8d092d` |
| primary-dark | `#770000` (rgb 119, 0, 0) |
| primary-darker | `#4d0000` |
| secondary ("Sage") | `#b3bc9c` |
| tertiary ("Brown") | `#3a252b` |
| tan | `#a39c8a` |
| tan-light | `#e8e6e2` |

**Production (obituaries pages on all 6 review sites, checked live 2026-10-19; identical on every site and unchanged since 2026-09-10):**

| Color | Live | Fix |
|---|---|---|
| primary `#8d092d` | Rendered, through the old widget variable `--primary-obit` | Keep the color; replace `--primary-obit` with the Endless Tributes primary. |
| primary-light `#c00c3d` | Hover state of the primary button, through `--primary-obit-light` | Keep the color; replace `--primary-obit-light` with the Endless Tributes primary-light. |
| primary-lighter `#f15f87` | Not in any stylesheet | Add it. |
| primary-dark `#770000` | Not in any stylesheet | Add it. |
| primary-darker `#4d0000` | Not in any stylesheet | Add it. |
| Sage `#b3bc9c` | Declared as `--quaternary-obit`, not used on the pages checked | Replace `--quaternary-obit` with the Endless Tributes secondary (Sage). |
| Brown `#3a252b` | Hard-coded on `.obits-homepage-*`, not on the pages checked | None. |
| tan `#a39c8a` | Hard-coded (search filter button) | None. |
| tan-light `#e8e6e2` | Renders `#ecede7` | Change to `#e8e6e2`. |
| `--secondary-obit` `#946c82`, `--tertiary-obit` `#227db4` | Declared at `:root`, not part of the palette | Remove. |

**Remove the old obituaries widget variables from the code** (Figma: Shared Platform Reference style guide, "Obituaries Widget Colors (--*-obit vars) - NEED TO REMOVE THESE FROM CODE"). All five are still declared at `:root` on every site: `--primary-obit`, `--primary-obit-light`, `--secondary-obit`, `--tertiary-obit`, `--quaternary-obit`. Delete them all; the three that carry palette colors (`--primary-obit`, `--primary-obit-light`, `--quaternary-obit`) are replaced by the Endless Tributes colors above (same values), and `--secondary-obit` and `--tertiary-obit` have no replacement.

**Beige `#ccc7bc` on obituary article pages:** not a palette color, still live on Denver Post obituary articles (rechecked 2026-10-19 on two articles): the "Click here to Send Flowers" banner (`.obit-tribute-wrapper`, black text), the guestbook "Post Your Message" button (`.guestbook-form-submit`), and the "Upcoming events" and "Sign Guestbook" buttons when they show. Set in `styleArticleObit.min.css`. **Fix:** replace it with tan-light `#e8e6e2` (Karl, 2026-10-19).

**Ticket CI-14848:** its Endless Tributes, gray and alert values match the design. A comment (2026-10-19) corrects its primary-dark label to `rgb(119, 0, 0)` and the deprecated "Modern Vibrant" theme name.

**Status:** Open. These rows are also in `tokens/colors/mng-colors-fixes.csv`.

---

## 5. Color Tokens — theme and sub-theme color fixes (every publication)

**Source:** the production columns of the Color Pallets style guides, audited 2026-08-03 (PMP 2026-09-24, Hartford Courant 2026-09-25, NEPA and the disputed Tribune sites 2026-10-01, The Mercury News, East Bay Times, Chicago Tribune and Cañon City 2026-10-19).

**Figma spec (source of truth):** each theme's or sub-theme's design spec column on the Color Pallets page, and the matching Colors collection mode. Every row in the tables below is a red-dashed callout in that theme's "in Production" column. Fix production; don't change the tokens.

**How to read this:** every publication in the cluster audit (97) has its own section, ordered **theme → cluster → sub-theme → site** (Karl, 2026-10-19), with its full list of fixes. Each theme opens with its theme-file fixes, which are fixed once in the theme stylesheet; a site's own table repeats them so each site reads on its own. To check fixes off, use `tokens/colors/mng-colors-fixes.csv` (one row per fix, empty `done` column; the gray / alert fixes from entry 3 and the obituaries fixes from entry 4 come first, then these per-site fixes in the same order). Breaking News bar and Sponsored badge colors: entries 13 and 22. The same data is in `tokens/colors/mng-colors-sites.csv` (`engineering_fixes`), one file per site in `tokens/sites/`, and `$extensions.com.mng.mismatches` in `tokens/colors/mng-colors.tokens.json`. Sections and the index are generated by `scripts/colors-docs/build-color-docs.py`.

**Where to read colors live:** themed variables on `document.querySelector('#page')`, not `:root` (the Customizer override is scoped to `#page`; see the method note at the end of this doc).

**Most common gaps:** `--primary-lighter` isn't set on most themes (the page falls back to a shared default), and Measured Vibrant, its sub-themes and NEPA-PMP all render `--tertiary` as `#303F9F` instead of their design values.

**Status:** Open.

<!-- BEGIN per-site color fixes (generated by scripts/colors-docs/build-color-docs.py; edit notes in scripts/colors-docs/notes.json) -->

### Bold Coastal

Loads: `boldcoastal.css`. Figma mode: BoldCoastal. Production audited 2026-08-03.

**Theme-file fixes** (fix once in the theme stylesheet; they apply to every site below unless a sub-theme or site sets its own value):

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#1799a5` | `MISSING` (not set) | Define --primary-lighter: #1799a5 (boldcoastal.css, body). It isn't set today. |
| `--tertiary` | `#f4a700` | `#00838f` (Theme default (body)) | Change --tertiary from #00838f to #f4a700 (boldcoastal.css, body). |

#### Bold Coastal — Baltimore cluster

##### Sub-theme: Capital Gazette

Loads: `boldcoastal.css + Customizer override (div#page)`. Figma mode: none (not a Figma mode). Production audited 2026-08-03.

**Capital Gazette** (capitalgazette.com) · sub-theme Capital Gazette · 3 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#3c6f95` | `#285f87` (div#page override) | Change --primary-lighter from #285f87 to #3c6f95 (Customizer, div#page). |
| `--primary-dark` | `#004171` | `#004e87` (div#page override) | Change --primary-dark from #004e87 to #004171 (Customizer, div#page). |
| `--primary-darker` | `#04365a` | `#014a52` (Theme default (inherited)) | Change --primary-darker from #014a52 to #04365a (Customizer, div#page). |

##### Sub-theme: The Baltimore Sun

Loads: `boldcoastal.css + Customizer override (div#page)`. Figma mode: none (not a Figma mode).

> Uses its documented Figma styles as is. No production comparison is tracked.

**The Baltimore Sun** (baltimoresun.com) · sub-theme The Baltimore Sun · 0 fixes

No fixes.

#### Bold Coastal — BANG cluster

##### Sub-theme: The Mercury News + East Bay Times

Loads: `boldcoastal.css + Customizer override (div#page)` on both sites. Figma mode: The Mercury News + East Bay Times (the two sites had identical design palettes and were combined into one mode and one style guide on 2026-10-19). Production audited 2026-08-03, each site separately; both Customizers rechecked live 2026-10-19.

Why the two sites differ (checked live 2026-10-19): both Customizers set the same 7 values except `--secondary`. East Bay Times sets `#eeff41`, the stock Modern Earthy / Measured Vibrant secondary, so it was copied in by mistake, not a brand choice (Karl, 2026-10-19). On these sites `--secondary` colors the breaking-news bar, the sponsored flag and poll links.

`--subsite-custom` is `#0097a7` in design since 2026-10-19 (Karl): it is the Bold Coastal value, and both sites already render it from `boldcoastal.css` (body), so there is no fix. It was blank in the old 2025 guide for these two sites.

**East Bay Times** (eastbaytimes.com) · sub-theme The Mercury News + East Bay Times · 1 fix

| Token | Design | Production | Fix |
|---|---|---|---|
| `--secondary` | `#ffc518` | `#eeff41` (Customizer (div#page)) | Change --secondary from #eeff41 to #ffc518 (Customizer, div#page). East Bay Times only; The Mercury News already matches. Rechecked live 2026-10-19: the East Bay Times Customizer sets #eeff41 explicitly, the stock Modern Earthy / Measured Vibrant secondary, copied in by mistake (Karl, 2026-10-19). |

**The Mercury News** (mercurynews.com) · sub-theme The Mercury News + East Bay Times · 0 fixes

No fixes.

#### Bold Coastal — Denver cluster

##### Sub-theme: Denver Post

Loads: `boldcoastal.css + Customizer override (div#page)`. Figma mode: DenverPost. Production audited 2026-08-03.

**The Denver Post** (denverpost.com) · sub-theme Denver Post · 3 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#c81632` | `#af1628` | Change --primary-lighter from #af1628 to #c81632 (Customizer, div#page). |
| `--primary-light` | `#af1628` | `#c81632` | Change --primary-light from #c81632 to #af1628 (Customizer, div#page). |
| `--tertiary` | `#ffc518` | `#a13b1e` | Change --tertiary from #a13b1e to #ffc518 (Customizer, div#page). |

#### Bold Coastal — SCNG cluster

**Orange County Register** (ocregister.com) · theme Bold Coastal · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#1799a5` | `MISSING` (not set) | Define --primary-lighter: #1799a5 (boldcoastal.css, body). It isn't set today. |
| `--tertiary` | `#f4a700` | `#00838f` (Theme default (body)) | Change --tertiary from #00838f to #f4a700 (boldcoastal.css, body). |

**Torrance Daily Breeze** (dailybreeze.com) · theme Bold Coastal · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#1799a5` | `MISSING` (not set) | Define --primary-lighter: #1799a5 (boldcoastal.css, body). It isn't set today. |
| `--tertiary` | `#f4a700` | `#00838f` (Theme default (body)) | Change --tertiary from #00838f to #f4a700 (boldcoastal.css, body). |

#### Bold Coastal — Sonoma cluster

##### Sub-theme: Petaluma Argus-Courier

Loads: `boldcoastal.css + Customizer override (div#page)`. Figma mode: Petaluma Argus-Courier. Production audited 2026-08-03.

**Petaluma Argus-Courier** (petalumanews.com) · sub-theme Petaluma Argus-Courier · 1 fix

| Token | Design | Production | Fix |
|---|---|---|---|
| `--secondary` | `#ffea00` | `MISSING` (not set) | Define --secondary: #ffea00 (Customizer, div#page). It isn't set today. |

##### Sub-theme: The Press Democrat

Loads: `boldcoastal.css + Customizer override (div#page)`. Figma mode: The Press Democrat. Production audited 2026-08-03.

`--subsite-custom` `#eeeeee` is the sub-theme's own design value since 2026-10-19 (Karl): it overrides the Bold Coastal `#0097a7` and matches production, so there is no fix.

**Sonoma County Gazette** (sonomacountygazette.com) · sub-theme The Press Democrat · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--secondary` | `#ffea00` | `MISSING` (not set) | Define --secondary: #ffea00 (Customizer, div#page). It isn't set today. |
| `--tertiary` | `#006fb7` | `#d10f14` (div#page override) | Change --tertiary from #d10f14 to #006fb7 (Customizer, div#page). |

**The Press Democrat** (pressdemocrat.com) · sub-theme The Press Democrat · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--secondary` | `#ffea00` | `MISSING` (not set) | Define --secondary: #ffea00 (Customizer, div#page). It isn't set today. |
| `--tertiary` | `#006fb7` | `#d10f14` (div#page override) | Change --tertiary from #d10f14 to #006fb7 (Customizer, div#page). |

##### Sub-theme: The Sonoma Index-Tribune

Loads: `boldcoastal.css + Customizer override (div#page)`. Figma mode: The Sonoma Index-Tribune. Production audited 2026-08-03.

**The Sonoma Index-Tribune** (sonomanews.com) · sub-theme The Sonoma Index-Tribune · 1 fix

| Token | Design | Production | Fix |
|---|---|---|---|
| `--secondary` | `#ffea00` | `MISSING` (not set) | Define --secondary: #ffea00 (Customizer, div#page). It isn't set today. |

#### Bold Coastal — St. Paul cluster

##### Sub-theme: St. Paul Pioneer Press

Loads: `boldcoastal.css + Customizer override (div#page)`. Figma mode: St. Paul Pioneer Press. Production audited 2026-08-03.

`--subsite-custom` `#ffffff` is the sub-theme's own design value since 2026-10-19 (Karl): it overrides the Bold Coastal `#0097a7` and matches production, so there is no fix.

**St. Paul Pioneer Press** (twincities.com) · sub-theme St. Paul Pioneer Press · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#0187e0` | `MISSING` (not set) | Define --primary-lighter: #0187e0 (Customizer, div#page). It isn't set today. |
| `--primary-darker` | `#005892` | `MISSING` (not set) | Define --primary-darker: #005892 (Customizer, div#page). It isn't set today. |
| `--secondary` | `#ffea00` | `MISSING` (not set) | Define --secondary: #ffea00 (Customizer, div#page). It isn't set today. |
| `--tertiary` | `#f4a700` | `MISSING` (not set) | Define --tertiary: #f4a700 (Customizer, div#page). It isn't set today. |

### Modern Earthy

Loads: `modernearthy.css`. Figma mode: ModernEarthy. Production audited 2026-08-03.

**Theme-file fixes** (fix once in the theme stylesheet; they apply to every site below unless a sub-theme or site sets its own value):

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

#### Modern Earthy — 21C Michigan cluster

##### Sub-theme: 21C Michigan Sites (Combined)

Loads: `modernearthy.css + Customizer override (div#page), identical on all 4 sites`. Figma mode: 21C Michigan Sites (Combined). Production audited 2026-08-03.

**Daily Oakland Press** (theoaklandpress.com) · sub-theme 21C Michigan Sites (Combined) · 3 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#3e7cb2` | `MISSING` (not set) | Define --primary-lighter: #3e7cb2 (Customizer, div#page). It isn't set today. |
| `--primary-dark` | `#32476c` | `#3a527a` (div#page override) | Change --primary-dark from #3a527a to #32476c (Customizer, div#page). |
| `--primary-darker` | `#2c3b55` | `#003d66` (Theme default (inherited)) | Change --primary-darker from #003d66 to #2c3b55 (Customizer, div#page). |

**Macomb Daily** (macombdaily.com) · sub-theme 21C Michigan Sites (Combined) · 3 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#3e7cb2` | `MISSING` (not set) | Define --primary-lighter: #3e7cb2 (Customizer, div#page). It isn't set today. |
| `--primary-dark` | `#32476c` | `#3a527a` (div#page override) | Change --primary-dark from #3a527a to #32476c (Customizer, div#page). |
| `--primary-darker` | `#2c3b55` | `#003d66` (Theme default (inherited)) | Change --primary-darker from #003d66 to #2c3b55 (Customizer, div#page). |

**Mount Pleasant Morning Sun** (themorningsun.com) · sub-theme 21C Michigan Sites (Combined) · 3 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#3e7cb2` | `MISSING` (not set) | Define --primary-lighter: #3e7cb2 (Customizer, div#page). It isn't set today. |
| `--primary-dark` | `#32476c` | `#3a527a` (div#page override) | Change --primary-dark from #3a527a to #32476c (Customizer, div#page). |
| `--primary-darker` | `#2c3b55` | `#003d66` (Theme default (inherited)) | Change --primary-darker from #003d66 to #2c3b55 (Customizer, div#page). |

**The News-Herald (Southgate)** (thenewsherald.com) · sub-theme 21C Michigan Sites (Combined) · 3 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#3e7cb2` | `MISSING` (not set) | Define --primary-lighter: #3e7cb2 (Customizer, div#page). It isn't set today. |
| `--primary-dark` | `#32476c` | `#3a527a` (div#page override) | Change --primary-dark from #3a527a to #32476c (Customizer, div#page). |
| `--primary-darker` | `#2c3b55` | `#003d66` (Theme default (inherited)) | Change --primary-darker from #003d66 to #2c3b55 (Customizer, div#page). |

#### Modern Earthy — 21C New York cluster

**Kingston Daily Freeman** (dailyfreeman.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Oneida Daily Dispatch** (oneidadispatch.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Saratogian** (saratogian.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**The Troy Record** (troyrecord.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

#### Modern Earthy — 21C Ohio cluster

**Lake County News-Herald** (news-herald.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Lorain Morning Journal** (morningjournal.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

#### Modern Earthy — 21C Pennsylvania cluster

**Delaware County Times** (delcotimes.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Main Line Media News** (mainlinemedianews.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Norristown Times Herald** (timesherald.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Reading Eagle** (readingeagle.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**The Lansdale Reporter** (thereporteronline.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**The Pottstown Mercury** (pottsmerc.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Trentonian** (trentonian.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**West Chester Daily Local** (dailylocal.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

#### Modern Earthy — BANG cluster

**Silicon Valley** (siliconvalley.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

#### Modern Earthy — Boston cluster

**Nashoba Valley Voice** (nashobavalleyvoice.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

##### Sub-theme: Boston Herald

Loads: `modernearthy.css + Customizer override (div#page)`. Figma mode: Boston Herald. Production audited 2026-08-03.

**Boston Herald** (bostonherald.com) · sub-theme Boston Herald · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#3c81c7` | `MISSING` (not set) | Define --primary-lighter: #3c81c7 (Customizer, div#page). It isn't set today. |
| `--primary-darker` | `#0f496f` | `MISSING` (not set) | Define --primary-darker: #0f496f (Customizer, div#page). It isn't set today. |
| `--secondary` | `#eeff41` | `MISSING` (not set) | Define --secondary: #eeff41 (Customizer, div#page). It isn't set today. |
| `--tertiary` | `#ff5722` | `MISSING` (not set) | Define --tertiary: #ff5722 (Customizer, div#page). It isn't set today. |

#### Modern Earthy — Colorado Weeklies cluster

##### Sub-theme: NEPA-PMP

Loads: `modernearthy.css + color override on body: site-pmp style.min.css (PMP sites) or each NEPA site's own site plugin (site-citizensvoice, site-thetimes-tribune, site-wcexaminer, site-republicanherald, site-standardspeaker), identical values`. Figma mode: NEPA-PMP. Production audited 2026-10-01.

> One color sub-theme for two groups: the 19 PMP sites (shared site-pmp stylesheet) and the 5 NEPA sites (each site's own plugin stylesheet). Verified live 2026-10-01: NEPA sets the same six variables on body with identical values, and renders the same type as PMP.

Greeley Tribune's `div#page` override of `--primary`, `--primary-light` and `--primary-dark` is a documented exception (Karl, 2026-09-30): it's noted under the NEPA-PMP style guide without red outlines and needs no fix.

**Colorado Daily** (coloradodaily.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Julesburg Advocate** (julesburgadvocate.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Lamar Ledger** (lamarledger.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

#### Modern Earthy — Fitch cluster

**Lowell Sun** (lowellsun.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Sentinel & Enterprise (Fitchburg)** (sentinelandenterprise.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

#### Modern Earthy — NEPA cluster

##### Sub-theme: NEPA-PMP

Sub-theme notes: see its first cluster above.

**Republican Herald (Pottsville)** (republicanherald.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Scranton Times-Tribune** (thetimes-tribune.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Standard-Speaker (Hazleton)** (standardspeaker.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**The Citizens' Voice (Wilkes-Barre)** (citizensvoice.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Wyoming County Examiner** (wcexaminer.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

#### Modern Earthy — PMP cluster

##### Sub-theme: NEPA-PMP

Sub-theme notes: see its first cluster above.

**Boulder Daily Camera** (dailycamera.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Greeley Tribune** (greeleytribune.com) · sub-theme NEPA-PMP · 2 fixes

Documented exception (no fix): `--primary` `#536e7f`, `--primary-light` `#5b7b8b`, `--primary-dark` `#44687f`.

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Longmont Times-Call** (timescall.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Loveland Reporter-Herald** (reporterherald.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

#### Modern Earthy — PMP Weeklies cluster

##### Sub-theme: NEPA-PMP

Sub-theme notes: see its first cluster above.

**Akron News-Reporter** (akronnewsreporter.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**BoCoPreps** (bocopreps.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Broomfield Enterprise** (broomfieldenterprise.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Brush News-Tribune** (brushnewstribune.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Buffzone** (buffzone.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Cañon City Daily Record** (canoncitydailyrecord.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Colorado Hometown Weekly** (coloradohometownweekly.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Estes Park Trail-Gazette** (eptrail.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Fort Morgan Times** (fortmorgantimes.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**South Platte Sentinel** (southplattesentinel.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**Sterling Journal-Advocate** (journal-advocate.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

**The Burlington Record** (burlington-record.com) · sub-theme NEPA-PMP · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits modernearthy.css :root default #47b6ff) | Define --primary-lighter: #717fd1 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (site-pmp / NEPA site override (body)) | Change --tertiary from #303f9f to #eb5300 (site-pmp style.min.css on PMP sites, each NEPA site plugin on NEPA sites; body). |

#### Modern Earthy — SCNG cluster

**Excelsior California** (excelsiorcalifornia.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**LA Daily News** (dailynews.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Pasadena Star-News** (pasadenastarnews.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Press Enterprise (Riverside)** (pressenterprise.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**San Bernardino Sun** (sbsun.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**San Gabriel Valley Tribune** (sgvtribune.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

**Whittier Daily News** (whittierdailynews.com) · theme Modern Earthy · 4 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#fe521e` | `MISSING` (not set) | Define --primary-lighter: #fe521e (modernearthy.css, body). It isn't set today. |
| `--primary` | `#cc3300` | `#bc3b10` (Theme default (body)) | Change --primary from #bc3b10 to #cc3300 (modernearthy.css, body). |
| `--primary-darker` | `#a52804` | `MISSING` (not set) | Define --primary-darker: #a52804 (modernearthy.css, body). It isn't set today. |
| `--tertiary` | `#00828f` | `#ff5722` (Theme default (body)) | Change --tertiary from #ff5722 to #00828f (modernearthy.css, body). |

#### Modern Earthy — Tribune cluster

##### Sub-theme: Daily Herald

New palette, added 2026-10-15 (Karl). Planned delivery: `modernearthy.css + Customizer override (div#page)`. Figma mode: Daily Herald (since 2026-10-19). The spec is that mode, the "Daily Herald — Style Guide" section on the Color Pallets page and `tokens/themes/daily-herald.tokens.json`.

No fixes yet: dailyherald.com still runs on Everyware (verified 2026-09-24), so there is no production column to compare. When it moves to Modern Earthy, set all ten values in the Customizer (`div#page`): `--primary-lighter` `#3b97dc`, `--primary-light` `#087abe`, `--primary` `#0072b4`, `--primary-dark` `#0066a2`, `--primary-darker` `#0e598b`, `--secondary` `#eeff41`, `--tertiary` `#ff5722` (`--near-black`, `--white` and `--nav-text` use the Modern Earthy defaults `#1a1a1a` / `#fafafa` / `#1a1a1a`). Then audit it like the other sub-themes.

**Daily Herald** (dailyherald.com) · sub-theme Daily Herald · 0 fixes

No fixes.

##### Sub-theme: Morning Call

Loads: `modernearthy.css + Customizer override (div#page)`. Figma mode: Morning Call. Production audited 2026-08-03.

Production's `--primary` (`#014b78`) is the design's `primary-dark`: the Customizer ramp looks shifted one step. Fix it as listed (design is the source of truth).

**The Morning Call** (mcall.com) · sub-theme Morning Call · 6 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#5399c4` | `MISSING` (not set) | Define --primary-lighter: #5399c4 (Customizer, div#page). It isn't set today. |
| `--primary-light` | `#27719f` | `#337ca9` (div#page override) | Change --primary-light from #337ca9 to #27719f (Customizer, div#page). |
| `--primary` | `#166291` | `#014b78` (div#page override) | Change --primary from #014b78 to #166291 (Customizer, div#page). |
| `--primary-darker` | `#00385a` | `MISSING` (not set) | Define --primary-darker: #00385a (Customizer, div#page). It isn't set today. |
| `--secondary` | `#eeff41` | `MISSING` (not set) | Define --secondary: #eeff41 (Customizer, div#page). It isn't set today. |
| `--tertiary` | `#ff5722` | `MISSING` (not set) | Define --tertiary: #ff5722 (Customizer, div#page). It isn't set today. |

### Measured Vibrant

Loads: `measuredvibrant.css`. Figma mode: MeasuredVibrant. Production audited 2026-08-03.

**Theme-file fixes** (fix once in the theme stylesheet; they apply to every site below unless a sub-theme or site sets its own value):

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

#### Measured Vibrant — BANG cluster

**Marin Independent Journal** (marinij.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

#### Measured Vibrant — Norcal cluster

**Chico Enterprise-Record** (chicoer.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Eureka Times-Standard** (times-standard.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Lake County Record-Bee** (record-bee.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Monterey Herald** (montereyherald.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Oroville Mercury-Register** (orovillemr.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Red Bluff Daily News** (redbluffdailynews.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Santa Cruz Sentinel** (santacruzsentinel.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Ukiah Daily Journal** (ukiahdailyjournal.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Vacaville Reporter** (thereporter.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Vallejo Times-Herald** (timesheraldonline.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Woodland Daily Democrat** (dailydemocrat.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

#### Measured Vibrant — Norcal Weeklies cluster

**Fort Bragg Advocate-News** (advocate-news.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Paradise Post** (paradisepost.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**The Mendocino Beacon** (mendocinobeacon.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**The Willits News** (willitsnews.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

#### Measured Vibrant — SCNG cluster

**Inland Valley Daily Bulletin** (dailybulletin.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Long Beach Press-Telegram** (presstelegram.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**Redlands Daily Facts** (redlandsdailyfacts.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**San Diego Union-Tribune** (sandiegouniontribune.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

#### Measured Vibrant — Tribune cluster

**Daily Press** (dailypress.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**New York Daily News** (nydailynews.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

**The Virginian-Pilot** (pilotonline.com) · theme Measured Vibrant · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

##### Sub-theme: Chicago Tribune

Loads: `measuredvibrant.css (Measured Vibrant values; own Figma mode)`. Figma mode: Chicago Tribune.

> No style guide of its own; audited under Measured Vibrant, whose production callouts apply.

**Chicago Tribune** (chicagotribune.com) · sub-theme Chicago Tribune · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#717fd1` | `MISSING` (inherits shared default #47b6ff) | Define --primary-lighter: #717fd1 (measuredvibrant.css, body). It isn't set today; the page falls back to #47b6ff. |
| `--tertiary` | `#eb5300` | `#303f9f` (Theme default (body)) | Change --tertiary from #303f9f to #eb5300 (measuredvibrant.css, body). |

##### Sub-theme: GrowthSpotter

Loads: `measuredvibrant.css + Customizer override (div#page)`. Figma mode: GrowthSpotter. Production audited 2026-08-03.

**GrowthSpotter** (growthspotter.com) · sub-theme GrowthSpotter · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#529950` | `MISSING` (not set) | Define --primary-lighter: #529950 (Customizer, div#page). It isn't set today. |
| `--tertiary` | `#e7632a` | `#303f9f` (Theme default (inherited)) | Change --tertiary from #303f9f to #e7632a (Customizer, div#page). |

##### Sub-theme: Hartford Courant

Loads: `measuredvibrant.css + site-tribune style.min.css + Customizer override (div#page)`. Figma mode: Hartford Courant. Production audited 2026-09-25.

> Verified live 2026-09-25: loads measuredvibrant.css + site-tribune style.min.css, with a div#page Customizer override (primary, light and dark all #2b7ea5). Production matches the Figma production column.

**Hartford Courant** (courant.com) · sub-theme Hartford Courant · 6 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#5796bd` | `MISSING` (not set) | Define --primary-lighter: #5796bd (Customizer, div#page). It isn't set today. |
| `--primary` | `#166d95` | `#2b7ea5` (div#page override) | Change --primary from #2b7ea5 to #166d95 (Customizer, div#page). |
| `--primary-dark` | `#084e6f` | `#2b7ea5` (same as --primary (div#page)) | Change --primary-dark from #2b7ea5 to #084e6f (Customizer, div#page). |
| `--primary-darker` | `#171e44` | `MISSING` (not set) | Define --primary-darker: #171e44 (Customizer, div#page). It isn't set today. |
| `--secondary` | `#eeff41` | `MISSING` (not set) | Define --secondary: #eeff41 (Customizer, div#page). It isn't set today. |
| `--tertiary` | `#6a54ca` | `MISSING` (not set) | Define --tertiary: #6a54ca (Customizer, div#page). It isn't set today. |

##### Sub-theme: Orlando Sentinel

Loads: `measuredvibrant.css + Customizer override (div#page)`. Figma mode: Orlando Sentinel. Production audited 2026-08-03.

**Orlando Sentinel** (orlandosentinel.com) · sub-theme Orlando Sentinel · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#5c95dd` | `MISSING` (not set) | Define --primary-lighter: #5c95dd (Customizer, div#page). It isn't set today. |
| `--tertiary` | `#48a395` | `#303f9f` (Theme default (inherited)) | Change --tertiary from #303f9f to #48a395 (Customizer, div#page). |

##### Sub-theme: South Florida Sun Sentinel

Loads: `measuredvibrant.css + Customizer override (div#page)`. Figma mode: South Florida Sun Sentinel. Production audited 2026-08-03.

`--subsite-custom` `#000000` is the sub-theme's own design value since 2026-10-19 (Karl); Measured Vibrant has none. It matches production, so there is no fix.

**South Florida Sun Sentinel** (sun-sentinel.com) · sub-theme South Florida Sun Sentinel · 2 fixes

| Token | Design | Production | Fix |
|---|---|---|---|
| `--primary-lighter` | `#4a92af` | `MISSING` (not set) | Define --primary-lighter: #4a92af (Customizer, div#page). It isn't set today. |
| `--tertiary` | `#ab9500` | `#303f9f` (Theme default (inherited)) | Change --tertiary from #303f9f to #ab9500 (Customizer, div#page). |

### Not on MNG themes

#### Not on MNG themes — Sonoma cluster

**Sonoma Magazine** (sonomamag.com): Not on MNG WordPress themes (verified 2026-09-24): no MNG theme tokens.

<!-- END per-site color fixes -->

### Index: every publication

Ordered theme > cluster > sub-theme > site, as above.

| Theme | Cluster | Sub-theme | Publication | Domain | Fixes |
|---|---|---|---|---|---|
| Bold Coastal | Baltimore | Capital Gazette | Capital Gazette | capitalgazette.com | 3 |
| Bold Coastal | Baltimore | The Baltimore Sun | The Baltimore Sun | baltimoresun.com | 0 |
| Bold Coastal | BANG | The Mercury News + East Bay Times | East Bay Times | eastbaytimes.com | 1 |
| Bold Coastal | BANG | The Mercury News + East Bay Times | The Mercury News | mercurynews.com | 0 |
| Bold Coastal | Denver | Denver Post | The Denver Post | denverpost.com | 3 |
| Bold Coastal | SCNG | — | Orange County Register | ocregister.com | 2 |
| Bold Coastal | SCNG | — | Torrance Daily Breeze | dailybreeze.com | 2 |
| Bold Coastal | Sonoma | Petaluma Argus-Courier | Petaluma Argus-Courier | petalumanews.com | 1 |
| Bold Coastal | Sonoma | The Press Democrat | Sonoma County Gazette | sonomacountygazette.com | 2 |
| Bold Coastal | Sonoma | The Press Democrat | The Press Democrat | pressdemocrat.com | 2 |
| Bold Coastal | Sonoma | The Sonoma Index-Tribune | The Sonoma Index-Tribune | sonomanews.com | 1 |
| Bold Coastal | St. Paul | St. Paul Pioneer Press | St. Paul Pioneer Press | twincities.com | 4 |
| Modern Earthy | 21C Michigan | 21C Michigan Sites (Combined) | Daily Oakland Press | theoaklandpress.com | 3 |
| Modern Earthy | 21C Michigan | 21C Michigan Sites (Combined) | Macomb Daily | macombdaily.com | 3 |
| Modern Earthy | 21C Michigan | 21C Michigan Sites (Combined) | Mount Pleasant Morning Sun | themorningsun.com | 3 |
| Modern Earthy | 21C Michigan | 21C Michigan Sites (Combined) | The News-Herald (Southgate) | thenewsherald.com | 3 |
| Modern Earthy | 21C New York | — | Kingston Daily Freeman | dailyfreeman.com | 4 |
| Modern Earthy | 21C New York | — | Oneida Daily Dispatch | oneidadispatch.com | 4 |
| Modern Earthy | 21C New York | — | Saratogian | saratogian.com | 4 |
| Modern Earthy | 21C New York | — | The Troy Record | troyrecord.com | 4 |
| Modern Earthy | 21C Ohio | — | Lake County News-Herald | news-herald.com | 4 |
| Modern Earthy | 21C Ohio | — | Lorain Morning Journal | morningjournal.com | 4 |
| Modern Earthy | 21C Pennsylvania | — | Delaware County Times | delcotimes.com | 4 |
| Modern Earthy | 21C Pennsylvania | — | Main Line Media News | mainlinemedianews.com | 4 |
| Modern Earthy | 21C Pennsylvania | — | Norristown Times Herald | timesherald.com | 4 |
| Modern Earthy | 21C Pennsylvania | — | Reading Eagle | readingeagle.com | 4 |
| Modern Earthy | 21C Pennsylvania | — | The Lansdale Reporter | thereporteronline.com | 4 |
| Modern Earthy | 21C Pennsylvania | — | The Pottstown Mercury | pottsmerc.com | 4 |
| Modern Earthy | 21C Pennsylvania | — | Trentonian | trentonian.com | 4 |
| Modern Earthy | 21C Pennsylvania | — | West Chester Daily Local | dailylocal.com | 4 |
| Modern Earthy | BANG | — | Silicon Valley | siliconvalley.com | 4 |
| Modern Earthy | Boston | — | Nashoba Valley Voice | nashobavalleyvoice.com | 4 |
| Modern Earthy | Boston | Boston Herald | Boston Herald | bostonherald.com | 4 |
| Modern Earthy | Colorado Weeklies | NEPA-PMP | Colorado Daily | coloradodaily.com | 2 |
| Modern Earthy | Colorado Weeklies | NEPA-PMP | Julesburg Advocate | julesburgadvocate.com | 2 |
| Modern Earthy | Colorado Weeklies | NEPA-PMP | Lamar Ledger | lamarledger.com | 2 |
| Modern Earthy | Fitch | — | Lowell Sun | lowellsun.com | 4 |
| Modern Earthy | Fitch | — | Sentinel & Enterprise (Fitchburg) | sentinelandenterprise.com | 4 |
| Modern Earthy | NEPA | NEPA-PMP | Republican Herald (Pottsville) | republicanherald.com | 2 |
| Modern Earthy | NEPA | NEPA-PMP | Scranton Times-Tribune | thetimes-tribune.com | 2 |
| Modern Earthy | NEPA | NEPA-PMP | Standard-Speaker (Hazleton) | standardspeaker.com | 2 |
| Modern Earthy | NEPA | NEPA-PMP | The Citizens' Voice (Wilkes-Barre) | citizensvoice.com | 2 |
| Modern Earthy | NEPA | NEPA-PMP | Wyoming County Examiner | wcexaminer.com | 2 |
| Modern Earthy | PMP | NEPA-PMP | Boulder Daily Camera | dailycamera.com | 2 |
| Modern Earthy | PMP | NEPA-PMP | Greeley Tribune | greeleytribune.com | 2 |
| Modern Earthy | PMP | NEPA-PMP | Longmont Times-Call | timescall.com | 2 |
| Modern Earthy | PMP | NEPA-PMP | Loveland Reporter-Herald | reporterherald.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | Akron News-Reporter | akronnewsreporter.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | BoCoPreps | bocopreps.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | Broomfield Enterprise | broomfieldenterprise.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | Brush News-Tribune | brushnewstribune.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | Buffzone | buffzone.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | Cañon City Daily Record | canoncitydailyrecord.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | Colorado Hometown Weekly | coloradohometownweekly.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | Estes Park Trail-Gazette | eptrail.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | Fort Morgan Times | fortmorgantimes.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | South Platte Sentinel | southplattesentinel.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | Sterling Journal-Advocate | journal-advocate.com | 2 |
| Modern Earthy | PMP Weeklies | NEPA-PMP | The Burlington Record | burlington-record.com | 2 |
| Modern Earthy | SCNG | — | Excelsior California | excelsiorcalifornia.com | 4 |
| Modern Earthy | SCNG | — | LA Daily News | dailynews.com | 4 |
| Modern Earthy | SCNG | — | Pasadena Star-News | pasadenastarnews.com | 4 |
| Modern Earthy | SCNG | — | Press Enterprise (Riverside) | pressenterprise.com | 4 |
| Modern Earthy | SCNG | — | San Bernardino Sun | sbsun.com | 4 |
| Modern Earthy | SCNG | — | San Gabriel Valley Tribune | sgvtribune.com | 4 |
| Modern Earthy | SCNG | — | Whittier Daily News | whittierdailynews.com | 4 |
| Modern Earthy | Tribune | Daily Herald | Daily Herald | dailyherald.com | 0 |
| Modern Earthy | Tribune | Morning Call | The Morning Call | mcall.com | 6 |
| Measured Vibrant | BANG | — | Marin Independent Journal | marinij.com | 2 |
| Measured Vibrant | Norcal | — | Chico Enterprise-Record | chicoer.com | 2 |
| Measured Vibrant | Norcal | — | Eureka Times-Standard | times-standard.com | 2 |
| Measured Vibrant | Norcal | — | Lake County Record-Bee | record-bee.com | 2 |
| Measured Vibrant | Norcal | — | Monterey Herald | montereyherald.com | 2 |
| Measured Vibrant | Norcal | — | Oroville Mercury-Register | orovillemr.com | 2 |
| Measured Vibrant | Norcal | — | Red Bluff Daily News | redbluffdailynews.com | 2 |
| Measured Vibrant | Norcal | — | Santa Cruz Sentinel | santacruzsentinel.com | 2 |
| Measured Vibrant | Norcal | — | Ukiah Daily Journal | ukiahdailyjournal.com | 2 |
| Measured Vibrant | Norcal | — | Vacaville Reporter | thereporter.com | 2 |
| Measured Vibrant | Norcal | — | Vallejo Times-Herald | timesheraldonline.com | 2 |
| Measured Vibrant | Norcal | — | Woodland Daily Democrat | dailydemocrat.com | 2 |
| Measured Vibrant | Norcal Weeklies | — | Fort Bragg Advocate-News | advocate-news.com | 2 |
| Measured Vibrant | Norcal Weeklies | — | Paradise Post | paradisepost.com | 2 |
| Measured Vibrant | Norcal Weeklies | — | The Mendocino Beacon | mendocinobeacon.com | 2 |
| Measured Vibrant | Norcal Weeklies | — | The Willits News | willitsnews.com | 2 |
| Measured Vibrant | SCNG | — | Inland Valley Daily Bulletin | dailybulletin.com | 2 |
| Measured Vibrant | SCNG | — | Long Beach Press-Telegram | presstelegram.com | 2 |
| Measured Vibrant | SCNG | — | Redlands Daily Facts | redlandsdailyfacts.com | 2 |
| Measured Vibrant | SCNG | — | San Diego Union-Tribune | sandiegouniontribune.com | 2 |
| Measured Vibrant | Tribune | — | Daily Press | dailypress.com | 2 |
| Measured Vibrant | Tribune | — | New York Daily News | nydailynews.com | 2 |
| Measured Vibrant | Tribune | — | The Virginian-Pilot | pilotonline.com | 2 |
| Measured Vibrant | Tribune | Chicago Tribune | Chicago Tribune | chicagotribune.com | 2 |
| Measured Vibrant | Tribune | GrowthSpotter | GrowthSpotter | growthspotter.com | 2 |
| Measured Vibrant | Tribune | Hartford Courant | Hartford Courant | courant.com | 6 |
| Measured Vibrant | Tribune | Orlando Sentinel | Orlando Sentinel | orlandosentinel.com | 2 |
| Measured Vibrant | Tribune | South Florida Sun Sentinel | South Florida Sun Sentinel | sun-sentinel.com | 2 |
| — | Sonoma | — | Sonoma Magazine | sonomamag.com | — |

---

## 6. Spacing — 10px and 14px values off the 4/8 grid

**Found:** 2026-10-01, while creating the spacing tokens. Measured live on chicagotribune.com (homepage, 1728px viewport, every visible element's padding, margin and gap).

**Figma spec (source of truth):** spacing follows the 4/8 grid. The main file's "Spacing & Radius" collection has `spacing/050` 4, `spacing/100` 8, `spacing/150` 12, `spacing/200` 16, `spacing/250` 20, `spacing/300` 24.

**Decision (Karl, 2026-10-01):** 10px and 14px are production drift, not design values. They are not tokens; production should move to the nearest grid value.

**Production:**

| Where | Live value | Fix |
|---|---|---|
| `.subscribe-button` (header, footer and article paywall CTA) | padding 14px / 10px | Use Button Primary Default: 16px / 20px (`spacing/200` / `spacing/250`). Same fix as entry 26. |
| Main content wrapper (left/right page gutter) | padding 0 10px | Use `spacing/100` (8px) or `spacing/150` (12px); confirm with design which one. |
| `ul.footer-menus`, `div.colophon` | padding 0 10px | Same as the page gutter. |

**Context:** on that page 10px appears 17 times. The grid values are far more common (16px 79, 12px 46, 32px 36, 8px 34, 4px 28). Other off-grid values also appear (15px 38, 17px 20, 19px 17, 3px 28) and should be reviewed in a later pass.

**Engineering patch (ready to apply):**

```css
/* 6a. Subscribe CTA = Button Primary Default (also closes entry 26) */
.subscribe-button {
  padding: 16px 20px;   /* was 14px 10px; spacing/200 vertical, spacing/250 horizontal */
  font-size: 14px;      /* was 15px */
}

/* 6b. Page gutter. GUTTER = 8px (spacing/100) or 12px (spacing/150), pending Karl */
.main-content-wrapper,   /* placeholder: the wrapper with padding: 0 10px today */
ul.footer-menus,
div.colophon {
  padding-left: GUTTER;  /* was 10px */
  padding-right: GUTTER; /* was 10px */
}
```

Check after the change: the subscribe CTA keeps its 44px min height and its fill color per masthead, and the header, body and footer edges still line up with each other.

**Status:** Open. 6a is ready for Engineering. 6b needs one design decision first (8px or 12px).

---

## 7. Radius — buttons are 4px; 5px on a button is drift

**Found:** 2026-10-01. Live check of chicagotribune.com and ocregister.com (homepage and article) and denverpost.com (homepage): every button uses 4px (Subscribe Now, newsletter Sign Up buttons). Figma's Button Primary, Secondary, Tertiary and Linkstyle were already 4px.

**Decision (Karl, 2026-10-01):** button radius is 4px across the board (`radius/sm`). In Figma, Action Button, Button Action and Button ActionMenu were changed from 5px to 4px, and every button shape is now bound to `radius/sm`. `radius/utility` (5px) stays, for containers only (Karl, 2026-10-01).

**Production:**

| Where | Live value | Fix |
|---|---|---|
| Search submit button (`.search-button`, masthead search form; see `components/navigation.md`) | border-radius 5px | Use 4px (`radius/sm`). |
| Account dropdown panel (masthead; see `components/navigation.md`) | border-radius 0 0 5px 5px | No fix. It's a container, so 5px (`radius/utility`) is correct. |

**Containers keep 5px (`radius/utility`):** InLineMessage containers, ModalsCenter parts, the check box's 40x40 hover / focus ring, the status badge and the account dropdown. In Figma their 5px corners are bound to `radius/utility`.

**Form fields are 3px (`radius/field`)** (Karl, 2026-11-04; was listed above as 5px, which the Figma fields never were): the outline of Form Field, Code Box and Search Field / Obituaries, the outer corners of a field's icon frame, and the 14x14 check box square. Bound to the new `radius/field` token in Figma. Production's input radius hasn't been checked on the 6 review sites yet.

**Engineering patch (ready to apply):**

```css
/* 7a. Masthead search submit = button radius */
.search-button {
  border-radius: 4px;   /* was 5px; radius/sm */
}
/* Leave the account dropdown at 0 0 5px 5px (radius/utility, container). */
```

**Status:** Open. Ready for Engineering.

---

## 8. Breakpoints off the official sets — WordPress themes, trust indicators, digisubs (all 6 sites)

**Moved 2026-10-30** to [`components/breakpoint-audit.md`, "All production breakpoints in one place", section A](components/breakpoint-audit.md#all-production-breakpoints-in-one-place) (Karl: the breakpoint entries should all be in one place). Under the 2026-10-30 rule, production's breakpoints are documented as they are for now and aren't drift; the earlier snap targets are kept there as the future plan. The number isn't reused.

---

## 9. Masthead — nav overflow, article scrolled-state headline and nav bottom border

### 9.1 Top nav bar overflows its container at the 1040–1279px (Tier 4) breakpoint

**Found:** 2026-09-15, during the Masthead breakpoint audit (`breakpoint-audit.md`), XL-Desktop tier, comparing Chicago Tribune live production (one of the standing 6-site review list) against the `Masthead` component set (WordPress Elements → Menus and Parts).

**Production:** At 1040px width — the real breakpoint where the header switches to the full desktop nav — Chicago Tribune's top nav row (`.nav-primary`, 11 items: Business, Entertainment, Education, Immigration, Opinion, Politics, Sports, Suburbs, Chicago Magazine, Obituaries, BestReviews) does not fit within its container. The row's actual rendered width (1100.8px) is wider than its wrapper (973.75px). Because the page sets `overflow-x: hidden` on `<body>`, the row doesn't scroll into view — it's centered on the container and the overflow is simply clipped, cutting the first and last items off mid-word on both the left and right edges. No responsive fallback (smaller font, reduced spacing, wrapping, or item overflow menu) kicks in at this width.

Cross-checked against the standing 6-site list: Chicago Tribune and Orlando Sentinel both carry 11 top-nav items (the most of the 6 sites checked — OC Register 8, Denver Post 9, The Morning Call 10, Greeley Tribune 7), so this is the realistic worst case for how many items the nav needs to support, not an edge case.

**Figma spec (before this fix):** The `Masthead` component's top nav row was sized to fit neatly within its 1040px-wide container at whatever item count each page variant happened to have (7–10 items), with no representation of what happens once a site's real item count exceeds what the row can hold.

**Decision (Karl, 2026-09-15):** Build the Figma component to match production's actual (broken) treatment rather than hide the problem — the nav bar should visibly overflow and clip the same way Chicago Tribune's does, so the gap is obvious to anyone reviewing the component, and flag it here for engineering to fix in production.

**Figma action taken:** Brought all three `Default`-state Page variants (Home, Section Front, Article) of the XL-Desktop `Masthead` component up to 11 top-nav items each (added placeholder items to match Chicago Tribune's count), left the nav row at its natural/uncompressed content width (no longer force-fit to the container), and set the row's parent container to clip content at the component's 1040px bounds. The result: the nav row is centered and overflows past both edges, with the first and last items cut off mid-word — matching Chicago Tribune's live behavior.

**Action needed:** Engineering to add real responsive handling for the top nav at the 1040–1279px tier when the site's item count is high enough to overflow — options include a smaller font/tighter spacing at this tier, wrapping to a second line, or an overflow ("More") menu for items past what fits. Whatever the fix, it needs to apply platform-wide, not just to Chicago Tribune, since Orlando Sentinel hits the same 11-item count and any other site could grow into it.

**Addendum (2026-09-22):** The clipping isn't fully resolved even at the widest Desktop tier — while fixing an unrelated Masthead side-margin bug at 1024/1100 (WordPress Elements → Homepage, the homepage template audit §3.58, since retired), the same fixed-width `Top Nav` row (1322px) was found still clipped by ~21px per side at the full 1280px Desktop width, versus ~118.5px per side at 1100px. So this isn't strictly a "1040–1279px tier" problem that clears up at Desktop — it's a continuum that only becomes fully invisible somewhere above 1322px of available nav width. Doesn't change the action needed above, just widens the affected range engineering should account for.

**Status:** Open.

### 9.2 Article scrolled-state headline overflows behind the bookmark/share icons

**Found:** 2026-09-15, during the Ad-Free Masthead audit (`breakpoint-audit.md`), 1100px pass, Article page, scrolled state, logged into an ad-free account.

**Production:** In the scrolled masthead on an article page, the breadcrumb + headline (`.article-title`, e.g. "National Politics | Judge blocks Kennedy Center board from putting…") renders at its full natural width based on the actual headline's length. The bookmark/save icon (`.saveArticleButton`) sits at a fixed horizontal position in the same row that does not account for how long the rendered headline actually is. For a headline long enough — this one included — the tail end of the headline text renders directly underneath the bookmark icon instead of stopping short of it, so the last few characters are visually obscured rather than cleanly truncated with an ellipsis.

Confirmed via DOM inspection at 1100px: the headline's own bounding box spans x 462–847px; the bookmark icon sits at x 778–809px — a 69px overlap.

**Also confirmed at 1040px** (2026-09-15, same Ad-Free audit pass, same article): the overlap is worse at this narrower width — headline box spans x 430–815px, bookmark icon sits at x 720–751px, a 95px overlap. Visually, the bookmark icon now sits directly on top of a word in the headline rather than just clipping the tail end.

**Also checked at 1728px** (2026-09-15, same audit pass, same article, Karl's full screen width): no overlap at all — the headline's container (`.entry-title`) correctly sizes down and its text box's right edge (x 1185px) sits 241px clear of the share widget's left edge (x 1426px).

**Root cause identified — this is a narrow-viewport layout bug, not a headline-length coincidence:**

| Width | Overlap |
|---|---|
| 1040px | 95px (worst) |
| 1100px | 69px |
| 1728px | none — 241px clearance |

The headline's flex/width allocation fails to shrink correctly relative to the fixed-width share-icon widget below some threshold between 1100px and 1728px — narrower windows make it worse, not better, which is the opposite of what a simple text-truncation gap would produce. This isn't tied to ad-free/logged-in state specifically — it would happen for any sufficiently long headline at a narrow-enough width regardless of login state — but was caught during the ad-free audit pass.

**Figma spec:** Not reproduced. Figma's Article `Scrolled` variant uses a fixed placeholder headline ("Roughly forty characters of the article t...") short enough that it doesn't hit this edge case, so the component itself doesn't currently demonstrate the bug. Unlike the Tier 4 top-nav overflow (entry #9.1, a systemic issue reproducible with any content at that width), this one only shows up in the narrower part of the desktop range, so it wasn't rebuilt into the static mock — it's flagged here for engineering instead.

**Action needed:** Give the headline element a max-width (or text-overflow: ellipsis truncation) tied to the actual available space before the bookmark/share-icon cluster at all desktop widths, not just the wider end of the range — the current layout only holds up above ~1700px.

**Status:** Open.

### 9.3 Nav bottom border color isn't a design token

**Found:** 2026-10-23, on ocregister, chicagotribune, canoncitydailyrecord, denverpost and orlandosentinel (all three theme stylesheets). **Team:** CMS.

**Production:** `.nav-wrapper-primary { border-bottom: 1px solid #9D9A98 }`. It's the 1px rule under the masthead, there both at the top of the page (under the section nav row) and when scrolled (under the 64px bar, which is 65px tall with the rule).

**Design:** `color/gray/400` (#A7A6A3), the closest MNG gray (Karl, 2026-10-23). In WordPress Elements, every masthead rule now uses gray/400 (2026-10-23): Masthead (`456:2572`) top-of-page variants (36 rules changed from `color/gray/300`), every Scrolled and AdFree-Scrolled variant (27 rules added at the bottom; the 3 Dashboard variants already had one), and ObitMastHead (`1139:22369`, 26 rules added at the bottom, matching the main masthead per entry 24).

**Fix:** change the border color to the gray/400 value (#A7A6A3). The obituaries masthead's own #CCCCCC border goes away with entry 24.

### 9.4 Top nav items — CSS asks for semi-bold but renders Bold; row height and wrapping

**Found:** 2026-11-02. CSS read on all 6 review sites (identical rules); what renders measured in Chrome on one site per theme (ocregister.com Bold Coastal, chicagotribune.com Measured Vibrant, mcall.com Modern Earthy) at 1046px (1040–1279 tier) and 1286px (1280 and up), plus ocregister.com at 1920px. **Team:** CMS. Figma: WordPress Elements ▸ Menus and Parts ▸ `Masthead` (`456:2572`), the Top Nav row in the XL-Desktop Home, SectionFront and Article variants (Default and AdFree).

**Production:** `.nav-primary .menu > li > a { font: 600 0.9375em/1.73333 "Noto Sans" }` = 15px, weight 600, 26px line height, at every desktop width (an earlier `700 1em/1` rule is overridden; the `max-width: 79.9375em` rule keeps 15px). But the themes' Google Fonts request (`family=Noto+Sans:400,700,800|Noto+Serif:…`) loads no 600 face, so the browser draws weight 600 with the **700 (Bold)** file. Checked two ways on all three themes: `document.fonts.load('600 15px "Noto Sans"')` returns the 700 face, and every nav item's rendered width equals Bold's to the hundredth of a pixel (e.g. "Entertainment" 109.88px Bold vs. 101.82px Regular). Same pattern as the Headline List Item and Related Article List Item (600 in CSS, rendered Bold).

**Design (changed 2026-11-02, Karl):** the nav items match what renders: Noto Sans **Bold 15** (`font/size/15`, `font/style/bold`), **26px** line height (no line-height token), `color/gray/min` on `color/gray/max` (18.4:1). Was Bold 16 (`font/size/16`) with auto line height (22px). The row is a fixed **48px** with the items centered, as production (Karl, 2026-11-03; it was 54px, then 58px for a day with 16px `spacing/200` padding).

**Production differs from the design:**
- **Weight:** CSS 600, rendered 700. Either is fine visually today because 600 isn't loaded; set the CSS to 700 so the code says what renders. If semi-bold is ever wanted, load the 600 face and tell design, because the design would change too.
- ~~**Row height:**~~ resolved 2026-11-03 (Karl): the design's row is now production's 48px (fixed height, items centered). Production keeps the row at 48px even when items wrap to two lines (52px), at every width measured (1046, 1234, 1286, 1920px).
- **Wrapping at 1040–1279px:** items wrap onto two lines (52px tall; the nav row stays 48px). At 1046px: "Chicago / Magazine" on chicagotribune.com; "Local / News", "Photos and / Videos" and "Public / Notices" on mcall.com; nothing on ocregister.com (8 items). At 1234px only "Chicago Magazine" still wraps; at 1286px nothing wraps. The design doesn't show wrapping. Related to 9.1 (the row is still 1102px wide at 1046px on chicagotribune.com).

**Fix:** set `.nav-primary .menu > li > a` to `font-weight: 700`; add `white-space: nowrap` to the nav links together with the overflow fix in 9.1.

**Status:** Open. Added 2026-11-02.

---

## 10. Navigation menus — section menu drawer, avatar, hidden duplicate links and device-class timing

### 10.1 Cross-site avatar inconsistency for the same logged-in account

Cross-site SSO is confirmed working (same session carries from one site to another with no re-login). But for the identical account, Denver Post rendered an actual photo avatar while Orlando Sentinel rendered a generated initials badge ("PA").

**Action needed:** Confirm whether this is a per-site fallback difference (e.g. photo failed to load/sync on one site) or a real bug.

**Status:** Open — not root-caused.

### 10.2 Hidden duplicate nav `<li>` artifacts

On some categories (confirmed on Sports), the individual sub-section links (e.g. Chicago Bears, Bulls, Blackhawks, Cubs, White Sox) exist twice: once in the real working sub-menu, and again as `class="hidden"` top-level `<li>` siblings directly in the nav — apparent unused WordPress nav-menu artifacts.

Six-site check 2026-11-06 (section menu drawer): only Chicago Tribune has them, 12 rows (5 team pages, 6 suburb papers, Immigration); none on the other 5 review sites.

**Status:** Open — worth a cleanup pass, low risk/low priority.

### 10.3 Device-class first-paint timing (Denver Post, mcall.com)

A device-signal CSS class is added client-side (confirmed not server-side) slightly later on Denver Post and mcall.com than the other 4 sites — likely real device detection working correctly, just applied a beat slower on those two.

**Action needed:** Worth asking engineering whether any component's CSS actually depends on this class being present at first paint. If nothing does, this needs no action.

**Status:** Open — low priority, likely closable with a single confirmation.

### 10.4 Section menu drawer — chevrons point the other way and are larger (all 6 sites)

**Figma spec (source of truth):** WordPress Elements ▸ Menus and Parts ▸ `SectionMenuItem` (456:5781) and `SectionMenuGroup` (3740:29156). A section with subcategories shows `arrow-downSMALL` (⌄) when closed and `arrow-upSmall` (⌃) when open (Karl, 2026-11-06: keep the design). Each is a 12 × 8 arrow (12px wide; 12px tall if it pointed sideways) centered in a 16px icon, in a 40px box at the right edge (Karl, 2026-11-09: keep the 12px size).

**Production:** icomoon `::before` on the row link, 9px: `arrow-right` (U+E907, ›) when closed, `arrow-down` (U+E905, ⌄) when open. Same CSS on all 6 review sites. At 9px the visible arrow is 5.6 × 9 closed and 9 × 5.6 open (Denver Post, measured 2026-11-09), about three quarters of the design's size, and it sits 7–9px from the drawer's right edge.

**Action needed:** use ⌄ closed and ⌃ open on every theme (the design icons, or `arrow-down` and a rotated `arrow-down` / an up arrow from the font), drawn 12px wide: the font icons at `font-size: 12px` (up from 9px).

**Status:** Open. Added 2026-11-06. Team: CMS.

### 10.5 Section menu drawer — section rows are links that only open their list; some section pages can't be reached

**Figma spec (source of truth):** `SectionMenuGroup`. The section row is a **button** that opens and closes its list (`aria-expanded`, `aria-controls` on the list); the first sub-item is always the section's own page (Karl, 2026-11-06). One group open at a time; two levels only (matches production).

**Production:** the row is an `<a href>` (with `aria-expanded`) whose click opens the list instead of following the link. Most sections repeat themselves as the first sub-item ("News › News"), but not all: Branded Content (all 6), News on Denver Post, Chicago Tribune and Cañon City (they start with Latest Headlines or Local News), Chicago Tribune's Today's E-Editions and Cañon City's Entertainment have no repeat, so those section pages can't be reached from the drawer.

**Action needed:** make the row a `<button>` with `aria-expanded` and `aria-controls`; make the first sub-item of every group the section's page (a CMS menu change where it's missing). Also clean up two menus: Morning Call's "Public Notices" has one sub-item, "Subscribe" (misplaced); Chicago Tribune's 12 hidden duplicate rows are 10.2.

**Status:** Open. Added 2026-11-06. Team: CMS (markup) and each site's menu editors (menu content).

### 10.6 Section menu drawer — row height, padding, spacing and title case

**Figma spec (source of truth):** `SectionMenuItem`, `SectionMenuGroup`, `SectionMenuHeader` and `SectionMenu` (WordPress Elements ▸ Menus and Parts), updated 2026-11-09 (Karl) from Denver Post measured at 1728, 1280, 1024, 768, 360 and 340px (logged out). Noto Sans SemiBold 14 rows (`font/size/14`, `font/style/semibold`; matches production).

| | Production (Denver Post at all six widths; row CSS identical on all 6 review sites) | Design | Why |
|---|---|---|---|
| Row height | 37.5px (the `li` clips its 40.6px link) | 36px | Rounded to the 4 / 8 grid (Karl) |
| Row text and Home icon from the left | text 13.18px, Home icon 10px | 16px (`spacing/200`), all aligned | **Design choice** (Karl, 2026-11-09) |
| Sub-item text from the left | 29.2px | 32px (`spacing/400`) | Rounded; 28px has no token |
| Toggle (hamburger closed, × open; same element, only the icon changes) | 15px padding inside the page margin: icon at 58px at 1728, 46 at 1280, 41 at 1024, 34 at 768, 24 at 360, 23.5 at 340; "All Sections" 4px after the icon | Both states the same (`SectionMenuHeader`): XL-Desktop 8px padding (`spacing/100`) + 40px target, icon at 20px, "All Sections" 20px after the icon; below desktop the icon is centered in a 64px box (24px) | **Design choice** (Karl, 2026-11-09): the design's spacing stays; production should change to match |
| "All Sections" label | Noto Sans 15px SemiBold | 16px SemiBold (`font/size/16`, `font/style/semibold`) | Drift: size kept (Karl, 2026-11-09) |
| Space above Subscribe Now | 12px drawer padding + 12px margin | 12 + 12 (`spacing/150`) | Matches |
| Subscribe Now / Sign Up side margins | 35px (230px buttons) | 36px (`spacing/450`) plus Button Primary's own 8px side margin: the visible buttons start 44px from the drawer edge and are 212px wide; the newsletter prompt spans the full 300px | Rounded; new token (pull request #14); Button Primary unchanged. The 44px / 212px result is accepted as the design (Karl, 2026-11-09) |
| Subscribe Now height | 44px (14px / 10px padding) | 40px (Button Primary styling and 8px padding kept) | Drift: design component (Karl, 2026-11-09) |
| Below Subscribe Now | 12px | 12px (`spacing/150`) | Matches |
| Below the last row | 48px | 48px (`spacing/600`) | Matches; new token (pull request #14) |
| Newsletter: divider to prompt | 15px at desktop; 30px below 1040px | 16px (`spacing/200`) at desktop; 32px (`spacing/400`) below 1040px | Rounded |
| Newsletter: prompt to button / below button | 12px / 15px | 12px / 16px | Rounded |
| Label case | as typed in the CMS menu (no `text-transform`) | Title Case forced (Karl, 2026-11-09) | No automatic "proper" title case exists in CSS or Figma; `capitalize` also capitalizes "and", "of" |

**Weather row (below 1040px):** not drift. It's the AccuWeather widget, which we don't control, so the design matches production exactly with raw values (Karl, 2026-11-09): padding 0 15px 5px; temperature Helvetica Bold 16 / 16px with a 26.41px icon, top-aligned, the pair centered on the date column; date Noto Sans SemiBold 15 / 16px, 12px to the right; e-Edition link Noto Sans Medium 12 / 12.8px, 10.87px below the date (production: `margin-top: 5.5%` of the 197.6px column); 60.7px tall. Measured on Denver Post and Morning Call. Several markets show two links (a second, evening edition); the design has both (Weather Bug `Evening e-Edition` = Off / On), and the masthead's weather block matches production exactly too.

**Action needed:** `#pushnav > li` 36px tall with the text vertically centered; 16px left padding on rows and the Home link, 32px on sub-items; the toggle as in the design, a deliberate design choice (XL-Desktop: 8px padding, 40px icon target, label 20px after the icon, 16px SemiBold; below desktop: icon centered in a 64px box); Subscribe Now and Sign Up as Button Primary (40px tall) with their edges 44px from the drawer edge (212px wide); newsletter 16px above the prompt at desktop and 32px below 1040px, 16px below the button; `text-transform: capitalize` on row and sub-item labels.

**Status:** Open. Added 2026-11-06; rewritten 2026-11-09 after the five-width check; toggle, label and weather row updated later on 2026-11-09 (Karl). Team: CMS.

### 10.7 Section menu drawer — background, text and line colors

**Figma spec (source of truth):** drawer and rows `color/surface/nav-panel` (#FBFBFB, every theme); row text `color/theme/nav-text`. Contrast on #FBFBFB: 16.1:1 (#1F1E1C) to 19.2:1 (#0A0908), every mode passes AA.

**Production:**

| Site (theme) | Drawer background | Row text | Design `nav-text` mode |
|---|---|---|---|
| OC Register (Bold Coastal) | #FFFFFF | #0A0908 | #0A0908 ✓ |
| Denver Post | #FFFFFF | #0A0908 | #141414 |
| Chicago Tribune | #FBFBFB ✓ | #1F1E1C ✓ | #1F1E1C |
| Orlando Sentinel | #FBFBFB ✓ | #1F1E1C ✓ | #1F1E1C |
| Cañon City (Modern Earthy) | #FAFAFA | #1A1A1A ✓ | #1A1A1A |
| Morning Call | #FAFAFA | #1A1A1A | #141414 |

Lines: the drawer's top border (under the header, the full 300px) and the divider above the newsletter are 1px **#0A0908** in production (all 6 sites); the design uses the nearest gray, `color/gray/black` (#000000) (Karl, 2026-11-09).

**Action needed:** set the drawer and row background to #FBFBFB on Bold Coastal, Denver Post and Modern Earthy; set the row text to #141414 on Denver Post and Morning Call; set the drawer's top border and the newsletter divider to #000000. Don't change the tokens.

**Status:** Open. Added 2026-11-06. Team: CMS.

### 10.8 Section menu drawer — no hover or keyboard-focus styling (accessibility)

**Figma spec (source of truth):** `SectionMenuItem` State = Default / Hover / Pressed / InFocus. Hover underlines the label; Pressed underlines it and fills the row with `color/gray/600` (#F1EFEB; text 14.5:1 or better) (Karl, 2026-11-09); InFocus draws a 2px `color/gray/black` ring inside the row (inside, because the drawer clips anything outside its 300px).

**Production:** no style change on hover or focus on any row (all 6 sites); keyboard users can't see where they are.

**Action needed:** add `:hover` (underline), `:active` (underline and #F1EFEB background) and `:focus-visible` (2px #000000 inset outline) to `#pushnav a` and the section toggles. The focus indicator is required (WCAG 2.4.7).

**Status:** Open, focus required. Added 2026-11-06. Team: CMS.

---

## 11. Account menu — dropdown shadow isn't the design token

**Found:** 2026-10-23, in `mng-digisubs.styles.css` (loaded on every review site): `.dropdown-menu { box-shadow: 0 8px 16px -4px rgba(0,0,0,.2) }`. **Team:** digisubs.

**Design:** the account menu uses the effect style **shadow/lg**, `0 8px 16px 0 rgba(0,0,0,.2)`, like every floating element (Karl, 2026-10-23). Applied in WordPress Elements ▸ Menus and Parts ▸ AccountMenu (`910:16425`) and its documentation frames (56 layers; Figma used 8px 6px 16px 0 · 25% before).

**Fix:** change the spread from −4px to 0: `box-shadow: 0 8px 16px 0 rgba(0,0,0,.2)`. The digisubs `.dropdown-content`, `.digisubs-modal-skin` and the e-edition menu already use exactly this value; `.paywall-container` (`0 9px 16px 0 rgba(0,0,0,.25)`) should move to it too.

---

## 12. Homepage tabs (World Cup tabs) — font, colors, spacing and breakpoint off the design system

**Found:** 2026-10-23, on staging.dailylocal.com/world-cup/ (`ul.sr-nav-tabs` > `button.tab-btn`), while building the For You tab bar. **Team:** CMS.

**Design:** WordPress Elements ▸ Menus and Parts ▸ **Homepage Tabs** (set `3629:44974`, Breakpoint = Desktop / Mobile) built from **Homepage Tab** (set `3629:44949`, State = Default / Hover / Active / Focus). The layout is production's. Every value is an existing MNG token: where production uses a value with no token, it's rounded to the nearest one, and production should change to match (Karl, 2026-10-23).

| Property | Production | Design |
|---|---|---|
| Tab font | Inter 600 12px | Noto Sans SemiBold, `font/size/12` |
| Tab letter spacing | 0.14em (1.68px) | 0 (no token; the production top nav and Subscriber Only badge use none) |
| Default text | `#6B7280` | `color/gray/200` (#5E5D5C, 6.6:1 on white) |
| Hover text | `#111827` | `color/gray/min` (#141414) |
| Active text | `#000` | `color/gray/black` |
| Active underline (2px) | `#C62828` | `color/theme/primary` |
| Bar background | `#FAFAFA` | `color/gray/max` |
| Bar bottom border (1px) | `#808080` | `color/gray/300` (#838280) |
| Tab top/bottom padding | 12px | `spacing/150` (12) |
| Tab side padding | 18px | `spacing/200` (16) |
| Gap between tabs | 32px | `spacing/300` (24) |
| Nav side padding | 24px | `spacing/100` (8) at every width, so the first tab lines up with the page content (Karl, 2026-11-03; was `spacing/300` (24)) |
| No side padding below | `(max-width: 500px)` | None: 8px at every width (was none below 640px) |
| Nav width | — | 1280px max, centered (was 1200px) |

**Fix:** update the `sr-nav-tabs` styles to the design column.

---

## 13. Breaking News bar — Denver Post uses primary-lighter instead of secondary

**Found:** 2026-10-02, live check of the six review sites (theme CSS read on `#page`; no breaking bar was active, so the color was read from the site's own `.breaking-bar` rule).

**Figma spec (source of truth):** the Breaking News Banner (WordPress Elements, `506:5632`) background is `color/theme/secondary` and its text is `color/theme/near-black` (bound 2026-10-02).

**Production:**

| Site | `.breaking-bar` background | Text | Token |
|---|---|---|---|
| ocregister.com | #FFEA00 | #0A0908 | secondary |
| chicagotribune.com | #EEFF41 | #1F1E1C | secondary |
| orlandosentinel.com | #EEFF41 | #1F1E1C | secondary |
| canoncitydailyrecord.com | #EEFF41 | #141414 | secondary |
| mcall.com | #EEFF41 | #141414 | secondary |
| **denverpost.com** | **#AF1628** | #0A0908 | **primary-lighter** (Denver Post override) |

**Open question (Karl):** keep Denver Post's red bar as a documented Denver Post exception, or have Engineering align it to `secondary` (`#003459`, navy, on Denver Post). Until decided, Figma stays on `secondary`.

**Status:** Open, waiting on that decision.

---

## 14. Section title (eyebrow) — color, underline and spacing don't match the design

**Found:** the Article Card / Teaser audit (color and underline); spacing measured 2026-10-27 on the homepage section titles (`.section-highlight h2.entry-title` and `.headline-list-title`) of all 6 review sites, while documenting the component. **Team:** CMS.

**Design:** WordPress Elements ▸ Homepage ▸ **Section Title / Eyebrow** (`3333:42278`), Style = Underline / Bold (the "Latest Headlines" title in Section Highlight). Size, weight and family come from the per-theme eyebrow tokens: Bold Coastal 20px / 400 / Noto Sans, Measured Vibrant 17px / 700 / Noto Sans, Modern Earthy 21px / 400 / Noto Serif (`tokens/typography/typography-decision-log.md`, decision 6); production already matches these sizes. The 8px gaps were 6px in the first draft, a tie between `spacing/050` and `spacing/100` (Karl, 2026-10-27: 8).

| Property | Production | Design |
|---|---|---|
| Title color | wrong on all 6 sites | `color/gray/100` |
| Underline | only on Modern Earthy (mcall, canoncitydailyrecord): `2px solid` primary. Missing on Bold Coastal (ocregister, denverpost) and Measured Vibrant (chicagotribune, orlandosentinel). See 14.1 | 2px `color/theme/primary` on every theme, as wide as the title; across the block's column in Latest Headlines, Section Rail Cards and Photos Block (Karl, 2026-11-03) |
| Title to underline | `padding-bottom: 0.3125em` = 6.56px (Modern Earthy, 21px); 0.5em = 8.5px with no underline (Measured Vibrant, 17px); 0 with no underline (Bold Coastal, 20px) | `spacing/100` (8px) on every theme |
| Title to arrow | no gap; the `icon-arrow-right` glyph has `padding-left: 0.3em` (4.14px Measured Vibrant, 4.88px Bold Coastal, 5.12px Modern Earthy) | `spacing/100` (8px), then the 16px arrow icon |

**Fix:** on every theme: set the title color to `color/gray/100`; add the 2px `--primary` underline; set the title's bottom padding to 8px; set the space between the title and its arrow to 8px.

**Status:** Open. Ready for Engineering.

### 14.1 Underline width in blocks (2026-11-03)

**Found:** 2026-11-03 on ocregister.com and dailynews.com (signed in), at 360, 768, 900, 1100 and 1280px: `.headline-list-title span` has a ~1.67px primary bottom border across the whole Latest Headlines column (224px at 1280), and every section title's underline spans its block. sun-sentinel.com's Latest Headlines title has none (Bold style). This differs from what was recorded for ocregister.com on 2026-10-27; the other review sites weren't rechecked.

**Design:** inside Latest Headlines, the Section Rail Cards and Photos Block the title fills the column, so the 2px underline spans it (Figma's Latest Headlines header draws it at the column width; the code's Latest Headlines title was fixed to match on 2026-11-03).

**Fix:** none new; the underline weight (2px) and color are still entry 14.

---

## 15. Section Highlight block — Denver Post shows 4 headline items instead of 3

**Found:** Article Card / Teaser audit.

**Figma / platform norm:** Every pilot site (Chicago Tribune, OC Register, Orlando Sentinel, Greeley Tribune, mcall.com) shows exactly 3 headline items in the Section Highlight module.

**Production:** Denver Post shows 4 — and this isn't theme-scoped, since OC Register shares Denver Post's Bold Coastal theme but still shows 3.

**Action needed:** Confirm whether this is a deliberate per-site editorial choice or a real inconsistency worth fixing.

**Status:** Open — not yet root-caused.

---

## 16. Article card / teaser — layout rules, excerpt color and image fit

### 16.1 Responsive layout rules vary by container context (not fully mapped)

**Found:** Article Card / Teaser audit, §5 Open Item 8.

**Detail:** `feature-medium` and `headline-only` responsive (`flex-direction`) rules change depending on the parent container class (e.g. `.landing-four-up-hybrid`, `.landing-three-one`, `.slow .feature-top` each carry their own breakpoint overrides for the same classes). This overlaps with the upcoming Containers component and hasn't been fully mapped — flagging so it isn't mistaken for one universal rule.

**Status:** Open / informational — needs a dedicated mapping pass.

### 16.2 Excerpt/dek color needs re-verification (minor)

**Detail:** The dek/excerpt color (~`#484642`, sampled from Chicago Tribune) was derived via an rgb→hex rounding pass that wasn't double-checked the way other colors in the doc were.

**Status:** Open — low priority, worth a re-check before treating as final.

### 16.3 `object-fit: fill` on card images — distortion risk

Both hero and feature-medium images use `object-fit: fill` with no `aspect-ratio` set, meaning images are stretched to exactly fill their container rather than cropped-to-fill (`cover`). Distortion is currently minimal because sampled images happen to be close to the container's aspect ratio, but an editor uploading an off-ratio image would visibly stretch/squash it.

**Action needed:** Confirm with engineering whether `fill` is intentional or should be `cover`, since this is a live distortion risk on any off-ratio upload.

**Status:** Open.

### 16.4 TopZone Article Card (Zone 1 secondary stories) — headline color, rule color and image box

**Found:** 2026-10-30, measured live on ocregister.com at 1100px and 700px (Karl resized the window); the `.busy .feature-small` CSS is identical on all 6 review sites. **Team:** CMS. Figma: WordPress Elements ▸ Homepage ▸ TopZone Article Card (`3336:46079`).

**Design:** headline `color/gray/min` (#141414); the 1px bottom rule (XS and S) `color/gray/500` (#CCCAC7); the image fills its box (280×157 at L, 97×54 at S).

**Production:**
- Headline color `#000000` (rgb 0, 0, 0) instead of `color/gray/min`.
- Bottom rule `#AAA7A4` at 640–799px instead of `color/gray/500` (#CCCAC7). Not measured below 640px.
- Images keep their own proportions inside the image box, top-aligned (at 1100px: 108, 177 and 157px tall in a 157px box), so wide photos leave white space under them; the box also has 8px of margin below it. Related to 16.3.

Sizes, gaps and type otherwise match Figma at both widths (L: 507 card, 280×157 image, 20px gap, Noto Serif Bold 18/21.6; S: 330 card, 97×54 image, 20px gap, 16/18.88).

**Fix:** set the headline to `color/gray/min` and the rule to `color/gray/500`; fill the image box (`object-fit: cover`, image 100% of the box) or confirm the letterboxing is intended.

**Status:** Open. Added 2026-10-30.

### 16.5 Latest Headlines (Zone 1 headline list) — title gap, rule color and headline weight

**Found:** 2026-10-30, CSS and computed styles on all 6 review sites at 1728px, and on ocregister.com at 700px (Karl resized the window). The `.busy .headline-list` rules are identical on all 6. **Team:** CMS. Figma: WordPress Elements ▸ Homepage ▸ Latest Headlines (`3476:62396`) and Latest Headlines List Item (`3336:46118`).

**Design:** built to match production (Karl, 2026-10-30), with values rounded to the nearest multiple of 4 / 8 and its token. Figma was changed the same day: time inline after the headline, headline 15 / 19px in `color/gray/black`, the S (640–799px) variant full width, title-to-list gap 16px (`spacing/200`) on every theme.

**Production (still different):**
- **Title to the first item:** the title's `margin-bottom` is 15px on Bold Coastal (ocregister, denverpost), 17px on Measured Vibrant (chicagotribune, orlandosentinel) and 21px on Modern Earthy (mcall, canoncitydailyrecord). The design is 16px (`spacing/200`) on every theme.
- **Rule between items:** #D7D6D2 (Bold Coastal), #C8C4C0 (Measured Vibrant), #DDD8D5 (Modern Earthy). The design is `color/gray/500` (#CCCAC7). The Bold Coastal value is also entry 3 (`--site-branding-gray-500`).
- **Headline weight:** CSS `font-weight: 600`, but the sites load only the 400 and 700 faces of Noto Sans and Noto Serif, so it renders Bold. The design is Bold (`font/weight/bold`).

Everything else matches: one column at every width (capped at 540px below 640px, full width at 640–799px, a 40% / 30.77% / 25% side column from 800px), 12px between items, 1px top rule with 16px below it, headline 15 / 19px #000000 in the theme heading family, time Noto Sans 13 #5D5B5A inline after the headline.

**Fix:** set `.headline-list-title` `margin-bottom` to 16px on every theme; set the rule to `color/gray/500`; set the headline weight to 700 (or load a 600 face and confirm the lighter weight is wanted).

**Status:** Open. Added 2026-10-30.

### 16.6 Newsletter Signup (end of Latest Headlines) — button style, block color and prompt color

**Found:** 2026-10-30, computed styles on all 6 review sites at 1728px; ocregister.com also at 900 and 700px (Karl resized the window). **Team:** CMS. Figma: WordPress Elements ▸ Homepage ▸ Newsletter Signup (`3336:44765`).

**Design:** built to match production (Karl, 2026-10-30; values rounded to the nearest multiple of 4 / 8 and its token): 32px above the prompt, 12px to the button, 16px below, the same at every width; prompt Bold 15 / 16px in `font/theme/small-headline-family`, `color/gray/min`; block `color/gray/600`; the button is Button Primary on every theme (Karl).

**Production (still different):**
- **Button:** an uppercase "SIGN UP" link, Noto Sans 600, 15px with 12.19 / 15.94px padding (41px tall) and a 1px rgba(0,0,0,.15) border on Bold Coastal; 13px with 10.56 / 13.81px padding (38px tall) on Measured Vibrant; outlined on Modern Earthy (transparent, 2px primary border, primary text, 43px tall). The design is Button Primary: filled `color/theme/primary`, white Noto Sans Bold 16px Title Case "Sign Up", 40px.
- **Block color:** #F1EFEB on Bold Coastal (matches `color/gray/600`), #F5F3F0 on Measured Vibrant, #ECEDE7 on Modern Earthy.
- **Prompt color:** #0A0908 (Bold Coastal), #1F1E1C (Measured Vibrant), #141414 (Modern Earthy, matches). The design is `color/gray/min` (#141414).
- The prompt text is set per site ("Get the latest news delivered daily!" on ocregister, "Sign up for Newsletters and Alerts" on denverpost, "Sign up for email newsletters" on the other four). Content, not a fix.

Everything else matches: spacing (16px `li` padding + 16px block padding, 12px prompt margin), the prompt's family, size, weight and 16px line height, centered text. The theme rule `.newsletter-simple .newsletter-item { padding: 1em 0 }` below 1040px is overridden inside Latest Headlines (0 at 900 and 700px), so the block has no breakpoint there.

**Fix:** make the Sign Up link the Button Primary style on every theme (Title Case, 16px Bold, 8px / 16px padding, 40px tall, `color/theme/primary` fill); set the block to `color/gray/600` and the prompt to `color/gray/min` on every theme.

**Status:** Open. Added 2026-11-02.

### 16.7 Section rails (Section Rail Card Narrow / Wide, Horizontal Feature Card, Headline List Item) — per-theme grays and raw values

**Found:** 2026-11-02, measured live on ocregister.com (Bold Coastal) at 1280, 1100, 900 and 700px (Karl resized the window); the `.section-highlight` CSS is identical on all 6 review sites; fonts checked on chicagotribune.com and mcall.com. **Team:** Design (no production fix asked yet). Figma: WordPress Elements ▸ Homepage ▸ Section Rail Card Narrow (`3352:22067`), Section Rail Card Wide (`3709:43975`), Feature + List Content Block (`3484:66933`), Horizontal Feature Card (`3709:41113`), Headline List Item (`3709:40904`).

**Design:** built raw, as production renders it on Bold Coastal (Karl, 2026-11-02, for these components only): production's values with tokens only where one matches exactly; no rounding to the 4 / 8 grid. The old Section Rail Card was split into Narrow and Wide with production's breakpoints (800px for Narrow; 800, 1040 and 1280px for Wide).

**Production (differs from the design):**
- **Rule between list items:** #D7D6D2 on Bold Coastal (the design's raw value), #C8C4C0 on Measured Vibrant, #DDD8D5 on Modern Earthy. The last item's darker rule below 1040px is #AAA7A4 on Bold Coastal (not measured on the other themes). No gray token matches these; the same grays as Latest Headlines (16.5).
- **Narrow lead rule:** production's `.section-feature` rule is #D7D6D2; the design's lead is the shared 1Col Article Card, whose rule is `color/gray/500` (#CCCAC7).
- **Wide lead excerpt:** #38322A on Bold Coastal (the design's raw value; 12.7:1). Not measured on the other themes.
- **Title gap:** the title's `margin-bottom` is 1em of the theme's eyebrow size (20px Bold Coastal, 17px Measured Vibrant, 21px Modern Earthy). The design is 20px (`spacing/250`) on every theme.
- **List headline weight:** CSS `font-weight: 600`, rendered Bold (the sites load only the 400 and 700 faces). The design is SemiBold.
- **Raw values kept** (production's em and percentage values): 7.25px headline to excerpt and 7.5px under the excerpt in the Horizontal Feature Card, the 9.9 / 10.5 / 20.2px column gaps at 1040 and 1280px, 15.5 / 23.5px under the Narrow lead's excerpt.

**Fix:** none asked of production yet. To decide (Karl): whether the section-rail grays and the excerpt color become tokens (they recur in 16.5), whether the Narrow lead's rule should be #D7D6D2, and whether the raw gaps should move to the 4 / 8 grid later.

**Status:** Open. Added 2026-11-02.

### 16.8 Photos Block (homepage Zone 7) — off-grid gaps, per-theme grays, thumbnail image and headline

**Found:** 2026-11-02, CSS `.feature-media` read on all 6 review sites at 1728px (the same layout everywhere; only colors and the title change by theme); layout measured on mcall.com at 360, 900 and 1100px, ocregister.com at 778px and denverpost.com at 1728px. **Team:** CMS. Figma: WordPress Elements ▸ Homepage ▸ Photos Block (`3352:20865`).

**Design:** matches production on the 4 / 8 grid with spacing tokens (`CLAUDE.md`, Design vs. production). Device = production's breakpoints: `XS (≤639px)`, `S (640–799px)`, `M (800–1039px)`, `L (1040–1279px)`, `XL (≥1280px)` (`components/breakpoint-audit.md`).

**Production (differs from the design):**
- **Off-grid gaps (rounded in the design):** thumbnail image to headline 15px (`.media-feature-secondary figure { margin-right: 0.9375em }`; design 16px, `spacing/200`); lead-to-list column gap 20.16px at 1040px and up (`calc(62.5% − 0.47rem)` / `calc(37.5% − 0.79rem)`, and 61.54% / 38.46% at 1040–1279; design 20px, `spacing/250`); 2-per-row gap below 1040px 20.16px (`calc(50% − 0.63rem)`; design 20px); 11.25px under the lead excerpt (`0.75em`; design 12px, `spacing/150`).
- **Title gap:** 1em of the theme's eyebrow size (20px Bold Coastal, 17px Measured Vibrant, 21px Modern Earthy); design 20px on every theme. The title itself is entry 14.
- **Rule between thumbnails:** #D7D6D2 Bold Coastal, #C8C4C0 Measured Vibrant, #DDD8D5 Modern Earthy; design `color/gray/500` (#CCCAC7), the Horizontal Thumbnail Card's rule. The same grays as 16.5, 16.7 and entry 18.
- **Lead excerpt color:** #38322A Bold Coastal, #484642 Measured Vibrant, #1F1E1E Modern Earthy; design #393938 (the 1Col Article Card's excerpt).
- **Thumbnail image:** 90 × 50.6px (16:9); design 90 × 51.
- **Thumbnail headline:** CSS weight 600, rendered Bold (only the 400 and 700 faces load); design SemiBold. Production wraps to as many lines as needed; the design's Mobile thumbnail shows two lines with an ellipsis.

**Fix:** round the gaps to the grid: `figure { margin-right: 1em }`, a 20px (`1.25rem`) gap between the lead and the list and between the two columns (for example `display: grid; gap: 1.25rem` instead of the percentage widths), and `0.8em` (12px) under the excerpt. Colors: to decide with 16.5 and 16.7 (Karl) whether the per-theme grays become tokens or production moves to `color/gray/500`.

**Status:** Open. Added 2026-11-02.

### 16.9 TOP ZONE Block (homepage Zone 1) — 20.16px gaps and no space before the ad at 800–1039px

**Found:** 2026-11-02, the Zone 1 CSS (`section.feature-primary.busy`, `.feature-wrapper`, `.feature-left`, `.feature-top`, `.feature-bottom`, `.headline-list`, `.sidebar-ad-container`) read on all 6 review sites at 1728px (identical); layout measured on mcall.com at 360, 778, 900, 1100, 1280 and 1728px. **Team:** CMS. Figma: WordPress Elements ▸ Homepage ▸ TOP ZONE Block (`3352:19482`).

**Design:** matches production on the 4 / 8 grid with spacing tokens (`CLAUDE.md`, Design vs. production): Device = production's breakpoints `XS (≤639px)`, `S (640–799px)`, `M (800–1039px)`, `L (1040–1279px)`, `XL (≥1280px)` (`components/breakpoint-audit.md`); column widths are production's percentages.

**Production (differs from the design):**
- **Column gaps 20.16px:** the columns are percentages with `justify-content: space-between` (wrapper `calc(75% − 0.32rem)` / ad `calc(25% − 0.94rem)` from 1280px, `calc(69.2308% − 0.39rem)` / `calc(30.7692% − 0.87rem)` at 1040–1279, the same pairs inside the wrapper, `60% − 0.5rem` / `40% − 0.75rem` at 800–1039, and the story cards `50%` less 10.08px), so every gap is 20.16px; the design is 20px (`spacing/250`).
- **No space before the ad at 800–1039px:** `.feature-primary { flex-wrap: nowrap }` with a `calc(40% − 0.75rem)` ad column narrower than the 300px ad, so the ad pushes the wrapper and Latest Headlines touches it (0px; measured at 900px: wrapper 565, ad 565–865). The design keeps 0 to match; a 20px gap like the other widths is probably what was meant.
- **Extra content in Zone 1:** on mcall.com a video player (400px) and a promotion widget sit under the story cards; not part of the design's block.

**Fix:** use a 20px (`1.25rem`) `gap` instead of the percentage arithmetic, and give the ad column at 800–1039px a 20px gap (to decide with Karl: design and production both 0 today).

**Status:** Open. Added 2026-11-02.

### 16.10 Related Article List Item (Zone 1 lead's Related list) — title size, item spacing, weight and time color

**Found:** 2026-11-02. CSS `.feature-primary .primary-related` read on all 6 review sites (identical item rules; the title follows each theme's heading family: Noto Serif in Bold Coastal and Measured Vibrant, Noto Sans in Modern Earthy); measured on ocregister.com at 360, 778, 900, 1100, 1280 and 1371px. orlandosentinel.com and mcall.com read from their stylesheets (their homepages had no Related list that day). **Team:** CMS. Figma: WordPress Elements ▸ Homepage ▸ Related Article List Item (`3334:43017`), used in Zone 1 Lead Article Card (`3336:46157`) and TOP ZONE Block (`3352:19482`).

**Design:** matches production on the 4 / 8 grid (`CLAUDE.md`, Design vs. production): a 16px bullet column (`spacing/200`) with a 4px `color/gray/black` dot, the title (`font/theme/heading-family` Bold 12, 19px line height, −1%, `color/gray/black`) with the time inline after it (Noto Sans Regular 11, 20.625px line height, `color/gray/200`), items 4px (`spacing/050`) apart and hugging their text. Before 2026-11-02 Figma had a 22px bullet column, a 6px `color/gray/min` dot and fixed 41 / 45px items.

**Production (differs from the design):**
- **Title size 12.25px** (`0.875em` of the list's `0.625em`): the design is 12px (`font/size/12`).
- **Item spacing 4.375px** (`li { margin-bottom: 0.4375em }`): the design is 4px (`spacing/050`).
- **Weight:** the title link is CSS 600, but the themes load only the 400, 700 and 800 faces, so it renders Bold, as the design is.
- **Time color #5D5B5A:** the design is `color/gray/200` (#5E5D5C). Both pass (6.6:1).
- **Bullet:** production draws the browser's `disc` marker (about 3.3px) in a 1rem indent; the design draws a 4px dot in a 16px column.
- **Hover:** production turns the title `--primary`; Figma has no hover state.

**Fix:** in `.feature-primary .primary-related`: title 12px (`0.75rem`) at weight 700, `li` margin-bottom 4px (`0.25rem`), time color #5E5D5C (`color/gray/200`). Keep the disc marker or draw the 4px dot, either is fine.

**Status:** Open. Added 2026-11-02.

---

## 17. Zone 1 slideshow (gallery lead) — type, spacing and colors off the design tokens; slide count not announced

### 17.1 Type, spacing and colors off the design tokens

**Found:** 2026-10-26, on develop.denverpost.com (Zone 1 lead that is a photo gallery: `article.slideshow.feature-large > .article-slideshow`, the mng-gallery slider), checked at about 1465, 768 and 360px. **Team:** CMS. The controls (arrows, count and caption size) switch at production's 800px (`max-width: 49.9375em`); the design uses the same breakpoint.

Design: WordPress Elements ▸ Homepage ▸ **Zone 1 Slideshow** (`3640:50278`), used by Zone 1 Lead Article Card, Gallery=Slideshow.

| Property | Production | Design |
|---|---|---|
| Slide count and caption size | 13px at 800px and up; 11.375px below (0.8125em of the 14px base `.article-slideshow` gets at `max-width: 49.9375em`) | `font/size/13` at 800px and up; `font/size/11` below (same 800px breakpoint as production) |
| Line height | 130% (16.9px / 14.79px) | auto |
| Slide count color | `#0A0908` | `color/gray/black` |
| Caption color | `#5D5B5A` | `color/gray/200` (#5E5D5C) |
| Credit color | `#9D9A98` (2.7:1, fails WCAG AA) | `color/gray/200` (closest gray that passes) |
| Caption block padding | desktop 13.93 top, 9.29 bottom; below: 12.19 / 8.13 | 12 top (`spacing/150`); bottom 16 desktop (`spacing/200`, with the caption's 6.5 margin) / 12 below (`spacing/150`) |
| Space between credit, count and caption | 5.5 / 6.5px desktop; 5.7px below | 8px desktop (`spacing/100`); 4px below (`spacing/050`) |
| Rule under the caption | `3px solid #D7D6D2` | 3px `color/gray/500` (#CCCAC7) |
| Space below the slideshow | 13.8px desktop; 12.1px below | 12px (`spacing/150`) |
| Arrows | `#0A0908` at 75% opacity; icon 30px (26.25px below desktop) | `color/gray/black` at 75%; icon 30px / 26px |

**Fix:** use the design's token values for the slideshow type, colors and spacing.

### 17.2 Slide count isn't announced to screen readers (required)

**Found:** 2026-10-26, on develop.denverpost.com (Zone 1 gallery lead, `.article-slideshow`). **Team:** CMS. **Required update (Karl, 2026-10-26).**

When the previous / next buttons change the photo, the "1 of 29" count (`.slide-count`) updates visually, but nothing tells a screen reader user which photo they're on: the count and caption container have no `aria-live`.

**Fix:** add `aria-live="polite"` to `.slide-count` (or to `.mng-gallery-information-container`, so the caption is read too), so the new count is announced after each change. Design: WordPress Elements ▸ Homepage ▸ Zone 1 Slideshow (`3640:50278`) and the For You prototype prompt, section 10.

---

## 18. Load More / Show More Photos — notch off center and colors off the design tokens

**Found:** 2026-10-23, on the OC Register homepage (Photos block) and a section front, in the shared theme rule `.show-more-videos, .load-more` (and `::before`). Rechecked on all 6 review sites 2026-10-27: everything is the same on every theme except the gray of the rule and notch edges. **Team:** CMS.

**Status: on hold (Karl, 2026-10-23).** For now the design uses production's exact values: WordPress Elements ▸ Homepage ▸ Photos ▸ **Show More Affordance** (`3634:49423`), used in Photos Block and the For You feed. The token version below, **Show More Affordance (tokens, future reference)** (`3634:49427`), is the future target; this fix applies when it's adopted.

| Property | Production | Design |
|---|---|---|
| Notch position | about 5px right of center: `::before { left: 50%; transform: rotate(-45deg) translateY(-50%) }` overrides the `translate(-50%, 0)` that would center it | always centered on the rule (a bug) |
| Notch fill | `#FBFBFB` | `color/gray/600` (#F1EFEB) |
| Notch edges and rule | `1px solid`: `#D7D6D2` Bold Coastal (ocregister, denverpost), `#C8C4C0` Measured Vibrant (chicagotribune, orlandosentinel), `#DDD8D5` Modern Earthy (mcall, canoncitydailyrecord) | `color/gray/500` (#CCCAC7) on every theme |
| Label | Noto Sans Bold 16/16, uppercase, `var(--primary)` | same (`font/size/16`, `font/style/bold`, `color/theme/primary`) |
| Space above and below the label | 40px (`padding: 2.5em 0`) | 40px. No spacing token is this large yet (largest is `spacing/300`, 24px); kept at production's value. |

**Fix:** center the notch (for example `transform: translate(-50%, -50%) rotate(-45deg)` with `top: 0`), fill it with the gray/600 value (#F1EFEB) and use the gray/500 value (#CCCAC7) for the rule and the notch edges.

---

## 19. Blueconic Block (was Most Popular) — resolved: the design now matches production

**Resolved 2026-11-02 (Karl):** the Blueconic block is built in Blueconic, a third-party platform we don't control like our WordPress themes, so the design now matches production: WordPress Elements **Blueconic List Item** (`3704:40676`, was Most Popular List Item `3352:24171`) and **Blueconic Block** (`3352:20526`) are built raw in production's values, measured on all 6 review sites at 900px, canoncitydailyrecord at 360px and ocregister / canoncitydailyrecord at 1280px. No production change is needed for 19.1–19.3; the history below is kept for reference. Remaining notes (per-theme em values, the Bold Coastal-only 5px, the card template) are in `components/wordpress/blueconic-block/` and `blueconic-list-item/`, Known issues.

**Found:** 2026-10-07, ocregister.com at 360, 768, 1024, 1100 and 1280px (homepage "Most Popular", `.dfm-most-popular-flex-container` inside `landing-three-one` → `.three-one-left`).

**Figma spec (source of truth):** WordPress Elements `Blueconic Block (Most Popular)` (`3352:20526`) with `Most Popular List Item` (`3352:24171`) kept at **44px** tall per item. The space between items is added in the block (column auto-layout gap), not in the item.

### 19.1 Item spacing and column gaps

Production stacks the items with no gap. Each row is 60px tall for a one-line headline and 77px for two lines. Design keeps the item at 44px and adds the difference as the gap between items, so a one-line row lands on production's 60px.

| Width | Columns (production) | Design column gap | Design item gap |
|---|---|---|---|
| 360 (Mobile) | 1 × 340 | — | 16 (`spacing/200`) |
| 768 (Tablet) | 2 × 365 | 19 | 16 (`spacing/200`) |
| 1024 | 2 × 288 (every headline wraps to 2 lines) | 19 | 11 (fits the 77px two-line row) |
| 1100 | 2 × 360 | 21 | 16 (`spacing/200`) |
| 1280 | 2 × 459 | 22 | 16 (`spacing/200`) |

### 19.2 Spacing values with no token — remove in a future pass

The gaps of **11, 19, 21 and 22** px come from production's fluid layout and are kept in Figma as plain numbers on purpose. There are no tokens for them, and none should be created. When engineering moves these blocks onto the spacing scale (4 / 8 / 12 / 16 / 20 / 24), replace them: 11 → 12 (`spacing/150`), 19 / 21 → 20 (`spacing/250`), 22 → 24 (`spacing/300`) or 20, and update the Figma gaps to match. 16 and 20 are already bound to `spacing/200` / `spacing/250`.

### 19.3 Item headline type

| | Production (all widths) | Design (`Most Popular List Item`) |
|---|---|---|
| Headline | Noto Serif **600**, 16px / **17.07px** | Noto Serif **Bold (700)**, 16px / **auto (~22px)** |

One-line items are unaffected (the 44px height holds), but every extra line adds about 5px more in design than in production. Two-line rows are 66px plus the gap in design versus 77px in production, and three-line rows grow further apart. **Decision (Karl, 2026-10-07): keep the Figma item as is** — 44px tall, Noto Serif Bold 16 / auto. This is a known difference, not a Figma bug; production should move to the design's type if it's ever aligned.

---

## 20. Video carousel ("Videos from @OCRegister") — fixed-height iframe leaves ~200px of unused blank space at narrow (340–360px) widths

**Found:** 2026-09-16, during a systematic 340px/360px breakpoint sweep across all homepage components (per Karl — checking widths narrower than any explicit CSS breakpoint, since 640px is the first real tier boundary). Verified twice: once via a narrowed real desktop Chrome window, and again via true mobile device emulation (Pixel 9 UA, touch-enabled, no desktop scrollbar) at both 340px and 360px, on ocregister.com.

**Production:** The `.dfm-page-middle-flex-container` block (a single Flourish-hosted `<iframe src="https://flo.uri.sh/visualisation/21363813/embed" title="Video from @OCRegister">`) renders at a fixed height of 490px at both 340px and 360px viewport widths. At these widths the visible content inside the iframe — header ("Videos from @OCRegister"), subtitle, the row of video tiles, and the horizontal scroll-indicator bar — only fills roughly the top 260–265px of that height, leaving about 200px of blank white space below the scroll indicator before the next section (Photos) begins. Confirmed identically at both 340px and 360px, and identically whether tested via a narrowed desktop window or true mobile emulation, so this isn't a testing-methodology artifact — it's a real rendering behavior at these widths.

**Figma spec:** The `Videos from OCRegister Carousel` component (built 2026-09-16, see the homepage template audit section 3.35, since retired) sizes its outer frame to HUG its actual content height at every placed width — header + subtitle + tile row + scroll indicator, with no trailing blank space. It does not reproduce this gap, since the gap appears to be a property of the live Flourish embed's own fixed iframe height, not something the surrounding page template's CSS controls (no dedicated `@media` rules were found for `.dfm-page-middle-flex-container` itself in this or the earlier 3.2x-era investigation).

**Action needed:** Since the iframe height is most likely set via the Flourish visualisation's own embed configuration rather than page-template CSS, this is probably a Flourish-settings fix rather than a template fix — either make the embed size its iframe responsively to actual content height at narrow widths, or set a shorter fixed height specifically for the sub-640px range. Flagging for whoever owns the Flourish embed configuration to confirm whether that's adjustable there.

**Status:** Open.

---

## 21. Upcoming Events (CitySpark widget) — font family

**Found:** 2026-10-07, ocregister.com (homepage `.csLayHolder` → `.cswidholder` iframe, CitySpark template).

**Figma spec (source of truth):** WordPress Elements `Upcoming Events Widget` matches production's layout, sizes, spacing and colors exactly (Karl, 2026-10-07), but sets all text in **Noto Sans**, like the rest of the design system.

**Production:** every text element in the widget is **Roboto Condensed**: the title "Upcoming Events" 400 20/22, the "See All Events" and "Add your event" buttons 400 12/15, the card dates 400 11, event names 700 13/14, venues 400 12/14, date-strip days 400 15/20 uppercase and dates 400 20/19.

**Fix:** change the CitySpark widget template's font to Noto Sans (same sizes and weights) on every site, with whoever manages the CitySpark account.

---

## 22. Sponsored content badge — needs to be fixed in production

**Found:** 2026-10-02, live check of the six review sites (homepage, Latest Headlines and article lists).

**Figma spec (source of truth):** the "Sponsored content" badge (WordPress Elements, Article Status Badge `Type=Sponsored`, `3344:63995`, and its instances in Latest Headlines, Top Zone and TopZone Article Card) was **#7D161E with white text** (Karl, 2026-10-02) until 2026-11-03, when it became a placeholder on `color/theme/secondary` (see the update below). Until then it was intentionally not bound to a theme token: none of the theme roles works on every site (white text fails contrast on the yellow `secondary` themes, and `tertiary` passes on only 9 of 22 themes).

**Production:** the live badge is the Nativo native-ad label (inline style set by the vendor template), not a theme class, and it doesn't match the design anywhere checked.

| Site | Live label background | Design | Match |
|---|---|---|---|
| denverpost.com | #003459 (navy, white text) | #7D161E | ❌ |
| ocregister.com | #0097A7 | #7D161E | ❌ |
| chicagotribune.com, orlandosentinel.com, canoncitydailyrecord.com, mcall.com | no Nativo sponsored unit on the homepage checked | #7D161E | not checked |

**Fix:** on hold since 2026-11-03 (see the update below): nothing to fix until a sponsored badge is designed; then update the Nativo sponsored-label template on every site to it, with Ad Ops. (Until 2026-11-03 this read: update it to #7D161E with white text.)

**Update 2026-11-02 (Karl):** the badge now matches production's Subscriber Only chip (22.1): Noto Sans Regular (was SemiBold), 0 × 4px padding (was 2 × 5px), 22.65px tall (was 27). Sponsored keeps #7D161E (raw; it equals only Denver Post's `primary-dark`). No sponsored badge was live on any of the 6 homepages that day (only display-ad and CitySpark labels).

**Update 2026-11-03 (Karl): placeholder on the site secondary color.** Re-checked all 6 review sites (homepage scrolled to the end, the sponsored or branded section, and a sponsored article on each). No sponsored badge is live anywhere; the Nativo script loads on all 6 but served no unit. What production does instead:

| Site | How sponsored stories are labelled |
|---|---|
| denverpost.com | "Sponsored:" typed into the headline (homepage Real Estate block, Noto Serif Bold, black); on the article, the "Sponsored Content" breadcrumb plus a "Sponsored" type-of-work link that opens an explanation |
| ocregister.com | "Sponsored Content" section; on the article only the "SPONSORED CONTENT" breadcrumb |
| chicagotribune.com | "Branded Content" section, headlines start with "Branded:"; "BRANDED CONTENT" breadcrumb |
| mcall.com | "Branded Content" section (car reviews), no prefix; breadcrumb only |
| orlandosentinel.com | "Sponsored Content" section with older stories, no label |
| canoncitydailyrecord.com | only the CitySpark events widget's own "Sponsored" chips (third party, Open Sans 10px) |

So the design's Sponsored badge is now a **placeholder**, not a production match (Karl): the chip is `color/theme/secondary` with Gray-Min (`color/gray/min`) text (no new token), in the Subscriber chip's type and padding. Gray-Min on secondary passes 4.5:1 on 20 of 22 themes; it fails on Denver Post 1.43:1 (navy `#003459`) and The Baltimore Sun 4.15:1 (accepted for the placeholder). Nothing to fix in production until a sponsored badge is designed.

**Note:** the theme's own `.sponsored-content .sponsored-flag` (a different element) uses `primary-light` with white text, and `secondary` with dark text on images.

**Status:** Open.

### 22.1 Subscriber Only badge — font family and side padding

**Found:** 2026-11-02. `.subscriber-only-tag` read on all 6 review sites (one identical rule in `boldcoastal.css`, `measuredvibrant.css` and `modernearthy.css`); no homepage had a subscriber-only story that day, so it was drawn by each site's own CSS on a live card (ocregister.com, canoncitydailyrecord.com). **Team:** CMS. Figma: WordPress Elements ▸ Homepage ▸ Article Status Badge (`3344:63995`), Type=Subscriber; used in 1Col Article Card, Section Rail Card Narrow and Photos Block.

**Production:** `background-color: var(--primary-dark); color: #fff; padding: 0 5px; text-transform: uppercase; font-family: "Source Sans Pro", Helvetica, sans-serif !important; font-size: 13px !important; line-height: 22.652px !important; width: max-content !important`. No weight is set, so it renders Regular. "Source Sans Pro" is never loaded (no web font), so readers see Helvetica or Arial unless the font is installed on their computer.

**Design (changed 2026-11-02 to match production, Karl, after a side-by-side):** `color/theme/primary-dark` chip, white (`color/gray/max`) Noto Sans Regular 13 caps, 22.652px line height, 0 × 4px (`spacing/050`) padding, 22.65px tall. Was SemiBold on `color/theme/primary`, 2 × 5px, 27px tall. Contrast 8.0:1 Bold Coastal, 9.3:1 Measured Vibrant, 5.8:1 Modern Earthy.

**Production differs from the design:**
- **Font:** "Source Sans Pro" (not loaded; Helvetica / Arial fallback) instead of Noto Sans.
- **Side padding:** 5px instead of 4px (the 4 / 8 grid value).

**Fix:** in `.subscriber-only-tag` (all three theme stylesheets): `font-family` to the Noto Sans stack (`"Noto Sans", "Helvetica Neue", Arial, sans-serif`, entry 2) and `padding: 0 4px`.

**Status:** Open. Added 2026-11-02.

---

## 23. Article breadcrumbs — label font family and text color

**Found:** 2026-10-08, ocregister.com article page (`.breadcrumbs` › `.breadcrumb-type-wrapper > a`, e.g. "NEWS › ENVIRONMENT • News").

**Figma spec (source of truth):** WordPress Elements › Article Page › `Breadcrumbs` (`1110:19469`) matches production's sizes, spacing and colors (rebuilt 2026-10-08, Karl): crumbs Noto Sans 700 16/22 uppercase, the `arrow-right2` icon at 14px in `color/gray/500` with 5px on each side, and the label " • News" in Noto Sans 400 15.2/15.2 (`font/size/15-2`). All breadcrumb text (crumbs, bullet and label) is **`color/gray/min` (#141414)** (Karl, 2026-10-08).

**Production:**
- *Label font:* the label and its CSS-added " • " bullet have no font family set, so they render in **Helvetica** (inherited from the page default). The crumbs are Noto Sans.
- *Text color differs across sites:* breadcrumb text (crumbs, bullet and label) is **#000000** on OC Register, Chicago Tribune and Orlando Sentinel, but **Denver Post's crumbs use its theme red #8E1024**. So some sites let breadcrumbs take a theme / site-override color and others don't.
- *Separator arrow color differs across sites:* **#D7D6D2** on OC Register and Denver Post, **#C8C4C0** on Orlando Sentinel. Design uses `color/gray/500` (#CCCAC7), the closest gray token.
- mcall.com and canoncitydailyrecord.com weren't checked (Chrome isn't allowed on those domains).

**⚠ Decision needed: design AND dev teams together.** Should breadcrumb text be one neutral color on every site, or follow each site's theme / Customizer colors (as Denver Post's red does today)? Design's proposal (Karl, 2026-10-08): one neutral, `color/gray/min` (#141414), on every site whatever its theme or site override, so breadcrumbs don't take theme colors; the arrow is `color/gray/500` everywhere. Dev needs to confirm where Denver Post's red comes from (theme stylesheet or Customizer override) and what changing it affects. Record the agreed answer here.

**Fix:**
1. Set the label to Noto Sans (same 0.95em size, 400 weight) on every site. *Not blocked.*
2. *Pending the decision above:* set all breadcrumb text to the agreed color on every site (proposed `color/gray/min` #141414: from #000000 on most sites, and from #8E1024 on Denver Post).
3. *Pending the decision above:* set the separator arrow to one color on every site (proposed `color/gray/500` #CCCAC7, from #D7D6D2 / #C8C4C0).

**Status:** Open. Fix 1 is ready; fixes 2 and 3 wait on the design + dev decision.

---

## 24. Obituaries masthead — shadow and bottom border don't match the main masthead

**Found:** 2026-10-23, in the theme stylesheets (boldcoastal.css, measuredvibrant.css, modernearthy.css; checked on ocregister, chicagotribune and canoncitydailyrecord) while setting up the shadow tokens. **Team:** CMS.

**Design:** the obituaries masthead matches the main masthead (Karl, 2026-10-23). WordPress Elements ▸ Menus and Parts: **ObitMastHead** (`1139:22369`) and **Masthead** (`456:2572`) both use the effect style **shadow/masthead** (0 3px 3px 0, black 25%) only when scrolled, and no shadow at the top of the page.

| Property | Main masthead (production) | Obituaries masthead (production) | Design (both) |
|---|---|---|---|
| Shadow at the top of the page | none | `0 5px 10px rgba(0,0,0,.4)` (`.obits-content-header .nav-wrapper-primary`), always on | none |
| Shadow when scrolled | `0 3px 3px rgba(0,0,0,.25)` (`.site-header.headroom--not-top`) | `0 5px 10px rgba(0,0,0,.4)` | shadow/masthead (0 3px 3px · 25%) |
| Nav bottom border | `1px solid #9D9A98` (`.nav-wrapper-primary`) | `1px solid #CCCCCC` | same as the main masthead |

**Fix:** remove the `.obits-content-header .nav-wrapper-primary` box-shadow and border-bottom overrides, so the obituaries masthead uses the main masthead's styles.

---

## 25. Obituaries navigation — hamburger and "All Sections" both visible at desktop width

**Figma / platform rule:** On the homepage, the hamburger icon is only visible at ≤1039px.

**Production:** On the Obituaries page, at a comfortably-desktop viewport, both the hamburger icon and the "All Sections" button are visible simultaneously — confirmed on all 6 pilot sites (Chicago Tribune, Denver Post, OC Register, Orlando Sentinel, Greeley Tribune, mcall.com), including at a 1728px viewport.

**Action needed:** Still not explained — genuinely flagged to engineering to confirm whether this is intentional for the Obituaries template or a bug.

**Status:** Open.

---

## 26. Obituaries page CTA button — should be Button Primary, Default (Chicago Tribune, Denver Post)

**Found:** 2026-09-01, during the buttons audit.

**Figma spec:** Button Primary (main file, ***Buttons page), Default size — padding 16px vertical + 20px horizontal, 14px text.

**Production:** The live `.subscribe-button` CTA (249×44, confirmed identical on Chicago Tribune and Denver Post, also appears on regular article pages — a general paywall CTA, not obituary-specific) renders with padding 14px/10px instead of 16px/20px, and font-size 15px instead of 14px. Radius and per-masthead fill color already match Figma.

**Decision (Karl, 2026-09-01):** This is not a new button size/variant — it should simply carry Button Primary's existing Default styling. Production needs to be brought in line with Figma's padding and font-size values above; no new Figma token or variant should be created for it.

**Status:** Open.

---

## 27. Obituaries — breakpoints that don't match the WordPress grid (for the CMS team)

**Moved 2026-10-30** to [`components/breakpoint-audit.md`, "All production breakpoints in one place", section B](components/breakpoint-audit.md#all-production-breakpoints-in-one-place) (Karl: the breakpoint entries should all be in one place). Under the 2026-10-30 rule, production's breakpoints are documented as they are for now and aren't drift; the earlier snap targets are kept there as the future plan. The number isn't reused.

---

## 28. Ad slots — sizes, lazy registration, disclosure label and mobile adhesion

### 28.1 Homepage "Ad Blocks" slot after Blueconic/Most Popular is undersized (300×250 instead of 300×600)

**Found:** 2026-09-14, during the five-width (340/360/768/1024/1280) homepage production-parity audit.

**Figma action taken:** Per Karl's instruction, this ad instance was updated in Figma to the production-accurate `Cube 1 RRail ATF 300x600` block at every width where it appears (Mobile 340/360, and the new 768/Tablet build), replacing the previous `Cube Article 300x250` placeholder — specifically so the Figma mockups now make this gap visible rather than quietly matching the undersized code.

**Figma spec (now, post-fix):** `Cube 1 RRail ATF 300x600` — matches the size production is actually observed serving.

**Production:** Live GPT ad-slot scanning (`iframe[id^="google_ads_iframe"]` DOM query, cross-referenced against scroll position) on ocregister.com found this slot — `cube2_rrail_mid` — rendering at 300×600 at both mobile (340/360) and tablet (768) widths, at every width checked.

**Action needed:** Confirm whether the live implementation for this ad slot is intentionally 300×250 somewhere in code (unlikely, given production itself serves 300×600 into it) or whether this was simply never corrected after being built against an earlier/incorrect spec. Since Figma now shows the corrected 300×600 size, any remaining 300×250 assumption in the live templates should be treated as the bug to fix, not Figma.

**Status:** Open.

### 28.2 Top-leaderboard ad slot renders at inconsistent sizes across page types

**Found:** 2026-09-15, during the Masthead breakpoint audit (`breakpoint-audit.md`), 375px (mobile) pass, comparing OC Register live production against the `Masthead` component set (WordPress Elements → Menus and Parts).

**Figma spec (as of this finding, before the Figma fix below):** The `Masthead` component's `Default`-state ad placement was inconsistent across `Page` variants — Home showed an ad box labeled "Top Leaderboard 320x100," while Section Front and Article showed no ad at all beneath the masthead.

**Production:** The same ad position (`div-gpt-ad-top_leaderboard`, directly below the masthead) renders at different sizes depending on page type, confirmed live at 375px width:

| Page | Live ad size |
|---|---|
| Home | 320×50 |
| Section Front (`/news/`) | 320×100 |
| Article | 320×50 |

**Decision (Karl, 2026-09-15):** This needs to be fixed in production so the top-leaderboard ad slot displays consistently. Figma has been updated (see below) to show the ad on all three page types at their live-measured sizes, so the intended placement is now visible as a reference for engineering.

**Figma action taken:** Added/corrected the ad placeholder on all three `Default`-state Page variants of the `Masthead` component (SM-Mobile tier): Home corrected to `Top Leaderboard 320x50` (was mislabeled 320x100), Section Front now shows `Top Leaderboard 320x100`, Article now shows `Top Leaderboard 320x50` — each matching what production actually serves at that page type.

**Action needed:** Engineering to reconcile the production-side inconsistency — confirm whether the top-leaderboard slot is intended to serve a uniform ad size across Home/Section Front/Article, and align production accordingly.

**Status:** Open.

### 28.3 Orlando Sentinel — ad slots register lazily on mobile homepage

On Orlando Sentinel's mobile homepage, only the `mobile_adhesion` slot registered with Google Publisher Tag at initial load; the other 10 ad containers exist in the DOM but didn't register in `getSlots()` even after scrolling most of the page and waiting. This looks like Freestar (Orlando Sentinel's header-bidding wrapper, different from the other 5 pilot sites) registering slots lazily/progressively rather than upfront.

**Action needed:** Confirm with engineering whether this is expected Freestar behavior or worth a longer dwell-time re-check.

**Status:** Open.

### 28.4 No visible ad-disclosure label

No "Advertisement"/"Sponsored" text label or `aria-label` was found near any ad container on any of the 6 pilot sites — only Google's own AdChoices icon (rendered inside the ad iframe itself, not site-authored markup).

**Action needed:** Confirm with engineering/legal whether the absence of an explicit disclosure label at the container level is intentional, since AdChoices alone is a weaker disclosure than what many other publishers use.

**Status:** Open — legal/compliance relevance.

### 28.5 Mobile adhesion — empty sticky bar shows at 1024px and up

**Found:** 2026-10-02, ocregister.com at a 1024px window (homepage and article page).

**Figma spec (source of truth):** `mobile_adhesion` exists only below 1024px — Ad Blocks `Mobile Adhesion 320x50` / `300x50` on mobile and `Mobile Adhesion 728x90` at tablet (768). The 1024, 1100 and 1280 templates have no adhesion unit (the 1024 floating anchor was removed 2026-10-02).

**Production:** at 1024px the `#mobile-adhesion` container is still fixed to the bottom of the viewport (1024×90, with its Close button), but the GPT slot has no valid size at that width (`getSizes(1024)` returns an empty list), so no ad can ever load. Readers see an empty bar.

**Fix:** hide the `#mobile-adhesion` container (and its Close button) at the same breakpoint where the slot's size mapping goes empty (≥1024px), or remove the container from the DOM at desktop widths. Check the other five review sites.

---

## 29. Main content container width — Chicago Tribune vs. Denver Post

Chicago Tribune's `main` container measures 1260px at a 1280px viewport; Denver Post measures 1245px at the same viewport — a real 15px difference, not explained by Denver Post running a different theme (it doesn't — confirmed both load real shared theme stylesheets with their own Customizer overrides, same pattern as every other site).

**Status:** Open — not root-caused; could be a scrollbar-width artifact of that specific page load rather than a genuine CSS difference.

---

## 30. Reader Dashboard — Typography (2026-09-10)

**Policy:** For anything specific to the Reader Dashboard, Figma is the source of truth — even where production currently differs. MNG Web Design System's `Dashboard/*` typography tokens (in the "Dashboard Typography" collection) are kept at their Figma-specified values; any place production has been found rendering something different is recorded here instead, for engineering to either fix in production or flag back to design if the production value should actually be adopted.

### 30.1 Page title size — `Dashboard/Titles/PageDesktop`

**Figma:** Noto Serif, **26px**, Bold (700) — matches Reader Dashboard v2.0's own Figma token (`Titles/Page (desktop, tabletH)`) exactly.

**Production:** canoncitydailyrecord.com/dashboard/ (desktop width) renders this title at **36px**, via a Tailwind `lg:text-4xl` breakpoint utility class overriding the base size.

**Action needed:** Reconcile production to the Figma-specified 26px, OR — if 36px is an intentional, approved change — get that confirmed with design so Figma can be updated to match and this item retired. Until then, MNG Web Design System's token stays at 26px per the policy above.

**Status:** Open.

### 30.2 Section Title weight — `Dashboard/Titles/SectionTitle`

**Figma:** Noto Sans, 18px, Bold (700).

**Production:** One live-measured instance showed weight 600 (Semi-Bold) instead of 700.

**Caveat (lower confidence than 30.1):** The measured instance may have been an admin/debug panel ("MNG Debugger" / "Entitlements JWT") rather than genuine reader-facing UI.

**Action needed:** Confirm on a real reader-facing Section Title instance whether it's 700 (matches Figma) or genuinely 600.

**Status:** Open.

### 30.3 `font/size/10` — unconfirmed in production

**Figma:** Defined at 10px in Reader Dashboard v2.0's Type Primitives, carried into MNG Web Design System.

**Production:** No confirmed live sighting during this audit (only canoncitydailyrecord.com/dashboard/ was checked).

**Action needed:** Low priority — confirm where (if anywhere) this size is actually used live.

**Status:** Open.

---

## 31. Reader Dashboard — Modal

**Figma source:** "ModalsCenter" library component, Reader Dashboard v2.0. **Live source:** East Bay Times preprod, account-verification flow.

### 31.1 Card border mismatch

Figma's ModalsCenter has a 1px `color/gray/300` border on the card; the live card was recorded relying on shadow only, with no border distinguished. Both may be true (a subtle border could be present but visually indistinguishable from the shadow) — not resolved either way.

**Status:** Open.

### 31.2 Backdrop opacity mismatch

Live backdrop is 45% black; the Figma-modeled value is 50% black — close, and not even built into the component as a literal property either way.

**Status:** Open — low priority.

### 31.3 Fixed 444px width, narrow-viewport behavior untested

The modal card is a fixed 444px, not fluid/responsive. Behavior at narrow viewports has not been tested.

**Status:** Open.

### 31.4 Password "Update" flow is unstyled design debt

Clicking "Update" for password doesn't open a modal — it navigates to a separate, essentially unstyled page (`/reset-password/`: Arial font, square corners, plain black button border, default gray input border) that matches none of the design system.

**Action needed:** This is design debt to flag, not a pattern worth capturing faithfully — needs a real design pass, not a Figma-matching exercise.

**Status:** Open.

### 31.5 Destructive-action modals unexplored

Only the account-verification modal was captured live. Other triggers (e.g. canceling a subscription) were deliberately not explored to avoid triggering irreversible account actions, so their modal spec is unconfirmed.

**Status:** Open — needs a human to click through and report back rather than automated exploration.

---

## 32. Reader Dashboard — Disclosure

### 32.1 Two competing disclosure/accordion patterns need reconciliation

Production's live Reader Dashboard (e.g. chicagotribune.com/user-tools/dashboard) uses a chevron/icon-based accordion pattern, different from the simpler text-link toggle documented from preprod (the pattern actually built in Figma). The chevron pattern is currently out of scope because that surface is being replaced — but if it survives the replacement, the two patterns will need to be reconciled into one.

**Status:** Open — contingent on what survives the Reader Dashboard replacement.

### 32.2 Coverage and behavior gaps

Only one instance of the disclosure pattern (Login Methods on Profile) was found and tested; other tabs (Subscription, Benefits, etc.) weren't checked for additional instances. Whether expand/collapse is animated or instant was never confirmed.

**Status:** Open.

---

## 33. Reader Dashboard masthead — shows the top nav-links row and "TRENDING:" bar, which the design excludes

**Found:** 2026-09-15, during the Reader Dashboard masthead audit (`breakpoint-audit.md`), on canoncitydailyrecord.com/dashboard/, logged in as a subscriber, at 1100px and 1040px (both above the masthead's 1039px desktop-nav threshold).

**Production:** At desktop widths, the Reader Dashboard's masthead renders the full top nav-links row (News / Local News / Sports / Things to Do / Opinion / Obituaries / Marketplace / On the Record / BestReviews) and a "TRENDING:" bar (e.g. "Fremont County Nonprofit Guide 2026," "Royal Gorge Living") above the breadcrumb and page content — the same two rows Home's masthead shows at this tier.

**Figma spec:** The `Masthead` component's `Device=XL-Desktop, Page=Dashboard` variant (`456:2715`, and the equivalent `Scrolled` variant `456:2840`) does **not** include a nav-links row or trending bar — it's just the top utility row (hamburger/All Sections, avatar, search) plus the weather/date/logo row, at 144px total versus Home's 497px 4-row structure.

**Decision (Karl, 2026-09-15):** Figma is correct — the Reader Dashboard should **not** display the trending bar or top navigation. What production shows at canoncitydailyrecord.com/dashboard/ is the bug, not a Figma gap. No Figma changes made.

**Action needed:** Engineering to suppress the nav-links row and "TRENDING:" bar on the Reader Dashboard page template at desktop widths, so it matches the intentionally-minimal masthead Figma already models.

**Note:** confirmed only on canoncitydailyrecord.com (the one site used for this phase, per Karl's direction) — not cross-checked against the other 5 repertoire sites.

**Status:** Open.

---

## 34. Reader Dashboard — breakpoints (questions for DigiScrum)

**Moved 2026-10-30** to [`components/breakpoint-audit.md`, "All production breakpoints in one place", section C (C.1 was 34.1, C.2 was 34.2)](components/breakpoint-audit.md#all-production-breakpoints-in-one-place) (Karl: the breakpoint entries should all be in one place). Under the 2026-10-30 rule, production's breakpoints are documented as they are for now and aren't drift; the earlier snap targets are kept there as the future plan. The number isn't reused.

---

## 35. Article "type of work" popup — should be the Toggletip

**Found:** 2026-10-27, on article pages (`.breadcrumb-type-wrapper`: the "News" label `#tiOpenPopupBtn` opens `#tiPopupContent`). Same on ocregister and denverpost (Bold Coastal). Not on the Chicago Tribune and Morning Call articles checked (no type-of-work label there); Orlando Sentinel and Cañon City not checked. **Team:** CMS.

**Design:** MNG Web Design System ▸ Tooltips ▸ **Tooltip**, Type=Toggletip (`7372:25744`), Placement=Bottom, built from this popup's pattern.

| Property | Production | Design |
|---|---|---|
| Box | white, `1px solid #787878`, `border-radius: 1px`, no shadow | `color/gray/max`, 1px `color/gray/300` (#838280), `radius/sm` (4px), `shadow/lg` |
| Width | 275px | 275px (matches) |
| Padding | `15px 10px` | 12px (`spacing/150`) around the text, then the 40×40 close button |
| Text | Helvetica 14.4px (0.9em), #000000 | Noto Sans Regular 13 (`font/size/13`), `color/gray/100` |
| Caret | 10px border triangle (#787878) with an 8px white one inside | 12×6, 1px `color/gray/300` edge |
| Close | `a.icon-close` link, 18px | Button In-Line Close (40×40) |
| Trigger | `aria-controls="popupContent"`, but the popup's id is `tiPopupContent`, so screen readers can't find it | `aria-controls` must match the popup's id; `aria-expanded` as now |
| Placement | below the label | centered on the trigger, 8px (`spacing/100`) between the trigger and the caret tip |

**Fix:** restyle `#tiPopupContent` to the Toggletip values above, make the close control a button, and fix `aria-controls` to `tiPopupContent` (an accessibility bug: required).

**Status:** Open.

---

## 36. Footer — legal links fail WCAG AA contrast in the design (URGENT)

**Priority: URGENT** (Karl, 2026-10-30). An accessibility failure in the design spec: fix the design before engineering matches production to it.

**Found:** 2026-10-30, while exporting the Footer (WordPress Elements ▸ Menus and Parts ▸ Footer, `354:1282`) for the For You prototype.

**Design (Figma, before the fix):** the legal bar (copyright, Privacy Policy, Terms Of Use, Accessibility, Cookie Policy, Arbitration, Powered By WordPress.com VIP, Do Not Sell My Info) is Noto Sans Regular 16 `color/gray/300` (#838280) on the footer band `color/gray/600` (#F1EFEB): **3.3:1**, below the 4.5:1 WCAG AA minimum for normal text. Every Footer variant (5 devices) and Footer_w_signup (now Blocks Footer).

**Production:** `.colophon` links `#5D5B5A` on `#F5F5F5`, 13.44px (copyright 12.48px): **6.2:1**, passes. Same on ocregister, denverpost, orlandosentinel, canoncitydailyrecord and mcall (2026-10-30); chicagotribune not checked yet (the browser extension doesn't open it). Production is the accessible one here: don't move it to the current design color.

| | Text | Background | Contrast | Size |
|---|---|---|---|---|
| Design (before 2026-10-30) | `color/gray/300` #838280 | `color/gray/600` #F1EFEB | 3.3:1 (fails) | 16px |
| Production | #5D5B5A | #F5F5F5 | 6.2:1 | 13.44px (12.48px copyright) |
| Design (fixed 2026-10-30) | `color/gray/200` #5E5D5C | `color/gray/600` #F1EFEB | 5.7:1 | 16px |

**Design fix: done 2026-10-30** (Karl): the legal links in Footer and Blocks Footer are now `color/gray/200` (5.7:1), the closest gray that passes; the Claude design system matches.

**Fix (production):** `.colophon` links to #5E5D5C (`color/gray/200`; 1 step from today's #5D5B5A), and the band to #F1EFEB (`color/gray/600`) instead of #F5F5F5. The type size difference (16px design vs 13.44px production) is a separate open question.

**Status:** Open, URGENT: design fixed 2026-10-30; production change next.

---

## 37. Check box — white checkmark on primary-lighter fails 3:1 (The Mercury News + East Bay Times)

**Found:** 2026-11-04, while cleaning up the Check Boxes page (main file, CheckBox `4693:690`). A contrast failure in the design: colors are frozen as of 2026-10-19, so this is logged for a decision, not changed.

**Design (Figma):** a selected or partial check box shows a white (`color/gray/max`) checkmark or minus on a `color/theme/primary` box, and on hover and pressed the box changes to `color/theme/primary-lighter`. The icon is a graphic, so it needs 3:1 against the box.

| Publication (Colors mode) | `theme/primary` | White on it | `theme/primary-lighter` (hover / pressed) | White on it |
|---|---|---|---|---|
| The Mercury News + East Bay Times | #006DA3 | 5.7:1 | #A0D0ED | **1.6:1 (fails)** |
| The Sonoma Index-Tribune | #0E70A4 | 5.4:1 | #149DE6 | 3.0:1 (just passes) |
| Endless Tributes, Orlando Sentinel, Morning Call | | 9.5 / 4.7 / 6.6:1 | | 3.1:1 |

Every other mode is 3.2:1 or more on `primary-lighter`, and every mode passes on `primary`. The light `primary-lighter` box is also only 1.6:1 against the white page on Mercury News, but the 2px black hover / pressed ring marks the control there.

**Production:** not checked (Karl, 2026-11-04).

**To decide (Karl):** (a) keep the box `theme/primary` on hover and pressed (the ring alone shows the state); (b) use a `color/gray/min` checkmark wherever `primary-lighter` is too light; or (c) darken Mercury News's `primary-lighter` (a color change, on a `review/...` branch).

**Status:** Open. The Mercury News + East Bay Times need a different solution (Karl, 2026-11-05); not being worked on yet. Noted on the Figma Check Boxes page and in the Claude design system.

---

## 38. Reader Dashboard — Subscription Access role picker: Button ActionMenu replaced by Dropdown Menu

**Found:** 2026-11-11. A design change, not a production finding: Button ActionMenu was rebuilt as the **Dropdown Menu** (main file, Dropdown Menus page: `Dropdown Menu` `7543:1880`, rows `Dropdown Menu Item` `7543:1879`) and replaced Button ActionMenu everywhere (Karl, 2026-11-11): in InLineMessage (Location=DashSubsAcctShareALL; Desktop, Mobile, FOLD), and through it in Reader Dashboard v2.0 and Account Selector Feat. Button ActionMenu was removed from the Buttons page.

**Where:** the role column (Owner / Guest) of the Subscription Access panel (Reader Dashboard ▸ Subscription ▸ Shared Account Members). Spec: [`components/core/dropdown-menu/dropdown-menu.md`](components/core/dropdown-menu/dropdown-menu.md) and [`dropdown-menu-item.md`](components/core/dropdown-menu-item/dropdown-menu-item.md); live demo: `DropdownMenu` in the MNG Web Design System in Claude.

**Production:** was built from Button ActionMenu; not checked live. Dev won't have time for these changes soon (Karl, 2026-11-11), so they're logged here for later.

**Team:** DigiScrum, not CMS (Karl, 2026-11-11). When they get to this update, the Dropdown Menu (and its Dropdown Menu Item rows) should exist in the React component library and be used here.

**Figma:** every role picker in Account Selector Feat. (Account Sharing v3, Show Login Methods v3) carries a Development annotation saying the component was updated after the feature went to production, pointing here.

### 38.1 Closed size: 100x40 (was 99x42)

The closed dropdown is 100px wide and 40px tall (8px `spacing/100` side padding, 4px `spacing/050` gaps), so each user row in the panel is 2px shorter (Desktop user list 370px to 360px). Label (Noto Sans Bold 12px, `color/gray/min`), crown, chevron position and colors are unchanged: `color/gray/max` on white rows, `color/gray/600` on gray rows (labels 18:1 and 16:1). Hover and pressed add a 1px inside `color/gray/400` border, as before.

**Status:** Open. Low priority (Karl, 2026-11-11).

### 38.2 Open menu lists every choice, with a check on the current one

Before: the open menu showed only the other choice (Owner open showed one Guest row, 82px tall in all). Now every choice is listed in order as a 40px row, with a `checkmark3` (12px wide) at the right edge of the current one: Owner (checked), then Guest. With two choices the open dropdown is 120px tall, so it covers more of what's below it (in Account Sharing v3 it overlaps the Add Another User button; it opens over the page and doesn't push content down). Rows: `color/gray/500` with a 1px inside `color/gray/400` border (label 11.3:1), `color/gray/400` on hover and pressed (7.6:1); the menu has `shadow/lg`; the open trigger keeps its gray/400 border. Every label starts after a 16px icon slot, so Guest (no crown) lines up with Owner.

**Status:** Open. Low priority (Karl, 2026-11-11).

### 38.3 Focus ring: 2px, 1px outside, square, on top of the menu

Keyboard focus shows a 2px `color/gray/black` ring 1px outside the trigger with square corners, closed or open; when the menu is open the ring is drawn over the menu, not behind it (Karl, 2026-11-11). A focused menu row gets the same ring, square, drawn over its neighbors. Button ActionMenu only drew a focus state with the menu open.

**Status:** Open. Low priority (Karl, 2026-11-11).

### 38.4 Keyboard and screen readers

The trigger is a button with `aria-haspopup="listbox"` and `aria-expanded`, named by its label (e.g. "Role: Owner"); the menu is a `listbox` of `option` rows with `aria-selected` on the current one. Enter, Space or Down Arrow opens it on the current choice; Up / Down, Home and End move; Enter or Space picks; Esc closes and returns focus to the trigger; Tab closes and moves on; a click outside closes it. The account owner's own row is read-only: no chevron and not a button.

**Status:** Open. Low priority (Karl, 2026-11-11).

---

## Notes

**Reading live colors:** read themed CSS variables such as `--primary` on `document.querySelector('#page')`, not on `document.documentElement`. The WordPress Customizer's per-site override is scoped to `#page`, so reading at `:root` only shows the theme default.

**Breakpoints moved 2026-10-30 (Karl):** entries 8, 27 and 34 (34.1, 34.2) moved to `components/breakpoint-audit.md`, "All production breakpoints in one place" (sections A, B and C), so every production breakpoint is in one document; the numbers here point there and aren't reused. Their Google Sheet rows (Other fixes) say Moved.

**Renumbered 2026-10-27 (Karl):** entries are now grouped by component, one entry per component, in this order: icons, fonts, colors, spacing / radius / breakpoints, masthead and navigation, homepage blocks, article page, obituaries, ads and page layout, Reader Dashboard. Every reference in the repo, the Google Sheet and the Figma descriptions was updated. Older references (git history, Jira comments such as CI-14848, dated "Updated" notes) use the old numbers; this table maps them. Old 10, 12, 16 and 17 were groups that were split up (10 → 13 and 22; 12 → 14–16; 16 → 16.3, 28.3, 28.4 and 29; 17 → 10, 25 and 34.2). Sub-entries not listed keep their number under the new parent (old 13.2 → 31.2).

| Old | New |
|---|---|
| 1 | 1 |
| 2 | 2 |
| 4 | 30 |
| 5 | 21 |
| 6 | 23 |
| 7 | 3 |
| 8 | 4 |
| 9 | 5 |
| 10.1 | 13 |
| 10.2 | 22 |
| 11 | 26 |
| 12.1 | 15 |
| 12.2 | 14 |
| 12.3 | 16.1 |
| 12.4 | 16.2 |
| 13 | 31 |
| 14 | 32 |
| 16.1 | 16.3 |
| 16.2 | 29 |
| 16.3 | 28.3 |
| 16.4 | 28.4 |
| 17.1 | 25 |
| 17.2 | 10.1 |
| 17.3 | 34.2 |
| 17.4 | 10.2 |
| 17.5 | 10.3 |
| 18 | 28.1 |
| 19 | 28.2 |
| 20 | 9.1 |
| 21 | 9.2 |
| 22 | 33 |
| 23 | 20 |
| 24 | 6 |
| 25 | 7 |
| 26 | 28.5 |
| 27 | 19 |
| 28 | 34.1 |
| 29 | 27 |
| 30 | 8 |
| 31 | 12 |
| 32 | 24 |
| 33 | 9.3 |
| 34 | 11 |
| 35 | 18 |
| 36 | 17.1 |
| 37 | 17.2 |
| 38 | 14 |

**Removed entries:** two entries were resolved and removed on 2026-10-20 under the old numbering: old 3 (headline tiers, resolved in design 2026-09-24) and old 15 (Reader Dashboard hand-built copies, retired 2026-09-25); see git history.
