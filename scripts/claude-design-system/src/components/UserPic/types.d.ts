export interface UserPicProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma Size: 'Small' 32px (masthead, Account Dropdown Menu), 'Medium' 40px, 'Large' 64px (Reader Dashboard profile). Default 'Small'. */
  size?: 'Small' | 'Medium' | 'Large';
  /** Figma Status: 'Active' shows the green Active Dot (top left): the reader is active. Default 'Default'. */
  status?: 'Default' | 'Active';
  /** The Alert Dot (bottom right): an alert or message to see. Default 'none'. */
  alert?: 'none' | 'low' | 'medium' | 'high';
  /** UserImage props: the photo (`src`), initials (`name` / `initials`), monogram colors, or `graphic: 'unknown'`. */
  graphic?: 'unknown' | 'monogram' | 'monogramPP' | 'social' | 'socialPhillip';
  src?: string;
  initials?: string;
  name?: string;
  background?: string;
  color?: string;
  alt?: string;
  /** Accessible text for the dots, e.g. 'Active now', '2 new alerts'. Better: put it in the account button's name. */
  activeLabel?: string;
  alertLabel?: string;
}
/** The avatar with its two status dots (active top left, alert bottom right). */
export declare function UserPic(props: UserPicProps): React.ReactElement;
