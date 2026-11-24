export interface ButtonInLineCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Forced Figma State for documentation; leave unset in real layouts (:hover, :active, :focus-visible apply). */
  state?: 'Default' | 'Hover' | 'Pressed' | 'InFocus' | 'Disabled';
  /** Accessible name of the icon-only button (aria-label). Default 'Close'. */
  label?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  /** Disabled (gray/400 icon, no box): use while a modal is busy, so it can't be closed halfway. */
  disabled?: boolean;
}
/** Button In-Line Close: 40px close (X) hit area for in-line panels, alerts and toggletips. */
export declare function ButtonInLineClose(props: ButtonInLineCloseProps): React.ReactElement;
