/* Homepage Tabs (WordPress Elements, Menus and Parts, 3629:44974).
   Full-width color/gray/max bar with a 1px color/gray/300 bottom rule; Nav (1200 max, centered, 24px sides at Desktop,
   none at Mobile) holding a ul[role=tablist] of HomepageTab (24px apart, sideways scroll with the scrollbar hidden).
   Controlled with `selectedIndex` + `onChange`, or uncontrolled from `defaultSelectedIndex`.
   Keyboard (WAI-ARIA Tabs pattern, manual activation; Karl, 2026-11-04): only the selected tab is in the Tab order
   (tabindex 0, the others -1); Left / Right arrows move focus to the previous / next tab (wrapping), Home / End to the
   first / last; Enter or Space selects the focused tab (it's a button). Activation is manual because choosing For You can
   open the Welcome modal, which shouldn't happen just from arrowing past it. */
function HomepageTabs(props) {
  var bp = props.breakpoint || 'Desktop';
  var tabs = props.tabs || [{ label: "Editor's Picks" }, { label: 'For You' }];
  var inner = React.useState(props.defaultSelectedIndex || 0);
  var selected = props.selectedIndex != null ? props.selectedIndex : inner[0];
  function pick(i, e) {
    if (props.selectedIndex == null) inner[1](i);
    if (props.onChange) props.onChange(i, e);
  }
  function onKey(e) {
    var list = e.currentTarget, btns = list.querySelectorAll('[role="tab"]'), n = btns.length;
    var at = Array.prototype.indexOf.call(btns, e.target);
    if (at < 0 || !n) return;
    var to = e.key === 'ArrowRight' ? (at + 1) % n : e.key === 'ArrowLeft' ? (at - 1 + n) % n : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : -1;
    if (to < 0) return;
    e.preventDefault();
    for (var k = 0; k < n; k++) btns[k].setAttribute('tabindex', k === to ? '0' : '-1');
    btns[to].focus();
  }
  return h('div', Object.assign(rest(props, ['breakpoint', 'tabs', 'selectedIndex', 'defaultSelectedIndex', 'onChange', 'aria-label', 'className']), {
      className: cx('mngds-homepage-tabs', 'mngds-homepage-tabs--' + slug(bp), props.className)
    }),
    h('div', { className: 'mngds-homepage-tabs__nav' },
      h('ul', { className: 'mngds-homepage-tabs__tab-list', role: 'tablist', 'aria-label': props['aria-label'] || undefined, onKeyDown: onKey },
        tabs.map(function (t, i) {
          var on = i === selected;
          return h('li', { key: t.id || i, role: 'presentation', className: 'mngds-homepage-tabs__item' },
            h(HomepageTab, {
              id: t.id, label: t.label, controls: t.panelId, selected: on, tabIndex: on ? 0 : -1,
              onClick: function (e) { pick(i, e); }
            }));
        }))),
    h('span', { className: 'mngds-homepage-tabs__bottom-border', 'aria-hidden': 'true' }));
}
