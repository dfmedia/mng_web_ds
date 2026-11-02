export interface HorizontalFeatureCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Device: production's breakpoints. '(≤799px)' stacked; 'M (800–1039px)', 'L (1040–1279px)', 'XL (≥1280px)'
      image and text side by side. The short forms 'M', 'L', 'XL' (and 'XS' / 'S' for stacked) are accepted. Default '(≤799px)'. */
  device?: '(≤799px)' | 'M (800–1039px)' | 'L (1040–1279px)' | 'XL (≥1280px)' | 'XS' | 'S' | 'M' | 'L' | 'XL';
  /** Headline text or nodes. Default: the Figma sample. */
  headline?: React.ReactNode;
  /** Excerpt text. Default: the Figma sample. */
  excerpt?: React.ReactNode;
  /** Show the excerpt. Default true. */
  showExcerpt?: boolean;
  /** Image URL (4:3). Without it the Article Image Placeholder shows. */
  image?: string;
  imageAlt?: string;
  /** Article URL: the headline becomes the link. */
  href?: string;
  target?: string;
  /** Heading level of the headline. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** The lead story of a wide section rail: 4:3 image, CardSecondary headline and excerpt. Fills its column. */
export declare function HorizontalFeatureCard(props: HorizontalFeatureCardProps): React.ReactElement;
