export interface TabNavItem {
  /** Tab text (shown uppercase). */
  label: React.ReactNode;
  /** id of the tab button (the panel's aria-labelledby). */
  id?: string;
  /** id of the panel (role="tabpanel") this tab shows; set as aria-controls. */
  panelId?: string;
}
export interface TabNavProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Breakpoint. Desktop (>=640px): nav 1200px max, centered, 24px side padding. Mobile (<=639px): no side padding. Default 'Desktop'. */
  breakpoint?: 'Desktop' | 'Mobile';
  /** The tabs. Default [{ label: "Editor's Picks" }, { label: 'For You' }] (the Figma sample). */
  tabs?: TabNavItem[];
  /** Selected tab index (controlled). */
  selectedIndex?: number;
  /** Initially selected tab index (uncontrolled). Default 0. */
  defaultSelectedIndex?: number;
  /** Called with the clicked tab's index. */
  onChange?: (index: number, e: React.MouseEvent) => void;
  /** Accessible name of the tablist. */
  'aria-label'?: string;
}
export declare function TabNav(props: TabNavProps): React.ReactElement;
