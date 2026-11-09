/* SectionMenuHeader (WordPress Elements, Menus and Parts, 456:5745): the section menu toggle. Hamburger when the drawer is
   closed, × when it's open; the same size and place in both states (production is one button that swaps its icon).
   Device = Desktop (icon + "All Sections"), TabletV, Mobile (icon only, centered in a 64px box). */
function SectionMenuHeader(props) {
  var device = props.device || 'Desktop';
  var open = (props.view || 'Closed') === 'Open';
  var desktop = device === 'Desktop';
  var label = props.label || 'All Sections';
  var root = Object.assign(rest(props, ['device', 'view', 'label', 'openLabel', 'closeLabel', 'menuId', 'state', 'className']), {
    type: 'button',
    className: cx('mngds-section-menu-header', 'mngds-section-menu-header--' + slug(device), open && 'mngds-section-menu-header--open',
      stateClass(props.state), props.className),
    'aria-expanded': open ? 'true' : 'false',
    'aria-controls': props.menuId || undefined,
    'aria-label': desktop ? undefined : (open ? (props.closeLabel || 'Close menu') : (props.openLabel || 'Open menu of all sections'))
  });
  return h('button', root,
    h('span', { className: 'mngds-section-menu-header__icon' }, h(Icon, { name: open ? 'close' : 'hamburger', size: 16 })),
    desktop ? h('span', { className: 'mngds-section-menu-header__label' }, label) : null);
}
