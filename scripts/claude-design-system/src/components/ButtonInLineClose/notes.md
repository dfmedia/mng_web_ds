- Figma set "Button In-Line Close"; the repo export (and its slug) is named "In-Line Close" (`components/core/in-line-close`). Same component.
- The root is the 40px hit area (`<button>`, Figma "Button"); the Figma variant frame around it only hugs it, so it is not rendered.
- The Hover/Pressed box border is an inset `box-shadow` of the token width and color (as in the skeleton) so the box stays 28px; the `border-style` token (solid) is implied.
- Focus ring: a pseudo-element 1px outside the hit area with a 2px `outline` and `radius/sm` corners. The hit area's own radius token is 40px (a circle), so an outline on the button would be round, not the 4px corners the spec and documentation show.
- Accessible name defaults to "Close" (`aria-label`); the spec gives no wording.
- Close icon: the icon font's `close` glyph is drawn smaller than its 12px em square (about 8px), so the X reads smaller than in the Figma previews, where the vector fills the 12px frame.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: In-Line Close
  # A real button named "Close" (aria-label); the icon is aria-hidden.

  Scenario: The reader closes the panel
    When the reader selects the close button or presses Esc
    Then the panel closes and focus returns to the control that opened it

  Scenario: The panel is waiting for a response
    Given the main button shows a spinner
    When the reader selects the close button
    Then nothing happens; the button stays visible but disabled
```
