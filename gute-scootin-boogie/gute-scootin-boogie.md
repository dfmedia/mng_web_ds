# GuteScootinBoogie: to-do list

> **Started 2026-11-25** (Karl). The to-do list for cleaning up the MNG Web Design System and building the new design system from it.
> Lives in `mng_web_ds/gute-scootin-boogie/` for now; it moves to its own repo when that starts. Written to stand on its own: every item carries what someone needs to pick it up without the old repo.

## How to use this list

- One item per component or piece of work, in the **To do** section, newest at the bottom.
- Each item says what it is, where it lives today, what's decided, and what's left. Links to the old repo are for history only; copy anything the new project needs into the item.
- When an item is done, move it to **Done** with the date and one line on what changed.
- Dates are YYYY-MM-DD. Names follow the source: Figma names in Figma, `CodeName` in code.

## Where things live today (2026-11-25)

| What | Where |
|---|---|
| Figma: main library (MNG Web Design System) | file key `jFHYqhZbJjvWQmDI4myCsd` |
| Figma: WordPress Elements (page templates, Masthead, Blocks) | file key `b1iZxkFwtAYq9rElmnCAzd` |
| Repo (tokens, exports, docs) | https://github.com/dfmedia/mng_web_ds |
| Claude design system (React components built from the exports) | https://claude.ai/artifact/RKJ37zyXP7Wcvm1SDU7nzz, source in `mng_web_ds/scripts/claude-design-system/` |
| Component exports (spec, tokens, previews) | `mng_web_ds/components/<layer>/<slug>/` |

## References

