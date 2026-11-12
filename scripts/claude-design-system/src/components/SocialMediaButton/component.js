/* SocialMediaButton (WordPress Elements, Menus and Parts, 3788:44313). One round share button of the article share bar
   (cleaned up in place 2026-11-12, Karl). network picks the icon (and, on Modern Earthy, the brand color); theme picks
   the style: Bold Coastal filled with a 2px primary-dark bottom border, Measured Vibrant 1px outline, Modern Earthy 2px outline in the network's brand color.
   Colors come from the site's theme variables. `interaction` and `inFocus` force documentation states. */
var SOCIAL_NETWORKS = {
  'Facebook': ['facebook', 'Share on Facebook'],
  'Bluesky': ['bluesky', 'Share on Bluesky'],
  'Reddit': ['reddit', 'Share on Reddit'],
  'X': ['x', 'Share on X'],
  'Print': ['print', 'Print'],
  'Email': ['email', 'Share by email'],
  'LinkedIn': ['linkedin', 'Share on LinkedIn'],
  'Link': ['link', 'Copy link'],
  'Gift': ['gift2-share-01', 'Gift this article'],
  'Share more': ['share-more', 'More share options']
};
function SocialMediaButton(props) {
  var network = SOCIAL_NETWORKS[props.network] ? props.network : 'Facebook';
  var theme = props.theme || 'Bold Coastal';
  var interaction = props.interaction || 'Default';
  var focus = props.inFocus === true || props.inFocus === 'True';
  var n = SOCIAL_NETWORKS[network];
  var Tag = props.href ? 'a' : 'button';
  var attrs = rest(props, ['network', 'theme', 'interaction', 'inFocus', 'href', 'target', 'className', 'aria-label', 'type']);
  attrs.className = cx('mngds-social-media-button', 'mngds-social-media-button--theme-' + slug(theme),
    'mngds-social-media-button--network-' + network.toLowerCase().replace(/ /g, '-'), interaction !== 'Default' && 'is-' + slug(interaction),
    focus && 'is-infocus', props.className);
  attrs['aria-label'] = props['aria-label'] || n[1];
  if (Tag === 'a') { attrs.href = props.href; if (props.target) { attrs.target = props.target; attrs.rel = 'noopener'; } }
  else attrs.type = props.type || 'button';
  return h(Tag, attrs, h('span', { className: 'mngds-social-media-button__icon', 'aria-hidden': 'true' },
    h(Icon, { name: n[0], size: network === 'Gift' ? 22 : 18 })));
}
