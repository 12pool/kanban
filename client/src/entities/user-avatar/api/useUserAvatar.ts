import { useEffect, useState } from 'react';
import { fetchUserAvatar } from './fetchAvatar';

export const useUserAvatar = () => {
  const [userAvatar, setUserAvatar] = useState<string>('');

  useEffect(() => {
    fetchUserAvatar().then(setUserAvatar).catch(console.error);
  }, []);

  return userAvatar;
};
