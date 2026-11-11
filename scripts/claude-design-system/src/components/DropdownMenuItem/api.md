One option row of a Dropdown Menu. `DropdownMenu` builds these for you; use the row on its own only for a custom listbox.

```js
const { DropdownMenuItem } = window.mng_web_design_system;
h('div', { role: 'listbox', 'aria-label': 'Role' },
  h(DropdownMenuItem, { label: 'Owner', status: 'selected' }),
  h(DropdownMenuItem, { label: 'Guest', showIcon: false }))
```

| Prop | Values | Default |
|---|---|---|
| `label` | the option text | `'Option'` |
| `status` | `'unselected'`, `'selected'` (adds the check and `aria-selected`) | `'unselected'` |
| `interaction` | `'Default'`, `'hover'`, `'pressed'` (forces the look) | `'Default'` |
| `inFocus` | `'True'`, `'False'` (forces the focus ring) | `'False'` |
| `showIcon` / `icon` | Figma Show icon and Icon (instance swap): an icon name for the 16px Icon Slot; the slot stays when it's off | `true` / `'crown'` |
| other props | passed to the row (`id`, `tabIndex`, `onClick`, `onKeyDown`, ...) | |

Rendered as `role="option"`. Production still has the old Button ActionMenu (design-vs-production.md entry 38).
