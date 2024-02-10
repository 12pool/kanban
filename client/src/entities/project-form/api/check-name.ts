import { apiInstance } from 'shared/config/api/api-instance';
import { ProjectAPI } from 'shared/api';

export const checkName = ({
  teamName,
  name,
}: {
  teamName: string;
  name: string;
}) => apiInstance.get(ProjectAPI.checkName({ teamName, name }));
