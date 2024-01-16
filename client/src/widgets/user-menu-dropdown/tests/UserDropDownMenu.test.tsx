import { createTestRouter } from 'tests/setup';
import { fireEvent, render, screen, waitFor } from 'tests/test-utils';
import { UserDropdownMenu } from 'widgets/user-menu-dropdown';

const router = createTestRouter(UserDropdownMenu);

describe('User dropdown menu', () => {
  it('should allow to open menu on trigger click', async () => {
    render(router);

    const button = await waitFor(() =>
      screen.getByTestId('dropdown-menu-trigger'),
    );
    fireEvent.pointerDown(
      button,
      new PointerEvent('pointerdown', {
        ctrlKey: false,
        button: 0,
      }),
    );

    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByTestId('dropdown-menu-content')).toBeInTheDocument();
    });
  });

  it('should allow to close menu on trigger click', async () => {
    render(router);

    const button = await waitFor(() =>
      screen.getByTestId('dropdown-menu-trigger'),
    );
    fireEvent.pointerDown(
      button,
      new PointerEvent('pointerdown', {
        ctrlKey: false,
        button: 0,
      }),
    );
    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByTestId('dropdown-menu-content')).toBeInTheDocument();
    });
    fireEvent.pointerDown(
      button,
      new PointerEvent('pointerdown', {
        ctrlKey: false,
        button: 0,
      }),
    );
    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('should contain expected menu items', async () => {
    render(router);

    const button = await waitFor(() =>
      screen.getByTestId('dropdown-menu-trigger'),
    );
    fireEvent.pointerDown(
      button,
      new PointerEvent('pointerdown', {
        ctrlKey: false,
        button: 0,
      }),
    );

    await waitFor(() => {
      expect(screen.getByTestId('manage-projects')).toBeInTheDocument();
      expect(screen.getByTestId('add-project')).toBeInTheDocument();
    });
  });
});