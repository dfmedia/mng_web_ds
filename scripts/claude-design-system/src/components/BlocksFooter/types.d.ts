export interface BlocksFooterProps extends FooterProps {
  /** Called with the email when the reader submits the Stay Informed form (Enter; Figma has no sign-up button). */
  onSignup?: (email: string, e: React.FormEvent) => void;
  /** Stay Informed heading. Default 'Stay Informed'. */
  signupTitle?: string;
  /** Default 'Email Address' / 'email@address.com'. */
  emailLabel?: string;
  emailPlaceholder?: string;
  /** Terms and Conditions text (CheckboxTerms). Shown once the reader starts the form. Default sample text. */
  termsText?: React.ReactNode;
  /** Force the terms shown (true) or hidden (false) for documentation. Default: hidden until the reader starts the form. */
  showTerms?: boolean;
}
/** Blocks Footer: the future site footer with the Stay Informed email signup (not in production yet). */
export declare function BlocksFooter(props: BlocksFooterProps): React.ReactElement;
