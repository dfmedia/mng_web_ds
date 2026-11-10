/* ModalsCenter (MNG Web Design System, Modal Panels page, 3040:2262). Centered pop-up modal.
   Root = the screen with the 50% black overlay (each Figma variant is the whole screen); Content Frame =
   the dialog card (role="dialog", aria-modal, labelled by the title). By default the root is fixed over the
   viewport and rendered as a direct child of <body> (everything else is made inert); `inline` renders it in
   flow at the Device's Figma size so previews and canvases show it.
   Scrolling (2026-11-04 rules): the header and CTA stack never scroll; when the content is taller than the
   space, the card fills the screen (inside its margin) and only the Body Container scrolls, with the
   color/gray/300 scroll indicator. Compact mode (visible area under 560px) and the on-screen keyboard rules
   follow the Specifications. */
var MC_FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
var MC_COMPACT_BELOW = 560; /* spec: compact mode when the visible area is under 560px */

/* Fixed mode: the visible area (window.visualViewport), re-measured on every resize and scroll. The keyboard
   counts as open when the visible area is at least 100px shorter than the layout viewport (iOS and Android
   with the page not resized). */
function useModalsCenterViewport(active) {
  var st = React.useState(null);
  React.useEffect(function () {
    if (!active) return undefined;
    var vv = window.visualViewport;
    function measure() {
      var hgt = vv ? vv.height : window.innerHeight, top = vv ? vv.offsetTop : 0;
      var kb = !!vv && (window.innerHeight - vv.height) >= 100;
      st[1](function (p) { return p && p.height === hgt && p.top === top && p.keyboard === kb ? p : { height: hgt, top: top, keyboard: kb }; });
    }
    measure();
    var t = vv || window;
    t.addEventListener('resize', measure); if (vv) vv.addEventListener('scroll', measure);
    return function () { t.removeEventListener('resize', measure); if (vv) vv.removeEventListener('scroll', measure); };
  }, [active]);
  return st[0];
}

