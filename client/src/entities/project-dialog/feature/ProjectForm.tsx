import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from 'ui/button';
import { Input } from 'ui/input';
import { Flex } from 'ui/layout';
import { TextArea } from 'ui/text-area';

import { FormField } from 'shared/form-field/ui';
import { colors, type Icons } from 'shared/avatar-picker/model';
import { AvatarPicker } from 'shared/avatar-picker/feature';

import styles from './ProjectForm.module.css';

type Inputs = {
  name: string;
  description: string;
};

export const ProjectForm = () => {
  const [projectAvatar, setProjectAvatar] = useState<{
    icon: Icons;
    color: string;
  }>({
    icon: 'AvatarIcon',
    color: colors.blue,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    alert(JSON.stringify(data));
    alert(JSON.stringify(projectAvatar));
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
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
        <TextArea<Inputs> register={register} label="description" />
      </FormField>

      <AvatarPicker
        projectAvatar={projectAvatar}
        setProjectAvatar={setProjectAvatar}
      />

      <Flex margin={['md', 'none', 'none', 'none']} justify="end">
        <Button>Create project</Button>
      </Flex>
    </form>
  );
};
