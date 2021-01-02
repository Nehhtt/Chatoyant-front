import { lazy } from 'react';

const WelcomePage = lazy(() => import('../containers/WelcomePage/index'));
const LoginPage = lazy(() => import('../containers/LoginPage/index'));
const SignUpPage = lazy(() => import('../containers/SignUpPage/index'));
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
    path: '/signup',
    component: SignUpPage,
    isPrivate: false,
  },
  {
    path: '/',
    component: HomePage,
    isPrivate: false,
  },
];

export default routes;
