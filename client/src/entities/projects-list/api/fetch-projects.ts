import { apiInstance } from 'shared/config/api/api-instance';

export const fetchProjects = (teamName: string) =>
  apiInstance.get(`/project?teamName=${teamName}`);
