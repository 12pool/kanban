import { type ForwardRefExoticComponent, type RefAttributes } from 'react';
import type { IconProps } from '@radix-ui/react-icons/dist/types';

import { Flex } from 'ui/layout';

import styles from './Avatar.module.css';

type AvatarProps = {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  color: string;
};

export const Avatar = ({ color, Icon }: AvatarProps) => {
  return (
    <Flex
      align="center"
      justify="center"
      className={styles.Avatar}
      style={{
        backgroundColor: color,
      }}
    >
      <Icon width={30} height={30} />
    </Flex>
  );
};
