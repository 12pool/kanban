import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      widgets: '/src/widgets',
      entities: '/src/entities',
      shared: '/src/shared',
      ui: '/src/ui',
      tests: '/src/tests',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    css: true,
    include: ['./src/**/*.test.tsx'],
  },
});
