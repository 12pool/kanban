import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/user/$userId').createRoute({
  component: UserId,
});

function UserId() {
  const { userId } = Route.useParams();
  return <div>UserId {userId}</div>;
}
