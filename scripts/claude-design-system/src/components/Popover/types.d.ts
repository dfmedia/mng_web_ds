export interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Placement. Default 'Bottom'. */
  placement?: 'Top' | 'Bottom';
  /** Center it on a position: relative trigger wrapper, 8px from it. Default false. */
  anchored?: boolean;
  /** The Content slot: buttons or links, in a row 8px apart. */
  children?: React.ReactNode;
}
export declare function Popover(props: PopoverProps): React.ReactElement;
