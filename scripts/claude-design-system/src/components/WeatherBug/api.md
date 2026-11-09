The weather widget in the masthead (1040px and up) and in the open section menu (below 1040px). Consumer supplies the temperature, date and e-Edition link(s); the site's AccuWeather widget fills these in production.

```js
const { WeatherBug } = window.mng_web_design_system;
h(WeatherBug, { location: 'Masthead', temperature: '65°F', date: 'Monday, November 9th 2026', eEditionLabel: 'Digital Replica Edition', eEditionHref: url })
h(WeatherBug, { location: 'SectionMenu', eveningEdition: true, eEditionLabel: 'Daily e-Edition', eveningLabel: 'Evening e-Edition' })
```

| Prop | Values | Default |
|---|---|---|
| `location` | `'SectionMenu'`, `'Masthead'` | `'SectionMenu'` |
| `eveningEdition` | `true` / `'On'` adds the second link | off |
| `temperature`, `date` | text | `'87°F'`, `'Monday, November 9th 2026'` |
| `eEditionLabel`, `eEditionHref` | first link | `'Today’s e-Edition'` |
| `eveningLabel`, `eveningHref` | second link | `'Evening e-Edition'` |

The link labels change by market; use each site's wording.
