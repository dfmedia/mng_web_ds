/* Masthead (WordPress Elements, Menus and Parts, 456:2572): Page = Home, SectionFront, Article, Obituaries, Dashboard.
   Top of the page (Default / AdFree) in flow; the condensed content (Scrolled / AdFree-Scrolled) sticks to the top of the
   scroll area once the reader scrolls (production: headroom.js .headroom--not-top). The device comes from the rendered width
   (WordPress grid: 1040 / 800 / 640 / 360) unless `device` forces one. Parts drawn here: SectionMenu (closed), AccountMenu
   (closed: UserStatus, UserPic, the search button), WeatherBug (its own component since 2026-11-09), SocialButtons, NavMenu (closed), Ad Blocks. */
var MASTHEAD_NAV = ['News', 'Fakeville Local', 'Sportsball', 'Stuff Happening', 'Obituaries', 'Sponsored Content',
  'Public Notices', 'Business', 'Politics', 'Entertainment', 'Suburbs'];
var MASTHEAD_TRENDING = ['Dragon sightings near Fakeville shire', 'Pseudonyms up 3-1', 'Fire Storms in the forecast',
  'New Castle Complex Building Stalled'];
/* Weather Bug's "tornado" glyph (an external Figma library icon, not in the MNG icon font), exported 2026-10-30. */
var MASTHEAD_TORNADO = 'M1.82 3.98C1.70 3.77 1.62 3.52 1.62 3.25C1.62 2.82 1.81 2.47 2.04 2.21C2.26 1.96 2.56 1.75 2.87 1.58C3.50 1.24 4.36 0.96 5.34 0.73C7.33 0.27 10.04 0 13 0C15.95 0 18.66 0.27 20.65 0.73C21.63 0.96 22.49 1.24 23.12 1.58C23.43 1.75 23.73 1.96 23.95 2.21C24.18 2.47 24.37 2.82 24.37 3.25C24.37 4.89 23.80 5.86 23.34 6.66C23.27 6.77 23.21 6.88 23.15 6.99C22.92 7.41 22.73 7.81 22.64 8.30C22.57 8.68 22.55 9.15 22.62 9.75C22.87 9.72 23.13 9.79 23.32 9.98C23.64 10.30 23.64 10.81 23.32 11.13C23.22 11.23 23.10 11.34 22.97 11.45C23.30 13.26 23.11 14.68 22.48 15.86C21.75 17.22 20.48 18.10 19.20 18.87C18.87 19.07 18.53 19.27 18.19 19.46C15.85 20.82 13.44 22.21 12.12 25.48C12.03 25.71 11.84 25.89 11.60 25.96C11.37 26.03 11.11 25.99 10.91 25.85L10.91 25.85L10.90 25.85L10.90 25.84L10.88 25.83C10.87 25.82 10.85 25.81 10.82 25.79C10.78 25.76 10.72 25.71 10.64 25.64C10.49 25.52 10.29 25.33 10.07 25.09C9.62 24.62 9.09 23.90 8.73 22.95C8.49 22.33 8.34 21.62 8.32 20.85C8.20 20.70 8.12 20.51 8.12 20.31L8.12 20.30L8.12 20.30L8.12 20.29L8.12 20.28C8.12 20.27 8.12 20.26 8.12 20.24C8.12 20.22 8.13 20.19 8.13 20.15C8.14 20.08 8.16 19.99 8.20 19.89C8.25 19.77 8.33 19.64 8.44 19.52C8.59 18.73 8.88 17.87 9.37 16.97C9.19 16.87 9.04 16.71 8.97 16.50C8.83 16.08 9.06 15.62 9.49 15.47C9.85 15.35 10.18 15.28 10.49 15.24C10.57 15.13 10.65 15.03 10.74 14.92C11.20 14.35 11.39 13.89 11.45 13.53C11.50 13.18 11.43 12.86 11.25 12.52C10.84 11.78 9.92 11.05 8.63 10.20C8.31 9.99 7.98 9.78 7.64 9.56C7.57 9.52 7.51 9.48 7.44 9.43C6.67 9.27 5.99 9.08 5.43 8.89C5.00 8.75 4.77 8.29 4.91 7.86C4.93 7.82 4.94 7.78 4.96 7.74C4.84 7.64 4.71 7.55 4.59 7.45C3.43 6.51 2.37 5.39 1.82 3.98ZM5.03 5.68C5.21 5.85 5.41 6.02 5.61 6.18C6.38 6.80 7.22 7.36 8.07 7.91C10.58 8.42 13.98 8.72 16.90 8.14C17.34 8.05 17.77 8.33 17.85 8.77C17.94 9.21 17.66 9.64 17.22 9.73C15.24 10.12 13.09 10.15 11.11 9.98C11.76 10.51 12.32 11.09 12.67 11.74C13.00 12.35 13.16 13.02 13.05 13.77C12.97 14.30 12.76 14.83 12.42 15.37C12.54 15.40 12.66 15.43 12.77 15.45L12.79 15.46C13.57 15.65 14.19 15.80 15.18 15.47C15.60 15.33 16.06 15.56 16.20 15.99C16.35 16.41 16.12 16.87 15.69 17.02C14.25 17.50 13.24 17.25 12.40 17.04L12.39 17.03C12.03 16.94 11.70 16.86 11.35 16.83C10.74 17.73 10.37 18.54 10.17 19.27C10.40 19.34 10.65 19.44 10.92 19.58C11.32 19.78 11.48 20.27 11.28 20.67C11.08 21.07 10.60 21.23 10.19 21.03C10.11 20.99 10.03 20.95 9.95 20.92C9.97 21.48 10.09 21.96 10.25 22.37C10.47 22.97 10.80 23.46 11.10 23.82C12.72 20.72 15.30 19.24 17.42 18.03C17.75 17.84 18.06 17.66 18.37 17.48C19.62 16.72 20.54 16.03 21.05 15.09C21.40 14.45 21.59 13.62 21.47 12.46C20.17 13.17 18.37 13.81 16.25 13.81C15.80 13.81 15.43 13.44 15.43 13C15.43 12.55 15.80 12.18 16.25 12.18C18.34 12.18 20.06 11.45 21.15 10.77C21.14 10.75 21.14 10.73 21.14 10.72C20.92 9.62 20.91 8.76 21.04 8.01C21.18 7.26 21.46 6.69 21.73 6.20C21.80 6.07 21.87 5.95 21.94 5.83C22.05 5.65 22.15 5.47 22.24 5.30C21.77 5.47 21.23 5.63 20.65 5.76C18.66 6.22 15.95 6.5 13 6.5C10.04 6.5 7.33 6.22 5.34 5.76C5.24 5.74 5.13 5.71 5.03 5.68ZM22.69 3.25C22.62 3.18 22.51 3.10 22.34 3.01C21.90 2.77 21.21 2.53 20.28 2.31C18.45 1.89 15.87 1.62 13 1.62C10.12 1.62 7.54 1.89 5.71 2.31C4.78 2.53 4.09 2.77 3.65 3.01C3.48 3.10 3.37 3.18 3.30 3.25C3.37 3.31 3.48 3.39 3.65 3.48C4.09 3.72 4.78 3.96 5.71 4.18C7.54 4.60 10.12 4.87 13 4.87C15.87 4.87 18.45 4.60 20.28 4.18C21.21 3.96 21.90 3.72 22.34 3.48C22.51 3.39 22.62 3.31 22.69 3.25Z';
var MASTHEAD_SECTION_NAV = ['Food & Drink', 'Movies', 'Music', 'Theater & Arts', 'Casinos', 'Travel', 'Books', 'Comics', 'Events',
  'Amusements Parks', 'Shopping'];
