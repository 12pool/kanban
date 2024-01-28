import { Link } from '@tanstack/react-router';

import { ErrorMessage } from 'shared/error-message/feature';

import { projectsQueryOptions } from 'entities/projects-list/api';
import { Text } from 'ui/text';
import { Flex } from 'ui/layout';

import { Route as teamRoute } from 'routes/team/$teamName';
import { useSuspenseQuery } from '@tanstack/react-query';

export const ProjectsList = () => {
  const { teamName } = teamRoute.useParams();
  const { data, error, refetch } = useSuspenseQuery(
    projectsQueryOptions(teamName),
  );

  if (error) {
    return <ErrorMessage error={error} reset={() => void refetch()} />;
  }

  return (
    <Flex gap="md">
      {data.length > 0 ? (
        data.map(({ id, name }) => (
          <Link
            style={{
              border: "1px solid #fff",
              padding: "1rem"
            }}
            key={id}
            to={`/team/$teamName/$projectName`}
            params={{
              teamName: teamName,
              projectName: name,
            }}
          >
            project: {name}
          </Link>
        ))
      ) : (
        <Text>0 projects</Text>
      )}
    </Flex>
  );
};
