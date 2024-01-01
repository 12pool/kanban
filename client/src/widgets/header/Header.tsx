import { Logo } from 'shared/logo/ui';
import { Flex } from 'ui/layout';

export const Header = () => {
  return (
    <header>
      <Flex>
        <Logo />
        {/* user-avatar */}
      </Flex>
    </header>
  );
};
