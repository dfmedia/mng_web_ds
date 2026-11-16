/* Tab Nav Item (WordPress Elements, Menus and Parts, 3629:44949).
   One tab of the For You tab bar: a <button role="tab">; Label Container (12/16 padding) over a 2px Underline.
   `selected` (or state 'Active') shows the theme-primary underline and sets aria-selected. */
function TabNavItem(props) {
  var state = props.state;
  var selected = props.selected != null ? !!props.selected : state === 'Active';
  var forced = state === 'Active' ? null : stateClass(state);
  return h('button', Object.assign(rest(props, ['state', 'selected', 'label', 'controls', 'className', 'type']), {
      type: props.type || 'button',
      role: 'tab',
      'aria-selected': selected ? 'true' : 'false',
      'aria-controls': props.controls || undefined,
      className: cx('mngds-tab-nav-item', selected && 'is-active', forced, props.className)
    }),
    h('span', { className: 'mngds-tab-nav-item__label-container' },
      h('span', { className: 'mngds-tab-nav-item__label' }, props.label != null ? props.label : props.children != null ? props.children : "Editor's Picks")),
    h('span', { className: 'mngds-tab-nav-item__underline', 'aria-hidden': 'true' }));
}
