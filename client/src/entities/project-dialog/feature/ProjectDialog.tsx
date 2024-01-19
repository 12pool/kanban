import { Dialog, type DialogProps } from 'ui/dialog';

import { ProjectForm } from './ProjectForm.tsx';

type ProjectDialogProps = Pick<
  DialogProps,
  'trigger' | 'triggerClassName' | 'defaultOpen' | 'open' | 'onOpenChange'
> & {
  closeDialog: () => void;
};

export const ProjectDialog = ({
  trigger,
  triggerClassName,
  defaultOpen,
  onOpenChange,
  open,
  closeDialog,
}: ProjectDialogProps) => {
  return (
    <Dialog
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      trigger={trigger}
      triggerClassName={triggerClassName}
    >
      <Dialog.Content title="Create project" closeDialog={closeDialog}>
        <ProjectForm closeDialog={closeDialog} />
      </Dialog.Content>
    </Dialog>
  );
};
