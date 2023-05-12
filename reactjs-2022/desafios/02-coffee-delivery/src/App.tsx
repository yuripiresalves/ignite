import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { router } from './routes';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
