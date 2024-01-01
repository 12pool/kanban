import { useUserAvatar } from 'entities/user-avatar/api';
import { UserAvatarRenderer } from 'entities/user-avatar/ui';

export const UserAvatar = () => {
  const { data } = useUserAvatar();
  return <UserAvatarRenderer src={data} />;
};
