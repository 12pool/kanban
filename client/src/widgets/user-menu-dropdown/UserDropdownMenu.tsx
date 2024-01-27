import { useState } from 'react';
import { CardStackIcon, PlusIcon } from '@radix-ui/react-icons';
import { Link, useNavigate } from '@tanstack/react-router';

import { ProjectDialog } from 'entities/project-dialog/feature';

import { UserAvatar } from 'entities/user-avatar/feature';

import { DropdownMenu } from 'ui/dropdown-menu';
import { Flex } from 'ui/layout';
import { Text } from 'ui/text';

import { Route as teamRoute } from 'routes/team/$teamName';

import styles from './UserDropdownMenu.module.css';

export const UserDropdownMenu = () => {
  const navigate = useNavigate();

  const { insertProjectDialogOpen } = teamRoute.useSearch();
  const { teamName } = teamRoute.useParams();

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
      search: (prev) => ({
        insertProjectDialogOpen: true,
        ...prev,
      }),
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
      triggerRole="user-menu-trigger"
      trigger={
        <UserAvatar
          fallbackClassName={styles.UserAvatar}
          imageClassName={styles.UserAvatar}
        />
      }
      modal={false}
    >
      <DropdownMenu.Content
        data-testid="user-menu-content"
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
        <Link
          to="/team/$teamName/project"
          params={{
            teamName: teamName,
          }}
        >
          <DropdownMenu.Item
            data-testid="user-menu-project"
            icon={<CardStackIcon />}
          >
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
              data-testid="user-menu-add-project"
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
