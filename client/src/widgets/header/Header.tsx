import { UserAvatar } from 'entities/user-avatar/feature/UserAvatar';
import { Logo } from 'shared/logo/ui';
import { Flex } from 'ui/layout';

export const Header = () => {
  return (
    <header>
      <Flex>
        <Logo />
        <UserAvatar />
      </Flex>
    </header>
  );
};