/* SocialButtons (Article, condensed bar at 1040px and up): the networks Figma's Masthead shows, in SocialButtons' order. */
var MASTHEAD_SOCIAL = ['Facebook', 'Reddit', 'X', 'Email', 'Link', 'Gift'];
/* Endless Tributes "powered by" logo (partner artwork, WordPress Elements 456:3443), exported 2026-10-30, 106x28. */
var MASTHEAD_ET_LOGO = [
  ['#141414', 1, 'M35 8H39.9V10H35V13.2H40.4V15.2H32.9V3.1H40.3V5H35V8Z M44.4 3.1L50.5 11.4V3.1H52.6V15.2H50.7L44.6 6.8V15.2H42.5V3.1H44.4Z M65.2 9.1C65.2 12.6 62.7 15.2 59.2 15.2H55.2V3.1H59.2C62.7 3.1 65.2 5.6 65.2 9.1ZM63.1 9.1C63.1 6.9 61.6 5 59.2 5H57.3V13.2H59.2C61.6 13.2 63.1 11.3 63.1 9.1Z M67.1 3.1H69.2V13.2H74.4V15.2H67.1V3.1Z M78 8H82.9V10H78V13.2H83.4V15.2H75.9V3.1H83.3V5H78V8Z M89.3 10.1C87.5 9.5 85.5 8.5 85.5 6.3C85.5 4.6 87 2.9 89.5 2.9C92 2.9 93.5 4.8 93.5 4.8L92 6.2C92 6.2 91 4.9 89.5 4.9C88.4 4.9 87.6 5.5 87.6 6.3C87.6 7.4 88.6 7.7 90.2 8.3C92.1 9 93.7 9.8 93.7 12C93.7 14.2 91.7 15.4 89.4 15.4C86.3 15.4 84.9 12.9 84.9 12.9L86.5 11.6C86.5 11.6 87.5 13.4 89.4 13.4C90.5 13.4 91.6 13 91.6 12C91.6 11 90.8 10.6 89.3 10.1Z M99.7 10.1C97.9 9.5 95.9 8.5 95.9 6.3C95.9 4.6 97.4 2.9 99.9 2.9C102.5 2.9 103.9 4.8 103.9 4.8L102.4 6.2C102.4 6.2 101.4 4.9 99.9 4.9C98.8 4.9 98 5.5 98 6.3C98 7.4 99 7.7 100.7 8.3C102.5 9 104.1 9.8 104.1 12C104.1 14.2 102.1 15.4 99.8 15.4C96.8 15.4 95.3 12.9 95.3 12.9L96.9 11.6C96.9 11.6 98 13.4 99.8 13.4C100.9 13.4 102 13 102 12C102 11 101.2 10.6 99.7 10.1Z M26.2 2.1H1.9V26.5H26.2V2.1Z'],
  ['#A7A6A3', 1, 'M37.3 24.8V24.9H34.3V24.8C34.6 24.7 34.9 24.6 35 24.5C35.1 24.4 35.1 24.1 35.1 23.8V19.1H34.5C34.1 19.1 33.8 19.1 33.6 19.3C33.3 19.5 33.2 19.7 33.1 20.1H32.9L32.9 18.6H33.1C33.3 18.6 33.5 18.7 33.8 18.7H37.9C38.2 18.7 38.4 18.6 38.5 18.6H38.7L38.7 20.1H38.6C38.5 19.7 38.3 19.5 38.1 19.3C37.9 19.1 37.5 19.1 37.2 19.1H36.5V23.8C36.5 24.1 36.6 24.4 36.7 24.5C36.8 24.6 37 24.7 37.3 24.8Z M42.4 25V24.8C43 24.8 43.2 24.5 43.2 24V19.7C43.2 19.5 43.2 19.3 43.1 19.1C43 19 42.7 18.9 42.4 18.9V18.7H45.4C46.2 18.7 46.8 18.8 47.3 19.1C47.7 19.4 47.9 19.8 47.9 20.3C47.9 20.7 47.8 21 47.6 21.2C47.4 21.5 47 21.7 46.6 21.8V21.8C46.8 21.9 46.9 22 47.1 22.2C47.3 22.4 47.5 22.8 47.9 23.4C48.2 24 48.4 24.3 48.6 24.5C48.7 24.7 48.9 24.8 49.1 24.8V25H47.3C47.1 24.7 46.8 24.2 46.4 23.5C46.1 23 46 22.6 45.8 22.5C45.7 22.3 45.6 22.2 45.4 22.1C45.3 22 45 22 44.6 22V23.9C44.6 24.2 44.7 24.4 44.8 24.5C44.9 24.7 45.1 24.8 45.4 24.8V25H42.4ZM45.1 19.1H44.6V21.6C44.7 21.6 44.8 21.6 44.9 21.6C45.4 21.6 45.8 21.5 46 21.3C46.3 21.1 46.4 20.7 46.4 20.3C46.4 19.5 45.9 19.1 45.1 19.1Z M55.9 18.7V18.9C55.6 18.9 55.4 19.1 55.3 19.2C55.2 19.3 55.1 19.5 55.1 19.9V23.9C55.1 24.2 55.2 24.4 55.3 24.5C55.4 24.6 55.6 24.7 55.9 24.8V24.9H52.9V24.8C53.2 24.7 53.3 24.6 53.4 24.6C53.5 24.5 53.6 24.4 53.7 24.3C53.7 24.2 53.7 24 53.7 23.7V19.8C53.7 19.5 53.7 19.3 53.6 19.2C53.5 19.1 53.3 19 52.9 18.9V18.7H55.9V18.7Z M63.8 25H60V24.8C60.4 24.7 60.6 24.6 60.7 24.5C60.8 24.4 60.8 24.2 60.8 23.9V19.7C60.8 19.5 60.8 19.3 60.6 19.1C60.5 19 60.3 18.9 60 18.9V18.7H63.3C64 18.7 64.6 18.9 64.9 19.1C65.3 19.4 65.5 19.7 65.5 20.2C65.5 20.9 65 21.4 64.1 21.7V21.7C65.3 21.9 65.9 22.5 65.9 23.3C65.9 23.8 65.7 24.2 65.3 24.5C65 24.8 64.5 25 63.8 25ZM62.2 19.1V21.6H62.7C63.1 21.6 63.4 21.5 63.6 21.2C63.9 21 64 20.7 64 20.3C64 19.5 63.5 19.1 62.6 19.1H62.2ZM63 21.9H62.2V23.8C62.2 24.1 62.3 24.3 62.4 24.4C62.6 24.5 62.8 24.6 63.1 24.6C63.5 24.6 63.8 24.5 64.1 24.3C64.3 24 64.4 23.7 64.4 23.3C64.4 22.9 64.3 22.5 64.1 22.3C63.8 22 63.4 21.9 63 21.9Z M74.9 25V24.1C74.5 24.5 74.1 24.8 73.9 24.9C73.6 25.1 73.2 25.1 72.8 25.1C72.2 25.1 71.7 24.9 71.3 24.6C70.9 24.2 70.7 23.7 70.7 23V19.8C70.7 19.5 70.6 19.3 70.5 19.2C70.4 19.1 70.2 19 69.9 18.9V18.7H72.9V18.9C72.5 19 72.3 19.1 72.2 19.2C72.1 19.3 72.1 19.5 72.1 19.8V23.3C72.1 23.7 72.2 24 72.4 24.3C72.6 24.5 72.9 24.6 73.3 24.6C73.8 24.6 74.3 24.3 74.9 23.7V19.8C74.9 19.5 74.8 19.3 74.7 19.2C74.6 19.1 74.4 19 74.1 18.9V18.7H77.1V18.9C76.8 19 76.6 19.1 76.4 19.2C76.3 19.3 76.2 19.6 76.2 19.9V23.9C76.2 24.2 76.3 24.4 76.4 24.5C76.5 24.6 76.7 24.7 77 24.8V25H74.9Z M85.1 24.8V24.9H82.1V24.8C82.4 24.7 82.7 24.6 82.8 24.5C82.9 24.4 82.9 24.1 82.9 23.8V19.1H82.3C81.9 19.1 81.6 19.1 81.4 19.3C81.2 19.5 81 19.7 80.9 20.1H80.7L80.8 18.6H81C81.1 18.6 81.3 18.7 81.6 18.7H85.7C86 18.7 86.2 18.6 86.3 18.6H86.5L86.6 20.1H86.4C86.3 19.7 86.1 19.5 85.9 19.3C85.7 19.1 85.4 19.1 85 19.1H84.3V23.8C84.3 24.1 84.4 24.4 84.5 24.5C84.6 24.6 84.8 24.7 85.1 24.8Z M94.5 20.9H94.7V22.8H94.5C94.4 22.3 94.1 22 93.6 22H92.5V23.8C92.5 24.1 92.5 24.3 92.7 24.4C92.8 24.6 93 24.6 93.3 24.6H93.7C94.3 24.6 94.8 24.2 95.1 23.5H95.2L95.1 25H90.3V24.8C90.6 24.7 90.8 24.6 90.9 24.5C91 24.4 91.1 24.1 91.1 23.8V19.7C91.1 19.4 91 19.3 90.9 19.1C90.8 19 90.6 18.9 90.3 18.9V18.7H95.1V20.1H94.9C94.8 19.7 94.6 19.4 94.5 19.3C94.3 19.1 94.1 19.1 93.7 19.1H92.5V21.7H93.6C93.9 21.7 94.1 21.6 94.2 21.5C94.3 21.4 94.4 21.1 94.5 20.9Z M102.8 18.5V20.2H102.7C102.5 19.8 102.3 19.5 102 19.3C101.7 19 101.4 18.9 101.1 18.9C100.8 18.9 100.6 19 100.3 19.1C100.1 19.3 100 19.5 100 19.7C100 19.8 100 20 100.1 20.1C100.2 20.2 100.2 20.3 100.3 20.4C100.4 20.5 100.7 20.7 101.3 21C101.8 21.4 102.2 21.6 102.4 21.8C102.5 21.9 102.7 22.1 102.8 22.3C103 22.6 103.2 22.9 103.2 23.3C103.2 23.9 103 24.3 102.6 24.6C102.2 24.9 101.7 25.1 101.1 25.1C100.8 25.1 100.5 25.1 100 25C99.8 24.9 99.7 24.9 99.6 24.9C99.4 24.9 99.3 24.9 99.3 25.1H99.1V23.2H99.3C99.3 23.7 99.5 24.1 99.8 24.3C100.2 24.6 100.5 24.8 100.9 24.8C101.3 24.8 101.6 24.7 101.8 24.5C102 24.3 102.1 24.1 102.1 23.9C102.1 23.6 102 23.5 101.9 23.3C101.8 23.1 101.4 22.8 100.7 22.5C100.2 22.1 99.8 21.9 99.6 21.7C99.5 21.5 99.3 21.3 99.2 21.1C99.1 20.9 99.1 20.6 99.1 20.4C99.1 19.8 99.3 19.4 99.6 19C100 18.7 100.5 18.5 101.1 18.5C101.2 18.5 101.4 18.5 101.7 18.6C102 18.7 102.1 18.7 102.3 18.7C102.4 18.7 102.5 18.6 102.6 18.5H102.8V18.5Z'],
  ['#ffffff', 1, 'M3.6 7.8V12.3V16.2V20.6V24.6H7.4H13.5V20.6H7.4V16.2H10.9V12.3H7.4V7.8H13.5V3.9H7.4H3.6V7.8Z'],
  ['#ffffff', 0.5, 'M24.3 20.6V16.2V12.3V7.8V3.9H20.4H18V7.8H20.4V12.3H12.8V16.2H20.4V20.6H18V24.6H20.4H24.3V20.6Z']];

