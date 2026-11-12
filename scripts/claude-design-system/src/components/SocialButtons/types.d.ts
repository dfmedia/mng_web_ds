export interface SocialButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Theme. Bold Coastal, Endless Tributes and TwinCities use the filled style. Default 'Bold Coastal'. */
  theme?: 'Bold Coastal' | 'Measured Vibrant' | 'Modern Earthy' | 'Endless Tributes' | 'TwinCities';
  /** The share buttons to show (the Figma show/hide properties); the order is fixed. */
  networks?: Array<'Facebook' | 'Bluesky' | 'Reddit' | 'X' | 'Print' | 'Email' | 'LinkedIn' | 'Link' | 'Gift'>;
  /** Figma Save: show Save and its divider. Default true. */
  save?: boolean;
  saved?: boolean;
  onSave?: (saved: boolean, e: React.MouseEvent) => void;
  /** Share URLs by network; those buttons render as links. */
  links?: Partial<Record<string, string>>;
  onShare?: (network: string, e: React.MouseEvent) => void;
  /** Figma More open: forces the More panel open or closed. */
  moreOpen?: boolean;
  onMoreOpenChange?: (open: boolean) => void;
  /** The group's accessible name. Default 'Share this article'. */
  label?: string;
}
export declare function SocialButtons(props: SocialButtonsProps): React.ReactElement;
