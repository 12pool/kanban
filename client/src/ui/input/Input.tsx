import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.css';

type InputProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: Path<T>;
    register: UseFormRegister<T>;
    error?: boolean;
  };

export function Input<T extends FieldValues>({
  className,
  register,
  label,
  required,
  error,
  ...restProps
}: InputProps<T>) {
  return (
    <input
      data-error={error}
      className={`${styles.Input} ${className}`}
      {...register(label, { required })}
      {...restProps}
    />
  );
}
