export interface LatestHeadlinesItem {
  /** Headline text or nodes. */
  headline: React.ReactNode;
  /** Relative time shown after the headline ("12 mins ago"). */
  time?: React.ReactNode;
  /** ISO 8601 publish time: the time becomes a <time dateTime> element. */
  dateTime?: string;
  /** Article URL: the headline becomes the link. */
  href?: string;
  target?: string;
}
export interface LatestHeadlinesProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device: production's breakpoints for this list. 'XS' (639px and below: full width, capped at 540px and
      centered), 'S' (640–799px: full width), '(≥800px)' (the side column beside the Zone 1 lead). The list is the same
      one column at every width. Full Figma values ('XS (≤639px)', 'S (640–799px)') and 'M' / 'L' / 'XL' (= '(≥800px)')
      are accepted. Default 'XS' (the Figma default). */
  device?: 'XS' | 'S' | '(≥800px)' | 'M' | 'L' | 'XL' | 'XS (≤639px)' | 'S (640–799px)';
  /** Section title. Default 'Latest Headlines'. */
  title?: React.ReactNode;
  /** Section URL: the title becomes the link. */
  href?: string;
  /** The headlines, newest first: the first is drawn as Type=First, the rest as Standard. Default: the 7 Figma samples. */
  items?: LatestHeadlinesItem[];
  /** Show the sponsored item after the headlines. Default true (as in Figma). */
  showSponsored?: boolean;
  /** Props for the sponsored item (headline, href, sponsor, sponsorLogo, sponsorLogoAlt, badgeLabel). */
  sponsored?: Partial<LatestHeadlinesListItemProps>;
  /** Show Newsletter Signup at the end of the list (production: anonymous view). Default true. */
  showNewsletter?: boolean;
  /** Replaces Newsletter Signup. */
  newsletter?: React.ReactNode;
  /** Heading level of the item headlines. Default 3. */
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
}
/** The homepage Zone 1 Latest Headlines rail: title, headline list, sponsored item and Newsletter Signup. Fills its column. */
export declare function LatestHeadlines(props: LatestHeadlinesProps): React.ReactElement;
