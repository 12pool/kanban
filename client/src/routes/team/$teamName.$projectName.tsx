import { FileRoute } from '@tanstack/react-router';
// import { Project } from 'pages/project/Project';

export const Route = new FileRoute('/team/$teamName/$projectName').createRoute({
  component: Project,
});


function Project() {
  return <div>Project</div>
}