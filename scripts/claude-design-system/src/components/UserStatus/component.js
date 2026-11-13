/* UserStatus (WordPress Elements, Menus and Parts, 456:5728): the masthead's account area before AccountMenu adds the
   chevron. status = none (logged out: Subscribe and Log In on Desktop, the user icon on mobile), nonSub (Subscribe and
   the avatar), subscriber (the avatar). Parts 16px (spacing/200) apart (production 15px). The avatar is decorative here:
   AccountMenu wraps it in the menu button. */
function UserStatus(props) {
  var status = String(props.status || 'none');
  var st = /^nonsub$/i.test(status) ? 'nonsub' : /^sub/i.test(status) ? 'subscriber' : 'none';
  var mobile = /^mobile$/i.test(String(props.device || 'Desktop'));
  var root = Object.assign(rest(props, ['status', 'device', 'user', 'subscribeLabel', 'subscribeHref', 'onSubscribe', 'logInLabel', 'logInHref', 'onLogIn', 'className']), {
    className: cx('mngds-user-status', 'mngds-user-status--' + st, mobile && 'mngds-user-status--mobile', props.className)
  });
  var u = props.user || {};
  var pic = function (unknown) { return h(UserPic, Object.assign({ size: 'Small' }, unknown ? { graphic: 'unknown' } : u)); };
  var subscribe = h(ButtonPrimary, { label: props.subscribeLabel || 'Subscribe', href: props.subscribeHref, onClick: props.onSubscribe });
  var kids = st === 'none'
    ? (mobile ? [pic(true)] : [subscribe, h(ButtonPrimary, { key: 'li', label: props.logInLabel || 'Log In', href: props.logInHref, onClick: props.onLogIn })])
    : st === 'nonsub' ? [subscribe, pic(false)] : [pic(false)];
  return h.apply(null, ['div', root].concat(kids));
}
