import { useUserAvatar } from '../api/useUserAvatar';
import { UserAvatarRenderer } from '../ui/UserAvatarRenderer';

export const UserAvatar = () => {
  const img = useUserAvatar();

  return <UserAvatarRenderer src={img} />;
};
