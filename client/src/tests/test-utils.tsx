import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
  createMemoryHistory,
} from '@tanstack/react-router';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function createTestRouter(component: () => JSX.Element) {
  const rootRoute = new RootRoute({
    component: Outlet,
  });

  const componentRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component,
  });

  const router = new Router({
    routeTree: rootRoute.addChildren([componentRoute]),
    history: createMemoryHistory(),
  });

  return router;
}

const _router = createTestRouter(() => <></>);

function renderWithClient(router: typeof _router) {
  const testQueryClient = createTestQueryClient();
  return render(
    <QueryClientProvider client={testQueryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
}

export * from '@testing-library/react';
export { vi } from 'vitest';
export { default as userEvent } from '@testing-library/user-event';
export { renderWithClient as render };
