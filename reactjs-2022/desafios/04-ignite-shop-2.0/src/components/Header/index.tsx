import Link from 'next/link';
import { CartButton, HeaderContainer } from './styles';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';

import logoImg from '@/assets/logo.svg';
import { useShoppingCart } from 'use-shopping-cart';

interface HeaderProps {
  setIsCartOpen: (value: boolean) => void;
}

export function Header({ setIsCartOpen }: HeaderProps) {
  const { cartCount } = useShoppingCart();

  return (
    <HeaderContainer>
      <Link href='/'>
        <Image src={logoImg} width={130} height={52} alt='' />
      </Link>

      <CartButton onClick={() => setIsCartOpen(true)}>
        <Handbag
          weight='bold'
          size={24}
          color={cartCount > 0 ? '#c4c4cc' : '#8d8d99'}
        />
        {cartCount > 0 && <span>{cartCount}</span>}
      </CartButton>
    </HeaderContainer>
  );
}
