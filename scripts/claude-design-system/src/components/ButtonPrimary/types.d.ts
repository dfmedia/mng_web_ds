export interface ButtonPrimaryProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Breakpoint. Desktop (>=640px) hugs its label; Mobile (<=639px) fills the container. Default 'Desktop'. */
  breakpoint?: 'Desktop' | 'Mobile';
  /** Figma Icon. Default 'None'. */
  icon?: 'None' | 'Left' | 'Right';
  /** Icon font name for Icon=Left/Right. Default 'new-tab' (the Figma default). */
  iconName?: string;
  /** Forced Figma State for documentation; leave unset in real layouts. */
  state?: 'Default' | 'Hover' | 'Pressed' | 'InFocus' | 'Loading' | 'Disabled';
  /** Button text (Figma "Label"). Children work too. */
  label?: React.ReactNode;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  target?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  /** Waiting: a 20px Spinner (On dark) before `loadingLabel`; the button can't be pressed again (aria-busy, aria-disabled). */
  loading?: boolean;
  /** The waiting label while loading; say what is happening. Default 'Loading…'. */
  loadingLabel?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}
export declare function ButtonPrimary(props: ButtonPrimaryProps): React.ReactElement;
