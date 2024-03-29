import { createFileRoute } from '@tanstack/react-router';
import { TeamLayout } from 'pages/team/TeamLayout';
import { z } from 'zod';

const schema = z.object({
  insertProjectFormWithDialogOpen: z.boolean().optional().catch(undefined),
  updateProjectFormWithDialogOpen: z.boolean().optional().catch(undefined),
});

type TeamLayout = z.infer<typeof schema>;

export const Route = createFileRoute('/team/$teamName')({
  component: TeamLayout,
  validateSearch: (search): TeamLayout => schema.parse(search),
});
