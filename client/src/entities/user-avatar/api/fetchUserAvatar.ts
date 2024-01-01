import axios from 'axios';
import { isString } from 'lodash';
import { convertUserAvatarApiToLocal } from './convertUserAvatarApiToLocal';

export const fetchUserAvatar = async (): Promise<string> => {
  const response = await axios.get<ArrayBuffer>(
    `https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80`,
    {
      responseType: 'arraybuffer',
    },
  );

  const contentType = isString(response.headers['content-type'])
    ? response.headers['content-type']
    : 'image/jpeg';

  return convertUserAvatarApiToLocal(response.data, contentType);
};
