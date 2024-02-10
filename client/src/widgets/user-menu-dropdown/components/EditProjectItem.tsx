import { useState } from 'react';
import { Pencil2Icon } from '@radix-ui/react-icons';

import { ProjectFormWithDialog } from 'entities/project-form/feature';
import { useNavigate } from '@tanstack/react-router';
import { DropdownMenu } from 'ui/dropdown-menu';

import { Route as projectRoute } from 'routes/team/$teamName.$projectName';
import { createProjectIdentifier } from 'shared/project/model/project';
import { useFetchProject } from 'shared/project/api/useFetchProject';
import { Loader } from 'ui/loader';

type AddProjectItemProps = {
  handleUserMenuClose: () => void;
  updateProjectFormWithDialogOpen?: boolean;
  className?: string;
};

export const EditProjectItem = ({
  className,
  handleUserMenuClose,
  updateProjectFormWithDialogOpen = false,
}: AddProjectItemProps) => {
  const navigate = useNavigate();

  const { teamName, projectName } = projectRoute.useParams();

  const [projectCreationDialogOpen, setProjectCreationDialogOpen] = useState(
    updateProjectFormWithDialogOpen,
  );

  const projectIdentifier = createProjectIdentifier({
    projectName,
    teamName,
  });

  const { data: currentProject, status } = useFetchProject(projectIdentifier);

  if (status === 'error' || !projectIdentifier) {
    return null;
  }

  const closeProjectCreationDialog = () => {
    handleUserMenuClose();
    setProjectCreationDialogOpen(false);

    void navigate({
      search: (prev) => ({
        ...prev,
        updateProjectFormWithDialogOpen: false,
      }),
      params: (params) => params,
    });
  };

  const openProjectCreationDialog = () => {
    setProjectCreationDialogOpen(true);
    void navigate({
      search: (prev) => ({ ...prev, updateProjectFormWithDialogOpen: true }),
      params: (params) => params,
    });
  };

  if (status === 'pending') {
    return (
      <DropdownMenu.Item
        disabled={true}
        data-testid="user-menu-edit-project"
        icon={<Loader size="xs" />}
      >
        Edit project
      </DropdownMenu.Item>
    );
  }

  return (
    <ProjectFormWithDialog
      key="edit-project-form"
      defaultOpen={updateProjectFormWithDialogOpen}
      open={projectCreationDialogOpen}
      closeDialog={closeProjectCreationDialog}
      triggerClassName={className}
      trigger={
        <DropdownMenu.Item
          data-testid="user-menu-edit-project"
          icon={<Pencil2Icon />}
          onPointerDown={openProjectCreationDialog}
        >
          Edit project
        </DropdownMenu.Item>
      }
      project={currentProject}
    />
  );
};
