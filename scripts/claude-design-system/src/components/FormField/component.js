/* Form Field (MNG Web Design System, Form Fields page, 6963:6863).
   Label, input (56px Desktop / 40px Mobile) with optional left icon frame, right status / action icon and
   card badge, and a reserved error row. A real <input>: `state` forces a documentation state; without it,
   :focus-within gives Focus (or Error Focus when `state` is 'Error'). */
function FormField(props) {
  var size = props.size || 'Desktop';
  var state = props.state || 'Blank';
  var autoId = React.useId();
  var id = props.id || 'mngds-form-field-' + autoId.replace(/[^A-Za-z0-9_-]/g, '');
  var msgId = id + '-message';
  var isError = state === 'Error' || state === 'Error Focus';
  var isSuccess = state === 'Success';
  var disabled = state === 'Disabled' || !!props.disabled;
  var blank = state === 'Blank';
  var showValue = !blank && props.showValue !== false;
  var showPlaceholder = blank || !!props.showPlaceholder;
  var value = props.value != null ? props.value : 'Text entered by the user';
  var placeholder = props.placeholder != null ? props.placeholder : 'Placeholder text';
  var errorRow = props.errorRow !== false;

  var described = [isError && errorRow ? msgId : null, props['aria-describedby']].filter(Boolean).join(' ') || undefined;
  var input = {
    id: id, className: 'mngds-form-field__input', type: props.type || 'text', name: props.name,
    placeholder: showPlaceholder ? placeholder : undefined,
    disabled: disabled, readOnly: props.readOnly,
    autoComplete: props.autoComplete, inputMode: props.inputMode,
    'aria-invalid': isError ? 'true' : undefined,
    'aria-describedby': described,
    onBlur: props.onBlur, onFocus: props.onFocus
  };
  if (props.onChange) { input.value = showValue ? value : ''; input.onChange = props.onChange; }
  else input.defaultValue = showValue ? value : '';

  var right = null;
  if (isError) right = h(Icon, { name: 'warning', size: 16, className: 'mngds-form-field__status', label: props.errorIconLabel });
  else if (isSuccess) right = h(Icon, { name: 'checkmark3', size: 16, className: 'mngds-form-field__status', label: props.successIconLabel || 'Valid' });
  else if (props.showRightIcon) right = props.rightIconNode || h(Icon, { name: props.rightIcon || 'email', size: 16 });

  return h('div', Object.assign(rest(props, ['size', 'state', 'label', 'value', 'placeholder', 'errorMessage', 'showIcon', 'icon',
      'showLabelIcon', 'labelIcon', 'showRightIcon', 'rightIcon', 'rightIconNode', 'showCardBadge', 'cardBadge', 'showValue', 'showPlaceholder',
      'errorRow', 'id', 'name', 'type', 'onChange', 'onBlur', 'onFocus', 'disabled', 'readOnly', 'autoComplete', 'inputMode',
      'aria-describedby', 'errorIconLabel', 'successIconLabel', 'className']), {
      className: cx('mngds-form-field', 'mngds-form-field--' + slug(size), 'mngds-form-field--state-' + slug(state),
        (state === 'Focus' || state === 'Error Focus') && 'is-focus', props.className)
    }),
    h('label', { className: 'mngds-form-field__label', htmlFor: id },
      props.showLabelIcon ? h(Icon, { name: props.labelIcon || 'email', size: 16, className: 'mngds-form-field__label-icon' }) : null,
      h('span', { className: 'mngds-form-field__label-text' }, props.label != null ? props.label : 'Field Label')),
    h('div', { className: 'mngds-form-field__box' },
      props.showIcon !== false ? h('span', { className: 'mngds-form-field__icon-frame' }, h(Icon, { name: props.icon || 'email', size: 16 })) : null,
      h('span', { className: 'mngds-form-field__input-field' },
        h('input', input),
        props.showCardBadge && props.cardBadge ? h('span', { className: 'mngds-form-field__card-badge' }, props.cardBadge) : null),
      right ? h('span', { className: 'mngds-form-field__icon-frame-right' }, right) : null),
    errorRow ? h('p', { id: msgId, className: 'mngds-form-field__error' }, isError ? (props.errorMessage != null ? props.errorMessage : 'Error message text.') : null) : null);
}
