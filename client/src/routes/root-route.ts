import { z } from 'zod';

import type { QueryClient } from '@tanstack/react-query';
import { rootRouteWithContext } from '@tanstack/react-router';

import { RootComponent } from 'pages/RootComponent';

const layoutSearchSchema = z.object({
  insertProjectDialogOpen: z.boolean().optional().catch(undefined),
});

type LayoutSearch = z.infer<typeof layoutSearchSchema>;

export const rootRoute = rootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
  validateSearch: (search): LayoutSearch => layoutSearchSchema.parse(search),
});
