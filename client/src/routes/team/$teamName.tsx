import { FileRoute } from '@tanstack/react-router';
import { TeamLayout } from 'pages/team/TeamLayout';
import { z } from 'zod';

const schema = z.object({
  insertProjectDialogOpen: z.boolean().optional().catch(undefined),
});

type TeamLayout = z.infer<typeof schema>;

export const Route = new FileRoute('/team/$teamName').createRoute({
  component: TeamLayout,
  validateSearch: (search): TeamLayout => schema.parse(search),
});
