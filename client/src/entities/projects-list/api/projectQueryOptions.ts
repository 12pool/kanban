import { queryOptions } from '@tanstack/react-query';

import { fetchProjects } from './fetch-projects';

export const projectsQueryOptions = (teamName: string) =>
  queryOptions({
    queryKey: ['projects', teamName],
    queryFn: async () => {
      const response = await fetchProjects(teamName);

      return response.data;
    },
  });
