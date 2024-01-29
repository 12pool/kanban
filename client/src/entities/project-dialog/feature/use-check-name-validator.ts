import useDebouncedValue from 'shared/hooks/use-debounced-value';
import { useCheckName } from 'entities/project-dialog/api/use-check-name';

type useCheckNameValidator = {
  teamName: string;
  name: string;
};

export const useCheckNameValidator = ({
  teamName,
  name,
}: useCheckNameValidator) => {
  const debouncedName = useDebouncedValue(name, 350);
  const { data } = useCheckName({ teamName, name: debouncedName });

  return data?.data;
};
