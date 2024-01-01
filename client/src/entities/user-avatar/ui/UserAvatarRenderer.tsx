import { Avatar, type AvatarProps } from 'ui/avatar';
import { UserAvatarFallback } from './UserAvatarFallback';

export type UserAvatarRendererProps = Pick<
  AvatarProps,
  'imageClassName' | 'fallbackClassName' | 'className' | 'src'
>;

export const UserAvatarRenderer = ({
  src,
  className,
  fallbackClassName,
  imageClassName,
}: UserAvatarRendererProps) => {
  return (
    <Avatar
      src={src}
      fallback={<UserAvatarFallback className={fallbackClassName} />}
      imageClassName={imageClassName}
      className={className}
    />
  );
};
