/* Headline List Item (WordPress Elements, Homepage, 3709:40904): one headline in a section rail's headline list
   (production `.section-highlight ul.headline-list article.headline-only`), built raw in production's values (Karl, 2026-11-02).
   Rule = Default (12px, then a 1px #D7D6D2 rule), None (no rule), Dark (a 1px #AAA7A4 rule right under the text).
   The list sets the 16px between items. The headline is the link when `href` is given. */
function HeadlineListItem(props) {
  var rule = props.rule || 'Default';
  var HL = 'h' + (props.headingLevel || 3);
  var headline = props.headline != null ? props.headline : 'Article Headline on News paper homepage in second position on section rail headline list';
  var root = Object.assign(rest(props, ['rule', 'headline', 'href', 'target', 'headingLevel', 'className']), {
    className: cx('mngds-headline-list-item', 'mngds-headline-list-item--' + slug(rule), props.className)
  });
  return h('article', root,
    h(HL, { className: 'mngds-headline-list-item__headline' },
      props.href ? h('a', { className: 'mngds-headline-list-item__link', href: props.href, target: props.target, rel: props.target ? 'noopener' : undefined }, headline) : headline));
}
