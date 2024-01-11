import type { RefAttributes, ForwardRefExoticComponent } from 'react';
import type { IconProps } from '@radix-ui/react-icons/dist/types';

import { icons } from 'shared/avatar-picker/model';
import { IconSelect } from 'shared/avatar-picker/ui/IconSelect.tsx';
import { Flex } from 'ui/layout';

import styles from './IconPicker.module.css';

type IconPickerProps = {
  onSelect: (
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>,
  ) => void;
};

export const IconPicker = ({ onSelect }: IconPickerProps) => {
  return (
    <Flex className={styles.IconPicker} padding="sm" gap="md" wrap="wrap">
      {icons.map((Icon, index) => (
        <IconSelect key={index}>
          <Icon
            width={20}
            height={20}
            onClick={() => {
              onSelect(icons[index]);
            }}
          />
        </IconSelect>
      ))}
    </Flex>
  );
};
