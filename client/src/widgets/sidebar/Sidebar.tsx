import { Flex } from 'ui/layout';
import { Text } from 'ui/text';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside>
      <Flex className={styles.Sidebar} direction="column">
        <Text>Empty</Text>
      </Flex>
    </aside>
  );
};
