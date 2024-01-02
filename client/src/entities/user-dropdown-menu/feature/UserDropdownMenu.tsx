import { useState } from 'react';
import {
  ExitIcon,
  GearIcon,
  InfoCircledIcon,
  PersonIcon,
} from '@radix-ui/react-icons';

import { DropdownMenu } from 'ui/dropdown-menu';
import { Flex } from 'ui/layout';

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
        <DropdownMenu.Item icon={<PersonIcon />}>Profile</DropdownMenu.Item>
        <DropdownMenu.Item
          icon={<GearIcon />}
          rightSlot={
            <Flex>
              <div>⌘</div>
              <div>⇧</div>
            </Flex>
          }
        >
          Settings
        </DropdownMenu.Item>
        <DropdownMenu.Item icon={<ExitIcon />}>Logout</DropdownMenu.Item>
        <DropdownMenu.Item icon={<InfoCircledIcon />}>Help</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
