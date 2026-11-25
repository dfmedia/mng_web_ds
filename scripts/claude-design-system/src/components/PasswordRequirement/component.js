/* Password Requirement (MNG Web Design System, Form Fields page, 7672:27628).
   One row of the password requirements list: an icon and the requirement text. Not met = open circle,
   near-black; Met = check circle, green (Karl, 2026-11-25). The icon shape changes too, so met is never
   shown by color alone; screen readers hear the state after the text. Renders an <li> by default
   (`as: 'div'` for a row outside a list). */
function PasswordRequirement(props) {
  var size = props.size || 'Desktop';
  var met = props.met === true || props.state === 'Met';
  var label = props.children != null ? props.children : props.label != null ? props.label : 'Minimum length is 6';
  return h(props.as || 'li', Object.assign(rest(props, ['size', 'met', 'state', 'label', 'as', 'children', 'className']), {
      className: cx('mngds-password-requirement', 'mngds-password-requirement--' + slug(size),
        met ? 'mngds-password-requirement--met' : 'mngds-password-requirement--not-met', props.className)
    }),
    h(Icon, { name: met ? 'checkmark-circle' : 'radio-unchecked', size: 'var(--mng-password-requirement-base-icon-width)',
      className: 'mngds-password-requirement__icon', 'aria-hidden': 'true' }),
    h('span', { className: 'mngds-password-requirement__text' }, label,
      h('span', { className: 'mngds-password-requirement__state' }, met ? ', met' : ', not met')));
}