/* The condensed article bar's share bar is the SocialButtons component (Theme = Bold Coastal in Figma; Save, then the
   share buttons). Karl, 2026-11-12: use SocialButtons here instead of the Masthead's own copy. */
function MastheadSocial(p) {
  return h(SocialButtons, { className: 'mngds-masthead__social', theme: p.theme || 'Bold Coastal', networks: p.networks || MASTHEAD_SOCIAL,
    saved: p.saved, onSave: p.onSave, onShare: p.onShare, label: p.label });
}

/* Article, condensed at 1040px and up: hamburger (64px, no title), 176x36 logo, "Section Name | headline" (Noto Serif Bold 16,
   one line, ellipsis), SocialButtons; 40px right padding. */
function MastheadArticleBar(p) {
  return h('div', { className: 'mngds-masthead__bar mngds-masthead__bar--article' },
    h(MastheadSectionToggle, Object.assign({}, p.toggle, { device: 'SM-Mobile' })),
    h('a', { className: 'mngds-masthead__logo-link mngds-masthead__logo-link--article', href: p.homeHref || '/', 'aria-label': p.siteName },
      p.logo || h(PlaceholderLogo, { className: 'mngds-masthead__logo', decorative: true })),
    h('p', { className: 'mngds-masthead__article-title' },
      h('span', { className: 'mngds-masthead__article-section' }, p.sectionName),
      p.articleTitle ? h('span', { className: 'mngds-masthead__article-headline' }, ' | ' + p.articleTitle) : null),
    h(MastheadSocial, p.social));
}

