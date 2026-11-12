A small floating panel of actions opened by a trigger button. The component that opens it owns the behavior: give the trigger `aria-expanded` and `aria-controls` (the Popover's `id`), move focus to the first item when it opens, and close it on Esc or a click outside, returning focus to the trigger. `SocialButtons` does all of this for the share bar's More panel.

```js
const { Popover, SocialMediaButton } = window.mng_web_design_system;
h('span', { style: { position: 'relative', display: 'inline-flex' } },
  h(SocialMediaButton, { network: 'Share more', 'aria-expanded': open, 'aria-controls': 'more-panel', onClick: toggle }),
  open && h(Popover, { id: 'more-panel', placement: 'Bottom', anchored: true, 'aria-label': 'More share options' },
    h(SocialMediaButton, { network: 'Email' }), h(SocialMediaButton, { network: 'LinkedIn' })))
```

| Prop | Values | Default |
|---|---|---|
| `placement` | `'Bottom'` (below the trigger, caret on top), `'Top'` (above it, caret below) | `'Bottom'` |
| `anchored` | position it centered on a `position: relative` trigger wrapper, 8px away | `false` (in the flow) |
| children | the Content slot: buttons or links, in a row 8px apart | |
| `id`, `aria-label`, `role` | passed to the panel (`role` defaults to `group`) | |

Use Tooltip / Toggletip for text that describes a control; a Popover holds things you can click.
