import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Flex } from 'ui/layout';

import { Header } from 'widgets/header';
import { Sidebar } from 'widgets/sidebar';

export const RootComponent = () => {
  return (
    <>
      <Header />
      <Flex>
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </Flex>
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
};
