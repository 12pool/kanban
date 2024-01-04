import { useState } from 'react';
import {
  CardStackIcon,
  PlusIcon,
} from '@radix-ui/react-icons';

import { DropdownMenu } from 'ui/dropdown-menu';

type UserDropdownMenuProps = {
  trigger: React.ReactNode;
};

export const UserDropdownMenu = ({ trigger }: UserDropdownMenuProps) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleToggle = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setUserMenuOpen(false);
  };

  return (
    <DropdownMenu
      defaultOpen
      open={userMenuOpen}
      handleDropdownToggle={handleToggle}
      trigger={trigger}
      modal={false}
    >
      <DropdownMenu.Content
        sideOffset={8}
        align="end"
        onEscapeKeyDown={handleClose}
        onInteractOutside={handleClose}
      >
        <DropdownMenu.Arrow />
        <DropdownMenu.Item icon={<CardStackIcon />}>
          Manage projects
        </DropdownMenu.Item>
        <DropdownMenu.Item icon={<PlusIcon />}>
          Create project
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
