import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import styles from './TextArea.module.css';

type TextAreaProps<T extends FieldValues> =
  React.InputHTMLAttributes<HTMLTextAreaElement> & {
    reactHookForm?: {
      label: Path<T>;
      register: UseFormRegister<T>;
    };
    error?: boolean;
  };

export function TextArea<T extends FieldValues>({
  className,
  reactHookForm,
  required,
  error,
  ...restProps
}: TextAreaProps<T>) {
  if (reactHookForm === undefined) {
    return (
      <textarea
        data-error={error}
        className={`${styles.TextArea} ${className}`}
        {...restProps}
      />
    );
  }

  const { label, register } = reactHookForm;

  return (
    <textarea
      data-error={error}
      className={`${styles.TextArea} ${className}`}
      {...register(label, { required })}
      {...restProps}
    />
  );
}
