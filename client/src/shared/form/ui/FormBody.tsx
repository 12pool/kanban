import { Flex } from 'ui/layout';
import { FormButtons } from '.';

type FormProps = {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  isPending?: boolean;
  buttons: React.ReactNode;
};

export const FormBody = ({
  children,
  className,
  innerClassName,
  buttons,
  isPending,
}: FormProps) => {
  return (
    <Flex className={className} direction="column" gap="md">
      <fieldset disabled={isPending}>
        <Flex className={innerClassName} direction="column" gap="md">
          {children}
        </Flex>
      </fieldset>
      <FormButtons>{buttons}</FormButtons>
    </Flex>
  );
};
