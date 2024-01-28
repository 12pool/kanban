import { createFileRoute } from '@tanstack/react-router';

import { projectsQueryOptions } from 'entities/projects-list/api/';

import { Projects } from 'pages/project/Projects';

export const Route = createFileRoute('/team/$teamName/project')({
  loader: (opts) => {
    return opts.context.queryClient.ensureQueryData(
      projectsQueryOptions(opts.params.teamName),
    );
  },
  component: Projects,
});
