import { isAxiosError } from 'axios';
import { isObject } from 'lodash';

export type CustomException<T> = {
  name: string;
  message: string;
  response: {
    data: T;
  };
};

export const isManualException = (
  error: Error,
): error is CustomException<{
  type: 'manual';
  message: string;
}> => {
  if (!isAxiosError(error)) return false;

  const data = error.response?.data as { type?: string };

  return isObject(data) && data.type === 'manual';
};
