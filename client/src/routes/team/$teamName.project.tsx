import { FileRoute } from '@tanstack/react-router';

// import { Projects } from 'pages/project/Projects';

export const Route = new FileRoute('/team/$teamName/project').createRoute({
  component: Projects,
});

function Projects() {
  return <div>Projects</div>
}
