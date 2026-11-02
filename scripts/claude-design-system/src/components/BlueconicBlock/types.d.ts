export interface BlueconicBlockItem {
  /** Headline text or nodes. */
  headline: React.ReactNode;
  /** Article URL: the row becomes the link. */
  href?: string;
  target?: string;
}
export interface BlueconicBlockProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Device: production's breakpoints. 'XS' (639px and below: one column), '(640–1039px)' (two columns),
      '(≥1040px)' (two columns, larger list metrics). Full Figma values ('XS (≤639px)') and 'M' / 'L' / 'XL' are accepted.
      Default 'XS' (the Figma default). */
  device?: 'XS' | '(640–1039px)' | '(≥1040px)' | 'XS (≤639px)' | 'M' | 'L' | 'XL';
  /** Title (Blueconic sets it: 'Most Popular', 'Recommended For You'). Default 'Most Popular'. */
  title?: React.ReactNode;
  /** Up to 10 headlines, in order; numbered 1-10. Default: the 10 Figma samples. */
  items?: BlueconicBlockItem[];
  /** Title element. Default 'h2'. */
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
/** The homepage Zone 2 Blueconic list: eyebrow title, primary rule and 10 numbered headlines. Fills its column. */
export declare function BlueconicBlock(props: BlueconicBlockProps): React.ReactElement;
