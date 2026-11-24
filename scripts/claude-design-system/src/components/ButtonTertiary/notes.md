- The 1px border is drawn as `box-shadow: inset 0 0 0 <border-width> <state border-color>` from the component tokens, not a CSS `border`: Figma's stroke is INSIDE, so the button stays 155×40 as in Figma and the skeleton, and the state color change never shifts layout. `border-style` (solid) is implied.
- Icon-to-label gap: token `base.button.content.gap` = `spacing/200` (16px), matching ButtonPrimary/Secondary and the variant PNGs; the skeleton/anatomy give the `Content` frame gap 8. Used the token.
- `base.root.width` (324px) is the Figma frame width, not applied: Desktop hugs, Mobile fills (spec Behavior). Focus ring offset 1px is from the spec prose.
- Contrast (same in all themes, grays are not themed): label `color/gray/min` on `color/gray/600` 16.04:1, on `color/gray/max` (Hover, Pressed) 18.42:1. Pass.
- Hover/Pressed border `color/gray/500` on a white fill is very faint (about 1.6:1 against white); it is decorative, not text, and matches Figma.

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
