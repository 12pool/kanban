import { Button } from 'ui/button';
import { Box, Flex } from 'ui/layout';
import { Text } from 'ui/text';

import styles from './ErrorMessageRenderer.module.css';

type ErrorMessageRendererProps = {
  reset: () => void;
};

export const ErrorMessageRenderer = ({ reset }: ErrorMessageRendererProps) => {
  return (
    <Flex justify="center">
      <Flex
        className={styles.Container}
        direction="column"
        align="center"
        justify="center"
        gap="xs"
      >
        <img
          className={styles.Image}
          src="/attention.png"
          alt="Error indicator"
        />
        <Text size="lg" align="center">
          Something went wrong here...
        </Text>
        <Text size="sm" align="center" color="sub">
          Sorry, we&apos;re having some technical issues. You can hit the
          &apos;Try Again&apos; button below to give it another shot.
        </Text>
        <Box margin={['lg', 'none', 'none', 'none']}>
          <Button onClick={reset}>Try Again</Button>
        </Box>
      </Flex>
    </Flex>
  );
};
