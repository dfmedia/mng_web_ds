# MNG Web DS: Components to Export for the For You Prototype

Oct 29, 2026 · @Karl

> **Updated 2026-11-02 (latest)**: P3, Article Status Badge done (matches production; in the Claude DS). **Earlier, 2026-11-02:** P3, Related Article List Item done (in the Claude DS; Zone 1 Lead Article Card uses it). **Earlier, 2026-11-02:** P2 step 7, TOP ZONE Block done; P2 complete. **Earlier, 2026-11-02:** P2 step 6, Photos Block done. **Earlier, 2026-11-02:** P2 step 5, Section Rail Cards + Feature + List Content Block done. **Earlier, 2026-11-02:** P2 step 4, Blueconic List Item + Blueconic Block done (renamed from Most Popular). **Earlier, 2026-11-02:** P2 step 3, Newsletter Signup done. **2026-10-30 (latest):** P2 step 2, Latest Headlines + Latest Headlines List Item done. **Earlier, 2026-10-30:** P2 started: TopZone Article Card done. **Earlier, 2026-10-30:** Masthead for the other page types built in the Claude DS; P1 done. **Earlier, 2026-10-30 (later):** Masthead for the other page types added to P1 (Karl). **Earlier, 2026-10-30,** for P1 (Masthead, Footer, Ad Blocks): cleaned up in Figma, exported to `components/wordpress/` and **In system** in the Claude DS (Masthead: Page = Home). Status column below. Tracked in `MNG-Web-Design-System-Status.md`, open item 19.

## Context

