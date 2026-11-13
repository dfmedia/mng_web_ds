export interface UserImageProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Figma Size: 'small' 32px (masthead), 'medium' 40px, 'large' 64px. Default 'small'. */
  size?: 'small' | 'medium' | 'large';
  /** Figma Graphic. Default: 'social' when `src` is given, 'monogram' when `initials` or `name` is given, else 'unknown'.
      'social' / 'socialPhillip' without `src` fall back to the monogram. */
  graphic?: 'unknown' | 'monogram' | 'monogramPP' | 'social' | 'socialPhillip';
  /** The reader's photo URL (social). */
  src?: string;
  /** Initials for the monogram (up to 2). Default: from `name`. */
  initials?: string;
  name?: string;
  /** The monogram's avatar-art colors for this reader (production draws them on its server). */
  background?: string;
  color?: string;
  /** Accessible name. Without it the image is hidden from screen readers (the button around it should be named). */
  alt?: string;
}
/** The reader's avatar art: photo, initials or the generic user icon, in a circle. */
export declare function UserImage(props: UserImageProps): React.ReactElement;
