export interface AddressBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Size: Desktop (Desktop, TabletH, TabletV) or Mobile (Mobile, Fold). Default 'Desktop'. */
  size?: 'Desktop' | 'Mobile';
  /** FormField props per field, by key: street, city, state, zip. E.g. { street: { state: 'Error', value: '' } }. */
  fields?: Partial<Record<'street' | 'city' | 'state' | 'zip', Partial<FormFieldProps>>>;
  /** Figma "Show error": the shared error row's message. Default false. */
  showError?: boolean;
  /** Figma "Error message". Default 'Error message text.' */
  errorMessage?: React.ReactNode;
  id?: string;
}
export declare function AddressBlock(props: AddressBlockProps): React.ReactElement;
