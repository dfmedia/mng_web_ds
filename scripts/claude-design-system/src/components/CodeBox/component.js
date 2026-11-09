/* Code Box (MNG Web Design System, Form Fields page, 6964:7032). One cell of a verification code or PIN:
   36x56 Desktop, 26x40 Mobile; a real one-character <input>. `state` forces a documentation state; real focus
   shows Focus (Error Focus when `state` is 'Error'). Success = the code is complete, not confirmed (no icon). */
function CodeBox(props) {
  var size = props.size || 'Desktop';
  var state = props.state || 'Blank';
  var isError = state === 'Error' || state === 'Error Focus';
  var input = {
    className: 'mngds-code-box__input', type: 'text', inputMode: props.inputMode || 'numeric', maxLength: 1,
    autoComplete: props.autoComplete, name: props.name, id: props.id,
    disabled: state === 'Disabled' || !!props.disabled,
    'aria-label': props['aria-label'], 'aria-invalid': isError ? 'true' : undefined, 'aria-describedby': props['aria-describedby'],
    onKeyDown: props.onKeyDown, onFocus: props.onFocus, onBlur: props.onBlur, ref: props.inputRef
  };
  var value = props.value != null ? props.value : (state === 'Blank' ? '' : '5');
  if (props.onChange) { input.value = value; input.onChange = props.onChange; } else input.defaultValue = value;
  return h('span', Object.assign(rest(props, ['size', 'state', 'value', 'onChange', 'onKeyDown', 'onFocus', 'onBlur', 'inputMode', 'autoComplete',
      'name', 'id', 'disabled', 'aria-label', 'aria-describedby', 'inputRef', 'className']), {
      className: cx('mngds-code-box', 'mngds-code-box--' + slug(size), 'mngds-code-box--state-' + slug(state),
        (state === 'Focus' || state === 'Error Focus') && 'is-focus', props.className)
    }), h('input', input));
}
