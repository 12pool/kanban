import { Label } from 'ui/label';
import { Flex } from 'ui/layout';
import { Text } from 'ui/text';

import styles from './FormField.module.css';

type FormFieldProps = {
  fieldId: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

export const FormField = ({
  fieldId,
  label,
  children,
  error,
}: FormFieldProps) => {
  return (
    <Flex className={styles.FormField} direction="column">
      <Flex className={styles.InnerWrapper} direction="column" gap="xs">
        <Label htmlFor={fieldId}>{label}</Label>
        {children}
      </Flex>
      {error && (
        <Text color="error" size="sm">
          {error}
        </Text>
      )}
    </Flex>
  );
};
