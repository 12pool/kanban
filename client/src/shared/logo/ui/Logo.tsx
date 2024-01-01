import { Link } from '@tanstack/react-router';

import { homePath } from 'shared/config/routes';

export type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={className} href={homePath}>
      <img src="/logo.svg" alt="logo" />
    </Link>
  );
};
