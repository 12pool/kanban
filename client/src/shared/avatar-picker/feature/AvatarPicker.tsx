import {
  type ForwardRefExoticComponent,
  type RefAttributes,
  useState,
} from 'react';

import { Flex } from 'ui/layout';
import type { IconProps } from '@radix-ui/react-icons/dist/types';

import { Avatar } from 'shared/avatar-picker/ui/Avatar.tsx';
import { colors, icons } from 'shared/avatar-picker/model';

import { IconPicker } from './IconPicker.tsx';
import { ColorPicker } from './ColorPicker.tsx';

import styles from './AvatarPicker.module.css';

export const AvatarPicker = () => {
  const [Icon, setIcon] = useState<
    ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
  >(icons[0]);
  const [color, setColor] = useState<string>(colors[0]);
  return (
    <Flex className={styles.AvatarPicker} gap="lg" align="center">
      <Avatar Icon={Icon} color={color} />
      <ColorPicker selectedColor={color} onSelect={setColor} />
      <IconPicker onSelect={setIcon} />
    </Flex>
  );
};
