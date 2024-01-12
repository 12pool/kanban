import { expect, it, describe } from 'vitest';
import { UserDropdownMenu } from 'widgets/user-menu-dropdown';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

describe('User dropdown menu toggling test', async () => {
  it('User dropdown menu toggling test', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UserDropdownMenu />
      </QueryClientProvider>,
    );

    expect(screen.getByRole('heading')).toHaveTextContent('hello there');
  });
});
