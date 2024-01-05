import { useState } from 'react';
import { Dialog, type DialogProps } from 'ui/dialog';

type ProjectDialogProps = Pick<DialogProps, 'trigger' | 'triggerClassName'>;

export const ProjectDialog = ({
  trigger,
  triggerClassName,
}: ProjectDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={handleOpenChange}
      trigger={trigger}
      triggerClassName={triggerClassName}
    >
      <Dialog.Content title="Create project">
        this will be project form
      </Dialog.Content>
    </Dialog>
  );
};
