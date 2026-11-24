- **Where it goes** (Karl, 2026-11-24): the design prefers the 48px Spinner in the content area wherever possible, so the buttons keep their labels; inside a button it is 20px with a waiting label (Button Primary / Tertiary State=Loading). Production shows it inside buttons today.
- **Speed:** one turn every 0.8s is the speed of the loading-screen mockups Karl reviewed (2026-11-24); Figma doesn't set it yet, so confirm it there.

### Behavior (Gherkin)

```gherkin
Feature: Spinner · Waiting for content
  # Spinner is decorative (aria-hidden="true"); the waiting area has aria-busy="true".

  Scenario: Content is loading in an area
    Given the reader asked for new content
    When the content takes a moment to arrive
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
```
