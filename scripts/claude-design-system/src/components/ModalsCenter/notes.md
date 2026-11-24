- Rebuilt 2026-11-10 from the 2026-11-04 keyboard rules and the 2026-11-05 Accessibility rules (status open item 15(e)).
- `inline` renders the Figma variant as drawn (the whole screen with the overlay) so preview cards show it. Without it the modal is fixed over the viewport and rendered as a direct child of `body` (a React portal); everything else in `body` is made `inert` and the page is scroll-locked while it's open. `offsetTop` leaves the masthead visible.
- One layout for every Device: the card never grows past the screen. When its content is taller, the card fills the height inside its margin (24px on phones, 40px on desktop and tablets, the Figma root padding) and only the Body Container scrolls; the header and CTA stack stay put. MobileScroll is Mobile with more content than fits.
- Card and Body Container borders are inset 1px strokes (Figma inside strokes, as in the skeleton), so the 444px card keeps its 364px content width and its 347px Figma height (checked at 100% with Noto Sans). The Body Container's border is drawn on top of its content, so scrolled text passes under it. `shadow/lg` (spec prose; no component token) is on the card.
- Scroll indicator: the browser's own scroll bar is hidden and the Figma indicator is drawn instead (4px wide, `color/gray/300`, `radius/sm`, 4px inside the top, right and bottom edges), sized to the visible share of the body and moved with the scroll position. The spec gives no minimum length; it never gets shorter than 24px (`spacing/300`) so it stays visible on very long content.
- Compact mode and the keyboard: in fixed mode both are automatic. The visible area is `window.visualViewport`, re-measured on every `resize` and `scroll`; compact mode applies under 560px; the keyboard counts as open when the visible area is at least 100px shorter than the window (the spec doesn't give a test; this is the usual one). With the keyboard open the overlay and card cover the visible area, masthead included, with 8px (`spacing/100`) gaps top and bottom. `compact`, `keyboardOpen` and `visibleHeight` force them for previews and canvases.
- Close button (Karl, 2026-11-10): `ButtonInLineClose` (40×40 target, 28px box, 12px icon) inside the card's top-right corner, flush with its top and right edges, on every Device; last in the Tab order. It was `ButtonModalClose` centered on the corner, which got cut off with the keyboard open. On Mobile and Fold (and MobileScroll) the header keeps 16px (`spacing/200`) clear on its right (component token `header.padding-right`) so the title wraps before the button; on Desktop and tablets the 40px card padding already clears it.
- Focus rule: when a field in the body gets focus, the body scrolls (never the page) so the field's top sits at least 24px below the top of the Body Container and its bottom stays above the CTA area. The rule re-runs when the keyboard opens or the visible area changes.
- A scrolling body with nothing focusable gets `tabindex="0"`, `role="region"` and the title as its name (the spec asks for the name; a name needs a role), with a 2px `color/gray/black` focus ring inside its edge, like the other components' focus rings.
- Hidden Figma layers become slots: Form Field → `children` (use `FormField`), InLineMessage (ModalError) → `message`.
- Stacking: in fixed mode the overlay and card sit on the modal layer (`--mngds-layer-modal`, 1000) and cover every ad, including `AdBlocks` with `fixed` (90), and open menus (200), as production does since 2026-11-17 (the Mobile Adhesion ad at 100000, the login modal at 2147483647; `components/modal.md`).
- Esc closes in fixed mode (Accessibility, Keyboard). `role: 'alertdialog'` is for a short message that needs an answer (confirm / cancel).
- The "On the screen" previews are drawn with CSS `zoom: 0.3`; at that scale Chrome rounds a few line boxes (the card reads 338px instead of 347px). At 100% every Device matches the Figma card size.
- Title Noto Sans Bold 20 is 27px in Figma; browsers compute `line-height: normal` as 27.24px, so text-only measurements may differ by under 1px.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Pop-up modal (ModalsCenter)
  # role="dialog" aria-modal="true", aria-labelledby = title (an h2), aria-describedby = subtitle.
  # role="alertdialog" only for a short message that needs an answer.
  # Everything outside the card is inert; render the modal as a direct child of body.

  Rule: Opening and closing

    Scenario: The modal opens
      When the modal opens
      Then the page behind is covered, scroll-locked and can't be reached by Tab or a screen reader
      And focus moves to the title, so a screen reader announces it
      And a phone does not open the on-screen keyboard yet

    Scenario Outline: The reader closes the modal
      Given the modal is open
      When the reader <action>
      Then the modal closes
      And focus returns to the control that opened it, or its replacement, or the start of the main content

      Examples:
        | action                               |
        | selects the close button             |
        | presses Esc                          |
        | selects an inline text link          |
        | clicks or taps outside the card      |
      # Clicking outside is for pointers only: it isn't in the Tab order and isn't announced.

  Rule: Keyboard

    Scenario: Tab stays in the card
      Given focus is on the last control (the close button)
      When the reader presses Tab
      Then focus moves to the first control in the card
      # Order: title area, body and its fields, InLineMessage links, CTAs, then the close button.

    Scenario: The reader submits from a field
      Given a field has focus
      When the reader presses Enter
      Then the form is submitted

    Scenario: A scrolling body with nothing to focus
      Given the body scrolls and holds no focusable control
      When the reader tabs into it
      Then the body takes focus and scrolls with the arrow keys
      # tabindex="0", named by the title.

  Rule: Scrolling and the on-screen keyboard

    Scenario: The content is taller than the screen
      When the modal opens
      Then only the body scrolls and a scroll indicator shows
      And the header and the CTAs stay in place

    Scenario: The keyboard opens
      Given the modal is centered
      When the on-screen keyboard opens
      Then the modal stays centered in the visible area, or fills it with 8px gaps if taller
      And the overlay and card cover the masthead

    Scenario: The keyboard opens on a small screen
      Given the visible area with the keyboard open is under 560px
      When the on-screen keyboard opens
      Then the modal switches to compact mode
      And the links move to the end of the body until the keyboard closes

    Scenario: A field gets focus
      Given the on-screen keyboard is open
      When a field gets focus (including Next or Tab)
      Then the body scrolls, never the page
      And the field's label sits at least 24px below the top of the body
      And its hint or error is fully above the CTAs

    Scenario: The visible area changes
      Given the on-screen keyboard is open
      When the keyboard changes height or browser bars hide or show
      Then the modal re-fits to the visible area
      # Measured with window.visualViewport on every resize and scroll.

    Scenario: The keyboard closes
      Given the on-screen keyboard is open
      When it closes
      Then the card returns to its normal placement

  Rule: Errors and steps

    Scenario: An error appears
      When an error appears in the modal
      Then it is fully visible, and the body scrolls to it if it's in the body

    Scenario: The modal moves to a new step
      Given the reader finished a step, such as entering an email
      When the next step shows, such as "Enter the code"
      Then the title changes and focus moves to it, so the step is announced

  Rule: Motion and zoom

    Scenario: The reader prefers reduced motion
      Given the reader's device asks for reduced motion
      When the modal opens or closes
      Then it appears and disappears without a fade

    Scenario: The reader zooms to 400%
      Given the page is zoomed to 400% (320px wide)
      When the modal opens
      Then compact mode applies, the body scrolls and nothing is cut off

  Scenario: Inline content is not a modal
    Given a form is inline in an article, such as the Regiwall
    When the reader focuses its field
    Then the page scrolls (no scroll lock) until the field and its button sit 16px above the keyboard
```
