import { Flex } from 'ui/layout';

import styles from './FormButtons.module.css';

type FormButtonsProps = {
  children: React.ReactNode;
};

export const FormButtons = ({ children }: FormButtonsProps) => {
  return (
    <Flex
      className={styles.Container}
      margin={['md', 'none', 'none', 'none']}
      justify="end"
    >
      {children}
    </Flex>
  );
};
