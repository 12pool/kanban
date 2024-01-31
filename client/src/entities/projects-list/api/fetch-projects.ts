import { type AxiosPromise } from 'axios';
import { type Project, ProjectAPI } from 'shared/api';
import { apiInstance } from 'shared/config/api/api-instance';

export const fetchProjects = (teamName: string): AxiosPromise<Project[]> =>
  apiInstance.get(ProjectAPI.findAll({ teamName }));
