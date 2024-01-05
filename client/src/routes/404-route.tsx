import { NotFoundRoute } from '@tanstack/react-router';
import { rootRoute } from 'routes/root-route';

import { PageNotFound } from 'pages/404/404';

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: PageNotFound,
});
