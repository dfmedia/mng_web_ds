export interface SectionRailCardNarrowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device: production's breakpoint. '(≤799px)': the lead has a rule under it; '(≥800px)': no rule. Width otherwise
      follows the column (production 100% below 640px, 50% at 640–1039px, 25% from 1040px). 'XS', 'S' (= (≤799px)) and
      'M', 'L', 'XL' (= (≥800px)) are accepted. Default '(≤799px)'. */
  device?: '(≤799px)' | '(≥800px)' | 'XS' | 'S' | 'M' | 'L' | 'XL';
  /** Section title. Default 'Section Title'. */
  title?: React.ReactNode;
  /** Section URL: the title becomes the link. */
  href?: string;
  /** Props for the 1Col Article Card lead (headline, excerpt, image, imageAlt, href, showMeta, showSubscriberBadge, ...).
      Style is always Standard. */
  lead?: Partial<OneColArticleCardProps>;
  /** The list headlines: [{ headline, href, target }]. Default: 3 Figma samples. */
  items?: Array<Pick<HeadlineListItemProps, 'headline' | 'href' | 'target'>>;
  /** Heading level of the lead and list headlines. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** A narrow homepage section rail: title, 1Col lead and headline list. Fills its column. */
export declare function SectionRailCardNarrow(props: SectionRailCardNarrowProps): React.ReactElement;
