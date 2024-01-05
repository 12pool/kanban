import { useState } from 'react';
import { CardStackIcon, PlusIcon } from '@radix-ui/react-icons';
import { useNavigate } from '@tanstack/react-router';

import { rootRoute } from 'routes/root-route';
import { ProjectDialog } from 'entities/project-dialog/feature/ProjectDialog';
import { UserAvatar } from 'entities/user-avatar/feature';

import { DropdownMenu } from 'ui/dropdown-menu';
import { Flex } from 'ui/layout';
import { Text } from 'ui/text';

import styles from './UserDropdownMenu.module.css';

export const UserDropdownMenu = () => {
  const navigate = useNavigate();

  const { addProjectDialogOpen } = rootRoute.useSearch();

  const [userMenuOpen, setUserMenuOpen] = useState(addProjectDialogOpen);

  const handleToggle = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setUserMenuOpen(false);
  };

  const handleProjectDialogOpen = (open: boolean) => {
    void navigate({
      search: (prev) => ({ ...prev, addProjectDialogOpen: open }),
    });
  };

  return (
    <DropdownMenu
      defaultOpen
      open={userMenuOpen}
      handleDropdownToggle={handleToggle}
      trigger={
        <UserAvatar
          fallbackClassName={styles.UserAvatar}
          imageClassName={styles.UserAvatar}
        />
      }
      modal={false}
    >
      <DropdownMenu.Content
        sideOffset={8}
        align="end"
        onEscapeKeyDown={handleClose}
        onInteractOutside={handleClose}
      >
        <DropdownMenu.Arrow />
        <Flex gap="sm" align="center">
          <UserAvatar
            fallbackClassName={styles.UserAvatar}
            imageClassName={styles.UserAvatar}
          />
          <Text size="sm">placeholder@gmail.com</Text>
        </Flex>
        <DropdownMenu.Separator />
        <DropdownMenu.Item icon={<CardStackIcon />}>
          Manage projects
        </DropdownMenu.Item>
        <ProjectDialog
          defaultOpen={addProjectDialogOpen}
          onOpenChange={handleProjectDialogOpen}
          triggerClassName={styles.ProjectDialogTrigger}
          trigger={
            <DropdownMenu.Item icon={<PlusIcon />}>
              Add project
            </DropdownMenu.Item>
          }
        />
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
