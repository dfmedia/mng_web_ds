The future site footer: the production Footer's link groups plus a "Stay Informed" email signup. Not in production yet. The device follows the rendered width; the consumer supplies the publication name (or full link groups), the Subscribe Now action and `onSignup`.

```js
const { BlocksFooter } = window.mng_web_design_system;
h(BlocksFooter, { publication: 'Denver Post', subscribeHref: '/subscribe', onSignup: function (email) { subscribe(email); } })
h(BlocksFooter, { device: 'SM-Mobile', showTerms: true })   // documentation: force a variant and show the terms
```

| Prop | Values | Default |
|---|---|---|
| `device`, `publication`, `groups`, `legalLinks`, `subscribeLabel`, `subscribeHref`, `onSubscribe`, `logo`, `siteName`, `homeHref` | as `Footer` | as `Footer` |
| `onSignup` | `(email, event)`, called when the form is submitted (Enter) | |
| `signupTitle`, `emailLabel`, `emailPlaceholder` | Stay Informed text | `'Stay Informed'`, `'Email Address'`, `'email@address.com'` |
| `termsText` | the Terms and Conditions (`CheckboxTerms`) | sample text |
| `showTerms` | force the terms shown or hidden (documentation) | hidden until the reader starts the form |

Renders a `footer` landmark. Stay Informed is a `form` whose Email Address label is tied to the email input; its Terms and Conditions appear once the reader starts the form. Below 640px the group headings are buttons (`aria-expanded`, `aria-controls`).
