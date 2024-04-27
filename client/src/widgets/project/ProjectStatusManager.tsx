import { useState } from 'react';
import { StatusManager } from 'entities/status/feature';
import { Button } from 'ui/button';
import { Dialog } from 'ui/dialog';

export const ProjectStatusManager = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      defaultOpen={false}
      open={open}
      onOpenChange={handleOpen}
      trigger={<Button>Manage statuses</Button>}
    >
      <Dialog.Content title="Project status manager" closeDialog={handleClose}>
        <StatusManager context="project" /> 
      </Dialog.Content>
    </Dialog>
  );
};
