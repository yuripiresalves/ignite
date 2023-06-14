import { globalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { CartProvider } from 'use-shopping-cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

globalStyles();

import { Container } from '@/styles/pages/app';
import { Cart } from '@/components/Cart';
import { Header } from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const full = true;
  return (
    <CartProvider
      shouldPersist={true}
      cartMode='checkout-session'
      stripe={process.env.STRIPE_PUBLIC_KEY}
      currency='BRL'
    >
      <ToastContainer />
      <Container>
        <Header setIsCartOpen={setIsCartOpen} />

        {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
