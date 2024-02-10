import { type AxiosPromise } from 'axios';
import { apiInstance } from 'shared/config/api/api-instance';
import { ProjectAPI } from 'shared/api';
import { type Project } from '../model';

export const fetchProject = (id: string): AxiosPromise<Project> =>
  apiInstance.get(ProjectAPI.findOne(id));
