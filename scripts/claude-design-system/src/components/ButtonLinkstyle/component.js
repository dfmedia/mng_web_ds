/* Button Linkstyle (MNG Web Design System, Buttons page, 5428:3953).
   The control itself is the variant frame: 8px padding, Icon Left / Label / Icon Right. Underlined at rest;
   a 1px brand-primary box (inside stroke, drawn as an inset shadow) replaces the underline on Hover, Pressed and InFocus.
   Hugs its label; Style=Stacked caps the width (91px, 115px with an icon) to show the wrapped case. */
function ButtonLinkstyle(props) {
  var icon = props.icon || 'None';
  /* Figma "Style" is a string; an object passed as `style` is ordinary inline CSS. */
  var figmaStyle = typeof props.style === 'string' ? props.style : '1 Row';
  var cssStyle = props.style && typeof props.style === 'object' ? props.style : undefined;
  var iconName = props.iconName || 'new-tab';
  var Tag = props.href ? 'a' : 'button';
  /* Disabled (Karl, 2026-11-24): gray/400 label and icons, no underline, no box; not focusable. */
  var off = !!props.disabled || props.state === 'Disabled';
  var el = Object.assign(rest(props, ['icon', 'style', 'state', 'iconName', 'label', 'href', 'target', 'type', 'disabled', 'newTabText', 'onClick', 'className']), {
    className: cx('mngds-button-linkstyle', 'mngds-button-linkstyle--icon-' + slug(icon), 'mngds-button-linkstyle--' + slug(figmaStyle), stateClass(props.state), off && 'is-disabled', props.className),
    style: cssStyle,
    onClick: off ? undefined : props.onClick
  });
  if (Tag === 'a') {
    if (off) el['aria-disabled'] = 'true'; else el.href = props.href;
    if (props.target) { el.target = props.target; el.rel = 'noopener'; }
  }
  else { el.type = props.type || 'button'; el.disabled = off; }
  var newTab = Tag === 'a' && props.target === '_blank';
  return h(Tag, el,
    icon === 'Left' ? h(Icon, { name: iconName, size: 16, className: 'mngds-button-linkstyle__icon mngds-button-linkstyle__icon--left' }) : null,
    h('span', { className: 'mngds-button-linkstyle__label' },
      props.label != null ? props.label : props.children != null ? props.children : 'Linkstyle Button',
      newTab ? h('span', { className: 'mngds-button-linkstyle__sr' }, props.newTabText || ' (opens in a new tab)') : null),
    icon === 'Right' ? h(Icon, { name: iconName, size: 16, className: 'mngds-button-linkstyle__icon mngds-button-linkstyle__icon--right' }) : null);
}
