import { http, HttpResponse } from 'msw';

const userImageHandler = http.get(
  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
  async () => {
    const buffer = await fetch('public/user-avatar-fallback.svg').then(
      (response) => response.arrayBuffer(),
    );
    return HttpResponse.arrayBuffer(buffer);
  },
);

export const handlers = [userImageHandler];
