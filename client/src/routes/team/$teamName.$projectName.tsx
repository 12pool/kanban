import { createFileRoute } from '@tanstack/react-router';
import { Project } from 'pages/project/Project';

export const Route = createFileRoute('/team/$teamName/$projectName')({
  component: Project,
});