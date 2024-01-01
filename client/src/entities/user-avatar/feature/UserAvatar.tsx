import { useUserAvatar } from '../api/useUserAvatar';
import { UserAvatarRenderer } from '../ui/UserAvatarRenderer';

export const UserAvatar = () => {
  const img = useUserAvatar();
  console.log('img', img);
  return <UserAvatarRenderer src={img} />;
};
