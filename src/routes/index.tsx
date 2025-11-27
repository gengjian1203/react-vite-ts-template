import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import ROUTE_PATH from './constant';
const CosX = lazy(() => import(/* webpackChunkName: 'home' */ '../pages/CosX'));
const Home = lazy(() => import(/* webpackChunkName: 'home' */ '../pages/Home'));
const Dashboard = lazy(() => import(/* webpackChunkName: 'dashboard' */ '../pages/Dashboard'));
const Test = lazy(() => import(/* webpackChunkName: 'test' */ '../pages/Test'));
const WxLogin = lazy(() => import(/* webpackChunkName: 'wxLogin' */ '../pages/WxLogin'));

const router = createBrowserRouter([
  {
    Component: Home,
    path: ROUTE_PATH.home,
  },
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
  {
    Component: Test,
    path: ROUTE_PATH.test,
    children: [],
  },
  {
    Component: WxLogin,
    path: ROUTE_PATH.wxLogin,
    children: [],
  },
]);

export default router;
