export interface BlueconicListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device: production's breakpoint for the item's font metrics. '(≤1039px)' headline 16 / 17.07px;
      '(≥1040px)' 16 / 16.94px with -0.32px letter spacing. Default '(≤1039px)' (the Figma default). */
  device?: '(≤1039px)' | '(≥1040px)';
  /** Number in the circle (production counts 1-10). Default 1. */
  number?: React.ReactNode;
  /** Headline. Default: the Figma sample. */
  headline?: React.ReactNode;
  /** Article URL: the whole row becomes the link (as in production). */
  href?: string;
  target?: string;
}
/** One numbered headline in the Blueconic Block. Fills its column. */
export declare function BlueconicListItem(props: BlueconicListItemProps): React.ReactElement;
