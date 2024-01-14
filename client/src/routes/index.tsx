import { FileRoute } from '@tanstack/react-router';
import { Home } from 'pages/home/Home.tsx';

export const Route = new FileRoute('/').createRoute({
  component: Home,
});
