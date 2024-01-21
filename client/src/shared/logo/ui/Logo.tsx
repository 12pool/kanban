import { Link } from '@tanstack/react-router';

import { HOME_PATH } from 'shared/config/api';

export const Logo = () => {
  return (
    <Link to={HOME_PATH}>
      <img src="/logo.svg" alt="logo" />
    </Link>
  );
};
