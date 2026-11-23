# Embedded Login (DS page) — notes and spec text backup

> **Backed up 2026-11-23**, before the Gherkin rewrite (DS | Office Hours feedback, 2026-11-23). Main file `jFHYqhZbJjvWQmDI4myCsd`, page "Embedded Login | 2026.11.20" (`7651:2`). Full text of every Dev Mode note on the page (5) and of the Specs column text blocks (`7654:617`) as they were. To restore a note, paste its Markdown back into the annotation; to restore a text block, paste its text and reapply the segment styles listed under it.

## Dev Mode notes (5)

### 1. Footer STICKY (`7654:664`, COMPONENT) · note 0 · category: none

```markdown
**Main button style:** on screens with fields it starts as Button Tertiary and switches to Button Primary as soon as any field or code box has a value (typed or autofilled); back to Tertiary if every field is emptied. Works in both styles; tapping with empty fields shows the field errors.
```

### 2. OverlayContainers (`7654:903`, COMPONENT_SET) · note 0 · category: Development

```markdown
**Embedded Login panel**
- Width **324px** in every placement and device. Screens narrower than 340px: screen width − 16px.
- Parts: **Header** (fixed), **Body** (the only scroll container), **Footer** (fixed, holds the main button).
- Height hugs content; if taller than the visible area, it fills it (8px gaps) and the Body scrolls.
- **Position**: phones (XS, SM) always use **BottomDocked**, for every view. Tablets and desktop use **CenterScreen** (Standard view) or **NearLogin** (Social One Tap view: 80px from top, right-aligned 40px). Make placement configurable.
- **Keyboard**: Closed / Open. Open = on-screen keyboard showing (touch devices only; not XL-Desktop, not NearLogin/One Tap). Compact mode: see the Keyboard open note.
- **Show keyboard guide**: toggles the dashed visible-area outline and measurement label (documentation only, not built).
- Keyboard rules: "Keyboard behavior" block at the bottom of the spec column.
```

### 3. OverlayContainers (`7654:903`) · note 1 · category: Interaction

```markdown
**Keyboard open: applies to every Keyboard=Open screen**
- The panel lives inside the visible area (screen minus keyboard and browser bars), read from `window.visualViewport`. Never hard-code keyboard heights.
- CenterScreen: centered in the visible area; if taller, fills it with 8px gaps top and bottom. BottomDocked: sits on top of the keyboard; max height = visible area − 8px.
- Visible area < 560px → **compact mode**: header 48px; footer = main button only. "Need an account" and Terms move to the end of the body until the keyboard closes.
- **Body** is the only scroll container (`overflow-y: auto; overscroll-behavior: contain`). On focus, use `preventScroll`, then scroll the body so the field's label sits ≥24px below the header with its hint/error fully above the footer. The page behind is scroll-locked.
- Re-fit on every `visualViewport` resize/scroll: autofill and keyboard suggestion rows can't be turned off, and the keyboard changes height while typing (autofill row, 123 layout, browser bars hiding).
- Assume the page does **not** shrink when the keyboard opens (iOS). QA tests browsers that do and don't.
- Visible areas used in the mockups (approximate): XS Samsung ≈ 539px, SM iOS Safari ≈ 414px, Android Chrome ≈ 587px, iPad portrait ≈ 644px, iPad landscape ≈ 368px. Under 560px = compact mode. The on-canvas guide label on each keyboard-open screen shows its numbers.
```

### 4. OverlayContainers (`7654:903`) · note 2 · category: Development

```markdown
**Field settings: every email and password field in this panel**
- Email: `type="email"`, `autocomplete="email"` (sign-in and register; the user name is the email address), `autocapitalize="none"`, `autocorrect="off"`, `spellcheck="false"`, `enterkeyhint="next"`.
- Password (sign-in): `autocomplete="current-password"`, `enterkeyhint="go"`.
- Create / Re-enter password: `autocomplete="new-password"`; last field `enterkeyhint="go"`.
- Input text ≥16px (prevents iOS zoom). Validate on blur or submit, never on focus.
```

