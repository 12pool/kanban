import { Route } from '@tanstack/react-router';

import { Home } from 'pages/home/Home';

import { rootRoute } from './root-route';

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});
