export interface ToggleSwitchProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma status: 'unselected' = off, 'selected' = on. Controlled when `onChange` is given. Default 'unselected'. */
  status?: 'unselected' | 'selected';
  /** Figma interaction; forces a documentation state (real hover / press apply the same look). Default 'Default'. */
  interaction?: 'Default' | 'hover' | 'pressed' | 'disabled';
  /** Figma inFocus: forces the focus ring (real keyboard focus shows it too). Default 'False'. */
  inFocus?: 'True' | 'False' | boolean;
  /** Figma icon: close (off) / checkmark3 (on) in the handle. Default false. */
  icon?: 'True' | 'False' | boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Accessible name when there's no wrapping <label>. */
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  id?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
}
export declare function ToggleSwitch(props: ToggleSwitchProps): React.ReactElement;
