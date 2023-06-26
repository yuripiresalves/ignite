import Image from 'next/image';
import { GetStaticProps } from 'next';

import { useKeenSlider } from 'keen-slider/react';

import { stripe } from '@/lib/stripe';
import { HomeContainer, Product } from '@/styles/pages/home';

import 'keen-slider/keen-slider.min.css';
import Stripe from 'stripe';
import Link from 'next/link';
import Head from 'next/head';
import { Handbag } from 'phosphor-react';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.2,
      spacing: 18,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 1.8,

          spacing: 28,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 2.8,
          spacing: 48,
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className='keen-slider'>
        {products.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product className='keen-slider__slide'>
              <Image src={product.imageUrl} width={520} height={480} alt='' />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <button type='button'>
                  <Handbag size={32} weight='bold' />
                </button>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};