import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import styles from './Input.module.css';

type InputProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLInputElement> & {
    reactHookForm?: {
      label: Path<T>;
      register: UseFormRegister<T>;
    };
    error?: boolean;
  };

export function Input<T extends FieldValues>({
  className,
  reactHookForm,
  required,
  error,
  ...restProps
}: InputProps<T>) {
  if (reactHookForm === undefined) {
    return (
      <input
        data-error={error}
        className={`${styles.Input} ${className}`}
        {...restProps}
      />
    );
  }

  const { label, register } = reactHookForm;

  return (
    <input
      data-error={error}
      className={`${styles.Input} ${className}`}
      {...register(label, { required })}
      {...restProps}
    />
  );
}
