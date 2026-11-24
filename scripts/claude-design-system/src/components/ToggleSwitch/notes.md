- A native `<input type="checkbox" role="switch">` sits invisibly over the 64x40 touch area (as in `CheckBox`), so keyboard, form and screen-reader behavior are the browser's; screen readers announce it as a switch, on or off.
- Focus ring (Karl, 2026-11-10): 2px `color/gray/black` outside the 40x40 circle around the handle, not the touch area; a `::after` on the handle, so it moves with it. Its 40px size is the touch-area height (no separate token). Forced with `inFocus`, real on keyboard `:focus-visible`; no ring on hover or pressed.
- The slider's 1px `color/gray/400` border is an inset `box-shadow`, drawn only when off and not disabled (Figma draws it only there; the export lists it under `base` because only those variants have it).
- The handle jumps from left to right with no animation: the spec gives none.
- Raw values from the spec: the slider's 12px corners, 2px padding and the handle's 10px corners (no tokens: listed in Known issues).
- Close and check icons: the icon font's glyphs are drawn smaller than their 12px em square (about 8px), so they read smaller than in the Figma previews.
- The Figma `Cursors` instances on the documentation page are drawings of the pointer; the real cursor is `pointer` on the input.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Toggle Switch
  # A checkbox input with role="switch" (or a button with role="switch"), aria-checked, named by its label.

  Scenario Outline: The reader flips the switch
    Given the switch is <before>
    When the reader clicks or taps the switch or its label, or presses Space
    Then the switch is <after>
    And the label text stays the same

    Examples:
      | before | after |
      | off    | on    |
      | on     | off   |

  Scenario: Keyboard focus doesn't move anything
    When the reader tabs to the control
    Then the focus ring shows around it
    And nothing on the page moves or changes size

  Scenario: The focus ring follows the handle
    Given the switch has keyboard focus
    When the reader flips it
    Then the focus ring moves with the handle
```
