import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { colors } from 'shared/avatar-picker/model';
import { toast } from 'shared/toaster';

import { useCreateProject } from 'entities/project-dialog/api';
import type { Avatar, Project } from 'entities/project-dialog/model';
import { ProjectFormRenderer, type Inputs } from 'entities/project-dialog/ui';

type ProjectFormProps = {
  closeDialog: () => void;
};

export const ProjectForm = ({ closeDialog }: ProjectFormProps) => {
  const navigate = useNavigate();

  const [projectAvatar, setProjectAvatar] = useState<Avatar>({
    icon: 'AvatarIcon',
    color: colors.blue,
  });

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

  const onSuccess = async (data: Project) => {
    toast.success('Project created successfully');

    closeDialog();

    await navigate({
      to: `/project/$projectId`,
      params: { projectId: data.id },
      search: (prev) => ({ ...prev, insertProjectDialogOpen: false }),
    });
  };

  const { mutate: createProject, isPending } = useCreateProject({
    onSuccess,
  });

  return (
    // eslint-disable-next-line
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProjectFormRenderer
        isPending={isPending}
        errors={errors}
        projectAvatar={projectAvatar}
        setProjectAvatar={setProjectAvatar}
        register={register}
      />
    </form>
  );
};
