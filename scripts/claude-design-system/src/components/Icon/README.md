# Icon

One glyph from MNG's production icon font (`icomoon`, the same file on every MNG site), named by its production class without `icon-`. Source: `tokens/icons/icons.json` and `tokens/icons/icomoon.woff2`.

## Use

```js
const { Icon } = window.mng_web_design_system;
h(Icon, { name: 'access-time', size: 13 })              // decorative: aria-hidden
h(Icon, { name: 'close', size: 16, label: 'Close' })    // meaningful on its own: role="img" + aria-label
```

| Prop | Type | Default | |
|---|---|---|---|
| `name` | string | required | Production name, e.g. `close`, `arrow-right`, `access-time`, `new-tab`, `hamburger`. `Icon.names` lists all 171; `Icon.categories` groups them like the Figma Icon Categories page. |
| `size` | number or CSS length | `16` | Font size; the glyph is drawn on a 1em square. |
| `color` | CSS color | inherits | Use a token: `var(--mng-color-gray-min)`, `var(--mng-color-theme-primary)`. |
| `label` | string | none | Only for an icon that carries meaning with no visible text. |

- Icons are 16px on Button Primary, Secondary, Tertiary and Button Action; 12px on Button Modal Close and Button In-Line Close (Buttons page findings, 2026-10-02).
- Icon color follows text color unless a spec names a token. Icons that carry meaning need 3:1 against their background.
- Inside a labelled control an icon is decorative (`aria-hidden`); an icon-only control needs an `aria-label` on the control.
- Names never change to IcoMoon's names: production names are kept, always (Karl, 2026-10-22). Search IcoMoon by `icomoonName` in `icons.json`.

## Known issues

- The next font build (17 new icons and new `notification` / `notification2` artwork) is not in production. Its SVG artwork is in the **Icons Next Build** asset group; those names don't render through `Icon` until the font ships.
- Where production's icon classes differ from the design (wrong glyph, missing class, production-only classes), see the drift doc, [`design-vs-production.md` entry 1](https://github.com/dfmedia/mng_web_ds/blob/main/design-vs-production.md). This component always draws the design glyph.
