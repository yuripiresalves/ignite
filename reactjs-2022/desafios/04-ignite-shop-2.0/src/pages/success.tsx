import { stripe } from '@/lib/stripe';
import {
  ImageContainer,
  ImagesContainer,
  SuccessContainer,
} from '@/styles/pages/success';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

interface SuccessProps {
  customerName: string;
  quantity: number;
  products: {
    imageUrl: string;
  }[];
}

export default function Success({
  customerName,
  products,
  quantity,
}: SuccessProps) {
  const cart = useShoppingCart();
  const { clearCart } = cart;

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name='robots' content='noindex' />
      </Head>
      <SuccessContainer>
        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.imageUrl}>
              <Image src={product.imageUrl} width={120} height={110} alt='' />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul, <strong>{customerName}</strong>, sua compra de {quantity}{' '}
          {quantity > 1 ? 'camisetas' : 'camiseta'} já está a caminho de sua
          casa.
        </p>

        <Link href='/'>Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details.name;
  const products = session.line_items.data;
  const quantity = products.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  return {
    props: {
      customerName,
      quantity,
      products: products.map((product) => ({
        imageUrl: product.price.product.images[0],
      })),
    },
  };
};
