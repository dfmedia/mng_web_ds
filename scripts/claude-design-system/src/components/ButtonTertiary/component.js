/* Button Tertiary (MNG Web Design System, Buttons page, 5333:16089).
   Root = the variant frame (8px side margin, Desktop hugs / Mobile fills); Button = the 40px control
   with a 1px gray inside stroke that changes color by state (an inset shadow, so it adds no width, as in Figma). */
function ButtonTertiary(props) {
  var bp = props.breakpoint || 'Desktop';
  var icon = props.icon || 'None';
  var iconName = props.iconName || 'new-tab';
  var Tag = props.href ? 'a' : 'button';
  /* Loading (Karl, 2026-11-24, option M2): a 20px Spinner (On light) before a waiting label; the button keeps its place and
     can't be pressed again (aria-busy, aria-disabled). Disabled (option D3): gray/600 fill, gray/500 border, gray/300 label. */
  var loading = !!props.loading || props.state === 'Loading';
  var off = !loading && (!!props.disabled || props.state === 'Disabled');
  var ctl = {
    className: cx('mngds-button-tertiary__button', stateClass(props.state), loading && 'is-loading', off && 'is-disabled'),
    onClick: loading || off ? undefined : props.onClick,
    disabled: Tag === 'button' ? off : undefined
  };
  if (loading) { ctl['aria-busy'] = 'true'; ctl['aria-disabled'] = 'true'; }
  if (Tag === 'a') {
    if (off) { ctl['aria-disabled'] = 'true'; } else { ctl.href = props.href; }
    if (props.target) { ctl.target = props.target; ctl.rel = 'noopener'; }
  }
  else ctl.type = props.type || 'button';
  if (props['aria-label']) ctl['aria-label'] = props['aria-label'];
  return h('div', Object.assign(rest(props, ['breakpoint', 'icon', 'iconName', 'state', 'label', 'href', 'target', 'onClick', 'disabled', 'loading', 'loadingLabel', 'type', 'aria-label', 'className']), {
      className: cx('mngds-button-tertiary', 'mngds-button-tertiary--' + slug(bp), props.className)
    }),
    h(Tag, ctl,
      h('span', { className: 'mngds-button-tertiary__content' },
        loading ? h(Spinner, { size: 20, color: 'On light', className: 'mngds-button-tertiary__spinner' }) : null,
        !loading && icon === 'Left' ? h(Icon, { name: iconName, size: 16, className: 'mngds-button-tertiary__icon mngds-button-tertiary__icon--left' }) : null,
        h('span', { className: 'mngds-button-tertiary__label' }, loading ? (props.loadingLabel || 'Loading\u2026') : props.label != null ? props.label : props.children != null ? props.children : 'Tertiary Button'),
        !loading && icon === 'Right' ? h(Icon, { name: iconName, size: 16, className: 'mngds-button-tertiary__icon mngds-button-tertiary__icon--right' }) : null)));
}
