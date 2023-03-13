import { RouteObject } from 'react-router-dom';
import MainPage from '../pages/main';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/about',
    element: <div>about</div>,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
];
