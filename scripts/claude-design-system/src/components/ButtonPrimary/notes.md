### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Button states (every button family)
  # Pressed currently looks the same as Hover (no pressed token yet).

  Scenario Outline: The reader interacts with a button
    Given a button is at rest (Default)
    When the reader <action>
    Then the button shows <state>

    Examples:
      | action                | state                                |
      | points at it          | Hover                                |
      | presses it or taps it | Pressed                              |
      | tabs to it            | InFocus: a focus ring around Default |

  Scenario: Keyboard focus doesn't move anything
    When the reader tabs to a button
    Then the focus ring shows outside it
    And nothing on the page moves or changes size

  Scenario: A disabled button
    # aria-disabled="true"; keep it focusable so screen readers still find it.
    Given a button is disabled
    When the reader clicks, taps or presses Enter on it
    Then nothing happens

  Scenario: The main button waits for a response
    # Button Primary and Button Tertiary only. aria-busy="true".
    Given the reader selected a main button
    When the response takes a moment
    Then the button shows a spinner and a waiting label, such as "Logging in…"
    And it can't be selected again until the response arrives
    And the other buttons and links in the panel, including the close button, are disabled

  Scenario: The response arrives
    Given the main button shows a spinner
    When the response arrives
    Then every button returns to its normal state
```
