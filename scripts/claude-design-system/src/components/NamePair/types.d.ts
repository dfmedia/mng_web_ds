export interface NamePairProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Size: Desktop (Desktop, TabletH, TabletV) or Mobile (Mobile, Fold). Default 'Desktop'. */
  size?: 'Desktop' | 'Mobile';
  /** FormField props per field, by key: first, last. E.g. { first: { state: 'Error', value: '' } }. */
  fields?: Partial<Record<'first' | 'last', Partial<FormFieldProps>>>;
  /** Figma "Show error": the shared error row's message. Default false. */
  showError?: boolean;
  /** Figma "Error message". Default 'Error message text.' */
  errorMessage?: React.ReactNode;
  /** Stack the fields on a very narrow screen. Default false. */
  stack?: boolean;
  id?: string;
}
export declare function NamePair(props: NamePairProps): React.ReactElement;
