import { Flex } from 'ui/layout';

import { Avatar } from 'shared/avatar-picker/ui/Avatar.tsx';
import { icons, type Icons } from 'shared/avatar-picker/model';

import { IconPicker } from './IconPicker.tsx';
import { ColorPicker } from './ColorPicker.tsx';

import styles from './AvatarPicker.module.css';

type AvatarPickerProps = {
  projectAvatar: {
    icon: Icons;
    color: string;
  };

  setProjectAvatar: (projectAvatar: { icon: Icons; color: string }) => void;
};

export const AvatarPicker = ({
  setProjectAvatar,
  projectAvatar,
}: AvatarPickerProps) => {
  const setColor = (color: string) => {
    setProjectAvatar({
      ...projectAvatar,
      color,
    });
  };

  const setIcon = (icon: Icons) => {
    setProjectAvatar({
      ...projectAvatar,
      icon,
    });
  };

  return (
    <Flex className={styles.AvatarPicker} gap="lg" align="center">
      <Avatar Icon={icons[projectAvatar.icon]} color={projectAvatar.color} />
      <ColorPicker selectedColor={projectAvatar.color} onSelect={setColor} />
      <IconPicker onSelect={setIcon} />
    </Flex>
  );
};
