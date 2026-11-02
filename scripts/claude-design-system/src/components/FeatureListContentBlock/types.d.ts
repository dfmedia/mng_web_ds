export interface FeatureListContentBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device: production's breakpoints. '(≤799px)' stacked with rules; 'M (800–1039px)' the list under the feature's text;
      'L (1040–1279px)' and 'XL (≥1280px)' the feature and the list side by side. 'M', 'L', 'XL' also work. Default '(≤799px)'. */
  device?: '(≤799px)' | 'M (800–1039px)' | 'L (1040–1279px)' | 'XL (≥1280px)' | 'M' | 'L' | 'XL';
  /** Props for the Horizontal Feature Card (headline, excerpt, image, imageAlt, href). Its device follows this block's. */
  feature?: Partial<HorizontalFeatureCardProps>;
  /** The list headlines: [{ headline, href, target }]. The rule of each is set by the block. Default: 3 Figma samples. */
  items?: Array<Pick<HeadlineListItemProps, 'headline' | 'href' | 'target'>>;
  /** Heading level of the feature and list headlines. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** The content of a wide section rail: Horizontal Feature Card and a headline list. Fills its column. */
export declare function FeatureListContentBlock(props: FeatureListContentBlockProps): React.ReactElement;
