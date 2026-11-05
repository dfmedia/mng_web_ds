/* Form Field Assembly / Checkbox + Terms (MNG Web Design System, Form Fields page, 7003:29236).
   A CheckBox and the terms text in a <label> row, centered on the box, with a shared error row below.
   Desktop: 40px check box, 16px text. Mobile: the check box at 28px, 13px text. */
function CheckboxTerms(props) {
  var size = props.size || 'Desktop';
  var autoId = React.useId();
  var base = props.id || 'mngds-checkbox-terms-' + autoId.replace(/[^A-Za-z0-9_-]/g, '');
  var msgId = base + '-message';
  var cb = props.checkbox || {};
  return h('div', Object.assign(rest(props, ['size', 'termsText', 'checkbox', 'showError', 'errorMessage', 'id', 'className']), {
      className: cx('mngds-checkbox-terms', 'mngds-checkbox-terms--' + slug(size), props.className)
    }),
    h('label', { className: 'mngds-checkbox-terms__fields' },
      h(CheckBox, Object.assign({}, cb, { className: cx('mngds-checkbox-terms__checkbox', cb.className),
        'aria-invalid': props.showError ? 'true' : undefined,
        'aria-describedby': cx(props.showError && msgId, cb['aria-describedby']) || undefined })),
      h('span', { className: 'mngds-checkbox-terms__text' },
        props.termsText != null ? props.termsText : props.children != null ? props.children : 'I agree to the Terms of Service and Privacy Policy.')),
    h('p', { id: msgId, className: 'mngds-checkbox-terms__error', role: props.showError ? 'alert' : undefined },
      props.showError ? (props.errorMessage != null ? props.errorMessage : 'Please accept terms and conditions.') : null));
}
