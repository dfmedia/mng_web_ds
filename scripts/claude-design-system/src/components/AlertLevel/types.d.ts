export interface AlertLevelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma Level. 'none' renders nothing. Default 'none'. */
  level?: 'none' | 'low' | 'medium' | 'high';
  /** Figma Size: 'Small' 8px (masthead, Account Dropdown Menu) or 'Large' 16px (Reader Dashboard profile). Default 'Small'. */
  size?: 'Small' | 'Large';
  /** Accessible text for the dot (e.g. '2 alerts'). Without it the dot is hidden from screen readers: say it in nearby text. */
  label?: string;
}
/** A status dot (color/feedback low-success, medium, high-error). */
export declare function AlertLevel(props: AlertLevelProps): React.ReactElement | null;
