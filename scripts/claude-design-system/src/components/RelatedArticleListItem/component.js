/* Related Article List Item (WordPress Elements, Homepage, 3334:43017): one related story in the Zone 1 Lead Article Card's
   Related list (production `.feature-primary ul.primary-related li`). A 16px bullet column with a 4px color/gray/black dot,
   then the title and its time inline in one text block, as production sets them (`h4` and `time` both inline).
   The list sets the 4px between items. The title is the link when `href` is given. */
function RelatedArticleListItem(props) {
  var HL = 'h' + (props.headingLevel || 4);
  var headline = props.headline != null ? props.headline : 'Game Day: Turning LeBron James’ record numbers into words';
  var time = props.time != null ? props.time : '56 mins ago';
  var root = Object.assign(rest(props, ['headline', 'href', 'target', 'time', 'dateTime', 'headingLevel', 'className']), {
    className: cx('mngds-related-article-list-item', props.className)
  });
  return h('article', root,
    h('span', { className: 'mngds-related-article-list-item__bullet', 'aria-hidden': 'true' },
      h('span', { className: 'mngds-related-article-list-item__dot' })),
    h('div', { className: 'mngds-related-article-list-item__content' },
      h(HL, { className: 'mngds-related-article-list-item__headline' },
        props.href ? h('a', { className: 'mngds-related-article-list-item__link', href: props.href, target: props.target, rel: props.target ? 'noopener' : undefined }, headline) : headline),
      time !== '' ? ' ' : null,
      time !== '' ? h('time', { className: 'mngds-related-article-list-item__time', dateTime: props.dateTime }, time) : null));
}
