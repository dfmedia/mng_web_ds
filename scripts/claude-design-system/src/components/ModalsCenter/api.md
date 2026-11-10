The centered pop-up modal used across the footprint (Reader Dashboard, alerts, forms). Consumer supplies the `title`, `subtitle`, `body`, the CTA labels and handlers, `onClose`, and the `device` for the current breakpoint. The card is a `role="dialog"` with `aria-modal="true"`, labelled by its title and described by its subtitle.

```js
const { ModalsCenter } = window.mng_web_design_system;
// Real use: fixed over the viewport, below a 64px masthead
open && h(ModalsCenter, {
  device: isPhone ? 'Mobile' : 'Desktop', offsetTop: 64,
  title: 'Verify your email', subtitle: 'We sent a code to you@example.com.',
  body: 'Enter the code to finish signing in.',
  topLinkLabel: null, primaryLabel: 'Continue', bottomLinkLabel: 'Resend code',
  onPrimary: submit, onBottomLink: resend, onClose: () => setOpen(false)
})

// Previews and design canvases: render the whole Figma screen in flow
h(ModalsCenter, { device: 'TabletV', inline: true })
```

| Prop | Values | Default |
|---|---|---|
| `device` | `'Desktop'`, `'TabletH'`, `'TabletV'`, `'Mobile'`, `'FOLD'`, `'MobileScroll'` (Mobile with more content than fits) | `'Desktop'` |
| `inline` | render in flow at the Device's Figma size (1280×960, 1024×768, 768×1024, 360×800, 340×882, 360×800) | `false` (fixed) |
| `open` | `false` renders nothing | `true` |
| `offsetTop` | fixed mode: space above the overlay for the masthead | `0` |
| `title`, `subtitle` | text; `subtitle: null` hides it | `'Header Title'`, `'Sub-Title Text'` |
| `showIcon`, `iconName` | header icon | `true`, `'notification'` |
| `body` | Body Container text; `null` hides it | `'Body Section (As Needed)'` |
| `children` | extra Body Container content (e.g. a `FormField`) | |
| `message` | InLineMessage between the body and the CTAs | |
| `topLinkLabel`, `primaryLabel`, `bottomLinkLabel` | default CTA stack; `null` hides one | `'CTA Hyperlink'`, `'CTA Button'`, `'CTA Hyperlink'` |
| `onTopLink`, `onPrimary`, `onBottomLink`, `…Href` | CTA handlers or links | |
| `actions` | replaces the CTA stack | |
| `onClose`, `closeLabel` | close button (Button In-Line Close, inside the card's top-right corner), overlay click, Esc | `'Close'` |
| `role` | `'dialog'`, or `'alertdialog'` for a short message that needs an answer | `'dialog'` |
| `compact` | force compact mode on or off (header = icon + title, subtitle and links move into the body, card padding 16 top and bottom) | automatic: visible area under 560px |
| `keyboardOpen` | force the keyboard-open layout (8px gaps, covers the masthead) | automatic in fixed mode |
| `visibleHeight` | with `inline`: the visible area's height in px, to draw a keyboard-open screen | |

In fixed mode (no `inline`) the modal is rendered at the end of `body` and everything else is made `inert`; the page can't scroll; focus moves to the title; Tab goes through the body, the CTAs and then the close button, and wraps; Esc calls `onClose`; focus returns to where it was when the modal unmounts. When the content is taller than the screen, only the body scrolls, with the scroll indicator. With the on-screen keyboard open the modal fits the visible area, and under 560px it switches to compact mode. With `inline` the same markup renders without the focus and page handling, so documentation pages stay usable.
