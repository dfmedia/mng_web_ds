/* Form Field Assembly / Name pair (MNG Web Design System, Form Fields page, 7003:28636). Form Field instances in rows (no left icon, no
   error rows of their own) and one shared error row under the group. `fields` overrides any field's
   FormField props by key (first, last); a field with state 'Error' or 'Error Focus' is linked to the shared message. */
function NamePair(props) {
  var size = props.size || 'Desktop';
  var mobile = size === 'Mobile';
  var autoId = React.useId();
  var msgId = (props.id || 'mngds-name-pair-' + autoId.replace(/[^A-Za-z0-9_-]/g, '')) + '-message';
  var over = props.fields || {};
  var ROWS = [[["first", "First Name", "First Name", "fill"], ["last", "Last Name", "Last Name", "fill"]]];
  function field(f) {
    var o = over[f[0]] || {};
    var err = o.state === 'Error' || o.state === 'Error Focus';
    var w = f[3] === 'fill' ? null : (mobile ? f[3][1] : f[3][0]);
    return h('div', { key: f[0], className: cx('mngds-name-pair__cell', !w && 'mngds-name-pair__cell--fill'), style: w ? { width: w + 'px' } : null },
      h(FormField, Object.assign({ size: size, label: f[1], placeholder: f[2], value: f[2], showIcon: false }, o,
        { errorRow: false, 'aria-describedby': cx(err && props.showError && msgId, o['aria-describedby']) || undefined })));
  }
  var rows = ROWS.map(function (r, i) { return h('div', { key: i, className: 'mngds-name-pair__row' }, r.map(field)); });
  return h('div', Object.assign(rest(props, ['size', 'fields', 'showError', 'errorMessage', 'stack', 'showCardNumber', 'id', 'className']), {
      className: cx('mngds-name-pair', 'mngds-name-pair--' + slug(size), props.stack && 'mngds-name-pair--stack', props.className)
    }),
    rows,
    h('p', { id: msgId, className: 'mngds-name-pair__error', role: props.showError ? 'alert' : undefined },
      props.showError ? (props.errorMessage != null ? props.errorMessage : 'Error message text.') : null));
}
