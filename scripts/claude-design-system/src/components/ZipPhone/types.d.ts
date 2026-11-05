export interface ZipPhoneProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Size: Desktop (Desktop, TabletH, TabletV) or Mobile (Mobile, Fold). Default 'Desktop'. */
  size?: 'Desktop' | 'Mobile';
  /** FormField props per field, by key: zip, phone. E.g. { zip: { state: 'Error', value: '' } }. */
  fields?: Partial<Record<'zip' | 'phone', Partial<FormFieldProps>>>;
  /** Figma "Show error": the shared error row's message. Default false. */
  showError?: boolean;
  /** Figma "Error message". Default 'Error message text.' */
  errorMessage?: React.ReactNode;
  id?: string;
}
export declare function ZipPhone(props: ZipPhoneProps): React.ReactElement;
