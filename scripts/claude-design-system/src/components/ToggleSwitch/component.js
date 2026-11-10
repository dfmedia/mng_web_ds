/* ToggleSwitch (MNG Web Design System, Toggle Switches page, 5216:61). Built like CheckBox (Karl, 2026-11-10):
   a 48x24 slider in a 64x40 touch area; a real <input type="checkbox" role="switch"> covers the touch area.
   `status` is the on / off state; `interaction` and `inFocus` force documentation states; real :hover,
   :active and :focus-visible apply the same. `icon` shows close / checkmark3 in the handle. */
function ToggleSwitch(props) {
  var status = props.status || 'unselected';
  var on = status === 'selected';
  var interaction = props.interaction || 'Default';
  var focus = props.inFocus === true || props.inFocus === 'True';
  var icon = props.icon === true || props.icon === 'True';
  var disabled = interaction === 'disabled' || !!props.disabled;
  var input = {
    type: 'checkbox', role: 'switch', className: 'mngds-toggle-switch__input', id: props.id, name: props.name, value: props.value,
    disabled: disabled,
    'aria-label': props['aria-label'], 'aria-labelledby': props['aria-labelledby'], 'aria-describedby': props['aria-describedby']
  };
  if (props.onChange) { input.checked = on; input.onChange = props.onChange; }
  else input.defaultChecked = on;
  return h('span', Object.assign(rest(props, ['status', 'interaction', 'inFocus', 'icon', 'disabled', 'id', 'name', 'value', 'onChange',
      'aria-label', 'aria-labelledby', 'aria-describedby', 'className']), {
      className: cx('mngds-toggle-switch', 'mngds-toggle-switch--' + slug(status), interaction !== 'Default' && 'is-' + slug(interaction),
        disabled && 'mngds-toggle-switch--disabled', focus && 'is-infocus', props.className)
    }),
    h('input', input),
    h('span', { className: 'mngds-toggle-switch__slider', 'aria-hidden': 'true' },
      h('span', { className: 'mngds-toggle-switch__handle' },
        icon ? h(Icon, { name: on ? 'checkmark3' : 'close', size: 12, className: 'mngds-toggle-switch__icon' }) : null)));
}
