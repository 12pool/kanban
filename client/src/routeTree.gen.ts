import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes'
import { Route as UserIndexImport } from './routes/user'
import { Route as UserUserIdImport } from './routes/user/$userId'
import { Route as UserUserIdSettingsImport } from './routes/user/$userId.settings'

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UserIndexRoute = UserIndexImport.update({
  path: '/user/',
  getParentRoute: () => rootRoute,
} as any)

const UserUserIdRoute = UserUserIdImport.update({
  path: '/user/$userId',
  getParentRoute: () => rootRoute,
} as any)

const UserUserIdSettingsRoute = UserUserIdSettingsImport.update({
  path: '/settings',
  getParentRoute: () => UserUserIdRoute,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/user/$userId': {
      preLoaderRoute: typeof UserUserIdImport
      parentRoute: typeof rootRoute
    }
    '/user/': {
      preLoaderRoute: typeof UserIndexImport
      parentRoute: typeof rootRoute
    }
    '/user/$userId/settings': {
      preLoaderRoute: typeof UserUserIdSettingsImport
      parentRoute: typeof UserUserIdImport
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  UserUserIdRoute.addChildren([UserUserIdSettingsRoute]),
  UserIndexRoute,
])
