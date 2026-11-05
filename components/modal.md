# Modal

> **Updated 2026-10-27** for the For You components pass (step 5): ModalsCenter and ModalsOffset use `shadow/lg` (it replaces the Tailwind `shadow-xl` noted below); every spacing and radius in both sets is a token, including the new `spacing/400` (32) and `spacing/500` (40) (pull request #8); both sets now have white documentation containers on the Modal Panels page (§6, §7); ModalsOffset added (§7). Earlier: 2026-09-25. Current project status is in `MNG-Web-Design-System-Status.md`.

**Status:** ✅ **Specced from Figma 2026-09-01.** The Figma source is the **ModalsCenter** component set in the main MNG Web Design System file (`jFHYqhZbJjvWQmDI4myCsd`, Modal Panels page, node `3040:2262`), which Reader Dashboard v2.0 uses as a library component across its Profile Panel, Upgrade Subscription, Cancel Subscription, Update Payment Information, and Notification Preferences pages. Per Karl's direction 2026-09-01 ("Reader Dashboard designs are here..."), this Figma source superseded the live-site scrape below as the accurate source of truth — and the two agree almost exactly (see §6), which is a good cross-check. The spec models the Profile Panel's account-verification instance specifically (the same "email you a verification code" flow captured live below), `Device=TabletH` variant, instance id `6628:26265` in Reader Dashboard v2.0. A pilot rebuild of this modal was retired on 2026-09-25; use ModalsCenter.
**Live-site source (original audit, 2026-08-xx):** `preprod.eastbaytimes.com/dashboard` (Reader Dashboard), triggered from Profile → Display Name "Update"
**Implementation:** `react-modal` library (`ReactModal__Content` class), styled with Tailwind utility classes

⏸️ **Live-site follow-up paused:** the Reader Dashboard is its own separate React/Tailwind application, distinct from the main WordPress-based site (confirmed via Tailwind class names throughout, e.g. `md:pr-2`, `p-4 md:p-6`). It also appears to be mid-transition — see §5. Capturing this app's own responsive breakpoints (likely Tailwind's defaults, not the main site's 1039px nav breakpoint) is still an open task, but deeper audit of this live surface is on hold now that the Figma spec covers the actual design-system deliverable.

---

## 1. Example captured

Triggered by clicking "Update" next to Display Name: **"Please Verify Your Account Before Continuing"** — an account-verification prompt requiring an emailed code before the display-name edit can proceed. (Did not click through — stopped at "Maybe Later" to avoid actually triggering a verification email on a live account.)

## 2. Structure & measurements

**Backdrop:**
- Full-viewport, `position: fixed`
- `background: rgba(0, 0, 0, 0.45)`

**Card (`.ReactModal__Content`):**
- Fixed width: **444px** (Tailwind `w-[444px]` — not responsive/fluid; worth checking behavior on narrow viewports separately, not yet tested)
- Background: white
- Border radius: **8px**
- Box shadow: `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)` — this is Tailwind's default `shadow-xl`. **Design (2026-10-23):** `shadow/lg`, `0 8px 16px 0 rgba(0,0,0,0.2)`
- Padding: `40px 40px 24px` (more breathing room on top/sides than bottom, presumably to sit closer to the action buttons)
- Close (✕) icon, top-right corner

**Heading:**
- `font-size: 20px`, `line-height: 24px`, `font-weight: 700`
- Color keyed to a Tailwind custom color named `text-gray-min` in source — worth finding out what hex this actually resolves to and whether "gray-min" is a naming convention already in use elsewhere in the codebase (possible existing token naming worth aligning with)
- Small info icon (ⓘ) sits inline before the heading text

**Body copy box:**
- A bordered inset box around the explanatory text (not just plain paragraph text)
- `border: 1px solid rgb(204, 202, 199)` (~`#CCCAC7`, Tailwind `border-gray-500`)
- `border-radius: 4px`
- `padding: 24px` (`p-4 md:p-6` — so this is itself responsive, unlike the fixed-width card)

**Actions:**
- Primary button ("Send Verification Code"): `background: rgb(0, 109, 163)` (`#006DA3`), white text, `font-weight: 700`, `border-radius: 4px`, `padding: 8px 16px` — same blue as the Disclosure link color (see `disclosure.md`).
- **Resolved 2026-08-27 — this was never actually a drift.** An earlier pass compared this button's color against a live read of the shared theme's `--primary` CSS variable and got a mismatch (`#006DA3` vs. `#006FB7`), written up as a possible drift. A follow-up pass changed the suspect but kept the same underlying mistake. The real explanation is a measurement error: `--primary` was read on `document.documentElement` (the `<html>` element). The WordPress Customizer's real per-site override is scoped to `div#page` (the main content wrapper), a descendant of `<html>`, not an ancestor — so it never flows back up to affect what `<html>` reports. Reading `--primary` correctly, on `#page` itself (which is what any real button on the page actually inherits from), returns `#006DA3` on both `preprod.eastbaytimes.com` and production `eastbaytimes.com` — an exact match for the button. Karl confirmed the site's real CSS architecture is a three-layer cascade (theme defaults → SCSS/CSS overrides, which include a generic `#006FB7` placeholder at `:root` → WordPress Customizer overrides scoped to `#page`, which is what actually renders) — this is that cascade working exactly as intended. No drift, no bug, no engineering question. Confirmed the same pattern (theme/SCSS placeholder overridden correctly by a `#page`-scoped Customizer value) on every other pilot site too.
- Secondary action ("Maybe Later"): plain text link, same blue, no button chrome, `padding: 4px 8px`

## 3. Tokens

The primary button/link color (`#006DA3`) maps cleanly to East Bay Times' own Brand `primary` token (since 2026-10-19 the shared The Mercury News + East Bay Times mode, `color/theme/primary`) — confirmed correct as of the 2026-08-27 resolution above. No open question remains here; this was a measurement-methodology issue on our side, not a production or documentation problem.

Tokens (updated 2026-10-27):
- Card radius: `radius/lg` (8px). Body box: 1px `color/gray/500`, `radius/sm` (4px).
- Card shadow: `shadow/lg` (`0 8px 16px 0` black 20%), replacing Tailwind `shadow-xl`.
- Card padding: `spacing/500` (40) top, left, right and `spacing/300` (24) bottom on Desktop and tablets; `spacing/300` all round on Mobile and Fold.
- Still no token: the page overlay (black 50% in Figma, 45% live). The 444px card width is a frame width, not a token (`EXPORT-STANDARD.md` §3.4).

## 4. Other findings from this pass

**Password "Update" is not a modal** — it navigates to a separate full page, `/reset-password/`. That page is essentially unstyled: Arial font, square corners, plain black 3px button border, default gray input border (`rgb(157,154,152)`) — none of it matches the design system. This is a design-debt gap to flag, not a pattern worth capturing faithfully.

**Subscription tab redirects elsewhere:** navigating to the Subscription tab on this preprod dashboard shows only a message: "To view and manage your Subscription Details, please visit the Reader Dashboard on dailynews.com." So subscription management has already moved off this surface entirely — another sign this whole area is mid-transition, reinforcing the pause noted at the top of this file.

## 5. Open items (live-site audit)

1. Only one true modal instance was captured. Other triggers (e.g. any destructive actions like canceling a subscription) were **not** explored — those are exactly the kind of irreversible/account-changing actions this session avoids triggering, so they'd need the user to click through themselves and report back.
2. Responsive behavior of the 444px fixed width at narrow viewports not tested.
3. Whether other modals in the system share this exact same shell (444px, 8px radius, same shadow) or vary by purpose is unconfirmed — this is one data point, not yet a proven pattern. **Partially resolved by the Figma spec below:** the ModalsCenter component IS reused across Upgrade Subscription, Cancel Subscription, Update Payment Information, and Notification Preferences — confirming this is one shared shell, not a one-off.
4. "text-gray-min" — **resolved.** This is exactly our `color/gray/min` token (#141414) — the live site's own naming convention already matches ours.
5. This app's own responsive breakpoints (likely Tailwind defaults — `sm`/`md`/`lg`/`xl`) not yet captured.

## 6. Figma spec — ModalsCenter measurements (2026-09-01)

Sourced directly from the ModalsCenter component's real geometry (not the generic/default variant):

| Property | Live-site value (§2 above) | Figma-measured value | Match? |
|---|---|---|---|
| Card width | 444px (fixed) | 444px | ✅ exact |
| Card radius | 8px | 8px (`radius/lg`) | ✅ exact |
| Card padding | 40/40/24 (implied left=40) | 40 top / 40 right / 24 bottom / 40 left | ✅ exact |
| Card border | none noted live (shadow instead) | 1px `color/gray/300` (#838280) | Figma adds a border; live relies on shadow only — both may be true (shadow-xl could be layered on top of a subtle border we didn't visually distinguish live) |
| Heading | 20px/700, "text-gray-min" | Noto Sans Bold 20px, `color/gray/min` | ✅ exact |
| Body box border | `#CCCAC7`, radius 4px, padding 24 | `color/gray/500` (#CCCACA — effectively the same value, rounding only), radius 4px (`radius/sm`), padding 24 | ✅ exact |
| Primary button color | site's own `--primary` (e.g. #006DA3 on East Bay Times) | `color/theme/primary` — mode-bound per site | ✅ same mechanism, confirms it's brand-primary-bound rather than a hardcoded color |
| Backdrop opacity | 45% black | modeled at 50% black (not built into the component — see below) | close, not built as a literal component property either way |

**Not modeled as a component property:** the full-viewport backdrop dimming is a page-level behavior (how/where the modal is invoked), not part of the Modal component itself — same treatment either source would call for.

**Tokens used:** `radius/lg` = 8 and `radius/sm` = 4 (Figma variables in the Spacing & Radius collection), and `color/feedback/error` = #CC2B27 for the nested InLineMessage error variant's icon/title (exact match against the Figma source).

**Parts:** the primary CTA is a Button Primary (Default size) labeled "Send Verification Code"; the two text-link CTAs are Button Linkstyle (see `disclosure.md` §6); the inline error box is the InLineMessage error variant (see `empty-state-status-badge.md`).

**Not specced here:** the "Form Field" sub-component nested in the Body Container slot for flows that collect a code.

**The whole set (2026-10-27):** Device = Desktop, TabletH, TabletV (444px card centered), Mobile, MobileScroll, FOLD (screen width minus 24px each side: 312 at 360, 292 at 340). Spacing: 16px (`spacing/200`) between header, Body Container, InLineMessage and CTAs; 8px (`spacing/100`) between CTAs and between the header icon and title; header icon (optional, in its own container so the subtitle lines up under the title) aligned to the title's first line by baseline alignment, no padding (Karl, 2026-10-27; replaced a raw 6px top padding). Body Container padding 24px (`spacing/300`), 16px (`spacing/200`) on Mobile and Fold. Button Modal Close centered on the card's top-right corner; at least 24px between the card and the screen edge. Closes with the close button, an inline link, or a click outside. Documentation: "ModalsCenter Container" on the Modal Panels page (white format). Its Specifications keep the old Modal Panels color code (magenta margin, green card padding, yellow header, red body padding, blue links and buttons) on in-context samples: the masthead, the 50% overlay below it and the card, at 768, 360 and 340, plus the "Where scroll is needed" sample. The old gray frame was removed 2026-10-27 after its spec moved over. Production differences: design-vs-production entry 31.

**Scrolling and on-screen keyboard (2026-11-04; rules ported from the Embedded Login file's "Keyboard behavior — spec", approved by Karl 2026-11-04).** Replaces the 2026-10-27 MobileScroll placeholder (no top or bottom margin, the whole card scrolled, so the CTAs could scroll off screen).

- **Only the body scrolls.** The header and CTA stack are fixed; the Body Container scrolls; the page behind the modal is scroll-locked. MobileScroll keeps the 24px (`spacing/300`) margin and fills the screen height (360×800 variant).
- **Scroll indicator** whenever the body overflows: 4px wide, `color/gray/300` (3.84:1 on white; passes the 3:1 non-text check), `radius/sm`, 4px (`spacing/050`) inside the Body Container's top-right edge. The Embedded Login file now uses the same indicator (it was black at 35%, about 2.4:1).
- **On-screen keyboard:** the modal lives inside the visible area (screen minus keyboard and browser bars), measured with `window.visualViewport` (`height`, `offsetTop`) and re-measured on every `visualViewport` `resize` and `scroll` event. A centered modal stays centered in the visible area, or fills it with 8px (`spacing/100`) gaps top and bottom when taller. The 8px gap applies only while the keyboard is open; otherwise the 24px margin applies. Left and right margins stay 24px. While the keyboard is open, the overlay and card cover the masthead (feasibility: asked DigiScrum and CMS, 2026-11-04).
- **Compact mode** (visible area under 560px: every phone, tablet landscape): header = icon + title; the subtitle moves to the top of the body; card padding top and bottom 16px (`spacing/200`; approved by Karl 2026-11-05). Only Button Primary stays pinned; the Button Linkstyle links move to the end of the body until the keyboard closes.
- **Focus:** scroll the body, never the page (focus with `preventScroll`), so the field's label sits at least 24px (`spacing/300`) below the top of the Body Container and its hint or error is fully above the CTA area. Next / Tab re-runs it; closing the keyboard restores the normal placement.
- **Errors:** placement depends on the content (InLineMessage fixed above the CTAs, InLineMessage at the top of the scrolling body, or a field-level error under its field). Whichever is used must be fully visible when it appears.
- **Not a modal:** inline content such as the Regiwall in an article scrolls the page (no scroll lock) until the field and its button sit 16px (`spacing/200`) above the keyboard.
- **Named exception:** Embedded Login keeps its fixed 324px panel width instead of 444px / screen width minus 48px.
- **Open question for dev (2026-11-04):** with an 8px gap the corner Button Modal Close doesn't fit. Proposal: when the card reaches the top of the visible area, the close button moves inside the card's top-right corner. Not in the kit until DigiScrum and CMS confirm (and say where that work would live).
- **Figma:** MobileScroll variant `3693:1351` rebuilt; samples on the Modal Panels page (renamed "Modal Panels | 2026.11.04"), ModalsCenter Container › Specifications › "Scrolling and on-screen keyboard": MobileScroll in context (keyboard closed), Mobile keyboard open (iOS Safari, visible 414px), TabletH keyboard open (iPad landscape, visible 368px). The old in-context placeholder stays as "Before".

**Screen readers and keyboard (2026-11-05; every modal, including the Embedded Login panel).** Full list in `components/core/modals-center/modals-center.md` › Accessibility and on the Figma spec list.

- **Dialog:** `role="dialog"`, `aria-modal="true"`, named by the title (an `h2`), described by the subtitle; `role="alertdialog"` only for a short message that needs an answer.
- **Behind it:** masthead, page and ads are `inert` and scroll-locked; the modal is rendered outside them.
- **Open:** focus goes to the title (`tabindex="-1"`), not a field, so the title is announced and a phone doesn't open the keyboard unasked.
- **Keyboard:** Tab / Shift+Tab in reading order (title area, body and fields, InLineMessage links, CTAs, close button last), wrapping inside the card; Esc closes; Enter in a field submits.
- **Close:** a `button` named "Close"; the overlay click is for pointers only. On close, focus returns to the opener (or its replacement, or the start of the main content).
- **Also:** visible focus never hidden behind the CTA area, masthead or keyboard (WCAG 2.4.11); a scrolling body with nothing focusable gets `tabindex="0"`; field errors per the Form Field validation rules; a new step changes the title and moves focus to it; at most a short fade (none with reduced motion); works at 400% zoom.

## 7. ModalsOffset (2026-10-27)

Main file, Modal Panels page, `6497:6263`, container "ModalsOffset Container". The "Sign in to [site] with Apple / Google" panel for logged-out readers. No instances yet.

- **Variants:** Device × Location: XLDesktop + Float (546px wide), SMMobile + FixedFooter (328px: 16px from each edge of a 360 screen), XSFold + FixedFooter (308px at 340). Options: OneTapCTA (Sign in with Apple button), GOTcustom (Google account chooser), AllOptions (both).
- **Panel:** `color/gray/max`, 1px `color/gray/500`, `radius/utility` (5px), `shadow/lg`; Button In-Line Close (40×40) top right.
- **Spacing:** Float 24px padding (`spacing/300`), FixedFooter 16px (`spacing/200`); 16px between the title and the buttons; 8px inside the groups; on FixedFooter the title keeps 32px (`spacing/400`) on its right to clear the close button.
- **Title:** Noto Sans Bold 20 (`font/size/20`), `color/gray/min`, with the Apple or Google mark. The Apple button is the Button Pay component (Apple's style).
- **Google account chooser** (GOTcustom, AllOptions): Google's own UI, drawn for reference; not tokenized and probably not in use (Karl, 2026-10-27).
- **Social One Tap** (Karl, 2026-11-05): where the panel sits and where Float floats are already specified in Figma. It has no text fields, so it never opens the on-screen keyboard; the §6 keyboard rules don't apply.
- **Screen readers and keyboard** (2026-11-05): not a modal. It appears unasked, so it doesn't take or trap focus and the page stays usable (no `aria-modal`, nothing `inert`); `role="dialog"` named by its title, not a live region; placed in the page order right after the masthead; controls in the normal Tab order, Esc closes while focus is inside, close button named "Close sign-in options"; FixedFooter adds matching bottom padding to the page so focused content isn't hidden under it. Details in `components/core/modals-offset/modals-offset.md` › Accessibility.
