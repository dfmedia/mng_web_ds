/* Tab Nav (WordPress Elements, Menus and Parts, 3629:44974).
   Full-width color/gray/max bar with a 1px color/gray/300 bottom rule; Nav (1280 max, centered, 8px sides) holding a
   ul[role=tablist] of TabNavItem (8px apart, sideways scroll with the scrollbar hidden).
   Controlled with `selectedIndex` + `onChange`, or uncontrolled from `defaultSelectedIndex`.
   Keyboard (WAI-ARIA Tabs pattern, manual activation; Karl, 2026-11-04): only the selected tab is in the Tab order
   (tabindex 0, the others -1); Left / Right arrows move focus to the previous / next tab (wrapping), Home / End to the
   first / last; Enter or Space selects the focused tab (it's a button). Activation is manual because choosing For You can
   open the Welcome modal, which shouldn't happen just from arrowing past it.
   Overflow, option C1 (Karl, 2026-11-24; replaces the 2026-11-23 cut-in-half rule): when the tabs don't all fit, the
   bar stays full width, the tabs stay 8px apart (spacing/100; Karl, 2026-11-24, was 24px with narrowing to 12px), so the
   tab at the edge shows partly; the side with more tabs fades over 48px, and a chevron button (16px arrow-left /
   arrow-right, color/gray/300) sits on that side. The fade ends just inside the 36px chevron, so the cut tab still shows. A chevron
   scrolls about 80% of the visible width, sliding in 250ms ease-in-out, the section menu drawer's (Push Nav) speed
   (Karl, 2026-11-24: the browser's smooth scroll was too abrupt); instant with reduced motion. Chevrons are pointer
   aids: keyboard and screen-reader users move with the tablist's arrow keys, so the chevrons are aria-hidden and out
   of the Tab order. Re-measured on resize, on scroll and when fonts load. */
var TAB_NAV_CHEVRON = 36, TAB_NAV_FADE = 48, TAB_NAV_SLIDE_MS = 250;
/* CSS ease-in-out, cubic-bezier(0.42, 0, 0.58, 1): solve x(t) = p by Newton steps, return y(t). */
function tabNavEase(p) {
  var t = p;
  for (var i = 0; i < 6; i++) {
    var x = 3 * 0.42 * t * (1 - t) * (1 - t) + 3 * 0.58 * t * t * (1 - t) + t * t * t - p;
    var dx = 3 * 0.42 * (1 - t) * (1 - 3 * t) + 3 * 0.58 * t * (2 - 3 * t) + 3 * t * t;
    if (Math.abs(x) < 1e-5 || !dx) break; t -= x / dx;
  }
  t = Math.min(1, Math.max(0, t));
  return 3 * t * t * (1 - t) + t * t * t;
}
function TabNav(props) {
  var bp = props.breakpoint || 'Desktop';
  var tabs = props.tabs || [{ label: "Editor's Picks" }, { label: 'For You' }];
  var inner = React.useState(props.defaultSelectedIndex || 0);
  var selected = props.selectedIndex != null ? props.selectedIndex : inner[0];
  var listRef = React.useRef(null);
  var sc = React.useState({ sl: 0, max: 0 }), scroll = sc[0], setScroll = sc[1];
  var labels = tabs.map(function (t) { return t.label; }).join('\u0001');
  function measure() {
    var list = listRef.current; if (!list) return;
    var max = Math.max(0, list.scrollWidth - list.clientWidth);
    setScroll(function (o) { return (o.sl === list.scrollLeft && o.max === max) ? o : { sl: list.scrollLeft, max: max }; });
  }
  React.useLayoutEffect(function () {
    var list = listRef.current;
    if (!list) return undefined;
    function fit() { measure(); }
    fit();
    var ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(fit) : null;
    if (ro) ro.observe(list.parentNode); else window.addEventListener('resize', fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
    return function () { if (ro) ro.disconnect(); else window.removeEventListener('resize', fit); };
  }, [labels, bp]);
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
    btns[to].scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }
  var slideRef = React.useRef(0);
  React.useEffect(function () { return function () { cancelAnimationFrame(slideRef.current); }; }, []);
  function page(dir) {
    var list = listRef.current; if (!list) return;
    var max = list.scrollWidth - list.clientWidth, from = list.scrollLeft;
    var to = Math.max(0, Math.min(max, from + dir * list.clientWidth * 0.8));
    cancelAnimationFrame(slideRef.current);
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || to === from) { list.scrollLeft = to; measure(); return; }
    var start = null;
    function step(now) {
      if (start === null) start = now;
      var p = Math.min(1, (now - start) / TAB_NAV_SLIDE_MS);
      list.scrollLeft = from + (to - from) * tabNavEase(p);
      if (p < 1) slideRef.current = requestAnimationFrame(step); else measure();
    }
    slideRef.current = requestAnimationFrame(step);
  }
  var moreL = scroll.max > 1 && scroll.sl > 1, moreR = scroll.max > 1 && scroll.sl < scroll.max - 1;
  var C = TAB_NAV_CHEVRON + 'px', F = (TAB_NAV_CHEVRON + TAB_NAV_FADE) + 'px';
  var stops = moreL && moreR ? 'transparent ' + C + ', #000 ' + F + ', #000 calc(100% - ' + F + '), transparent calc(100% - ' + C + ')'
    : moreR ? '#000 calc(100% - ' + F + '), transparent calc(100% - ' + C + ')'
    : moreL ? 'transparent ' + C + ', #000 ' + F : null;
  var mask = stops ? { WebkitMaskImage: 'linear-gradient(90deg, ' + stops + ')', maskImage: 'linear-gradient(90deg, ' + stops + ')' } : null;
  function chevron(dir) {
    return h('button', { type: 'button', tabIndex: -1, 'aria-hidden': 'true',
        className: cx('mngds-tab-nav__chevron', 'mngds-tab-nav__chevron--' + (dir < 0 ? 'left' : 'right')),
        onClick: function () { page(dir); } },
      h(Icon, { name: dir < 0 ? 'arrow-left' : 'arrow-right', size: 16 }));
  }
  return h('div', Object.assign(rest(props, ['breakpoint', 'tabs', 'selectedIndex', 'defaultSelectedIndex', 'onChange', 'aria-label', 'className']), {
      className: cx('mngds-tab-nav', 'mngds-tab-nav--' + slug(bp), props.className)
    }),
    h('div', { className: 'mngds-tab-nav__nav' },
      h('ul', { ref: listRef, className: 'mngds-tab-nav__tab-list', role: 'tablist', 'aria-label': props['aria-label'] || undefined,
          onKeyDown: onKey, onScroll: measure, style: mask || undefined },
        tabs.map(function (t, i) {
          var on = i === selected;
          return h('li', { key: t.id || i, role: 'presentation', className: 'mngds-tab-nav__item' },
            h(TabNavItem, {
              id: t.id, label: t.label, controls: t.panelId, selected: on, tabIndex: on ? 0 : -1,
              onClick: function (e) { pick(i, e); }
            }));
        })),
      moreL ? chevron(-1) : null,
      moreR ? chevron(1) : null),
    h('span', { className: 'mngds-tab-nav__bottom-border', 'aria-hidden': 'true' }));
}
