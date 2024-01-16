import { apiInstance } from 'shared/config/api/api-instance';
import { type CreateProjectDTO } from 'entities/project-dialog/model';

export const createProject = (project: CreateProjectDTO) =>
  apiInstance.post('/project', project);
