import { apiInstance } from 'shared/config/api/api-instance';
import { type UpdateProjectDTO } from 'entities/project-form/model';
import { ProjectAPI } from 'shared/api';

export const updateProject = (project: UpdateProjectDTO) =>
  apiInstance.put(ProjectAPI.update(project.id), project);
