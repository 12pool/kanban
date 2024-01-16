import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import { router } from 'app/router';
import { queryClient } from 'app/query-client';

import './reset.css';
import './index.css';

// eslint-disable-next-line
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);

export function App() {
  return <RouterProvider router={router} />;
}
