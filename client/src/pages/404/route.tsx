import { NotFoundRoute } from '@tanstack/react-router';
import { rootRoute } from 'pages/root-route';

import { PageNotFound } from './404';

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: PageNotFound,
});
