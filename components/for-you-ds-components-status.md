# For You → MNG DS components: status and handoff

> **Updated 2026-10-28 (latest):** the old Style=For You variants deleted (Karl), WordPress Elements published (Karl), sets re-exported, prototype prompt updated (component map, section 11). **Earlier, 2026-10-28 (later),** for the **Blocks** components (Karl): the For You card, row and featured story are now their own components in a new Blocks section (WordPress Elements ▸ Homepage ▸ Components): **Blocks Card** (`3663:31072`), **Blocks Article Row** (`3663:31214`) and **Blocks Lead Article Card** (`3663:31557`), with the hover from the hi-fi prototype (card hover ✅); and the **Gallery Icon Badge** in production's format (`3665:32148`, Size × State). All exported. **Earlier, 2026-10-28,** for the export (step 4 ✅): all 23 registered components exported with `scripts/component-export/` (first WordPress Elements export: 11 components in `components/wordpress/`; 12 in `components/core/`, including Tooltip, ModalsCenter, ModalsOffset and InLineMessage DashSubsNonSub; buttons refreshed). **Earlier, 2026-10-27,** for InLineMessage DashSubsNonSub (✅ documented as is) and the sample stage (`gray/500`); earlier the same day for Section Title / Eyebrow (cleanup row ✅ Done; design-vs-production entry 14), Show More Affordance (✅ Done, documented as is), Tooltip (✅ Done; design-vs-production entry 35), ModalsCenter / ModalsOffset (✅ Done; spacing/400 and 500 in pull request #8) and the design-vs-production renumbering (one entry per component; old → new map in that doc's Notes). **Earlier, 2026-10-26** for the shadow tokens in code (cleanup row ✅ Done). **Earlier, 2026-10-23** for the shadow tokens (Tooltip now uses shadow/lg), the Tooltip (MNG Web Design System, new Tooltips page), the Homepage Tabs (Menus and Parts; design-vs-production entry 31), the three card variants (1Col Article Card, Horizontal Thumbnail Card and Zone 1 Lead Article Card, Style=For You), the prototype timestamp fix, library imports working again, the timestamp decision (13px, Karl) and the three card atoms in WordPress Elements ▸ Article Parts. Moved into the repo from the "For You Tab MVP" project the same day.

## Goal

Find every element on the **For You tab** of the v3 prototype that isn't in the MNG design files yet. Build each missing element as a Figma component, using DS variables only. When they're approved, publish them through the MNG Web DS / WordPress Elements libraries.

## Sources

| Source | Location |
|---|---|
| v3 prototype (source of truth for the For You design) | `~/Github/for_you_tab_mvp/claude-design-v3/Main.dc.html`. Canvas: https://claude.ai/artifact/9ZnuwkmmUmwmyPmg15nJBj |
| MNG Web Design System (Figma) | file key `jFHYqhZbJjvWQmDI4myCsd` |
| WordPress Elements (Figma) | file key `b1iZxkFwtAYq9rElmnCAzd` |
| DS repo: tokens, Figma exports for Claude, component specs | `~/Github/mng_web_ds`. See `figma-exports/mng-design-system-export/` (README + `index.json`), `components/*.md` and `tokens/icons/icons.json`. Status log: `MNG-Web-Design-System-Status.md`; production gaps: `design-vs-production.md` |
| Production tabs reference | https://staging.dailylocal.com/world-cup/ |

How the Figma files are connected: Figma Desktop with the Desktop Bridge plugin (figma-console MCP). Pass `fileKey` to `figma_execute` to target a file without switching the active one.

## Decisions (Karl)

- Scope is the For You tab only. The prototype bar's Zones / Rows / Cards toggle is excluded, because it's a prototype control.
- **All atoms go in WordPress Elements.** For anything that isn't an atom, ask Karl where it goes (Web DS or WordPress Elements) before building it.
- **The featured story, card and row are built as variants** of the existing WordPress Elements cards: Zone 1 Lead Article Card, 1Col Article Card and Horizontal Thumbnail Card.
- **Tab labels are "Editor's Picks" / "For You".**
- The tabs come from the production World Cup tabs, not a new design.
- The welcome modal must match the DS **ModalsCenter**, which is already specced in `components/modal.md`. If the prototype differs, fix the prototype.
- Rules: don't invent elements. Use production-accurate atoms wherever they exist. Bind every value to MNG DS variables where a token exists. Log every off-system production value for design-vs-production.

## Done

- **Clock icon added to Icons** in Web DS: the `Name=access-time` variant in the Icons set `4693:5`.
  - Node `7329:25691`, key `ddff0323eec840324a3daf837507144a9db3e2ed`, placed after `newspaper`.
  - 16×16, artwork from Icon Categories `1412:667`, fill bound to `color/gray/min`, font codepoint U+E900.
  - ⚠️ **The Web DS library needs publishing** before WordPress Elements can use this icon.
- **Gap audit complete** (see the table below).
- **Tabs scraped from production** (spec below).

## Library imports (fixed 2026-10-23)

**Working again (2026-10-23).** After Karl published the Web DS library and dragged an `access-time` instance into WordPress Elements, `importVariableByKeyAsync` (spacing/050) returned at once. It's unclear which step fixed it: the publish, the manual insert, or the plugin relaunch. If imports hang again, try those three.

Earlier the same day they were **still broken**, after Karl relaunched the Desktop Bridge plugin in WordPress Elements. `figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync()` and `getVariablesInLibraryCollectionAsync()` now answer in about 0.2s, but `importVariableByKeyAsync` (font/size/10) and `importComponentByKeyAsync` (access-time) still time out (tested at 8s and 22s). Possible cause: the bridge showed two MCP server instances (ports 9223 and 9224) from two Claude sessions.

