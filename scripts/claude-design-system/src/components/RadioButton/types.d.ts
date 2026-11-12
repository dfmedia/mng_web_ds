export interface RadioButtonProps extends React.HTMLAttributes<HTMLLabelElement> {
  /** Figma status. Controlled when `onChange` is given. Default 'unselected'. */
  status?: 'unselected' | 'selected';
  /** Figma interaction; forces a documentation state (real hover / press apply the same look). Default 'Default'. */
  interaction?: 'Default' | 'hover' | 'pressed' | 'disabled';
  /** Figma inFocus: forces the focus ring (real keyboard focus shows it too). Default 'False'. */
  inFocus?: 'True' | 'False' | boolean;
  /** Figma Label (text property). Shown when given (Figma label=True); omit it for the circle alone (label=False). */
  label?: string;
  /** Hide the label even when `label` is given. Default true. */
  showLabel?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Group name: every radio in one question shares it. */
  name?: string;
  value?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  /** Accessible name when there's no visible label. */
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
}
export declare function RadioButton(props: RadioButtonProps): React.ReactElement;
