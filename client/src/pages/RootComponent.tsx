import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ToastContainer } from 'react-toastify';

export const RootComponent = () => {
  return (
    <>
      <Outlet />
      <ToastContainer theme="colored" position="bottom-right" />
      <ReactQueryDevtools buttonPosition="bottom-left" />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
};
