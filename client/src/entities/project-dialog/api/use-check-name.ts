import { useQuery } from '@tanstack/react-query';
import { checkName } from './check-name';
import { type AxiosPromise } from 'axios';

export const useCheckName = ({
  teamName,
  name,
}: {
  teamName: string;
  name: string;
}) => {
  return useQuery({
    queryKey: ['check-name', teamName, name],
    queryFn: () => {
      return checkName({ teamName, name }) as AxiosPromise<boolean>;
    },
    enabled: !!name,
  });
};
