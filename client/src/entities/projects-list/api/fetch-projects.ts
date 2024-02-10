import { type AxiosPromise } from 'axios';
import { ProjectAPI } from 'shared/api';
import { apiInstance } from 'shared/config/api/api-instance';
import { type Project } from 'shared/project/model';

export const fetchProjects = (teamName: string): AxiosPromise<Project[]> =>
  apiInstance.get(ProjectAPI.findAll({ teamName }));
