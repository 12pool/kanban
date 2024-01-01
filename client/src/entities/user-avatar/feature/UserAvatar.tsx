import { useUserAvatar } from 'entities/user-avatar/api';
import {
  UserAvatarRenderer,
  type UserAvatarRendererProps,
} from 'entities/user-avatar/ui';

type UserAvatarProps = Omit<UserAvatarRendererProps, 'src'>;

export const UserAvatar = (props: UserAvatarProps) => {
  const { data } = useUserAvatar();
  return <UserAvatarRenderer src={data} {...props} />;
};
