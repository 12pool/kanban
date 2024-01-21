import { FileRoute } from '@tanstack/react-router';

import { Projects } from 'pages/project/Projects';

export const Route = new FileRoute('/project/').createRoute({
  component: Projects,
});
