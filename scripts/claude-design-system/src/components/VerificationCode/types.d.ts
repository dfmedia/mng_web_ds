export interface VerificationCodeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** Figma Size. Desktop: 36x56 cells, 16px label. Mobile: 26x40, 14px. Default 'Desktop'. */
  size?: 'Desktop' | 'Mobile';
  /** Figma "Label". Default 'Verification Code'. */
  label?: string;
  /** Number of cells. Default 6. */
  length?: number;
  /** The code (controlled) or its starting value. */
  value?: string;
  defaultValue?: string;
  onChange?: (code: string) => void;
  /** Called when every cell is filled. */
  onComplete?: (code: string) => void;
  /** State for every cell: 'Success' once complete, 'Error' when the server rejects the code. Default: Blank / Filled per cell. */
  state?: 'Blank' | 'Filled' | 'Focus' | 'Error' | 'Error Focus' | 'Success' | 'Disabled';
  /** Figma "Show error" / "Error message": the shared error row. */
  showError?: boolean;
  errorMessage?: React.ReactNode;
  id?: string;
}
export declare function VerificationCode(props: VerificationCodeProps): React.ReactElement;
