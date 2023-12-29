import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons';

import styles from './Checkbox.module.css';

export type CheckboxProps = RadixCheckbox.CheckboxProps;

export const Checkbox = ({
  checked = false,
  onCheckedChange,
  className,
  ...props
}: CheckboxProps) => {
  return (
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
  );
};
