export interface RelatedArticleListItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Related article title. Default: the Figma sample. */
  headline?: React.ReactNode;
  /** Article URL: the title becomes the link. */
  href?: string;
  target?: string;
  /** Time text shown right after the title (e.g. '56 mins ago'); '' hides it. Default: the Figma sample. */
  time?: React.ReactNode;
  /** Machine-readable date for the `time` element (ISO 8601). */
  dateTime?: string;
  /** Heading level of the title. Default 4 (production's `h4`). */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** One related story in the Zone 1 Lead Article Card's Related list: bullet, then the title with its time inline. Fills its list. */
export declare function RelatedArticleListItem(props: RelatedArticleListItemProps): React.ReactElement;
