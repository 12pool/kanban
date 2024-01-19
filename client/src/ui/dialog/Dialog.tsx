import * as RadixDialog from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';

import { Box, Flex } from 'ui/layout';
import { Text } from 'ui/text';

import styles from './Dialog.module.css';

export type DialogProps = {
  defaultOpen?: boolean;
  modal?: boolean;
  triggerClassName?: string;
  children: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export const Dialog = ({
  defaultOpen,
  modal = true,
  trigger,
  children,
  triggerClassName,
  open,
  onOpenChange,
}: DialogProps) => {
  return (
    <RadixDialog.Root
      onOpenChange={onOpenChange}
      open={open}
      defaultOpen={defaultOpen}
      modal={modal}
    >
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
  closeDialog,
  ...props
}: RadixDialog.DialogContentProps & {
  description?: string;
  closeDialog?: () => void;
}) {
  return (
    <RadixDialog.Content
      className={`${styles.DialogBody} ${className}`}
      {...props}
    >
      <Box className={styles.DialogHeader} padding="lg">
        <Flex justify="between" align="center">
          <RadixDialog.Title>
            <Text size="lg" weight="medium">
              {title}
            </Text>
          </RadixDialog.Title>
          <RadixDialog.Close
            asChild
            aria-label="Close"
            onPointerDown={closeDialog}
          >
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

      <Box padding="lg">{children}</Box>
    </RadixDialog.Content>
  );
};