### 5. OverlayContainers (`7654:903`) · note 3 · category: Accessibility

```markdown
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` = panel title.
- On open, move focus into the panel; trap focus while open; **Esc** closes and returns focus to the trigger.
- Close button needs an accessible name ("Close").
- Errors: `role="alert"`, `aria-invalid` on affected fields, error text linked with `aria-describedby`.
```

## Specs column text blocks

Segment styles are listed as `start–end: style, color`. Colors: `gray/min` = variable `VariableID:3749:17`; `gray/200` = `VariableID:3749:25`; `#1F1F1F` = raw (0.1216); green = raw (0.09, 0.72, 0.09); blue = raw (0.259, 0.522, 0.957); magenta = raw (1, 0, 1); dark magenta = raw (0.761, 0, 0.478); red = raw (0.8, 0.169, 0.153); purple = raw (0.707, 0.162, 1); teal = raw (0, 0.459, 0.502); orange = raw (1, 0.497, 0.162); `#141414` = raw (0.078).

### Header spec (`7654:832`, in `7654:821`) · Noto Sans 16 · unordered list

```text
width: 324px 
height: 64px
Corners: top left/right:8px radius; bottom left/right:0px radius
Close button: See InLine Containers for specs.
Padding left/right: 32px
Padding top/bottom: 16px 
Market Logo Container: Fill header
Drop shadow: blur = 8px, #000000 @25%

With the on-screen keyboard open (added 2026.11.04):
• Compact mode (visible area under 560px: all phones, tablet landscape): height 48px; padding top/bottom 8px. Logo row only.
```

Segments: 0–139 Regular gray/min · 139–164 green · 164–190 blue · 190–225 magenta · 225–263 gray/min · 263–264 #1F1F1F · 264–317 Bold dark magenta · 317–441 Regular #1F1F1F.

### Body spec (`7654:853`, in `7654:833`) · Noto Sans 16 · unordered list

```text
width: 324px 
height: expand to hold content.
Corners: 0px radius
Padding left/right: 32px
Padding: 16px
Spacing: 16px
Scroll Bar: Body container expands to hug content. However, the entire Embedded Login Panel either hugs the Header, body, and footer, or expands to fill the device screen (with padding). In the case where the body container is taller, the scroll bar appears, and ONLY THE BODY container scrolls, leaving Header and footers sticky at top and bottom of the panel. Scroll indicator (2026-11-04): 4px wide, Grey-300 (color/gray/300, #838280; 3.84:1 on white), radius/sm, 4px in from the right edge; shown whenever the body overflows. Same as MNG Web Design System › ModalsCenter.
Section separators:
HRs: Grey-500, 1px solid, fill width
Text: NotoSans Regular (400) 16px, #Grey-Min, text styling depends on content.
Padding: 8px
Other elements within the body container have existing specifications:
InLine Error panels (adjusted for this space)
inline Hyperlinks
Social Buttons
Form Fields
Hyperlink styled buttons

With the on-screen keyboard open (added 2026.11.04):
The body is the only scroll container. Header and footer stay fixed; the page behind the panel is scroll-locked.
When a field gets focus, scroll the body (never the page) so the field's label sits ≥24px below the header and its hint/error is fully above the footer.
Show the scroll bar whenever the body overflows.

Component properties (added 2026.11.20):
Content: Log In, Register, Social One Tap, or a password reset step (Reset 1 Email · Link, Reset 2 Link sent, Reset 3 New password, Reset 4 Password updated, Reset 1 Email · Code, Reset Alt Enter code).
Social buttons: Full width (stacked) or Icons only (one centered row, as on the Regiwall). Log In and Register.
Show error banner: on/off. One banner slot, below the OR divider and above the fields; pick the message in the Error banner's Message property.
Show scroll indicator: on/off. Turn it on whenever the body overflows; pick Top, Middle or Bottom in its Position property.
Field states (Filled, Focus, Error) are set on the DS Form Field instances inside the Body.
```

