import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import styles from './TextArea.module.css';

type TextAreaProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLTextAreaElement> & {
    label: Path<T>;
    register: UseFormRegister<T>;
    error?: boolean;
  };

export function TextArea<T extends FieldValues>({
  className,
  register,
  label,
  required,
  error,
  ...restProps
}: TextAreaProps<T>) {
  return (
    <textarea
      data-error={error}
      className={`${styles.TextArea} ${className}`}
      {...register(label, { required })}
      {...restProps}
    />
  );
}
