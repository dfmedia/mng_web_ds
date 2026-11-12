export interface ButtonSaveProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Figma Checked: filled bookmark when true / 'yes'. Default false. */
  checked?: boolean | 'yes' | 'no';
  /** Called with the next checked value on click. */
  onChange?: (checked: boolean, e: React.MouseEvent) => void;
  /** Figma interaction; forces the look. Default 'Default'. */
  interaction?: 'Default' | 'hover' | 'pressed';
  /** Figma inFocus: forces the focus ring. Default 'False'. */
  inFocus?: 'True' | 'False' | boolean;
  'aria-label'?: string;
}
export declare function ButtonSave(props: ButtonSaveProps): React.ReactElement;
