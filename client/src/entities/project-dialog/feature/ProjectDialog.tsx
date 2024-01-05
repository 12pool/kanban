import { Dialog, type DialogProps } from 'ui/dialog';

type ProjectDialogProps = Pick<DialogProps, 'trigger' | 'triggerClassName'>;

export const ProjectDialog = ({
  trigger,
  triggerClassName,
}: ProjectDialogProps) => {
  return (
    <Dialog trigger={trigger} triggerClassName={triggerClassName}>
      <Dialog.Content title="Create project">
        this will be project form
      </Dialog.Content>
    </Dialog>
  );
};
