/* SocialButtons (WordPress Elements, Menus and Parts, 3788:44356). The article share bar (condensed article header and
   end of article) and the obituary "Share this obituary" buttons (cleaned up 2026-11-12, Karl). Save (with a 1px
   gray/500 divider), then the share buttons in one order: Facebook, Bluesky, Reddit, X, Print, Email, LinkedIn, Link,
   then Gift, then More. More rule (Karl, 2026-11-12): up to 6 share buttons show; with more than 6, the first 6 show
   (Gift always one of them) and More is the 7th, opening a Popover below it with the rest.
   theme: 'Bold Coastal', 'Endless Tributes' (obituaries; the tributes colors) and 'TwinCities' use the filled style;
   'Measured Vibrant' and 'Modern Earthy' their own. `moreOpen` forces the panel open or closed (documentation). */
var SOCIAL_ORDER = ['Facebook', 'Bluesky', 'Reddit', 'X', 'Print', 'Email', 'LinkedIn', 'Link', 'Gift'];
var SOCIAL_DEFAULT = ['Facebook', 'Reddit', 'X', 'Email', 'Link', 'Gift'];
var socialButtonsSeq = 0;
function SocialButtons(props) {
  var theme = props.theme || 'Bold Coastal';
  var style = theme === 'Measured Vibrant' || theme === 'Modern Earthy' ? theme : 'Bold Coastal';
  var showSave = props.save !== false;
  var wanted = props.networks || SOCIAL_DEFAULT;
  var list = SOCIAL_ORDER.filter(function (n) { return wanted.indexOf(n) >= 0; });
  var shown = list, extra = [];
  if (list.length > 6) {
    var others = list.filter(function (n) { return n !== 'Gift'; });
    var hasGift = list.indexOf('Gift') >= 0;
    shown = others.slice(0, hasGift ? 5 : 6).concat(hasGift ? ['Gift'] : []);
    extra = list.filter(function (n) { return shown.indexOf(n) < 0; });
  }
  var ids = React.useRef(null);
  if (!ids.current) { socialButtonsSeq += 1; ids.current = 'mngds-social-buttons-' + socialButtonsSeq; }
  var forced = props.moreOpen !== undefined;
  var os = React.useState(false);
  var open = extra.length > 0 && (forced ? !!props.moreOpen : os[0]);
  var moreRef = React.useRef(null), panelRef = React.useRef(null), rootRef = React.useRef(null);
  function setOpen(o) { if (!forced) os[1](o); if (props.onMoreOpenChange) props.onMoreOpenChange(o); }
  React.useEffect(function () {
    if (!open || forced || !panelRef.current) return undefined;
    var first = panelRef.current.querySelector('a, button'); if (first) first.focus();
    function down(e) { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); }
    document.addEventListener('mousedown', down);
    return function () { document.removeEventListener('mousedown', down); };
  }, [open, forced]);
  function onPanelKey(e) {
    var items = Array.prototype.slice.call(panelRef.current.querySelectorAll('a, button'));
    var i = items.indexOf(document.activeElement);
    if (e.key === 'Escape') { e.preventDefault(); setOpen(false); if (moreRef.current) moreRef.current.querySelector('button').focus(); }
    else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); items[Math.min(items.length - 1, i + 1)].focus(); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); items[Math.max(0, i - 1)].focus(); }
  }
  function button(n) {
    var link = props.links && props.links[n];
    return h(SocialMediaButton, { key: n, network: n, theme: style, href: link, target: link && n !== 'Email' ? '_blank' : undefined,
      onClick: props.onShare ? function (e) { props.onShare(n, e); } : undefined });
  }
  var panelId = ids.current + '-more';
  return h('div', Object.assign(rest(props, ['theme', 'save', 'saved', 'onSave', 'networks', 'links', 'onShare', 'moreOpen', 'onMoreOpenChange', 'label', 'className']), {
      ref: rootRef, role: 'group', 'aria-label': props.label || 'Share this article',
      className: cx('mngds-social-buttons', 'mngds-social-buttons--' + slug(theme), props.className)
    }),
    showSave ? h('span', { className: 'mngds-social-buttons__save' },
      h(ButtonSave, { checked: props.saved, onChange: props.onSave }), h('span', { className: 'mngds-social-buttons__divider', 'aria-hidden': 'true' })) : null,
    shown.map(button),
    extra.length ? h('span', { ref: moreRef, className: 'mngds-social-buttons__more' },
      h(SocialMediaButton, { network: 'Share more', theme: style, interaction: open ? 'pressed' : 'Default',
        'aria-expanded': open ? 'true' : 'false', 'aria-controls': panelId, onClick: function () { setOpen(!open); } }),
      open ? h(Popover, { id: panelId, placement: 'Bottom', anchored: true, 'aria-label': 'More share options', onKeyDown: onPanelKey },
        h('span', { ref: panelRef, className: 'mngds-social-buttons__panel-items' }, extra.map(button))) : null) : null);
}
