import { UserAvatar } from 'entities/user-avatar/feature';
import { UserDropdownMenu } from 'entities/user-dropdown-menu/feature';
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

        <UserDropdownMenu
          trigger={
            <UserAvatar
              fallbackClassName={styles.UserAvatar}
              imageClassName={styles.UserAvatar}
            />
          }
        />
      </Flex>
    </header>
  );
};
