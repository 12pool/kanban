import type { Status } from 'entities/status/model';
import { Badge } from 'ui/badge';
import { Flex } from 'ui/layout';

type StatusManagerRendererProps = {
  statuses: Status[];
};

export const StatusManagerRenderer = ({
  statuses,
}: StatusManagerRendererProps) => {
  return (
    <Flex direction="column" gap="sm">
      {statuses.map(({ id, label}) => (
        <Badge key={id}>{label}</Badge>
      ))}
    </Flex>
  );
};
