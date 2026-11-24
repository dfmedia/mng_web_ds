- **All five pages** (Home 2026-10-30; Section Front, Article, Obituaries and Dashboard added the same day for the For You prototype). All 90 Figma variants are drawn in the preview (pick the page at the top).
- **Section Front / Article** (1040px and up): the logo moves to the middle of the menus row and the section name (Noto Serif Bold 40, `color/theme/primary`, 5.2–6.9:1 on white across the three themes) takes its place in the weather row. Section Front's Top Nav uses the section sample from Figma (Food & Drink … Shopping); Article keeps the main nav. Below 1040px both match Home. Article's condensed bar at 1040px and up: 64px hamburger, 176×36 logo, the section name (`color/theme/primary-dark`, 5.8–9.3:1) and headline (`color/gray/min`) in Noto Serif Bold 16 on one line with an ellipsis, and the share bar, which is the `SocialButtons` component (Karl, 2026-11-12; Theme = Bold Coastal as in Figma, or `shareTheme`): Save with its divider, then Facebook, Reddit, X, Email, Link, Gift in SocialButtons' order. The account menu is hidden in that bar, as in Figma. Figma's XL Article bar has the logo touching the section name (open item); here the row has its 14px gap.
- **Obituaries:** 40px top padding at 1040px and up, 8px at 640–1039px; the page title (Noto Serif Bold 40 at 1040px and up, 26 below; `color/theme/primary`); Sponsorship 1 300x50 to the right of the title at 800px and up (a hidden 300px twin on the left keeps the title centered), under it below 800px, and no Top Leaderboard. Then the Obits Nav: the search field (16px placeholder, 1px `color/gray/300`, radius 3px at 640px and up; 14px, 1px `color/gray/min`, `radius/sm` below; placeholder `color/gray/200`, 6.6:1), `search` and `equalizer2` (filter) at 26px, "Powered by" (12px, uppercase, 10% tracking at 640px and up; sentence case, no tracking below, as in Figma) with the Endless Tributes logo (106×28; 75×20 below 640px), and Submit an Obituary (`color/theme/primary`, `radius/utility`, Noto Sans Bold 16 `color/gray/max`, 5.2–6.9:1). Below 640px the logo is 100×20 and the panel has a 1px `color/gray/min` bottom edge. The condensed state keeps the bar and the Obits Nav.
- **Obituaries title and ads** (Karl, 2026-10-30): the title is centered horizontally and vertically in its row at every width, and the Sponsorship 1 300x50 shows wherever ads are expected (Default). At 800px and up it sits right of the title; below 800px it has its own centered row under the title (Figma updated the same day: the old 801px offset title row had pushed the ad off the frame). AdFree has no ad.
- **Dashboard** (Reader Dashboard): always logged in (the avatar) and no ads; Figma has Default and Scrolled only. 1040px and up: menus row with an empty middle, then an 80px row with the weather bug, the 235×48 logo and an empty right column, and the rule. 800–1039px: the 64px bar and the rule. Below 800px: the bar, the rule and NavMenu (View = Closed): "Reader Dashboard" Noto Serif Bold 26 `color/gray/min` and a 16px `arrow-down` (Figma `arrow-down2`, not in the icon font), 40px tall, 16px left padding, 1px `color/gray/min` bottom edge.
- **Endless Tributes logo:** partner artwork (WordPress Elements `456:3443`), inlined as SVG from the Figma export with its own colors (`#141414`, `#A7A6A3`, white); not themed.
- **Scroll behavior:** the condensed masthead sits in a zero-height `position: sticky` wrapper just before the header (so it takes no space whatever its height, and is pinned to the top of the scroll area from the start; until 2026-11-16 it came after the header, so it appeared under the full masthead and only reached the top once the whole masthead had scrolled away), shown when an IntersectionObserver sentinel inside the header leaves the scroll area. At that moment the full masthead is hidden but keeps its space, the way production swaps its header for an empty `.header-placeholder` of the same height (denverpost.com at 1728px, 2026-11-16: header 226px, placeholder 224px), so only one masthead shows and the page doesn't jump; the Top Leaderboard, which is outside production's header, stays and scrolls away. The switch is instant, as in production (the condensed bar's 150ms fade-in was removed 2026-11-16: with 55px it showed both mastheads, or neither, for a moment). The sentinel is 1px and ends at the threshold, so a threshold of 55 switches at 56px of scrolling, as production (checked in a headless render 2026-11-16). Thresholds on Home, Section Front and Article: 55px at 1040px and up and 1px below, from production. On denverpost.com and mcall.com (checked 2026-11-16 in a 1728px window) `header.site-header` gets `.headroom--not-top` and becomes `position: fixed`, 65px tall (64px row + 1px rule), at 56px of scrolling, and is still the full masthead at 55px; the condensed bar stays shown scrolling down (`headroom--unpinned`) and back up (`headroom--pinned`) and never hides (`components/navigation.md` §2.2). Below 1040px the 65px row stays pinned and only the ad scrolls away. Until 2026-11-16 the 1040px-and-up threshold was 450px, read from the 2026-09-15 audit's "after ~450px scroll", which was how far that check scrolled, not production's offset. 1040–1279px wasn't measured separately; the same offset is used across XL-Desktop. Obituaries and Dashboard switch once the whole masthead has scrolled away (no production measurement yet).
- **Device from the width**, not the viewport, so several mastheads at different widths can sit on one canvas (ResizeObserver on the header). Breakpoints are the WordPress grid (1040 / 800 / 640); XS-Fold is used below 360px (Figma builds it at 340px; production treats everything below 640px the same except the ad size).
- **shadow/masthead** isn't exported as a token yet (WordPress Elements effect style): `0 3px 3px 0 rgba(0,0,0,.25)` is written from the Figma effect (radius 3, y 3, black 25%).
- **Raw values from the token file** with no variable: the 14px minimum gap in the weather row, the 440px empty middle of the 1040px menus row, and the monogram avatar's `#FF702C` (UserImage; initials `color/gray/min`, 6.7:1).
- **Icons:** the account chevron is `arrow-down` at 12px, in a 16px box (Figma uses `arrow-downSMALL`, a 12 × 8 arrow in a 16px icon, which isn't in the icon font; the font's `arrow-down` at 12px draws the same 12px-wide arrow. It was 10px until 2026-11-09). The weather bug's tornado is an external Figma library icon, inlined as SVG from the Figma export.
- **Logo:** the placeholder logos' Fakeville Daily News stacked art (same artwork as the Figma masthead), 235×48 at 800px and up and 147×30 below.
- **Top Nav** keeps the Figma Default's 11 items and clips at both edges at 1040–1322px, as production does (design-vs-production 9.1). The Figma AdFree variant shows 7 items; here both use the same list.
- The 1040px menus row's Subscribe / Log In are `ButtonPrimary` with their 8px side margin removed (UserStatus instances carry it as padding inside the 15px gap).
- Not built: the open section menu drawer (SectionMenu, View = Open), the account dropdown (AccountMenu, View = Open) and the open search field (SearchBar, Status = Open). They're exported to `components/wordpress/` for later.
- The Weather Bug temperature is a third-party widget and stays Helvetica Bold, in Figma and here (Karl, 2026-10-30): `Helvetica, Arial, sans-serif` (Arial where Helvetica isn't installed). The date and E Edition link are Noto Sans.
- **Fixed 2026-10-30:** the 800–1039px and 640–799px rules never applied (the CSS used `--lg-tableth` / `--md-tabletv`; the class names are `--lg-tablet-h` / `--md-tablet-v`). The 800–1039px bar now spreads its three columns and the 640–799px hamburger is 88px, as in Figma.
- **Raw values on the other pages:** the 3px search-field radius (no radius token; `radius/sm` is 4px), the 10% "Powered by" tracking (no letter-spacing token), the 14px title-row gap and the 2px gap in the small "Powered by" lockup, all from Figma.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Masthead
  # A header landmark; the section links are in a nav (aria-label "Main").
  # The hamburger is a button with aria-expanded; search is a button with a label.

  Rule: The Section Front name wraps instead of being cut

    Scenario Outline: A Section Front at 1040px and up
      Given the section is named <name>
      When the page loads
      Then the name is centered under the logo <how>

      Examples:
        | name                             | how                                               |
        | "Things To Do"                   | on one line                                       |
        | "Restaurants, Food And Drink"    | on two lines, and the row grows taller            |
        | one word wider than its column   | with the word broken onto the next line, no hyphen |

  Rule: The masthead condenses when the reader scrolls (1040px and up)

    Scenario: The reader scrolls down
      Given the reader is at the top of the page
      When the reader scrolls past 55px
      Then the full masthead is replaced by the 64px bar pinned to the top
      And the ads under it scroll away

    Scenario: The reader scrolls back to the top
      Given the bar is pinned
      When the reader scrolls back to the top
      Then the full masthead returns, with no shadow

    Scenario: An article page
      Given the reader is on an article
      When the bar is pinned
      Then it shows the section name, the headline and the share buttons

  Scenario: More Top Nav items than fit
    Given a site has more Top Nav items than fit (11 on Chicago Tribune and Orlando Sentinel)
    When the masthead shows
    Then the Top Nav keeps its natural width and is clipped at the edges
    # As production does; design-vs-production 9.1.

  Scenario: Keyboard focus near the top of the page
    Given the bar is pinned
    When the reader tabs to a control near the top
    Then the page scrolls so the control is not hidden under the bar
    # scroll-padding-top: 65px.
```
