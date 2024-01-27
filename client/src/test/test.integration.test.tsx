import { render, screen } from './test-utils';

const Dummy = () => {
  return <div data-testid="test" className="light" />;
};

describe.skip('Dummy test', async () => {
  it('should work', async () => {
    render(<Dummy />);

    const appEntry = screen.getByTestId('test');

    expect(appEntry).not.toHaveClass('dark');
  });
});
