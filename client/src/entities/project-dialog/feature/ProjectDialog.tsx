import { Dialog, type DialogProps } from 'ui/dialog';
import { ProjectForm } from './ProjectForm';

type ProjectDialogProps = Pick<
  DialogProps,
  'trigger' | 'triggerClassName' | 'defaultOpen' | 'open' | 'onOpenChange'
>;

// TODO implement route masking fr project dialog open
// https://tanstack.com/router/v1/docs/guide/route-masking

export const ProjectDialog = ({
  trigger,
  triggerClassName,
  defaultOpen,
  open,
  onOpenChange,
}: ProjectDialogProps) => {
  return (
    <Dialog
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      trigger={trigger}
      triggerClassName={triggerClassName}
    >
      <Dialog.Content title="Create project">
        <ProjectForm />
      </Dialog.Content>
    </Dialog>
  );
};
