import { afterAll, afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

export const server = setupServer(...handlers);

//Establish API mocking before all tests.
beforeAll(() => server.listen());
//Reset any request handlers that we may add during the tests,
//so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
//Clean up after the tests are finished.
afterAll(() => server.close());
