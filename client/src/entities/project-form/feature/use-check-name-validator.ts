import useDebouncedValue from 'shared/hooks/use-debounced-value';
import { useCheckName } from 'entities/project-form/api/use-check-name';

type useCheckNameValidator = {
  initName?: string;
  teamName: string;
  name: string;
};

/***
 * return true if the name is already taken
 */
export const useCheckNameValidator = ({
  teamName,
  name,
  initName,
}: useCheckNameValidator) => {
  const debouncedName = useDebouncedValue(name, 100);
  const { data } = useCheckName({ teamName, name: debouncedName });

  return initName === debouncedName ? false : data?.data;
};
