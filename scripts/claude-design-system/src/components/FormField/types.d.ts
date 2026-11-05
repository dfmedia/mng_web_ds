export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Size. Desktop (Desktop, TabletH, TabletV): 56px input. Mobile (Mobile, Fold): 40px input. Default 'Desktop'. */
  size?: 'Desktop' | 'Mobile';
  /** Figma State; forces a documentation state. Without it the field is Blank and real focus shows Focus. Default 'Blank'. */
  state?: 'Blank' | 'Filled' | 'Focus' | 'Error' | 'Error Focus' | 'Success' | 'Disabled';
  /** Figma "Label". Default 'Field Label'. */
  label?: string;
  /** Figma "Value": the typed text (color/gray/min). Controlled when `onChange` is given. Default 'Text entered by the user'. */
  value?: string;
  /** Figma "Placeholder": the gray hint (color/gray/200). Default 'Placeholder text'. */
  placeholder?: string;
  /** Figma "Show value". Blank never shows a value. Default true. */
  showValue?: boolean;
  /** Figma "Show placeholder". Blank always shows it. Default false. */
  showPlaceholder?: boolean;
  /** Figma "Error message", shown in Error and Error Focus. Default 'Error message text.' */
  errorMessage?: React.ReactNode;
  /** Figma "Show icon" (left icon frame). Default true. */
  showIcon?: boolean;
  /** Figma "Icon": an icon font name (tokens/icons/icons.json). Default 'email'. */
  icon?: string;
  /** Figma "Show label icon" / icon before the label. Default false / 'email'. */
  showLabelIcon?: boolean;
  labelIcon?: string;
  /** Figma "Show right icon" / "Right icon" (ignored in Error, Error Focus and Success, which show their status icon). */
  showRightIcon?: boolean;
  rightIcon?: string;
  /** A trailing action element instead of an icon name (e.g. a show-password button). */
  rightIconNode?: React.ReactNode;
  /** Figma "Show card badge" / "Card badge": the consumer supplies the card brand badge element. */
  showCardBadge?: boolean;
  cardBadge?: React.ReactNode;
  /** Keep the reserved error row. false = Figma's hidden Error Message Container (assemblies with a shared error row). Default true. */
  errorRow?: boolean;
  /** Input attributes. */
  id?: string;
  name?: string;
  type?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  /** Extra ids for the input's aria-describedby (e.g. a hint or a shared error row). */
  'aria-describedby'?: string;
  /** Accessible names of the status icons. Default: none for the warning (the message says it), 'Valid' for the checkmark. */
  errorIconLabel?: string;
  successIconLabel?: string;
}
export declare function FormField(props: FormFieldProps): React.ReactElement;
