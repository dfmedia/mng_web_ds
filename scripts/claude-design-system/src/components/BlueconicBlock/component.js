/* Blueconic Block (WordPress Elements, Homepage, 3352:20526): the homepage Zone 2 Blueconic list ("Most Popular",
   "Recommended For You"), built raw in production's values (a Blueconic block; Karl 2026-11-02). Was "Blueconic Block
   (Most Popular)". The theme eyebrow title in color/theme/primary, a 2px primary rule, then 10 numbered Blueconic List
   Items: one column at XS (639px and below), two CSS columns from 640px, larger list metrics from 1040px. Fills its column. */
var BLUECONIC_SAMPLE = [
  'Dear Abby: My clothes make her cry, and I feel like I can’t win',
  'Harriette Cole: Every night, my new companion goes missing',
  'Stanford monkeypox case not sex-related, raising questions about transmission',
  'Bay Area city is rated as ‘Happiest City in the U.S.’ in new study',
  'Harriette Cole: He’s a good kid who got in trouble. What’s our next step?',
  'Miss Manners: He needs to know how his son offended me',
  'Ask Amy: The kids’ dad fills his time with TV and cornhole, and I’m filled with resentment',
  'Ask Amy: I gave my granddaughter lots of money, and she still won’t follow my influence cat',
  'Dear Abby: When she started drinking whiskey, I got worried',
  'Watsonville: Three dead following mid-air plane crash'
];
function BlueconicBlock(props) {
  var d = String(props.device || 'XS');
  var device = d.indexOf('1040') >= 0 ? 'l' : (d.indexOf('640') >= 0 || /^(M|S|Tablet)\b/.test(d)) ? 'm' : /^(L|XL|Desktop)\b/.test(d) ? 'l' : 'xs';
  var items = props.items || BLUECONIC_SAMPLE.map(function (t) { return { headline: t }; });
  var Level = props.headingLevel || 'h2';
  var root = Object.assign(rest(props, ['device', 'title', 'items', 'headingLevel', 'className']), {
    className: cx('mngds-blueconic-block', 'mngds-blueconic-block--' + device, props.className)
  });
  return h('section', root,
    h(Level, { className: 'mngds-blueconic-block__title' }, props.title != null ? props.title : 'Most Popular'),
    h('ol', { className: 'mngds-blueconic-block__list' }, items.map(function (it, i) {
      return h('li', { key: i, className: 'mngds-blueconic-block__item' },
        h(BlueconicListItem, Object.assign({}, it, { number: i + 1, device: device === 'l' ? '(≥1040px)' : '(≤1039px)' })));
    })));
}
