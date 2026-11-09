/* Weather Bug (WordPress Elements, Menus and Parts, 654:10020): current temperature and weather icon with the date and the
   e-Edition link(s). Location = Masthead (1040px and up) or SectionMenu (the open drawer, below 1040px); Evening e-Edition
   adds a second link. The AccuWeather widget is third-party, so every value matches production exactly (Karl, 2026-11-09).
   The link labels change by market; the defaults are placeholders. */
function WeatherBug(props) {
  var location = props.location || 'SectionMenu';
  var two = props.eveningEdition === true || props.eveningEdition === 'On';
  var root = Object.assign(rest(props, ['location', 'eveningEdition', 'temperature', 'date', 'eEditionLabel', 'eEditionHref',
    'eveningLabel', 'eveningHref', 'className']), {
    className: cx('mngds-weather-bug', 'mngds-weather-bug--' + slug(location), two && 'mngds-weather-bug--two', props.className)
  });
  return h('div', root,
    h('div', { className: 'mngds-weather-bug__current' },
      h('span', { className: 'mngds-weather-bug__temp' }, props.temperature || '87°F'),
      h('svg', { className: 'mngds-weather-bug__icon', viewBox: '0 0 26 26', 'aria-hidden': 'true', focusable: 'false' },
        h('path', { d: MASTHEAD_TORNADO, fill: 'currentColor' }))),
    h('div', { className: 'mngds-weather-bug__date' },
      h('span', { className: 'mngds-weather-bug__date-text' }, props.date || 'Monday, November 9th 2026'),
      h('a', { className: 'mngds-weather-bug__link', href: props.eEditionHref || '#' }, props.eEditionLabel || 'Today’s e-Edition'),
      two ? h('a', { className: 'mngds-weather-bug__link', href: props.eveningHref || '#' }, props.eveningLabel || 'Evening e-Edition') : null));
}
