- New 2026-11-12 (Karl): the share bar's More panel looked like the Toggletip, but it holds buttons and takes keyboard focus, so it's its own component with the same look (Karl agreed) rather than a third Tooltip type.
- In Figma the content goes in a Content slot (a Figma slot), so any buttons or links can be dropped in.
- The caret overlaps the box by 1px (root gap -1px), as on the Toggletip, so no seam shows.
- The placeholder text in the Figma slot (Noto Sans 14) is only a placeholder; real content brings its own styles.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Popover
  # The trigger gets aria-expanded and aria-controls (the popover's id).

  Scenario: The reader opens it
    When the reader selects the trigger
    Then the popover opens
    And focus moves to its first item

  Scenario: The reader moves between items
    Given the popover is open
    When the reader presses Tab or an arrow key
    Then focus moves to the next item

  Scenario Outline: The reader closes it
    Given the popover is open
    When the reader <action>
    Then the popover closes
    And focus returns to the trigger

    Examples:
      | action                    |
      | presses Esc               |
      | selects the trigger again |
      | clicks or taps outside it |
```
