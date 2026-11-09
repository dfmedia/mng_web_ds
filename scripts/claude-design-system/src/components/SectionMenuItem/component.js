/* SectionMenuItem (WordPress Elements, Menus and Parts, 456:5781): one row of the section menu drawer.
   kind = main (section link), subItem (sub-section link), Weather (WeatherBug, SectionMenu), CTAButton (Subscribe Now) or
   CTAMessage (newsletter sign-up). withSubItems makes a main row a disclosure button with the chevron (⌄ closed, ⌃ open);
   leftIcon adds an icon (home3 on Home). State = Default / Hover / Pressed / InFocus on main and subItem rows. */
function sectionMenuYes(v) { return v === true || v === 'yes'; }
function SectionMenuItem(props) {
  var kind = props.kind || 'main';
  var used = ['kind', 'withSubItems', 'view', 'leftIcon', 'iconName', 'state', 'label', 'href', 'controls', 'weather', 'ctaLabel',
    'ctaHref', 'onCtaClick', 'message', 'signUpLabel', 'signUpHref', 'onSignUpClick', 'className'];
  var base = 'mngds-section-menu-item';
  if (kind === 'Weather') {
    return h('div', Object.assign(rest(props, used), { className: cx(base, base + '--weather', props.className) }),
      h(WeatherBug, Object.assign({ location: 'SectionMenu' }, props.weather || {})));
  }
  if (kind === 'CTAButton') {
    return h('div', Object.assign(rest(props, used), { className: cx(base, base + '--cta-button', props.className) }),
      h(ButtonPrimary, { label: props.ctaLabel || 'Subscribe Now', href: props.ctaHref, onClick: props.onCtaClick, breakpoint: 'Mobile' }));
  }
  if (kind === 'CTAMessage') {
    return h('div', Object.assign(rest(props, used), { className: cx(base, base + '--cta-message', props.className) }),
      h('div', { className: base + '__cta-content' },
        h('p', { className: base + '__cta-text' }, props.message || 'Sign up for newsletters and alerts'),
        h('div', { className: base + '__cta-button' },
          h(ButtonPrimary, { label: props.signUpLabel || 'Sign Up', href: props.signUpHref, onClick: props.onSignUpClick, breakpoint: 'Mobile' }))));
  }
  var sub = kind === 'subItem';
  var hasSubs = !sub && sectionMenuYes(props.withSubItems);
  var open = hasSubs && props.view === 'open';
  var icon = !sub && sectionMenuYes(props.leftIcon);
  var cls = cx(base, base + '--' + slug(kind), hasSubs && base + '--with-sub-items', open && base + '--open', stateClass(props.state), props.className);
  var inner = [
    icon ? h('span', { key: 'i', className: base + '__icon' }, h(Icon, { name: props.iconName || 'home3', size: 16 })) : null,
    h('span', { key: 'l', className: base + '__label' }, props.label || (sub ? 'SubSection Item Name' : 'Section Item Name')),
    hasSubs ? h('span', { key: 'c', className: base + '__chevron' }, h(Icon, { name: open ? 'arrow-up' : 'arrow-down', size: 12 })) : null
  ];
  if (hasSubs) {
    return h('button', Object.assign(rest(props, used), { type: 'button', className: cls, 'aria-expanded': open ? 'true' : 'false',
      'aria-controls': props.controls || undefined }), inner);
  }
  return h('a', Object.assign(rest(props, used), { className: cls, href: props.href || '#' }), inner);
}
