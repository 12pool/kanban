import { useState } from 'react';
import { CardStackIcon, PlusIcon } from '@radix-ui/react-icons';
import { Link, useNavigate } from '@tanstack/react-router';

import { Route as rootRoute } from 'routes/__root.ts';

import { ProjectDialog } from 'entities/project-dialog/feature';

import { UserAvatar } from 'entities/user-avatar/feature';

import { DropdownMenu } from 'ui/dropdown-menu';
import { Flex } from 'ui/layout';
import { Text } from 'ui/text';

import styles from './UserDropdownMenu.module.css';

export const UserDropdownMenu = () => {
  const navigate = useNavigate();

  const { insertProjectDialogOpen } = rootRoute.useSearch();

  const [projectCreationDialogOpen, setProjectCreationDialogOpen] = useState(
    insertProjectDialogOpen ?? false,
  );

  const [userMenuOpen, setUserMenuOpen] = useState(
    insertProjectDialogOpen ?? false,
  );

  const handleToggle = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const handleClose = () => {
    setUserMenuOpen(false);
  };

  const closeProjectCreationDialog = () => {
    handleClose();
    setProjectCreationDialogOpen(false);
    void navigate({
      search: (prev) => ({ ...prev, insertProjectDialogOpen: true }),
      params: (params) => params,
    });
  };

  const openProjectCreationDialog = () => {
    setProjectCreationDialogOpen(true);
    void navigate({
      search: (prev) => ({ ...prev, insertProjectDialogOpen: true }),
      params: (params) => params,
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
        <Link to="/project">
          <DropdownMenu.Item icon={<CardStackIcon />}>
            Projects
          </DropdownMenu.Item>
        </Link>
        <ProjectDialog
          defaultOpen={insertProjectDialogOpen}
          open={projectCreationDialogOpen}
          closeDialog={closeProjectCreationDialog}
          triggerClassName={styles.ProjectDialogTrigger}
          trigger={
            <DropdownMenu.Item
              icon={<PlusIcon />}
              onPointerDown={openProjectCreationDialog}
            >
              Add project
            </DropdownMenu.Item>
          }
        />
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
