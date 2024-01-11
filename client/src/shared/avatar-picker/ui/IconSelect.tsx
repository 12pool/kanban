import type { ReactNode } from 'react';

import { Flex } from 'ui/layout';

import styles from './IconSelect.module.css';

type IconSelectProps = {
  children: ReactNode;
};

export const IconSelect = ({ children }: IconSelectProps) => (
  <Flex className={styles.IconSelect}>{children}</Flex>
);
