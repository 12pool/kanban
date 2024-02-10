import { useQuery } from '@tanstack/react-query';
import { fetchProject } from './fetch-project';

export const useFetchProject = (id?: string) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: async () => {
      if (!id) return undefined;

      const response = await fetchProject(id);

      return response.data;
    },
    enabled: !!id,
  });
};