Segments: 0–66 Regular gray/min · 66–91 green · 91–119 blue · 119–695 red · 695–715 gray/min · 715–752 gray/200 · 752–831 gray/min · 831–844 purple · 844–1031 gray/min · 1031–1032 #1F1F1F · 1032–1085 Bold dark magenta · 1085–1400 Regular #1F1F1F · 1400–1442 Bold #1F1F1F · 1442–2116 Regular #1F1F1F.

### Footer spec (`7654:874`, in `7654:854`) · Noto Sans 16 · unordered list · gray/min

```text
width: 324px 
height: expand to hold content.
Corners: top left/right: 0px radius; bottom left/right: 8px radius
Other elements within the body container have existing specifications:
Buttons
CTA Text: Noto Sans Regular (400), 14pt, Grey-Min
Hyperlink styled buttons
Padding: 8px
Spacing: 8px
Drop shadow: blur = 8px, #000000 @25%

T&S container:
bg: grey-200
text: (use inline hyperlink styling); color is grey-min
Padding top/bottom: 16px
Padding left/right: 8px
Spacing: 8px

With the on-screen keyboard open (added 2026.11.04):
Compact mode: the footer keeps the main button only. "Need an account? / Already have an account?" and the Terms & Privacy bar move to the end of the body until the keyboard closes.
The main button is always visible above the keyboard.

Main button style (added 2026.11.17, updated 2026.11.20):
Screens with fields: Continue, Create Account, Send link, Send code, Verify Code and Save password start as MNG Web DS Button Tertiary.
As soon as any field or code box has a value, the button switches to Button Primary. If every field is emptied again, it goes back to Tertiary.
Values the browser autofills, and an email kept after an error, count as entered.
The button works in both styles: tapping it with empty fields shows the field errors.

Component properties (added 2026.11.20):
Main button: Button Tertiary or Button Primary (DS, Mobile). The label is the button's own text.
Show main button: on/off.
Show link: on/off. Link question is a text property; the link label is the Button Linkstyle text.
Show Terms: on/off (Terms of Service • Privacy Policy row).
One main button + link row serves Log In, Register and Password reset; set the texts per screen.
```

Segments: 0–479 Regular · 479–532 Bold · 532–769 Regular · 769–827 Bold · 827–1276 Regular · 1276–1317 Bold · 1317–1694 Regular (all gray/min).

### Placements · Standard Panel view (`7654:1538`, in `7654:1500`) · Noto Sans 16

```text
Embedded Log In container width is always 324px, on all devices and in every placement (including bottom-docked). On screens narrower than 340px, use the screen width minus 16px. The height depends on the contents:
If the body contents are larger than the screen, scroll bar is present and ONLY THE BODY container scrolls. 
Header and Footer are always static at top/bottom of the container.
If the body contents are smaller than the screen, the entire Embedded Log In container height contracts to hug all contents.
Standard view: on phones (XS, SM) the panel docks to the bottom of the screen; on tablets and desktop it is centered in the middle of the screen.
Social One Tap view will position the panel below the Log In buttons in the Header. 
the panel should sit 80px from the top of the viewpoint (this allows for the Account Menu graphics to be visible behind the panel)
on devices with a wider viewpoint, right-align the panel with a 40px margin-right
Min Padding top/bottom: 16px 
Min Padding left/right: 8px
Background overlay (covers all of the device view port): #000000 @ 25%


With the on-screen keyboard open (added 2026.11.04):
• The panel lives inside the visible area (screen minus keyboard and browser bars), measured with window.visualViewport.
• Standard view on phones: sits on top of the keyboard (bottom-docked); max height = visible area − 8px.
• Standard view on tablets: stays centered in the visible area; if it's taller, it fills it with 8px gaps top and bottom and the body scrolls.
• Closing the keyboard returns the panel to its normal placement.
• Assume the page does not shrink when the keyboard opens (iOS behavior). Size and place the panel from visualViewport so it also works on browsers that do shrink the page; QA tests both.
• Full rules and examples: "Keyboard behavior" block at the bottom of this column.

Configurable options and defaults (added 2026.11.17):
• Footer items. Default: the primary button, the "or" link (Need an account? / Already have an account?) and the Terms row. Compact mode (keyboard open, visible area under 560px): primary button only.
• Overlay opacity. Default: #000000 @ 25%.
• Tap the overlay to close: Never / Always / Only when the form is empty. Default: Only when the form is empty, meaning every field is empty (including autofill) and no field has focus. If a field has focus, the tap only takes focus out of the field and closes the keyboard. The close button and Esc always close the panel.
```

