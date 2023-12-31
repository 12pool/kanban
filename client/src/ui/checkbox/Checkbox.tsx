import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';

import { Flex } from 'ui/layout';
import { Text } from 'ui/text';

import styles from './Checkbox.module.css';

export type CheckboxProps = RadixCheckbox.CheckboxProps & { label: string };

export const Checkbox = ({
  checked = false,
  onCheckedChange,
  className,
  label,
  ...props
}: CheckboxProps) => {
  return (
    <Flex gap="none" align="center">
      <RadixCheckbox.Root
        className={`${styles.CheckboxRoot} ${className}`}
        onCheckedChange={onCheckedChange}
        checked={checked}
        {...props}
      >
        <RadixCheckbox.Indicator>
          {checked === 'indeterminate' && <DividerHorizontalIcon />}
          {checked === true && <CheckIcon />}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label>
        <Text as="span" className={styles.Label}>
          {label}
        </Text>
      </label>
    </Flex>
  );
};
