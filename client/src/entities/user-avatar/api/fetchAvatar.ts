import axios from 'axios';

export const fetchUserAvatar = async (): Promise<string> => {
  const response = await axios.get<string>(
    `https://avatar.iran.liara.run/public/boy?username=Scott`,
    {
      responseType: 'arraybuffer',
    },
  );

  const base64 = Buffer.from(response.data, 'binary').toString('base64');

  return `data:${response.headers['content-type']};base64,${base64}`;
};
