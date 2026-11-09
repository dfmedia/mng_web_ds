/* SectionMenuGroup (WordPress Elements, Menus and Parts, 3740:29156): a section with subcategories in the section menu drawer.
   The section row is a button that opens and closes its list (aria-expanded, aria-controls); the first sub-item is always the
   section's own page (Karl, 2026-11-06). One group open at a time is SectionMenu's job; two levels only. */
var SECTION_MENU_GROUP_SAMPLE = ['Section Item Name', 'SubSection Item Name', 'SubSection Item Name', 'SubSection Item Name',
  'SubSection Item Name', 'SubSection Item Name'];
function SectionMenuGroup(props) {
  var open = (props.view || 'Closed') === 'Open';
  var label = props.label || 'Section Item Name';
  var listId = props.listId || ('mngds-smg-' + slug(typeof label === 'string' ? label : 'section'));
  var items = props.items || SECTION_MENU_GROUP_SAMPLE;
  var root = Object.assign(rest(props, ['view', 'label', 'items', 'listId', 'onToggle', 'className']), {
    className: cx('mngds-section-menu-group', open && 'mngds-section-menu-group--open', props.className)
  });
  return h('div', root,
    h(SectionMenuItem, { kind: 'main', withSubItems: 'yes', view: open ? 'open' : 'closed', label: label, controls: listId, onClick: props.onToggle }),
    h('ul', { id: listId, className: 'mngds-section-menu-group__list', hidden: !open },
      items.map(function (it, i) {
        var o = typeof it === 'string' ? { label: it } : it;
        return h('li', { key: i }, h(SectionMenuItem, { kind: 'subItem', label: o.label, href: o.href }));
      })));
}
