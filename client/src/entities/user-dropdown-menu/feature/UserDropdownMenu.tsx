import { useState } from 'react';
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
    >
      <DropdownMenu.Content onInteractOutside={handleClose}>
        <DropdownMenu.Item>Profile</DropdownMenu.Item>
        <DropdownMenu.Item>Settings</DropdownMenu.Item>
        <DropdownMenu.Item>Logout</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
