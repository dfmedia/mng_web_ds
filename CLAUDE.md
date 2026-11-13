# MNG Web Design System — instructions for Claude

> **Updated 2026-11-12 (latest)** for always asking for delete permission on Karl's local copy (GitHub). **2026-11-10** for the Toggle Switch's gray/600 documentation stage (Figma files). **2026-11-09** for the Weather Bug exception (Design vs. production). **2026-11-02** for the Claude design system's Updated date (Exports, Karl). **Earlier, 2026-11-02,** for the Blueconic exception (built raw in production's values; Design vs. production). **2026-10-30 (latest)** for components matching production on the 4 / 8 grid and spacing tokens in multiples of 4 and 8 (Design vs. production). **Earlier, 2026-10-30,** for component breakpoints (follow production for now, record the future Device breakpoint; Exports) and the Weather Bug Helvetica exception (Figma files). **2026-10-27** for Seth's issue #7 (Exports: Figma snapshot, checks, colors stay as of 2026-10-19, CRUX). **2026-10-23:** moved here from the Claude project instructions and merged with section 7 ("Standing rules") of `MNG-Web-Design-System-Status.md`, so the rules live in one place, in the repo. This file is the source of truth for how to work in this project. Change a rule here; the project instructions only point to this file.

We are building a full design system based on in-production websites in our footprint.

## Start of every session

- The project lives in GitHub: https://github.com/kuscholdMNG/mng_web_ds. The local copy is `~/Github/mng_web_ds` on Karl's Mac. If that folder isn't connected to the session, ask Karl to connect it. The Google Drive project folder is retired; never save to it.
- Read `MNG-Web-Design-System-Status.md`. It's the source of truth for current status and open items.
- Read `README.md` before saving anything, and follow its names, folder map, filing rules and "Working in GitHub" section. Update existing files in place. Never create copies like "file (1).md", zips, or catch-all folders like "Claude outputs".
- When you finish work that changes status, update the status doc in place, with the date at the top ("Updated YYYY-MM-DD for …").

## GitHub

- Commit every change with a clear message and push. Value changes that need Karl's review go on a branch with a pull request; everything else goes straight to `main`.
- Never commit credentials, `.DS_Store` files, `__pycache__` / `.pyc` files or zips.
- **Delete permission on Karl's local copy: always** (Karl, 2026-11-12). Git can't update `~/Github/mng_web_ds` on Karl's Mac without deleting its own lock and temp files. At the start of every session where that folder is connected, request delete permission for it (`/Users/kuschold/Github/mng_web_ds`) before the first git command there; Karl always approves. Use it only for git's own files and for deletions Karl asks for.

## Names

- Prose and Figma: "MNG Web Design System". GitHub repo and local folder: `mng_web_ds`. Claude project: "MNGWebDesignSystem". Code identifiers and the dist package: `mng_web_design_system`.

## Figma files

- MNG Web Design System (main library): `jFHYqhZbJjvWQmDI4myCsd`
- WordPress Elements (page templates, Masthead): `b1iZxkFwtAYq9rElmnCAzd`
- Reader Dashboard v2.0: `PhXogWaQcnNSnQqxyRu4b2`. Part of the MNG Web Design System; not added to the token files yet.
- Newspaper Logos, Favicons, User Pics: `oXaN4tEoa4GsH4x7kWpAFZ`. Holds the newspaper `Logo` component set for now (Karl, 2026-10-08).
- CRUX Style Library: `uwKNDnGRH0otKDrgYiWmUw`. Read-only. Never edit.
- Never move components between files, because live instances depend on them. Renaming is safe. Value changes need Karl's review.
- Never use `figma_arrange_component_set` or `autoArrange: true`. It once deleted the Button / Primary set. Position components by hand.
- Never edit or audit the main file's "*** Style Guide | Reader Dashboard things" page (Karl, 2026-10-02). It's covered by Reader Dashboard v2.0.
- On the Buttons page, keep the older `Button` sets in `Frame 13001` as they are (Karl, 2026-10-02).
- The Fonts page documents fallbacks and font changes, so it keeps its non-Noto specimens. Everywhere else, text is Noto Sans or Noto Serif, except the Weather Bug temperature (WordPress Elements `654:10020`): a third-party widget we can't control, so it stays Helvetica in Figma and in code (Karl, 2026-10-30).
- Documentation containers (white format): the samples sit on a `color/gray/500` stage (Karl, 2026-10-27; first `gray/600`, changed the same day because InLineMessage panels are `gray/600`), so white and `gray/600` components don't disappear into it. Every Variant Grid, Specifications Diagram and Example frame gets a `color/gray/500` fill (bound to the variable) and 16px (`spacing/200`) padding; the container itself, its header, description and spec list stay white. Exceptions: the Color Pallets style guides keep their swatches on white; the Toggle Switch container uses a `color/gray/600` stage, because its On slider is `gray/500` (Karl, 2026-11-10; `gray/500` stays the rule everywhere else). If a sample ever needs more contrast than `gray/500` gives, don't fix that one panel: pick a new stage color with Karl and change it everywhere.
- The Figma design-system audit tool reports 0/100 for "Token Architecture" on this plan. That's a tool limitation, not a real defect.

