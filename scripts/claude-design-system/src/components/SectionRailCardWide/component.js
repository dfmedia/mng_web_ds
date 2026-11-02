/* Section Rail Card Wide (WordPress Elements, Homepage, 3709:43975): a wide section rail (production
   `.landing-three-one .section-highlight`), built raw in production's values (Karl, 2026-11-02): Section Title / Eyebrow
   (Underline, with the chevron), 20px (spacing/250), then Feature + List Content Block with the same Device.
   From 800px the rail has 32px (spacing/400) below it. Device values are production's breakpoints. */
function SectionRailCardWide(props) {
  var d = String(props.device || '(≤799px)');
  var k = d.split(' ')[0];
  var device = k === 'M' || k === 'L' || k === 'XL' ? k : '(≤799px)';
  var figmaDevice = { '(≤799px)': '(≤799px)', M: 'M (800–1039px)', L: 'L (1040–1279px)', XL: 'XL (≥1280px)' }[device];
  var root = Object.assign(rest(props, ['device', 'title', 'href', 'feature', 'items', 'headingLevel', 'className']), {
    className: cx('mngds-section-rail-card-wide', 'mngds-section-rail-card-wide--' + (device === '(≤799px)' ? 'stacked' : device.toLowerCase()), props.className)
  });
  return h('div', root,
    h('div', { className: 'mngds-section-rail-card-wide__header' },
      h(SectionTitleEyebrow, { style: 'Underline', chevron: true, title: props.title != null ? props.title : 'Section Title', href: props.href,
        className: 'mngds-section-rail-card-wide__title' })),
    h(FeatureListContentBlock, { device: figmaDevice, feature: props.feature, items: props.items, headingLevel: props.headingLevel }));
}
