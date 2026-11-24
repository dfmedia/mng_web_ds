- **Built to match production** on the 4 / 8 grid (Karl, 2026-11-12), checked on all 6 review sites (CSS, a test bar from each site's markup, live bars on Cañon City, Denver Post and Morning Call): production's 10px values became 12 (a tie, Karl chose 12), 35px became 36, 11.25px became 12 and 5px became 4.
- **Breakpoints are production's** (640 / 800px, the same on the three themes); `device` names the range. Below 800px the title, headline and date flow inline as production does; the headline's inline 16px right margin keeps a wrapped date at the left edge.
- **Fonts follow the theme:** title `font/theme/small-headline-family`, headline `font/theme/heading-family` (Noto Serif on Bold Coastal and Measured Vibrant, Noto Sans on Modern Earthy), exactly what production renders.
- **Date** is `color/gray/100` (Karl, 2026-11-12); production's #5D5B5A fails on The Mercury News (4.3:1) and the Michigan #9DAABD sites (2.9:1). Design contrast: near-black 7.4:1 or more and the date 4.9:1 or more on every light secondary.
- **Eight sites override the bar to red** and keep it (Karl, 2026-11-12): Denver Post, Morning Call, Orlando Sentinel, South Florida Sun Sentinel, The Virginian-Pilot, Daily Press, Capital Gazette, The Baltimore Sun. Their contrast failures are ADA issues (design-vs-production 13.1); this component draws the design (secondary).
- From 800px the close button keeps at least 16px from the text; production reserves none, so a long headline can push the date under it (13.2).

### Behavior (Gherkin)

The same Gherkin as the Figma spec in WordPress Elements (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Breaking News Banner
  # Breakpoints: production .breaking-bar, max-width 39.9375em / min-width 50em

  Rule: The layout follows the screen width
    Scenario Outline: Banner at <range>
      Given a breaking news story is live
      When the page loads at <range>
      Then the title, headline and date sit <layout>

      Examples:
        | range         | layout                                               |
        | XS (≤639px)   | in one paragraph; the headline wraps under the title |
        | S (640–799px) | in one paragraph, as XS, with 12px side padding      |
        | (≥800px)      | on one line, centered vertically                     |

  Rule: The date never breaks across lines
    Scenario: A long headline on a small screen
      Given the headline runs past the first line
      When the banner wraps
      Then the date moves to the next line whole

  Rule: The headline links to the story
    Scenario: The reader opens the story
      When the reader selects the headline
      Then the story opens

  Rule: A closed banner stays closed for that story, in that tab
    # production (all 6 review sites, 2026-11-24): sessionStorage "breakingArticleKey" = article id + its time
    Scenario: The reader closes the banner
      Given a breaking news story is showing
      When the reader selects the close button or presses Enter on it
      Then the banner is removed from the page
      And the story is remembered for this browser tab
      # the close button is a link; production's label is "Click here to close"

    Scenario Outline: After closing, the reader <action>
      Given the reader closed the banner for a story
      When the reader <action>
      Then the banner <result>

      Examples:
        | action                                 | result       |
        | opens another page in the same tab     | stays hidden |
        | reloads the page                       | stays hidden |
        | opens the site in a new tab or window  | shows again  |
        | sees the story updated with a new time | shows again  |
        | sees a different story go live         | shows again  |
```
