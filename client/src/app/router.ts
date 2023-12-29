import { Router } from '@tanstack/react-router';

import { homeRoute } from 'pages/home/route';
import { rootRoute } from 'pages/root-route';

import { queryClient } from './query-client';

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = new Router({
  routeTree,
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  context: {
    queryClient,
  },
});

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
