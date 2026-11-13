# Breaking News Banner

> **Updated 2026-11-12** — first version: production check (6 review sites plus East Bay Times, Mercury News, The Oakland Press, Morning Journal, The News-Herald, Reading Eagle and the LA Daily News), the bar-color audit of all 97 sites in the cluster audit, the Figma rebuild, and Karl's decisions.

**Figma:** WordPress Elements ▸ Menus and Parts ▸ **Breaking News Banner** (`506:5632`), in the doc container `3803:49898`. Three `Device` variants: `XS (≤639px)` (`538:5932`, drawn at 360), `S (640–799px)` (`3477:63041`, drawn at 640) and `(≥800px)` (`506:5623`, drawn at 1280). The older copy on the Article Page (`148:640`) was deleted (Karl, 2026-11-12); its 3 instances in the Article Page templates now use the `(≥800px)` variant.

**Drift:** `design-vs-production.md` entry 13.

## 1. What production renders

Checked 2026-11-12 on all 6 review sites (CSS scan plus a test bar built from the site's own markup), with live bars on Cañon City Daily Record, The Denver Post and The Morning Call. The three theme stylesheets share the same rules; only the colors and fonts change by theme.

| Part | Production | Design |
|---|---|---|
| Bar | `.breaking-bar`, `background: var(--secondary)`, full content column, 16px below it | `color/theme/secondary`, 16px (`spacing/200`) below |
| 800px and up | one row, `min-height: 35px`, padding 0 / 10px, content centered | one row, at least 36px tall, 12px (`spacing/150`) left and right, no top or bottom padding |
| Below 800px | `padding: 10px 10px 5px`; the title, headline and date flow inline as one paragraph; the text box reserves 40px on the right for the close button | 12px (`spacing/150`) top, left and right, 4px (`spacing/050`) bottom; one paragraph; the close button 12px after the text |
| Title "BREAKING NEWS" | uppercase Bold 18 / 18, 160px wide, `margin-right: 11.25px` | Bold 18 / 18 (`font/size/18`, `font/style/bold`), 160 wide, 12px (`spacing/150`) to the headline |
| Below 640px | the headline also gets `padding-left: 10px` (21.25px after the title) | 20px after the title on the first line |
| Title font | Noto Sans (Bold Coastal, Modern Earthy), Noto Serif (Measured Vibrant) | `font/theme/small-headline-family` (the same pairing) |
| Headline | Regular 16 / 20, links to the story; Noto Serif (Bold Coastal, Measured Vibrant), Noto Sans (Modern Earthy) | `font/theme/heading-family`, `font/size/16`, 20px line height |
| Date | Noto Sans Regular 12 / 18.75, `#5D5B5A`, 16px after the headline | the same size, `color/gray/100`, 16px (`spacing/200`) after the headline; never breaks across lines |
| Close button | `icon-close`, 28px, theme near-black, `position: absolute`, 10px from the right, centered | the close icon, 28 x 28, `color/theme/near-black`, 12px from the right |

**Breakpoints:** `max-width: 39.9375em` (639px) and `max-width: 49.9375em` (799px), the same on all three themes. Recorded in `components/breakpoint-audit.md` (site-wide catalog).

**Production bug:** from 800px up the text box reserves no space for the close button, so a long headline pushes the date under it (seen at 800px on Cañon City). The design keeps at least 16px (`spacing/200`) before the close button.

## 2. Karl's decisions (2026-11-12)

- Follow production, rounded to the 4/8 grid. The 10px values were a tie: **12px**.
- Date: **12px, `color/gray/100`** (passes on every light secondary).
- Sites that override the bar color (section 3) **stay as they are**; their contrast problems are logged as ADA issues in the drift doc.
- Delete the duplicate component on the Article Page and swap its instances to the main set.

## 3. Bar color on all 97 sites (cluster audit, 2026-11-12)

Read with a test bar built from each site's markup inside `#content` (so `#content .breaking-bar` overrides apply), plus a scan of every stylesheet for `.breaking-bar` background rules. Chrome's extension couldn't open most of the sites; those were checked in the Claude desktop app's browser. No live bar was needed: the color comes from the CSS either way.

**8 sites override the bar to red** (white title and headline):

| Site | Theme | Bar | Rule | Title / headline | Date | Close icon |
|---|---|---|---|---|---|---|
| The Denver Post | Bold Coastal | #AF1628 | `.breaking-bar { background: var(--primary-lighter) }` | white 7.1:1 | #5D5B5A **1.1:1** (the live bar hides the date) | #0A0908 **2.8:1** |
| The Morning Call | Modern Earthy | #AD1700 | `#content .breaking-bar` | white 7.2:1 | white 7.2:1 | #141414 **2.5:1** |
| Orlando Sentinel | Measured Vibrant | #D80000 | `#content .breaking-bar` | white 5.4:1 | #5D5B5A **1.3:1** | #1F1E1C 3.1:1 |
| South Florida Sun Sentinel | Measured Vibrant | #D80000 | `#content .breaking-bar` | white 5.4:1 | #5D5B5A **1.3:1** | #1F1E1C 3.1:1 |
| The Virginian-Pilot | Measured Vibrant | #D80000 | `#content .breaking-bar` | white 5.4:1 | #5D5B5A **1.3:1** | #1F1E1C 3.1:1 |
| Daily Press | Measured Vibrant | #F22400 | `#content .breaking-bar` | white **4.2:1** | #5D5B5A **1.6:1** | white 4.2:1 |
| Capital Gazette | Bold Coastal | #D80000 | `#content .breaking-bar` | white 5.4:1 | #5D5B5A **1.3:1** | #0A0908 3.7:1 |
| The Baltimore Sun | Bold Coastal | #D80000 | `#content .breaking-bar` | white 5.4:1 | white 5.4:1 | #0A0908 3.7:1 |

Text needs 4.5:1 (the 18px Bold title isn't large text); the close icon is a graphic and needs 3:1. Bold = fails.

Every other site uses its theme's `secondary`. The only failing secondaries for the design's near-black text are Denver Post's navy (#003459, 1.4:1) and The Baltimore Sun's gold (#98712A, 4.5:1 rounded, 4.48), and both of those sites override the bar, so the design's colors never show there.

| Site | Domain | Theme | Bar | Theme secondary | Source |
|---|---|---|---|---|---|
| Capital Gazette | capitalgazette.com | Bold Coastal | #D80000 | #EAEAEA | **override** |
| The Baltimore Sun | baltimoresun.com | Bold Coastal | #D80000 | #98712A | **override** |
| East Bay Times | eastbaytimes.com | Bold Coastal | #EEFF41 | #EEFF41 | secondary |
| The Mercury News | mercurynews.com | Bold Coastal | #FFC518 | #FFC518 | secondary |
| The Denver Post | denverpost.com | Bold Coastal | #AF1628 | #003459 | **override** |
| Orange County Register | ocregister.com | Bold Coastal | #FFEA00 | #FFEA00 | secondary |
| Torrance Daily Breeze | dailybreeze.com | Bold Coastal | #FFEA00 | #FFEA00 | secondary |
| Petaluma Argus-Courier | petalumanews.com | Bold Coastal | #FFEA00 | #FFEA00 | secondary |
| Sonoma County Gazette | sonomacountygazette.com | Bold Coastal | redirects to pressdemocrat.com | | |
| The Press Democrat | pressdemocrat.com | Bold Coastal | #FFEA00 | #FFEA00 | secondary |
| The Sonoma Index-Tribune | sonomanews.com | Bold Coastal | #FFEA00 | #FFEA00 | secondary |
| St. Paul Pioneer Press | twincities.com | Bold Coastal | #FFEA00 | #FFEA00 | secondary |
| Daily Oakland Press | theoaklandpress.com | Modern Earthy | #9DAABD | #9DAABD | secondary |
| Macomb Daily | macombdaily.com | Modern Earthy | #9DAABD | #9DAABD | secondary |
| Mount Pleasant Morning Sun | themorningsun.com | Modern Earthy | #9DAABD | #9DAABD | secondary |
| The News-Herald (Southgate) | thenewsherald.com | Modern Earthy | #9DAABD | #9DAABD | secondary |
| Kingston Daily Freeman | dailyfreeman.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Oneida Daily Dispatch | oneidadispatch.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Saratogian | saratogian.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| The Troy Record | troyrecord.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Lake County News-Herald | news-herald.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Lorain Morning Journal | morningjournal.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Delaware County Times | delcotimes.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Main Line Media News | mainlinemedianews.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Norristown Times Herald | timesherald.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Reading Eagle | readingeagle.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| The Lansdale Reporter | thereporteronline.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| The Pottstown Mercury | pottsmerc.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Trentonian | trentonian.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| West Chester Daily Local | dailylocal.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Silicon Valley | siliconvalley.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Nashoba Valley Voice | nashobavalleyvoice.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Boston Herald | bostonherald.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Colorado Daily | coloradodaily.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Julesburg Advocate | julesburgadvocate.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Lamar Ledger | lamarledger.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Lowell Sun | lowellsun.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Sentinel & Enterprise (Fitchburg) | sentinelandenterprise.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Republican Herald (Pottsville) | republicanherald.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Scranton Times-Tribune | thetimes-tribune.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Standard-Speaker (Hazleton) | standardspeaker.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| The Citizens' Voice (Wilkes-Barre) | citizensvoice.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Wyoming County Examiner | wcexaminer.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Boulder Daily Camera | dailycamera.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Greeley Tribune | greeleytribune.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Longmont Times-Call | timescall.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Loveland Reporter-Herald | reporterherald.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Akron News-Reporter | akronnewsreporter.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| BoCoPreps | bocopreps.com | Modern Earthy | redirects to dailycamera.com (sports section) | | |
| Broomfield Enterprise | broomfieldenterprise.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Brush News-Tribune | brushnewstribune.com | Modern Earthy | redirects to fortmorgantimes.com | | |
| Buffzone | buffzone.com | Modern Earthy | redirects to dailycamera.com (sports section) | | |
| Cañon City Daily Record | canoncitydailyrecord.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Colorado Hometown Weekly | coloradohometownweekly.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Estes Park Trail-Gazette | eptrail.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Fort Morgan Times | fortmorgantimes.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| South Platte Sentinel | southplattesentinel.com | Modern Earthy | redirects to journal-advocate.com | | |
| Sterling Journal-Advocate | journal-advocate.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| The Burlington Record | burlington-record.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Excelsior California | excelsiorcalifornia.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| LA Daily News | dailynews.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Pasadena Star-News | pasadenastarnews.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Press Enterprise (Riverside) | pressenterprise.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| San Bernardino Sun | sbsun.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| San Gabriel Valley Tribune | sgvtribune.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Whittier Daily News | whittierdailynews.com | Modern Earthy | #EEFF41 | #EEFF41 | secondary |
| Daily Herald | dailyherald.com | Modern Earthy | not on the WordPress themes (no breaking bar) | | |
| The Morning Call | mcall.com | Modern Earthy | #AD1700 | #EEFF41 | **override** |
| Marin Independent Journal | marinij.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Chico Enterprise-Record | chicoer.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Eureka Times-Standard | times-standard.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Lake County Record-Bee | record-bee.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Monterey Herald | montereyherald.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Oroville Mercury-Register | orovillemr.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Red Bluff Daily News | redbluffdailynews.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Santa Cruz Sentinel | santacruzsentinel.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Ukiah Daily Journal | ukiahdailyjournal.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Vacaville Reporter | thereporter.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Vallejo Times-Herald | timesheraldonline.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Woodland Daily Democrat | dailydemocrat.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Fort Bragg Advocate-News | advocate-news.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Paradise Post | paradisepost.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| The Mendocino Beacon | mendocinobeacon.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| The Willits News | willitsnews.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Inland Valley Daily Bulletin | dailybulletin.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Long Beach Press-Telegram | presstelegram.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Redlands Daily Facts | redlandsdailyfacts.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| San Diego Union-Tribune | sandiegouniontribune.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Daily Press | dailypress.com | Measured Vibrant | #F22400 | #EEFF41 | **override** |
| New York Daily News | nydailynews.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| The Virginian-Pilot | pilotonline.com | Measured Vibrant | #D80000 | #EEFF41 | **override** |
| Chicago Tribune | chicagotribune.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| GrowthSpotter | growthspotter.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Hartford Courant | courant.com | Measured Vibrant | #EEFF41 | #EEFF41 | secondary |
| Orlando Sentinel | orlandosentinel.com | Measured Vibrant | #D80000 | #EEFF41 | **override** |
| South Florida Sun Sentinel | sun-sentinel.com | Measured Vibrant | #D80000 | #EEFF41 | **override** |
| Sonoma Magazine | sonomamag.com |  | not on the WordPress themes (no breaking bar) | | |

**Date contrast on the secondary sites:** production's #5D5B5A date fails on The Mercury News (#FFC518, 4.3:1) and on the four Michigan sites with the #9DAABD secondary (The Oakland Press, The Macomb Daily, The Morning Sun, The News-Herald: 2.9:1). The design's `color/gray/100` passes everywhere (4.9:1 on #9DAABD, 7.3:1 on #FFC518). East Bay Times shows #EEFF41 where its palette's secondary is #FFC518: a known color fix (`design-vs-production.md`, Mercury News + East Bay Times).

## 4. Built in Figma (2026-11-12)

- The set and its variants were rebuilt in place (instances kept): property `Property 1` renamed **`Device`**; Mobile / Tablet / Desktop renamed to `XS (≤639px)` / `S (640–799px)` / `(≥800px)`.
- The bar is the component itself (no white wrapper); fills, spacing and type are bound to variables. Below 800px the headline and date are one text layer with a first-line indent (172 / 180px) and the title sits on its first line, so the headline wraps under the title as in production.
- Doc container (white format): variant grid and diagrams on a `color/gray/500` stage; the specification sheet is dated 2026.11.12.
