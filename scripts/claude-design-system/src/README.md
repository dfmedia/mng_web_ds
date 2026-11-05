> **Compiled by Karl Kuschold**, UX/UI Design Lead, MediaNews Group, with Claude (Anthropic). Questions, corrections or requests: kuschold@medianewsgroup.com.
>
> **Updated {{UPDATED}}.**

The MNG Web Design System is MediaNews Group's design system for its news websites (90+ publications). It's built from what is live on our sites and corrected in Figma, so what you see here is what the sites should look like. Use it to look up colors, type, spacing and components, and to design and prototype in Claude with the real components instead of copies.

## How to use it

- **Browse.** The sidebar has the foundations (Colors, Typography, Spacing, Corner radius, Shadows, Breakpoint, Font size, Font weight), every **Component** as a live sample, and **Assets** (placeholder logos and the next icon artwork).
- **Long names.** The pages cut long names off. On the Colors, Typography and other token pages, the note button at the right of a row opens its usage note, which starts with the full name. On the Components page, the header at the top of each sample shows the full name.
- **Switch themes.** Our sites use three shared themes: Bold Coastal, Measured Vibrant and Modern Earthy. Use the theme menu at the top of the Components page to see any component in another theme.
- **Read a component's guidance.** On the Components page, the note button at the right of each row opens its guidance: what it's for, its variants, accessibility, and how production differs from the design. Each sample starts with a header that names the component in full, says whether it belongs to **Core** or **WordPress Elements**, and links to it in Figma.
- **Design in Claude.** When you make a mock-up, prototype or canvas in Claude, ask it to use the **MNG Web Design System**. It then uses these components, colors, fonts and icons directly, so the result matches the system.
- **Figma is the source of truth.** If something here looks wrong, check Figma. Changes are made in Figma first, then this system is rebuilt from it; nothing here is edited by hand.
- **Production differences** (where a live site doesn't match the design yet) are tracked for Engineering in the [drift doc](https://github.com/kuscholdMNG/mng_web_ds/blob/main/design-vs-production.md), not here.

## Where things live in Figma

| What | Figma |
|---|---|
| **MNG Web Design System** (main library: foundations and Core components) | [Open the file](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/) · [Introduction / About](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=74-67) |
| **WordPress Elements** (site parts, cards and page templates) | [Open the file](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/) · [Homepage](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=0-1) · [Menus and Parts](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=14-499) · [Article Page](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=14-1697) |
| **Reader Dashboard v2.0** (part of the system; not in Claude yet) | [Open the file](https://www.figma.com/design/PhXogWaQcnNSnQqxyRu4b2/) · [Reader Dashboard v2 templates in WordPress Elements](https://www.figma.com/design/b1iZxkFwtAYq9rElmnCAzd/?node-id=1053-26960) |
| **Themes** (color style guides for every theme and sub-theme) | [Color Pallets](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=2321-5) · [Style Guide: Themes](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=1079-955) (planned) |
| Colors | [Color Pallets](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=2321-5) |
| Typography | [Fonts](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=1079-4658) (families, fallbacks, font changes). Sizes, weights and text styles are Figma variables in the main file (Type Primitives, Typography Tokens, Typography Theme). |
| Spacing and corner radius | Figma variables in the [main file](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/) (Spacing & Radius) |
| Shadows | [Shadows](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7376-25745) |
| Breakpoints | [Breakpoints and Page Templates](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=1782-1151) |
| Icons | [Icons](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=1082-55553) |
| Component pages (main file) | [Buttons](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=1079-34282) · [Tooltips](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7372-25702) · [Modal Panels](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=1079-12064) · [In-Line Content Containers](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=1079-15767) |
| Newspaper logos | [Newspaper Logos, Favicons, User Pics](https://www.figma.com/design/oXaN4tEoa4GsH4x7kWpAFZ/?node-id=0-1) |

## Core and WordPress Elements

The system has two parts, matching the two Figma libraries:

- **Core** (the main MNG Web Design System file) holds the building blocks used everywhere, on WordPress sites, the Reader Dashboard and anything new: buttons, links, icons, tooltips, modals and in-line messages.
- **WordPress Elements** holds the parts of our WordPress news sites, built from Core: homepage tabs and section titles, article cards and their pieces (kicker, author, timestamp), slideshows and the gallery badge.

### Core

{{CORE_TABLE}}

### WordPress Elements

{{WORDPRESS_TABLE}}

## Themes

Every site uses one of three shared WordPress themes, and many sites have their own colors on top (theme, then sub-theme, then site). This system carries the three themes; per-site colors come later. Theme style guides: [Color Pallets in Figma](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=2321-5).

| Theme | Example sites | Headlines / body text | Eyebrow (section label) |
|---|---|---|---|
| Bold Coastal (default) | ocregister.com, denverpost.com (own colors) | Noto Serif / Noto Sans | Noto Sans 20, Regular |
| Measured Vibrant | chicagotribune.com, orlandosentinel.com (own colors) | Noto Serif / Noto Sans | Noto Sans 17, Bold |
| Modern Earthy | canoncitydailyrecord.com (NEPA-PMP), mcall.com (own colors) | Noto Sans / Noto Serif | Noto Serif 21, Regular |

- Type sizes, weights and spacing are the same in every theme; only the font families and the eyebrow change.
- `color/theme/subsite-custom` isn't shown yet: only Bold Coastal has a value (`#0097a7`); Measured Vibrant and Modern Earthy have none. The sub-theme values (Denver Post `#000000`, The Press Democrat `#eeeeee`, St. Paul Pioneer Press `#ffffff`, The Baltimore Sun `#1c2551`, South Florida Sun Sentinel `#000000`) come with the per-site themes.
- Obituaries (Endless Tributes) look the same on every site: use the `mng-color-tributes-*` colors, whatever the theme.

## Color

Figma: [Color Pallets](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=2321-5).

- Text is `mng-color-gray-min` (our "black") unless a component's guidance says otherwise. Use `mng-color-gray-black` only for focus rings and where a spec names it.
- Secondary text is `mng-color-gray-100`; meta text (timestamps, captions) is `mng-color-gray-200`, the lightest gray that's readable for small text on white. `gray-300` and lighter are never used for small text.
- Borders and dividers: `mng-color-gray-500` (cards), `gray-300` (tooltip and modal edges), `gray-400` (masthead rules).
- `mng-color-theme-primary` is the brand color: Button Primary, links, kickers, active tabs, card hover. It's readable on white in every theme. Text on a primary fill is `mng-color-gray-max` (white).
- `mng-color-theme-secondary` and `tertiary` are fills only, never text on white.
- On the Colors page, a warning such as "hard to read on mng-color-gray-max" means that color fails WCAG AA contrast as text on that background. Those colors are meant for borders, fills and focus rings, not text.
- Everything that ships must meet WCAG AA contrast: 4.5:1 for normal text; 3:1 for large text (24px+, or 18.66px+ bold), icons, borders and focus rings.

## Type

Figma: [Fonts](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=1079-4658).

- Two families: **Noto Sans** and **Noto Serif** (Google Fonts). Each theme decides which one is used for headlines, body text, small headlines and the eyebrow (see Themes).
- Editorial text uses the text styles on the Typography page. The main ones: `mng-editorial-titles-display` (article headline, 36), `mng-editorial-titles-title` (29), `mng-editorial-titles-card-secondary` (26), `mng-editorial-titles-card-tertiary` (20), `mng-editorial-titles-card-tertiary-row` (18), `mng-editorial-titles-card-tertiary-compact` (16), `mng-editorial-titles-card-quaternary` (19), `mng-editorial-titles-headline-list` (15), `mng-editorial-titles-subtitle` (deck, 23), `mng-editorial-titles-section-header` (40), `mng-editorial-body-default` (16.5 / 27), `mng-editorial-body-excerpt` (15 / 21), `mng-editorial-body-excerpt-compact` (15 / 19).
- Sizes come only from the Font size list; weights from the Font weight list (400 Regular, 500 Medium, 600 SemiBold, 700 Bold). No display fonts and no italic style.
- Excerpts are always 15px Regular; the card sets their line height (21px, or 19px when compact).

## Spacing, radius, shadow

Figma: spacing and radius are variables in the [main file](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/); [Shadows](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=7376-25745).

- Spacing is on a 4/8 grid: `mng-spacing-050` 4, `100` 8, `150` 12, `200` 16, `250` 20, `300` 24, `400` 32, `500` 40. Production's 10px and 14px are drift, not part of the system.
- Corner radius: `mng-radius-sm` (4px) on every button and control; `mng-radius-field` (3px) on form field outlines (Form Field, Code Box, search field); `mng-radius-utility` (5px) on containers only (in-line messages, modals, status badge); `mng-radius-lg` (8px) on cards.
- Shadows are black only: `mng-shadow-sm` sticky bars, `mng-shadow-md` cards, `mng-shadow-lg` anything floating (modals, menus, tooltips). The masthead keeps production's shadow (only when scrolled); it isn't in the system yet.
- Focus rings: a 2px `mng-color-gray-black` outline, 1px outside the element. The ring never changes the element's size (a 40px button measures 46px with its ring).

## Breakpoints

Figma: [Breakpoints and Page Templates](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=1782-1151). Two official sets for now; the goal is the Device set only.

- **MNG Device** (core; the Figma screen widths; Reader Dashboard): Fold 340, Mobile 360, Tablet 768, Tablet landscape 1024, Desktop 1280.
- **WordPress grid** (WordPress themes, including Obituaries; legacy): 320, 640, 800, 1040 (the masthead switches to desktop here), 1280 (container width: 16 columns × 80px, 20px gutters).
- Components with Mobile and Desktop versions switch at 640px unless their guidance says otherwise.
- **Component breakpoints are production's, for now** (Karl, 2026-10-30). Many production components switch at their own widths, so each component's guidance lists its real ranges, and its `device` values are named by them (for example the TopZone Article Card: `XS (≤639px)`, `M (800–1039px)`, `L (1040–1279px)`, `XL (≥1280px)`). Use the variant for the range you're designing at.
- **Future:** everything moves to the MNG Device breakpoints above. Each component's guidance shows which Device breakpoint each of its ranges will become (not adopted yet).

## Icons

Figma: [Icons](https://www.figma.com/design/jFHYqhZbJjvWQmDI4myCsd/?node-id=1082-55553).

The icons are the production icon font (the same file on every MNG site): 171 icons in 6 categories, shown on the Components page under Icons. Icons keep their production names, always; only brand-new icons get new names. The next font build's artwork (17 new icons, 2 redrawn) is in **Assets › Icons Next Build** and isn't in the font yet. Payment marks stay out of the icon font.

## Logos

- **Publication logos** aren't part of this system. Find them in Figma, [Newspaper Logos, Favicons, User Pics](https://www.figma.com/design/oXaN4tEoa4GsH4x7kWpAFZ/?node-id=0-1), and as SVG files in the repo's [logos folder](https://github.com/kuscholdMNG/mng_web_ds/tree/main/logos). Never draw or approximate a logo; a publication without artwork gets its name in plain type.
- **Placeholder logos** (fake newspapers for mock-ups) are in **Assets › Placeholder Logos**. Use them in prototypes unless the work is for a specific publication.

## Sample content

- Use real headlines and bylines, the way the sites print them: "Norte fire that destroyed homes in South Orange County is at 80% containment", "Ruby Gonzales". Never lorem ipsum.
- Kickers are the section name as written ("Crime and Public Safety"); the Article Section Kicker sets them in capitals.
- Timestamps are relative, like production: "56 mins ago", "2 hours ago", "3 days ago", "1 week ago".

## Rules

- Design (Figma) is the source of truth. Production gaps go in the [drift doc](https://github.com/kuscholdMNG/mng_web_ds/blob/main/design-vs-production.md), one entry per component; the system never changes to match production.
- No off-system values in new work: round a production value to the nearest token and log the production value in the drift doc. Breakpoints are the exception: components keep production's ranges for now (see Breakpoints).
- Accessibility as specced: real buttons and links, tabs and dialogs marked up as such, decorative icons hidden from screen readers, a label on icon-only controls, visible focus rings, readable text (WCAG AA).
- Each component's guidance keeps its known issues and production notes. Read them before using it in a layout.

{{INVENTORY}}

## For developers

Everything here is generated from the exports in [kuscholdMNG/mng_web_ds](https://github.com/kuscholdMNG/mng_web_ds) (`{{REF}}`) by `scripts/claude-design-system/build.py`. Never type a value in by hand: change Figma, re-export, rebuild.

- **Namespace:** every component is on the global `window.{{NAMESPACE}}` (the bundle `components/bundle.js`, a classic script that needs React 18 and ReactDOM 18 on the page first). Example: `const { ButtonPrimary, BlocksCard, Icon } = window.{{NAMESPACE}};`
- **Load order on a canvas or page:** `tokens.css`, then `components/bundle.css`, then React 18, ReactDOM 18, then `components/bundle.js`.
- **Theme:** set `data-theme` on `<html>` (or any wrapper): `bold-coastal` (default), `measured-vibrant` or `modern-earthy`. Colors, the font roles and the eyebrow all switch from that one attribute.
- **CSS variables** keep the repo's `dist/` names: `--mng-` + the token path (`--mng-color-theme-primary`, `--mng-spacing-200`, `--mng-radius-lg`, `--mng-shadow-lg`, `--mng-font-size-16`, `--mng-editorial-titles-title-font-size`). Component tokens follow the same rule (`--mng-blocks-card-state-hover-root-border-color`). Code written against `dist/css/` works here unchanged. Editorial styles are also CSS classes of the same name.
- **Props mirror Figma.** Each Figma variant property is a prop with the Figma values, camel-cased: `breakpoint: 'Desktop' | 'Mobile'`, `icon: 'None' | 'Left' | 'Right'`, `state: 'Default' | 'Hover' | …`. `state` forces a state for documentation and mock-ups; leave it unset in real layouts so hover, pressed and keyboard focus happen on their own.
- **Images:** card components take `image` (a URL) and `imageAlt`. Without `image` they draw WordPress Elements' Article Image Placeholder.
- **Icons:** `h(Icon, { name: 'access-time', size: 13 })`. Names are the production class names (without `icon-`) in `tokens/icons/icons.json`.
- **Focus rings in code:** `outline: 2px solid var(--mng-color-gray-black); outline-offset: 1px`.
