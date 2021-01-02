import { lazy } from 'react';

const LoginPage = lazy(() => import('../containers/LoginPage/index'));
const SignUpPage = lazy(() => import('../containers/SignUpPage/index'));
const HomePage = lazy(() => import('../containers/HomePage/index'));
const MainPage = lazy(() => import('../containers/MainPage/index'));

const routes = [
  {
    path: '/login',
    component: LoginPage,
    isPrivate: false,
  },
  {
    path: '/signup',
    component: SignUpPage,
    isPrivate: false,
  },
  {
    path: '/main',
    component: MainPage,
    isPrivate: true,
  },
  {
    path: '/',
    component: HomePage,
    isPrivate: false,
  },
];

export default routes;
