import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import { type CustomException } from './exceptions-response';
import { isAxiosError } from 'axios';
import { isObject } from 'lodash';

export type FormExceptionErrors = {
  field: string;
  message: string;
};

export type CustomFormException = CustomException<{
  type: 'form';
  errors: FormExceptionErrors[];
}>;

export const isFormException = (error: Error): error is CustomFormException => {
  if (!isAxiosError(error)) return false;

  const data = error.response?.data as {
    type: string;
    errors?: { field: string; message: string }[];
  };

  if (!isObject(data) || data.type !== 'form' || !Array.isArray(data.errors))
    return false;

  return data.errors.every(
    (error) =>
      Object.prototype.hasOwnProperty.call(error, 'field') &&
      Object.prototype.hasOwnProperty.call(error, 'message'),
  );
};

type ValidatedFormExceptionErrors<T extends FieldValues> = {
  field: Path<T>;
  message: string;
}[];

export function hasValidFormFields<T extends FieldValues>(
  inputKeys: string[],
  errors: FormExceptionErrors[],
): errors is ValidatedFormExceptionErrors<T> {
  if (errors.every((error) => inputKeys.includes(error.field))) {
    return true;
  }

  return false;
}

type handleServerFormError<T extends FieldValues> = {
  response: {
    field: Path<T>;
    message: string;
  }[];
  setError: UseFormSetError<T>;
  predicate: (field: keyof T) => boolean;
};

export const handleServerFormError = <T extends FieldValues>({
  response,
  setError,
  predicate,
}: handleServerFormError<T>) => {
  for (const field of response) {
    if (predicate(field.field)) {
      setError(field.field, {
        type: 'manual',
        message: field.message,
      });
    }
  }
};
