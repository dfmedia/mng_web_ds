- Requirements start near-black and turn green when they're met (Karl, 2026-11-25). Until then Figma had it the other way round (Not met green, Met near-black), so a rule that wasn't met looked like it passed.
- Contrast on white: `color/gray/min` 18.4:1 and `color/feedback/low-success` 5.0:1. Both pass AA at 12–13px.
- The icon shape changes with the state (`radio-unchecked` → `checkmark-circle`), so met isn't shown by color alone. The icon is `aria-hidden`; a visually hidden ", met" / ", not met" after the text gives the state to screen readers.
- `Password` puts the rows in a `<ul>` with no gap between them, as in Figma (the list is 54px Desktop, 48px Mobile).

### Behavior (Gherkin)

Part of the Password requirements Gherkin; see `Password` for all of it (2026-11-25).

```gherkin
Feature: Password requirements

  Background:
    Given the requirements list shows under Create Password with none met
    And each requirement shows as not met (near-black open circle and text)

  Scenario: A requirement becomes met while typing
    When the reader types a password that meets a requirement
    Then that requirement shows as met (green check, green text)
    And the requirements not yet met still show as not met
```
