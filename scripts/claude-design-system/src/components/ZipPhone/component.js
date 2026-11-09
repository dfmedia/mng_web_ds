/* Form Field Assembly / Zip + Phone (MNG Web Design System, Form Fields page, 7003:28666). Form Field instances in rows (no left icon, no
   error rows of their own) and one shared error row under the group. `fields` overrides any field's
   FormField props by key (zip, phone); a field with state 'Error' or 'Error Focus' is linked to the shared message. */
function ZipPhone(props) {
  var size = props.size || 'Desktop';
  var mobile = size === 'Mobile';
  var autoId = React.useId();
  var msgId = (props.id || 'mngds-zip-phone-' + autoId.replace(/[^A-Za-z0-9_-]/g, '')) + '-message';
  var over = props.fields || {};
  var ROWS = [[["zip", "Zip Code", "90210", [84, 78]], ["phone", "Phone Number", "Phone Number", "fill"]]];
  function field(f) {
    var o = over[f[0]] || {};
    var err = o.state === 'Error' || o.state === 'Error Focus';
    var w = f[3] === 'fill' ? null : (mobile ? f[3][1] : f[3][0]);
    return h('div', { key: f[0], className: cx('mngds-zip-phone__cell', !w && 'mngds-zip-phone__cell--fill'), style: w ? { width: w + 'px' } : null },
      h(FormField, Object.assign({ size: size, label: f[1], placeholder: f[2], value: f[2], showIcon: false }, o,
        { errorRow: false, 'aria-describedby': cx(err && props.showError && msgId, o['aria-describedby']) || undefined })));
  }
  var rows = ROWS.map(function (r, i) { return h('div', { key: i, className: 'mngds-zip-phone__row' }, r.map(field)); });
  return h('div', Object.assign(rest(props, ['size', 'fields', 'showError', 'errorMessage', 'stack', 'showCardNumber', 'id', 'className']), {
      className: cx('mngds-zip-phone', 'mngds-zip-phone--' + slug(size), props.stack && 'mngds-zip-phone--stack', props.className)
    }),
    rows,
    h('p', { id: msgId, className: 'mngds-zip-phone__error', role: props.showError ? 'alert' : undefined },
      props.showError ? (props.errorMessage != null ? props.errorMessage : 'Error message text.') : null));
}
