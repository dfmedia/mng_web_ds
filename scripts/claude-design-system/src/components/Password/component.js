/* Form Field Assembly / Password (MNG Web Design System, Form Fields page, 7003:28940).
   Password (no error row), the requirements hint directly under it, then Confirm Password and the only
   error row, which shows an error for either field (Karl, 2026-11-04). `fields.password` / `fields.confirm`
   override the FormField props; the field in error points at that row, and Password at the hint. */
function Password(props) {
  var size = props.size || 'Desktop';
  var autoId = React.useId();
  var base = props.id || 'mngds-password-' + autoId.replace(/[^A-Za-z0-9_-]/g, '');
  var hintId = base + '-hint', msgId = base + '-message';
  var over = props.fields || {};
  var pw = over.password || {}, cf = over.confirm || {};
  function isErr(o) { return o.state === 'Error' || o.state === 'Error Focus'; }
  var pwErr = isErr(pw), cfErr = isErr(cf), anyErr = pwErr || cfErr;
  var showHint = props.showHint !== false;
  var hint = props.hint != null ? props.hint : 'Minimum length is 6\nInclude at least 1 letter\nInclude at least 1 number';
  var message = props.errorMessage != null ? props.errorMessage : cfErr && cf.errorMessage != null ? cf.errorMessage : pw.errorMessage != null ? pw.errorMessage : 'Error message text.';
  return h('div', Object.assign(rest(props, ['size', 'fields', 'hint', 'showHint', 'errorMessage', 'id', 'className']), {
      className: cx('mngds-password', 'mngds-password--' + slug(size), props.className)
    }),
    h(FormField, Object.assign({ size: size, label: 'Password', placeholder: 'Password', value: 'Password', type: 'password',
      autoComplete: 'new-password', showIcon: false }, pw,
      { errorRow: false, 'aria-describedby': cx(showHint && hintId, pwErr && msgId, pw['aria-describedby']) || undefined })),
    showHint ? h('p', { id: hintId, className: 'mngds-password__hint' }, hint) : null,
    h('div', { className: 'mngds-password__confirm' },
      h(FormField, Object.assign({ size: size, label: 'Confirm Password', placeholder: 'Confirm Password', value: 'Confirm Password',
        type: 'password', autoComplete: 'new-password', showIcon: false }, cf,
        { errorRow: false, 'aria-describedby': cx(cfErr && msgId, cf['aria-describedby']) || undefined })),
      h('p', { id: msgId, className: 'mngds-password__error', role: anyErr ? 'alert' : undefined }, anyErr ? message : null)));
}
