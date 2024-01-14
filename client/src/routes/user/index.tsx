import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/user/').createRoute({
  component: Index,
});

function Index() {
  return <div>User</div>;
}
