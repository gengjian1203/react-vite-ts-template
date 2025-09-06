import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import ROUTE_PATH from './constant';
const CosX = lazy(() => import(/* webpackChunkName: 'home' */ '../pages/CosX'));
const Home = lazy(() => import(/* webpackChunkName: 'home' */ '../pages/Home'));
const Dashboard = lazy(() => import(/* webpackChunkName: 'dashboard' */ '../pages/Dashboard'));

const router = createBrowserRouter([
  { index: true, Component: Home },
  {
    Component: CosX,
    path: ROUTE_PATH.cosx,
    children: [],
  },
  {
    Component: Dashboard,
    path: ROUTE_PATH.dashboard,
    children: [],
  },
]);

export default router;