Segments: 0–215 Regular gray/min, no list · 215–748 gray/min, unordered · 748–879 teal · 879–961 orange · 961–991 blue · 991–1019 magenta · 1019–1090 gray/min · 1090–1092 #1F1F1F · 1092–1145 Bold dark magenta · 1145–1852 Regular #1F1F1F · 1852–1906 Bold dark magenta · 1906–2473 Regular #1F1F1F (all from 215 unordered).

### Placements · Social One Tap view (`7654:1571`, in `7654:1550`) · Noto Sans 16 · no list · #141414

```text
Uses the same container rules as the Standard Panel view (width, height, scrolling, padding, overlay).

Placement:
Phones (XS, SM): docked to the bottom of the screen, like every other view (decision 2026-11-04).
Tablets and desktop: the panel sits below the Log In buttons in the Header, 80px from the top of the viewport, so the Account Menu graphics stay visible behind it. Right-align it with a 40px margin-right.

With the on-screen keyboard open (added 2026.11.04):
• One Tap has no text fields, so it never opens the keyboard.
• If a field is ever added: phones follow the bottom-docked keyboard rules; tablets keep the 80px top anchor and cap the height at the visible area; the body scrolls.
• Full rules: "Keyboard behavior" block at the bottom of this column.
```

Segments: 0–104 Regular · 104–418 Bold · 418–419 Regular · 419–472 Bold dark magenta · 472–770 Regular.

### Keyboard behavior · rules (`7654:1580`, in `7654:1577`) · Noto Sans 15 · #1F1F1F

```text
KEYBOARD CLOSED — placements as designed today
• Phones (XS, SM): every view docks to the bottom of the screen, including Social One Tap (decision 2026-11-04).
• CenterScreen (tablets, desktop): centered in the viewport.
• NearLogin (Social One Tap view, tablets and desktop): 80px from the top; right-aligned with 40px margin on wide screens.
• Bottom-docked (every view on phones): fixed to the bottom edge of the screen.

KEYBOARD OPEN — the panel always lives inside the visible area (screen minus keyboard and browser bars)
• CenterScreen → stays centered in the visible area; if it's taller than the visible area, it fills it (8px gap top and bottom).
• NearLogin → keeps its top anchor; height is capped at the visible area minus 8px.
• Bottom-docked → rides the top of the keyboard; height is capped at the visible area minus 8px.
• On tablets in landscape there's so little room that the panel fills the visible area.

COMPACT MODE (visible area under 560px: every phone, iPad landscape)
• Header shrinks to 48px (logo row only).
• Footer = primary button only. "Need an account? / Sign up" and Terms & Privacy move to the end of the body until the keyboard closes.

SCROLLING (for every modal panel; to be ported to MNG Web DS → Modal Panels → MobileScroll)
• Header and footer never scroll. The body is the only scroll area, and the page behind the panel is locked.
• When a field gets focus, scroll the BODY (never the page) so the field's label is at least 24px below the header, and its hint or error is fully above the footer.
• Show a scroll indicator whenever the body has more content than fits. Indicator: 4px wide, color/gray/300 (#838280; 3.84:1 on white, passes the 3:1 non-text contrast check), radius/sm, 4px from the body's right edge. Replaces black at 35% (about 2.4:1, which failed). Same as MNG Web Design System › ModalsCenter (2026-11-04).
• Moving between fields (Next / Tab) re-runs the same scroll rule. Closing the keyboard returns the panel to its keyboard-closed placement.

WIDTH
• 324px for every placement, including bottom-docked. On screens narrower than 340px: screen width − 16px.
• The Embedded Login panel is its own variant of the MNG Web Design System modal (which is 444px / screen − 48px), but it follows the same scrolling rules.

ASSUMPTION
• Design for pages that do NOT shrink when the keyboard opens (iOS). The visualViewport approach also works where the page does shrink; QA tests both.

WHY: in 14 of the 19 keyboard-open screenshots in the audit the primary button was hidden, and in 4 the focused field or its error message was hidden too.
```

