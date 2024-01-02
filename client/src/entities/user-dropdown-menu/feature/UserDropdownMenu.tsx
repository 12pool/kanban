import { SunIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
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
    >
      <DropdownMenu.Content
        sideOffset={8}
        align="end"
        onEscapeKeyDown={handleClose}
        onInteractOutside={handleClose}
      >
        <DropdownMenu.Item disabled>Profile</DropdownMenu.Item>
        <DropdownMenu.Item
          rightSlot={
            <Flex>
              <div>⌘</div>
              <div>⇧</div>
            </Flex>
          }
        >
          Settings
        </DropdownMenu.Item>
        <DropdownMenu.Item icon={<SunIcon />}>Logout</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Help</DropdownMenu.Item>
        <DropdownMenu.Label>Label</DropdownMenu.Label>
        <DropdownMenu.Arrow />
        <DropdownMenu.Group>
          <DropdownMenu.Item>Report an issue</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>Sub menu →</DropdownMenu.SubTrigger>
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
              <DropdownMenu.Item>Sub menu item</DropdownMenu.Item>
              <DropdownMenu.Arrow />
            </DropdownMenu.SubContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>
        <DropdownMenu.CheckboxItem checked={true}>
          Checkbox item
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.CheckboxItem checked={false}>
          Checkbox item 2
        </DropdownMenu.CheckboxItem>
        <DropdownMenu.RadioGroup value="one">
          <DropdownMenu.RadioItem value="one">
            Radio item one
          </DropdownMenu.RadioItem>
          <DropdownMenu.RadioItem value="two">
            Radio item two
          </DropdownMenu.RadioItem>
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
