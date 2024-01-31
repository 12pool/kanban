import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export const useDebouncedValue = <T>(input: T, time = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedValue(input);
    }, time);

    handler();

    return () => {
      handler.cancel();
    };
  }, [input, time]);

  return debouncedValue;
};

export default useDebouncedValue;
