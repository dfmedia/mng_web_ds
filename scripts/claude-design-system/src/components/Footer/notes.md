- **Production values on purpose** (Karl, 2026-10-29): the 10px gutter below 640px (`footer.device-sm-mobile.footer-content.padding-left`) and the 15px link spacing (`footer.base…group-subscribe.gap`) have no token (design-vs-production 6). Figma's Advertising and Contact groups use 16px; every group uses 15px here.
- **Contrast:** legal links `color/gray/200` on `color/gray/600`, 5.7:1 (Karl, 2026-10-30: changed from `color/gray/300`, 3.3:1, which failed WCAG AA; design-vs-production 36, urgent). Group text `color/gray/min` is 16.0:1.
- **Accordion open state** isn't in Figma (only closed rows): an open group shows its links under the heading with the same 15px spacing, and the chevron turns to `arrow-up`.
- **Subscribe Now** is `ButtonPrimary` without its 8px side margin. Figma shows the label in capitals; `ButtonPrimary` capitalizes words ("Subscribe Now").
- The legal links keep the 1040px order (copyright first) at every width; the Figma mobile variant lists copyright last.
- The future footer with the email signup is **Blocks Footer** (`801:1755`, WordPress Elements ▸ Homepage ▸ Blocks): exported, left out of the Claude system for now (Karl, 2026-10-30).

### Behavior (Gherkin)

The same Gherkin as the Figma spec in WordPress Elements (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Footer

  Rule: Columns follow the screen width
    Scenario Outline: Footer at <range>
      When the page loads at <range>
      Then the link groups sit in <layout>

      Examples:
        | range         | layout                                      |
        | 1040px and up | 5 columns; Subscribe Now alone in the last  |
        | 800–1039px    | 3 columns                                   |
        | 640–799px     | 2 columns                                   |
        | below 640px   | accordion rows; Subscribe Now full width    |

  Rule: Accordion below 640px
    Scenario: The reader opens a link group
      Given the screen is below 640px
      And a link group is closed
      When the reader selects its heading
      Then its links open below the heading
      And the heading's aria-expanded is "true"

    Scenario: The reader closes a link group
      Given the screen is below 640px
      And a link group is open
      When the reader selects its heading
      Then its links close
      And the heading's aria-expanded is "false"
```
