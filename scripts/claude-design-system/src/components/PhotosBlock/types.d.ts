export interface PhotosBlockProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Device: production's breakpoints. 'XS (≤639px)' one column; 'S (640–799px)' thumbnails 2 per row, no excerpt;
      'M (800–1039px)' as S with the excerpt; 'L (1040–1279px)', 'XL (≥1280px)' lead beside the list.
      'XS', 'S', 'M', 'L', 'XL' also work. Default 'XS (≤639px)'. */
  device?: 'XS (≤639px)' | 'S (640–799px)' | 'M (800–1039px)' | 'L (1040–1279px)' | 'XL (≥1280px)' | 'XS' | 'S' | 'M' | 'L' | 'XL';
  /** Section title. Default 'Photos'. */
  title?: React.ReactNode;
  /** Section URL: the title becomes the link. */
  href?: string;
  /** Props for the 1Col Article Card lead (headline, excerpt, image, imageAlt, href). Style is always Media Lead; the
      excerpt shows from M. */
  lead?: Partial<OneColArticleCardProps>;
  /** Up to 6 Horizontal Thumbnail Cards (headline, image, imageAlt, href, showGalleryIcon). Device is always Mobile.
      Default: 6 Figma samples, the gallery icon on every other one. */
  items?: Array<Partial<HorizontalThumbnailCardProps>>;
  /** Show More Affordance label. Default 'Show More Photos'. */
  showMoreLabel?: React.ReactNode;
  /** Makes Show More a link. */
  showMoreHref?: string;
  onShowMore?: (e: React.MouseEvent) => void;
  /** Heading level of the lead and thumbnail headlines. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** The homepage Photos block: title, Media Lead card, 6 thumbnails, Show More Photos. Fills its column. */
export declare function PhotosBlock(props: PhotosBlockProps): React.ReactElement;
