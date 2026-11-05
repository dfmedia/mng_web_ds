/* Form Field Assembly / Verification Code (MNG Web Design System, Form Fields page, 7003:29223).
   A label, six Code Box cells and one shared error row. Typing moves to the next cell, Backspace on an empty
   cell to the previous one, and a pasted code fills the cells. `state` applies to every cell: 'Success' once
   the code is complete (no checkmark: only the server can confirm it), 'Error' when the server rejects it. */
function VerificationCode(props) {
  var size = props.size || 'Desktop';
  var length = props.length || 6;
  var autoId = React.useId();
  var base = props.id || 'mngds-verification-code-' + autoId.replace(/[^A-Za-z0-9_-]/g, '');
  var labelId = base + '-label', msgId = base + '-message';
  var internal = React.useState(props.defaultValue || '');
  var value = (props.value != null ? props.value : internal[0]) || '';
  var refs = React.useRef([]);
  var state = props.state;
  var isErr = state === 'Error' || state === 'Error Focus';
  function setValue(v) {
    v = v.replace(/\s/g, '').slice(0, length);
    if (props.value == null) internal[1](v);
    if (props.onChange) props.onChange(v);
    if (v.length === length && props.onComplete) props.onComplete(v);
  }
  function focusCell(i) { var el = refs.current[Math.max(0, Math.min(length - 1, i))]; if (el) el.focus(); }
  var cells = [];
  for (var i = 0; i < length; i++) (function (i) {
    var ch = value[i] || '';
    cells.push(h(CodeBox, { key: i, size: size, value: ch, 'aria-label': 'Digit ' + (i + 1) + ' of ' + length,
      'aria-describedby': isErr && props.showError ? msgId : undefined,
      autoComplete: i === 0 ? 'one-time-code' : 'off',
      state: state || (ch ? 'Filled' : 'Blank'),
      inputRef: function (el) { refs.current[i] = el; },
      onChange: function (e) {
        var t = e.target.value;
        if (t.length > 1) { setValue(value.slice(0, i) + t); focusCell(i + t.length); return; }
        var arr = value.split(''); while (arr.length < i) arr.push(' ');
        arr[i] = t; setValue(arr.join('').replace(/\s+$/, ''));
        if (t) focusCell(i + 1);
      },
      onKeyDown: function (e) {
        if (e.key === 'Backspace' && !ch && i > 0) { focusCell(i - 1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); focusCell(i - 1); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); focusCell(i + 1); }
      }
    }));
  })(i);
  return h('div', Object.assign(rest(props, ['size', 'label', 'length', 'value', 'defaultValue', 'onChange', 'onComplete', 'state', 'showError', 'errorMessage', 'id', 'className']), {
      className: cx('mngds-verification-code', 'mngds-verification-code--' + slug(size), props.className),
      role: 'group', 'aria-labelledby': labelId
    }),
    h('span', { id: labelId, className: 'mngds-verification-code__label' }, props.label != null ? props.label : 'Verification Code'),
    h('div', { className: 'mngds-verification-code__row', onPaste: function (e) {
        var t = (e.clipboardData && e.clipboardData.getData('text') || '').replace(/\s/g, '');
        if (t.length > 1) { e.preventDefault(); setValue(t); focusCell(t.length); }
      } }, cells),
    h('p', { id: msgId, className: 'mngds-verification-code__error', role: props.showError ? 'alert' : undefined },
      props.showError ? (props.errorMessage != null ? props.errorMessage : 'Error message text.') : null));
}
