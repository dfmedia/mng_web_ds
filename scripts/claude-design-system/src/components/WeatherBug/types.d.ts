export interface WeatherBugProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Location. Masthead: 1040px and up, left of the logo (no padding, 213.37px date column, color/gray/max).
      SectionMenu: the open drawer below 1040px (0 15px 5px, color/surface/nav-panel). Default 'SectionMenu'. */
  location?: 'SectionMenu' | 'Masthead';
  /** Figma Evening e-Edition: true or 'On' adds the second link (several markets publish two editions). Default off. */
  eveningEdition?: boolean | 'Off' | 'On';
  /** Temperature (Helvetica Bold 16). Default '87°F'. */
  temperature?: React.ReactNode;
  /** Date (Noto Sans SemiBold 15, production format without a comma before the year). Default 'Monday, November 9th 2026'. */
  date?: React.ReactNode;
  /** First link label and URL. The label changes by market (for example "Digital Replica Edition", "Daily e-Edition", "e-Edition"). Default 'Today’s e-Edition'. */
  eEditionLabel?: React.ReactNode;
  eEditionHref?: string;
  /** Second link label and URL (eveningEdition). Default 'Evening e-Edition'. */
  eveningLabel?: React.ReactNode;
  eveningHref?: string;
}
/** The weather widget: temperature, icon, date and the e-Edition link(s). */
export declare function WeatherBug(props: WeatherBugProps): React.ReactElement;
