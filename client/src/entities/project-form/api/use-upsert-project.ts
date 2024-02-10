import { useMutation } from '@tanstack/react-query';
import type { AxiosPromise } from 'axios';

import type {
  CreateProjectDTO,
  UpdateProjectDTO,
} from 'entities/project-form/model';

import { type ProjectWithTeam } from 'shared/project/model';
import { updateProject } from './update-project';
import { createProject } from './create-project';

type UseUpdateProject = {
  onSuccess?: (project: ProjectWithTeam) => Promise<void>;
  onError?: (error: Error) => void;
};

export const useUpsertProject = ({ onSuccess, onError }: UseUpdateProject) => {
  return useMutation({
    mutationFn: (project: UpdateProjectDTO | CreateProjectDTO) => {
      if (isProjectUpdateDto(project))
        return updateProject(project) as AxiosPromise<
          Required<ProjectWithTeam>
        >;
      else
        return createProject(project) as AxiosPromise<
          Required<ProjectWithTeam>
        >;
    },
    onSuccess: async (response) => {
      await onSuccess?.(response.data);
    },
    onError: (error) => {
      onError?.(error);
    },
  });
};

function isProjectUpdateDto(
  project: UpdateProjectDTO | CreateProjectDTO,
): project is UpdateProjectDTO {
  return project.id !== undefined;
}
