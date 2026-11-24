- No checkmark after the row (Karl, 2026-11-04): the browser only knows the code is complete; Success is the green outline on every cell.
- The cell behavior (auto-advance, Backspace, arrows, paste, `one-time-code`) isn't in the Figma spec; it's the standard pattern for this control. Each cell is named "Digit n of 6" and the group is labelled by the visible label.
- The label color is `color/gray/black` in Figma (Form Field labels are `color/gray/min`); kept as the token file has it.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Verification Code
  Scenario: The reader types a digit
    Given a cell has focus
    When the reader types a digit
    Then the digit shows in the cell and focus moves to the next cell

  Scenario: Every digit is entered
    When the reader enters the last digit
    Then every cell turns green (Success, no checkmark)
    # Green only means the code is complete; only the server can say it is right.

  Scenario: The server rejects the code
    Given the reader submitted the code
    When the server rejects it
    Then every cell shows Error
    And the message shows in the shared error row
```
