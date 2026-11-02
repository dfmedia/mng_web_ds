/* Feature + List Content Block (WordPress Elements, Homepage, 3484:66933): the content of a wide section rail, built raw in
   production's values (Karl, 2026-11-02): Horizontal Feature Card and a list of Headline List Items, 16px (spacing/200) apart.
   Device values are production's breakpoints: (≤799px) stacked with rules, M (800–1039px) the list under the feature's text,
   L (1040–1279px) and XL (≥1280px) the feature and the list side by side. */
var FEATURE_LIST_SAMPLE = [
  'Article Headline on News paper homepage in second position on section rail headline list',
  'Article Headline on News paper homepage in third position on section rail headline list',
  'Article Headline on News paper homepage in fourth position on section rail headline list'
];
function FeatureListContentBlock(props) {
  var d = String(props.device || '(≤799px)');
  var k = d.split(' ')[0];
  var device = k === 'M' || k === 'L' || k === 'XL' ? k : '(≤799px)';
  var mod = device === '(≤799px)' ? 'stacked' : device.toLowerCase();
  var items = props.items || FEATURE_LIST_SAMPLE.map(function (t) { return { headline: t }; });
  var lastRule = device === 'L' || device === 'XL' ? 'None' : 'Dark';
  var root = Object.assign(rest(props, ['device', 'feature', 'items', 'headingLevel', 'className']), {
    className: cx('mngds-feature-list-content-block', 'mngds-feature-list-content-block--' + mod, props.className)
  });
  var list = h('ul', { className: 'mngds-feature-list-content-block__list' }, items.map(function (it, i) {
    return h('li', { key: i, className: 'mngds-feature-list-content-block__item' },
      h(HeadlineListItem, Object.assign({ headingLevel: props.headingLevel }, it, { rule: i === items.length - 1 ? lastRule : 'Default' })));
  }));
  var figmaDevice = { '(≤799px)': '(≤799px)', M: 'M (800–1039px)', L: 'L (1040–1279px)', XL: 'XL (≥1280px)' }[device];
  return h('div', root,
    h('div', { className: 'mngds-feature-list-content-block__feature' },
      h(HorizontalFeatureCard, Object.assign({ headingLevel: props.headingLevel }, props.feature, { device: figmaDevice }))),
    device === 'M' ? h('div', { className: 'mngds-feature-list-content-block__list-column' }, list) : list);
}