function ModalsCenter(props) {
  var device = props.device || 'Desktop';
  var inline = !!props.inline;
  var isOpen = props.open !== false;
  var fixed = !inline && isOpen;
  var autoId = React.useId().replace(/[^A-Za-z0-9_-]/g, '');
  var titleId = 'mngds-mc-title-' + autoId, subId = 'mngds-mc-sub-' + autoId;
  var rootRef = React.useRef(null), cardRef = React.useRef(null), titleRef = React.useRef(null), scrollRef = React.useRef(null);
  var onCloseRef = React.useRef(props.onClose); onCloseRef.current = props.onClose;
  var sc = React.useState({ overflow: false, top: 0, size: 0, focusable: false }), scroll = sc[0], setScroll = sc[1];

  var vp = useModalsCenterViewport(fixed);
  var keyboard = props.keyboardOpen != null ? !!props.keyboardOpen : !!(vp && vp.keyboard);
  var visible = inline ? props.visibleHeight : (vp && vp.height);
  var compact = props.compact != null ? !!props.compact : (visible != null && visible < MC_COMPACT_BELOW);

  /* Fixed mode: render outside the page, make everything else inert, lock page scroll, move focus to the
     title, keep Tab inside the card, Esc closes, and give focus back when the modal closes. */
  React.useEffect(function () {
    if (!fixed) return undefined;
    var prev = document.activeElement, root = rootRef.current, card = cardRef.current;
    var made = [];
    Array.prototype.forEach.call(document.body.children, function (el) {
      if (el === root || el.contains(root) || el.inert || el.tagName === 'SCRIPT') return;
      el.inert = true; made.push(el);
    });
    var html = document.documentElement, prevOverflow = html.style.overflow;
    html.style.overflow = 'hidden';
    if (titleRef.current) titleRef.current.focus({ preventScroll: true });
    function onKey(e) {
      if (e.key === 'Escape' && onCloseRef.current) { e.stopPropagation(); onCloseRef.current(e); return; }
      if (e.key !== 'Tab' || !card) return;
      var f = Array.prototype.filter.call(card.querySelectorAll(MC_FOCUSABLE), function (el) { return el.offsetParent !== null || el === document.activeElement; });
      if (!f.length) { e.preventDefault(); return; }
      var first = f[0], last = f[f.length - 1], a = document.activeElement;
      if (e.shiftKey && (a === first || a === titleRef.current || !card.contains(a))) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (a === last || !card.contains(a))) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener('keydown', onKey);
    return function () {
      document.removeEventListener('keydown', onKey);
      made.forEach(function (el) { el.inert = false; });
      html.style.overflow = prevOverflow;
      if (prev && prev.focus && document.contains(prev)) prev.focus({ preventScroll: true });
    };
  }, [fixed]);

  /* Scroll indicator: shown whenever the body overflows; 4px from the Body Container's top, right and bottom. */
  function measureScroll() {
    var el = scrollRef.current; if (!el) return;
    var over = el.scrollHeight - el.clientHeight > 1;
    var track = el.clientHeight - 8, size = over ? Math.max(24, Math.round(track * el.clientHeight / el.scrollHeight)) : 0;
    var top = over ? Math.round(4 + (track - size) * el.scrollTop / (el.scrollHeight - el.clientHeight)) : 0;
    var focusable = !!el.querySelector(MC_FOCUSABLE);
    setScroll(function (p) { return p.overflow === over && p.top === top && p.size === size && p.focusable === focusable ? p : { overflow: over, top: top, size: size, focusable: focusable }; });
  }
  React.useLayoutEffect(function () {
    var el = scrollRef.current; if (!el) return undefined;
    measureScroll();
    var ro = window.ResizeObserver ? new ResizeObserver(measureScroll) : null;
    if (ro) { ro.observe(el); Array.prototype.forEach.call(el.children, function (c) { ro.observe(c); }); }
    return function () { if (ro) ro.disconnect(); };
  });

  /* Focus rule: a focused field's label sits at least 24px (spacing/300) below the top of the Body Container,
     and its hint or error stays above the CTA area. Only the body scrolls, never the page. */
  function placeField(target) {
    var el = scrollRef.current; if (!el || !target || !el.contains(target) || target === el) return;
    var field = (target.closest && target.closest('.mngds-form-field')) || target;
    var s = el.getBoundingClientRect(), f = field.getBoundingClientRect();
    var gap = parseFloat(getComputedStyle(el).getPropertyValue('--mc-focus-gap')) || 24;
    if (f.top - s.top < gap) el.scrollTop -= gap - (f.top - s.top);
    else if (f.bottom > s.bottom) el.scrollTop += Math.min(f.bottom - s.bottom, f.top - s.top - gap);
  }
  React.useEffect(function () { if (fixed && keyboard) placeField(document.activeElement); }, [fixed, keyboard, visible]);

  if (!isOpen) return null;

  var showIcon = props.showIcon !== false;
  var subtitle = props.subtitle !== undefined ? props.subtitle : 'Sub-Title Text';
  var body = props.body !== undefined ? props.body : 'Body Section (As Needed)';
  var top = props.topLinkLabel !== undefined ? props.topLinkLabel : 'CTA Hyperlink';
  var bottom = props.bottomLinkLabel !== undefined ? props.bottomLinkLabel : 'CTA Hyperlink';
  var primary = props.primaryLabel !== undefined ? props.primaryLabel : 'CTA Button';
  var topLink = top != null ? h(ButtonLinkstyle, { key: 't', label: top, onClick: props.onTopLink, href: props.topLinkHref }) : null;
  var bottomLink = bottom != null ? h(ButtonLinkstyle, { key: 'b', label: bottom, onClick: props.onBottomLink, href: props.bottomLinkHref }) : null;
  var primaryBtn = primary != null ? h(ButtonPrimary, { key: 'p', label: primary, onClick: props.onPrimary, href: props.primaryHref }) : null;
  var custom = props.actions !== undefined;
  /* Compact mode: only Button Primary stays pinned; the links move to the end of the body. */
  var cta = custom ? props.actions : (compact ? [primaryBtn] : [topLink, primaryBtn, bottomLink]);
  var movedLinks = !custom && compact && (topLink || bottomLink) ? h('div', { className: 'mngds-modals-center__moved-links' }, topLink, bottomLink) : null;
  var movedSub = compact && subtitle != null ? h('p', { id: subId, className: 'mngds-modals-center__subtitle' }, subtitle) : null;
  var hasBody = body != null || props.children != null || movedLinks || movedSub;
  var scrollName = scroll.overflow && !scroll.focusable;

  var card = h('div', {
      ref: cardRef, className: 'mngds-modals-center__content', role: props.role === 'alertdialog' ? 'alertdialog' : 'dialog', 'aria-modal': 'true',
      'aria-labelledby': titleId, 'aria-describedby': subtitle != null ? subId : undefined
    },
    h('div', { className: 'mngds-modals-center__header' },
      showIcon ? h('div', { className: 'mngds-modals-center__icon-container' },
        h(Icon, { name: props.iconName || 'notification', size: 16, className: 'mngds-modals-center__icon' })) : null,
      h('div', { className: 'mngds-modals-center__text' },
        h('h2', { id: titleId, ref: titleRef, tabIndex: -1, className: 'mngds-modals-center__title' }, props.title != null ? props.title : 'Header Title'),
        !compact && subtitle != null ? h('p', { id: subId, className: 'mngds-modals-center__subtitle' }, subtitle) : null)),
    hasBody ? h('div', { className: 'mngds-modals-center__body' },
      h('div', {
          ref: scrollRef, className: 'mngds-modals-center__body-scroll', onScroll: measureScroll,
          onFocus: function (e) { placeField(e.target); },
          tabIndex: scrollName ? 0 : undefined, role: scrollName ? 'region' : undefined, 'aria-labelledby': scrollName ? titleId : undefined
        },
        movedSub,
        body != null ? (typeof body === 'string' ? h('p', { className: 'mngds-modals-center__body-text' }, body) : body) : null,
        props.children,
        movedLinks),
      scroll.overflow ? h('span', { className: 'mngds-modals-center__indicator', 'aria-hidden': 'true', style: { top: scroll.top + 'px', height: scroll.size + 'px' } }) : null) : null,
    props.message ? h('div', { className: 'mngds-modals-center__message' }, props.message) : null,
    cta && (!Array.isArray(cta) || cta.some(Boolean)) ? h('div', { className: 'mngds-modals-center__cta' }, cta) : null,
    /* Close: Button In-Line Close inside the card's top-right corner (2026-11-10); last in the Tab order (2026-11-05). */
    h(ButtonInLineClose, { className: 'mngds-modals-center__close', label: props.closeLabel || 'Close', onClick: props.onClose }));

  var used = ['device', 'inline', 'open', 'offsetTop', 'title', 'subtitle', 'showIcon', 'iconName', 'body', 'message', 'actions',
    'topLinkLabel', 'bottomLinkLabel', 'primaryLabel', 'onTopLink', 'onBottomLink', 'onPrimary', 'topLinkHref', 'bottomLinkHref',
    'primaryHref', 'onClose', 'closeLabel', 'className', 'style', 'compact', 'keyboardOpen', 'visibleHeight', 'role'];
  /* A click on the overlay (outside the card) closes; pointers only, not announced. */
  function onOverlay(e) { if (props.onClose && !(cardRef.current && cardRef.current.contains(e.target))) props.onClose(e); }
  var pos = {};
  if (!inline) {
    /* Keyboard open: the overlay and card cover the visible area, masthead included. Otherwise the overlay
       starts below the masthead (offsetTop). */
    if (keyboard && vp) { pos.top = vp.top + 'px'; pos.height = vp.height + 'px'; pos.bottom = 'auto'; }
    else pos.top = (props.offsetTop || 0) + (typeof props.offsetTop === 'string' ? '' : 'px');
  } else if (props.visibleHeight != null) pos.height = props.visibleHeight + 'px';
  var node = h('div', Object.assign(rest(props, used), {
      ref: rootRef,
      className: cx('mngds-modals-center', 'mngds-modals-center--' + slug(device), inline && 'mngds-modals-center--inline',
        compact && 'mngds-modals-center--compact', keyboard && 'mngds-modals-center--keyboard', props.className),
      style: Object.assign(pos, props.style),
      onClick: onOverlay
    }),
    h('div', { className: 'mngds-modals-center__card' }, card));
  return fixed && typeof ReactDOM !== 'undefined' && ReactDOM.createPortal && typeof document !== 'undefined'
    ? ReactDOM.createPortal(node, document.body) : node;
}
