import { createFileRoute } from '@tanstack/react-router';

import { Projects } from 'pages/project/Projects';

export const Route = createFileRoute('/team/$teamName/project')({
  component: Projects,
});
