/* Horizontal Feature Card (WordPress Elements, Homepage, 3709:41113): the lead story of a wide section rail
   (production `.landing-three-one .section-highlight .feature-medium`), built raw in production's values (Karl, 2026-11-02).
   A 4:3 image, then the CardSecondary headline and the excerpt: stacked below 800px, side by side from 800px.
   Device values are production's breakpoints: (≤799px), M (800–1039px), L (1040–1279px), XL (≥1280px). */
function HorizontalFeatureCard(props) {
  var d = String(props.device || '(≤799px)');
  var k = d.split(' ')[0];
  var device = k === 'M' || k === 'L' || k === 'XL' ? k.toLowerCase() : 'stacked';
  var HL = 'h' + (props.headingLevel || 3);
  var headline = props.headline != null ? props.headline : 'Article Headline on News paper homepage in Wide rail lead position';
  var showExcerpt = props.showExcerpt !== false;
  var root = Object.assign(rest(props, ['device', 'headline', 'excerpt', 'showExcerpt', 'image', 'imageAlt', 'href', 'target',
    'headingLevel', 'className']), {
    className: cx('mngds-horizontal-feature-card', 'mngds-horizontal-feature-card--' + device, props.className)
  });
  return h('article', root,
    h('div', { className: 'mngds-horizontal-feature-card__content' },
      h('div', { className: 'mngds-horizontal-feature-card__figure', 'aria-hidden': props.image ? undefined : 'true' },
        h('div', { className: 'mngds-horizontal-feature-card__image' },
          h(ArticleImage, { src: props.image, alt: props.imageAlt, className: 'mngds-horizontal-feature-card__img' }))),
      h('div', { className: 'mngds-horizontal-feature-card__text' },
        h(HL, { className: 'mngds-horizontal-feature-card__headline' },
          props.href ? h('a', { className: 'mngds-horizontal-feature-card__link', href: props.href, target: props.target, rel: props.target ? 'noopener' : undefined }, headline) : headline),
        showExcerpt ? h('p', { className: 'mngds-horizontal-feature-card__excerpt' },
          props.excerpt != null ? props.excerpt : 'Vanroy Evan Smith, 39, of Long Beach is being held on $1 million bail.') : null)));
}
