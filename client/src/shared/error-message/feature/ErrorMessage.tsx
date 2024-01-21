import { useEffect } from 'react';

import { ErrorMessageRenderer } from 'shared/error-message/ui';

type ErrorMessageProps = {
  error: Error;
  reset: () => void;
};

export const ErrorMessage = ({ error, reset }: ErrorMessageProps) => {
  // TODO: logging logic

  useEffect(() => {
    console.error('error', error);
  }, [error]);

  return <ErrorMessageRenderer reset={reset} />;
};
