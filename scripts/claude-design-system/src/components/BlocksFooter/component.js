/* Blocks Footer (WordPress Elements, Homepage ▸ Blocks, 801:1755; was Footer_w_signup): the future site footer with the
   "Stay Informed" email signup. Not in production yet, so every value is a token: 8px (spacing/100) gutter below 640px and
   16px (spacing/200) link spacing, where the production Footer has 10px and 15px. Same Device widths as Footer:
   1040px and up: [Subscribe, Marketplace] | [Stay Informed, About] | [Advertising] | [Contact, Partners] | [Subscribe Now];
   800-1039: [Subscribe, Marketplace] | [Stay Informed, About, Advertising] | [Contact, Partners, Subscribe Now];
   640-799: [Subscribe, Marketplace, Stay Informed, About] | [Advertising, Contact, Partners, Subscribe Now];
   below 640: Stay Informed above the accordion rows.
   Stay Informed: a form with the Email Address Form Field (mail icon). The Terms and Conditions show only once the reader
   starts the form (Karl, Gherkin, 2026-11-24): Figma doesn't draw them yet, so they are CheckboxTerms with sample text.
   Figma has no sign-up button: Enter submits the form (onSignup gets the email). */
var BLOCKS_FOOTER_COLUMNS = {
  'XL-Desktop': [['subscribe', 'marketplace'], ['signup', 'about'], ['advertising'], ['contact', 'partners'], ['cta']],
  'LG-TabletH': [['subscribe', 'marketplace'], ['signup', 'about', 'advertising'], ['contact', 'partners', 'cta']],
  'MD-TabletV': [['subscribe', 'marketplace', 'signup', 'about'], ['advertising', 'contact', 'partners', 'cta']]
};
function BlocksFooter(props) {
  var started = React.useState(!!props.showTerms);
  var autoId = React.useId();
  var fieldId = 'mngds-blocks-footer-email-' + autoId.replace(/[^A-Za-z0-9_-]/g, '');
  function start() { if (!started[0]) started[1](true); }
  function signup(accordion) {
    var showTerms = props.showTerms != null ? props.showTerms : started[0];
    return h('section', { key: 'signup', className: 'mngds-footer__group mngds-blocks-footer__signup' },
      h('h2', { className: 'mngds-footer__heading' }, props.signupTitle || 'Stay Informed'),
      h('form', { className: 'mngds-blocks-footer__form', noValidate: true, onFocus: start, onInput: start,
          onSubmit: function (e) { e.preventDefault(); if (props.onSignup) props.onSignup(String(new FormData(e.currentTarget).get('email') || ''), e); } },
        h(FormField, { id: fieldId, size: accordion ? 'Mobile' : 'Desktop', label: props.emailLabel || 'Email Address', type: 'email', name: 'email',
          autoComplete: 'email', inputMode: 'email', placeholder: props.emailPlaceholder || 'email@address.com', icon: 'email', errorRow: false,
          showValue: false }),
        showTerms ? h(CheckboxTerms, { size: accordion ? 'Mobile' : 'Desktop', className: 'mngds-blocks-footer__terms',
          termsText: props.termsText || 'I agree to the Terms of Use and Privacy Policy.' }) : null));
  }
  return footerView(props, {
    columns: BLOCKS_FOOTER_COLUMNS, mobileTop: ['signup'], className: 'mngds-blocks-footer',
    parts: function (accordion) { return { signup: signup(accordion) }; },
    used: ['onSignup', 'signupTitle', 'emailLabel', 'emailPlaceholder', 'termsText', 'showTerms']
  });
}
