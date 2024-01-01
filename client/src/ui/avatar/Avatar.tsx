import * as RadixAvatar from '@radix-ui/react-avatar';

import { Text } from 'ui/text';

import styles from './Avatar.module.css';

type AvatarProps = RadixAvatar.AvatarProps & {
  src: string;
  fallback: string | React.ReactNode;
  alt?: string;
  delayMs?: number;
  imageClassName?: string;
  fallbackClassName?: string;
};

export const Avatar = ({
  className,
  imageClassName,
  fallbackClassName,
  delayMs = 600,
  fallback,
  src,
  alt,
  ...props
}: AvatarProps) => {
  console.log('in avatar', src);
  return (
    <RadixAvatar.Root className={`${styles.Avatar} ${className}`} {...props}>
      <RadixAvatar.Image
        className={`${styles.Image} ${imageClassName}`}
        src={src}
        alt={alt}
      />
      <RadixAvatar.Fallback
        className={`${styles.Fallback} ${fallbackClassName}`}
        delayMs={delayMs}
      >
        {typeof fallback === 'string' ? <Text>{fallback}</Text> : fallback}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
};
