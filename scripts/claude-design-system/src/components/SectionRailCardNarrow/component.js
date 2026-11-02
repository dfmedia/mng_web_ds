/* Section Rail Card Narrow (WordPress Elements, Homepage, 3352:22067): a narrow section rail (production
   `.landing-four-up .section-highlight`), built raw in production's values (Karl, 2026-11-02): Section Title / Eyebrow
   (Underline, with the chevron), the 1Col Article Card lead and Headline List Items 16px apart, the last with Rule = None.
   Device values are production's breakpoint: (≤799px) the lead has a rule under it, (≥800px) it doesn't. */
var SECTION_RAIL_NARROW_SAMPLE = [
  'Article Headline on News paper homepage in second position on section rail headline list',
  'Article Headline on News paper homepage in third position on section rail headline list',
  'Article Headline on News paper homepage in fourth position on section rail headline list'
];
function SectionRailCardNarrow(props) {
  var d = String(props.device || '(≤799px)');
  var k = d.split(' ')[0];
  var wide = d.indexOf('800') >= 0 || k === 'M' || k === 'L' || k === 'XL';
  var items = props.items || SECTION_RAIL_NARROW_SAMPLE.map(function (t) { return { headline: t }; });
  var root = Object.assign(rest(props, ['device', 'title', 'href', 'lead', 'items', 'headingLevel', 'className']), {
    className: cx('mngds-section-rail-card-narrow', 'mngds-section-rail-card-narrow--' + (wide ? 'from-800' : 'to-799'), props.className)
  });
  return h('div', root,
    h('div', { className: 'mngds-section-rail-card-narrow__header' },
      h(SectionTitleEyebrow, { style: 'Underline', chevron: true, title: props.title != null ? props.title : 'Section Title', href: props.href,
        className: 'mngds-section-rail-card-narrow__title' })),
    h(OneColArticleCard, Object.assign({ headingLevel: props.headingLevel }, props.lead, { style: 'Standard',
      className: cx('mngds-section-rail-card-narrow__lead', props.lead && props.lead.className) })),
    h('ul', { className: 'mngds-section-rail-card-narrow__list' }, items.map(function (it, i) {
      return h('li', { key: i, className: 'mngds-section-rail-card-narrow__item' },
        h(HeadlineListItem, Object.assign({ headingLevel: props.headingLevel }, it, { rule: i === items.length - 1 ? 'None' : 'Default' })));
    })));
}
