/* Latest Headlines (WordPress Elements, Homepage, 3476:62396): the Zone 1 Latest Headlines rail, built to match production
   (`.busy .headline-list`, Karl 2026-10-30). Section Title / Eyebrow (Underline, no chevron), then a ul of Latest Headlines
   List Items (First, Standard..., Sponsored) and Newsletter Signup, 12px (spacing/150) apart. Title to the first item is
   16px (spacing/200). One column at every width; Device only sets production's XS cap (540px, centered).
   Device values are production's breakpoints for this list: XS (639px and below), S (640-799px), (≥800px) (the side column
   beside the Zone 1 lead). The list ends with NewsletterSignup (anonymous view). */
var LATEST_HEADLINES_SAMPLE = [
  ['Latest headlines Number ONE: This wraps to two lines.', '56 mins ago'],
  ['Latest headlines Number Seven: Wraps to two lines.', '57 mins ago'],
  ['Latest headlines Number Eight: This one wraps to three lines.', '2 hours ago'],
  ['Latest headlines Number Nine: This one wraps to four lines, but is that too long for an article title? Let’s be real.', '4 hours ago'],
  ['Latest headlines Number Ten: This one wraps to three lines.', '2 hours ago'],
  ['Latest headlines Number Eleven: This one wraps to three lines.', '2 hours ago'],
  ['Latest headlines Number Twelve: This one wraps to three lines.', '2 hours ago']
];
function LatestHeadlines(props) {
  var d = String(props.device || 'XS');
  var device = d.indexOf('800') >= 0 || /^(M|L|XL|Desktop)\b/.test(d) ? 'side' : d.split(' ')[0] === 'S' || d === 'Tablet' ? 'S' : 'XS';
  var items = props.items || LATEST_HEADLINES_SAMPLE.map(function (x) { return { headline: x[0], time: x[1] }; });
  var showSponsored = props.showSponsored == null ? true : !!props.showSponsored;
  var showNewsletter = props.showNewsletter == null ? true : !!props.showNewsletter;
  var root = Object.assign(rest(props, ['device', 'title', 'href', 'items', 'sponsored', 'showSponsored', 'showNewsletter',
    'newsletter', 'headingLevel', 'className']), {
    className: cx('mngds-latest-headlines', 'mngds-latest-headlines--' + slug(device), props.className)
  });
  var lis = items.map(function (it, i) {
    return h('li', { key: 'i' + i, className: 'mngds-latest-headlines__item' },
      h(LatestHeadlinesListItem, Object.assign({}, it, { type: i === 0 ? 'First' : 'Standard', headingLevel: props.headingLevel })));
  });
  if (showSponsored) {
    lis.push(h('li', { key: 'sp', className: 'mngds-latest-headlines__item' },
      h(LatestHeadlinesListItem, Object.assign({}, props.sponsored, { type: 'Sponsored', headingLevel: props.headingLevel }))));
  }
  if (showNewsletter) {
    var nl = props.newsletter != null ? props.newsletter : h(NewsletterSignup, { device: device === 'side' ? '(≥800px)' : '(≤799px)' });
    lis.push(h('li', { key: 'nl', className: 'mngds-latest-headlines__item mngds-latest-headlines__newsletter' }, nl));
  }
  return h('div', root,
    h('div', { className: 'mngds-latest-headlines__header' },
      h(SectionTitleEyebrow, { style: 'Underline', chevron: false, title: props.title != null ? props.title : 'Latest Headlines', href: props.href })),
    h('ul', { className: 'mngds-latest-headlines__list' }, lis));
}
