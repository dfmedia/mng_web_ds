export interface ModalsCenterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Figma Device. Desktop/TabletH/TabletV: 444px card; Mobile/FOLD: screen width minus 24px each side; MobileScroll: Mobile with more content than fits (only the body scrolls). Default 'Desktop'. */
  device?: 'Desktop' | 'TabletH' | 'TabletV' | 'Mobile' | 'FOLD' | 'MobileScroll';
  /** Render in flow at the Device's Figma screen size (previews, canvases) instead of fixed over the viewport. */
  inline?: boolean;
  /** false renders nothing. Default true. */
  open?: boolean;
  /** Fixed mode: px (number) or CSS length left above the overlay so the masthead stays visible. Default 0. */
  offsetTop?: number | string;
  /** Title (Noto Sans Bold 20); labels the dialog. Default 'Header Title'. */
  title?: React.ReactNode;
  /** Subtitle; null hides it. Default 'Sub-Title Text'. */
  subtitle?: React.ReactNode | null;
  /** Header icon (16px, aligned to the title's first line). Default true, icon 'notification'. */
  showIcon?: boolean;
  iconName?: string;
  /** Body text in the bordered Body Container; null hides it (unless children are given). Default 'Body Section (As Needed)'. */
  body?: React.ReactNode | null;
  /** Extra Body Container content after the body text (e.g. a form field). */
  children?: React.ReactNode;
  /** Optional InLineMessage (e.g. Location=ModalError) between the body and the CTAs. */
  message?: React.ReactNode;
  /** Replaces the default CTA stack (Button Linkstyle, Button Primary, Button Linkstyle). */
  actions?: React.ReactNode;
  /** Default CTA labels; null hides one. Defaults 'CTA Hyperlink', 'CTA Button', 'CTA Hyperlink'. */
  topLinkLabel?: string | null;
  primaryLabel?: string | null;
  bottomLinkLabel?: string | null;
  onTopLink?: (e: React.MouseEvent) => void;
  onPrimary?: (e: React.MouseEvent) => void;
  onBottomLink?: (e: React.MouseEvent) => void;
  topLinkHref?: string;
  primaryHref?: string;
  bottomLinkHref?: string;
  /** Called by the close button, a click on the overlay, and Esc (fixed mode). */
  onClose?: (e: React.SyntheticEvent | KeyboardEvent) => void;
  /** Accessible name of the close button (Button In-Line Close, inside the card's top-right corner). Default 'Close'. */
  closeLabel?: string;
  /** 'alertdialog' only for a short message that needs an answer (confirm / cancel). Default 'dialog'. */
  role?: 'dialog' | 'alertdialog';
  /** Force compact mode (header = icon + title; subtitle and links move into the body; card padding 16 top and bottom). Default: automatic, visible area under 560px. */
  compact?: boolean;
  /** Force the keyboard-open layout (8px gaps top and bottom, covers the masthead). Default: automatic in fixed mode (window.visualViewport). */
  keyboardOpen?: boolean;
  /** With inline: the visible area's height in px (draws a keyboard-open screen). */
  visibleHeight?: number;
}
export declare function ModalsCenter(props: ModalsCenterProps): React.ReactElement | null;
