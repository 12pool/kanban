import styles from './Button.module.css';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'basic';
  children: React.ReactNode | string;
};

export const Button = ({
  size = 'md',
  variant = 'basic',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      data-size={size}
      data-variant={variant}
      className={`${styles.Button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
