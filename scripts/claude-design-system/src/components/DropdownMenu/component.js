/* DropdownMenu (MNG Web Design System, Dropdown Menus page, 7543:1880). A trigger that opens a list of choices
   (Karl, 2026-11-10: a copy of Button ActionMenu rebuilt as a drop-down; Button ActionMenu stays as it is for
   the designs that use it). The open menu lists every choice as a DropdownMenuItem with a check on the current
   one. The trigger is as wide as its longest choice, so the chevron sits far enough right for every item
   (Karl, 2026-11-11): every label is stacked, invisibly, in the same grid cell.
   `open`, `interaction` and `inFocus` force documentation states; without `open` the menu opens and closes
   itself. `showChevron: false` is the read-only row (no menu). `inline` keeps the open menu in the flow. */
var DROPDOWN_MENU_DEFAULT_OPTIONS = [{ value: 'owner', label: 'Owner', icon: 'crown' }, { value: 'guest', label: 'Guest' }];
var dropdownMenuSeq = 0;
function DropdownMenu(props) {
  var options = props.options || DROPDOWN_MENU_DEFAULT_OPTIONS;
  var interaction = props.interaction || 'Default';
  var focus = props.inFocus === true || props.inFocus === 'True';
  var tone = typeof props.style === 'string' ? props.style : 'white';
  var showIcon = !(props.showIcon === false || props.showIcon === 'False');
  var readOnly = props.showChevron === false || props.showChevron === 'False';
  var ids = React.useRef(null);
  if (!ids.current) { dropdownMenuSeq += 1; ids.current = 'mngds-dropdown-menu-' + dropdownMenuSeq; }
  var uid = props.id || ids.current;

  var vs = React.useState(props.defaultValue !== undefined ? props.defaultValue : (options[0] && options[0].value));
  var controlled = props.value !== undefined;
  var value = controlled ? props.value : vs[0];
  var os = React.useState(!!props.defaultOpen);
  var forced = props.open !== undefined;
  var isOpen = !readOnly && (forced ? (props.open === true || props.open === 'True') : os[0]);
  var as = React.useState(-1), active = as[0], setActive = as[1];
  var rootRef = React.useRef(null), triggerRef = React.useRef(null), listRef = React.useRef(null);

  var current = -1;
  for (var i = 0; i < options.length; i++) if (options[i].value === value) { current = i; break; }
  var cur = current >= 0 ? options[current] : null;
  var shown = props.label != null ? props.label : (cur ? cur.label : '');
  var iconName = props.icon !== undefined ? props.icon : (cur && cur.icon) || null;

  function setOpen(o) { if (!forced) os[1](o); if (props.onOpenChange) props.onOpenChange(o); }
  function choose(i) {
    var o = options[i];
    if (!controlled) vs[1](o.value);
    if (props.onChange) props.onChange(o.value, o);
    setOpen(false); setActive(-1);
    if (triggerRef.current) triggerRef.current.focus();
  }
  // Move focus to the active option while the menu is open (not when the open state is forced for documentation).
  React.useEffect(function () {
    if (!isOpen || forced || active < 0 || !listRef.current) return;
    var el = listRef.current.children[active]; if (el) el.focus();
  }, [isOpen, active, forced]);
  // A click outside closes it.
  React.useEffect(function () {
    if (!isOpen || forced) return undefined;
    function down(e) { if (rootRef.current && !rootRef.current.contains(e.target)) { setOpen(false); setActive(-1); } }
    document.addEventListener('mousedown', down);
    return function () { document.removeEventListener('mousedown', down); };
  }, [isOpen, forced]);

  function onTriggerClick() {
    if (isOpen) { setOpen(false); setActive(-1); }
    else { setOpen(true); setActive(current >= 0 ? current : 0); }
  }
  function onTriggerKey(e) {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault(); setOpen(true);
      setActive(current >= 0 ? current : (e.key === 'ArrowUp' ? options.length - 1 : 0));
    }
  }
  function onOptionKey(i, e) {
    var k = e.key;
    if (k === 'ArrowDown') { e.preventDefault(); setActive(Math.min(options.length - 1, i + 1)); }
    else if (k === 'ArrowUp') { e.preventDefault(); setActive(Math.max(0, i - 1)); }
    else if (k === 'Home') { e.preventDefault(); setActive(0); }
    else if (k === 'End') { e.preventDefault(); setActive(options.length - 1); }
    else if (k === 'Enter' || k === ' ') { e.preventDefault(); choose(i); }
    else if (k === 'Escape') { e.preventDefault(); setOpen(false); setActive(-1); if (triggerRef.current) triggerRef.current.focus(); }
    else if (k === 'Tab') { setOpen(false); setActive(-1); }
  }

  var labels = h('span', { className: 'mngds-dropdown-menu__labels' },
    h('span', { className: 'mngds-dropdown-menu__label' }, shown),
    options.map(function (o, i) {
      return h('span', { key: i, className: 'mngds-dropdown-menu__label mngds-dropdown-menu__label--sizer', 'aria-hidden': 'true' }, o.label);
    }));
  var slot = h('span', { className: 'mngds-dropdown-menu__icon-slot', 'aria-hidden': 'true' },
    showIcon && iconName ? h(Icon, { name: iconName, size: 16, className: 'mngds-dropdown-menu__icon' }) : null);
  var name = props['aria-label'] ? props['aria-label'] + ': ' + shown : undefined;

  var trigger = readOnly
    ? h('span', { className: 'mngds-dropdown-menu__trigger mngds-dropdown-menu__trigger--static', id: uid + '-trigger', 'aria-label': name }, slot, labels)
    : h('button', {
        ref: triggerRef, type: 'button', id: uid + '-trigger', className: 'mngds-dropdown-menu__trigger',
        'aria-haspopup': 'listbox', 'aria-expanded': isOpen ? 'true' : 'false', 'aria-controls': isOpen ? uid + '-list' : undefined,
        'aria-label': name, 'aria-labelledby': props['aria-labelledby'] ? props['aria-labelledby'] + ' ' + uid + '-trigger' : undefined,
        disabled: props.disabled, onClick: onTriggerClick, onKeyDown: onTriggerKey
      }, slot, labels,
      h(Icon, { name: isOpen ? 'arrow-up' : 'arrow-down', size: 16, className: 'mngds-dropdown-menu__chevron' }));

  var menu = isOpen ? h('div', {
      ref: listRef, role: 'listbox', id: uid + '-list', className: 'mngds-dropdown-menu__menu',
      'aria-label': props['aria-label'], 'aria-labelledby': props['aria-label'] ? undefined : (props['aria-labelledby'] || uid + '-trigger')
    }, options.map(function (o, i) {
      return h(DropdownMenuItem, {
        key: o.value != null ? String(o.value) : i, id: uid + '-option-' + i, tabIndex: -1,
        label: o.label, icon: o.icon || null, showIcon: !!o.icon,
        status: i === current ? 'selected' : 'unselected', interaction: o.interaction, inFocus: o.inFocus,
        onClick: function () { choose(i); }, onKeyDown: function (e) { onOptionKey(i, e); }
      });
    })) : null;

  var style = typeof props.style === 'object' && props.style ? Object.assign({}, props.style) : {};
  if (props.width != null) style.width = typeof props.width === 'number' ? props.width + 'px' : props.width;
  return h('div', Object.assign(rest(props, ['options', 'value', 'defaultValue', 'onChange', 'open', 'defaultOpen', 'onOpenChange',
      'interaction', 'inFocus', 'style', 'showIcon', 'showChevron', 'icon', 'label', 'width', 'inline', 'id', 'disabled',
      'aria-label', 'aria-labelledby', 'className']), {
      ref: rootRef, style: style,
      className: cx('mngds-dropdown-menu', 'mngds-dropdown-menu--' + slug(tone), isOpen && 'is-open',
        interaction !== 'Default' && 'is-' + slug(interaction), focus && 'is-infocus', readOnly && 'mngds-dropdown-menu--read-only',
        props.inline && 'mngds-dropdown-menu--inline', props.className)
    }), trigger, menu);
}
