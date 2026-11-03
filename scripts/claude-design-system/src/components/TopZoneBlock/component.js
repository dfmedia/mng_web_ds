/* TOP ZONE Block (WordPress Elements, Homepage, 3352:19482): the homepage Zone 1 (production `section.feature-primary.busy`).
   Matches production on the 4 / 8 grid (2026-11-02): the Lead Column (Zone 1 Lead Article Card, 20px (spacing/250), then
   4 TopZone Article Cards, 16px (spacing/200) between rows, 2 per row 20px apart in S, M and XL), Latest Headlines and the
   right-rail Cube ad (Show Ad: off for ad-free readers keeps the column, empty or with `railContent`, as production
   does; Karl, 2026-11-03). XS and S stack them 32px (spacing/400) apart. From M the Feature Wrapper (Lead Column, 20px, Latest
   Headlines) sits beside the ad column: M no gap (as production), L and XL 20px, and 32px (spacing/400) below from L.
   Column widths are production's percentages. Device values are production's breakpoints. Fills its row. */
var TOP_ZONE_DEVICES = {
  XS: { lead: 'Mobile', latest: 'XS (≤639px)', ad: 'Cube 1 RRail ATF 300x250' },
  S: { lead: 'Tablet', latest: 'S (640–799px)', ad: 'Cube 1 RRail ATF 300x250' },
  M: { lead: 'Mobile', latest: '(≥800px)', ad: 'Cube 1 RRail ATF 300x1050' },
  L: { lead: 'Mobile', latest: '(≥800px)', ad: 'Cube 1 RRail ATF 300x1050' },
  XL: { lead: 'Desktop', latest: '(≥800px)', ad: 'Cube 1 RRail ATF 300x1050' }
};
function TopZoneBlock(props) {
  var k = String(props.device || 'XS').split(' ')[0];
  var device = TOP_ZONE_DEVICES[k] ? k : 'XS';
  var cfg = TOP_ZONE_DEVICES[device];
  var stacked = device === 'XS' || device === 'S';
  var stories = props.stories || [
    { headline: 'Article Headline on News paper homepage in second zone position' },
    { headline: 'Article Headline on News paper homepage in third zone position' },
    { headline: 'Article Headline on News paper homepage in second zone position' },
    { headline: 'Article Headline on News paper homepage in third zone position' }];
  var root = Object.assign(rest(props, ['device', 'lead', 'stories', 'latest', 'ad', 'showAd', 'railContent', 'headingLevel', 'className']), {
    className: cx('mngds-top-zone-block', 'mngds-top-zone-block--' + device.toLowerCase(), props.className)
  });
  var leadCol = h('div', { className: 'mngds-top-zone-block__lead-column' },
    h(Zone1LeadArticleCard, Object.assign({ headingLevel: props.headingLevel }, props.lead || {}, { device: cfg.lead, className: 'mngds-top-zone-block__lead' })),
    h('ul', { className: 'mngds-top-zone-block__stories' },
      stories.slice(0, 4).map(function (s, i) {
        return h('li', { key: i, className: 'mngds-top-zone-block__story' },
          h(TopZoneArticleCard, Object.assign({ headingLevel: props.headingLevel }, s, { device: device })));
      })));
  var latest = h(LatestHeadlines, Object.assign({}, props.latest || {}, { device: cfg.latest, className: 'mngds-top-zone-block__latest' }));
  /* Show Ad off: the column stays (production's .sidebar-ad-container is there for ad-free readers too), empty or with
     the content passed in railContent (production shows a house promo there on some sites). */
  var ad = props.showAd === false
    ? h('div', { className: 'mngds-top-zone-block__rail mngds-top-zone-block__rail--no-ad' }, props.railContent || null)
    : h('aside', { className: 'mngds-top-zone-block__rail', 'aria-label': 'Advertisement' },
      React.isValidElement(props.ad) ? props.ad : h(AdBlocks, Object.assign({ name: cfg.ad }, props.ad || {})));
  return h('section', root,
    stacked ? leadCol : h('div', { className: 'mngds-top-zone-block__wrapper' }, leadCol, latest),
    stacked ? latest : null,
    ad);
}
