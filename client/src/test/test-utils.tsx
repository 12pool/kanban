import React from 'react';
import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Outlet,
  RouterProvider,
  createHashHistory,
  createMemoryHistory,
  createRoute,
  createRouter,
  rootRouteWithContext,
} from '@tanstack/react-router';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    /* @ts-ignore */
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

function createTestRouter(ui: React.ReactElement, queryClient: QueryClient) {
  const rootRoute = rootRouteWithContext<{
    queryClient: QueryClient;
  }>()({
    component: Outlet,
  });

  const uiRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => ui,
  });

  const routeTree = rootRoute.addChildren([uiRoute]);

  return createRouter({
    history: createHashHistory(),
    routeTree: routeTree,
    context: {
      queryClient,
    },
  });
}

function renderWithClient(ui: React.ReactElement) {
  const queryClient = createTestQueryClient();
  const router = createTestRouter(ui, queryClient);

  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
}

export * from '@testing-library/react';
export { vi } from 'vitest';
export { default as userEvent } from '@testing-library/user-event';
export { renderWithClient as render };
