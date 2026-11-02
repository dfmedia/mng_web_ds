export interface SectionRailCardWideProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device: production's breakpoints. '(≤799px)' stacked; 'M (800–1039px)', 'L (1040–1279px)', 'XL (≥1280px)'.
      'M', 'L', 'XL' also work. Default '(≤799px)'. */
  device?: '(≤799px)' | 'M (800–1039px)' | 'L (1040–1279px)' | 'XL (≥1280px)' | 'M' | 'L' | 'XL';
  /** Section title. Default 'Section Title'. */
  title?: React.ReactNode;
  /** Section URL: the title becomes the link. */
  href?: string;
  /** Props for the Horizontal Feature Card lead (headline, excerpt, image, imageAlt, href). */
  feature?: Partial<HorizontalFeatureCardProps>;
  /** The list headlines: [{ headline, href, target }]. Default: 3 Figma samples. */
  items?: Array<Pick<HeadlineListItemProps, 'headline' | 'href' | 'target'>>;
  /** Heading level of the feature and list headlines. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** A wide homepage section rail: title and Feature + List Content Block. Fills its column. */
export declare function SectionRailCardWide(props: SectionRailCardWideProps): React.ReactElement;
