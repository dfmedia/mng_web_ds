/* Photos Block (WordPress Elements, Homepage, 3352:20865): the homepage Photos block (production `.feature-media`, Zone 7,
   in the left column of `.landing-three-one`). Matches production on the 4 / 8 grid (2026-11-02): Section Title / Eyebrow
   (Underline, with the chevron), 20px (spacing/250), then the lead (1Col Article Card, Style = Media Lead, no rule) and
   6 Horizontal Thumbnail Cards (Device = Mobile), then Show More Affordance ("Show More Photos") 8px below; 32px below the
   block. Device values are production's breakpoints: XS one column, S and M thumbnails 2 per row (M adds the excerpt),
   L and XL the lead beside the list. The block fills its column. */
var PHOTOS_BLOCK_SAMPLE_LEAD = { headline: 'Featured Headline on News paper homepage in Photo Block section block',
  excerpt: 'Vanroy Evan Smith, 39, of Long Beach is being held on $1 million bail. This could be a few lines long if theyz is feelin’ inclined.' };
function PhotosBlock(props) {
  var k = String(props.device || 'XS').split(' ')[0];
  var device = ['XS', 'S', 'M', 'L', 'XL'].indexOf(k) >= 0 ? k : 'XS';
  var lead = Object.assign({}, PHOTOS_BLOCK_SAMPLE_LEAD, props.lead || {});
  var items = props.items || [{}, { showGalleryIcon: false }, {}, { showGalleryIcon: false }, {}, { showGalleryIcon: false }];
  var showExcerpt = device === 'M' || device === 'L' || device === 'XL';
  var root = Object.assign(rest(props, ['device', 'title', 'href', 'lead', 'items', 'showMoreLabel', 'showMoreHref', 'onShowMore', 'headingLevel', 'className']), {
    className: cx('mngds-photos-block', 'mngds-photos-block--' + device.toLowerCase(), props.className)
  });
  return h('section', root,
    h('div', { className: 'mngds-photos-block__content' },
      h('div', { className: 'mngds-photos-block__header' },
        h(SectionTitleEyebrow, { style: 'Underline', chevron: true, title: props.title != null ? props.title : 'Photos', href: props.href,
          className: 'mngds-photos-block__title' })),
      h('div', { className: 'mngds-photos-block__body' },
        h(OneColArticleCard, Object.assign({ showSubscriberBadge: false, showMeta: false, headingLevel: props.headingLevel }, lead,
          { style: 'Media Lead', showImage: true, showExcerpt: showExcerpt && lead.showExcerpt !== false, className: 'mngds-photos-block__lead' })),
        h('ul', { className: 'mngds-photos-block__list' },
          items.slice(0, 6).map(function (it, i) {
            return h('li', { key: i, className: 'mngds-photos-block__item' },
              h(HorizontalThumbnailCard, Object.assign({ headingLevel: props.headingLevel }, it, { device: 'Mobile', className: 'mngds-photos-block__thumb' })));
          })))),
    h(ShowMoreAffordance, { label: props.showMoreLabel != null ? props.showMoreLabel : 'Show More Photos', href: props.showMoreHref,
      onClick: props.onShowMore, className: 'mngds-photos-block__more' }));
}
