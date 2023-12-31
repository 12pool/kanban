import React from 'react';

import styles from './Text.module.css';

type Text = {
  children: React.ReactNode
  className?: string
  as?: 'p' | 'span' | 'div'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
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
} : Text) => {
  const props = {
    className: `${styles.Text} ${className}`,
    'data-size': size,
    'data-weight': weight,
    'data-color': color,
    'data-align': align,
  };

  return React.createElement(as, props, children);
}