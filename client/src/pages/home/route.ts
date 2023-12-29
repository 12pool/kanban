import { Route } from '@tanstack/react-router';

import { rootRoute } from 'pages/root-route';

import { Home } from './home';

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});