- [WordPress Gutenberg](https://wordpress.org/gutenberg/): the WordPress block editor.

## To do

### 1. Blocks Footer (`BlocksFooter`)

**What it is:** the future site footer: the production Footer's link groups, legal bar and Subscribe Now button, plus a **Stay Informed** email signup. A new design with no production reference yet, so every value is a token.

**Where it lives today**
- Figma: WordPress Elements ▸ Homepage ▸ Blocks, component set `801:1755` (5 variants, `Device` = XS-Fold 340, SM-Mobile 360, MD-TabletV 768, LG-TabletH 1024, XL-Desktop 1280); documentation container `3682:22095`, with the spec and the Gherkin box. Was named Footer_w_signup until 2026-10-30.
- Export: `mng_web_ds/components/wordpress/blocks-footer/` (spec `.md`, `.tokens.json` with 529 tokens, previews), last exported 2026-11-24.
- Code: `BlocksFooter` in the Claude design system (since 2026-11-24), built on the shared Footer layout (`footerView` in `components/Footer/component.js`).

**Decided**
- Spacing: 8px (`spacing/100`) page gutter below 640px and 16px (`spacing/200`) link spacing (the production Footer has 10px and 15px).
- Layout by width:
  - 1040px and up: [Subscribe, Marketplace] | [Stay Informed, About] | [Advertising] | [Contact, Partners] | [Subscribe Now]
  - 800–1039px: [Subscribe, Marketplace] | [Stay Informed, About, Advertising] | [Contact, Partners, Subscribe Now]
  - 640–799px: [Subscribe, Marketplace, Stay Informed, About] | [Advertising, Contact, Partners, Subscribe Now]
  - Below 640px: Stay Informed first, then the link groups as accordion rows (headings are buttons with `aria-expanded`), then Subscribe Now full width.
- Stay Informed: a 2px rule, the heading, then the Email Address Form Field (mail icon, placeholder `email@address.com`) 4px (`spacing/050`) below the heading.
- Behavior (Gherkin in Figma and in the Claude system's notes): the Terms and Conditions show only once the reader starts the form.

**To do**
- [ ] Design the **Terms and Conditions** for Stay Informed (Figma has none; the code shows a checkbox with sample text, "I agree to the Terms of Use and Privacy Policy.", once the reader starts the form).
- [ ] Design a **sign-up button**, or decide that Enter alone submits (Figma has none; the code submits on Enter and passes the email to `onSignup`).
- [ ] Fix the email field at 1040px and up: the column is 214px, so the placeholder is cut off ("email@address.c…"). Options: a shorter placeholder, a wider column, or the field spanning two columns.
- [ ] Decide where it ships first (no production site uses it yet), then check it against that site.
- [ ] Bring it into the new design system: component, tokens, spec and Gherkin, with the items above settled.
- [ ] Bring in each atomic element below first; Blocks Footer is assembled from them.

### Blocks Footer: atomic elements

Every element Blocks Footer is built from, as found in all 5 Figma variants on 2026-11-25. Library components come from the main library; the rest are drawn inside Blocks Footer itself.

#### 1.1 Form Field (library component)
- **Used as:** the Stay Informed email field. `Size=Desktop` (56px input) at 640px and up, `Size=Mobile` (40px input) below; `State=Blank`. Label "Email Address" (Noto Sans Regular 14, `color/gray/min`), placeholder `email@address.com` (Noto Sans Regular 18 Desktop / 16 Mobile, `color/gray/200`), left icon `email`, reserved error row (Noto Sans Regular 18 / 16, `color/feedback/high-error`).
- **Where:** main library, Form Fields page, set `6963:6863`; code `FormField`.
- [ ] Decide whether the footer keeps the reserved error row (it adds empty space under the field) and what the error says (an invalid email).
- [ ] Placeholder cut off in the 214px column at 1040px and up (see item 1).

#### 1.2 Icons: `email` and `arrow-down` (library component)
- **Used as:** `email` in the Form Field's left icon frame; `arrow-down` as the accordion chevron on each group heading below 640px.
- **Where:** main library, Icons set `4693:5`; icon font names in `tokens/icons/icons.json`; code `Icon`.
- [ ] Below 640px, decide whether the open accordion row turns the chevron (`arrow-up`, or a rotation); Figma draws closed rows only.

#### 1.3 Button Primary (library component)
- **Used as:** Subscribe Now. `Icon=None, State=Default`, label uppercase Noto Sans Bold 16 `color/gray/max` on `color/theme/primary`. Hugs its label at 640px and up; full width below.
- **Where:** main library, Buttons page, set `5328:15928`; code `ButtonPrimary`.
- [ ] Every variant uses `Breakpoint=Desktop`, even below 640px where the button is full width; switch those to `Breakpoint=Mobile` or note why not.

#### 1.4 Logo
- **Used as:** the newspaper logo at the top left (240px wide at 640px and up; centered below).
- **Where:** drawn in Blocks Footer as loose vector artwork ("Logo Artwork", 235 × 48, the placeholder Fakeville logo), not the `Logo` component (Newspaper Logos, Favicons, User Pics, file `oXaN4tEoa4GsH4x7kWpAFZ`). Code: the Footer's logo slot (`logo` prop, placeholder by default).
- [ ] Swap the vectors for an instance of the `Logo` component, so each market's logo drops in.

#### 1.5 Group divider
- **Used as:** the 2px `color/gray/min` rule above every link group and above Stay Informed (38 across the 5 variants).
- **Where:** drawn in Blocks Footer as vectors named "Divider".
- [ ] Make it a shared element (a Divider component or a token-backed border on the group), so it isn't redrawn 38 times.

#### 1.6 Group heading
- **Used as:** each link group's title and "Stay Informed": Noto Sans Bold 16, uppercase, `color/gray/min`. Below 640px it's the accordion button.
- **Where:** text in Blocks Footer.
- [ ] Make it a text style (or token set) shared with Footer.

#### 1.7 Footer link
- **Used as:** every link in the groups: Noto Sans Regular 16, `color/gray/min`, 16px (`spacing/200`) apart.
- **Where:** text in Blocks Footer.
- [ ] Capitalization is mixed: some links are forced to Title Case ("Member Services"), others keep their own ("Place a Real Estate Ad", "About Southern California News Group"). Pick one rule.
- [ ] Hover, focus and visited states aren't drawn.

#### 1.8 Legal bar
- **Used as:** the bottom row ("Footer Bottom"): a 1px `color/gray/min` rule above it, then the legal links (Copyright, Privacy Policy, Terms Of Use, Accessibility, Cookie Policy, Arbitration, Powered By WordPress.com VIP, Do Not Sell My Info) in Noto Sans Regular 16, Title Case, `color/gray/200`; centered and wrapping at 640px and up, stacked below.
- **Where:** frame in Blocks Footer; it also carries a hidden `color/gray/max` fill.
- [ ] Remove the hidden fill or decide the legal bar's background.
- [ ] Title Case mangles names ("WordPress.Com VIP", "Terms Of Use"); decide the case rule with the links (1.7).

#### 1.9 Footer background
- **Used as:** the whole footer's fill, `color/gray/600` (#f1efeb).
- **Where:** the variant frames.
- [ ] Confirm `color/gray/600` against the production Footer before building.

#### 1.10 Stay Informed group (assembly)
- **Used as:** divider (1.5) + heading (1.6) + Form Field (1.1), 4px (`spacing/050`) between them; Terms and Conditions and a sign-up button still to design (item 1).
- **Where:** frame "Group - Stay Informed" in each variant; code: the signup form inside `BlocksFooter`.
- [ ] Build it as its own assembly, so it can be reused outside the footer.

## Done

_Nothing yet._
