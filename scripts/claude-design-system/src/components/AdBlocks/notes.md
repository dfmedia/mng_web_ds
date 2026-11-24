- **Placeholder art** from the token file: `ad-blocks.base.root.background` (#85FF9B) and the 2px `color/gray/min` border; diagonals `ad-blocks.base.union.vector-1.border-color` (#111111, 2px). Not design tokens on purpose (it's not production UI).
- **Label:** Noto Serif Bold 16, `color/gray/min`, with a 3px `color/gray/600` halo (Figma text stroke; drawn with `-webkit-text-stroke` and `paint-order: stroke fill`), letter spacing from each variant's token (10% = 1.6px; the exporter wrote it as 10px before 2026-10-30).
- **Close button:** Figma draws a 20px circle 4px in from the top right. Here the circle sits in a 24px button (the WCAG 2.5.8 minimum target), so it looks the same and is easier to hit. Mobile Adhesion 300x50 has no close button in Figma.
- **Stacking (2026-11-18):** with `fixed`, the bar sits on the ad layer (`--mngds-layer-ad`, 90), under the Masthead's condensed bar (100), open menus (200) and modals (1000); see Stacking order in the Overview. That is production's order since 2026-11-17, when Aditude lowered the ad to `z-index: 100000` because Seedtag's maximum z-index covered the mobile login modal (2147483647); the theme wrapper is 9999 and its close button 99999 (all 6 review sites, 2026-11-18). An ad never covers a modal. Source: the Mobile tab of the Ad Team's [MNG/Tribune – WordPress Ad Map](https://docs.google.com/spreadsheets/d/12p8rvDIj4a58vzR1vxjferjJ58rCS-ekcpW7deLEOZw/edit?gid=103080138#gid=103080138).
- `fixed` is the production behavior of `mobile_adhesion` (sticky, dismissible); production shows an empty sticky bar at 1024px and up (design-vs-production 28.5), so don't use it there.

### Behavior (Gherkin)

The same Gherkin as the Figma spec in WordPress Elements (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Ad Blocks

  Rule: Each width gets its own unit
    Scenario Outline: <slot> at <range>
      When the page loads at <range>
      Then the <slot> holds <unit>

      Examples:
        | slot            | range        | unit                |
        | full-width slot | 800px and up | 970x250             |
        | full-width slot | 640–799px    | 728x90              |
        | full-width slot | below 640px  | 320x50 or 320x100   |
        | right-rail cube | 800px and up | 300x600 or 300x1050 |
        | right-rail cube | below 800px  | 300x250             |

  Rule: The page never jumps
    Scenario: The creative loads late
      Given the slot keeps the unit's height
      When the creative loads
      Then nothing on the page moves

  Rule: Mobile Adhesion
    Scenario: The reader scrolls on a phone or tablet
      Given the Mobile Adhesion unit is showing
      When the reader scrolls the page
      Then the unit stays at the bottom of the viewport

    Scenario: The reader closes the adhesion unit
      When the reader selects its close button
      Then the unit closes
      # hit area 24px or larger in code (WCAG 2.5.8)

    Scenario: A modal opens over the adhesion unit
      When a modal opens
      Then the modal covers the unit
      # the ad is z-index 100000; modals stack above it

  Rule: Refresh only in view
    Scenario: The unit is mostly out of view
      Given less than 50% of the unit is in view, or it is display: none
      When the refresh time comes
      Then the unit doesn't refresh

  Rule: Ad-free subscribers
    Scenario: An ad-free subscriber opens a page
      Given the reader is an ad-free subscriber
      When the page loads
      Then no ad slots show
```
