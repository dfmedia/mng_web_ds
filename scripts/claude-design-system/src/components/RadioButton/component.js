/* RadioButton (MNG Web Design System, Radio Buttons page, 7589:29335). A 16px circle in a control at least 40px tall,
   with or without its label; a real <input type="radio"> covers the whole control. `status` is the checked state;
   `interaction` and `inFocus` force documentation states; real :hover, :active and :focus-visible apply the same.
   Group radios by `name` inside a <fieldset> with a <legend> (see RadioGroup in api.md). */
function RadioButton(props) {
  var status = props.status || 'unselected';
  var interaction = props.interaction || 'Default';
  var focus = props.inFocus === true || props.inFocus === 'True';
  var disabled = interaction === 'disabled' || !!props.disabled;
  var text = props.label;
  var showLabel = text != null && text !== '' && props.showLabel !== false;
  var input = {
    type: 'radio', className: 'mngds-radio-button__input', id: props.id, name: props.name, value: props.value,
    disabled: disabled, required: props.required,
    'aria-label': showLabel ? undefined : props['aria-label'], 'aria-labelledby': props['aria-labelledby'],
    'aria-describedby': props['aria-describedby']
  };
  if (props.onChange) { input.checked = status === 'selected'; input.onChange = props.onChange; }
  else input.defaultChecked = status === 'selected';
  return h('label', Object.assign(rest(props, ['status', 'interaction', 'inFocus', 'disabled', 'id', 'name', 'value', 'required', 'onChange',
      'label', 'showLabel', 'aria-label', 'aria-labelledby', 'aria-describedby', 'className']), {
      className: cx('mngds-radio-button', 'mngds-radio-button--' + slug(status), showLabel ? 'mngds-radio-button--label' : 'mngds-radio-button--no-label',
        interaction !== 'Default' && 'is-' + slug(interaction), disabled && 'mngds-radio-button--disabled', focus && 'is-infocus', props.className)
    }),
    h('input', input),
    h('span', { className: 'mngds-radio-button__circle', 'aria-hidden': 'true' },
      status === 'selected' ? h('span', { className: 'mngds-radio-button__dot' }) : null),
    showLabel ? h('span', { className: 'mngds-radio-button__label' }, text) : null);
}
