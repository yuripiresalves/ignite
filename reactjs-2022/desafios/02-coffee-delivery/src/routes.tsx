import { createBrowserRouter } from 'react-router-dom';
import { Default } from './layouts/Default';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { Success } from './pages/Success';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/success',
        element: <Success />,
      },
    ],
  },
]);
