export const convertUserAvatarApiToLocal = (
  data: ArrayBuffer,
  contentType: string,
) => {
  const base64 = btoa(
    new Uint8Array(data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      '',
    ),
  );

  return `data:${contentType};base64,${base64}`;
};
