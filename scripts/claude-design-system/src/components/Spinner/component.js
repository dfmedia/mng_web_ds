/* Spinner (MNG Web Design System, Style Guide | Loading Animation page, 7673:28421).
   A ring: the track (same color at 30% opacity) and a quarter arc that turns, 12 to 3 o'clock at rest.
   Size 20 (inside a button) or 48 (content area); the ring is 1/8 of the size (2.5px, 6px); Color On dark (gray/max) or On light (gray/min).
   Decorative (aria-hidden): the waiting area or button carries aria-busy and says what is happening.
   One turn every 0.8s; with reduced motion, one turn every 2s instead of stopping (Karl, 2026-11-24). */
function Spinner(props) {
  var size = String(props.size || 48) === '20' ? '20' : '48';
  var color = props.color === 'On dark' ? 'On dark' : 'On light';
  return h('span', Object.assign(rest(props, ['size', 'color', 'className']), {
      className: cx('mngds-spinner', 'mngds-spinner--size-' + size, 'mngds-spinner--' + slug(color), props.className),
      'aria-hidden': 'true'
    }),
    h('span', { className: 'mngds-spinner__track' }),
    h('span', { className: 'mngds-spinner__arc' }));
}
