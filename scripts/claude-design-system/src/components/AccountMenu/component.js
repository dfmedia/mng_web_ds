/* AccountMenu (WordPress Elements, Menus and Parts, 910:16425; 7 variants since 2026-11-16, Karl): the account control
   at the right of the masthead (Closed) and the menu it opens (Open). Matches production (digisubs, all 6 review
   sites, 2026-11-13) on the 4 / 8 grid; differences are design-vs-production 11.
   Closed, logged in: UserPic Small (30px) and the 16px chevron 4px apart, then the search button 16px away.
   Closed, logged out: below 1040px the user icon and chevron (opens the slide-in panel); from 1040px up the Subscribe
   and Log In buttons (UserStatus) and no menu.
   Open, logged in (all widths): a 300px panel under the trigger (the avatar and up chevron show through its top,
   17px down), right edge 24px past the chevron, bottom corners radius/utility, shadow/lg, 40% scrim. `fullWidth`
   (340px and below, Karl 2026-11-16) spans the screen. Open, logged out: a 300px panel that slides in from the right
   under the masthead. `view` forces a documentation state; without it the menu opens and closes itself.
   `inline` draws the open panel in the page flow (documentation). */
var accountMenuSeq = 0;
function accountMenuStr(v, d) { return v == null ? d : String(v); }

function AccountMenuRow(p) {
  var Tag = p.href ? 'a' : 'button';
  var attrs = { className: cx('mngds-account-menu__row', p.state && 'is-' + p.state), role: 'menuitem' };
  if (p.href) attrs.href = p.href; else { attrs.type = 'button'; attrs.onClick = p.onClick; }
  return h('li', { role: 'none' },
    h(Tag, attrs,
      h('span', { className: 'mngds-account-menu__row-text' },
        h('span', { className: 'mngds-account-menu__row-label' }, p.label),
        p.sub ? h('span', { className: cx('mngds-account-menu__row-sub', p.subLink && 'mngds-account-menu__row-sub--link') }, p.sub) : null),
      p.chevron === false ? null : h('span', { className: 'mngds-account-menu__row-chevron', 'aria-hidden': 'true' }, h(Icon, { name: 'arrow-right', size: 12 }))));
}

function AccountMenuNewsletter(p) {
  return h('div', { className: 'mngds-account-menu__newsletter' },
    h('p', { className: 'mngds-account-menu__newsletter-prompt' }, p.prompt || 'Get Morning Report and other email newsletters'),
    h('div', { className: 'mngds-account-menu__newsletter-button' },
      h(ButtonPrimary, { label: p.label || 'Sign Up', href: p.href, onClick: p.onClick })));
}

function AccountMenuTrigger(p) {
  var loggedOut = p.status === 'loggedOut';
  var name = p.label || (loggedOut ? 'Log in or subscribe' : 'Account menu' + (p.user && p.user.name ? ', ' + p.user.name : ''));
  var u = p.user || {};
  return h('button', { type: 'button', ref: p.triggerRef, className: 'mngds-account-menu__trigger', 'aria-haspopup': 'true',
      'aria-expanded': p.open ? 'true' : 'false', 'aria-controls': p.panelId, 'aria-label': name, onClick: p.onClick, onKeyDown: p.onKeyDown },
    loggedOut ? h(UserPic, { size: 'Small', graphic: 'unknown' })
      : h(UserPic, { size: 'Small', src: u.imageSrc || u.src, name: u.name, initials: u.initials, graphic: u.graphic, status: u.status, alert: u.alert,
        background: u.background, color: u.color }),
    h('span', { className: 'mngds-account-menu__chevron', 'aria-hidden': 'true' }, h(Icon, { name: p.open ? 'arrow-up' : 'arrow-down', size: 12 })));
}

