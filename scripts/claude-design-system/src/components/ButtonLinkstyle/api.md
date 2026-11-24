A text-link styled button for disclosures and inline CTAs ("Forgot password?"). Underlined brand-primary text at rest; a 1px brand-primary box replaces the underline on Hover, Pressed and InFocus. Consumer supplies `label`, `onClick` or `href`, and optionally an icon.

```js
const { ButtonLinkstyle } = window.mng_web_design_system;
h(ButtonLinkstyle, { label: 'Forgot password?', onClick: reset })
h(ButtonLinkstyle, { label: 'Privacy policy', icon: 'Right', iconName: 'new-tab', href: url, target: '_blank' })  // adds hidden "(opens in a new tab)"
```

| Prop | Values | Default |
|---|---|---|
| `icon` | `'None'`, `'Left'`, `'Right'` | `'None'` |
| `style` | `'1 Row'`, `'Stacked'` (Figma Style; an object is inline CSS) | `'1 Row'` |
| `state` | `'Default'`, `'Hover'`, `'Pressed'`, `'InFocus'`, `'Disabled'` (documentation only) | unset |
| `iconName` | an `Icon` name | `'new-tab'` |
| `label` | text | `'Linkstyle Button'` |
| `href`, `target`, `newTabText` | renders a link; new-tab links get visually hidden text | |
| `disabled` | the Disabled look (`color/gray/400` label and icons, no underline, no box); not focusable | `false` |
| `onClick`, `type` | button attributes | |

The button always hugs its label (`display: inline-flex; max-width: 100%`) and wraps only when its container is narrower. `Style=Stacked` is the documented wrapped case; real layouts normally keep `'1 Row'` and let the container constrain it. When wrapped, `Icon=Left` is left-justified, `None` and `Right` right-justified. One size at every breakpoint (38px tall on one line).
