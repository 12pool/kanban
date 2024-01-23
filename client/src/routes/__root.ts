import type { QueryClient } from '@tanstack/react-query';
import { rootRouteWithContext } from '@tanstack/react-router';

import { RootComponent } from 'pages/RootComponent';

export const Route = rootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
});
