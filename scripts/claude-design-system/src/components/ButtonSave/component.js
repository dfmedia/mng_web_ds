/* ButtonSave (WordPress Elements, Menus and Parts, 3788:44251; Figma name Button_Save). The Save (bookmark) toggle at the
   start of the article share bar (cleaned up in place 2026-11-12, Karl). 40x40, a 24px bookmark in color/theme/primary,
   hover and pressed primary-light. checked: bookmark2 (filled), else bookmark3 (outline). */
function ButtonSave(props) {
  var checked = props.checked === true || props.checked === 'yes';
  var interaction = props.interaction || 'Default';
  var focus = props.inFocus === true || props.inFocus === 'True';
  var attrs = rest(props, ['checked', 'interaction', 'inFocus', 'className', 'aria-label', 'onChange', 'onClick', 'type']);
  attrs.type = props.type || 'button';
  attrs.className = cx('mngds-button-save', checked && 'is-checked', interaction !== 'Default' && 'is-' + slug(interaction), focus && 'is-infocus', props.className);
  attrs['aria-pressed'] = checked ? 'true' : 'false';
  attrs['aria-label'] = props['aria-label'] || 'Save this article to read later.';
  attrs.onClick = function (e) { if (props.onClick) props.onClick(e); if (props.onChange) props.onChange(!checked, e); };
  return h('button', attrs, h(Icon, { name: checked ? 'bookmark2' : 'bookmark3', size: 24, className: 'mngds-button-save__icon' }));
}
