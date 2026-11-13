The site header for every WordPress page type (`page`: Home, SectionFront, Article, Obituaries, Dashboard). Place it as the **first child of the page's scrolling wrapper** (for example `body` or the page column): it renders the top-of-page masthead in the flow, followed by the condensed masthead (the 64px bar; on Obituaries the bar and the obituary search), which sticks to the top once the reader scrolls (production's headroom behavior). The device follows the rendered width; the consumer supplies whether the reader is a subscriber (`adFree`), and handlers for the menu, account, search, Subscribe and Log In.

```js
const { Masthead } = window.mng_web_design_system;
h(Masthead, { onMenuClick: openSections, onSearchClick: openSearch })               // anonymous: ads, Subscribe / Log In
h(Masthead, { adFree: true, user: { name: 'Gina Moreno' }, onAccountClick: open })  // subscriber: no ads, avatar
h(Masthead, { page: 'Article', sectionName: 'Sports', articleTitle: headline, onShare: share })  // article page
h(Masthead, { page: 'Obituaries', onObitsSearch: findObit, submitObituaryHref: '/submit' })     // Endless Tributes obituaries
h(Masthead, { page: 'Dashboard', user, onDashboardMenuClick: toggle })                          // Reader Dashboard: logged in, no ads
h(Masthead, { state: 'Scrolled', device: 'XL-Desktop' })                             // documentation: one Figma variant
```

| Prop | Values | Default |
|---|---|---|
| `page` | `'Home'`, `'SectionFront'`, `'Article'`, `'Obituaries'`, `'Dashboard'` | `'Home'` |
| `sectionName` | Section Front / Article: the section name (weather row at 1040px and up; Article's condensed bar) | `'Section Name'` |
| `articleTitle` | Article: the headline in the condensed bar at 1040px and up (one line, ellipsis); `''` hides it | the Figma sample |
| `onShare(network, e)`, `onSave`, `saved` | Article share bar (the `SocialButtons` component): `network` is `'Facebook'`, `'Reddit'`, `'X'`, `'Email'`, `'Link'` or `'Gift'`; `saved` / `onSave` are Save's state | |
| `shareTheme`, `shareNetworks` | passed to `SocialButtons` as `theme` and `networks` | `'Bold Coastal'`; Facebook, Reddit, X, Email, Link, Gift |
| `pageTitle` | Obituaries: the page title | `'Obituaries'` |
| `obitsSearchPlaceholder`, `onObitsSearch(query)`, `onObitsFilter` | Obituaries: the search form (`role="search"`, labelled input) and the filter button | `'Search Obituaries by Name'` |
| `submitObituaryHref`, `onSubmitObituary` | Obituaries: Submit an Obituary | `'#'` |
| `dashboardLabel`, `onDashboardMenuClick`, `dashboardMenuOpen` | Dashboard below 800px: the NavMenu button (`aria-expanded`) | `'Reader Dashboard'` |
| `adFree` | subscriber (AdFree / AdFree-Scrolled). Dashboard is always logged in and ad-free | `false` |
| `device` | `'XL-Desktop'`, `'LG-TabletH'`, `'MD-TabletV'`, `'SM-Mobile'`, `'XS-Fold'` | from the width |
| `state` | `'Default'`, `'AdFree'`, `'Scrolled'`, `'AdFree-Scrolled'` (documentation: renders that variant only, no sticking) | unset |
| `sticky` | the condensed bar appears on scroll | `true` |
| `scrollThreshold` | px of scroll before the condensed masthead appears | Home, Section Front, Article: `450` at 1040px and up, `1` below. Obituaries, Dashboard: when the whole masthead has scrolled away |
| `scrollRoot` | scroll container element, when it isn't the page | viewport |
| `ads`, `renderAd(name)` | show or replace the Sponsorship 1 / Top Leaderboard placeholders | `true` |
| `navItems`, `trending` | strings or `{ label, href, onClick }` | the Figma sample (Section Front has its own nav sample) |
| `date`, `temperature`, `eEditionLabel`, `eEditionHref` | weather bug text (1040px and up; `WeatherBug`, Location = Masthead) | the Figma sample |
| `eveningEdition`, `eveningLabel`, `eveningHref` | the second e-Edition link (several markets) | off |
| `user` | `{ name, initials, imageSrc, status, alert }`: the subscriber's avatar (UserPic Small, 32px); `status: 'Active'` and `alert` show its dots | initials of "Reader" |
| `onMenuClick`, `menuOpen`, `menuId` | the All Sections / hamburger button (`aria-expanded`, `aria-controls`) | |
| `onSearchClick`, `onSubscribe`, `onLogIn`, `subscribeHref`, `logInHref`, `onAccountClick` | actions | |
| `logo`, `siteName`, `homeHref` | replace the Fakeville Daily News placeholder | placeholder |

Renders `header` (top of the page, with the Top Nav as `nav aria-label="Main"`, or the section name on a Section Front) and the sticky bar after it. While the bar is hidden it has `visibility: hidden` and `aria-hidden`, so keyboard and screen-reader users meet one set of controls at a time.
