import { Dialog, type DialogProps } from 'ui/dialog';

import { ProjectForm } from './ProjectForm.tsx';
import { type Project } from 'shared/api/project.ts';

type ProjectFormWithDialogProps = Pick<
  DialogProps,
  'trigger' | 'triggerClassName' | 'defaultOpen' | 'open' | 'onOpenChange'
> & {
  closeDialog: () => void;
  initProject?: Project;
}

export const ProjectFormWithDialog = ({
  trigger,
  triggerClassName,
  defaultOpen,
  onOpenChange,
  open,
  closeDialog,
  initProject,
}: ProjectFormWithDialogProps) => {
  return (
    <Dialog
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      trigger={trigger}
      triggerClassName={triggerClassName}
    >
      <Dialog.Content title={`${initProject ? "Edit" : "Create"} project`} closeDialog={closeDialog}>
        <ProjectForm initProject={initProject} handleSuccess={closeDialog} />
      </Dialog.Content>
    </Dialog>
  );
};
