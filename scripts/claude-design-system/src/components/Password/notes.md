- The hint stays `color/feedback/low-success` (green) all the time (Karl, 2026-11-04), even before anything is checked; it reads as guidance.
- Confirm Password's error row is drawn by this component (the FormField inside has `errorRow: false`) so it can show an error for either field; it looks the same as Form Field's row (25px Desktop, 22px Mobile, from the spec).
- Token names for the hint come from its Figma layer name (the text itself), hence the long CSS variable names.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Password requirements
  # Requirements: at least 6 characters · at least 1 letter · at least 1 number.
  # Used on Register and Reset 3 New password, between Create Password and Confirm Password.

  Background:
    Given the requirements list shows under Create Password with none met

  Scenario: A requirement becomes met while typing
    When the reader types a password that meets a requirement
    Then that requirement shows as met right away
    And the requirements not yet met still show as not met

  Scenario: A met requirement stops being met
    Given a requirement shows as met
    When the reader edits the password so it no longer meets it
    Then that requirement shows as not met again

  Scenario: Every requirement is met
    When the reader types a password that meets all three
    Then all three requirements show as met

  Scenario: A screen reader user checks the requirements
    Given a screen reader is on
    When the reader moves to the requirements list
    Then each requirement is read with its state, met or not met
    # Announce changes politely, not on every keystroke. Met is never shown by color alone.
```
- **Masked value:** the dots that show while the password is hidden have 10% letter spacing on the 16px value (CSS `letter-spacing: 0.1em`, 1.6px), so they don't run together; the same in Reader Dashboard (Karl, 2026-11-24: no token needed, documented in the spec).
