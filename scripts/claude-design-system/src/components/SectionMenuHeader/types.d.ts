export interface SectionMenuHeaderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma Device. Desktop: icon + "All Sections" (1040px and up). TabletV, Mobile: icon only. Default 'Desktop'. */
  device?: 'Desktop' | 'TabletV' | 'Mobile';
  /** Figma View. Closed: hamburger. Open: ×, same place. Sets aria-expanded. Default 'Closed'. */
  view?: 'Closed' | 'Open';
  /** Desktop label. Default 'All Sections'. */
  label?: React.ReactNode;
  /** Accessible names when the label isn't shown. Defaults 'Open menu of all sections' / 'Close menu' (production). */
  openLabel?: string;
  closeLabel?: string;
  /** id of the drawer (aria-controls). */
  menuId?: string;
  /** Documentation only: 'InFocus' draws the focus ring. */
  state?: 'Default' | 'InFocus';
}
/** The section menu toggle (hamburger / ×). */
export declare function SectionMenuHeader(props: SectionMenuHeaderProps): React.ReactElement;
