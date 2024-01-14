import { type Icons, icons, iconsList } from 'shared/avatar-picker/model';
import { IconSelect } from 'shared/avatar-picker/ui/IconSelect.tsx';
import { Flex } from 'ui/layout';

import styles from './IconPicker.module.css';

type IconPickerProps = {
  onSelect: (icon: Icons) => void;
};

export const IconPicker = ({ onSelect }: IconPickerProps) => {
  return (
    <Flex className={styles.IconPicker} padding="sm" gap="md" wrap="wrap">
      {iconsList.map((iconName, index) => {
        const Icon = icons[iconName];
        return (
          <IconSelect key={index}>
            <Icon
              width={20}
              height={20}
              onClick={() => {
                onSelect(iconName);
              }}
            />
          </IconSelect>
        );
      })}
    </Flex>
  );
};
