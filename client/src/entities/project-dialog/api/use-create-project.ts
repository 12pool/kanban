import { useMutation } from '@tanstack/react-query';
import type { AxiosPromise } from 'axios';

import type { CreateProjectDTO } from 'entities/project-dialog/model';
import type { ProjectWithTeam } from 'shared/project/model';

import { createProject } from './create-project';

type UseCreateProject = {
  onSuccess?: (project: ProjectWithTeam) => Promise<void>;
};

export const useCreateProject = ({ onSuccess }: UseCreateProject) => {
  return useMutation({
    mutationFn: (project: CreateProjectDTO) => {
      return createProject(project) as AxiosPromise<Required<ProjectWithTeam>>;
    },
    onSuccess: async (response) => {
      await onSuccess?.(response.data);
    },
  });
};
