/* Latest Headlines List Item (WordPress Elements, Homepage, 3336:46118): one headline in the Zone 1 Latest Headlines list,
   built to match production (`article.headline-only`, Karl 2026-10-30). Type = First (no rule), Standard (1px rule above,
   16px to the content) and Sponsored (rule above, Sponsored content badge, headline, "By <sponsor>" and the sponsor logo).
   First and Standard set the time inline right after the headline, as production does. The headline is the link when
   `href` is given. Fills its column. */
function LatestHeadlinesListItem(props) {
  var type = props.type || 'First';
  var HL = 'h' + (props.headingLevel || 3);
  var sponsored = type === 'Sponsored';
  var headline = props.headline != null ? props.headline
    : sponsored ? 'Latest headlines Number Twelve: This one wraps to three lines.'
    : type === 'Standard' ? 'Latest headlines Number Seven: Wraps to two lines.'
    : 'Latest headlines Number ONE: This wraps to two lines.';
  var time = props.time != null ? props.time : type === 'Standard' ? '57 mins ago' : '56 mins ago';
  var root = Object.assign(rest(props, ['type', 'headline', 'time', 'dateTime', 'href', 'target', 'headingLevel', 'sponsor',
    'sponsorLogo', 'sponsorLogoAlt', 'badgeLabel', 'className']), {
    className: cx('mngds-latest-headlines-list-item', 'mngds-latest-headlines-list-item--' + slug(type), props.className)
  });
  var title = h(HL, { className: 'mngds-latest-headlines-list-item__headline' },
    props.href ? h('a', { className: 'mngds-latest-headlines-list-item__link', href: props.href, target: props.target, rel: props.target ? 'noopener' : undefined }, headline) : headline);
  if (!sponsored) {
    return h('article', root,
      h('div', { className: 'mngds-latest-headlines-list-item__line' },
        title, ' ',
        props.dateTime ? h('time', { className: 'mngds-latest-headlines-list-item__time', dateTime: props.dateTime }, time)
          : h('span', { className: 'mngds-latest-headlines-list-item__time' }, time)));
  }
  var sponsor = props.sponsor != null ? props.sponsor : 'Xcel Energy';
  return h('article', root,
    h(ArticleStatusBadge, { type: 'Sponsored', label: props.badgeLabel, className: 'mngds-latest-headlines-list-item__badge' }),
    title,
    h('div', { className: 'mngds-latest-headlines-list-item__meta' },
      h('span', { className: 'mngds-latest-headlines-list-item__byline' }, 'By ', sponsor),
      props.sponsorLogo
        ? h('img', { className: 'mngds-latest-headlines-list-item__logo', src: props.sponsorLogo, alt: props.sponsorLogoAlt != null ? props.sponsorLogoAlt : '' })
        : h('span', { className: 'mngds-latest-headlines-list-item__logo mngds-latest-headlines-list-item__logo--placeholder', 'aria-hidden': 'true' })));
}
