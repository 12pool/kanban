import { useMemo } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Button } from 'ui/button';
import { Input } from 'ui/input';
import { Flex } from 'ui/layout';
import { TextArea } from 'ui/text-area';
import { Loader } from 'ui/loader';

import { FormBody, FormField } from 'shared/form/ui';
import { AvatarPicker } from 'shared/avatar-picker/feature';
import type { Inputs } from 'entities/project-form/model';

import type { ProjectAvatar } from 'shared/api';

type ProjectFormProps = {
  errors: FieldErrors<Inputs>;
  projectAvatar: ProjectAvatar;
  isPending?: boolean;
  isValid?: boolean;
  setProjectAvatar: React.Dispatch<React.SetStateAction<ProjectAvatar>>;
  register: UseFormRegister<Inputs>;
  clearCustomErrorOnFocus: (key: keyof Inputs) => void;
};

export function ProjectFormRenderer({
  errors,
  projectAvatar,
  isPending,
  isValid,
  setProjectAvatar,
  register,
  clearCustomErrorOnFocus,
}: ProjectFormProps) {
  const buttons = useMemo(() => {
    if (isPending) {
      return (
        <Button disabled>
          <Flex gap="md" align="center">
            <Loader />
            Creating
          </Flex>
        </Button>
      );
    }

    return <Button disabled={!isValid}>Create Project</Button>;
  }, [isPending, isValid]);

  return (
    <FormBody isPending={isPending} buttons={buttons}>
      <FormField
        label="Name"
        fieldId="name"
        error={
          errors.name
            ? errors.name.type === 'manual'
              ? errors.name.message
              : 'This field is required'
            : undefined
        }
      >
        <Input<Inputs>
          error={!!errors.name}
          reactHookForm={{
            label: 'name',
            register,
          }}
          onFocus={() => {
            clearCustomErrorOnFocus('name');
          }}
          required
          autoComplete="off"
        />
      </FormField>

      <FormField label="Description" fieldId="description">
        <TextArea<Inputs>
          reactHookForm={{
            label: 'description',
            register,
          }}
        />
      </FormField>

      <FormField label="Avatar" fieldId="Avatar">
        <AvatarPicker
          projectAvatar={projectAvatar}
          setProjectAvatar={setProjectAvatar}
        />
      </FormField>
    </FormBody>
  );
}
