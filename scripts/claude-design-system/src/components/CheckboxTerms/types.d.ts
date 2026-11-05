export interface CheckboxTermsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Size. Desktop: 40px check box, 16px text. Mobile: 28px, 13px. Default 'Desktop'. */
  size?: 'Desktop' | 'Mobile';
  /** Figma "Terms text"; may contain links. Children work too. */
  termsText?: React.ReactNode;
  /** CheckBox props (status, onChange, interaction, name…). */
  checkbox?: Partial<CheckBoxProps>;
  /** Figma "Show error" / "Error message". Default false / 'Please accept terms and conditions.' */
  showError?: boolean;
  errorMessage?: React.ReactNode;
  id?: string;
}
export declare function CheckboxTerms(props: CheckboxTermsProps): React.ReactElement;
