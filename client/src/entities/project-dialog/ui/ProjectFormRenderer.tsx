import { useMemo } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Button } from 'ui/button';
import { Input } from 'ui/input';
import { Flex } from 'ui/layout';
import { TextArea } from 'ui/text-area';
import { Loader } from 'ui/loader';

import { FormBody, FormField } from 'shared/form/ui';
import { AvatarPicker } from 'shared/avatar-picker/feature';

import type { Avatar, Project } from 'entities/project-dialog/model';

export type Inputs = Pick<Project, 'description' | 'name'>;

type ProjectFormProps = {
  errors: FieldErrors<Inputs>;
  projectAvatar: Avatar;
  setProjectAvatar: React.Dispatch<React.SetStateAction<Avatar>>;
  register: UseFormRegister<Inputs>;
  isPending?: boolean;
};

export function ProjectFormRenderer({
  errors,
  projectAvatar,
  setProjectAvatar,
  register,
  isPending,
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

    return <Button>Create Project</Button>;
  }, [isPending]);

  return (
    <FormBody isPending={isPending} buttons={buttons}>
      <FormField
        label="Name"
        fieldId="name"
        error={errors.name && 'This field is required'}
      >
        <Input<Inputs>
          error={!!errors.name}
          reactHookForm={{
            label: 'name',
            register,
          }}
          required
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
