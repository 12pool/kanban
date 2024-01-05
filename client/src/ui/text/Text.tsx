import React from 'react';

import styles from './Text.module.css';

export type TextProps = {
  children: React.ReactNode | string;
  className?: string;
  as?: 'p' | 'span' | 'div';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'accent'
    | 'disabled';
  align?: 'left' | 'center' | 'right';
} & React.HTMLAttributes<HTMLDivElement>;

export const Text = ({
  children,
  as = 'p',
  size = 'md',
  weight = 'normal',
  color = 'primary',
  align = 'left',
  className,
  ...restProps
}: TextProps) => {
  const props = {
    className: `${styles.Text} ${className}`,
    'data-size': size,
    'data-weight': weight,
    'data-color': color,
    'data-align': align,
    ...restProps,
  };

  return React.createElement(as, props, children);
};
