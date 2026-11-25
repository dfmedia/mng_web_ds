- The requirements are a list of 3 `PasswordRequirement` rows (Figma, 2026-11-23). They start near-black and turn green when met (Karl, 2026-11-25): Not met = open circle, `color/gray/min` (18.4:1 on white); Met = check circle, `color/feedback/low-success` (5.0:1). Before 2026-11-25 this component drew one always-green hint; `hint` and `showHint` still work (a `hint` string becomes rows, not met).
- Confirm Password's error row is drawn by this component (the FormField inside has `errorRow: false`) so it can show an error for either field; it looks the same as Form Field's row (25px Desktop, 22px Mobile, from the spec).

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-25). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Password requirements
  # Requirements: at least 6 characters · at least 1 letter · at least 1 number.
  # Used on Register and Reset 3 New password, between Create Password and Confirm Password.

  Background:
    Given the requirements list shows under Create Password with none met
    And each requirement shows as not met (near-black open circle and text)

  Scenario: A requirement becomes met while typing
    When the reader types a password that meets a requirement
    Then that requirement shows as met (green check, green text)
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
