# scripts/claude-design-system

Builds the **MNG Web Design System** Design System artifact in Claude (the same kind of system as the MNG iOS and Android Style Guides) from this repo's exports. Design canvases install that system and use its real components, tokens and icons instead of hand-copied values.

```
python3 scripts/claude-design-system/build.py --out <folder outside the repo>
```

writes `<out>/project/` in the Design System artifact's file format, plus `<out>/assets.json` (the logo and icon SVGs to upload as assets).

**The system:** https://claude.ai/artifact/RKJ37zyXP7Wcvm1SDU7nzz (first built 2026-10-29). **To republish** from a Claude session: run the build, then publish only the changed `project/` files to that URL with the Artifact tool (`root` = `<out>`). The index `project/design-system.json` is not written by `build.py`: read the live one first and keep its `assetGroups` (the uploaded SVGs and their blob ids) and `createdOnFiles`; change only `lastChange` and anything new. **Every update carries that day's date** at the top of the Overview and on the cover (CLAUDE.md, Exports; Karl, 2026-11-02): commit first so the build picks up today's date, check it, and always publish `project/README.md` and `project/components/Cover/preview.html`. New or changed SVGs are uploaded as assets first and added to `assetGroups`. Check previews before publishing with a headless render of each `components/<Comp>/preview.html` (tokens.css, bundle.css, React 18 and bundle.js preloaded, `data-theme` on `<html>`), in all three themes.

## Inputs (read-only)

| What | From |
|---|---|
| Colors (3 themes, Bold Coastal first), spacing, radius, shadow, breakpoints, font sizes and weights | `tokens/core/`, `tokens/themes/{bold-coastal,measured-vibrant,modern-earthy}.tokens.json`, `tokens/wordpress/breakpoint.tokens.json` |
| Editorial type styles, per-theme font roles and eyebrow | `tokens/wordpress/typography-editorial.tokens.json`, `tokens/wordpress/type-theme/` |
| Icon font and names | `tokens/icons/icomoon.woff2`, `tokens/icons/icons.json` |
| Placeholder logos (publication logos are linked from the Overview, not included; Karl, 2026-10-29) | `logos/logos.json` placeholders and their SVGs; `tokens/icons/svg-missing/` (next font build) |
| Components | `components/<layer>/<slug>/` (`<slug>.md` spec, `<slug>.tokens.json`, `<slug>.html` skeleton, `previews/`) |

## Hand-written sources (`src/`)

- `README.md`: the system's Overview, in plain language for designers, with a "For developers" section at the end. `{{CORE_TABLE}}`, `{{WORDPRESS_TABLE}}`, `{{INVENTORY}}`, `{{NAMESPACE}}`, `{{REF}}` are filled in. `build.py` also adds a header to every preview (system, full name, Figma link), a Figma link to every component's guidance, and the full token name to every token's usage note.
- `inventory.json`: every element and component, present and future (from the Figma libraries), with its status and the date it was last updated in Claude; rendered as the README's Inventory section. The build stops if a built component isn't listed.
- `token-notes.json`: usage notes for tokens; the build adds which components use each token and contrast ratios.
- `runtime.js`, `base.css`, `index.d.ts`: shared runtime (`h`, `cx`, `slug`, `stateClass`, `rest`, `Icon`, `ArticleImage`, `Specimen`) and base styles.
- `components/<Identifier>/`: one folder per component:
  - `component.js` — one function named exactly `<Identifier>` (no imports; uses `h`, `cx`, `slug`, `stateClass`, `rest`, `Icon`, `ArticleImage` and other components by name; all share one scope in `bundle.js`).
  - `component.css` — classes `mngds-<slug>` / `mngds-<slug>__<part>` / `mngds-<slug>--<modifier>`; values only from `var(--mng-…)` variables.
  - `types.d.ts` — `<Identifier>Props` and the declaration (documentation).
  - `api.md` — the "Use" section of its README (what the consumer supplies, example, prop table).
  - `notes.md` — optional "Build notes": decisions, spec gaps, differences from the Figma previews.
  - `preview.html` — the live preview card (line 1 `<!-- @dsCard group="Core|WordPress Elements" height=N subtitle="Figma: <name> · N variants" -->`).
- `assets/<Group>/README.md`: notes for each asset group.

The component README is generated: summary and Figma name, `api.md`, `notes.md`, then the spec's Properties, Behavior and breakpoints, Accessibility, Production and Known issues sections, copied from the export.

## Rules for component code

1. **Every value from the repo.** Use the component token variables first: every token in `<slug>.tokens.json` is a CSS variable `--mng-` + its path (`button-primary.state-hover.button.background` → `--mng-button-primary-state-hover-button-background`). Otherwise system variables (`--mng-color-*`, `--mng-spacing-*`, `--mng-radius-*`, `--mng-shadow-*`, `--mng-font-size-*`, `--mng-font-weight-*`, `--mng-font-family-noto-sans|serif`, `--mng-font-theme-*`, `--mng-editorial-<style>-font-*`). A raw number is allowed only when the spec, skeleton or token file gives it and no variable exists; never invent or round a value. If the spec is missing a value or contradicts itself, don't guess: write it in `notes.md` and pick the source that is most specific (token file > skeleton > spec prose), saying which.
2. **Props mirror Figma.** Each variant property is a camel-cased prop with the Figma values as strings (`breakpoint: 'Desktop'`, `state: 'Hover'`, `style: 'For You'`); boolean properties are booleans (`showGalleryIcon`); text properties are strings. `state` forces a documentation state through `stateClass()` (`is-hover`, `is-pressed`, `is-infocus`, `is-focus`); real `:hover`, `:active`, `:focus-visible` rules apply the same styles when `state` is unset.
3. **Accessibility as specced:** real `button` / `a` elements, roles and aria from the spec, `aria-hidden` icons inside labelled controls, focus rings `outline` outside the element (never a size change).
4. **Previews** show every variant, state and breakpoint in the spec's Variants table, labelled with the Figma variant name, using `_internal.Specimen` / `SpecimenSection` (samples on the `color/gray/500` stage, like the Figma documentation containers).
