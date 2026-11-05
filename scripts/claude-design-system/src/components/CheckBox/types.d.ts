export interface CheckBoxProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma status. partial = indeterminate (aria-checked="mixed"). Controlled when `onChange` is given. Default 'unselected'. */
  status?: 'unselected' | 'selected' | 'partial';
  /** Figma interaction; forces a documentation state (real hover / press apply the same look). Default 'Default'. */
  interaction?: 'Default' | 'hover' | 'pressed' | 'disabled';
  /** Figma inFocus: forces the focus ring (real keyboard focus shows it too). Default 'False'. */
  inFocus?: 'True' | 'False' | boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Accessible name when there's no wrapping <label> (Checkbox + Terms wraps it). */
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: 'true' | 'false';
  id?: string;
  name?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
}
export declare function CheckBox(props: CheckBoxProps): React.ReactElement;
