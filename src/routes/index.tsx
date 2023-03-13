import { RouteObject } from 'react-router-dom';
import MainPage from '../pages/main';
import Header from '../components/header';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/about',
    element: (
      <div>
        <Header />
        about
      </div>
    ),
  },
  {
    path: '*',
    element: (
      <div>
        <Header />
        404
      </div>
    ),
  },
];
