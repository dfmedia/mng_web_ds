export interface Zone1RelatedItem {
  /** Related article title (RelatedArticleListItem: heading family Bold 12/19). */
  headline: React.ReactNode;
  /** Relative publish time ("56 mins ago"); omit to hide. */
  time?: React.ReactNode;
  /** ISO publish time for <time dateTime>. */
  dateTime?: string;
  /** Article URL: the title becomes a link. */
  href?: string;
  target?: string;
  key?: React.Key;
}
export interface Zone1LeadArticleCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Figma Style. One value (Standard), kept so existing instances don't change. An object is passed through as inline styles. */
  style?: 'Standard' | React.CSSProperties;
  /** Figma Device; every Device fills its column. Desktop (1280px and up on the homepage): text 43.75% | image 56.25%,
      20px apart. Tablet (640–799px): text and image 50% each, 20px apart. Mobile (below 640px, or any lead narrower than about 700px): one column, 25/29 headline.
      Default 'Mobile' (the Figma default). */
  device?: 'Desktop' | 'Mobile' | 'Tablet';
  /** Figma Gallery. Image (default) or Slideshow (a photo-gallery lead: the Zone 1 Slideshow replaces the image). */
  gallery?: 'Image' | 'Slideshow';
  /** Headline. Default 'Man charged with murder after fatal attack on bicycling doctor in Dana Point'. */
  headline?: React.ReactNode;
  /** Excerpt. Default 'Vanroy Evan Smith, 39, of Long Beach is being held on $1 million bail.' */
  excerpt?: React.ReactNode;
  /** Related list items (Figma shows three). Default: the Figma sample items. An empty array hides the Related list. */
  related?: Zone1RelatedItem[];
  /** Related list header text. Default 'Related'. */
  relatedTitle?: React.ReactNode;
  /** Image URL (Gallery=Image; cover). Without it the Article Image Placeholder shows. */
  image?: string;
  imageAlt?: string;
  /** Props passed to Zone1Slideshow for Gallery=Slideshow (slides, slideCount, caption, showCredit, controls...).
      Its breakpoint follows `device`; on Mobile it fills the card width. */
  slideshow?: Record<string, unknown>;
  /** Article URL: the headline becomes the link. */
  href?: string;
  target?: string;
  /** Heading level of the headline. Default 2. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** The homepage Zone 1 lead story with its Related list. */
export declare function Zone1LeadArticleCard(props: Zone1LeadArticleCardProps): React.ReactElement;
