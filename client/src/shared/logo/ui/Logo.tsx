import { Link } from '@tanstack/react-router';

export const Logo = () => {
  return (
    <Link to="/">
      <img src="/logo.svg" alt="logo" />
    </Link>
  );
};
