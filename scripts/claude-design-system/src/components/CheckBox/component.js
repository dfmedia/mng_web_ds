/* CheckBox (MNG Web Design System, Check Boxes page, 4693:690). A 14x14 box in a 40x40 touch area; a real
   <input type="checkbox"> covers the touch area. `status` is the checked state (partial = indeterminate);
   `interaction` and `inFocus` force documentation states; real :hover, :active and :focus-visible apply the same. */
function CheckBox(props) {
  var status = props.status || 'unselected';
  var interaction = props.interaction || 'Default';
  var focus = props.inFocus === true || props.inFocus === 'True';
  var disabled = interaction === 'disabled' || !!props.disabled;
  var ref = React.useRef(null);
  React.useEffect(function () { if (ref.current) ref.current.indeterminate = status === 'partial'; }, [status]);
  var input = {
    ref: ref, type: 'checkbox', className: 'mngds-checkbox__input', id: props.id, name: props.name, value: props.value,
    disabled: disabled, required: props.required,
    'aria-label': props['aria-label'], 'aria-labelledby': props['aria-labelledby'], 'aria-describedby': props['aria-describedby'],
    'aria-invalid': props['aria-invalid'], 'aria-checked': status === 'partial' ? 'mixed' : undefined
  };
  if (props.onChange) { input.checked = status === 'selected'; input.onChange = props.onChange; }
  else input.defaultChecked = status === 'selected';
  return h('span', Object.assign(rest(props, ['status', 'interaction', 'inFocus', 'disabled', 'id', 'name', 'value', 'required', 'onChange',
      'aria-label', 'aria-labelledby', 'aria-describedby', 'aria-invalid', 'className']), {
      className: cx('mngds-checkbox', 'mngds-checkbox--' + slug(status), interaction !== 'Default' && 'is-' + slug(interaction),
        disabled && 'mngds-checkbox--disabled', focus && 'is-infocus', props.className)
    }),
    h('input', input),
    h('span', { className: 'mngds-checkbox__box', 'aria-hidden': 'true' },
      status === 'selected' ? h(Icon, { name: 'checkmark3', size: 12, className: 'mngds-checkbox__icon' })
        : status === 'partial' ? h(Icon, { name: 'minus', size: 12, className: 'mngds-checkbox__icon' }) : null));
}
