export interface ButtonSocialLoginProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Icon position. 'only' is a 40x40 circle without a label. Default 'None'. */
  iconPosition?: 'None' | 'left' | 'right' | 'only';
  /** Figma Icon (instance swap): an icon name. Default 'new-tab'. */
  icon?: string;
  /** A CSS color for brand icons that need one (Facebook blue #1877F2). */
  iconColor?: string;
  /** Figma Label. Default 'Social Button'. */
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
