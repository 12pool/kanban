import { Logo } from 'shared/logo/ui';
import { Box, Flex } from 'ui/layout';
import { Loader } from 'ui/loader';

import styles from './Header.module.css';

type HeaderProps = {
  userDropdown: React.ReactNode;
  isRouterStateLoading: boolean;
};

export const Header = ({ userDropdown, isRouterStateLoading }: HeaderProps) => {
  return (
    <header>
      <Flex
        className={styles.Header}
        padding="sm"
        align="center"
        justify="between"
      >
        <Flex align="center" gap="lg">
          <Box className={styles.Logo}>
            <Logo />
          </Box>
          {isRouterStateLoading && <Loader />}
        </Flex>

        <Flex align="center">{userDropdown}</Flex>
      </Flex>
    </header>
  );
};
