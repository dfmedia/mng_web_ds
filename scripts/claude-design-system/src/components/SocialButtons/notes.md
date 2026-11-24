- Cleaned up in place in WordPress Elements on 2026-11-12 (Karl), after checking the 6 review sites plus twincities.com; the existing instances stay linked and show the same buttons.
- One show/hide property per button in Figma (Karl); here, the `networks` list. The order is Twin Cities' with Gift last before More (Karl).
- More rule (Karl, 2026-11-12): up to 6 share buttons, no More; more than 6: the first 6 (Gift always one of them), More as the 7th. Chicago's 6 keep no More.
- The More panel is the Popover (main library), Placement=Bottom, 8px below More. Production's Twin Cities panel is broken (design-vs-production 39.4).
- Gaps are 8px (production 6.25px, 39.1); the Save divider is the design (production has none, 39.5); Modern Earthy uses current brand colors (39.2); button order differs by site in production (39.3); obituaries are 11.69px apart with 14.85px icons in production (39.6).
- Obituaries: Theme=Endless Tributes uses the color/tributes colors, set here directly because the component tokens can't follow a page theme there.
- The Masthead's article bar still draws its own share icons; switching it to SocialButtons is a follow-up.

### Behavior (Gherkin)

The same Gherkin as the Figma spec in WordPress Elements (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Share bar (SocialButtons)

  Rule: Up to 6 share buttons show; More holds the rest
    Scenario Outline: A site with <count> share buttons
      Given the site has <count> share buttons switched on
      When an article loads
      Then <shown>

      Examples:
        | count       | shown                                                         |
        | 6 or fewer  | every button shows, with no More                              |
        | more than 6 | the first 6 show, Gift always one of them, and More is the 7th |

  Scenario: The reader opens More
    Given the site has more than 6 share buttons
    When the reader selects More
    Then a Popover (Placement=Bottom) opens 8px below More with the other buttons
```
