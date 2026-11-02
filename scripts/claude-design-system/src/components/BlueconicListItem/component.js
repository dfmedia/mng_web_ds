/* Blueconic List Item (WordPress Elements, Homepage, 3704:40676): one numbered headline in the Blueconic Block, built raw
   in production's values (a Blueconic block, outside our WordPress themes; Karl 2026-11-02). Was "Most Popular List Item".
   32px theme-primary number circle, 10px, then the headline (theme heading family, Bold 16, #000). 16px above, 5px below
   (Bold Coastal). Device = production's breakpoint for the font metrics: (≤1039px) 17.07px line height, (≥1040px)
   16.94px with -0.32px letter spacing. The headline is the link when `href` is given. Fills its column. */
function BlueconicListItem(props) {
  var d = String(props.device || '(≤1039px)');
  var big = d.indexOf('1040') >= 0;
  var root = Object.assign(rest(props, ['device', 'number', 'headline', 'href', 'target', 'className']), {
    className: cx('mngds-blueconic-list-item', big && 'mngds-blueconic-list-item--1040', props.className)
  });
  var headline = props.headline != null ? props.headline : 'Dear Abby: My clothes make her cry, and I feel like I can’t win';
  var inner = [
    h('span', { key: 'n', className: 'mngds-blueconic-list-item__number', 'aria-hidden': 'true' }, props.number != null ? props.number : 1),
    h('span', { key: 'h', className: 'mngds-blueconic-list-item__headline' }, headline)
  ];
  return h('div', root, props.href
    ? h('a', { className: 'mngds-blueconic-list-item__link', href: props.href, target: props.target, rel: props.target ? 'noopener' : undefined }, inner)
    : h('div', { className: 'mngds-blueconic-list-item__link' }, inner));
}
