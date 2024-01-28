import { apiInstance } from 'shared/config/api/api-instance';
import { type CreateProjectDTO } from 'entities/project-dialog/model';
import { ProjectAPI } from 'shared/api';

export const createProject = (project: CreateProjectDTO) =>
  apiInstance.post(ProjectAPI.create(), project);
