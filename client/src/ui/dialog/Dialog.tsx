import * as RadixDialog from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';

import styles from './Dialog.module.css';

import { Box, Flex } from 'ui/layout';
import { Text } from 'ui/text';

export type DialogProps = {
  defaultOpen?: boolean;
  modal?: boolean;
  triggerClassName?: string;
  children: React.ReactNode;
  trigger: React.ReactNode;
};

export const Dialog = ({
  defaultOpen,
  modal = true,
  trigger,
  children,
  triggerClassName,
}: DialogProps) => {
  return (
    <RadixDialog.Root defaultOpen={defaultOpen} modal={modal}>
      <RadixDialog.Trigger
        className={`${styles.DialogTrigger} ${triggerClassName}`}
      >
        {trigger}
      </RadixDialog.Trigger>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className={styles.DialogOverlay} />
        {children}
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

Dialog.Content = function DialogContent({
  children,
  className,
  title,
  description,
  ...props
}: RadixDialog.DialogContentProps & { description?: string }) {
  return (
    <RadixDialog.Content
      className={`${styles.DialogContent} ${className}`}
      {...props}
    >
      <Box padding={['none', 'none', 'md', 'none']}>
        <Flex justify="between" align="center">
          <RadixDialog.Title>
            <Text size="lg" weight="medium">
              {title}
            </Text>
          </RadixDialog.Title>
          <RadixDialog.Close asChild aria-label="Close">
            <Cross1Icon className={styles.DialogClose} />
          </RadixDialog.Close>
        </Flex>
        {description && (
          <Box padding={['sm', 'none', 'none', 'none']}>
            <RadixDialog.Description>
              <Text as="p" size="sm">
                {description}
              </Text>
            </RadixDialog.Description>
          </Box>
        )}
      </Box>

      {children}
    </RadixDialog.Content>
  );
};
