import { render, screen } from 'test/test-utils';

import { UserAvatar } from 'entities/user-avatar/feature';

describe('User Avatar', async () => {
  it('should render', async () => {
    render(<UserAvatar />);

    const appEntry = screen.getByTestId('user-avatar');

    expect(appEntry).toBeVisible();
  });
});
