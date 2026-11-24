- The bar is `width: 100%` (spec: "Bar: full width"); the root-width tokens (1280 / 360) are the Figma frame widths and are not applied. The nav uses the 1200px token as `max-width` (spec: "max width 1200px, centered").
- The 1px bottom rule has no height token; 1px is from the skeleton (Bottom Border, `top: 41px; height: 1px`). The nav sits above it so the Active tab's 2px underline overlaps the rule, as the spec says.
- `tab-nav.base.nav.tab-list.tab.width` (85px), `.tab.height` (42px) and `.tab.icon-color` are the exported sizes and placeholder color of the nested instances; the tabs hug their labels instead (85px is the "For You" tab's hug width).
- **Nav padding** (Karl, 2026-11-03): 8px (`spacing/100`) on both breakpoints and a 1280px max on Desktop, so the first tab's left edge lines up with the page content (the homepage's 8px gutter). Was a 1200px nav with 24px (`spacing/300`) sides at 640px and up and none below.
- **Keyboard** (Karl, 2026-11-04): WAI-ARIA Tabs pattern with **manual activation**. Roving `tabindex` (selected tab 0, others -1, reset on every render so Tab always lands on the selected tab); Left / Right (wrapping), Home / End move focus; Enter / Space select (native `button`). Manual rather than automatic activation because selecting For You can open the Welcome modal. Figma has no keyboard states beyond Focus; this is documented in the spec and in `components/for-you-interaction-and-accessibility.md`.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Tab Nav
  # ul role="tablist" with an aria-label; each tab is a button with role="tab", aria-selected and aria-controls (its panel's id).
  # Each panel is role="tabpanel" with aria-labelledby (its tab's id). Scrollbar hidden.

  Rule: Keyboard (WAI-ARIA Tabs, manual activation)

    Scenario: The reader tabs into the bar
      When the reader presses Tab to reach the bar
      Then focus lands on the selected tab only

    Scenario Outline: The reader moves between tabs
      Given a tab has focus
      When the reader presses <key>
      Then focus moves to <target>

      Examples:
        | key         | target                                      |
        | Right Arrow | the next tab (from the last, the first)     |
        | Left Arrow  | the previous tab (from the first, the last) |
        | Home        | the first tab                               |
        | End         | the last tab                                |

    Scenario: The reader selects a tab
      Given a tab has focus
      When the reader presses Enter or Space
      Then that tab becomes the selected tab and its panel shows
      And focus stays on the tab
      # Manual activation, because choosing For You can open the Welcome modal.

  Rule: More tabs than fit
    # Built today: the list ends in the middle of the last tab whose middle fits.
    # Pending Karl's pick (2026-11-24): C peek + fade, C1 peek + fade + chevrons, or E a More menu.

    Scenario: The bar first shows
      Given the tabs are wider than the bar
      When the page loads
      Then the last visible tab is cut part way, and every label before it shows in full

    Scenario: The reader scrolls the tabs
      When the reader swipes or scrolls the tab list sideways
      Then the hidden tabs come into view, and at the end every tab shows in full

    Scenario: A keyboard user reaches a hidden tab
      When the reader arrows onto a tab that is cut or hidden
      Then the list scrolls so that tab shows in full

    Scenario: The width changes
      When the reader rotates the device or resizes the window
      Then the cut is measured again
```
