import { useQuery } from '@tanstack/react-query';

import { type Project } from 'entities/project-dialog/model';

import { fetchProjects } from './fetch-projects';

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await fetchProjects();

      return response.data as Required<Project>[];
    },
  });
};
