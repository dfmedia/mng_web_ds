export interface DropdownMenuOption {
  value: string;
  label: string;
  /** Icon name for the 16px Icon Slot (e.g. 'crown'); the slot stays empty without one, so labels still line up. */
  icon?: string | null;
  /** Documentation only: forces this row's look. */
  interaction?: 'Default' | 'hover' | 'pressed';
  inFocus?: 'True' | 'False' | boolean;
}
export interface DropdownMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'style'> {
  /** The choices, in order. Default: Owner (crown), Guest. */
  options?: DropdownMenuOption[];
  /** The current choice; controlled when given. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, option: DropdownMenuOption) => void;
  /** Figma open: forces the menu open or closed (documentation). Leave it out in product use. */
  open?: 'True' | 'False' | boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** Figma Style: 'white' (color/gray/max) or 'gray' (color/gray/600). An object is passed through as inline styles. Default 'white'. */
  style?: 'white' | 'gray' | React.CSSProperties;
  /** Figma interaction; forces the look (real hover / press apply the same). Default 'Default'. */
  interaction?: 'Default' | 'hover' | 'pressed';
  /** Figma inFocus: forces the focus ring (real keyboard focus shows it too). Default 'False'. */
  inFocus?: 'True' | 'False' | boolean;
  /** Figma Show icon. Default true. */
  showIcon?: boolean | 'True' | 'False';
  /** Figma Show chevron. false = the read-only row (no menu). Default true. */
  showChevron?: boolean | 'True' | 'False';
  /** Overrides the trigger's icon (null for none) and text. */
  icon?: string | null;
  label?: string;
  /** Fixed width; otherwise it fits the longest choice (at least 100px). */
  width?: number | string;
  /** Keeps the open menu in the flow (documentation). */
  inline?: boolean;
  disabled?: boolean;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  id?: string;
}
export declare function DropdownMenu(props: DropdownMenuProps): React.ReactElement;
