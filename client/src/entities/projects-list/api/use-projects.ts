import { useQuery } from '@tanstack/react-query';

import { type Project } from 'entities/project-dialog/model';

import { fetchProjects } from './fetch-projects';

export const useProjects = (teamName: string) => {
  return useQuery({
    queryKey: ['projects', teamName],
    queryFn: async () => {
      const response = await fetchProjects(teamName);

      return response.data as Required<Project>[];
    },
  });
};
