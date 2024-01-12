import { FileRoute } from '@tanstack/react-router';

export const Route = new FileRoute('/user/$userId/settings').createRoute({
  component: UserSettings,
});

function UserSettings() {
  const { userId } = Route.useParams();
  return <div>UserSettings {userId}</div>;
}
