import * as RadixLabel from '@radix-ui/react-label';
import { Text } from 'ui/text';

type LabelProps = {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
} & React.HTMLAttributes<HTMLLabelElement>;

export const Label = ({
  children,
  htmlFor,
  className,
  ...restProps
}: LabelProps) => {
  return (
    <RadixLabel.Root className={className} htmlFor={htmlFor} {...restProps}>
      <Text as="span" size="sm" weight="semibold" color="primary">
        {children}
      </Text>
    </RadixLabel.Root>
  );
};
