export interface SectionMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device (Masthead widths). XL-Desktop: "All Sections", no weather row. The others: icon only, weather row shown. Default 'XS-Fold'. */
  device?: 'XS-Fold' | 'SM-Mobile' | 'MD-TabletV' | 'LG-TabletH' | 'XL-Desktop';
  /** Figma View. Default 'Closed'. */
  view?: 'Closed' | 'Open';
  /** Figma UserType (Open). subscriber: Log Out. nonSub: Subscribe Now, Subscribe, Log Out. loggedOut: Subscribe Now, Subscribe, Log In. Default 'subscriber' when open. */
  userType?: 'all' | 'subscriber' | 'nonSub' | 'loggedOut';
  /** Sections: strings or { label, href, items } (items: sub-items, first = the section page; items: false for a plain link). Default the Figma sample. */
  sections?: Array<string | { label: React.ReactNode; href?: string; items?: Array<string | { label: React.ReactNode; href?: string }> | false }>;
  /** Open section index (controlled; -1 for none) or the initial one (uncontrolled). Default 0. */
  openSection?: number; defaultOpenSection?: number; onSectionToggle?: (index: number) => void;
  /** Drawer id (aria-controls). Default 'mngds-section-menu'. */
  menuId?: string;
  /** Toggle label (XL-Desktop) and click. */
  label?: React.ReactNode; onToggle?: () => void;
  /** Home row. Defaults 'Home', '/'. */
  homeLabel?: React.ReactNode; homeHref?: string;
  /** WeatherBug props for the weather row (below 1040px), e.g. { eveningEdition: true }. */
  weather?: object;
  subscribeHref?: string; logInHref?: string; logOutHref?: string;
}
/** The section menu toggle and drawer. */
export declare function SectionMenu(props: SectionMenuProps): React.ReactElement;
