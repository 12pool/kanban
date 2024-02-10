import { Dialog, type DialogProps } from 'ui/dialog';

import { ProjectForm } from './ProjectForm.tsx';
import type { Project } from 'shared/project/model';

type ProjectFormWithDialogProps = Pick<
  DialogProps,
  'trigger' | 'triggerClassName' | 'defaultOpen' | 'open' | 'onOpenChange'
> & {
  closeDialog: () => void;
  project?: Project;
};

export const ProjectFormWithDialog = ({
  trigger,
  triggerClassName,
  defaultOpen,
  onOpenChange,
  open,
  closeDialog,
  project,
}: ProjectFormWithDialogProps) => {
  return (
    <Dialog
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      trigger={trigger}
      triggerClassName={triggerClassName}
    >
      <Dialog.Content
        title={`${project ? 'Edit' : 'Create'} project`}
        closeDialog={closeDialog}
      >
        <ProjectForm initProject={project} handleSuccess={closeDialog} />
      </Dialog.Content>
    </Dialog>
  );
};
