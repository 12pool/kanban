import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Flex } from 'ui/layout';

import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';
import { UserDropdownMenu } from 'widgets/user-menu-dropdown';
import { ToastContainer } from 'react-toastify';

export const RootComponent = () => {
  return (
    <>
      <Header userDropdown={<UserDropdownMenu />} />
      <Flex>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </Flex>
      <ToastContainer theme="colored" position="bottom-right" />
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
};
