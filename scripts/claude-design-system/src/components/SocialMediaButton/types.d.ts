export type SocialNetwork = 'Facebook' | 'Bluesky' | 'Reddit' | 'X' | 'Print' | 'Email' | 'LinkedIn' | 'Link' | 'Gift' | 'Share more';
export interface SocialMediaButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Network: the icon (and on Modern Earthy the brand color). Default 'Facebook'. */
  network?: SocialNetwork;
  /** Figma Theme: the button style. Default 'Bold Coastal'. */
  theme?: 'Bold Coastal' | 'Measured Vibrant' | 'Modern Earthy';
  /** Figma interaction; forces the look (real hover / press apply the same). Default 'Default'. */
  interaction?: 'Default' | 'hover' | 'pressed';
  /** Figma inFocus: forces the focus ring (real keyboard focus shows it too). Default 'False'. */
  inFocus?: 'True' | 'False' | boolean;
  href?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  'aria-label'?: string;
}
export declare function SocialMediaButton(props: SocialMediaButtonProps): React.ReactElement;
