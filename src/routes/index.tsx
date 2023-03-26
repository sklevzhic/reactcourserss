import React from 'react';
import { RouteObject } from 'react-router-dom';
import MainPage from '../pages/main';
import Header from '../components/header';
import FormsPage from '../pages/form';

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
    path: '/form',
    element: <FormsPage />,
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
