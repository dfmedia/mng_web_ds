export interface ButtonLinkstyleProps extends Omit<React.HTMLAttributes<HTMLElement>, 'style'> {
  /** Figma Icon. Default 'None'. The icon is decorative and always color/gray/min. */
  icon?: 'None' | 'Left' | 'Right';
  /** Figma Style as a string ('1 Row' hugs with no max width; 'Stacked' caps the width at 91px, 115px with an icon).
   *  An object is treated as ordinary inline CSS instead. Default '1 Row'. */
  style?: '1 Row' | 'Stacked' | React.CSSProperties;
  /** Forced Figma State for documentation; leave unset in real layouts. */
  state?: 'Default' | 'Hover' | 'Pressed' | 'InFocus' | 'Disabled';
  /** Icon font name for Icon=Left/Right. Default 'new-tab' (the Figma sample). */
  iconName?: string;
  /** Button text (Figma "Label"). Children work too. Default 'Linkstyle Button'. */
  label?: React.ReactNode;
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** With target '_blank', visually hidden text is added to the label (see newTabText). */
  target?: string;
  /** Visually hidden suffix for new-tab links. Default ' (opens in a new tab)'. */
  newTabText?: string;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
export declare function ButtonLinkstyle(props: ButtonLinkstyleProps): React.ReactElement;
