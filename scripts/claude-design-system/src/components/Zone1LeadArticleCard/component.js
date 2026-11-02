/* Zone 1 Lead Article Card (WordPress Elements, Homepage, 3336:46157). Style = Standard x Device = Desktop / Mobile / Tablet
   x Gallery = Image / Slideshow. The homepage Zone 1 lead (production .feature-primary .feature-large).
   Desktop / Tablet: two columns (text | image or Zone 1 Slideshow), 20 / 32px apart. Mobile: one column, 8px apart:
   headline, image, excerpt, Related list (or headline, excerpt, Related list, slideshow), then a 1px color/gray/500 rule.
   Text column: headline (Noto Serif Bold 29/33, Mobile 25/29), excerpt (Noto Sans 15/19), Related list (header + up to
   three RelatedArticleListItem: bullet, heading-family Bold 12/19 title with the Noto Sans 11 time inline). The headline and each
   related title are links when they have an `href`. */
function Zone1LeadArticleCard(props) {
  /* Figma sample Related items (Related Article List Item 3334:43017, drawn by RelatedArticleListItem since 2026-11-02). */
  var relatedDefault = [
    { headline: 'Game Day: Turning LeBron James’ record numbers into words', time: '56 mins ago' },
    { headline: 'When will LeBron James break Kareem’s career scoring record?', time: '3 weeks ago' },
    { headline: 'For LeBron James, developing ‘unguardable shot’ was key in his evolution as a scorer', time: '1 day ago' }
  ];
  var device = props.device || 'Mobile';
  var gallery = props.gallery || 'Image';
  var cardStyle = typeof props.style === 'string' ? props.style : 'Standard';
  var mobile = device === 'Mobile';
  var HL = 'h' + (props.headingLevel || 2);
  var related = props.related != null ? props.related : relatedDefault;
  var relatedId = React.useId();
  var headlineText = props.headline != null ? props.headline : 'Man charged with murder after fatal attack on bicycling doctor in Dana Point';

  var headline = h('div', { className: 'mngds-zone-1-lead-article-card__headline-container' },
    h(HL, { className: 'mngds-zone-1-lead-article-card__headline' },
      props.href ? h('a', { className: 'mngds-zone-1-lead-article-card__link', href: props.href, target: props.target, rel: props.target ? 'noopener' : undefined }, headlineText) : headlineText));
  var excerpt = h('p', { className: 'mngds-zone-1-lead-article-card__excerpt' },
    props.excerpt != null ? props.excerpt : 'Vanroy Evan Smith, 39, of Long Beach is being held on $1 million bail.');
  var relatedList = related && related.length ? h('div', { className: 'mngds-zone-1-lead-article-card__related' },
    h('div', { className: 'mngds-zone-1-lead-article-card__related-header' },
      h('span', { className: 'mngds-zone-1-lead-article-card__related-title', id: relatedId }, props.relatedTitle != null ? props.relatedTitle : 'Related')),
    h('ul', { className: 'mngds-zone-1-lead-article-card__related-body', 'aria-labelledby': relatedId },
      related.map(function (r, i) {
        return h('li', { key: r.key != null ? r.key : i, className: 'mngds-zone-1-lead-article-card__related-item' },
          h(RelatedArticleListItem, { headline: r.headline, href: r.href, target: r.target, time: r.time != null ? r.time : '', dateTime: r.dateTime,
            headingLevel: Math.min(6, (props.headingLevel || 2) + 2) }));
      }))) : null;

  var media;
  if (gallery === 'Slideshow') {
    /* Zone 1 Slideshow: its Breakpoint follows the card's Device; on Mobile it fills the card width (16:9 image area). */
    media = h('div', { className: 'mngds-zone-1-lead-article-card__slideshow' },
      h(Zone1Slideshow, Object.assign({ breakpoint: device, fill: mobile || undefined }, props.slideshow)));
  } else {
    media = h('div', { className: 'mngds-zone-1-lead-article-card__image', 'aria-hidden': props.image ? undefined : 'true' },
      h(ArticleImage, { src: props.image, alt: props.imageAlt, className: 'mngds-zone-1-lead-article-card__img' }));
  }

  var root = Object.assign(rest(props, ['style', 'device', 'gallery', 'headline', 'excerpt', 'related', 'relatedTitle', 'image', 'imageAlt',
    'slideshow', 'href', 'target', 'headingLevel', 'className']), {
    className: cx('mngds-zone-1-lead-article-card', 'mngds-zone-1-lead-article-card--' + slug(cardStyle),
      'mngds-zone-1-lead-article-card--' + slug(device), 'mngds-zone-1-lead-article-card--' + slug(gallery), props.className),
    style: typeof props.style === 'object' ? props.style : undefined
  });
  if (mobile) {
    return h('div', root,
      headline,
      gallery === 'Image' ? media : null,
      excerpt, relatedList,
      gallery === 'Slideshow' ? media : null,
      h('div', { className: 'mngds-zone-1-lead-article-card__rule', 'aria-hidden': 'true' }));
  }
  return h('div', root,
    h('div', { className: 'mngds-zone-1-lead-article-card__col1' }, headline, excerpt, relatedList),
    h('div', { className: 'mngds-zone-1-lead-article-card__col2' }, media));
}
