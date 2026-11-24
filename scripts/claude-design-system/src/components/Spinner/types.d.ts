export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma Size: 20 inside a button (2.5px ring), 48 in a content area (4px ring). Default 48. */
  size?: 20 | 48 | '20' | '48';
  /** Figma Color: 'On dark' = color/gray/max (Button Primary, dark surfaces); 'On light' = color/gray/min. Default 'On light'. */
  color?: 'On dark' | 'On light';
}
/** Spinner: the loading animation. Decorative (aria-hidden); put aria-busy and a message on the area that is waiting. */
export declare function Spinner(props: SpinnerProps): React.ReactElement;
