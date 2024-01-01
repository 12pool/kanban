import { useQuery } from '@tanstack/react-query';

import { fetchUserAvatar } from './fetchAvatar';

export const useUserAvatar = () => {
  return useQuery({
    queryKey: ['user-avatar'],
    queryFn: fetchUserAvatar,
  });
};
