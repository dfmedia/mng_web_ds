- Built 2026-11-16 from the 7-variant Figma set (Karl cut it from 21 the same day). Production (design-vs-production 11) differs in 11 places; this component follows the design: Esc and focus return, real links for every row (Log Out included), a scrim that takes the click, newsletter in the logged-in menu, full width at 340px and below, the panel's right edge 54px past the chevron at every width (the closed menu's search space; 24px until 2026-11-17).
- The open panel sits under the trigger (as production: the avatar and up chevron show through its top 48px, 17px down) instead of repeating the avatar inside it, so the trigger keeps focus and its `aria-expanded` state.
- The scrim colors (40% and 50% black) come from production; there is no opacity token, so they are `color-mix()` on `color/gray/black`.
- The payment alert is drawn here (Priority High, HeaderAlert look: `color/gray/600`, `radius/utility`, title `color/feedback/high-error` 4.6:1, text `color/gray/min` 16.0:1) because InLineMessage's alert variants aren't in the system yet (open item 6).
- Chevrons use the icon font's `arrow-down`, `arrow-up` and `arrow-right` at 12px in a 16px box (Figma: arrow-downSMALL, arrow-upSmall, arrow-rightSMALL).
- Masthead draws its closed account area with this component since 2026-11-16.
- 2026-11-17 (Karl): the avatar and chevron are 4px (`spacing/050`) apart. The 0 gap from 2026-11-16 matched production's element boxes but looked too tight: production's caret has 5px of padding inside its box (design-vs-production 11.11).
- 2026-11-17 (Karl): open, the panel's right edge is the closed menu's right edge. The search button's space (16 + 30 + 8px) stays empty, so the avatar and chevron don't move when it opens (was 24px past the chevron). The search icon also sits level with the avatar in every Masthead now (leftover SearchBar padding removed).
- 2026-11-25 (Karl): `showSearch: false` drops the search button (Masthead does this on Obituaries, as production's obituaries, and on BestReviews). With no search space to keep, the open panel's right edge is the closed menu's right edge, 8px (padding) past the chevron (`mngds-account-menu--no-search`).
- Stacking (Karl, 2026-11-18): open, the menu lifts itself to the open-menu layer (`--mngds-layer-menu`, 200), so its scrim and panel cover the page and the sticky condensed masthead even when page content sets its own z-index (in the BestReviews hi-fi the page `main` was z-index 1 and covered the open menu). Modals (1000) still go over it.

### Behavior (Gherkin)

The same Gherkin as the Figma spec in WordPress Elements (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: AccountMenu

  Rule: The closed menu depends on sign-in and screen width
    Scenario Outline: Closed menu, <reader>, <width>
      When the page loads
      Then the masthead shows <trigger>

      Examples:
        | reader     | width         | trigger                               |
        | logged in  | any           | the 30px avatar and a down chevron    |
        | logged out | up to 1039px  | the user icon and a down chevron      |
        | logged out | 1040px and up | Subscribe and Log In buttons, no menu |

  Rule: Logged-in panel
    Scenario: The reader opens the menu
      Given the reader is logged in
      When the reader selects "Account menu"
      Then a 300px panel opens under the trigger
      And the avatar and an up chevron stay where they were
      And the search icon is hidden
      And a 40% black scrim covers the page

    Scenario: The menu on a narrow screen
      Given the screen is 340px wide or less
      When the reader opens the menu
      Then the panel spans the full width

    Scenario: A menu taller than the screen
      Given the panel is taller than the viewport
      When the reader drags the scrollbar or swipes anywhere on the menu
      Then the rows scroll inside the panel
      And the header stays put, with a line below it once scrolling starts

    Scenario Outline: The reader closes the menu: <action>
      Given the menu is open
      When the reader <action>
      Then the menu closes
      And focus goes back to the trigger

      Examples:
        | action                  |
        | presses Esc             |
        | tabs past the last link |
        | selects the scrim       |

  Rule: Logged-out panel (up to 1039px)
    Scenario: The reader opens the panel
      Given the reader is logged out on a screen up to 1039px wide
      When the reader selects the user icon
      Then a 300px panel slides in from the right in 250ms
      And a 50% black scrim covers the page
      And focus stays inside the panel until Esc closes it

  Rule: Keyboard
    Scenario: The reader opens the menu from the keyboard
      Given the trigger has keyboard focus
      When the reader presses Enter or Space
      Then the menu opens
      And focus moves to the first link
      # Tab and Shift+Tab move through the links; every row is a real link, Log Out too

  Rule: Account states
    Scenario Outline: Panel for <state>
      Given the reader is <state>
      When the reader opens the menu
      Then the panel shows <content>

      Examples:
        | state                             | content                             |
        | a non-subscriber                  | "Subscribe Now" under the email     |
        | a subscriber with a payment issue | the "Payment Issue" message         |
        | an anonymous group reader         | "Anonymous User" and the account ID |
```