- Every variable the atoms need is now reachable without an import, because WordPress Elements already uses it somewhere: font/size/13 `VariableID:60351d5c1d19d94946edc9a5c53565709a6a443a/6847:7`, font/size/10 `VariableID:a704424118ebeeef3c4d27cda5966f7801447ba3/6850:36`, font/style/medium `VariableID:1098f60a5a71c40d8f65024a17845de914519c30/7121:5`.
- **Still needs a manual step:** spacing/050 isn't used anywhere in WordPress Elements, and the Web DS Icons set has **unpublished changes** (access-time's publish status is `CHANGED`), so the clock icon isn't in the library yet. Karl publishes the Web DS library, then drags an Icons `access-time` instance into WordPress Elements (or binds the Timestamp gap to spacing/050 in the UI), which brings both in.

On Oct 21, **library imports in WordPress Elements hung.** `figma.variables.importVariableByKeyAsync`, `figma.importComponentByKeyAsync` and `figma.teamLibrary.*` all timed out at 25–30s. Reloading the plugin UI didn't fix it. Simple calls still worked.

- Planned fix: Karl fully closes and relaunches the Desktop Bridge plugin in WordPress Elements, and publishes the Web DS library.
- Workaround for variables the file already uses: find a node bound to the variable, read the variable ID from that node's `boundVariables`, and bind with that ID. These are already available that way:

| Variable | ID |
|---|---|
| color/theme/primary | `VariableID:d1c64621420971547fed613e54b7e0822a530f5b/7273:70` |
| color/gray/min | `VariableID:7e83e612376f9e21a46ac5776f1f05625a3336e2/7273:40` |
| color/gray/200 | `VariableID:bf7944f0fa19f9de12973ef10df59712b4a529da/7273:42` |
| font/size/12 | `VariableID:9537d462e617cebfc2bfa0d6fc40ce490d57d790/6847:3` |
| font/style/bold | `VariableID:65c3559067baa3ba9425ba629531f1c84a34da92/7121:11` |
| font/style/regular | `VariableID:33d7ff699d2ca68a39a43035968bc2240ac395bc/7121:2` |
| font/family/noto-sans | `VariableID:90d59a5504348dcedcac72cd5aa64c84e934918b/6752:40` |

- **Not yet in WordPress Elements** (they need a library import):

| Variable | Library key |
|---|---|
| font/size/10 | `a704424118ebeeef3c4d27cda5966f7801447ba3` |
| font/style/medium | `1098f60a5a71c40d8f65024a17845de914519c30` |
| spacing/050 | `a282b83e1ceef0bb087a5842c613d7a239c76524` |

Bold Coastal token values:

| Token | Value |
|---|---|
| color/theme/primary | #007580 |
| color/gray/min | #141414 |
| color/gray/100 | #393938 |
| color/gray/200 | #5E5D5C |
| color/gray/500 | #CCCAC7 |
| color/gray/max | #FFFFFF |
| spacing/050 | 4 |
| spacing/100 | 8 |

## Gap table

