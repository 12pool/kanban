import { fireEvent, render, screen, waitFor } from "./test-utils";
import { UserDropdownMenu } from "widgets/user-menu-dropdown";

describe('User dropdown menu', () => {
  it('should allow to open menu on trigger click', async () => {
    render(<UserDropdownMenu />);

    const button = await screen.getByTestId('dropdown-menu-trigger');
    fireEvent.pointerDown(
      button,
      new PointerEvent('pointerdown', {
        ctrlKey: false,
        button: 0,
      })
    );

    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByTestId('dropdown-menu-content')).toBeInTheDocument();
    });
  });

  it('should allow to close menu on trigger click', async () => {
    // TODO: FINISH PLS
  });

  it('should contain expected menu items', async () => {
    // TODO: FINISH PLS
    // use menuItems from UserDropdownMenu.tsx to compare with
  });
});
