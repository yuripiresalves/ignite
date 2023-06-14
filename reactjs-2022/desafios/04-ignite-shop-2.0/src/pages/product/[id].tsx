import { stripe } from '@/lib/stripe';
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { toast } from 'react-toastify';
import Stripe from 'stripe';
import { useShoppingCart } from 'use-shopping-cart';
import { Product } from 'use-shopping-cart/core';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const cart = useShoppingCart();
  const { addItem } = cart;

  async function handleAddToCart() {
    try {
      addItem(product as any);
      toast('Produto adicionado na sacola', {
        type: 'success',
        position: 'top-center',
        theme: 'dark',
      });
    } catch (error) {
      // Conectar com uma ferramentad e observabilidade (Datadog / Sentry)

      alert('Falha ao adicionar produto na sacola');
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt='' />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>
            {new Intl.NumberFormat('pr-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price / 100)}
          </span>

          <p>{product.description}</p>

          <button onClick={handleAddToCart}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_O4J8LTIWRlUDqQ' } }],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      // product,
      product: {
        // ...product,
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        // price: new Intl.NumberFormat('pt-BR', {
        //   style: 'currency',
        //   currency: 'BRL',
        // }).format((price.unit_amount as number) / 100),
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
