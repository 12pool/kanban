import { Box } from "ui/layout";
import styles from './Badge.module.css'

type BadgeProps = {
  size?: 'sm' | 'md';
  radius?: 'sm' | 'md';
  color?: 'blue' | 'orange';
  children: React.ReactNode;
}

export const Badge = ({ radius = "sm", size = "md", color = "orange", children }: BadgeProps) => {
  return (
    <Box
      className={styles.Badge}
      data-radius={radius}
      data-size={size}
      data-color={color}
    >
      {children}
    </Box>
  );
};