- Button ActionMenu rebuilt as a drop-down (Karl, 2026-11-10). On 2026-11-11 it replaced Button ActionMenu everywhere (InLineMessage, Reader Dashboard v2.0, Account Selector Feat.) and Button ActionMenu was removed.
- Fits the longest choice (Karl, 2026-11-11): every choice's label is stacked, hidden, in the same grid cell as the shown one, so the trigger is as wide as the longest and its chevron sits right of every item's label and check. The menu is as wide as the trigger. `width` fixes the width instead (Figma: set the instance width).
- The Icon Slot is always 16px, so labels start at the same place with or without an icon (Karl, 2026-11-11).
- Accessibility: the trigger is a `button` with `aria-haspopup="listbox"` and `aria-expanded`; the menu is a `listbox` of `option` rows (`DropdownMenuItem`) with `aria-selected` on the current one. Focus moves into the list (roving focus: each option is focusable with `tabIndex=-1`) and back to the trigger on Enter or Esc. With `aria-label`, the trigger reads "Role: Owner".
- Square corners on the trigger (radius 0, Karl, 2026-11-11), so the focus ring is square too: an `outline` 2px `color/gray/black`, 1px offset, like the buttons. When the menu is open the trigger is raised above it (`z-index: 11`, the menu is 10), so the ring is drawn on top of the menu, not behind it (Karl, 2026-11-11; Figma `open=True, inFocus=True`).
- The trigger's 1px `color/gray/400` border is an inset `box-shadow`, drawn on hover, pressed and open only (the export lists it under `base` because only those variants have it).
- Chevron: the Figma artwork is `arrow-downSMALL` / `arrow-upSmall` (Icons, 4693:18 / 4693:14), which isn't in the icon font; the font's `arrow-down` / `arrow-up` are used.
- Shadow: the open menu uses `shadow/lg` (`--mng-shadow-lg`); the component export doesn't carry effect styles yet.
- Figma exposes each open-menu row on the Dropdown Menu instance (Karl, 2026-11-11), so a row can be drawn hovered, pressed or focused; here an option's `interaction` / `inFocus` fields do the same for documentation (real hover and keyboard focus apply on their own).
- In product use the open menu sits over the page (absolute, z-index 10); `inline` keeps it in the flow for documentation.
- Production (Reader Dashboard Subscription Access) still has the old Button ActionMenu; the changes for dev are in `design-vs-production.md` entry 38 (closed 100x40, every choice listed with a check, the focus ring, listbox keyboard rules). Dev won't get to it soon (Karl, 2026-11-11). Team: DigiScrum (not CMS); this component should exist in their React component library when they do.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Dropdown Menu
  # Trigger: a button with aria-haspopup="listbox" and aria-expanded, named by its label.
  # Menu: a listbox of options; the current one has aria-selected.

  Scenario Outline: The reader opens the menu from the keyboard
    Given the trigger has focus and the menu is closed
    When the reader presses <key>
    Then the menu opens below the trigger
    And the current choice shows a check

    Examples:
      | key        |
      | Enter      |
      | Space      |
      | Down Arrow |

  Scenario: The reader opens the menu with a pointer
    When the reader clicks or taps the trigger
    Then the menu opens below the trigger

  Scenario: The reader moves through the choices
    Given the menu is open
    When the reader presses the Up or Down arrow
    Then focus moves to the previous or next choice

  Scenario: The reader picks a choice
    Given the menu is open
    When the reader presses Enter on a choice or clicks it
    Then the menu closes
    And the trigger shows the new choice
    And focus returns to the trigger

  Scenario: The reader closes it without picking
    Given the menu is open
    When the reader presses Esc or clicks outside it
    Then the menu closes with the choice unchanged
    And focus returns to the trigger

  Scenario: Keyboard focus doesn't move anything
    When the reader tabs to the control
    Then the focus ring shows around it
    And nothing on the page moves or changes size
```
