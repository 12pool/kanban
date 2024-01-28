import { Outlet, useRouterState } from '@tanstack/react-router';

import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';
import { UserDropdownMenu } from 'widgets/user-menu-dropdown';

import { Flex } from 'ui/layout';

export const TeamLayout = () => {
  const isRouterStateLoading = useRouterState({
    select: (s) => s.status === 'pending',
  });

  return (
    <>
      <Header
        isRouterStateLoading={isRouterStateLoading}
        userDropdown={<UserDropdownMenu />}
      />
      <Flex>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </Flex>
    </>
  );
};
