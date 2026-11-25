- Shows as soon as loading starts, with no delay (Karl, 2026-11-25).
- **Timeout** (Karl, 2026-11-25): if the wait passes its timeout, the consumer replaces the spinner with an error message (InLineMessage, Priority=High) that lets the reader try again or go back, and suggests reloading the page if it keeps happening. The Spinner itself has no timer; the timeout length is set per request.
- The other loading animation is the **newspaper pulse**, for longer waits that block the page in a panel (the Embedded Login loading screen): the newspaper glyph pulsing every 3s above the message, with animated dots (2s). It sits beside the Spinner on the Figma Loading Animation page; it isn't a component in this system yet.
- **Where it goes** (Karl, 2026-11-24): the design prefers the 48px Spinner in the content area wherever possible, so the buttons keep their labels; inside a button it is 20px with a waiting label (Button Primary / Tertiary State=Loading). Production shows it inside buttons today.
- **Ring** (Karl, 2026-11-24): always 1/8 of the size, so it scales with the spinner: 2.5px at 20px, 6px at 48px (was 4px at 48px).
- **Speed** (Karl, 2026-11-24): one turn every 0.8s, linear; with reduced motion, one turn every 2s.

### Behavior (Gherkin)

```gherkin
Feature: Spinner · Waiting for content
  # Spinner is decorative (aria-hidden="true"); the waiting area has aria-busy="true".

  Scenario: Content is loading in an area
    Given the reader asked for new content
    When the content starts loading
    Then a 48px spinner shows where the content will appear
    And a short message says what is happening

  Scenario: The content arrives
    Given the spinner is showing
    When the content arrives
    Then the spinner is replaced by the content

  Scenario: The reader prefers reduced motion
    Given the reader's device asks for reduced motion
    When the spinner shows
    Then it turns slowly (one turn every 2 seconds) instead of stopping

  Scenario: The wait times out
    Given the spinner is showing
    When the wait passes its timeout
    Then an error message replaces the spinner
    And the reader can try again or go back to something else
    And the message suggests reloading the page if it keeps happening
    # Error message: InLineMessage, Priority=High. The timeout length is set per request.
```
