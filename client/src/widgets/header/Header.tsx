import { Logo } from 'shared/logo/ui';
import { Box, Flex } from 'ui/layout';

import styles from './Header.module.css';

type HeaderProps = {
  userDropdown: React.ReactNode;
};

export const Header = ({ userDropdown }: HeaderProps) => {
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

        <Flex align="center">{userDropdown}</Flex>
      </Flex>
    </header>
  );
};
