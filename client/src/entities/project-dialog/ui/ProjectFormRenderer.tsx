import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Button } from 'ui/button';
import { Input } from 'ui/input';
import { Flex } from 'ui/layout';
import { TextArea } from 'ui/text-area';

import { FormField } from 'shared/form-field/ui';
import { AvatarPicker } from 'shared/avatar-picker/feature';

import type { Avatar, Project } from 'entities/project-dialog/model';

import styles from './ProjectFormRenderer.module.css';

export type Inputs = Pick<Project, 'description' | 'name'>;

type ProjectFormProps = {
  errors: FieldErrors<Inputs>;
  projectAvatar: Avatar;
  setProjectAvatar: React.Dispatch<React.SetStateAction<Avatar>>;
  register: UseFormRegister<Inputs>;
};

export function ProjectFormRenderer({
  errors,
  projectAvatar,
  setProjectAvatar,
  register,
}: ProjectFormProps) {
  return (
    <Flex direction="column" gap="md">
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

      <Flex className={styles.Button} margin={['md', 'none', 'none', 'none']} justify="end">
        <Button>Create project</Button>
      </Flex>
    </Flex>
  );
}
