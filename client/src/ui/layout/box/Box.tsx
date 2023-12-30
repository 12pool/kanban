import { type GenericProps, sizesToCss } from '../generic';

import '../layout-generic.css';

export type BoxProps = {
  display?: 'none' | 'inline' | 'inline-block' | 'block';
  children: React.ReactNode;
} & GenericProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Box = ({
  display,
  position,
  top,
  left,
  right,
  bottom,
  grow,
  shrink,
  margin,
  padding,
  className,
  children,
  style,
  ...props
}: BoxProps) => {
  const marginCss = sizesToCss('layout', margin);
  const paddingCss = sizesToCss('layout', padding);

  return (
    <div
      className={`layout-generic ${className}`}
      data-display={display}
      data-position={position}
      data-top={top}
      data-left={left}
      data-right={right}
      data-bottom={bottom}
      data-grow={grow}
      data-shrink={shrink}
      style={{
        margin: marginCss,
        padding: paddingCss,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
