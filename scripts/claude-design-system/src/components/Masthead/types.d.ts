export type MastheadDevice = 'XL-Desktop' | 'LG-TabletH' | 'MD-TabletV' | 'SM-Mobile' | 'XS-Fold';
export interface MastheadLink { label: React.ReactNode; href?: string; onClick?: (e: React.MouseEvent) => void; id?: string; }
export interface MastheadUser { name?: string; initials?: string; imageSrc?: string; }
export interface MastheadProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Page. Default 'Home'. */
  page?: 'Home' | 'SectionFront' | 'Article' | 'Obituaries' | 'Dashboard';
  /** Figma Device. Default: from the rendered width (>=1040 XL-Desktop, 800-1039 LG-TabletH, 640-799 MD-TabletV, 360-639 SM-Mobile, below 360 XS-Fold). */
  device?: MastheadDevice;
  /** Figma State, forced (documentation). Leave unset: adFree and scrolling decide. Dashboard has Default and Scrolled only. */
  state?: 'Default' | 'AdFree' | 'Scrolled' | 'AdFree-Scrolled';
  /** Subscriber (ad-free): the avatar replaces Subscribe / Log In and no ads show. Default false. */
  adFree?: boolean;
  /** Show the Sponsorship 1 and Top Leaderboard placeholders when not adFree. Default true. */
  ads?: boolean;
  /** Replace an ad placeholder: called with the Ad Blocks name ("Top Leaderboard 970x250"). */
  renderAd?: (name: string) => React.ReactNode;
  /** The condensed bar sticks to the top once the reader scrolls. Default true. */
  sticky?: boolean;
  /** Scroll container when it isn't the page (IntersectionObserver root). */
  scrollRoot?: Element | null;
  /** Pixels of scrolling before the condensed masthead appears. Default 450 at 1040px and up, 1 below (production), on Home, Section Front and Article; on Obituaries and Dashboard, once the whole masthead has scrolled away. */
  scrollThreshold?: number;
  navItems?: Array<string | MastheadLink>;
  navLabel?: string;
  trending?: Array<string | MastheadLink>;
  trendingLabel?: string;
  date?: string;
  temperature?: string;
  eEditionLabel?: string;
  /** Weather Bug: second link (several markets publish an evening edition). true adds it. */
  eveningEdition?: boolean;
  eveningLabel?: string;
  eveningHref?: string;
  eEditionHref?: string;
  sectionsLabel?: string;
  onMenuClick?: (e: React.MouseEvent) => void;
  menuOpen?: boolean;
  menuId?: string;
  onSearchClick?: (e: React.MouseEvent) => void;
  onSubscribe?: (e: React.MouseEvent) => void;
  onLogIn?: (e: React.MouseEvent) => void;
  subscribeHref?: string;
  logInHref?: string;
  onAccountClick?: (e: React.MouseEvent) => void;
  user?: MastheadUser;
  /** Replaces the Fakeville Daily News placeholder logo. */
  logo?: React.ReactNode;
  siteName?: string;
  homeHref?: string;
  /** Section Front / Article: the section name. Default 'Section Name'. */
  sectionName?: string;
  /** Article: the headline in the condensed bar at 1040px and up; '' hides it. */
  articleTitle?: string;
  /** Article share bar (SocialButtons): called with the network ('Facebook', 'Reddit', 'X', 'Email', 'Link', 'Gift'). */
  onShare?: (network: string, e: React.MouseEvent) => void;
  /** SocialButtons theme for the article bar. Default 'Bold Coastal' (as in Figma). */
  shareTheme?: 'Bold Coastal' | 'Measured Vibrant' | 'Modern Earthy' | 'Endless Tributes' | 'TwinCities';
  /** SocialButtons networks for the article bar. Default Facebook, Reddit, X, Email, Link, Gift. */
  shareNetworks?: string[];
  onSave?: (e: React.MouseEvent) => void;
  saved?: boolean;
  /** Obituaries: the page title. Default 'Obituaries'. */
  pageTitle?: string;
  obitsSearchPlaceholder?: string;
  /** Obituaries search submit; when given, the form doesn't navigate. */
  onObitsSearch?: (query: string, e: React.FormEvent) => void;
  onObitsFilter?: (e: React.MouseEvent) => void;
  submitObituaryHref?: string;
  onSubmitObituary?: (e: React.MouseEvent) => void;
  /** Dashboard below 800px: the NavMenu label. Default 'Reader Dashboard'. */
  dashboardLabel?: string;
  onDashboardMenuClick?: (e: React.MouseEvent) => void;
  dashboardMenuOpen?: boolean;
}
export declare function Masthead(props: MastheadProps): React.ReactElement;
