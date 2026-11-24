- **Matches production on the 4 / 8 grid** (2026-11-02): `.feature-media`, the same layout on all 6 review sites. Rounded: the 15px image-to-headline gap to 16 (`spacing/200`), the 20.16px column gap to 20 (`spacing/250`), 11.25px under the excerpt to 12 (`spacing/150`).
- **The parts are shared**, so the block overrides them in place (as Figma's instance overrides): the lead has no rule; the thumbnails have no padding, the rule 24px (S, M, XS) or 8px (L, XL) below the content, and 16px under the image in XS and S. The exported tokens don't carry instance overrides, so these use the spacing tokens directly.
- **The title gap** is 1em of the theme's eyebrow size in production (20 / 17 / 21px); this block uses 20px (`spacing/250`) on every theme, as Figma. Production's rule and excerpt grays differ by theme (design-vs-production 16.8).

### Behavior (Gherkin)

The same Gherkin as the Figma spec in WordPress Elements (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Photos Block
  # Breakpoints: production .feature-media

  Scenario Outline: Block at <range>
    When the page loads at <range>
    Then the thumbnails sit <layout>
    And the lead's excerpt is <excerpt>

    Examples:
      | range           | layout                       | excerpt |
      | XS (≤639px)     | in one column below the lead | hidden  |
      | S (640–799px)   | 2 per row below the lead     | hidden  |
      | M (800–1039px)  | 2 per row below the lead     | shown   |
      | L (1040–1279px) | in a list beside the lead    | shown   |
      | XL (≥1280px)    | in a list beside the lead    | shown   |
```
