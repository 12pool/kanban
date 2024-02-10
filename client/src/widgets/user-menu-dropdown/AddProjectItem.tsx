import { useState } from 'react';
import { PlusIcon } from '@radix-ui/react-icons';

import { ProjectFormWithDialog } from 'entities/project-form/feature';
import { useNavigate } from '@tanstack/react-router';
import { DropdownMenu } from 'ui/dropdown-menu';


type AddProjectItemProps = {
  handleUserMenuClose: () => void;
  insertProjectFormWithDialogOpen?: boolean;
  className?: string;
};

export const AddProjectItem = ({
  className,
  handleUserMenuClose,
  insertProjectFormWithDialogOpen = false,
}: AddProjectItemProps) => {
  const navigate = useNavigate();

  const [projectCreationDialogOpen, setProjectCreationDialogOpen] = useState(
    insertProjectFormWithDialogOpen,
  );

  const closeProjectCreationDialog = () => {
    handleUserMenuClose();
    setProjectCreationDialogOpen(false);

    void navigate({
      search: (prev) => ({
        ...prev,
        insertProjectFormWithDialogOpen: false,
      }),
      params: (params) => params,
    });
  };

  const openProjectCreationDialog = () => {
    setProjectCreationDialogOpen(true);
    void navigate({
      search: (prev) => ({ ...prev, insertProjectFormWithDialogOpen: true }),
      params: (params) => params,
    });
  };

  return (
    <ProjectFormWithDialog
      key="add-project-form"
      defaultOpen={insertProjectFormWithDialogOpen}
      open={projectCreationDialogOpen}
      closeDialog={closeProjectCreationDialog}
      triggerClassName={className}
      trigger={
        <DropdownMenu.Item
          data-testid="user-menu-add-project"
          icon={<PlusIcon />}
          onPointerDown={openProjectCreationDialog}
        >
          Add project
        </DropdownMenu.Item>
      }
    />
  );
};