| # | Element | Prototype class | Closest existing | Status / next step |
|---|---|---|---|---|
| 1 | Tab Nav (Editor's Picks / For You) | `.tabs` | Production World Cup tabs | **Built 2026-10-23** in WordPress Elements ▸ Menus and Parts: Tab Nav Item `3629:44949`, Tab Nav `3629:44974`. |
| 2 | Feed header "While You Were Away" | `.fyh .eb` | WP Section Title / Eyebrow, Style=Underline (`3333:42278`) | **Exists.** The "Based on what you read." subhead line is new. |
| 3 | Info tooltip | `.tip` | none (the `info` icon U+E937 exists) | **Built 2026-10-23** in the MNG Web Design System, new page "Tooltips \| 2026.10.23": Tooltip set `7372:25744` (Type=Tooltip / Toggletip × Placement=Top / Bottom). |
| 4 | Featured story | `.lead` | Zone 1 Lead Article Card (set `3336:46157`) | **Built 2026-10-23:** `Style=For You` × Mobile / Tablet / Desktop (`3628:44769` / `3628:44822` / `3628:44874`). |
| 5 | Article card | `.card` | 1Col Article Card (set `3536:39065`) | **Built 2026-10-23:** `Style=For You` (`3628:44640`). |
| 6 | Article row | `.row` | Horizontal Thumbnail Card (set `3362:2992`) | **Built 2026-10-23:** `Style=For You` × Mobile / Tablet / Desktop (`3628:44666` / `3628:44686` / `3628:44706`). |
| 7 | Card atoms: kicker, author, timestamp | `.kick` `.au` `.tm` | none (the WP Article Page Byline `1110:19503` is the full article byline) | **Built 2026-10-23** in Article Parts: Kicker `3609:39112`, Author `3609:39115`, Timestamp `3621:38794`. |
| 8 | Load More Articles | `.btn-link` | WordPress Elements ▸ Homepage ▸ Photos: **Show More Affordance** (`3352:24180`, was "Show More Photos Affordance", 12 instances in Photos Block) | **Reuse (Karl, 2026-10-23).** Production's `.load-more` (section fronts) and `.show-more-videos` (Photos) share one CSS rule. Added a Label text property and a "Load More" example (For You). The Figma component doesn't match production, so a raw-value copy, **Show More Affordance (Production)** (`3634:49423`), sits next to it for comparison; Karl to decide next. Differences: label 19px vs 16/16; rule 2px gray/500 vs 1px #D7D6D2; notch 50px gray/600 with gray/500 edges vs 35px #FBFBFB with #D7D6D2 edges, centered vs ~5px right of center; 0 vs 40px above the label (the Figma rule row is 71px tall); 40px below in both. Hover (#0A0908) and focus (2px black, 5px offset) aren't in Figma. |
| 9 | Non-subscriber CTA panel | `.cta` | MNG Web Design System ▸ In-Line Content Containers ▸ InLineMessage (`2776:2`), `Priority=Medium, Location=DashSubsNonSub, PanelType=Alert` (Desktop `3421:643`, Mobile `3421:658`, FOLD `3421:673`) | **Reuse, no new component (Karl, 2026-10-23).** Same job as Reader Dashboard's locked-feature panels (DashGiftCTAnonSub, DashSavednonSub). For You copy: title "Your personalized feed is waiting", the prototype's description, button "Subscribe Now". The prototype's padlock circle, serif headline, "Sign in" button and price line are dropped. Prototype prompt section to add once the panel's exact values are read from Figma. |
| 10 | Welcome to For You modal | `.mc-*` | ModalsCenter (`3040:2262`) + Button Modal Close (`5335:16196`) | **Exists.** Parity check against `components/modal.md`. |
| 11 | Onboarding steps 1–3 | `.ob` `.chip` | CheckBox (`4693:690`) | Deferred (hidden in the prototype). Chips are new. |

## Specs ready to build

### Atoms (WordPress Elements)

Place them in WordPress Elements ▸ Homepage ▸ Components (`3334:42288`) ▸ Top Zone Components (`3485:67769`) ▸ Top Zone Parts ▸ **Article Parts**.

Match the existing documentation containers there, for example "Article Status Badge Container":
- White, 8px radius, 16px padding, 16px gap.
- A Header frame with a "Type" line (11 SemiBold #666) and a "Title" (22 Bold).
- A Description line (13 Regular #666).
- A "Variant Grid" frame that holds the component.

| Atom | Spec | Text property |
|---|---|---|
| **Article Section Kicker** | Noto Sans Bold 10 / 12.5 line height, 1px letter spacing, uppercase (text case), color/theme/primary. Hugs its text. | `Section` (e.g. "Crime and Public Safety") |
| **Article Author** | Noto Sans Medium 12/16, color/gray/min. Hugs its text. | `Author` (e.g. "Ruby Gonzales") |
| **Article Timestamp** | Horizontal auto layout, 4px gap (spacing/050), centered. An Icons `access-time` instance at 11×11 in color/gray/200, then the text in Noto Sans Regular **13**, line height auto, color/gray/200. | `Time` (relative: "56 mins ago", "2 hours ago", "3 days ago", "1 week ago") |

✅ **Decided (Karl, 2026-10-23): 13px**, matching the production-measured card meta in 1Col Article Card (`3352:24153`: Noto Sans Regular 13, line height auto, gray/200). The prototype's 12px `.tm` should change to 13px.

**Built (2026-10-23)**, each in its own documentation container appended to Article Parts (`3484:67765`):

| Atom | Component | Container | State |
|---|---|---|---|
| Article Section Kicker | `3609:39112` (text property `Section#3609:0`) | `3609:39117` | Done. Size, style, family and fill bound; 12.5 line height raw (no line-height primitives). Letter spacing 0 (was 1px; Karl, 2026-10-23, to match production's top nav and Subscriber Only badge). |
| Article Author | `3609:39115` (text property `Author#3609:1`) | `3609:39159` | Done. Size, style, family and fill bound; 16 line height raw. |
| Article Timestamp | `3621:38794` (text property `Time#3621:0`) | `3621:38786` | Done. Clock Icon (Icons `access-time` instance `3623:44633`, rescaled to 11×11, vector fill bound to gray/200), then the text (13 / Regular / Noto Sans / gray/200, line height auto). Gap bound to spacing/050; centered. |

Cleanup: the previous session had left two stray copies of the whole Article Parts frame ("Article Section Kicker Container" `3609:39116` and "Article Author Container" `3609:39158`) under Top Zone Parts, with duplicate Related Article List Item and Article Image Placeholder components (0 instances). The Kicker and Author containers were moved into Article Parts and the stray copies deleted.

### Card variants (from the prototype CSS)

- **Card** (`.card`):
  - White, 1px #CCCAC7 border, 8px radius, clips content. The image is 16:9.
  - Body: 16px padding, 12px gap, space-between. Kicker (8px below it), then the title: Noto Serif Bold 16 / 18.88, clamped to 5 lines.
  - Footer: 1px #CCCAC7 top border, 8px top padding, author over timestamp.
  - Layout: 3-up from 800px, 2-up at 640–799px, 1-up at ≤639px (16px gap).
- **Row** (`.row`):
  - A 2-column grid: image 220px wide (min height 132), then the body (16px padding).
  - At small widths: image 120px wide (min height 110), body padding 12px.
  - Same border, radius, kicker, title and footer as the card. The title isn't clamped.
- **Featured story** (`.lead`):
  - Kicker (`.kick.blk`), then the headline: Noto Serif Bold 29/33, −0.87px letter spacing (25/29, −0.03em in the lead header).
  - Image, then the excerpt: Noto Sans 15/19, gray/100, 6px top margin.
  - Byline row: author and timestamp inline, 12px gap, 12px top margin.
- **Feed header**: Eyebrow (20/22 uppercase gray/100, 2px primary underline). Under it, the subhead in Noto Sans 13/19.5 gray/200 with the info icon and a tooltip.
- **Tooltip** (`.tip`): 240px wide, 12px padding, white, 1px #CCCAC7 border, 8px radius, shadow `0 2px 8px rgba(20,20,20,.15)`, Noto Sans Italic 13/18 gray/100. Placed 8px below its trigger, centered. Placeholder text: "Placeholder text with more information about this feature."
- **CTA panel** (`.cta`):
  - Centered, 56px top/bottom and 16px side padding.
  - 48px circle icon: `padlock` U+EA26, primary on #F1EFEB.
  - h2 in Noto Serif Bold 18/24 gray/min, then a paragraph in Noto Sans 13/19.5 gray/200, max width 330.
  - Buttons: Primary "Subscribe now" and Secondary "Sign in".
  - Small print in 11/16 gray/200: "Starting at $1.99/week. Cancel anytime."
- **Load More**: "Load More Articles", Noto Sans Bold 16/24, primary, underlined, centered, 16px top / 8px bottom padding.

### Blocks components (Karl, 2026-10-28)

The For You article cards are their own components now, separate from the Zone article cards, in a new **Blocks** section at the bottom of WordPress Elements ▸ Homepage ▸ Components (`3663:31065`). Each has a white documentation container and is exported to `components/wordpress/<slug>/`.

| Component | Node / container | Built from | States |
|---|---|---|---|
| **Blocks Card** | `3663:31072` / `3663:31066` | 1Col Article Card, Style=For You | State = Default / Hover / Focus; Show Gallery Icon |
| **Blocks Article Row** | `3663:31214` / `3663:31205` | Horizontal Thumbnail Card, Style=For You | State = Default / Hover / Focus × Device = Mobile / Tablet / Desktop; Show Gallery Icon |
| **Blocks Lead Article Card** | `3663:31557` / `3663:31548` | Zone 1 Lead Article Card, Style=For You | State = Default / Hover × Device × Gallery = Image / Slideshow |

- **Hover** (Karl: match the older hi-fi prototype, `for_you_tab_mvp/index.html`; the same in every prototype version): card and row get a `color/theme/primary` border plus a 1px primary ring (`box-shadow: 0 0 0 1px`) and a primary headline. The lead has no border; its headline link turns primary. Production's homepage cards only turn the headline primary (`h3 a:hover`, all 6 review sites, 2026-10-28). Contrast: theme primary on white is 4.75:1 or more on every site.
- **Focus:** card and row `outline: 2px solid` black, `outline-offset: 1px` (prototype `.card:focus-visible`). The lead has no custom focus style in the prototype; the spec says to use the same outline on its headline link.
- The old `Style=For You` variants were **deleted** from 1Col Article Card, Horizontal Thumbnail Card and Zone 1 Lead Article Card (Karl, 2026-10-28; 0 instances), with their "Specifications · Style=For You" sections (Zone 1's is now "Specifications · Gallery=Slideshow", keeping the 594 one-column sample) and 1Col's unused Show Gallery Icon property. The node IDs for those variants in the tables below are history. `Style` stays on the three sets with Standard (and Media Lead) so existing instances don't change.

### Card variants built (2026-10-23)

Each set got a new variant property **Style = Standard / For You**. The existing variants were renamed `Style=Standard, …` (renaming is safe; existing instances keep working and default to Standard). All new values are bound to MNG DS variables; the atoms are nested as exposed instances, so the kicker, author and time can be edited from the card. Every variant was screenshotted and checked against the prototype CSS.

| Set | New variants | Built from the prototype |
|---|---|---|
| 1Col Article Card `3536:39065` | `Style=For You` `3628:44640` (296 wide) | White (gray/max), 1px gray/500 border, radius/lg, clips. 16:9 Article Image Placeholder (`Show Image` still applies). Card Body: spacing/200 padding, spacing/150 gap: Kicker, spacing/100, headline bound to `Editorial/Titles/CardTertiaryCompact` (Noto Serif Bold 16/18.88), max 5 lines with ellipsis. Card Footer: 1px gray/500 top border, spacing/100 top padding, Author over Timestamp. |
| Horizontal Thumbnail Card `3362:2992` | `Style=For You` × `Device=Mobile` `3628:44666` (340), `Tablet` `3628:44686` (720), `Desktop` `3628:44706` (848) | Same border, radius, fill, kicker and headline (not clamped). Image left: 220 wide, min height 132 (Mobile: 120, min 110). Body padding spacing/200 (Mobile spacing/150), spacing/150 gap. Footer: Author and Timestamp in a row, spacing/150 gap, same top border. Widths are the prototype's feed column at 360 / 768 / 1280. |
| Zone 1 Lead Article Card `3336:46157` | `Style=For You` × `Device=Mobile` `3628:44769`, `Tablet` `3628:44822`, `Desktop` `3628:44874` | Cloned from Standard (same headline, excerpt and image tokens). Removed: subscriber badge, Related list. Added: a Headline Group (Kicker, spacing/050, headline) and a Byline row after the excerpt (Author + Timestamp, spacing/150 gap, 12px above it). Mobile: the excerpt's 16px bottom padding is 0 and the byline has spacing/150 bottom padding, so the bottom border sits 20px below it. |

Not built / open:
- **Hover state** (prototype `.card:hover` / `.row:hover`: primary border plus a 1px primary ring, headline in primary). Needs a State property. **Parked (Karl, 2026-10-23): come back to it later.**
- **Card body space-between:** in code the card body is space-between so footers line up when cards in a row stretch to the same height. Figma can't combine that with a fixed 12px gap, so the Figma card uses the gap (noted in the component description).
- **Featured story excerpt gap:** the prototype has 6px above the excerpt (`.lead-d`); the Figma Standard lead (production-measured) has a 4px gap. The For You variant keeps 4px. Check against production.
- **Unused properties on For You variants:** `Show Subscriber Badge`, `Show Excerpt` and `Show Meta` (1Col) and `Show Gallery Icon` (Horizontal Thumbnail) don't apply to them.
- The Figma Bridge's bound-paint colors render black in exports until the stored fallback color is set; fixed by writing the resolved value with the binding.

### Tooltip built (2026-10-23)

Karl: the prototype's tooltip was a placeholder; it goes in the MNG Web Design System, open to what tooltips in the wild do. He chose **both types in one set**, on a new page **Tooltips | 2026.10.23** (`7372:25702`, after Modal Panels), in a "Tooltip Container" doc frame (`7372:25704`).

**Shadow (2026-10-23):** both types now use the new `shadow/lg` effect style (see the main status doc, §4 Tokens, and the Shadows | 2026.10.23 page).

References: production's article "type of work" popup (`#tiPopupContent` on ocregister articles: opened by clicking the "News" label, white, 1px #787878 border, 1px radius, 275px wide, 15px 10px padding, 0.9em Helvetica, 10px caret, close X); the old "Section Menu/ToolTip box" frames on "Elements to be detailed still" (dark #616262, 20px text, not a component); and the common split in other design systems between a hover **tooltip** (short label, mouse/keyboard only) and a click **toggletip** (an info button that opens an explanation; works on touch). (At the time no shadow tokens existed; both types now use `shadow/lg`, see above.)

| Variant | Node | Spec |
|---|---|---|
| Type=Tooltip, Placement=Top / Bottom | `7372:25710` / `7372:25715` | Label property. color/gray/100 box (white text 11.6:1), Noto Sans Regular 12 color/gray/max, line height auto, spacing/050 × spacing/100 padding, radius/sm, max width 240, 12×6 caret. Hover/focus only; for icon-only buttons. |
| Type=Toggletip, Placement=Top / Bottom | `7372:25720` / `7372:25732` | Text property; Show Close (boolean). 275 wide, color/gray/max, 1px color/gray/300 border, radius/sm. Text Container (spacing/150 padding) with Noto Sans Regular 13 color/gray/100 (11.6:1), then a Button In-Line Close instance (40×40, main file `5335:16200`). 12×6 caret with a gray/300 edge. Opens on click/tap; Esc, close or outside click closes. |

Production follow-up: logged 2026-10-27 as design-vs-production entry 35 (the article type-of-work popup should be the Toggletip; its `aria-controls` points at a missing id). Also open item 7 in the main status doc.

### Tab Nav (production, staging.dailylocal.com/world-cup/)

- **Markup:** `<ul class="sr-nav-tabs" role="tablist">` > `<li role="presentation">` > `<button class="tab-btn [active]" role="tab" aria-selected aria-controls>`.
- **Nav:** max width 1200, padding 0 24px (0 at ≤500px). Tab list: flex, 32px gap, scrolls sideways with the scrollbar hidden. Bar height 40.
- **Tab:** Inter 600 12px, line height normal, 0.14em (1.68px) letter spacing, uppercase, padding 12px 18px, 2px transparent bottom border, −1px bottom margin. Rendered sizes 192 / 171 / 139 × 41.
- **States:**
  - Default: #6B7280.
  - Hover: #111827.
  - Active: #000 with a 2px #C62828 bottom border.
  - Focus-visible: 2px black outline, −3px offset.
- **Wrapper:** #FAFAFA background, 1px gray (#808080) bottom border, 2rem bottom margin.
- **Off-system values to map to tokens and log for design-vs-production:**
  - Inter → Noto Sans.
  - #6B7280 / #111827 → nearest MNG grays.
  - #C62828 → color/theme/primary.
  - #FAFAFA / #808080 → MNG grays.
- The prototype's current tabs: white bar, 1px #CCCAC7 bottom border, inner width 896, 24px padding (4px on mobile). They also differ from production in the tab itself: Noto Sans 600 14/20, 0.35px letter spacing, 12px 24px padding, gray/200 text, active teal text with a 3px teal underline, and the tabs spread with space-between. **To do: update the prototype to match the built component.**

**Built (2026-10-23)** in WordPress Elements ▸ **Menus and Parts** (Karl's choice), in a new "Tab Nav Documentation" frame (`3629:44928`) after the Breaking News Banner:

| Component | Node | Notes |
|---|---|---|
| Tab Nav Item | set `3629:44949`: `State=Default` `3629:44932`, `Hover` `3629:44936`, `Active` `3629:44940`, `Focus` `3629:44944`; text property `Label#3629:8` | Label Container (spacing/150 top/bottom, spacing/200 sides) over a 2px Underline. Noto Sans SemiBold 12 (font/size/12, font/style/semibold), line height auto, no letter spacing, uppercase. Default gray/200; Hover gray/min; Active gray/black with a theme/primary underline; Focus: absolute 2px gray/black ring inset 3px. |
| Tab Nav | set `3629:44974`: `Breakpoint=Desktop` `3629:44950` (1280), `Mobile` `3629:44962` (360) | gray/max bar, absolute 1px gray/300 Bottom Border behind the tabs (so the active underline covers it, like production's −1px margin). Nav 1200 wide with spacing/300 side padding (Desktop) or full width with no padding (Mobile, ≤639px). Tab List: spacing/300 gap; Editor's Picks (Active) and For You (Default). |

Color mapping (nearest MNG gray, with readable contrast): #6B7280 → gray/200 (gray/300 is closer in value but too light for 12px text on white), #111827 → gray/min, #000 → gray/black, #C62828 → theme/primary, #FAFAFA → gray/max, #808080 → gray/300. Logged as design-vs-production entry 12 and as a row in the "Other fixes" tab of the color fixes sheet.

**Rule (Karl, 2026-10-23): no off-token values.** Where production uses a value with no token, round to the nearest existing Figma token and update production later; same for breakpoints. Applied: tab side padding 18 → spacing/200 (16; a tie with 20, Karl chose 16); tab gap 32 → spacing/300 (24); tab letter spacing 1.68px → 0 and the Article Section Kicker's 1px → 0, matching production's top nav items and Subscriber Only badge (both `letter-spacing: normal`, checked live on all 6 review sites, 2026-10-23: top nav 14.06px and 15px / 600, `.subscriber-only-tag` 13px, no letter-spacing rule on any site); ≤500px → ≤639px.

**WCAG AA (text 4.5:1 on white):** gray/200 6.6:1 (default tab, timestamp), gray/min 18.4:1, gray/black 21:1, theme/primary #007580 5.5:1 (kicker; Bold Coastal). gray/300 is 3.8:1, so it fails for text; it's used only for the bar border (non-text). Production's #6B7280 on #FAFAFA is 4.6:1.

## Next steps

Done 2026-10-23: imports working again; timestamp 13px (prototype `.tm` updated); the 3 atoms; the card, row and featured-story variants; Tab Nav Item / Tab Nav; Tooltip; shadow tokens; masthead rule and shadows; CTA panel decision (reuse InLineMessage DashSubsNonSub).

Still to do, in order (Karl, 2026-10-23: finish the For You components first, then clean up, then export):

1. **Remaining For You components:**
   - ~~Feed header subhead~~ Done 2026-10-23: Section Title / Eyebrow (`3333:42278`) has new properties Show Subhead (off by default), Subhead and Show Info; Noto Sans Regular 13 gray/200 with a 12px info icon, spacing/050 between them (prototype 6px, a tie between 4 and 8, rounded down); example instance "Example: For You feed header" (`3632:48697`). Style=Bold's gap set to 6 (raw, like Style=Underline). Style=Underline now hugs its text so the underline reaches the end of the title (Karl). Prototype section 4 added.
   - ~~Load More~~ Done 2026-10-23 (Karl): use the **production version everywhere for now**. **Show More Affordance** (`3634:49423`, WordPress Elements ▸ Homepage ▸ Photos) has production's exact values (raw; no component tokens planned): 1px #D7D6D2 rule; 35px #FBFBFB notch with #D7D6D2 left/bottom edges, ~5px right of center as in production; Noto Sans Bold 16/16 uppercase theme primary (Label property); 40px above and below; 97px tall; same at every width (checked live at 360, 768, 1728). All 7 placed instances in Photos Block (12 counting nested template copies) and the For You example now use it. Kept: **Show More Affordance (tokens, future reference)** (`3634:49427`: gray/500 rule and edges, gray/600 notch, always centered, 40px), the target in design-vs-production entry 18 (on hold). **Show More Affordance (old, unused)** (`3352:24180`) has no instances: delete when Karl confirms. Prototype section 5 added. Needs exporting (no tokens).
   - ~~Welcome modal~~ Done 2026-10-23: the prototype's `.mc` matches ModalsCenter (`3040:2262`) on every measured value (card, border, shadow/lg, padding at both sizes, header, body box, CTA, Button Modal Close states, backdrop). Only fix: border #83827F → #838280 (gray/300). The prototype keeps the `info` header icon (ModalsCenter's sample is `notification`). Prototype section 7.
   - ~~CTA panel~~ Done 2026-10-23: DashSubsNonSub values read from Figma (gray/600 panel, radius/utility, 24px padding and 16px gaps, 16px and 8px at Mobile/FOLD, notification2 icon and title in color/feedback/medium, 16px gray/min description, centered Button Primary). Prototype section 6.
   - "Show More Affordance (old, unused)" deleted (Karl, 2026-10-23).
   - Onboarding steps and chips (gap #11): deferred, hidden in the prototype.
2. **Cleanup** (see "Cleanup before export" below).
3. **InLineMessage simplified copy** (see below). After the For You export (Karl, 2026-10-27: document DashSubsNonSub as is for now); don't start until Karl says.
4. ~~**Export**~~ ✅ **Done 2026-10-28.** All 23 components in `registry.json` exported with the shared exporter per `EXPORT-STANDARD.md`: `components/core/<slug>/` (12) and `components/wordpress/<slug>/` (11, first WordPress Elements export), index in `components/index.json`. `npm run validate` passes (510 raw values reported, not failures). Exporter fixes: registry `production` text, boolean / text properties listed in an "Other property" table, image fills, 8-digit hex for translucent colors (the modal overlay). Both Figma libraries published (Karl, 2026-10-28); rechecked after publishing: every exported design value matches Figma, and the old Show More Affordance `3352:24180` is gone.
5. **Prototype fixes prompt:** `components/for-you-prototype-fixes.md` gets a section for each component; Karl runs it in the For You Tab MVP project once it's complete. ✅ **Ready 2026-10-28** (sections 1–10 plus a pointer to the exported specs; card hover stays parked).

## Come back to (Karl)

- **Narrow For You rows** (Horizontal Thumbnail Card, Style=For You, Device=Mobile, `3628:44666`): 90×54 image pinned top-left (2026-10-26). Revisit after the rest of the cleanup: Karl wants to see this version in the prototype (prototype prompt section 6) before deciding. Alternatives: Standard's exact 90×51, or 120×72.
- ~~**Card hover state**~~ ✅ Done 2026-10-28 in the Blocks components (see "Blocks components").
- **ModalsCenter MobileScroll scroll bar** and **ModalsOffset** usage: come back to them with the Embedded login project (Karl, 2026-10-27; main status open item 15).
- **Gallery Icon Badge: ask Karl again once it's in the prototype** (Karl, 2026-10-28: "use production format… run with production size, but circle back here once we have it loaded"). Done 2026-10-28: the badge (`3665:32148`) is now a set, Size = Small / Large × State = Default / Hover, in production's format: `color/gray/min` circle, 1px `color/gray/max` border, 85% opacity, theme primary on hover; Large 33px (16px icon, 5px in) on card and lead images, Small 20px (8.4px icon, 3.75px right, 5px bottom) on thumbnails (production `.icon-slideshow`, measured on denverpost and ocregister). All 106 instances updated (thumbnails Small; Blocks Card, Blocks Article Row and the 220px rows Large). The sizes, insets and opacity are production's raw values, not tokens. Prototype prompt section 6 updated. **After Karl runs the prompt, ask him whether to keep the production sizes or move to tokens.**

- **Zone 1 lead: gallery stories show a Slideshow, not the badge** (Karl, 2026-10-26; develop.denverpost.com). ✅ **Built 2026-10-26:** Zone 1 Slideshow (`3640:50278`, container `3640:50279`, WordPress Elements ▸ Homepage, next to Zone 1) and a new `Gallery = Image / Slideshow` variant property on Zone 1 Lead Article Card (12 variants); Zone 1's Show Gallery Icon property and badges removed. Measured at desktop, 768 and 360; off-token production values are design-vs-production entry 17.1. Arrow states captured 2026-10-26: new Slideshow Arrow set (`3641:50772`; Direction × Size × State = Default, Focus), used in all three slideshow variants; hover has no visual change, focus is a 2px white outline 3px out; the gallery loops and can be swiped. Controls use production's 800px breakpoint (Karl). Slide count announcement (aria-live) is a required production update: design-vs-production entry 17.2. **Layout (Karl, 2026-10-26, develop.denverpost.com with Related):** follows the lead's width: two columns when the lead is about 700px wide or more, one column (text, Related, then the slideshow full width) when narrower; on the homepage that's one column at 800–1279px and below 640px. Standard Mobile now puts the slideshow after Related; a one-column 594 sample is in the Zone 1 specs.

## Cleanup before export

Everything touched for the For You tab, by library. Check each item, then add the component to `scripts/component-export/registry.json`.

**WordPress Elements** (publish when done)

| Item | Node | Cleanup |
|---|---|---|
| Article Section Kicker | `3609:39112` | ✅ **Done 2026-10-23.** Description reworded for production; Specifications section with spacing samples (green markers) added to its container (`3609:39117`, widened to 760); registry entry `article-section-kicker` (layer wordpress, group article-parts). Line height 12.5 stays raw (no line-height tokens): listed as a known issue. Primary passes AA on white on all 96 sites (lowest 4.75:1). |
| Article Author | `3609:39115` | ✅ **Done 2026-10-23.** Description reworded; Specifications section with spacing samples (card footer: 8px above; rows and byline: 12px between author and timestamp) in its container (`3609:39159`, widened to 760); registry entry `article-author`. Line height 16 stays raw (known issue). |
| Article Timestamp | `3621:38794` | ✅ **Done 2026-10-23.** Description reworded; Clock Icon confirmed as the published library icon (access-time); Specifications section with a 2× spacing sample (4px between icon and time) in its container (`3621:38786`, widened to 760); registry entry `article-timestamp`. |
| 1Col Article Card, Style=For You | `3628:44640` | ✅ **Done 2026-10-23.** Variant description rewritten; "Specifications · Style=For You" section in the set's container (`3484:67695`): detached sample with green padding markers (16, 8, 12, 8), a magenta 16px card-gap demo, and spec text (unused properties and the space-between note documented). Grid: 3-up from 800px, 2-up at 640–799, 1-up below 640 (corrected from "2-up above 639"). Registry entry `1col-article-card`. Hover still parked. |
| Horizontal Thumbnail Card, Style=For You | `3628:44666` / `44686` / `44706` | ✅ **Done 2026-10-23.** Variant descriptions rewritten (widths explained: 848 = 896 feed column minus 24px padding each side; the row only changes at 640px); "Specifications · Style=For You" section in the container (`3484:67724`) with Mobile and Tablet/Desktop detached samples (green markers) and a magenta 16px row-gap demo; Show Gallery Icon documented as Standard-only; registry entry `horizontal-thumbnail-card`. Variant order on the canvas is fine (Mobile, Tablet, Desktop). Hover still parked. **2026-10-26 (Karl):** Gallery Icon Badge added to all three For You rows and to the 1Col For You card (new Show Gallery Icon property on 1Col Article Card), 28px, 6px in from the image's bottom-right corner like Style=Standard; Standard Tablet's badge was not bound to Show Gallery Icon (fixed). Mobile row image is now 90×54 (Standard's 90px width at the larger rows' 5:3 ratio), pinned top-left with white space below. Specs updated in both containers. |
| Zone 1 Lead Article Card, Style=For You | `3628:44769` / `44822` / `44874` | Excerpt gap 4 vs prototype 6 (open). Byline top padding mixes spacing/050 (Mobile) and spacing/100 (Tablet, Desktop) to reach 12px: simplify. | **2026-10-26:** Show Gallery Icon property added, then replaced the same day by `Gallery = Image / Slideshow` (Zone 1 gallery leads show the Zone 1 Slideshow, not the badge; Karl). ✅ **Done 2026-10-26.** Variant descriptions rewritten; "Specifications · Style=For You" section in the container (`3484:67601`) with Desktop and Mobile detached samples (green markers, gallery badge shown on) and spec text; registry entry `zone-1-lead-article-card`. Excerpt gap kept at 4px (production's Standard lead; prototype had 6). Byline spacing left as is and documented (12px = parent gap + byline top padding). New known issue: on Tablet the image (391) is wider than its 358 column, in both styles.
| Tab Nav Item / Tab Nav | `3629:44949` / `3629:44974` | ✅ Done 2026-10-26: container `3629:44928` renamed "Tab Nav Container" and restyled to the white format; state and breakpoint labels on the variant grid; Focus ring confirmed (117×36, 3px inset on a 123×42 tab); Specifications section with a 2× Active tab sample and a Desktop bar sample (green padding/gap, magenta nav padding); registry entries `tab-nav-item` and `tab-nav`. |
| Masthead | `456:2572` | New: shadow/masthead on Scrolled; no shadow at the top; gray/400 rule on every variant. Variant descriptions don't mention these. The masthead search bar (production `0 3px 3px` · 25%) not checked. |
| ObitMastHead | `1139:22369` | Now matches Masthead (shadow/masthead when scrolled, gray/400 rule). The mobile Scrolled variants show a gray edge on the sides: check. |
| AccountMenu | `910:16425` | Uses shadow/lg from the library. Documentation frames ("AccountMenu Desktop", Frame 12800) also updated. |
| shadow/masthead effect style | local style | No documentation frame in WordPress Elements yet. |
| Section Title / Eyebrow | `3333:42278` | New Show Subhead / Subhead / Show Info properties; Style=Underline now hugs its text (underline runs to the end of the title); per-theme examples (Typography Theme modes) in the container. Subhead gap spacing/050; root gaps are 6 (raw). ✅ **Done 2026-10-27.** Root gaps and Title Row gaps (title to arrow) 6 → `spacing/100` (8px; a tie, Karl chose 8); production measured on all 6 sites and logged as design-vs-production entry 14 (sheet "Other fixes" row 56). Container `3484:67627` widened to 1100: description rewritten (Chevron is on by default, not off), gray state labels, Specifications section with a 2× detached sample (green markers: 8, 8, 8, 4) and spec list. Set and variant descriptions rewritten (the variant ones still described the old Website Page Templates mirror). Registry entry `section-title-eyebrow`. Letter spacing 3.5% and the 22px line height stay raw (no tokens exist). |
| Show More Affordance | `3634:49423` | Production values on purpose, no component tokens (Karl). Export it as is. Delete "Show More Affordance (old, unused)" (`3352:24180`) once Karl confirms; keep the tokens version as a reference. ✅ **Done 2026-10-27** (documented as is). Container `3484:67739` widened to 1300: description corrected (the middle row is the For You example, not the old version), gray row labels (production / For You example / tokens version, future reference only), rows spaced so the notch clears the labels, Specifications section with a detached 600px sample (green 40px padding markers) and spec list. Registry entry `show-more-affordance`. Old version `3352:24180` deleted (Karl, 2026-10-27; it was already off the canvas, so it drops out of the library at the next publish). Rechecked on all 6 sites 2026-10-27: matches production except the rule and notch-edge gray, which differs per theme (#D7D6D2 Bold Coastal, #C8C4C0 Measured Vibrant, #DDD8D5 Modern Earthy); the component shows Bold Coastal; description, spec list, registry and design-vs-production entry 18 corrected. |

**MNG Web Design System** (publish when done)

| Item | Node | Cleanup |
|---|---|---|
| Icons, access-time | `7329:25691` | The frame "Icons" (`4693:2`) shows as a second "Icons" in the Assets panel; rename it (e.g. "Icons Documentation") and the generic "Frame 12687" / "Frame 12769" (offered, not done). |
| Tooltip | `7372:25744` | Two text properties (Label for Tooltip, Text for Toggletip). No example of the toggletip next to an info icon trigger. Caret is two vectors: check it scales. Old "Section Menu/ToolTip box" frames on "Elements to be detailed still" are superseded. ✅ **Done 2026-10-27.** Caret checked: it scales with the component (and its vectors now use scale constraints) and stays centered as the box grows to its max width. Container `7372:25704` widened to 1300: Type · Placement column labels; example of the For You feed header info button opening Type=Toggletip, Placement=Bottom (magenta 8px, `spacing/100`, trigger to caret); Specifications section with 2× detached Tooltip and Toggletip samples (green padding markers) and spec list. Set and variant descriptions rewritten. The old frames are renamed "… (superseded by Tooltip, Tooltips page, 2026-10-27)". Production's article type-of-work popup checked on ocregister and denverpost and logged as design-vs-production entry 35 (sheet "Other fixes" row 56). Registry entry `tooltip`. The root gap is −1px (caret overlaps the box to hide the seam), documented as a construction detail. |
| Shadow effect styles shadow/sm, md, lg | Shadows \| 2026.10.23 page | ✅ **Done 2026-10-26.** `extract.js` now also reads the `shadow/*` effect styles and their bound variables; `make-tokens.py` writes DTCG `shadow` tokens to `tokens/core/shadow.tokens.json` (offsets and blur reference `{spacing.*}`, black only, the build stops on unbound or mismatched values); `build.py` writes them to every `dist/` format (`--mng-shadow-*` keeping `var(--mng-spacing-*)`, Sass/JS/JSON resolved, Tailwind `shadow-mng-*`, `theme.json` `settings.shadow.presets`). `EXPORT-STANDARD.md` §3.5 Shadows; main status doc §4. `shadow/masthead` not exported yet (WordPress Elements; later). |
| ModalsCenter / ModalsOffset | `3040:2262` / `6497:6263` | Now shadow/lg (FixedFooter too). Update `components/modal.md` (it still describes the Tailwind shadow-xl). | ✅ **Done 2026-10-27.** All 366 spacing and radius values bound to tokens (new `spacing/400` 32 and `spacing/500` 40 for ModalsOffset FixedFooter and the ModalsCenter card padding, Karl; pull request #8); header icon: the raw 6px top padding is gone; the header row now uses baseline alignment, so the optional icon lines up with the title's first line (also when the title wraps) and the subtitle still lines up under the title (Karl, 2026-10-27). White containers on the Modal Panels page, "ModalsCenter Container" (`7418:3457`) and "ModalsOffset Container" (`7418:4380`), with the sets moved into them (same file), Device / Location / Options labels, Specifications (Desktop and Mobile cards; Float and FixedFooter panels) and spec lists folding in the old written spec. Set descriptions written. `components/modal.md` updated (`shadow/lg`, current token names, new §7 ModalsOffset). Registry entries `modals-center` and `modals-offset` (`pop-up-modal-close` kept). The Google account chooser (GOTcustom) is Google's UI: left untokenized (Karl). **Later 2026-10-27 (Karl):** the old gray "Modal Panels" frame's spec and color code (magenta margin, green card padding, yellow header, red body padding, blue links and buttons) moved into the ModalsCenter container's Specifications, with in-context samples (masthead, 50% overlay below it, card) at 768, 360 and 340 and the "Where scroll is needed" sample; then the old frame (`3040:2251`) was removed. |
| InLineMessage DashSubsNonSub | `3421:643` | Reused for the For You CTA; covered by the simplified copy below. ✅ **Done 2026-10-27 (documented as is, Karl).** The page's older documentation frame covers 10 of the set's 31 Locations, not DashSubsNonSub, so it got its own white container, "InLineMessage DashSubsNonSub Container" (`7419:19429`, In-Line Content Containers page): the three variants (instances; they stay in the set), a For You example ("Your personalized feed is waiting" / "Subscribe Now"), Specifications with Desktop and Mobile samples and a spec list. Variant descriptions written; 31 gap and padding values bound to their exact tokens (no visual change). Contrast: title `color/feedback/medium` on `gray/600` 4.51:1, description 16.0:1, button label 5.45:1 (Bold Coastal). Known issue: Mobile and FOLD use a detached `notification2` vector instead of the Icons component, and Button Primary Breakpoint=Desktop. Registry entry `inline-message-dashsubsnonsub`. The simplified InLineMessage copy is now after the For You export (Karl, 2026-10-27). |

**Repo**

- `registry.json` entries for every component above; `components/wordpress/` for the WordPress Elements ones.
- `components/modal.md`, `components/navigation.md` (masthead shadow and rule now tokenized), `components/icons.md` (access-time).
- Design-vs-production entries 9.3, 11, 12 and 24 are logged; recheck them after cleanup.

## InLineMessage simplified copy (deferred, Karl, 2026-10-23; after the For You export, Karl, 2026-10-27)

After the For You export, make a **new, simplified copy** of InLineMessage (`2776:2`, 114 variants) in the MNG Web Design System for production use going forward. Don't remove or change the existing set: it's used in several design files. Build reusable versions of its variants (properties for copy, icons and CTAs instead of one variant per screen), using open item 6 in the main status doc and `components/reader-dashboard-inline-message-component-audit.md` as the starting point. First confirm that the variants are documented in the specs container on the In-Line Content Containers page. **Don't start until Karl says.**
