import { useMutation } from '@tanstack/react-query';
import type { AxiosPromise } from 'axios';

import type { CreateProjectDTO } from 'entities/project-form/model';

import { createProject } from './create-project';
import { type ProjectWithTeam } from 'shared/project/model';

type UseCreateProject = {
  onSuccess?: (project: ProjectWithTeam) => Promise<void>;
  onError?: (error: Error) => void;
};

export const useCreateProject = ({ onSuccess, onError }: UseCreateProject) => {
  return useMutation({
    mutationFn: (project: CreateProjectDTO) => {
      return createProject(project) as AxiosPromise<Required<ProjectWithTeam>>;
    },
    onSuccess: async (response) => {
      await onSuccess?.(response.data);
    },
    onError: (error) => {
      onError?.(error);
    },
  });
};
