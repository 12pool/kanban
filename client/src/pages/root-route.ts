import type { QueryClient } from '@tanstack/react-query';
import { rootRouteWithContext } from '@tanstack/react-router';
import { RootComponent } from './RootComponent';

export const rootRoute = rootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});
