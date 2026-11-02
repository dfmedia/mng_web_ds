/* Newsletter Signup (WordPress Elements, Homepage, 3336:44765): the newsletter prompt and Sign Up button at the end of
   Latest Headlines (anonymous view), built to match production (`li.social-links .newsletter-simple .newsletter-item`,
   Karl 2026-10-30). color/gray/600 block, 32px above the prompt (16 + 16), 12px to the Button Primary, 16px below.
   Production has no breakpoint for this block; Device is the width Latest Headlines uses: (≤799px) full width,
   (≥800px) the side column. Both draw the same layout; the block fills its column. */
function NewsletterSignup(props) {
  var d = String(props.device || '(≤799px)');
  var device = d.indexOf('800') >= 0 || d === 'Desktop' ? '(≥800px)' : '(≤799px)';
  var root = Object.assign(rest(props, ['device', 'prompt', 'label', 'href', 'target', 'onClick', 'className']), {
    className: cx('mngds-newsletter-signup', 'mngds-newsletter-signup--' + (device === '(≥800px)' ? 'side' : 'full'), props.className)
  });
  return h('div', root,
    h('div', { className: 'mngds-newsletter-signup__newsletter' },
      h('div', { className: 'mngds-newsletter-signup__item' },
        h('p', { className: 'mngds-newsletter-signup__prompt' }, props.prompt != null ? props.prompt : 'Sign up for Newsletters and Alerts'),
        h(ButtonPrimary, { breakpoint: 'Desktop', label: props.label != null ? props.label : 'Sign Up', href: props.href, target: props.target, onClick: props.onClick }))));
}