### Keyboard behavior · example captions (Noto Sans 15 · #1F1F1F)

**Phone (XS) · bottom-docked · email focused** (`7654:1585`)

```text
1. The sheet rides the keyboard: its bottom edge sits on the top of the keyboard and moves up with it.
2. Visible area is under 560px, so compact mode: 48px header; footer = Continue only. "Need an account?" and the Terms band move to the end of the body until the keyboard closes.
3. Max height = visible area − 8px. Only the body scrolls; the focused field's label sits 24px below the header.
4. When the keyboard closes, the sheet drops back to the bottom edge at its normal height.

BUILD NOTES (assume the page does NOT shrink when the keyboard opens; that's iOS behavior):
• Position the sheet with bottom: 0 plus translateY(−(innerHeight − visualViewport.height − visualViewport.offsetTop)), and set max-height from visualViewport.height. Re-run on every visualViewport "resize" and "scroll" event.
• On browsers that do shrink the page (e.g. Firefox Android), the same formula returns 0 and still works. QA tests both.
• Expect a short lag on iOS: it reports the final keyboard height at the end of the slide. Use a 200–250ms ease-out transition so the move reads as one motion.
• Focus fields with preventScroll so the browser doesn't also scroll the page.
```

**Phone (SM) · password focused, error showing** (`7654:1590`)

```text
1. Same rules as the XS example; iOS leaves less room, so the body window is shorter.
2. iOS does NOT resize the page for the keyboard: size and place the panel from visualViewport (height + offsetTop) and re-check on every resize/scroll event.
3. The hint or error under the focused field is part of the scroll target, so it's never hidden under the keyboard's form bar.
4. Return key on password = "Go" (enterkeyhint) and submits.
```

**Tablet portrait · email focused** (`7654:1595`)

```text
1. Enough room: header stays full height; footer keeps both the button and "Need an account?".
2. Panel slides up to the top of the visible area and caps its height to it; body scrolls.
3. If the whole panel fits in the visible area, it stays centered in the visible area instead (no jump to the top).
```

**Tablet landscape · password focused** (`7654:1600`)

```text
1. Visible area < 560px → compact rules, same as phones: 48px header, footer = primary button only.
2. This is the tightest case: less room above the keyboard than on a phone.
3. Panel stays horizontally centered (or right-aligned for NearLogin).
```

**Regiwall (inline in article) · email focused** (`7654:1610`)

```text
1. The Regiwall is an inline card in the article, not a modal panel, so the page scrolls and there's no scroll lock.
2. When the email field gets focus, scroll the page so the field AND the Subscribe button are above the keyboard, with 16px to spare. Set scroll-margin-bottom on the field (or call scrollIntoView on the Button Row).
3. The share icons below the card can stay hidden under the keyboard.
4. Return key on email = "Go" (enterkeyhint) and submits, since there is no second field.
```

### Unchanged headings and labels (for reference)

- Components subtitle (`7654:627`): "These sets work together. 1 · Header, Body and Footer are the building blocks. …" (not a behavior block; left as is).
- Keyboard behavior subtitle (`7654:1575`), rule-card subtitle (`7654:1579`), row labels (`7654:882`, `7654:884`, `7654:886`, `7654:888`, `7654:890`) and example titles: left as is.
