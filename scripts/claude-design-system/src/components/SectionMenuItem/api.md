One row of the section menu drawer. `SectionMenu` and `SectionMenuGroup` build these for you; use them alone for a custom drawer. Rows fill the drawer (300px).

```js
const { SectionMenuItem } = window.mng_web_design_system;
h(SectionMenuItem, { kind: 'main', leftIcon: 'yes', label: 'Home', href: '/' })
h(SectionMenuItem, { kind: 'main', withSubItems: 'yes', view: 'closed', label: 'News', controls: 'news-list', onClick: toggle })
h(SectionMenuItem, { kind: 'subItem', label: 'Politics', href: '/politics' })
h(SectionMenuItem, { kind: 'CTAButton', ctaHref: checkoutUrl })
```

| Prop | Values | Default |
|---|---|---|
| `kind` | `'main'`, `'subItem'`, `'Weather'`, `'CTAButton'`, `'CTAMessage'` | `'main'` |
| `withSubItems`, `view` | `'yes'` + `'closed'` / `'open'`: a disclosure button with the chevron | `'no'`, `'default'` |
| `leftIcon`, `iconName` | `'yes'` adds an icon (`home3` on Home) | `'no'`, `'home3'` |
| `state` | `'Hover'`, `'Pressed'`, `'InFocus'` (documentation only) | unset |
| `label`, `href`, `controls` | row text, link, the list's id | samples |
| `weather` | WeatherBug props (Weather rows) | |
| `ctaLabel`, `ctaHref`, `onCtaClick` | CTAButton | `'Subscribe Now'` |
| `message`, `signUpLabel`, `signUpHref`, `onSignUpClick` | CTAMessage | `'Sign up for newsletters and alerts'`, `'Sign Up'` |
