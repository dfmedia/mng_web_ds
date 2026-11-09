export interface SectionMenuItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma kind. main: section link (or toggle with withSubItems). subItem: sub-section link, text at 32px. Weather: the
      WeatherBug row. CTAButton: Subscribe Now. CTAMessage: the newsletter sign-up. Default 'main'. */
  kind?: 'main' | 'subItem' | 'Weather' | 'CTAButton' | 'CTAMessage';
  /** Figma withSubItems: 'yes' (or true) makes a main row a disclosure button with the chevron. */
  withSubItems?: 'no' | 'yes' | boolean;
  /** Figma View: 'open' / 'closed' for rows with sub-items (sets aria-expanded and the chevron). Default 'default'. */
  view?: 'default' | 'closed' | 'open';
  /** Figma leftIcon: 'yes' (or true) adds the icon before the label. */
  leftIcon?: 'no' | 'yes' | boolean;
  /** Icon name for leftIcon. Default 'home3'. */
  iconName?: string;
  /** Documentation only: 'Hover', 'Pressed', 'InFocus'. */
  state?: 'Default' | 'Hover' | 'Pressed' | 'InFocus';
  /** Row label (shown in Title Case). Default 'Section Item Name' / 'SubSection Item Name'. */
  label?: React.ReactNode;
  /** Link URL (rows without sub-items). */
  href?: string;
  /** id of the sub-items list (aria-controls) for rows with sub-items. */
  controls?: string;
  /** Weather: WeatherBug props (location is SectionMenu). */
  weather?: object;
  /** CTAButton: label, URL, click. Default 'Subscribe Now'. */
  ctaLabel?: React.ReactNode; ctaHref?: string; onCtaClick?: () => void;
  /** CTAMessage: prompt and button. Defaults 'Sign up for newsletters and alerts', 'Sign Up'. */
  message?: React.ReactNode; signUpLabel?: React.ReactNode; signUpHref?: string; onSignUpClick?: () => void;
}
/** One row of the section menu drawer. */
export declare function SectionMenuItem(props: SectionMenuItemProps): React.ReactElement;
