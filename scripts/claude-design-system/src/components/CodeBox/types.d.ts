export interface CodeBoxProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma Size. Desktop: 36x56 cell, 18px digit. Mobile: 26x40, 16px. Default 'Desktop'. */
  size?: 'Desktop' | 'Mobile';
  /** Figma State; forces a documentation state. Success = every cell of the code is filled (not confirmed). Default 'Blank'. */
  state?: 'Blank' | 'Filled' | 'Focus' | 'Error' | 'Error Focus' | 'Success' | 'Disabled';
  /** Figma "Value": one character. Controlled when `onChange` is given. Default '' (Blank) or '5'. */
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** Accessible name, e.g. 'Digit 1 of 6'. */
  'aria-label'?: string;
  'aria-describedby'?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  autoComplete?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  /** Ref to the input (to move focus between cells). */
  inputRef?: React.Ref<HTMLInputElement>;
}
export declare function CodeBox(props: CodeBoxProps): React.ReactElement;
