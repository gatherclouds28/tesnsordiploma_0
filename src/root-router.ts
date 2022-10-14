import { renderRoutes, RouteConfig } from 'react-router-config'

import { paths } from 'constant'
import { Charts, Home, Live, Music } from 'app/pages'

const routes: RouteConfig[] = [
  {
    path: paths.home,
    component: Home,
    exact: true
  },
  {
    path: paths.music,
    component: Music,
    exact: true
  },
  {
    path: paths.live,
    component: Live,
    exact: true
  },
  {
    path: paths.charts,
    component: Charts,
    exact: true
  },
]

export const rootRoutes = () => renderRoutes(routes)
