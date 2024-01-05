export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'none';

export const SizeOptions: Size[] = ['none', 'sm', 'md', 'lg', 'xl'];

export type ElementType = 'layout' | 'font';

export type GenericProps = {
  position?: 'relative' | 'absolute' | 'fixed' | 'sticky';
  top?: 'auto' | '0' | '50%' | '100%';
  left?: 'auto' | '0' | '50%' | '100%';
  right?: 'auto' | '0' | '50%' | '100%';
  bottom?: 'auto' | '0' | '50%' | '100%';
  grow?: '0' | '1';
  shrink?: '0' | '1';
  margin?: Size | [Size, Size] | [Size, Size, Size, Size];
  padding?: Size | [Size, Size] | [Size, Size, Size, Size];
};

const sizeToCss = (type: ElementType, size: Size) => {
  switch (size) {
    case 'sm':
      return `var(--${type}-size-sm)`;
    case 'md':
      return `var(--${type}-size-md)`;
    case 'lg':
      return `var(--${type}-size-lg)`;
    case 'xl':
      return `var(--${type}-size-xl)`;
    case 'none':
      return `var(--${type}-size-none)`;
  }
};

export const sizesToCss = (
  type: ElementType,
  sizes?: Size | [Size, Size] | [Size, Size, Size, Size],
) => {
  if (!sizes) return;

  if (Array.isArray(sizes)) {
    return sizes.map((item) => sizeToCss(type, item)).join(' ');
  } else {
    return sizeToCss(type, sizes);
  }
};