/* Endless Tributes "Powered by" lockup: 12px uppercase, 10% tracking, color/gray/min; logo 106x28 (74.9x20 below 640px). */
function MastheadPoweredBy(p) {
  return h('div', { className: 'mngds-masthead__powered' },
    h('span', { className: 'mngds-masthead__powered-text' }, p.label || 'Powered by'),
    h('a', { className: 'mngds-masthead__powered-logo', href: p.href || 'https://www.endlesstributes.com/', 'aria-label': 'Endless Tributes' },
      h('svg', { viewBox: '0 0 106 28', 'aria-hidden': 'true', focusable: 'false' },
        MASTHEAD_ET_LOGO.map(function (l, i) { return h('path', { key: i, d: l[2], fill: l[0], opacity: l[1] < 1 ? l[1] : undefined }); }))));
}

/* Obits Nav: search field (search + equalizer2 filter), Powered by Endless Tributes, Submit an Obituary. */
function MastheadObitsNav(p) {
  var uid = React.useId ? React.useId().replace(/[^a-zA-Z0-9_-]/g, '') : '';
  var id = (p.id || 'mngds-obits-search') + (uid ? '-' + uid : '');
  return h('div', { className: 'mngds-masthead__obits' },
    h('form', { className: 'mngds-masthead__obits-search', role: 'search', onSubmit: function (e) { if (p.onSearch) { e.preventDefault(); p.onSearch(e.target.elements.q.value, e); } } },
      h('label', { className: 'mngds-masthead__visually-hidden', htmlFor: id }, p.placeholder),
      h('input', { id: id, name: 'q', type: 'search', className: 'mngds-masthead__obits-input', placeholder: p.placeholder }),
      h('span', { className: 'mngds-masthead__obits-controls' },
        h('button', { type: 'submit', className: 'mngds-masthead__obits-icon', 'aria-label': 'Search' }, h(Icon, { name: 'search', size: 22 })),
        h('button', { type: 'button', className: 'mngds-masthead__obits-icon', 'aria-label': p.filterLabel || 'Search filters', onClick: p.onFilter }, h(Icon, { name: 'equalizer2', size: 22 })))),
    h(MastheadPoweredBy, {}),
    h('div', { className: 'mngds-masthead__obits-action' },
      h('a', { className: 'mngds-masthead__obits-submit', href: p.submitHref || '#', onClick: p.onSubmit }, p.submitLabel || 'Submit an Obituary')));
}

