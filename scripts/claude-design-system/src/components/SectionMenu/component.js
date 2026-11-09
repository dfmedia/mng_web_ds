/* SectionMenu (WordPress Elements, Menus and Parts, 456:5837): the section menu toggle (View = Closed) and the drawer it opens
   (View = Open). Device = the 5 Masthead widths: "All Sections" and no weather row on XL-Desktop (1040px and up); icon only and
   the weather row below. UserType = subscriber, nonSub, loggedOut sets the calls to action and the account rows. Only one
   section is open at a time (production). Section names and sub-sections come from each site's CMS; the defaults are samples. */
var SECTION_MENU_SECTIONS = [
  { label: 'News', items: ['News', 'Latest Headlines', 'Politics', 'Crime and Public Safety', 'Education', 'Weather'] },
  { label: 'Local' }, { label: 'Obituaries' }, { label: 'Opinion' }, { label: 'Sports' }, { label: 'Things To Do' },
  { label: 'Business' }, { label: 'Real Estate' }, { label: 'Marketplace' }
];
var SECTION_MENU_HEADER_DEVICE = { 'XL-Desktop': 'Desktop', 'LG-TabletH': 'TabletV', 'MD-TabletV': 'TabletV', 'SM-Mobile': 'Mobile', 'XS-Fold': 'Mobile' };
function SectionMenu(props) {
  var device = props.device || 'XS-Fold';
  var open = (props.view || 'Closed') === 'Open';
  var userType = props.userType || (open ? 'subscriber' : 'all');
  var xl = device === 'XL-Desktop';
  var menuId = props.menuId || 'mngds-section-menu';
  var sections = props.sections || SECTION_MENU_SECTIONS;
  var st = React.useState(props.defaultOpenSection != null ? props.defaultOpenSection : 0);
  var openIndex = props.openSection != null ? props.openSection : st[0];
  var setOpen = function (i) { var next = openIndex === i ? -1 : i; if (props.onSectionToggle) props.onSectionToggle(next); st[1](next); };
  var root = Object.assign(rest(props, ['device', 'view', 'userType', 'sections', 'openSection', 'defaultOpenSection', 'onSectionToggle',
    'menuId', 'label', 'homeLabel', 'homeHref', 'weather', 'subscribeHref', 'logInHref', 'logOutHref', 'onToggle', 'className']), {
    className: cx('mngds-section-menu', 'mngds-section-menu--' + slug(device), open && 'mngds-section-menu--open', props.className)
  });
  var header = h(SectionMenuHeader, { device: SECTION_MENU_HEADER_DEVICE[device] || 'Mobile', view: open ? 'Open' : 'Closed',
    label: props.label, menuId: menuId, onClick: props.onToggle, className: 'mngds-section-menu__header' });
  if (!open) return h('div', root, header);
  var rows = [];
  if (userType === 'nonSub' || userType === 'loggedOut') rows.push(h(SectionMenuItem, { key: 'cta', kind: 'CTAButton', ctaHref: props.subscribeHref }));
  if (!xl) rows.push(h(SectionMenuItem, { key: 'wx', kind: 'Weather', weather: props.weather }));
  rows.push(h(SectionMenuItem, { key: 'home', kind: 'main', leftIcon: 'yes', label: props.homeLabel || 'Home', href: props.homeHref || '/' }));
  sections.forEach(function (s, i) {
    var o = typeof s === 'string' ? { label: s } : s;
    if (o.items === false) { rows.push(h(SectionMenuItem, { key: 's' + i, kind: 'main', label: o.label, href: o.href })); return; }
    var items = o.items || [o.label, 'SubSection Item Name', 'SubSection Item Name'];
    rows.push(h(SectionMenuGroup, { key: 's' + i, label: o.label, items: items, listId: menuId + '-' + i,
      view: openIndex === i ? 'Open' : 'Closed', onToggle: function () { setOpen(i); } }));
  });
  if (userType === 'nonSub' || userType === 'loggedOut') rows.push(h(SectionMenuItem, { key: 'sub', kind: 'main', label: 'Subscribe', href: props.subscribeHref }));
  rows.push(userType === 'loggedOut'
    ? h(SectionMenuItem, { key: 'acct', kind: 'main', label: 'Log In', href: props.logInHref })
    : h(SectionMenuItem, { key: 'acct', kind: 'main', label: 'Log Out', href: props.logOutHref }));
  rows.push(h(SectionMenuItem, { key: 'nl', kind: 'CTAMessage' }));
  return h('div', root, header, h('nav', { id: menuId, className: 'mngds-section-menu__drawer', 'aria-label': 'All sections' }, rows));
}
