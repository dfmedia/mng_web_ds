export interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The option text. Default 'Option'. */
  label?: string;
  /** Figma status: 'selected' adds the check and aria-selected. Default 'unselected'. */
  status?: 'unselected' | 'selected';
  /** Figma interaction; forces the look (real hover / press apply the same). Default 'Default'. */
  interaction?: 'Default' | 'hover' | 'pressed';
  /** Figma inFocus: forces the focus ring (real keyboard focus shows it too). Default 'False'. */
  inFocus?: 'True' | 'False' | boolean;
  /** Figma Show icon. The 16px slot stays when off, so labels line up. Default true. */
  showIcon?: boolean | 'True' | 'False';
  /** Figma Icon (instance swap): an icon name. Default 'crown'. */
  icon?: string | null;
}
export declare function DropdownMenuItem(props: DropdownMenuItemProps): React.ReactElement;
