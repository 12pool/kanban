import { useState } from 'react';
import { CardStackIcon } from '@radix-ui/react-icons';
import { Link } from '@tanstack/react-router';

import { UserAvatar } from 'entities/user-avatar/feature';

import { DropdownMenu } from 'ui/dropdown-menu';
import { Flex } from 'ui/layout';
import { Text } from 'ui/text';
import { Route as teamRoute } from 'routes/team/$teamName';

import { AddProjectItem, EditProjectItem } from './components';

import styles from './UserDropdownMenu.module.css';

export const UserDropdownMenu = () => {
  const { insertProjectFormWithDialogOpen, updateProjectFormWithDialogOpen } =
    teamRoute.useSearch();

  const { teamName } = teamRoute.useParams();

  const [userMenuOpen, setUserMenuOpen] = useState(
    (insertProjectFormWithDialogOpen || updateProjectFormWithDialogOpen) ??
      false,
  );

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
        <AddProjectItem
          handleUserMenuClose={handleClose}
          insertProjectFormWithDialogOpen={insertProjectFormWithDialogOpen}
          className={styles.ProjectFormWithDialogTrigger}
        />
        <EditProjectItem
          handleUserMenuClose={handleClose}
          updateProjectFormWithDialogOpen={updateProjectFormWithDialogOpen}
          className={styles.ProjectFormWithDialogTrigger}
        />
      </DropdownMenu.Content>
    </DropdownMenu>
  );
};
