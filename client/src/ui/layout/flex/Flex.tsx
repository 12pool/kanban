import { type GenericProps, type Size, sizesToCss } from '../generic';

import '../generic.css';

export type FlexProps = {
  gap?: Size;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  display?: 'flex' | 'inline-flex' | 'none';
  wrap?: 'wrap' | 'nowrap';
  justify?:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'baseline'
    | 'stretch';
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  children: React.ReactNode;
} & GenericProps &
  React.HTMLAttributes<HTMLDivElement>;

export const Flex = ({
  gap = 'none',
  direction = 'row',
  display = 'flex',
  wrap = 'nowrap',
  justify = 'start',
  align = 'start',
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
}: FlexProps) => {
  const marginCss = sizesToCss('layout', margin);
  const paddingCss = sizesToCss('layout', padding);

  console.log('marginCss', marginCss);

  return (
    <div
      className={`layout-generic ${className}`}
      data-wrap={wrap}
      data-justify={justify}
      data-align={align}
      data-display={display}
      data-direction={direction}
      data-gap={gap}
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
