export interface UserStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma status: 'none' (logged out), 'nonSub' (logged in, not a subscriber), 'subscriber'. Default 'none'. */
  status?: 'none' | 'nonSub' | 'subscriber';
  /** Figma Device: 'Desktop' or 'mobile' (logged out on mobile shows the user icon instead of the buttons). Default 'Desktop'. */
  device?: 'Desktop' | 'mobile';
  /** The reader, passed to UserPic: { src, name, initials, status: 'Active', alert }. */
  user?: { src?: string; name?: string; initials?: string; status?: 'Default' | 'Active'; alert?: 'none' | 'low' | 'medium' | 'high' };
  subscribeLabel?: string;
  subscribeHref?: string;
  onSubscribe?: (e: React.MouseEvent) => void;
  logInLabel?: string;
  logInHref?: string;
  onLogIn?: (e: React.MouseEvent) => void;
}
/** The masthead account area: Subscribe / Log In buttons and the avatar, by reader status. */
export declare function UserStatus(props: UserStatusProps): React.ReactElement;
