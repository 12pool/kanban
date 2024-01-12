import { Router } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen.ts';
import { Route as NotFound } from '../routes/_not-found.tsx';
import { queryClient } from './query-client.ts';

export const router = new Router({
  routeTree,
  notFoundRoute: NotFound,
  defaultPreload: 'intent',
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
