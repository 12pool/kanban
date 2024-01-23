import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Route as teamRoute } from 'routes/team/$teamName';

import { colors } from 'shared/avatar-picker/model';
import { ErrorMessage } from 'shared/error-message/feature';
import { toast } from 'shared/toaster';
import type { ProjectWithTeam, ProjectAvatar } from 'shared/project/model';

import { useCreateProject } from 'entities/project-dialog/api';
import {
  ProjectFormRenderer,
  type Inputs,
  ProjectCreatedToast,
} from 'entities/project-dialog/ui';

type ProjectFormProps = {
  closeDialog: () => void;
};

export const ProjectForm = ({ closeDialog }: ProjectFormProps) => {
  const navigate = useNavigate();
  const { teamName } = teamRoute.useParams();

  const [projectAvatar, setProjectAvatar] = useState<ProjectAvatar>({
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
      teamName,
    });
  };

  const onSuccess = async (data: ProjectWithTeam) => {
    toast.success(<ProjectCreatedToast />);

    closeDialog();

    await navigate({
      to: `/team/$teamName/$projectName`,
      params: { 
        teamName: data.team.name,
        projectName: data.name,
      },
      search: (prev) => ({ ...prev, insertProjectDialogOpen: false }),
    });
  };

  const {
    mutate: createProject,
    isPending,
    error,
    reset,
  } = useCreateProject({
    onSuccess,
  });

  if (error) {
    return <ErrorMessage error={error} reset={reset} />;
  }

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
