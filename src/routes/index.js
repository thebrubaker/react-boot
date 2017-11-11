import Login from 'pages/auth/login';
import Home from 'pages/home';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/auth/login',
    component: Login,
  },
];
