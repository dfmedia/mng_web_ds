/* Article Status Badge (WordPress Elements, Homepage, 3344:63995): the label above a story's headline.
   Type = Subscriber (production `.subscriber-only-tag`: color/theme/primary-dark chip), Sponsored (placeholder: color/theme/secondary chip, raw #141414 text) or None (nothing).
   White Noto Sans Regular 13 caps, 22.652px line height, 0 x 4px padding; as wide as its text (matches production, Karl 2026-11-02). */
function ArticleStatusBadge(props) {
  var type = props.type || 'Subscriber';
  if (type === 'None') return null;
  var label = props.label != null ? props.label : (type === 'Sponsored' ? 'Sponsored content' : 'Subscriber Only');
  var root = Object.assign(rest(props, ['type', 'label', 'className']), {
    className: cx('mngds-article-status-badge', 'mngds-article-status-badge--' + slug(type), props.className)
  });
  return h('span', root, label);
}
