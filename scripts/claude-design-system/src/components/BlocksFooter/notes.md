- **Not in production yet** (Karl, 2026-10-30): a new design, so every value is a token: 8px (`spacing/100`) gutter below 640px and 16px (`spacing/200`) link spacing, where the production Footer has 10px and 15px. Built on the Footer's layout (same groups, legal bar and Subscribe Now).
- **Stay Informed:** rule, heading, then the Email Address Form Field (mail icon) 4px (`spacing/050`) below the heading, as in Figma. The placeholder `email@address.com` is cut off at 1040px and up, where the column is 214px (known issue in the spec).
- **Not drawn in Figma yet:** the Terms and Conditions (the Gherkin says they show once the reader starts the form; here they are `CheckboxTerms` with sample text, from the first focus or keystroke) and a sign-up button (Enter submits; `onSignup` gets the email). Both need a design.
- **Fixed in Figma 2026-11-24:** the email field showed "Placeholder text" since the Form Field Value / Placeholder split (2026-11-04); its Placeholder is `email@address.com` again on all 5 variants.

### Behavior (Gherkin)

The same Gherkin as the Figma spec in WordPress Elements (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Blocks Footer

  Rule: Columns follow the screen width
    Scenario Outline: Footer at <range>
      When the page loads at <range>
      Then the groups sit in <layout>

      Examples:
        | range         | layout                                           |
        | 1040px and up | 5 columns                                        |
        | 800–1039px    | 3 columns                                        |
        | 640–799px     | 2 columns                                        |
        | below 640px   | Stay Informed, then the groups as accordion rows |

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

  Rule: Stay Informed shows its terms only when needed
    # NEW FEATURE (not in production yet)
    Scenario: The reader starts the signup form
      Given the Terms and Conditions are hidden
      When the reader starts interacting with the Stay Informed form
      Then the Terms and Conditions show with the form
```
