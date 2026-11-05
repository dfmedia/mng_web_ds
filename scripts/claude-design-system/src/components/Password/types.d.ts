export interface PasswordProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Size. Default 'Desktop'. */
  size?: 'Desktop' | 'Mobile';
  /** FormField props for 'password' and 'confirm' (state, value, onChange, onBlur, name…). Both default to type="password". */
  fields?: { password?: Partial<FormFieldProps>; confirm?: Partial<FormFieldProps> };
  /** Figma "Hint": the requirements, one per line; always shown, color/feedback/low-success. */
  hint?: React.ReactNode;
  /** Figma "Show hint". Default true. */
  showHint?: boolean;
  /** Message in the one error row (under Confirm Password), for an error in either field. Default: the field's errorMessage. */
  errorMessage?: React.ReactNode;
  id?: string;
}
export declare function Password(props: PasswordProps): React.ReactElement;
