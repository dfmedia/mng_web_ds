export interface PasswordRequirementProps extends React.HTMLAttributes<HTMLElement> {
  /** Figma Size. Default 'Desktop' (13px text); 'Mobile' is 12px. */
  size?: 'Desktop' | 'Mobile';
  /** Figma State = Met. Default false (Not met). */
  met?: boolean;
  /** Figma State, as an alternative to `met`. */
  state?: 'Not met' | 'Met';
  /** Figma "Requirement": the rule's text. Children work too. Default 'Minimum length is 6'. */
  label?: React.ReactNode;
  /** Element to render. Default 'li' (inside the Password requirements list). */
  as?: 'li' | 'div';
}
export declare function PasswordRequirement(props: PasswordRequirementProps): React.ReactElement;
