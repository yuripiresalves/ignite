import { X } from 'phosphor-react';
import {
  CartContainer,
  CartImageContainer,
  CartInfoContainer,
  CartItem,
  CartItems,
  CartSummary,
  EmptyCart,
} from './styles';
import Image from 'next/image';
import { useShoppingCart } from 'use-shopping-cart';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface CartProps {
  setIsCartOpen: (value: boolean) => void;
}

export function Cart({ setIsCartOpen }: CartProps) {
  const cart = useShoppingCart();
  const { removeItem, cartDetails, cartCount, clearCart } = cart;

  const cartItems = Object.values(cartDetails ?? {}).map((entry) => entry);

  const total = cartItems.reduce((acc, item) => {
    return (acc += item.value / 100);
  }, 0);

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  async function handleBuyProducts() {
    if (cartCount > 0) {
      try {
        setIsCreatingCheckoutSession(true);

        const response = await axios.post('/api/checkout', {
          products: cartItems,
        });

        const { checkoutUrl } = response.data;

        window.location.href = checkoutUrl;

        // clearCart();
      } catch (error) {
        // Conectar com uma ferramentad e observabilidade (Datadog / Sentry)

        setIsCreatingCheckoutSession(false);
        alert('Falha ao redirecionar ao checkout');
      }
    } else {
      alert('Adicione produtos ao carrinho para finalizar a compra');
    }
  }

  return (
    <CartContainer>
      <button className='close' onClick={() => setIsCartOpen(false)}>
        <X size={24} weight='bold' />
      </button>
      <h2>Sacola de compras</h2>

      <CartItems>
        {cartCount > 0 ? (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartImageContainer>
                <Image src={item.imageUrl} width={102} height={93} alt='' />
              </CartImageContainer>
              <CartInfoContainer>
                <h3>{item.name}</h3>
                <strong>
                  {item.formattedPrice} <span>x{item.quantity}</span>
                </strong>
                <button onClick={() => removeItem(item.id)}>Remover</button>
              </CartInfoContainer>
            </CartItem>
          ))
        ) : (
          <EmptyCart>
            <p>Sua sacola está vazia</p>
            <Link href='/' onClick={() => setIsCartOpen(false)}>
              Ver produtos
            </Link>
          </EmptyCart>
        )}
      </CartItems>

      {cartCount > 0 && (
        <CartSummary>
          <p>
            <span className='quantity'>Quantidade</span>
            <span className='quantity'>{cartCount} itens</span>
          </p>
          <p>
            <strong>Valor total</strong>
            <strong className='total'>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </strong>
          </p>

          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProducts}
          >
            Finalizar compra
          </button>
        </CartSummary>
      )}
    </CartContainer>
  );
}
