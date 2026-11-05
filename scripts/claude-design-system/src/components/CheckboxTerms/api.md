A check box with its text (usually the terms agreement) and an error row. The whole row is the check box's label. The consumer supplies the text (links included), the checked state and the error.

```js
const { CheckboxTerms } = window.mng_web_design_system;
h(CheckboxTerms, {
  checkbox: { status: agreed ? 'selected' : 'unselected', onChange: e => setAgreed(e.target.checked), name: 'terms' },
  termsText: ['I agree to the ', h('a', { href: '/terms' }, 'Terms of Service'), ' and ', h('a', { href: '/privacy' }, 'Privacy Policy'), '.'],
  showError: submitted && !agreed })
```

| Prop | Values | Default |
|---|---|---|
| `size` | `'Desktop'`, `'Mobile'` | `'Desktop'` |
| `termsText` | text or elements (links) | 'I agree to the Terms of Service and Privacy Policy.' |
| `checkbox` | CheckBox props | unselected |
| `showError` / `errorMessage` | the error row; marks the check box `aria-invalid` and links the message | `false` / 'Please accept terms and conditions.' |
