- A native `<input type="radio">` sits invisibly over the whole control (inside a `<label>`), so keyboard, form and screen-reader behavior are the browser's: arrow keys move the choice within a `name` group.
- The ring (2px `color/gray/black`, `radius/utility` corners) is an outer `box-shadow` on a 40x40 `::before` (Figma's "Touch Area"), around the circle and not the label; it overlaps the start of the label, which is fine (Karl, 2026-11-12). It's the focus ring only (inFocus, or keyboard `:focus-visible`); hover and pressed show no ring, as on CheckBox.
- The touch area's 40x40 isn't a token: it's 12 + 16 + 12 (`spacing/150` around the 16px circle). With a label the control is 8 + 24 + 8 = 40px tall.
- The dot's `border-radius: 50%` and the circle's 8px radius are the round shape; Figma draws the dot as an ellipse.
- Production differs (the checkout's payment-method choice): a `#d6d6d6` border (1.4:1), a 5px black dot, no hover, focus or disabled styles, and the input is `display: none`. See design-vs-production entry 40.
- Contrast: the white dot on `color/theme/primary-lighter` (hover / pressed) is 1.6:1 on The Mercury News + East Bay Times, as on the check box (entry 37).

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Radio Button
  # A real input type="radio" per choice, grouped by name inside a fieldset with a legend; the label is a label element tied to its input.

  Scenario: The reader picks a choice
    When the reader clicks a circle or its label
    Then that choice is selected
    And the other choices in the group are unselected

  Scenario: The reader moves the choice with the keyboard
    Given a choice in the group has focus
    When the reader presses an arrow key
    Then the next or previous choice is selected and gets focus

  Scenario: The reader leaves the group
    Given a choice in the group has focus
    When the reader presses Tab
    Then focus moves to the next control after the group

  Scenario: Keyboard focus doesn't move anything
    When the reader tabs to the control
    Then the focus ring shows around it
    And nothing on the page moves or changes size

  Scenario: A disabled choice
    Given a choice is disabled
    When the reader clicks it
    Then nothing changes
```
