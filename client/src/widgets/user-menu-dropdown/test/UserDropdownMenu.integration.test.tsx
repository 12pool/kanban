import { fireEvent, render, screen, waitFor } from 'test/test-utils';
import { UserDropdownMenu } from 'widgets/user-menu-dropdown';

describe('User dropdown menu', () => {
  it('should allow to open menu on trigger click', async () => {
    render(<UserDropdownMenu />);

    await waitFor(async () => {
      const button = await screen.getByTestId('user-menu-trigger');

      await fireEvent.pointerDown(
        button,
        new PointerEvent('pointerdown', {
          ctrlKey: false,
          button: 0,
        }),
      );

      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByTestId('user-menu-content')).toBeInTheDocument();
    });
  });

  it('should allow to close menu on outside click', async () => {
    render(<UserDropdownMenu />);

    await waitFor(async () => {
      const button = await screen.getByTestId('user-menu-trigger');

      await fireEvent.pointerDown(
        button,
        new PointerEvent('pointerdown', {
          ctrlKey: false,
          button: 0,
        }),
      );

      await expect(button).toHaveAttribute('aria-expanded', 'true');
      await expect(screen.getByTestId('user-menu-content')).toBeInTheDocument();
    });

    await waitFor(async () => {
      const button = await screen.getByTestId('user-menu-trigger');
      await fireEvent.pointerDown(
        document.body,
        new PointerEvent('pointerdown', {
          ctrlKey: false,
          button: 0,
        }),
      );

      expect(button).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByTestId('user-menu-content')).not.toBeInTheDocument();
    });
  });

  const menuItemsIds = ['user-menu-project', 'user-menu-add-project'];

  it('should container expected menu items', async () => {
    render(<UserDropdownMenu />);

    await waitFor(async () => {
      const button = await screen.getByTestId('user-menu-trigger');

      await fireEvent.pointerDown(
        button,
        new PointerEvent('pointerdown', {
          ctrlKey: false,
          button: 0,
        }),
      );

      for (const id of menuItemsIds) {
        expect(screen.getByTestId(id)).toBeInTheDocument();
      }
    });
  });
});
