import { useMutation } from '@tanstack/react-query';
import { type CreateProjectDTO } from 'entities/project-dialog/model';

import { createProject } from './create-project';

export const useCreateProject = () => {
  return useMutation({
    mutationFn: (project: CreateProjectDTO) => {
      return createProject(project);
    },
  });
};
