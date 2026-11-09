export interface SectionMenuGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma View. Closed: the section row only. Open: the row (⌃) and its list. Default 'Closed'. */
  view?: 'Closed' | 'Open';
  /** Section name. Default 'Section Item Name'. */
  label?: React.ReactNode;
  /** Sub-items, first one the section's own page: strings or { label, href }. Default the Figma sample (6 rows). */
  items?: Array<string | { label: React.ReactNode; href?: string }>;
  /** id for the list (aria-controls). Default from the label. */
  listId?: string;
  /** Called when the section row is clicked. */
  onToggle?: () => void;
}
/** A section and its subcategories (disclosure). */
export declare function SectionMenuGroup(props: SectionMenuGroupProps): React.ReactElement;
