import { createBrowserRouter } from 'react-router-dom';
import { Default } from './layouts/Default';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

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
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
]);
