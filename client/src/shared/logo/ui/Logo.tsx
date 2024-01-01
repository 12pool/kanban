import { Link } from '@tanstack/react-router';

import { HOME_PATH } from 'shared/config/api';

export type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={className} href={HOME_PATH}>
      <img src="/logo.svg" alt="logo" />
    </Link>
  );
};
