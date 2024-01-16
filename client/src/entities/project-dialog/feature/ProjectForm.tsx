import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { colors } from 'shared/avatar-picker/model';

import { useCreateProject } from 'entities/project-dialog/api';
import type { Avatar } from 'entities/project-dialog/model';
import { ProjectFormRenderer, type Inputs } from 'entities/project-dialog/ui';

export const ProjectForm = () => {
  const [projectAvatar, setProjectAvatar] = useState<Avatar>({
    icon: 'AvatarIcon',
    color: colors.blue,
  });

  const { mutate: createProject, isSuccess, isPending } = useCreateProject();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createProject({
      ...data,
      ...projectAvatar,
    });
  };

  if (isSuccess) {
    alert('Project created successfully');
  }

  if (isPending) {
    return <div>Creating project...</div>;
  }

  return (
    // eslint-disable-next-line
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProjectFormRenderer
        errors={errors}
        projectAvatar={projectAvatar}
        setProjectAvatar={setProjectAvatar}
        register={register}
      />
    </form>
  );
};
