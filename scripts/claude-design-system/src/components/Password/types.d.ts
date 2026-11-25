export interface PasswordProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Size. Default 'Desktop'. */
  size?: 'Desktop' | 'Mobile';
  /** FormField props for 'password' and 'confirm' (state, value, onChange, onBlur, name…). Both default to type="password". */
  fields?: { password?: Partial<FormFieldProps>; confirm?: Partial<FormFieldProps> };
  /** The requirements under Password, as PasswordRequirement rows. Default: the 3 rules, none met. Strings work too (not met). */
  requirements?: Array<{ label: React.ReactNode; met?: boolean } | string>;
  /** Figma "Show requirements". Default true. (`showHint` still works.) */
  showRequirements?: boolean;
  /** Message in the one error row (under Confirm Password), for an error in either field. Default: the field's errorMessage. */
  errorMessage?: React.ReactNode;
  id?: string;
}
export declare function Password(props: PasswordProps): React.ReactElement;
