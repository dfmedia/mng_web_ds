export interface HeadlineListItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Rule: 'Default' (12px, then a 1px rule), 'None' (no rule: the last item from 1040px and in Section Rail Card
      Narrow), 'Dark' (a darker rule right under the text: the last item below 1040px in wide rails). Default 'Default'. */
  rule?: 'Default' | 'None' | 'Dark';
  /** Headline text or nodes. Default: the Figma sample. */
  headline?: React.ReactNode;
  /** Article URL: the headline becomes the link. */
  href?: string;
  target?: string;
  /** Heading level of the headline. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** One headline in a section rail's headline list. Fills its column; the list sets the 16px between items. */
export declare function HeadlineListItem(props: HeadlineListItemProps): React.ReactElement;
