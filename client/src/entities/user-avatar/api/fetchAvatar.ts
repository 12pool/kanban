import axios from 'axios';
import { isString } from 'lodash';
import { convertUserAvatarApiToLocal } from './convertUserAvatarApiToLocal';

export const fetchUserAvatar = async (): Promise<string> => {
  const response = await axios.get<ArrayBuffer>(
    `https://avatar.iran.liara.run/public/boy?username=Scott`,
    {
      responseType: 'arraybuffer',
    },
  );

  const contentType = isString(response.headers['content-type'])
    ? response.headers['content-type']
    : 'image/jpeg';

  return convertUserAvatarApiToLocal(response.data, contentType);
};
