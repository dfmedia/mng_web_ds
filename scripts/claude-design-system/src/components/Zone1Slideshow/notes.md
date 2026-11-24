- **Next step (Karl, 2026-10-29):** Zone 1 Slideshow is one variant of the SlideShow component. Build the SlideShow family next, together with the Obits slideshow (and the Photo Carousel Widget sets in WordPress Elements).
- Slideshow Arrow (`3641:50772`) has no export of its own; its values come from this spec's prose: `color/gray/black` at 75% opacity (element `opacity: 0.75`, so the focus outline is at 75% too, as specced), icons `arrow-left` / `arrow-right` in `color/gray/max` at 30px (Large) / 26px (Small), focus 2px `color/gray/max` outline 3px outside. There is no opacity token for 0.75 and no size token for 30 / 26px; they are the spec's raw values.
- The credit layer is hidden in Figma and has no component tokens: Noto Sans Bold `font/size/11`, `color/gray/200` from the spec, family from the caption's component token.
- `controls` is not a Figma property: the spec ties the arrow size, text size and caption spacing to production's 800px breakpoint, separately from the Breakpoint variant (Tablet uses Large from 800 to 1023px). Large uses the Desktop tokens, Small the Tablet / Mobile tokens (identical values).
- `fill` is not a Figma property: Zone 1 Lead Article Card's one-column layout puts the slideshow "full width after the text" and the spec makes the image area 16:9, so `fill` sets width 100% and `aspect-ratio: 16 / 9` (the fixed variants use the 200 / 201 / 191px height tokens instead, which are not exactly 16:9). In fill mode the placeholder keeps the Desktop token shape (300×200) at the area's height.
- Real photos are letterboxed (`object-fit: contain`, centered, no background); without `image` the runtime `ArticleImage` placeholder shows at the breakpoint's placeholder token size (300×200, 302×201, 287×191), centered.
- Drag / swipe: a mostly horizontal pointer move at least one arrow-width long pages the slideshow (the spec gives no threshold; the arrow width is the nearest repo value). No dots, no autoplay, no disabled style (the gallery loops), as the spec says.
- Caption text line height is `normal` (spec "auto"); Chromium's rounding matches the Figma heights here (356×359, 358×319, 340×309).
- Previews are shown on white (the page background) rather than the `color/gray/500` documentation stage, so the caption gray reads as it ships; the arrows' white focus outline shows against the image.

### Behavior (Gherkin)

The same Gherkin as the Figma spec in WordPress Elements (2026-11-24). Behavior only; sizes, colors and tokens are in the spec above.

```gherkin
Feature: Zone 1 Slideshow

  Rule: Control sizes follow the screen width
    Scenario Outline: Controls at <range>
      When the page loads at <range>
      Then the arrows are <arrows> and the caption and count are <text>

      Examples:
        | range        | arrows             | text |
        | 800px and up | 40×60, 30px icons  | 13px |
        | below 800px  | 35×53, 26px icons  | 11px |

  Rule: The gallery loops
    Scenario: Next on the last slide
      Given the last slide is showing
      When the reader selects "Next"
      Then the first slide shows

    Scenario: Previous on the first slide
      Given the first slide is showing
      When the reader selects "Previous"
      Then the last slide shows
      # so production's disabled style (20% opacity) never shows

    Scenario: The reader swipes
      When the reader drags or swipes the image strip
      Then the next or previous slide shows
      # no dots, no autoplay

  Rule: Screen readers hear the slide change
    Scenario: The photo changes
      Given a screen reader is running
      When the photo changes
      Then the new slide count is announced
      # aria-live="polite" on the count; not in production yet (design-vs-production 17.2)
```
