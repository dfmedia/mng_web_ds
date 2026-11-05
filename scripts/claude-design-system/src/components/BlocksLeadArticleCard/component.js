/* Blocks Lead Article Card (WordPress Elements, Homepage, 3663:31557). State = Default / Hover x Device = Mobile / Tablet / Desktop
   x Gallery = Image / Slideshow. The headline is the link (not the whole card). Tablet/Desktop: two columns (text | image or
   Zone 1 Slideshow). Mobile: one column; the image sits under the headline, the slideshow after the byline; 1px bottom rule.
   No border, badge or Related list. */
function BlocksLeadArticleCard(props) {
  var device = props.device || 'Mobile';
  var gallery = props.gallery || 'Image';
  var mobile = device === 'Mobile';
  var HL = 'h' + (props.headingLevel || 2);
  var headlineText = props.headline != null ? props.headline : 'Norte fire that destroyed homes in South Orange County is at 80% containment';
  var link = props.href
    ? h('a', { className: cx('mngds-blocks-lead-article-card__link', props.state === 'Focus' ? 'is-focus' : null), href: props.href, target: props.target, rel: props.target ? 'noopener' : undefined }, headlineText)
    : headlineText;

  var headlineGroup = h('div', { className: 'mngds-blocks-lead-article-card__headline-group' },
    h(ArticleSectionKicker, { section: props.section != null ? props.section : 'Crime and Public Safety' }),
    h(HL, { className: 'mngds-blocks-lead-article-card__headline' }, link));
  var excerpt = h('p', { className: 'mngds-blocks-lead-article-card__excerpt' },
    props.excerpt != null ? props.excerpt : 'The Norte Fire broke out in the area of Portico Del Norte in San Clemente shortly after 11:30 a.m. on Friday. Oct. 16.');
  var byline = h('div', { className: 'mngds-blocks-lead-article-card__byline' },
    h(ArticleAuthor, { author: props.author != null ? props.author : 'Ruby Gonzales' }),
    h(ArticleTimestamp, { time: props.time != null ? props.time : '56 mins ago', dateTime: props.dateTime }));

  var media;
  if (gallery === 'Slideshow') {
    /* Zone 1 Slideshow is its own component (Zone1Slideshow); its Breakpoint matches the card's Device. */
    media = h('div', { className: 'mngds-blocks-lead-article-card__slideshow' },
      typeof Zone1Slideshow === 'function'
        ? h(Zone1Slideshow, Object.assign({ breakpoint: device, fill: true }, props.slideshow))
        : h(ArticleImage, { className: 'mngds-blocks-lead-article-card__slideshow-fallback', alt: 'Photo gallery' }));
  } else {
    media = h('div', { className: 'mngds-blocks-lead-article-card__image', 'aria-hidden': props.image ? undefined : 'true' },
      h(ArticleImage, { src: props.image, alt: props.imageAlt, className: 'mngds-blocks-lead-article-card__img' }));
  }

  var root = Object.assign(rest(props, ['state', 'device', 'gallery', 'section', 'headline', 'excerpt', 'author', 'time', 'dateTime',
    'image', 'imageAlt', 'slideshow', 'href', 'target', 'headingLevel', 'className']), {
    className: cx('mngds-blocks-lead-article-card', 'mngds-blocks-lead-article-card--' + slug(device),
      'mngds-blocks-lead-article-card--' + slug(gallery), props.state === 'Hover' ? 'is-hover' : null, props.className)
  });
  if (mobile) {
    return h('div', root,
      headlineGroup,
      gallery === 'Image' ? media : null,
      excerpt, byline,
      gallery === 'Slideshow' ? media : null,
      h('div', { className: 'mngds-blocks-lead-article-card__rule', 'aria-hidden': 'true' }));
  }
  return h('div', root,
    h('div', { className: 'mngds-blocks-lead-article-card__col1' }, headlineGroup, excerpt, byline),
    h('div', { className: 'mngds-blocks-lead-article-card__col2' }, media));
}
