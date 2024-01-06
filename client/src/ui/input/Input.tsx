import styles from './Input.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...restProps }: InputProps) => {
  return <input className={`${styles.Input} ${className}`} {...restProps} />;
};
