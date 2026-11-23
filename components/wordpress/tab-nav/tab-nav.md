---
name: Tab Nav
slug: tab-nav
layer: wordpress
figma_file: b1iZxkFwtAYq9rElmnCAzd
figma_set: "Tab Nav"
figma_node: "3629:44974"
component_key: f6f0992bc1126f8cfc17158b13600b3a8318213e
variants: 2
tokens: tab-nav.tokens.json
skeleton: tab-nav.html
exported: 2026-11-23
---

# Tab Nav

> The tab nav bar built from Tab Nav Item. Breakpoint = Desktop, Mobile. Named Homepage Tabs until 2026-11-16.

## Figma

- File: **WordPress Elements** (`b1iZxkFwtAYq9rElmnCAzd`), page **Menus and Parts**
- Component set: [`Tab Nav` · 3629:44974](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44974) · key `f6f0992bc1126f8cfc17158b13600b3a8318213e`
- Documentation frame: [Tab Nav Container](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44928) · overview: [previews/tab-nav--documentation.png](previews/tab-nav--documentation.png)

## Properties

| Property | Default | Options |
|---|---|---|
| Breakpoint | Desktop | Desktop, Mobile |

## Variants

| Variant | Size | Node | Instances | Preview |
|---|---|---|---|---|
| `Desktop` | 1280×42 | [3629:44950](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44950) | 0 | ![](previews/tab-nav--desktop.png) |
| `Mobile` | 360×42 | [3629:44962](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=3629-44962) | 0 | ![](previews/tab-nav--mobile.png) |

## Anatomy

Default variant `Desktop` (hidden layers marked):

- **Breakpoint=Desktop** `COMPONENT`: 1280×42, vertical, gap 0, padding 0/0/0/0, fixed×hug
  - **Bottom Border** `RECTANGLE`: 1280×1, fixed×fixed, absolute
  - **Nav** `FRAME`: 1280×42, horizontal, gap 0, padding 0/8/0/8, fixed×hug
    - **Tab List** `FRAME`: 232×42, horizontal, gap 24, padding 0/0/0/0, hug×hug
      - **Tab** `INSTANCE`: 123×42, vertical, gap 0, padding 0/0/0/0, hug×hug, instance of Tab Nav Item (State=Active)
      - **Tab** `INSTANCE`: 85×42, vertical, gap 0, padding 0/0/0/0, hug×hug, instance of Tab Nav Item (State=Default)

## Component tokens

From `tab-nav.tokens.json`. References point at system tokens (`tokens/core/`, `tokens/themes/`); the CSS variable is `--mng-` + the token path. A literal value means the Figma layer isn't bound to a token.

| Token | Value |
|---|---|
| `tab-nav.base.bottom-border.background` | `{color.gray.300}` |
| `tab-nav.base.nav.padding-left` | `{spacing.100}` |
| `tab-nav.base.nav.padding-right` | `{spacing.100}` |
| `tab-nav.base.nav.tab-list.gap` | `{spacing.300}` |
| `tab-nav.base.nav.tab-list.tab.height` | 42px |
| `tab-nav.base.nav.tab-list.tab.icon-color` | `{color.gray.200}` |
| `tab-nav.base.nav.tab-list.tab.width` | 85px |
| `tab-nav.base.root.background` | `{color.gray.max}` |
| `tab-nav.breakpoint-desktop.nav.width` | 1280px |
| `tab-nav.breakpoint-desktop.root.width` | 1280px |
| `tab-nav.breakpoint-mobile.root.width` | 360px |

## Behavior and breakpoints

| Device | Viewport | Layout |
|---|---|---|
| Mobile | below 640px | Nav 8px side padding |
| Desktop | 640px and up | Nav 1280px max, 8px side padding |

- **Bar:** full width, `color/gray/max`, with a 1px `color/gray/300` rule along the bottom; the active underline sits over it.
- **Nav:** max width 1280px, centered, 8px (`spacing/100`) side padding at every width, so the first tab lines up with the page content's left edge (Karl, 2026-11-03; was 1200px with 24px (`spacing/300`) sides at 640px and up and no side padding below).
- **Tabs:** left-aligned, 24px (`spacing/300`) apart; they scroll sideways (scrollbar hidden) if they don't fit.
- **More tabs than fit** (Karl, 2026-11-23): the last visible tab is cut in half, never truncated (no ellipsis; labels always whole). The tab list ends at the middle of the last tab whose middle fits, measured again when the width changes or fonts load; the bar and its bottom rule still run full width. Arrow keys scroll the focused tab into view, and scrolled to the end every tab shows in full. Figma: overflow sample in the Tab Nav Container's Specifications.
- **Accessibility:** `ul role=tablist`, each `li role=presentation`; panels have matching ids and `role=tabpanel`.
- **Keyboard** (WAI-ARIA Tabs pattern, manual activation; Karl, 2026-11-04): only the selected tab is in the Tab order (`tabindex` 0, the others −1); Left / Right move focus between tabs and wrap, Home / End go to the first / last; Enter or Space selects. Manual, not automatic, activation because choosing For You can open the Welcome modal. Developer notes: `components/for-you-interaction-and-accessibility.md`.

## Accessibility

- No InFocus state in Figma.
- Text color on its background must meet WCAG AA contrast (4.5:1 for text under 18px) in every theme; theme colors change per site.
- Icons inside a labelled control are decorative (`aria-hidden`); an icon-only control needs an accessible name (`aria-label`).

## Where it is used

Scope: instances in the Figma file **WordPress Elements** only (other files that use the library are not counted). Total: **0**.


**Built from:** Tab Nav Item ×4

## Production

Production World Cup tabs (`ul.sr-nav-tabs > button.tab-btn`, staging.dailylocal.com/world-cup/); differences are design-vs-production entry 12.

## Known issues

None open.

## Files

- `tab-nav.tokens.json`: component tokens (DTCG 2025.10).
- `tab-nav.html`: HTML/CSS skeleton of every variant, using the `dist/` CSS variables (open it in a browser).
- `previews/`: PNG of every variant @2x and the documentation frame.

*Generated 2026-11-23 by `scripts/component-export/export.py` (EXPORT-STANDARD.md section 7). Edit the text in `scripts/component-export/registry.json`, not here.*
