/* eslint-disable no-unused-vars */
// const appRoute = '/all';
import { lazy } from 'react';

const WelcomePage = lazy(() => import('../containers/WelcomePage/index'));
const LoginPage = lazy(() => import('../containers/LoginPage/index'));
const NotFoundPage = lazy(() => import('../containers/NotFoundPage/index'));
const HomePage = lazy(() => import('../containers/HomePage/index'));

const routes = [
  {
    path: '/login',
    component: LoginPage,
    isPrivate: false,
  },
  {
    path: '/welcome',
    component: WelcomePage,
    isPrivate: true,
  },
  {
    path: '/',
    component: HomePage,
    isPrivate: false,
  },
];

export default routes;
