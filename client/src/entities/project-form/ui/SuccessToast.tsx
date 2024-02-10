import { Flex } from 'ui/layout';
import { Text } from 'ui/text';

export const SuccessToast = ({ isEdit = false }: { isEdit?: boolean }) => {
  return (
    <Flex gap="lg">
      <Text>🎉 Project {isEdit ? 'created' : 'updated'}</Text>
    </Flex>
  );
};
