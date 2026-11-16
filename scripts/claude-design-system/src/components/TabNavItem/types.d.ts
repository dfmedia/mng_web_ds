export interface TabNavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Forced Figma State for documentation; leave unset in real layouts (use `selected`). 'Active' also selects the tab. */
  state?: 'Default' | 'Hover' | 'Active' | 'Focus';
  /** Selected tab: Active styling (theme-primary underline) and aria-selected="true". Default false (true when state='Active'). */
  selected?: boolean;
  /** Figma Label (text, uppercased by style). Default "Editor's Picks". Children work too. */
  label?: React.ReactNode;
  /** id of the tab panel this tab shows (aria-controls). */
  controls?: string;
  onClick?: (e: React.MouseEvent) => void;
}
export declare function TabNavItem(props: TabNavItemProps): React.ReactElement;
