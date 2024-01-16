import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTestRouter } from './setup';
import { RouterProvider } from '@tanstack/react-router';

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

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
