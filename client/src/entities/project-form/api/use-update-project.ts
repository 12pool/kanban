import { useMutation } from '@tanstack/react-query';
import type { AxiosPromise } from 'axios';

import type { UpdateProjectDTO } from 'entities/project-form/model';

import { type ProjectWithTeam } from 'shared/project/model';
import { updateProject } from './update-project';

type UseUpdateProject = {
  onSuccess?: (project: ProjectWithTeam) => Promise<void>;
  onError?: (error: Error) => void;
};

export const useUpdateProject = ({ onSuccess, onError }: UseUpdateProject) => {
  return useMutation({
    mutationFn: (project: UpdateProjectDTO) => {
      return updateProject(project) as AxiosPromise<Required<ProjectWithTeam>>;
    },
    onSuccess: async (response) => {
      await onSuccess?.(response.data);
    },
    onError: (error) => {
      onError?.(error);
    },
  });
};
