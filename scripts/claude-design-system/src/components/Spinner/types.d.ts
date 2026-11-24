export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma Size: 20 inside a button, 48 in a content area; the ring is 1/8 of the size (2.5px, 6px). Default 48. */
  size?: 20 | 48 | '20' | '48';
  /** Figma Color: 'On dark' = color/gray/max (Button Primary, dark surfaces); 'On light' = color/gray/min. Default 'On light'. */
  color?: 'On dark' | 'On light';
}
/** Spinner: the loading animation. Decorative (aria-hidden); put aria-busy and a message on the area that is waiting. */
export declare function Spinner(props: SpinnerProps): React.ReactElement;
