// @ts-nocheck
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

afterEach(() => {
  cleanup();
});

export const server = setupServer(...handlers);

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
// Clean up after the tests are finished.
afterAll(() => server.close());

/**
 * https://github.com/radix-ui/primitives/issues/420#issuecomment-771615182
 * Radix-ui uses ResizeObserver which is not supported in JSDOM.
 * This is a workaround to make it work.
 */

window.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  unobserve() {}
  disconnect() {}
};

window.DOMRect = {
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
};

export class PointerEvent extends Event {
  button: number;
  ctrlKey: boolean;

  constructor(type, props) {
    super(type, props);
    if (props.button != null) {
      this.button = props.button;
    }
    if (props.ctrlKey != null) {
      this.ctrlKey = props.ctrlKey;
    }
  }
}
window.PointerEvent = PointerEvent;