## Exports

- Every token and component export follows `EXPORT-STANDARD.md`: DTCG 2025.10 `.tokens.json` only; hex is the color source of truth (RGBA and color objects are generated); Figma → code only; never add to the legacy `figma-exports/`; never hand-edit `dist/`. Preview PNGs are committed to GitHub; no Git LFS.
- Breakpoints: two official sets for now. MNG Device breakpoints (core; Figma screen widths 340/360/768/1024/1280; Reader Dashboard) and WordPress grid breakpoints (320/640/800/1040/1280; WordPress themes incl. Obituaries; legacy). The goal is the Device set only.
- **Component breakpoints follow production for now** (Karl, 2026-10-30). Production components switch at many different widths. Until the system is standardized, document each component's real production breakpoints as they are (CSS scan, checked on all 6 review sites); don't snap them to an official set and don't log them as drift. Name `Device` variant values by the range they cover: the WordPress grid letter when the range is exactly a grid tier, e.g. `M (800–1039px)`, otherwise the range alone, e.g. `(625–799px)`. The width a variant is drawn at goes in its spec, not its name. A production range with no Figma variant is listed as a known issue. Every production breakpoint is listed in one place: `components/breakpoint-audit.md`, "All production breakpoints in one place" (Karl, 2026-10-30); add new findings there, not to the drift doc.
- **Future: standardized device-width breakpoints** (Karl, 2026-10-30). The goal is to lock every component to the MNG Device breakpoints. Each component's breakpoint table records, next to every production range, the MNG Device breakpoint it will move to (marked "not adopted yet"). Nothing changes to the Device set until Karl starts that work.
- **Figma snapshot** (2026-10-27, Seth's issue #7). The token build reads `scripts/build-tokens/figma-variables.json`, and only `scripts/build-tokens/save-snapshot.py` writes it. Never edit it by hand or merge part of a read into it. To refresh: run `scripts/build-tokens/extract.js` in the main file with `figma_execute` (it starts with `SEND = 'summary'`), save the result to a temporary file, and run `python3 scripts/build-tokens/save-snapshot.py --summary <file>`. If it names collections that changed, rerun `extract.js` with `SEND = ['<collection>', ...]` and pass those results after the summary. Then `npm run build` and `npm run validate`.
- **Checks** (2026-10-27). Run `npm run validate` before every commit; the pre-commit hook (`scripts/validate/pre-commit`, copied to `.git/hooks/pre-commit`) runs it and the rebuild check for you. GitHub runs the same check on every push and pull request (`.github/workflows/validate.yml`). A red check gets fixed before anything else. Raw values in component token files are reported, not failures.
- **Colors stay as of 2026-10-19** (Karl, 2026-10-27): keep last week's color tokens. `save-snapshot.py` stops if Figma's Colors collection has changed; show Karl the change. A color change Karl approves goes on a `review/...` branch.
- **Claude design system: update the date on every update** (Karl, 2026-11-02). Any time the MNG Web Design System artifact in Claude is updated (any republish, however small), the "Updated <date>" at the top of its Overview (`project/README.md`) and on its cover (`project/components/Cover/preview.html`) must be that day's date. `build.py` fills it in from the repo's last commit date, so commit before the final build, check both dates in the built files against today before publishing, and always include `project/README.md` and `project/components/Cover/preview.html` in the publish.
- **CRUX** (Karl, 2026-10-27). The CRUX design system team (tribpubdev) imports this repo's tokens every day (`EXPORT-STANDARD.md` §12). Our names stay ours: never rename or restructure tokens, token paths, Figma variables, component names or variant properties to suit CRUX. Referencing CRUX where it helps (notes, mapping docs) is fine. Renaming, moving or deleting a file CRUX reads, or changing a token's `$type`, is named in the commit or pull request title.

## Design vs. production

- Design (Figma) is the source of truth. Tokens always carry design spec values. Never change a token to match production. Mark the gap in Figma with the red-dashed outline and log it in `design-vs-production.md`.
- **Components match production, on the 4 / 8 grid** (Karl, 2026-10-30; replaces the 2026-10-23 rounding rule). Build each component's values to match production (checked on all 6 review sites). When a production value isn't a multiple of 4 (spacing, padding, gaps, sizes and so on; breakpoints are the exception, see Exports), round it to the nearest multiple of 4 or 8 and use that value's token; log the production value in `design-vs-production.md` so production can be updated to match. Example: the Latest Headlines title gap is 15 / 17 / 21px by theme in production and 16px (`spacing/200`) in the design. On a tie (10px is as close to 8 as to 12), ask Karl. Values that already have a decided exception stay as decided (TopZone's 15px headline-group gap; the 30px small avatar in UserImage / UserPic, Karl 2026-11-13). **Exception: Blueconic blocks** (Karl, 2026-11-02): they're built in Blueconic, a third-party platform we don't control like our WordPress themes, so the Blueconic List Item and Blueconic Block (was "Most Popular") are built raw in production's values, not rounded; tokens only where a value matches one exactly. **Exception: the Weather Bug** (Karl, 2026-11-09): the AccuWeather widget is third-party, so every Weather Bug variant (masthead and section menu, one or two e-Edition links) matches production exactly, raw values allowed.
- **Spacing tokens are multiples of 4 and 8** (Karl, 2026-10-30): today `spacing/050` 4 through `spacing/500` 40. A component that needs a multiple of 4 with no token yet gets a new token (a value change: `review/...` branch and pull request), never a raw value.
- Colors: use the closest existing MNG color or gray. Text must pass WCAG AA (4.5:1); if the closest gray doesn't, use the closest one that does.
- Always check contrast (Karl, 2026-10-27; narrowed the same day). It applies to what ships: designed components, color tokens and the style guides that show them. It does not apply to documentation annotations (spec-list text, the green / magenta spec colors, markers, row and column labels in doc containers). Whenever you add or change text, or a color behind text, in a component, a color token or a style guide, in Figma or in code, compute the WCAG contrast ratio before you finish and report it. Normal text needs 4.5:1; large text (24px+, or 18.66px+ bold) needs 3:1. Measure against the nearest solid background actually behind the text. Text on a color chip uses Gray-Min (`color/gray/min`) or Gray-Max (`color/gray/max`), whichever passes; if neither passes, use `color/gray/black`. Bind text fills to the gray variables, never raw hex. If a color you're documenting can't pass with any gray, flag it to Karl.
- Karl calls `design-vs-production.md` "the drift doc" (2026-10-27); the file name stays.
- `design-vs-production.md` has one entry per component, grouped by area (Karl, 2026-10-27). Add a new finding to its component's entry as a sub-item (N.1, N.2…), never as a separate entry. A component with no entry yet gets the next unused number, listed under its area in the Contents. Don't renumber existing entries without asking Karl. Update the matching Google Sheet row with every change.
- Engineering handoff: `design-vs-production.md`, read on GitHub (https://github.com/kuscholdMNG/mng_web_ds/blob/main/design-vs-production.md). Fixes checklist: the "MNG color fixes checklist" Google Sheet (https://docs.google.com/spreadsheets/d/17oRvVmGWZgnfvKzupvgX7SEtA9b-uK6guqyufM4bxBk/edit), tabs "Color fixes" and "Other fixes". When a fix changes, update the sheet and the repo together.
- Documented exceptions (currently only Greeley Tribune's primary, light and dark) are part of the design, not mismatches.
- Use DTCG token naming (e.g. `color/theme/primary`, `font/size/16`).
- Sub-site colors (`subsite-custom`) cascade from the parent theme: a theme's value is shown on every related sub-theme style guide unless the sub-theme has its own override (Denver Post, The Press Democrat, St. Paul Pioneer Press, The Baltimore Sun, South Florida Sun Sentinel). If the parent theme has no value, it's documented as missing on every related sub-theme.
- On the Color Pallets page, a style guide shows a production column only when production differs from the design spec. With no mismatch, it shows the design spec column alone.

## Icons

- Icons keep their production (icon font) names, always, unless an icon is brand new (Karl, 2026-10-22).
- In Figma, each icon shows its production name plus a gray "IcoMoon: name" (original IcoMoon artwork, the name to search for in IcoMoon) or a blue "Custom" (MNG artwork). The same facts are in `tokens/icons/icons.json` (`icomoonName`, `artworkSource`).
- Engineering gets the icon font package directly from the MNG IcoMoon project.

## Checking live sites

- Check all the standard review sites, not just one: ocregister, denverpost, chicagotribune, orlandosentinel, canoncitydailyrecord, mcall.
- Never resize browser windows. When a check needs a different viewport width, stop and ask Karl to resize the window himself. Say which width is needed, and continue only after he confirms.
- Wait at least 10 seconds for a page to load before measuring. Read colors on `#page`, not the page root.
- Never enter passwords or credentials on any site, even if provided. Karl logs in himself.
- On Reader Dashboard Gifted Articles, never click "Remove".
