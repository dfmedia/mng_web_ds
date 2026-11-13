export interface BreakingNewsBannerProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Device: production's breakpoints for this bar. 'XS (≤639px)' and 'S (640–799px)' flow the title, headline
      and date as one paragraph (the headline starts 20 / 12px after the title); '(≥800px)' puts them in one row.
      'Mobile' / 'Tablet' / 'Desktop' are accepted. Default 'XS (≤639px)' (the Figma default). */
  device?: 'XS (≤639px)' | 'S (640–799px)' | '(≥800px)' | 'Mobile' | 'Tablet' | 'Desktop';
  /** Title text, shown uppercase. Default 'Breaking News'. */
  title?: React.ReactNode;
  /** The story's headline. */
  headline?: React.ReactNode;
  /** The story's URL (the headline is a link). */
  href?: string;
  /** Published time as shown, e.g. 'November 12, 2026 at 2:14 pm'; `false` hides it. */
  date?: React.ReactNode | false;
  /** Machine-readable time for the `time` element. */
  dateTime?: string;
  /** Called when the close button is pressed; the consumer hides the bar. */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Accessible name of the close button. Default 'Close breaking news'. */
  closeLabel?: string;
  /** Heading level of the title. Default 2. */
  headingLevel?: 2 | 3 | 4 | 5 | 6;
}
/** The breaking-news bar: color/theme/secondary, title, headline link, time, close button. Fills its column. */
export declare function BreakingNewsBanner(props: BreakingNewsBannerProps): React.ReactElement;
