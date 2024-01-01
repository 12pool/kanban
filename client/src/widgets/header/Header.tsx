import { UserAvatar } from 'entities/user-avatar/feature/UserAvatar';
import { Logo } from 'shared/logo/ui';
import { Box, Flex } from 'ui/layout';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <Flex
        className={styles.Header}
        padding="sm"
        align="center"
        justify="between"
      >
        <Box className={styles.Logo}>
          <Logo />
        </Box>
        <Box className={styles.UserAvatar}>
          <UserAvatar />
        </Box>
      </Flex>
    </header>
  );
};
