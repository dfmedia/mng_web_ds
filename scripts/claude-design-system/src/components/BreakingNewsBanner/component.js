/* Breaking News Banner (WordPress Elements, Menus and Parts, 506:5632): the bar at the top of the page for a breaking
   story, built to match production (`.breaking-bar`, Karl 2026-11-12) on the 4 / 8 grid. color/theme/secondary bar,
   "BREAKING NEWS" title, the headline (a link), the time and a close button.
   Device values are production's breakpoints for this bar: XS (639px and below), S (640-799px), (≥800px).
   Below 800px the title, headline and date flow as one paragraph; from 800px they sit in one row. */
function BreakingNewsBanner(props) {
  var d = String(props.device || 'XS (≤639px)');
  var device = d.indexOf('800') >= 0 || /^(M|L|XL|Desktop)\b/.test(d) ? 'row' : d.split(' ')[0] === 'S' || d === 'Tablet' ? 'S' : 'XS';
  var root = Object.assign(rest(props, ['device', 'title', 'headline', 'href', 'date', 'dateTime', 'onClose', 'closeLabel', 'headingLevel', 'className']), {
    className: cx('mngds-breaking-news-banner', 'mngds-breaking-news-banner--' + slug(device), props.className),
    'aria-label': props['aria-label'] || 'Breaking news'
  });
  var H = 'h' + (props.headingLevel || 2);
  var headline = props.headline != null ? props.headline : 'Breaking news headline goes here and wraps to more lines as needed';
  var title = h(H, { className: 'mngds-breaking-news-banner__title' }, props.title != null ? props.title : 'Breaking News');
  var link = h('a', { className: 'mngds-breaking-news-banner__headline', href: props.href || '#' }, headline);
  var date = props.date === false ? null : h('time', { className: 'mngds-breaking-news-banner__date', dateTime: props.dateTime },
    props.date != null ? props.date : 'November 12, 2026 at 2:14 pm');
  var content = device === 'row'
    ? h('div', { className: 'mngds-breaking-news-banner__content' }, title,
        h('div', { className: 'mngds-breaking-news-banner__group' }, link, date))
    : h('div', { className: 'mngds-breaking-news-banner__content' }, title, link, date);
  return h('section', root, content,
    h('button', { type: 'button', className: 'mngds-breaking-news-banner__close', onClick: props.onClose,
      'aria-label': props.closeLabel || 'Close breaking news' },
      h(Icon, { name: 'close', size: 28 })));
}
