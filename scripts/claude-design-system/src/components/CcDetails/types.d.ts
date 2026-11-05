export interface CcDetailsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Size: Desktop (Desktop, TabletH, TabletV) or Mobile (Mobile, Fold). Default 'Desktop'. */
  size?: 'Desktop' | 'Mobile';
  /** FormField props per field, by key: number, exp, cvv, zip. E.g. { number: { state: 'Error', value: '' } }. */
  fields?: Partial<Record<'number' | 'exp' | 'cvv' | 'zip', Partial<FormFieldProps>>>;
  /** Figma "Show error": the shared error row's message. Default false. */
  showError?: boolean;
  /** Figma "Error message". Default 'Error message text.' */
  errorMessage?: React.ReactNode;
  /** Figma "Show card number": the Card Number row. Default true. */
  showCardNumber?: boolean;
  id?: string;
}
export declare function CcDetails(props: CcDetailsProps): React.ReactElement;
