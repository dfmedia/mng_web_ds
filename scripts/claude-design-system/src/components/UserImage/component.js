/* UserImage (WordPress Elements, Menus and Parts, 456:5708): the reader's avatar art, a circle. Size = small (32px,
   masthead; production 30px, Karl 2026-11-13: 32), medium (40px), large (64px). Graphic = unknown (user icon),
   monogram / monogramPP (initials on avatar art that changes by reader), social (the reader's photo: pass `src`). */
var USER_IMAGE_ICON = { small: 16, medium: 24, large: 24 };
function UserImage(props) {
  var size = String(props.size || 'small').toLowerCase();
  if (!USER_IMAGE_ICON[size]) size = 'small';
  var g = String(props.graphic || (props.src ? 'social' : props.initials || props.name ? 'monogram' : 'unknown'));
  var graphic = /^social/i.test(g) ? (props.src ? 'social' : 'monogram') : /^monogrampp$/i.test(g) ? 'monogrampp' : /^monogram$/i.test(g) ? 'monogram' : 'unknown';
  var initials = props.initials || String(props.name || 'Reader').split(/\s+/).map(function (w) { return w.charAt(0); }).join('').slice(0, 2).toUpperCase();
  var style = Object.assign({}, props.background && graphic !== 'unknown' && graphic !== 'social' ? { background: props.background, color: props.color } : null, props.style);
  var root = Object.assign(rest(props, ['size', 'graphic', 'src', 'initials', 'name', 'alt', 'background', 'color', 'className', 'style']), {
    className: cx('mngds-user-image', 'mngds-user-image--' + size, 'mngds-user-image--' + graphic, props.className), style: style,
    role: props.alt ? 'img' : undefined, 'aria-label': props.alt || undefined, 'aria-hidden': props.alt ? undefined : 'true'
  });
  var inner = graphic === 'social' ? h('img', { className: 'mngds-user-image__photo', src: props.src, alt: '' })
    : graphic === 'unknown' ? h(Icon, { name: 'user', size: USER_IMAGE_ICON[size] })
    : h('span', { className: 'mngds-user-image__initials' }, initials);
  return h('span', root, inner);
}
