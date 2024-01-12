import { NotFoundRoute } from '@tanstack/react-router';
import { Route as RootRoute } from 'routes/__root.ts';

import { PageNotFound } from 'pages/PageNotFound/PageNotFound.tsx';

export const Route = new NotFoundRoute({
  getParentRoute: () => RootRoute,
  component: PageNotFound,
});
