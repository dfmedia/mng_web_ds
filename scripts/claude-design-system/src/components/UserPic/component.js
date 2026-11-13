/* UserPic (WordPress Elements, Menus and Parts, 456:5674): the avatar (UserImage) with two AlertLevel dots
   (Karl, 2026-11-13). Top left, Active Dot: the reader is active (status = 'Active'). Bottom right, Alert Dot: the reader
   has an alert or message to see (`alert` = low / medium / high). Size = Small (30px), Medium (40px), Large (64px; 16px
   dots). The chevron that opens the account menu belongs to AccountMenu, so this is not a button by itself. */
function UserPic(props) {
  var size = String(props.size || 'Small');
  var s = /^l/i.test(size) ? 'large' : /^m/i.test(size) ? 'medium' : 'small';
  var active = /^active$/i.test(String(props.status || 'Default'));
  var alert = String(props.alert || 'none').toLowerCase();
  var dot = s === 'large' ? 'Large' : 'Small';
  var root = Object.assign(rest(props, ['size', 'status', 'alert', 'graphic', 'src', 'initials', 'name', 'background', 'color', 'alt', 'activeLabel', 'alertLabel', 'className']), {
    className: cx('mngds-user-pic', 'mngds-user-pic--' + s, props.className)
  });
  return h('span', root,
    h(UserImage, { size: s, graphic: props.graphic, src: props.src, initials: props.initials, name: props.name, background: props.background, color: props.color, alt: props.alt }),
    active ? h(AlertLevel, { level: 'low', size: dot, className: 'mngds-user-pic__active', label: props.activeLabel }) : null,
    alert !== 'none' ? h(AlertLevel, { level: alert, size: dot, className: 'mngds-user-pic__alert', label: props.alertLabel }) : null);
}
