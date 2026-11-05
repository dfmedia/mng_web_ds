/* Form Field Assembly / CC details (MNG Web Design System, Form Fields page, 7003:28816). Form Field instances in rows (no left icon, no
   error rows of their own) and one shared error row under the group. `fields` overrides any field's
   FormField props by key (number, exp, cvv, zip); a field with state 'Error' or 'Error Focus' is linked to the shared message. */
function CcDetails(props) {
  var size = props.size || 'Desktop';
  var mobile = size === 'Mobile';
  var autoId = React.useId();
  var msgId = (props.id || 'mngds-cc-details-' + autoId.replace(/[^A-Za-z0-9_-]/g, '')) + '-message';
  var over = props.fields || {};
  var ROWS = [[["number", "Card Number", "1234 5678 9012 3456", [312, 264]]], [["exp", "Exp. Date", "12/34", [96, 90]], ["cvv", "CVV", "1234", [74, 69]], ["zip", "Zip Code", "90210", [84, 78]]]];
  function field(f) {
    var o = over[f[0]] || {};
    var err = o.state === 'Error' || o.state === 'Error Focus';
    var w = f[3] === 'fill' ? null : (mobile ? f[3][1] : f[3][0]);
    return h('div', { key: f[0], className: cx('mngds-cc-details__cell', !w && 'mngds-cc-details__cell--fill'), style: w ? { width: w + 'px' } : null },
      h(FormField, Object.assign({ size: size, label: f[1], placeholder: f[2], value: f[2], showIcon: false }, o,
        { errorRow: false, 'aria-describedby': cx(err && props.showError && msgId, o['aria-describedby']) || undefined })));
  }
  var rows = ROWS.filter(function (r, i) { return props.showCardNumber !== false || i > 0; }).map(function (r, i) { return h('div', { key: i, className: 'mngds-cc-details__row' }, r.map(field)); });
  return h('div', Object.assign(rest(props, ['size', 'fields', 'showError', 'errorMessage', 'stack', 'showCardNumber', 'id', 'className']), {
      className: cx('mngds-cc-details', 'mngds-cc-details--' + slug(size), props.stack && 'mngds-cc-details--stack', props.className)
    }),
    rows,
    h('p', { id: msgId, className: 'mngds-cc-details__error', role: props.showError ? 'alert' : undefined },
      props.showError ? (props.errorMessage != null ? props.errorMessage : 'Error message text.') : null));
}