/* NavMenu, View = Closed (Reader Dashboard below 800px): "Reader Dashboard" Noto Serif Bold 26 and the chevron. */
function MastheadNavMenu(p) {
  return h('button', { type: 'button', className: 'mngds-masthead__navmenu', 'aria-expanded': p.open ? 'true' : 'false', onClick: p.onClick },
    h('span', { className: 'mngds-masthead__navmenu-title' }, p.label || 'Reader Dashboard'),
    h('span', { className: 'mngds-masthead__navmenu-icon' }, h(Icon, { name: 'arrow-down', size: 16 })));
}

function mastheadSponsorship(p, visible, name) {
  return h('div', { className: 'mngds-masthead__sponsorship' },
    visible ? (p.renderAd ? p.renderAd(name) : h(AdBlocks, { name: name })) : null);
}

/* Condensed content per page (Scrolled / AdFree-Scrolled; the sticky bar). */
function mastheadCondensed(page, device, common, x) {
  var small = device === 'MD-TabletV' || device === 'SM-Mobile' || device === 'XS-Fold';
  if (page === 'Article' && device === 'XL-Desktop') return h(MastheadArticleBar, Object.assign({}, common, x.article));
  if (page === 'Obituaries') return h(React.Fragment, null, h(MastheadBar, common), h(MastheadObitsNav, x.obits));
  if (page === 'Dashboard' && small) return h(React.Fragment, null, h(MastheadBar, common), h('div', { className: 'mngds-masthead__rule' }), h(MastheadNavMenu, x.navMenu));
  return h(MastheadBar, common);
}

