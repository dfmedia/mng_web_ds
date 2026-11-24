- Figma's `Style` property collides with React's `style` prop: a string is the Figma Style, an object is inline CSS.
- Spec prose says the 1px box appears on Hover/Pressed; the skeleton, the variant PNGs and the documentation ("InFocus adds a 2px black focus ring… plus the 1px Hover-style border") also draw it on InFocus, without the underline. Built that way.
- The box is an inset `box-shadow` (Figma INSIDE stroke), so showing it never changes the 138×38 size or shifts layout. Focus ring offset 1px is from the spec prose.
- `Style=Stacked` max widths 91px / 115px (with an icon) are raw numbers from the spec and skeleton (no token); they are documentation of the wrapped case.
- New-tab links (`target="_blank"`) get visually hidden text " (opens in a new tab)", as the spec's Behavior asks.
- Contrast: label `color/theme/primary` on white 5.45 / 6.87 / 5.20 (Bold Coastal / Measured Vibrant / Modern Earthy), pass; the control has no fill, so check it against the real background where it is placed.

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
      | action                                | state                                 |
      | points at it                          | Hover                                 |
      | presses it or taps it                 | Pressed                               |
      | tabs to it                            | InFocus: a focus ring around Default  |

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
