export interface TopZoneBlockProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Device: production's breakpoints. 'XS (≤639px)' and 'S (640–799px)' stacked; 'M (800–1039px)', 'L (1040–1279px)',
      'XL (≥1280px)' the lead column and Latest Headlines beside the ad column. 'XS', 'S', 'M', 'L', 'XL' also work.
      Default 'XS (≤639px)'. */
  device?: 'XS (≤639px)' | 'S (640–799px)' | 'M (800–1039px)' | 'L (1040–1279px)' | 'XL (≥1280px)' | 'XS' | 'S' | 'M' | 'L' | 'XL';
  /** Props for the Zone 1 Lead Article Card (headline, excerpt, image, related, gallery, slideshow…). Its Device follows
      the block: Mobile in XS, M and L; Tablet in S; Desktop in XL. */
  lead?: Partial<Zone1LeadArticleCardProps>;
  /** Up to 4 TopZone Article Cards (headline, image, imageAlt, href). Device follows the block. Default: 4 Figma samples. */
  stories?: Array<Partial<TopZoneArticleCardProps>>;
  /** Props for Latest Headlines (title, items, sponsored, newsletter…). Device follows the block. */
  latest?: Partial<LatestHeadlinesProps>;
  /** The right-rail ad: AdBlocks props, or your own element. Default Cube 1 RRail ATF 300x250 (XS, S) / 300x1050 (M up). */
  ad?: Partial<AdBlocksProps> | React.ReactElement;
  /** Show the ad (anonymous view). Default true; false for subscribers (AdFree). */
  showAd?: boolean;
  /** Heading level of the lead and story headlines. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** The homepage Zone 1: lead story, 4 secondary stories, Latest Headlines and the right-rail ad. Fills its row. */
export declare function TopZoneBlock(props: TopZoneBlockProps): React.ReactElement;
