import { useMutation } from '@tanstack/react-query';
import type { AxiosPromise } from 'axios';

import {
  type Project,
  type CreateProjectDTO,
} from 'entities/project-dialog/model';

import { createProject } from './create-project';

type UseCreateProject = {
  onSuccess?: (project: Project) => Promise<void>;
};

export const useCreateProject = ({ onSuccess }: UseCreateProject) => {
  return useMutation({
    mutationFn: (project: CreateProjectDTO) => {
      return createProject(project) as AxiosPromise<Project>;
    },
    onSuccess: async (response) => {
      await onSuccess?.(response.data);
    },
  });
};
