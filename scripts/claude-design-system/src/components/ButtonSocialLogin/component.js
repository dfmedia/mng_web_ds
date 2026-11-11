/* ButtonSocialLogin (MNG Web Design System, Buttons page, 6516:5394). The pill button used for social sign-in and the
   Embedded Login footer CTAs (rebuilt 2026-11-11). Root = the variant frame with its 8px side margin (Karl,
   2026-11-11); Button = the 40px control with fully round ends (radius = half the height, Karl 2026-11-11) and a 1px
   inside stroke (an inset shadow, so it adds no width). iconPosition 'only' is a 40x40 circle.
   `interaction` and `inFocus` force documentation states; real :hover, :active and :focus-visible apply the same. */
function ButtonSocialLogin(props) {
  var pos = props.iconPosition || 'None';
  var interaction = props.interaction || 'Default';
  var focus = props.inFocus === true || props.inFocus === 'True';
  var iconName = props.icon || 'new-tab';
  var label = props.label != null ? props.label : props.children != null ? props.children : 'Social Button';
  var Tag = props.href ? 'a' : 'button';
  var ctl = {
    className: cx('mngds-button-social-login__button', interaction !== 'Default' && 'is-' + slug(interaction), focus && 'is-infocus'),
    onClick: props.onClick,
    disabled: Tag === 'button' ? props.disabled : undefined,
    'aria-label': props['aria-label'] || (pos === 'only' ? (typeof label === 'string' ? label : undefined) : undefined)
  };
  if (Tag === 'a') { ctl.href = props.href; if (props.target) { ctl.target = props.target; ctl.rel = 'noopener'; } }
  else ctl.type = props.type || 'button';
  var icon = pos !== 'None' ? h(Icon, { name: iconName, size: 16, className: 'mngds-button-social-login__icon', style: props.iconColor ? { color: props.iconColor } : undefined }) : null;
  return h('div', Object.assign(rest(props, ['iconPosition', 'icon', 'iconColor', 'interaction', 'inFocus', 'label', 'href', 'target', 'onClick', 'disabled', 'type', 'aria-label', 'fill', 'className']), {
      className: cx('mngds-button-social-login', 'mngds-button-social-login--' + slug(pos), props.fill && 'mngds-button-social-login--fill', props.className)
    }),
    h(Tag, ctl,
      h('span', { className: 'mngds-button-social-login__content' },
        pos === 'left' || pos === 'only' ? icon : null,
        pos === 'only' ? null : h('span', { className: 'mngds-button-social-login__label' }, label),
        pos === 'right' ? icon : null)));
}
