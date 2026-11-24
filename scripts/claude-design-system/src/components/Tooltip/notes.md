- The Figma set is the popup only; the show/hide, aria and placement rules from the spec's Behavior section are wired when a `trigger` element is passed (one function per component, so no separate wrapper).
- Carets: the skeleton draws the caret layers as rectangles (vectors don't export); they are drawn here as 12×6 triangles (and the 10×5 toggletip fill over the 12×6 `color/gray/300` edge) with `clip-path`, matching the previews.
- Root gap −1px (token) is applied as a −1px margin on the caret, with the caret painted above the box, so the toggletip's white caret fill covers the box edge where they meet.
- Toggletip edge: inset 1px `color/gray/300` shadow, as in the skeleton (Figma inside stroke), so the text padding stays 12px from the outer edge; `shadow/lg` is added to the same `box-shadow`. The caret itself has no shadow (CSS box-shadow can't follow the clip-path).
- Tooltip max width 240px comes from the spec prose ("hugs its text up to 240px, then wraps"); there is no token for it.
- The toggletip popup has no role (the spec names only the trigger's `aria-expanded`/`aria-controls`); pass `role` if needed. A click outside closes it without moving focus (moving focus back would take it from what was clicked); Esc and the close button return focus to the trigger.
- Close icon: the icon font's `close` glyph is drawn smaller than its 12px em square (about 8px), so the X reads smaller than in the Figma previews, where the vector fills the 12px frame. Same in Button In-Line Close.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Tooltip and Toggletip
  # Tooltip: for icon-only buttons; never holds links or anything interactive.
  # Toggletip trigger: a button with aria-expanded and aria-controls (the popup's id).

  Rule: A Tooltip names a control

    Scenario: The reader points at or tabs to the control
      When the reader hovers over or focuses the control
      Then the tooltip shows

    Scenario: The reader moves away
      Given the tooltip is showing
      When the reader moves the pointer away, tabs away or presses Esc
      Then the tooltip hides

    Scenario: The reader is on a touch screen
      When the reader taps the control
      Then the control does its job and no tooltip shows

  Rule: A Toggletip explains something on request

    Scenario: The reader opens it
      When the reader clicks or taps the info button
      Then the toggletip opens next to it

    Scenario Outline: The reader closes it
      Given the toggletip is open
      When the reader <action>
      Then the toggletip closes
      And focus goes back to the info button

      Examples:
        | action                    |
        | presses Esc               |
        | selects the close button  |
        | clicks or taps outside it |

  Scenario: There isn't room on the chosen side
    Given the tip would not fit above or below the trigger
    When it opens
    Then it opens on the other side instead
```
