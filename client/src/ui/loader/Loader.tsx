import styles from './Loader.module.css';

type LoaderProps = {
  center?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

export const Loader = ({ center, size = 'sm' }: LoaderProps) => {
  return (
    <span
      data-size={size}
      data-center={center}
      className={styles.Loader}
    ></span>
  );
};
