/* Footer (WordPress Elements, Menus and Parts, 354:1282): the production footer. Device comes from the rendered
   width (WordPress grid) unless `device` forces one: 5 columns at 1040px and up, 3 at 800-1039, 2 at 640-799, and
   accordion groups below 640. Production values with no token are kept on purpose (Karl, 2026-10-29): the 10px
   gutter below 640px and the 15px link spacing (design-vs-production 6). */
function footerGroups(pub) {
  return [
    { id: 'subscribe', title: 'Subscribe', links: ['Member Services', 'Manage Subscriptions', 'Store', 'Archive Search', 'Reprints'] },
    { id: 'marketplace', title: 'Marketplace', links: ['Place An Obituary', 'Place a Real Estate Ad', 'Lottery'] },
    { id: 'about', title: 'About ' + pub, links: ['About Southern California News Group', 'MediaNews Group', 'Work With Us', 'Privacy Policy', 'Accessibility', 'News Archive'] },
    { id: 'advertising', title: 'Advertising Solutions', links: ['Get In Touch With A Marketing Strategist', 'Request Media Kit', 'Creative Services', 'Content Marketing'] },
    { id: 'contact', title: 'Contact Us', links: ['Corrections', pub + ' Store', 'Reader Rewards', 'Photo Reprints', 'Sponsored Access'] },
    { id: 'partners', title: 'Partners', links: ['Live Traffic Map', 'Newspapers In Education', 'Sponsor A Student'] }
  ];
}
var FOOTER_LEGAL = ['Copyright © 2022 MediaNews Group', 'Privacy Policy', 'Terms Of Use', 'Accessibility', 'Cookie Policy',
  'Arbitration', 'Powered By WordPress.Com VIP', 'Do Not Sell My Info'];
/* Which groups go in which column (Figma variant descriptions); 'cta' is Subscribe Now. */
var FOOTER_COLUMNS = {
  'XL-Desktop': [['subscribe', 'marketplace'], ['about'], ['advertising'], ['contact', 'partners'], ['cta']],
  'LG-TabletH': [['subscribe', 'marketplace'], ['about', 'advertising'], ['contact', 'partners', 'cta']],
  'MD-TabletV': [['subscribe', 'marketplace', 'about'], ['advertising', 'contact', 'partners', 'cta']]
};

function footerLink(item, i, cls) {
  var it = typeof item === 'string' ? { label: item } : item;
  return h('li', { key: it.id || i, className: cls + '-item' }, h('a', { className: cls, href: it.href || '#', onClick: it.onClick }, it.label));
}

/* Shared by Footer and BlocksFooter. opts: columns (per device), parts (extra blocks by id, e.g. 'signup'),
   mobileTop (ids placed above the accordion rows), className, used (props to keep off the root). */
function footerView(props, opts) {
  var dv = useDevice(props.device);
  var device = dv[0];
  var pub = props.publication || 'OC Register';
  var groups = props.groups || footerGroups(pub);
  var byId = {}; groups.forEach(function (g, i) { byId[g.id || String(i)] = g; });
  var legal = props.legalLinks || FOOTER_LEGAL;
  var openState = React.useState({});
  var accordion = device === 'SM-Mobile' || device === 'XS-Fold';
  var baseId = React.useRef('mngds-footer-' + Math.random().toString(36).slice(2, 8)).current;
  var cta = h('div', { key: 'cta', className: 'mngds-footer__cta' },
    h(ButtonPrimary, { label: props.subscribeLabel || 'Subscribe Now', href: props.subscribeHref, onClick: props.onSubscribe, breakpoint: accordion ? 'Mobile' : 'Desktop' }));

  function group(g, i) {
    var id = g.id || String(i);
    if (accordion) {
      var open = !!openState[0][id];
      return h('section', { key: id, className: cx('mngds-footer__group', 'mngds-footer__group--accordion', open && 'is-open') },
        h('h2', { className: 'mngds-footer__heading' },
          h('button', { type: 'button', className: 'mngds-footer__toggle', 'aria-expanded': open ? 'true' : 'false', 'aria-controls': baseId + '-' + id,
              onClick: function () { var n = Object.assign({}, openState[0]); n[id] = !open; openState[1](n); } },
            h('span', null, g.title), h(Icon, { name: open ? 'arrow-up' : 'arrow-down', size: 16 }))),
        h('ul', { className: 'mngds-footer__links', id: baseId + '-' + id, hidden: !open }, g.links.map(function (l, j) { return footerLink(l, j, 'mngds-footer__link'); })));
    }
    return h('section', { key: id, className: 'mngds-footer__group' },
      h('h2', { className: 'mngds-footer__heading' }, g.title),
      h('ul', { className: 'mngds-footer__links' }, g.links.map(function (l, j) { return footerLink(l, j, 'mngds-footer__link'); })));
  }

  var parts = Object.assign({ cta: cta }, opts.parts ? opts.parts(accordion) : {});
  var body;
  if (accordion) {
    body = h('div', { className: 'mngds-footer__list' }, (opts.mobileTop || []).map(function (id) { return parts[id]; }), groups.map(group), cta);
  } else {
    var cols = (opts.columns || FOOTER_COLUMNS)[device];
    var placed = {};
    body = h('div', { className: 'mngds-footer__columns' }, cols.map(function (ids, c) {
      return h('div', { key: c, className: 'mngds-footer__column' }, ids.map(function (id) {
        if (parts[id]) return parts[id];
        placed[id] = true; return byId[id] ? group(byId[id], id) : null;
      }));
    }));
    /* Custom groups that aren't in the Figma layout go in the last column. */
    var extra = groups.filter(function (g, i) { return !placed[g.id || String(i)]; });
    if (extra.length) body = h(React.Fragment, null, body, h('div', { className: 'mngds-footer__columns' }, h('div', { className: 'mngds-footer__column' }, extra.map(group))));
  }

  return h('footer', Object.assign(rest(props, ['device', 'publication', 'groups', 'legalLinks', 'subscribeLabel', 'subscribeHref', 'onSubscribe', 'logo', 'siteName', 'homeHref', 'className'].concat(opts.used || [])), {
      ref: dv[1], className: cx('mngds-footer', 'mngds-footer--' + slug(device), opts.className, props.className) }),
    h('div', { className: 'mngds-footer__content' },
      h('a', { className: 'mngds-footer__logo-link', href: props.homeHref || '/', 'aria-label': props.siteName || 'Fakeville Daily News' },
        props.logo || h(PlaceholderLogo, { className: 'mngds-footer__logo', decorative: true })),
      body),
    h('div', { className: 'mngds-footer__bottom' },
      h('ul', { className: 'mngds-footer__legal' }, legal.map(function (l, j) { return footerLink(l, j, 'mngds-footer__legal-link'); }))));
}

function Footer(props) { return footerView(props, {}); }
