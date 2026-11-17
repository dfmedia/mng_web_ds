/* ButtonSocialLogin (MNG Web Design System, Buttons page, 6516:5394). The pill button used for social sign-in and the
   Embedded Login footer CTAs (rebuilt 2026-11-11). Root = the variant frame with its 8px side margin (Karl,
   2026-11-11); Button = the 40px control with fully round ends (radius = half the height, Karl 2026-11-11) and a 1px
   inside stroke (an inset shadow, so it adds no width). iconPosition 'only' is a 40x40 circle.
   brand (Karl, 2026-11-17): 'None' is our gray button; 'Apple', 'Google' and 'Facebook' are drawn the way each vendor
   requires, with their own logo and label ("Continue with ..."), and take iconPosition 'left' or 'only'.
   `interaction` and `inFocus` force documentation states; real :hover, :active and :focus-visible apply the same. */
var SL_BRANDS = { Apple: 'appleinc', Google: 'google-color', Facebook: 'facebook' };
function ButtonSocialLogin(props) {
  var brand = SL_BRANDS[props.brand] ? props.brand : 'None';
  var pos = props.iconPosition || (brand === 'None' ? 'None' : 'left');
  if (brand !== 'None' && pos !== 'only') pos = 'left';
  var interaction = props.interaction || 'Default';
  var focus = props.inFocus === true || props.inFocus === 'True';
  var iconName = brand !== 'None' ? SL_BRANDS[brand] : (props.icon || 'new-tab');
  var label = props.label != null ? props.label : props.children != null ? props.children : brand !== 'None' ? 'Continue with ' + brand : 'Social Button';
  var Tag = props.href ? 'a' : 'button';
  var ctl = {
    className: cx('mngds-button-social-login__button', interaction !== 'Default' && 'is-' + slug(interaction), focus && 'is-infocus'),
    onClick: props.onClick,
    disabled: Tag === 'button' ? props.disabled : undefined,
    'aria-label': props['aria-label'] || (pos === 'only' ? (typeof label === 'string' ? label : undefined) : undefined)
  };
  if (Tag === 'a') { ctl.href = props.href; if (props.target) { ctl.target = props.target; ctl.rel = 'noopener'; } }
  else ctl.type = props.type || 'button';
  var iconSize = brand === 'Google' ? 18 : 16;
  var iconColor = brand === 'None' ? props.iconColor : undefined;
  var icon = pos !== 'None' ? h(Icon, { name: iconName, size: iconSize, className: 'mngds-button-social-login__icon', style: iconColor ? { color: iconColor } : undefined }) : null;
  return h('div', Object.assign(rest(props, ['brand', 'iconPosition', 'icon', 'iconColor', 'interaction', 'inFocus', 'label', 'href', 'target', 'onClick', 'disabled', 'type', 'aria-label', 'fill', 'className']), {
      className: cx('mngds-button-social-login', 'mngds-button-social-login--brand-' + slug(brand), 'mngds-button-social-login--' + slug(pos), props.fill && 'mngds-button-social-login--fill', props.className)
    }),
    h(Tag, ctl,
      h('span', { className: 'mngds-button-social-login__content' },
        pos === 'left' || pos === 'only' ? icon : null,
        pos === 'only' ? null : h('span', { className: 'mngds-button-social-login__label' }, label),
        pos === 'right' ? icon : null)));
}
