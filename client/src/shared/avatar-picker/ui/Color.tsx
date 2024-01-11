import styles from './Color.module.css';

declare module 'react' {
  interface CSSProperties {
    // eslint-disable-line
    [key: `--${string}`]: string | number;
  }
}

type ColorProps = {
  color: string;
  onSelect: () => void;
  selected?: boolean;
};

export const Color = ({ color, selected, onSelect }: ColorProps) => {
  return (
    <span
      data-selected={selected}
      onClick={onSelect}
      className={styles.Color}
      style={{
        '--avatar-picker-color': color,
      }}
      data-color={color}
    ></span>
  );
};