The For You Hi-fi v4 prototype is now built only from the [MNG Web Design System](https://claude.ai/artifact/RKJ37zyXP7Wcvm1SDU7nzz) in Claude. Ten components it needs are still missing, so the prototype shows each one as a magenta placeholder labeled with the component name and Figma node.

- **Prototype:** [For You Tab MVP — Hi-fi v4](https://claude.ai/artifact/8C2rMAtGVyfqhtByzStWrr)
- **Export path for each component:** Figma (MNG Web Design System `jFHYqhZbJjvWQmDI4myCsd` / WordPress Elements `b1iZxkFwtAYq9rElmnCAzd`) → GitHub [kuscholdMNG/mng\_web\_ds](https://github.com/kuscholdMNG/mng_web_ds) (spec, tokens, skeleton, previews) → rebuild the Claude DS (`scripts/claude-design-system/build.py`).
- **Rule from the For You project:** Editor's Picks uses only the production (WordPress Elements) components; the For You tab uses only the Blocks components. Nothing missing gets hand-built in the prototype.

## P1: Page chrome (shows on every screen)

These three replace the biggest placeholders and bring back the masthead scroll behavior the project requires.

| Component | Figma | Variants and parts needed | Where it shows | Status |
| --- | --- | --- | --- | --- |
| Masthead | WP Elements ▸ Menus and Parts `456:2572` (75 variants) | Page=Home, Default and Scrolled, at XL-Desktop, LG-TabletH, MD-TabletV, SM-Mobile, XS-Fold; subscriber (AdFree) and anonymous. Parts: SectionMenu / SectionMenuHeader / SectionMenuItem (`456:5837`, `456:5745`, `456:5781`), AccountMenu (`910:16425`), SearchBar (`456:5910`), UserImage / UserPic / UserStatus (`456:5708`, `456:5674`, `456:5728`), Weather Bug (`654:10020`). Token: `shadow/masthead` | Top of every page and breakpoint; sticky condensed bar on scroll | **Done 2026-10-30** (`Masthead`, Page = Home; parts exported to `components/wordpress/`, drawn inside the Masthead in their closed states) |
| Footer | WP Elements ▸ Menus and Parts `354:1282`, Footer\_w\_signup `801:1755` | Desktop, tablet and mobile layouts | Bottom of every page | **Footer done 2026-10-30** (`Footer`). Footer_w_signup is now **Blocks Footer** (Homepage ▸ Blocks, tokens only), exported, left out of Claude for now (Karl) |
| Ad Blocks | WP Elements ▸ Ads and Sponsored `517:4304` (37 variants) | Top Leaderboard 970×250, 728×90, 320×50, 320×100; Cube 300×1050, 300×600, 300×250; Sponsorship 970×250, 728×90, 320×50; Mobile Adhesion 728×90 and 320×50 with its close button | Anonymous view only: masthead, Editor's Picks rails and rows, adhesion below 800px | **Done 2026-10-30** (`AdBlocks`, all 37 units) |
| Masthead, other page types | WP Elements ▸ Menus and Parts `456:2572` | Page = SectionFront, Article, Obituaries, Dashboard (Default, AdFree, Scrolled, AdFree-Scrolled at all 5 devices); already exported with the set, not built in Claude. Article's scrolled bar (section name, headline, share buttons); Obituaries' search and Submit an Obituary (not audited yet, open item 17); Dashboard's Reader Dashboard menu | Section fronts, articles, obituaries, Reader Dashboard | **Done 2026-10-30** (`Masthead` `page` prop: all 90 Figma variants. Obituaries: title centered in its row, Sponsorship 1 300x50 in its own row under the title below 800px, in Figma and Claude, Karl) |

## P2: Editor's Picks zones

These fill the production homepage layout on the Editor's Picks tab. All are in WordPress Elements ▸ Homepage.

| Component | Figma | Notes | Where it shows | Status |
| --- | --- | --- | --- | --- |
| TopZone Article Card | `3336:46079` | 4 cards in a 2×2 grid beside the Zone 1 lead; switches to thumbnail rows below 800px | Zone 1 | **Done 2026-10-30** (`TopZoneArticleCard`; 15px headline gap kept raw; Device renamed to production's ranges XS / S / M / L / XL; S added from production, Karl) |
| Latest Headlines + Latest Headlines List Item | `3476:62396`, `3336:46118` | 7 items with headline and time, plus a sponsored item; the Section Title / Eyebrow above it is already in the DS | Zone 1, right column | **Done 2026-10-30** (`LatestHeadlines`, `LatestHeadlinesListItem`; built to match production, Karl: time inline after the headline, 15/19 `color/gray/black` headline, S variant full width, title gap 16px (`spacing/200`); Device = `XS (≤639px)`, `S (640–799px)`, `(≥800px)`. Newsletter Signup was a placeholder until step 3) |
| Newsletter Signup | `3336:44765` | Under Latest Headlines (anonymous view) | Zone 1 | **Done 2026-11-02** (`NewsletterSignup`; built to match production, Karl: 32 / 12 / 16px spacing, the raw 10px dropped because production has none; Button Primary on every theme; no production breakpoint, Device = `(≤799px)`, `(≥800px)`; `LatestHeadlines` now draws it instead of the placeholder) |
| Blueconic List Item + Blueconic Block (were Most Popular) | `3704:40676`, `3352:20526` | 10 numbered items, 2 columns (1 below 640px) | Zone 2 | **Done 2026-11-02** (`BlueconicListItem`, `BlueconicBlock`; built raw in production's values because Blueconic is a third-party platform, Karl; Device = production's breakpoints `XS (≤639px)`, `(640–1039px)`, `(≥1040px)`; the 1024 / 1100 / Desktop copies removed) |
| Section Rail Card + Feature + List Content Block | `3352:22067`, `3484:66933` | Lead (image, headline, excerpt) + 3 headline list | Zone 3 and Zones 8–12 (6 sections) | **Done 2026-11-02** (split into `SectionRailCardNarrow` (`3352:22067`) and `SectionRailCardWide` (`3709:43975`), with `FeatureListContentBlock`, `HorizontalFeatureCard` (`3709:41113`) and the new `HeadlineListItem` (`3709:40904`); built raw in production's values for these components only, Karl; Device = production's breakpoints: Narrow `(≤799px)`, `(≥800px)`; the others `(≤799px)`, `M`, `L`, `XL`; design-vs-production 16.7) |
| Photos Block | `3352:20865` | Assembly of 1Col Article Card (Media Lead) + Horizontal Thumbnail Card ×6 + Show More Affordance, all already in the DS | Zone 7 | **Done 2026-11-02** (`PhotosBlock`; matches production on the 4 / 8 grid: 16px image-to-headline, 20px column gaps, 12px under the excerpt; Device = production's breakpoints `XS (≤639px)`, `S (640–799px)`, `M (800–1039px)`, `L (1040–1279px)`, `XL (≥1280px)`; the unused Desktop variant removed; design-vs-production 16.8) |
| TOP ZONE Block | `3352:19482` | Assembly of the Zone 1 parts above | Zone 1 | **Done 2026-11-02** (`TopZoneBlock`; matches production on the 4 / 8 grid: 20px column gaps, 20px lead to stories, 32px between stacked parts, production's column percentages; Device = production's breakpoints `XS (≤639px)`, `S (640–799px)`, `M (800–1039px)`, `L (1040–1279px)`, `XL (≥1280px)`; S story rows now TopZone Article Cards (were Horizontal Thumbnail Cards); design-vs-production 16.9). **P2 complete.** |

## P3 and deferred

None of these block the prototype today; each is a clean-up or a later need.

| Component | Figma | Why | Status |
| --- | --- | --- | --- |
| Related Article List Item | WP Elements `3334:43017` | Renders inside Zone 1 Lead Article Card (and TOP ZONE Block) | **Done 2026-11-02** (`RelatedArticleListItem`; matches production on the 4 / 8 grid, checked on all 6 review sites: 16px bullet column with a 4px `color/gray/black` dot, heading-family Bold 12 / 19 title with the Noto Sans 11 time inline, items hug their text 4px apart; Zone 1 Lead Article Card now draws its Related list with it, and Zone 1 Lead and TOP ZONE Block were re-exported; design-vs-production 16.10) |
| Article Status Badge | WP Elements `3344:63995` | Subscriber badge in 1Col Article Card; Sponsored badge in Latest Headlines | **Done 2026-11-02** (`ArticleStatusBadge`; matches production after a side-by-side, Karl: Noto Sans Regular 13 caps, 22.652px line height, 0 × 4px padding, 22.65px tall; Subscriber on `color/theme/primary-dark`, Sponsored keeps `#7D161E` (no sponsored badge live on the 6 homepages); 1Col Article Card and Latest Headlines List Item draw it; the 7 components that contain it were re-exported; design-vs-production 22 and 22.1) |
| Blueconic card template | Not in Figma (production only) | A second Blueconic template: 14 items in 300×136 cards (orlandosentinel and mcall, 2026-11-02). To design (Karl, 2026-11-02) | Not started |
| Logo component | Newspaper Logos file `389:385` (190 variants) | Optional; the Placeholder Logos assets already cover the prototype | Not started |
| CheckBox | Web DS `4693:690` | Deferred: needed only if the For You onboarding steps come back | Not started |

## Already in the Claude DS (no work needed)

The prototype already mounts these real components:

- **For You tab:** Homepage Tabs, Section Title / Eyebrow, Tooltip (Toggletip), Blocks Lead Article Card (with Zone 1 Slideshow), Blocks Card, Blocks Article Row, Article Section Kicker / Author / Timestamp, Gallery Icon Badge, Show More Affordance, InLineMessage DashSubsNonSub, ModalsCenter, Button Primary, Button Modal Close, Icon.
- **Editor's Picks:** Zone 1 Lead Article Card, 1Col Article Card, Section Title / Eyebrow, Show More Affordance.
- **Foundations:** color tokens for Bold Coastal, Measured Vibrant and Modern Earthy, typography, spacing, radius, shadows, the icon font and the Placeholder Logos.

## Handing back to the For You project

A component is done when it shows as **In system** in the Claude DS inventory, with a README and a live preview card. Then the For You project:

1. Updates the design system install on the prototype canvas to the new DS version.
2. Swaps that component's magenta placeholders for the real component at every breakpoint.
3. For the Masthead, brings back the production scroll behavior (condensed sticky bar).

P1 first, then P2 in table order. Partial batches are fine; each export can be swapped in on its own.
