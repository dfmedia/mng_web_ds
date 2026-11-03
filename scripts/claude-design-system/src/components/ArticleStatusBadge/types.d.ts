export interface ArticleStatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma Type: 'Subscriber' (subscriber-only story), 'Sponsored' (sponsored content) or 'None' (renders nothing). Default 'Subscriber'. */
  type?: 'Subscriber' | 'Sponsored' | 'None';
  /** Badge text (shown in caps). Default 'Subscriber Only' / 'Sponsored content'. */
  label?: React.ReactNode;
}
/** The label above a story's headline: Subscriber Only or Sponsored content. As wide as its text. */
export declare function ArticleStatusBadge(props: ArticleStatusBadgeProps): React.ReactElement | null;
