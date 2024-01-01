import axios from 'axios';

export const fetchUserAvatar = async (): Promise<string> => {
  const response = await axios.get<ArrayBuffer>(
    `https://avatar.iran.liara.run/public/boy?username=Scott`,
    {
      responseType: 'arraybuffer',
    },
  );

  console.log('response', response);

  const base64 = btoa(
    new Uint8Array(response.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      '',
    ),
  );

  return `data:${response.headers['content-type']};base64,${base64}`;
};
