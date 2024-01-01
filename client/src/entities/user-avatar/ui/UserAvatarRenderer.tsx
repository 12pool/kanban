import { Avatar } from 'ui/avatar';

type UserAvatarRendererProps = {
  src: string;
};

export const UserAvatarRenderer = ({ src }: UserAvatarRendererProps) => {
  return <Avatar src={src} fallback="?" />;
};