function mastheadLink(item, i, cls) {
  var it = typeof item === 'string' ? { label: item } : item;
  return h('li', { key: it.id || i, className: cls + '-item' },
    h('a', { className: cls + '-link', href: it.href || '#', onClick: it.onClick }, it.label));
}

/* SectionMenu, View = Closed: the hamburger, with "All Sections" at 1040px and up. */
function MastheadSectionToggle(p) {
  var showTitle = p.device === 'XL-Desktop';
  return h('button', { type: 'button', className: 'mngds-masthead__menu-toggle', 'aria-expanded': p.menuOpen ? 'true' : 'false',
      'aria-controls': p.menuId || undefined, 'aria-label': showTitle ? undefined : p.label, onClick: p.onClick },
    h('span', { className: 'mngds-masthead__menu-icon' }, h(Icon, { name: 'hamburger', size: 16 })),
    showTitle ? h('span', { className: 'mngds-masthead__menu-title' }, p.label) : null);
}

/* UserPic (Size = Small, 30px as production, Karl 2026-11-13) with UserImage inside: the reader's photo, initials
   (monogram) or the generic user icon (unknown). user.status = 'Active' and user.alert show the status dots. */
function MastheadAvatar(p) {
  var u = p.user || {};
  if (p.unknown) return h(UserPic, { size: 'Small', graphic: 'unknown' });
  return h(UserPic, { size: 'Small', src: u.imageSrc || u.src, name: u.name, initials: u.initials, status: u.status, alert: u.alert,
    background: u.background, color: u.color });
}

/* AccountMenu, View = Closed (UserStatus inside), plus the SearchBar (Status = Default) slot. */
function MastheadAccount(p) {
  var xl = p.device === 'XL-Desktop';
  var search = h('button', { type: 'button', className: 'mngds-masthead__search', 'aria-label': p.searchLabel || 'Search', onClick: p.onSearchClick },
    h(Icon, { name: 'search', size: 20 }));
  var status;
  if (!p.adFree && xl) {
    status = h('span', { className: 'mngds-masthead__buttons' },
      h(ButtonPrimary, { label: p.subscribeLabel || 'Subscribe', href: p.subscribeHref, onClick: p.onSubscribe }),
      h(ButtonPrimary, { label: p.logInLabel || 'Log In', href: p.logInHref, onClick: p.onLogIn }));
  } else {
    var name = p.adFree ? 'Account menu' + (p.user && p.user.name ? ', ' + p.user.name : '') : 'Log in or subscribe';
    status = h('button', { type: 'button', className: 'mngds-masthead__account', 'aria-haspopup': 'true', 'aria-expanded': 'false',
        'aria-label': p.accountLabel || name, onClick: p.onAccountClick },
      h(MastheadAvatar, { user: p.user, unknown: !p.adFree }),
      h('span', { className: 'mngds-masthead__chevron' }, h(Icon, { name: 'arrow-down', size: 12 })));
  }
  return h('div', { className: 'mngds-masthead__account-menu' }, status, search);
}

function MastheadAd(p) {
  var name = { 'XL-Desktop': 'Top Leaderboard 970x250', 'LG-TabletH': 'Top Leaderboard 970x250', 'MD-TabletV': 'Top Leaderboard 728x90',
    'SM-Mobile': 'Top Leaderboard 320x50', 'XS-Fold': 'Top Leaderboard 320x100' }[p.device];
  return h('div', { className: 'mngds-masthead__ad' }, p.renderAd ? p.renderAd(name) : h(AdBlocks, { name: name }));
}

/* The 64px row: hamburger (+ All Sections), logo, account. Used at the top of the page below 1040px and as the
   condensed bar at every width. */
function MastheadBar(p) {
  var big = p.device === 'XL-Desktop' || p.device === 'LG-TabletH';
  return h('div', { className: 'mngds-masthead__bar' },
    h('div', { className: 'mngds-masthead__bar-start' }, h(MastheadSectionToggle, p.toggle)),
    h('a', { className: 'mngds-masthead__logo-link' + (big ? ' mngds-masthead__logo-link--large' : ''), href: p.homeHref || '/', 'aria-label': p.siteName },
      p.logo || h(PlaceholderLogo, { className: 'mngds-masthead__logo', decorative: true })),
    h('div', { className: 'mngds-masthead__bar-end' }, h(MastheadAccount, p.account)));
}

