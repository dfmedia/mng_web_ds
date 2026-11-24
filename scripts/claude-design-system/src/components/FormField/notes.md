- The input border is Figma's inside stroke, drawn as an inset `box-shadow` so the 2px Focus / Error Focus border doesn't move the text; the left icon frame is inset by the border width so the border stays visible around it.
- `state` forces a documentation look. In use, leave it at Blank / Filled and let real focus show Focus; with `state: 'Error'`, real focus shows Error Focus (2px red), matching the spec's "back in a field in error".
- Error and Success always show their status icon in the right frame (warning in `color/feedback/high-error`, `checkmark3` in `color/feedback/low-success`), whatever `showRightIcon` says, as in Figma.
- The warning icon has no accessible name by default (the error message, linked with `aria-describedby`, says what's wrong); the checkmark is named "Valid" so success isn't only a color. Rename with `errorIconLabel` / `successIconLabel`.
- Error row heights (25px Desktop, 22px Mobile) come from the spec; there's no token for them. The row is a `<p>` linked from the input only while there is an error.
- Card badges (Visa, MasterCard, AmEx, Discover, PayPal) aren't in the icon font, so `cardBadge` takes the consumer's element.
- The Figma cursor layers are a documentation drawing of the text caret; the real caret comes from the input.

### Behavior (Gherkin)

The same Gherkin as the Figma spec (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Form Field · Validation
  # Fields in error: aria-invalid="true"; each message linked with aria-describedby.
  # The form-level banner has role="alert". Status is never shown by color alone.

  Rule: Success shows only for values the browser can check

    Scenario Outline: The reader leaves a field
      Given the reader typed <value> in <field>
      When the field loses focus
      Then the field shows <state>

      Examples:
        | field             | value                           | state    |
        | Email             | a valid email address           | Success  |
        | Email             | text with no @                  | Error    |
        | Create Password   | a password that meets the rules | Success  |
        | Re-enter Password | the same password               | Success  |
        | Re-enter Password | a different password            | Error    |
        | Sign-in Password  | anything                        | no state |

    Scenario: A required field is left empty
      Given a required field is empty
      When the reader submits the form
      Then the field shows Error with a message saying how to fix it

  Rule: An error clears while the reader fixes it

    Scenario: The reader goes back into a field in error
      Given a field shows Error
      When the reader clicks or tabs into it
      Then it shows Error Focus, keeping the icon and message

    Scenario: The reader starts typing
      Given a field shows Error Focus
      When the reader types
      Then the error clears and the field shows Focus
      And it is checked again when the reader leaves it

  Rule: Form-level errors show in one banner

    Scenario: A submit fails
      Given the reader submitted the form
      When the response is wrong email or password, account exists, a server, network or social login failure
      Then one error banner shows above the fields
      And the email is kept, the password is cleared
      And the affected fields show Error and any success checks are removed

    Scenario Outline: Where focus goes after an error
      Given the form has an error the reader must fix
      When the error appears
      Then focus moves to <target>

      Examples:
        | fix               | target                                             |
        | typing in a field | the first field in error (the keyboard stays open) |
        | anything larger   | the banner (the keyboard closes)                   |

  Scenario: Keyboard focus doesn't move anything
    When the reader tabs to a field
    Then the field shows its Focus border
    And nothing on the page moves or changes size
```
