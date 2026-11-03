/* 1Col Article Card (WordPress Elements, Homepage, 3536:39065). Style = Standard / Media Lead;
   Show Image, Show Subscriber Badge, Show Excerpt, Show Meta.
   One column, 8px apart: image (Standard 4:3, Media Lead 16:9), Subscriber badge (ArticleStatusBadge, Type=Subscriber),
   headline (Editorial/Titles/CardQuaternary or TitleMedia), excerpt (Editorial/Body/ExcerptCompact or Excerpt),
   meta ("56 mins ago"), then a 1px color/gray/500 bottom rule and 16px bottom padding.
   The identifier can't start with a digit, so "1Col" is spelled OneCol. The headline is the link when `href` is given. */
function OneColArticleCard(props) {
  /* `style` is the Figma Style variant (a string); an object `style` is passed through as inline styles. */
  var style = typeof props.style === 'string' ? props.style : 'Standard';
  var showImage = props.showImage !== false;
  var showBadge = !!props.showSubscriberBadge;
  var showExcerpt = props.showExcerpt !== false;
  var showMeta = !!props.showMeta;
  var HL = 'h' + (props.headingLevel || 3);
  var headline = props.headline != null ? props.headline : 'Article Headline on News paper homepage in first position on 1col section block';
  var time = props.time != null ? props.time : '56 mins ago';
  var root = Object.assign(rest(props, ['style', 'showImage', 'showSubscriberBadge', 'showExcerpt', 'showMeta', 'headline', 'excerpt',
    'time', 'dateTime', 'badgeLabel', 'image', 'imageAlt', 'href', 'target', 'headingLevel', 'className']), {
    className: cx('mngds-1col-article-card', 'mngds-1col-article-card--' + slug(style), props.className),
    style: typeof props.style === 'object' ? props.style : undefined
  });
  return h('article', root,
    showImage ? h('div', { className: 'mngds-1col-article-card__image', 'aria-hidden': props.image ? undefined : 'true' },
      h(ArticleImage, { src: props.image, alt: props.imageAlt, className: 'mngds-1col-article-card__img' })) : null,
    showBadge ? h(ArticleStatusBadge, { type: 'Subscriber', label: props.badgeLabel, className: 'mngds-1col-article-card__badge' }) : null,
    h(HL, { className: 'mngds-1col-article-card__headline' },
      props.href ? h('a', { className: 'mngds-1col-article-card__link', href: props.href, target: props.target, rel: props.target ? 'noopener' : undefined }, headline) : headline),
    showExcerpt ? h('p', { className: 'mngds-1col-article-card__excerpt' },
      props.excerpt != null ? props.excerpt : 'Vanroy Evan Smith, 39, of Long Beach is being held on $1 million bail.') : null,
    showMeta ? h('div', { className: 'mngds-1col-article-card__meta' },
      props.dateTime ? h('time', { dateTime: props.dateTime }, time) : time) : null,
    h('div', { className: 'mngds-1col-article-card__rule', 'aria-hidden': 'true' }));
}
