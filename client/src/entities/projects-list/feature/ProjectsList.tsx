import { Link } from '@tanstack/react-router';

import { ErrorMessage } from 'shared/error-message/feature';

import { useProjects } from 'entities/projects-list/api';
import { Text } from 'ui/text';
import { Flex } from 'ui/layout';

export const ProjectsList = () => {
  const { data, isPending, isError, error, refetch } = useProjects();

  if (isError) {
    return <ErrorMessage error={error} reset={() => void refetch()} />;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <Flex gap="md">
      {data.length > 0 ? (
        data.map(({ id, name }) => (
          <Link key={id} to={`/project/$projectId`} params={{ projectId: id }}>
            {name}
          </Link>
        ))
      ) : (
        <Text>0 projects</Text>
      )}
    </Flex>
  );
};
