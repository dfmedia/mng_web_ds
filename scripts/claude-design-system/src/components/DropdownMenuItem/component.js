/* DropdownMenuItem (MNG Web Design System, Dropdown Menus page, 7543:1879). One option row of a Dropdown Menu
   (Karl, 2026-11-10): a 16px Icon Slot (an icon or empty, so every label starts at the same place; Karl,
   2026-11-11), the label, and a 12px checkmark3 at the right edge on the current choice. `status`, `interaction`
   and `inFocus` force documentation states; real :hover, :active and :focus-visible apply the same.
   Rendered with role="option"; DropdownMenu stacks these in its listbox. */
function DropdownMenuItem(props) {
  var status = props.status || 'unselected';
  var selected = status === 'selected';
  var interaction = props.interaction || 'Default';
  var focus = props.inFocus === true || props.inFocus === 'True';
  var showIcon = !(props.showIcon === false || props.showIcon === 'False');
  var icon = props.icon === undefined ? 'crown' : props.icon;
  return h('div', Object.assign({ role: 'option', 'aria-selected': selected ? 'true' : 'false' },
      rest(props, ['status', 'interaction', 'inFocus', 'showIcon', 'icon', 'label', 'className']), {
      className: cx('mngds-dropdown-menu-item', 'mngds-dropdown-menu-item--' + slug(status),
        interaction !== 'Default' && 'is-' + slug(interaction), focus && 'is-infocus', props.className)
    }),
    h('span', { className: 'mngds-dropdown-menu-item__content' },
      h('span', { className: 'mngds-dropdown-menu-item__icon-slot', 'aria-hidden': 'true' },
        showIcon && icon ? h(Icon, { name: icon, size: 16, className: 'mngds-dropdown-menu-item__icon' }) : null),
      h('span', { className: 'mngds-dropdown-menu-item__label' }, props.label == null ? 'Option' : props.label)),
    selected ? h(Icon, { name: 'checkmark3', size: 12, className: 'mngds-dropdown-menu-item__check' }) : null);
}
