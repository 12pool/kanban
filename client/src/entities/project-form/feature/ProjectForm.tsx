import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Route as teamRoute } from 'routes/team/$teamName';

import { colors } from 'shared/avatar-picker/model';
import { ErrorMessage } from 'shared/error-message/feature';
import { toast } from 'shared/toaster';
import type { ProjectWithTeam, ProjectAvatar, Project } from 'shared/api';

import { useCreateProject } from 'entities/project-form/api';
import {
  ProjectFormRenderer,
  ProjectCreatedToast,
} from 'entities/project-form/ui';
import {
  type Inputs,
  isKeyOfInputs,
  inputKeys,
} from 'entities/project-form/model';

import { useCheckNameValidator } from './use-check-name-validator';

import {
  handleServerFormError,
  hasValidFormFields,
  isFormException,
} from 'shared/exceptions/server';

type ProjectFormProps = {
  initProject?: Project;
  handleSuccess?: () => void;
};

export const ProjectForm = ({ handleSuccess, initProject }: ProjectFormProps) => {
  const navigate = useNavigate();
  const { teamName } = teamRoute.useParams();

  const [projectAvatar, setProjectAvatar] = useState<ProjectAvatar>({
    icon: initProject?.icon ?? 'AvatarIcon',
    color: initProject?.color ?? colors.blue,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
    setError,
    clearErrors,
  } = useForm<Inputs>({
    defaultValues: {
      name: initProject?.name ?? '',
      description: initProject?.description ?? '',
    }
  });

  const isFormValid = Object.keys(errors).length === 0;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // TODO: change to upsert?
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

    handleSuccess?.();

    await navigate({
      to: `/team/$teamName/$projectName`,
      params: {
        teamName: data.team.name,
        projectName: data.name,
      },
      search: (prev) => ({ ...prev, insertProjectFormWithDialogOpen: false }),
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
