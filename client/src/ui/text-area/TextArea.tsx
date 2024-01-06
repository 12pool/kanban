import styles from './TextArea.module.css';

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ className, ...restProps }: TextAreaProps) => {
  return (
    <textarea className={`${styles.TextArea} ${className}`} {...restProps} />
  );
};
