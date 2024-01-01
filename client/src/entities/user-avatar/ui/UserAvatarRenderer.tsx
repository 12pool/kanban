import { Avatar } from 'ui/avatar';
import { UserAvatarFallback } from './UserAvatarFallback';

type UserAvatarRendererProps = {
  src?: string;
};

export const UserAvatarRenderer = ({ src }: UserAvatarRendererProps) => {
  return <Avatar src={src} fallback={<UserAvatarFallback />} />;
};
