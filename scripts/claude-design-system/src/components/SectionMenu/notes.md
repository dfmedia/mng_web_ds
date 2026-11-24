- **Built from the 2026-11-09 Figma** after the six-site audit and the five-width check on Denver Post (components/navigation.md §3). Production differences: design-vs-production 10.4–10.8.
- **Below 1040px** the toggle is the icon only and the weather row shows (production switches at 1040px; LG-TabletH matches production since 2026-11-09).
- **Not drawn:** the page overlay (black 50%) and the slide-in animation (`transform 0.25s ease-in-out`); they belong to the page.

### Behavior (Gherkin)

The same Gherkin as the Figma spec in WordPress Elements (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Section Menu (the drawer)
  # One drawer for both triggers: "All Sections" at 1040px and up, the hamburger below

  Rule: One toggle opens and closes the drawer
    Scenario: The reader opens the drawer
      Given the drawer is closed
      When the reader selects the toggle
      Then the 300px drawer slides in from the left under the masthead in 250ms
      And a 50% black overlay covers the page
      And the toggle icon changes to the close icon, with aria-expanded "true"
      # the toggle itself doesn't move; aria-label "Open menu of all sections" / "Close menu"

    Scenario: The reader closes the drawer
      Given the drawer is open
      When the reader selects the toggle
      Then the drawer slides out and the overlay goes

  Rule: The toggle follows the screen width
    Scenario Outline: Toggle at <range>
      When the page loads at <range>
      Then the toggle shows <toggle>
      And the weather row is <weather>

      Examples:
        | range         | toggle                      | weather |
        | 1040px and up | the icon and "All Sections" | hidden  |
        | below 1040px  | the icon only               | shown   |

  Rule: One section open at a time
    Scenario: The reader opens another section
      Given the "News" section is open
      When the reader selects the "Sports" section row
      Then "Sports" opens and its chevron points up
      And "News" closes

    Scenario: The section's own page
      When the reader opens a section
      Then its first sub-item links to the section's own page

  Rule: Long menus scroll
    Scenario: A drawer taller than the screen
      Given the drawer is taller than the viewport
      When the reader scrolls inside the drawer
      Then the drawer's rows scroll
```
