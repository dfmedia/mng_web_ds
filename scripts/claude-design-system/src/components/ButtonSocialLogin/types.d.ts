export interface ButtonSocialLoginProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Brand: 'None' is our gray button; Apple, Google and Facebook are the vendor-required looks (fixed logo, "Continue with ..." label). Default 'None'. */
  brand?: 'None' | 'Apple' | 'Google' | 'Facebook';
  /** Figma Icon position. 'only' is a 40x40 circle without a label. Brands take 'left' or 'only'. Default 'None' ('left' for a brand). */
  iconPosition?: 'None' | 'left' | 'right' | 'only';
  /** Figma Icon (instance swap): an icon name; ignored when a brand is set. Default 'new-tab'. */
  icon?: string;
  /** A CSS color for the icon (Brand None only). */
  iconColor?: string;
  /** Figma Label. Default 'Social Button'; brands 'Continue with <Brand>'. */
  label?: React.ReactNode;
  /** Fill the container (inside the 8px side margin). Default false (hug). */
  fill?: boolean;
  /** Figma interaction; forces the look (real hover / press apply the same). Default 'Default'. */
  interaction?: 'Default' | 'hover' | 'pressed';
  /** Figma inFocus: forces the focus ring (real keyboard focus shows it too). Default 'False'. */
  inFocus?: 'True' | 'False' | boolean;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  'aria-label'?: string;
}
export declare function ButtonSocialLogin(props: ButtonSocialLoginProps): React.ReactElement;
