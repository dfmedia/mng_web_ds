export interface AccountMenuUser {
  /** The reader's photo (UserImage), or name / initials for the monogram. */
  src?: string;
  imageSrc?: string;
  name?: string;
  email?: string;
  initials?: string;
  graphic?: 'unknown' | 'monogram' | 'monogramPP' | 'social' | 'socialPhillip';
  /** UserPic dots: 'Active' (top left) and an alert level (bottom right). */
  status?: 'Default' | 'Active';
  alert?: 'none' | 'low' | 'medium' | 'high';
  background?: string;
  color?: string;
}
export interface AccountMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Status. Default 'loggedIn'. */
  status?: 'loggedOut' | 'loggedIn' | 'alert';
  /** Figma View: forces a documentation state. Leave it out and the menu opens and closes itself. */
  view?: 'Closed' | 'Open';
  /** Figma Device. Logged out: '(up to 1039px)' (user icon and slide-in panel) or '(1040px and up)' (Subscribe and Log In, no menu). Logged in: '(all widths)'. */
  device?: '(up to 1039px)' | '(1040px and up)' | '(all widths)';
  /** Figma UserType for the open, logged-in menu. Default 'subscriber'. */
  userType?: 'subscriber' | 'nonSub';
  user?: AccountMenuUser;
  /** Figma text properties. */
  userName?: string;
  userEmail?: string;
  subscriptionType?: string;
  /** 340px and below: the open menu spans the full width of the screen (Karl, 2026-11-16). */
  fullWidth?: boolean;
  /** Draw the open panel in the page flow (documentation). */
  inline?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  showSearch?: boolean;
  onSearchClick?: () => void;
  readerDashboardHref?: string;
  subscriptionHref?: string;
  giftedHref?: string;
  savedHref?: string;
  contactHref?: string;
  logOutHref?: string;
  onLogOut?: () => void;
  subscribeHref?: string;
  onSubscribe?: () => void;
  logInHref?: string;
  onLogIn?: () => void;
  newsletterHref?: string;
  onNewsletter?: () => void;
  showNewsletter?: boolean;
  /** Marketing slot content (production keeps the slot hidden): at most 268px wide. */
  marketing?: React.ReactNode;
  updatePaymentHref?: string;
  onUpdatePayment?: () => void;
  /** Documentation: force a row state, e.g. { 'Reader Dashboard': 'hover' }. */
  rowState?: Record<string, 'hover' | 'pressed' | 'focus'>;
}
/** The account control at the right of the masthead and the menu it opens. */
export declare function AccountMenu(props: AccountMenuProps): React.ReactElement;
