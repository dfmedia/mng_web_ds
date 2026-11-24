- A native `<input type="checkbox">` sits invisibly over the 40x40 touch area, so keyboard, form and screen-reader behavior are the browser's; `partial` sets `indeterminate` and `aria-checked="mixed"`.
- The ring (2px `color/gray/black` outside the 40x40 area, `radius/utility` corners) is drawn as an outer `box-shadow`. It's the focus ring only (inFocus, or keyboard `:focus-visible`), on any status and interaction; hover and pressed show no ring (Karl, 2026-11-11; the Figma spec text had said they did).
- Token names: the Figma layers were renamed (Karl, 2026-11-04: Group 248 / Frame 248 / Frame 249 → Box, Rectangle 8 → Square, Icons → Icon), so the variables read `--mng-checkbox-…-box-square-…`, `--mng-checkbox-…-box-background`, `--mng-checkbox-…-box-icon-icon-color`.
- Hover and pressed use the same token values in Figma (box border `color/gray/min` when empty, `color/theme/primary-lighter` when checked).
- Contrast: the white icon on `color/theme/primary-lighter` (hover / pressed) is 1.6:1 on The Mercury News + East Bay Times (design-vs-production entry 37). Those two sites need a different solution (Karl, 2026-11-05); not being worked on yet.
- The Figma `Cursors` instances on the documentation page are drawings of the pointer; the real cursor is `pointer` on the input.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: CheckBox
  # A real input type="checkbox" tied to a label element; Partial uses aria-checked="mixed".

  Scenario: The reader checks a box
    Given the box is unselected
    When the reader clicks the box or its label, or presses Space on it
    Then the box is selected

  Scenario: The reader unchecks a box
    Given the box is selected
    When the reader clicks the box or its label, or presses Space on it
    Then the box is unselected

  Scenario: Keyboard focus doesn't move anything
    When the reader tabs to the control
    Then the focus ring shows around it
    And nothing on the page moves or changes size

  Scenario: A required box is left empty
    Given the box is required and unselected
    When the reader submits the form
    Then the error message shows directly under the box and its label

  Scenario: A disabled box
    Given the box is disabled
    When the reader clicks it
    Then nothing changes
```
