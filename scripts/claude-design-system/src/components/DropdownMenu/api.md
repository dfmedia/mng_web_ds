A trigger that opens a list of choices; the open menu lists every choice as a `DropdownMenuItem`, with a check on the current one. Give it an `aria-label` (or `aria-labelledby`) naming what is chosen.

```js
const { DropdownMenu } = window.mng_web_design_system;
const roles = [{ value: 'owner', label: 'Owner', icon: 'crown' }, { value: 'guest', label: 'Guest' }];
h(DropdownMenu, { options: roles, value: role, onChange: v => setRole(v), 'aria-label': 'Role' })
h(DropdownMenu, { options: roles, value: 'owner', showChevron: false, 'aria-label': 'Role' }) // read-only row
```

| Prop | Values | Default |
|---|---|---|
| `options` | `[{ value, label, icon? }]`; `icon` is an icon name for the Icon Slot (left empty when missing) | Owner (crown), Guest |
| `value` / `defaultValue` / `onChange(value, option)` | the current choice; controlled when `value` is given | the first option |
| `open` | `'True'`, `'False'` or a boolean: forces the menu open or closed (documentation); leave it out in product use | menu opens and closes itself |
| `defaultOpen`, `onOpenChange(open)` | uncontrolled start state; called on every open / close | `false` |
| `style` | `'white'` (`color/gray/max`) or `'gray'` (`color/gray/600`, for rows on gray/600); an object is passed through as inline styles | `'white'` |
| `interaction` | `'Default'`, `'hover'`, `'pressed'` (forces the look) | `'Default'` |
| `inFocus` | `'True'`, `'False'` (forces the focus ring) | `'False'` |
| `showIcon` | Figma Show icon: show the current choice's icon in the Icon Slot (the slot stays, so labels line up) | `true` |
| `showChevron` | Figma Show chevron. `false` is the read-only row: no chevron, no menu | `true` |
| `icon`, `label` | override the trigger's icon and text | from the current choice |
| `width` | fixed width (number = px); otherwise it fits the longest choice, at least 100px | auto |
| `inline` | keeps the open menu in the flow instead of over the page | `false` |
| `aria-label`, `aria-labelledby`, `id`, `disabled` | naming and ids for the trigger and listbox | |

Keyboard: Enter, Space or Down / Up Arrow opens it on the current choice; arrows, Home and End move; Enter or Space picks; Esc closes and focus goes back to the trigger; Tab closes and moves on. A click outside closes it. Not in production yet.
