import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Route as teamRoute } from 'routes/team/$teamName';

import { colors } from 'shared/avatar-picker/model';
import { ErrorMessage } from 'shared/error-message/feature';
import { toast } from 'shared/toaster';
import type { ProjectWithTeam, ProjectAvatar } from 'shared/api';

import { useCreateProject } from 'entities/project-dialog/api';
import {
  ProjectFormRenderer,
  ProjectCreatedToast,
} from 'entities/project-dialog/ui';
import {
  type Inputs,
  isKeyOfInputs,
  inputKeys,
} from 'entities/project-dialog/model';

import { useCheckNameValidator } from './use-check-name-validator';

import {
  handleServerFormError,
  hasValidFormFields,
  isFormException,
} from 'shared/api/exceptions/form-exception';

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
    watch,
    getValues,
    setError,
    clearErrors,
  } = useForm<Inputs>();

  const isFormValid = Object.keys(errors).length === 0;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createProject({
      ...data,
      ...projectAvatar,
      teamName,
    });
  };

  const nameCheck = useCheckNameValidator({
    teamName,
    name: watch('name'),
  });

  useEffect(() => {
    if (nameCheck) {
      setError('name', {
        type: 'manual',
        message: `The name ${getValues('name')} is already taken`,
      });
    } else {
      clearErrors('name');
    }
  }, [nameCheck, setError, getValues, clearErrors]);

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

  const onError = (error: Error) => {
    if (
      isFormException(error) &&
      hasValidFormFields<Inputs>(inputKeys, error.response.data.errors)
    ) {
      handleServerFormError({
        predicate: isKeyOfInputs,
        response: error.response.data.errors,
        setError,
      });
    }

    // Unhandled error fallback
    return <ErrorMessage error={error} reset={reset} />;
  };

  const handleClearCustomErrorOnFocus = (key: keyof Inputs) => {
    if (errors[key]?.type === 'manual' || errors[key]?.type === 'form') {
      clearErrors(key);
    }
  };

  const {
    mutate: createProject,
    isPending,
    reset,
  } = useCreateProject({
    onSuccess,
    onError,
  });

  return (
    // eslint-disable-next-line
    <form onSubmit={handleSubmit(onSubmit)}>
      <ProjectFormRenderer
        isPending={isPending}
        isValid={isFormValid}
        errors={errors}
        projectAvatar={projectAvatar}
        setProjectAvatar={setProjectAvatar}
        register={register}
        clearCustomErrorOnFocus={handleClearCustomErrorOnFocus}
      />
    </form>
  );
};