function AccountMenu(props) {
  var status = /^alert$/i.test(String(props.status)) ? 'alert' : /^loggedout$/i.test(String(props.status)) ? 'loggedOut' : 'loggedIn';
  var device = accountMenuStr(props.device, status === 'loggedOut' ? '(up to 1039px)' : '(all widths)');
  var wide = /1040/.test(device);
  var userType = /^non/i.test(String(props.userType || '')) ? 'nonSub' : 'subscriber';
  var inline = !!props.inline;
  var forced = props.view !== undefined;
  var os = React.useState(!!props.defaultOpen);
  var open = forced ? /^open$/i.test(String(props.view)) : os[0];
  var hasMenu = !(status === 'loggedOut' && wide);
  open = open && hasMenu;
  var ids = React.useRef(null);
  if (!ids.current) { accountMenuSeq += 1; ids.current = 'mngds-account-menu-' + accountMenuSeq; }
  var panelId = (props.id || ids.current) + '-panel';
  var rootRef = React.useRef(null), triggerRef = React.useRef(null), panelRef = React.useRef(null);

  function setOpen(o, returnFocus) {
    if (!forced) os[1](o);
    if (props.onOpenChange) props.onOpenChange(o);
    if (!o && returnFocus !== false && triggerRef.current) triggerRef.current.focus();
  }
  function links() { return panelRef.current ? Array.prototype.slice.call(panelRef.current.querySelectorAll('a[href], button:not([disabled])')) : []; }
  // Opening moves focus to the first link (not when the state is forced for documentation).
  React.useEffect(function () {
    if (!open || forced || inline) return;
    var l = links(); if (l[0]) l[0].focus();
  }, [open]);
  // Esc closes; focus returns to the trigger.
  React.useEffect(function () {
    if (!open || forced) return undefined;
    function key(e) { if (e.key === 'Escape') { e.preventDefault(); setOpen(false); } }
    document.addEventListener('keydown', key);
    return function () { document.removeEventListener('keydown', key); };
  }, [open, forced]);

  function onPanelKey(e) {
    if (e.key !== 'Tab' || forced) return;
    var l = links(); if (!l.length) return;
    var first = l[0], last = l[l.length - 1];
    if (status === 'loggedOut') {
      // The slide-in panel keeps focus inside (as production): Tab wraps to the trigger and back.
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); if (triggerRef.current) triggerRef.current.focus(); }
    } else if (!e.shiftKey && document.activeElement === last) {
      // Tabbing past the last link closes the dropdown and returns focus to the trigger.
      e.preventDefault(); setOpen(false);
    } else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); if (triggerRef.current) triggerRef.current.focus(); }
  }

  var u = props.user || {};
  var userName = accountMenuStr(props.userName, u.name || 'Gritty McGee');
  var userEmail = accountMenuStr(props.userEmail, u.email || 'gritty@gmail.com');
  var subType = accountMenuStr(props.subscriptionType, userType === 'nonSub' ? 'Limited Access' : 'Premium Digital Subscriber');

  var search = props.showSearch === false ? null : h('button', { type: 'button', className: 'mngds-account-menu__search', 'aria-label': props.searchLabel || 'Search', onClick: props.onSearchClick },
    h(Icon, { name: 'search', size: 20 }));

  var control;
  if (status === 'loggedOut' && wide) {
    control = h(UserStatus, { status: 'none', device: 'Desktop', subscribeHref: props.subscribeHref, onSubscribe: props.onSubscribe, logInHref: props.logInHref, onLogIn: props.onLogIn });
  } else {
    control = h(AccountMenuTrigger, { status: status, user: Object.assign({}, u, { name: userName }), open: open, panelId: panelId, triggerRef: triggerRef, label: props.accountLabel,
      onClick: function () { setOpen(!open, false); } });
  }

  var panel = null;
  if (open && status === 'loggedOut') {
    panel = h('div', { id: panelId, ref: panelRef, className: 'mngds-account-menu__panel mngds-account-menu__panel--slide', role: 'dialog', 'aria-label': props.panelLabel || 'Account', onKeyDown: onPanelKey },
      h('div', { className: 'mngds-account-menu__signin' },
        h(ButtonPrimary, { label: props.subscribeLabel || 'Subscribe', href: props.subscribeHref, onClick: props.onSubscribe }),
        h(ButtonPrimary, { label: props.logInLabel || 'Log In', href: props.logInHref, onClick: props.onLogIn })),
      h('div', { className: 'mngds-account-menu__footer' },
        h(AccountMenuNewsletter, { prompt: props.newsletterPrompt, href: props.newsletterHref, onClick: props.onNewsletter })));
  } else if (open) {
    var nonSub = userType === 'nonSub';
    var rows = [
      { label: 'Reader Dashboard', href: props.readerDashboardHref || '#' },
      { label: 'Subscription', sub: subType, href: props.subscriptionHref || '#' },
      { label: 'Gifted Articles', sub: nonSub ? (props.giftedPrompt || 'Subscribe for access') : props.giftedNote, subLink: nonSub, href: props.giftedHref || '#' },
      { label: 'Saved Articles', sub: nonSub ? (props.savedPrompt || 'Subscribe to Premium for access') : props.savedNote, subLink: nonSub, href: props.savedHref || '#' },
      { label: 'Contact us', href: props.contactHref || '#' },
      { label: 'Log Out', chevron: false, href: props.logOutHref, onClick: props.onLogOut }
    ];
    panel = h('div', { id: panelId, ref: panelRef, className: 'mngds-account-menu__panel mngds-account-menu__panel--dropdown', onKeyDown: onPanelKey },
      h('div', { className: 'mngds-account-menu__header' },
        h('p', { className: 'mngds-account-menu__name' }, userName),
        h('p', { className: 'mngds-account-menu__email' }, userEmail),
        nonSub ? h('div', { className: 'mngds-account-menu__subscribe' }, h(ButtonPrimary, { label: props.subscribeNowLabel || 'Subscribe Now', href: props.subscribeHref, onClick: props.onSubscribe })) : null,
        status === 'alert' ? h('div', { className: 'mngds-account-menu__alert', role: 'status' },
          h('div', { className: 'mngds-account-menu__alert-body' },
            h('p', { className: 'mngds-account-menu__alert-title' }, h(Icon, { name: 'warning2', size: 16 }), h('span', null, props.alertTitle || 'Payment Issue')),
            h('p', { className: 'mngds-account-menu__alert-text' }, props.alertText || 'We’re having trouble processing the payment for your subscription. To keep reading uninterrupted, please update your payment information today.')),
          h(ButtonPrimary, { label: props.alertButtonLabel || 'Update Payment Info', href: props.updatePaymentHref, onClick: props.onUpdatePayment })) : null),
      h('ul', { className: 'mngds-account-menu__rows', role: 'menu', 'aria-label': props.panelLabel || 'Account' },
        rows.map(function (r, i) { return h(AccountMenuRow, Object.assign({ key: i, state: props.rowState && props.rowState[r.label] }, r)); })),
      props.marketing ? h('div', { className: 'mngds-account-menu__marketing' }, props.marketing) : null,
      props.showNewsletter === false ? null : h(AccountMenuNewsletter, { prompt: props.newsletterPrompt, href: props.newsletterHref, onClick: props.onNewsletter }));
  }

  var root = Object.assign(rest(props, ['status', 'view', 'device', 'userType', 'user', 'userName', 'userEmail', 'subscriptionType', 'inline', 'defaultOpen',
    'onOpenChange', 'fullWidth', 'showSearch', 'onSearchClick', 'searchLabel', 'accountLabel', 'panelLabel', 'subscribeHref', 'onSubscribe', 'logInHref',
    'onLogIn', 'subscribeLabel', 'logInLabel', 'subscribeNowLabel', 'readerDashboardHref', 'subscriptionHref', 'giftedHref', 'savedHref', 'contactHref',
    'logOutHref', 'onLogOut', 'giftedPrompt', 'savedPrompt', 'giftedNote', 'savedNote', 'marketing', 'showNewsletter', 'newsletterPrompt', 'newsletterHref',
    'onNewsletter', 'alertTitle', 'alertText', 'alertButtonLabel', 'updatePaymentHref', 'onUpdatePayment', 'rowState', 'className', 'id']), {
    ref: rootRef,
    className: cx('mngds-account-menu', 'mngds-account-menu--' + slug(status), open && 'is-open', inline && 'mngds-account-menu--inline',
      props.fullWidth && 'mngds-account-menu--full-width', wide && 'mngds-account-menu--wide', props.className)
  });
  var scrim = open && !inline ? h('div', { className: cx('mngds-account-menu__scrim', status === 'loggedOut' && 'mngds-account-menu__scrim--panel'), 'aria-hidden': 'true',
    onClick: function () { setOpen(false); } }) : null;
  return h('div', root,
    h('div', { className: 'mngds-account-menu__bar' },
      h('div', { className: 'mngds-account-menu__anchor' }, control, status === 'loggedOut' ? null : panel),
      search),
    status === 'loggedOut' ? panel : null,
    scrim);
}
