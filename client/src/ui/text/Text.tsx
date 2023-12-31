import React from 'react';

import '../../index.css';
import styles from './Text.module.css';

export type TextProps = {
  children: React.ReactNode | string
  className?: string
  as?: 'p' | 'span' | 'div'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  align?: 'left' | 'center' | 'right'  
}

export const Text = ({
  children,
  as = 'p',
  size = 'md',
  weight = 'normal',
  color = 'primary',
  align = 'left',
  className,
} : TextProps) => {
  const props = {
    className: `${styles.Text} ${className}`,
    'data-size': size,
    'data-weight': weight,
    'data-color': color,
    'data-align': align,
  };

  return React.createElement(as, props, children);
}