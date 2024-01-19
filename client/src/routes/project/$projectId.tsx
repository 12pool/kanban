import { FileRoute } from '@tanstack/react-router';
import { Project } from 'pages/project/Project';

export const Route = new FileRoute('/project/$projectId').createRoute({
  component: Project,
});
