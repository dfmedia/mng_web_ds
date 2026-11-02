export interface NewsletterSignupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device: the width Latest Headlines uses. '(≤799px)' full width (built 340), '(≥800px)' the side column
      (built 226). Production has no breakpoint for this block, so both draw the same layout. 'Mobile' / 'Desktop' (the
      names before 2026-10-30) are accepted. Default '(≤799px)' (the Figma default). */
  device?: '(≤799px)' | '(≥800px)' | 'Mobile' | 'Desktop';
  /** Prompt text (set per site in production). Default 'Sign up for Newsletters and Alerts'. */
  prompt?: React.ReactNode;
  /** Button label. Default 'Sign Up'. */
  label?: React.ReactNode;
  /** The site's newsletter preferences page: the button becomes a link. */
  href?: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
}
/** The newsletter prompt and Sign Up button (Button Primary) at the end of Latest Headlines. Fills its column. */
export declare function NewsletterSignup(props: NewsletterSignupProps): React.ReactElement;