var MASTHEAD_PROPS = ['page', 'device', 'state', 'adFree', 'ads', 'sticky', 'scrollRoot', 'scrollThreshold', 'navItems', 'navLabel', 'trending', 'trendingLabel',
  'date', 'temperature', 'eEditionLabel', 'eEditionHref', 'sectionsLabel', 'onMenuClick', 'menuOpen', 'menuId', 'onSearchClick', 'onSubscribe', 'onLogIn',
  'subscribeHref', 'logInHref', 'onAccountClick', 'user', 'logo', 'siteName', 'homeHref', 'renderAd', 'className', 'sectionName', 'articleTitle',
  'onShare', 'onSave', 'saved', 'shareTheme', 'shareNetworks', 'pageTitle', 'obitsSearchPlaceholder', 'onObitsSearch', 'onObitsFilter', 'submitObituaryHref', 'onSubmitObituary',
  'dashboardLabel', 'onDashboardMenuClick', 'dashboardMenuOpen'];

function Masthead(props) {
  var page = props.page || 'Home';
  if (['Home', 'SectionFront', 'Article', 'Obituaries', 'Dashboard'].indexOf(page) < 0 && typeof console !== 'undefined') {
    console.warn('[mng_web_design_system] Masthead: unknown page "' + page + '"; rendering Home.');
    page = 'Home';
  }
  var dv = useDevice(props.device);
  var device = dv[0];
  var forced = props.state;
  var dashboard = page === 'Dashboard';
  /* Reader Dashboard: always a logged-in reader, no ads (Figma has Default and Scrolled only). */
  var adFree = dashboard || (forced ? forced.indexOf('AdFree') === 0 : !!props.adFree);
  var showAds = !adFree && props.ads !== false;
  var xl = device === 'XL-Desktop';
  var lgUp = xl || device === 'LG-TabletH';
  var siteName = props.siteName || 'Fakeville Daily News';
  var stuck = React.useState(false);
  var sentinel = React.useRef(null);
  var sticky = !forced && props.sticky !== false;

  React.useEffect(function () {
    if (!sticky || !sentinel.current || !window.IntersectionObserver) return undefined;
    var io = new IntersectionObserver(function (es) {
      var e = es[es.length - 1];
      var top = e.rootBounds ? e.rootBounds.top : 0;
      stuck[1](!e.isIntersecting && e.boundingClientRect.top < top);
    }, { root: props.scrollRoot || null, threshold: 0 });
    io.observe(sentinel.current);
    return function () { io.disconnect(); };
  }, [sticky, props.scrollRoot, device, page]);

  var sectionName = props.sectionName || 'Section Name';
  var common = {
    device: device, siteName: siteName, logo: props.logo, homeHref: props.homeHref,
    toggle: { device: device, label: props.sectionsLabel || 'All Sections', onClick: props.onMenuClick, menuOpen: props.menuOpen, menuId: props.menuId },
    account: { device: device, adFree: adFree, user: props.user, onSearchClick: props.onSearchClick, onSubscribe: props.onSubscribe, onLogIn: props.onLogIn,
      subscribeHref: props.subscribeHref, logInHref: props.logInHref, onAccountClick: props.onAccountClick }
  };
  var extra = {
    article: { sectionName: sectionName, articleTitle: props.articleTitle != null ? props.articleTitle : 'Roughly forty characters of the article title',
      social: { onShare: props.onShare, onSave: props.onSave, saved: props.saved, theme: props.shareTheme, networks: props.shareNetworks } },
    obits: { id: props.id ? props.id + '-obits-search' : undefined, placeholder: props.obitsSearchPlaceholder || 'Search Obituaries by Name',
      onSearch: props.onObitsSearch, onFilter: props.onObitsFilter, submitHref: props.submitObituaryHref, onSubmit: props.onSubmitObituary },
    navMenu: { label: props.dashboardLabel, onClick: props.onDashboardMenuClick, open: props.dashboardMenuOpen }
  };
  var cls = cx('mngds-masthead', 'mngds-masthead--' + slug(device), 'mngds-masthead--page-' + slug(page), adFree && 'mngds-masthead--ad-free', props.className);

  /* Forced condensed states (previews): the condensed content, with its rule and shadow. */
  if (forced === 'Scrolled' || forced === 'AdFree-Scrolled') {
    return h('header', Object.assign(rest(props, MASTHEAD_PROPS), { ref: dv[1], className: cx(cls, 'mngds-masthead--scrolled') }),
      mastheadCondensed(page, device, common, extra));
  }

  var top;
  var leaderboard = showAds && page !== 'Obituaries';
  var logoLarge = function () {
    return h('a', { className: 'mngds-masthead__logo-link mngds-masthead__logo-link--large', href: props.homeHref || '/', 'aria-label': siteName },
      props.logo || h(PlaceholderLogo, { className: 'mngds-masthead__logo', decorative: true }));
  };
  var menusRow = function (middle) {
    return h('div', { className: 'mngds-masthead__menus' },
      h('div', { className: 'mngds-masthead__bar-start' }, h(MastheadSectionToggle, common.toggle)),
      h('div', { className: 'mngds-masthead__menus-middle' }, middle || null),
      h('div', { className: 'mngds-masthead__bar-end' }, h(MastheadAccount, common.account)));
  };
  var weather = function () {
    return h('div', { className: 'mngds-masthead__weather' },
      h(WeatherBug, { location: 'Masthead', eveningEdition: props.eveningEdition, temperature: props.temperature, date: props.date,
        eEditionLabel: props.eEditionLabel, eEditionHref: props.eEditionHref, eveningLabel: props.eveningLabel, eveningHref: props.eveningHref }));
  };

  if (page === 'Obituaries') {
    var title = h('p', { className: 'mngds-masthead__page-title' }, props.pageTitle || 'Obituaries');
    var titleRow = lgUp
      ? h('div', { className: 'mngds-masthead__title-row' }, h('div', { className: 'mngds-masthead__sponsorship mngds-masthead__sponsorship--spacer' }), title,
          mastheadSponsorship(props, showAds, 'Sponsorship 1 300x50'))
      : h(React.Fragment, null,
          h('div', { className: cx('mngds-masthead__title-row', showAds && 'mngds-masthead__title-row--with-ad') }, title),
          showAds ? h('div', { className: 'mngds-masthead__sponsorship-row' }, props.renderAd ? props.renderAd('Sponsorship 1 300x50') : h(AdBlocks, { name: 'Sponsorship 1 300x50' })) : null);
    top = h(React.Fragment, null, xl ? menusRow(logoLarge()) : h(MastheadBar, common), titleRow, h(MastheadObitsNav, extra.obits));
  } else if (dashboard) {
    if (xl) {
      top = h(React.Fragment, null, menusRow(),
        h('div', { className: 'mngds-masthead__weather-row mngds-masthead__weather-row--dashboard' }, weather(), logoLarge(), h('div', { className: 'mngds-masthead__sponsorship' })),
        h('div', { className: 'mngds-masthead__rule' }));
    } else {
      top = mastheadCondensed(page, device, common, extra);
      if (lgUp) top = h(React.Fragment, null, top, h('div', { className: 'mngds-masthead__rule' }));
    }
  } else if (xl) {
    var sectionFront = page === 'SectionFront';
    var nav = props.navItems || (sectionFront ? MASTHEAD_SECTION_NAV : MASTHEAD_NAV);
    var trending = props.trending || MASTHEAD_TRENDING;
    top = h(React.Fragment, null,
      menusRow(page === 'Home' ? null : logoLarge()),
      h('div', { className: 'mngds-masthead__weather-row' },
        weather(),
        page === 'Home' ? logoLarge() : h('p', { className: 'mngds-masthead__section-name' }, sectionName),
        mastheadSponsorship(props, showAds, 'Sponsorship 1 320x50')),
      h('nav', { className: 'mngds-masthead__nav', 'aria-label': props.navLabel || (sectionFront ? sectionName : 'Main') },
        h('ul', { className: 'mngds-masthead__nav-list' }, nav.map(function (it, i) { return mastheadLink(it, i, 'mngds-masthead__nav'); }))),
      h('div', { className: 'mngds-masthead__rule' }),
      h('div', { className: 'mngds-masthead__trending' },
        h('span', { className: 'mngds-masthead__trending-label', id: props.id ? props.id + '-trending' : undefined }, props.trendingLabel || 'Trending:'),
        h('ul', { className: 'mngds-masthead__trending-list', 'aria-label': 'Trending' }, trending.map(function (it, i) { return mastheadLink(it, i, 'mngds-masthead__trending'); }))));
  } else {
    top = h(React.Fragment, null, h(MastheadBar, common), h('div', { className: 'mngds-masthead__rule' }));
  }

  /* Where the condensed bar takes over: 450px at 1040px and up on Home, Section Front and Article (production headroom offset),
     1px below; Obituaries and Dashboard once the whole masthead has scrolled away. */
  var whole = page === 'Obituaries' || dashboard;
  var threshold = props.scrollThreshold != null ? props.scrollThreshold : (xl ? 450 : 1);
  var sentinelStyle = props.scrollThreshold == null && whole ? { bottom: 0 } : { top: threshold + 'px' };
  return h(React.Fragment, null,
    h('header', Object.assign(rest(props, MASTHEAD_PROPS), { ref: dv[1], className: cls }),
      sticky ? h('span', { ref: sentinel, className: 'mngds-masthead__sentinel', style: sentinelStyle, 'aria-hidden': 'true' }) : null,
      top,
      leaderboard ? h(MastheadAd, { device: device, renderAd: props.renderAd }) : null),
    sticky ? h('div', { className: cx('mngds-masthead__sticky', stuck[0] && 'is-stuck'), 'aria-hidden': stuck[0] ? undefined : 'true' },
      h('div', { className: cx('mngds-masthead', 'mngds-masthead--' + slug(device), 'mngds-masthead--page-' + slug(page), adFree && 'mngds-masthead--ad-free', 'mngds-masthead--scrolled') },
        mastheadCondensed(page, device, common, extra))) : null);
}
