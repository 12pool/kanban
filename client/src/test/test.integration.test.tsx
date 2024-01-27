import { render, screen } from './test-uitls';

const Dummy = () => {
  return <div data-testid="test" className="light" />;
};

describe('Dummy test', async () => {
  it('should work', async () => {
    render(<Dummy />);

    const appEntry = screen.getByTestId('test');

    expect(appEntry).not.toHaveClass('dark');
  });
});
