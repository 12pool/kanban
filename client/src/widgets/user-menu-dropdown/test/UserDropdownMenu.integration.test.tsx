import { fireEvent, render, screen, waitFor } from 'test/test-utils';
import { UserDropdownMenu } from 'widgets/user-menu-dropdown';

describe('User dropdown menu', () => {
  it('should allow to open menu on trigger click', async () => {
    render(<UserDropdownMenu />);

    await waitFor(async () => {
      const button = await screen.getByTestId('dropdown-menu-trigger');

      await fireEvent.pointerDown(
        button,
        new PointerEvent('pointerdown', {
          ctrlKey: false,
          button: 0,
        }),
      );

      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByTestId('dropdown-menu-content')).toBeInTheDocument();
    });
  });
});
