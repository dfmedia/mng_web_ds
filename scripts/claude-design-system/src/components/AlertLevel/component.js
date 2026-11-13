/* AlertLevel (MNG Web Design System, User Avatars and Status, 7594:29470; moved from WordPress Elements 2026-11-13): a status dot. Level = none (no dot), low, medium, high;
   Size = Small (8px: masthead, Account Dropdown Menu) / Large (16px: Reader Dashboard profile). UserPic uses two:
   top left = the reader is active, bottom right = an alert or message to see (Karl, 2026-11-13). */
function AlertLevel(props) {
  var level = String(props.level || 'none').toLowerCase();
  if (level === 'none') return null;
  var size = /^l/i.test(String(props.size || 'Small')) ? 'large' : 'small';
  var root = Object.assign(rest(props, ['level', 'size', 'label', 'className']), {
    className: cx('mngds-alert-level', 'mngds-alert-level--' + size, 'mngds-alert-level--' + level, props.className),
    role: props.label ? 'img' : undefined, 'aria-label': props.label || undefined, 'aria-hidden': props.label ? undefined : 'true'
  });
  return h('span', root);
}
