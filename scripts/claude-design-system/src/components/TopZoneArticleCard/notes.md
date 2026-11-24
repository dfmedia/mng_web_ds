- **Device values are production's breakpoints for this component** (Karl, 2026-10-30): XS (639px and below), M (800–1039px), L (1040–1279px), XL (1280px and up), from `.busy .feature-small`, identical on all 6 review sites. Renamed from Desktop / 1024 / 1100 / Mobile the same day; the old names still work. S (640–799px) was added 2026-10-30 from production, measured live at 700px (two per row, 97×54 image, 20px gap, 16/18.88, bottom rule). Future: these move to the MNG Device breakpoints (XS → Mobile, M → Tablet, L → Tablet landscape, XL → Desktop; S falls between Mobile and Tablet) when the system is standardized; not adopted yet.
- **Measured live** (ocregister.com, 2026-10-30): L at 1100px and S at 700px match Figma (sizes, gaps, type). Production letterboxes photos at their own proportions inside the image box (top-aligned, 8px below the box), sets the headline in #000000 and the S rule in #AAA7A4; the design fills the box and uses `color/gray/min` / `color/gray/500` (design-vs-production 16.4).
- **Headlines follow the theme** (`font/theme/heading-family`): XL `Editorial/Titles/CardTertiary` (20/23.6, −0.4px), M `CardTertiaryCompact` (16/18.88), L `CardTertiaryRow` (18/21.6); XS is Noto Sans/Serif Bold 18 with an auto line height (its family was bound to the theme in Figma 2026-10-30, like the other headlines). `color/gray/min` on `color/gray/max`, 18.4:1.
- **The headline group's 15px gap is raw on purpose** (Karl, 2026-10-30: no token for it). It only shows once the Article Status Badge does.
- **Article Status Badge** is hidden in every Figma variant and no property turns it on, so it isn't drawn here.
- Stacked images keep 16:9 at the column width (336×189, 197×111 in Figma); row thumbnails are fixed (280×157, 100×67).

### Behavior (Gherkin)

The same Gherkin as the Figma spec in WordPress Elements (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: TopZone Article Card
  # Breakpoints: production .busy .feature-small

  Scenario Outline: Card at <range>
    When the page loads at <range>
    Then the cards sit <per_row> per row as <layout>

    Examples:
      | range            | per_row | layout                          |
      | XL (≥1280px)     | 2       | image above, 336×189            |
      | L (1040–1279px)  | 1       | thumbnail row, 280×157, no rule |
      | M (800–1039px)   | 2       | image above, 197×111            |
      | S (640–799px)    | 2       | thumbnail row, 97×54            |
      | XS (≤639px)      | 1       | thumbnail row, 100×67           |
```
