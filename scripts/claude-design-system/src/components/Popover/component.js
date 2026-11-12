/* Popover (MNG Web Design System, Tooltips page, 7574:28804; new 2026-11-12, Karl). A small floating panel of actions
   (buttons or links) opened by a trigger button: the Toggletip's look (white box, 1px border, 4px corners, shadow/lg,
   12x6 caret) with a Content area. Unlike Tooltip / Toggletip it takes keyboard focus, so the trigger owns
   aria-expanded / aria-controls and the component that opens it moves focus in and closes it (SocialButtons does).
   `anchored` positions it centered on a `position: relative` trigger wrapper, 8px from it. */
function Popover(props) {
  var placement = props.placement === 'Top' ? 'Top' : 'Bottom';
  var caret = h('span', { className: 'mngds-popover__caret', 'aria-hidden': 'true' },
    h('span', { className: 'mngds-popover__caret-border' }), h('span', { className: 'mngds-popover__caret-fill' }));
  var box = h('div', { className: 'mngds-popover__box' }, h('div', { className: 'mngds-popover__content' }, props.children));
  return h('div', Object.assign(rest(props, ['placement', 'anchored', 'className', 'role']), {
      role: props.role || 'group',
      className: cx('mngds-popover', 'mngds-popover--' + slug(placement), props.anchored && 'mngds-popover--anchored', props.className)
    }), placement === 'Bottom' ? caret : null, box, placement === 'Top' ? caret : null);
}
