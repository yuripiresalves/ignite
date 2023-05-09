import { MapPin, ShoppingCartSimple } from 'phosphor-react';
import {
  CartButton,
  HeaderContainer,
  LocationContainer,
  RightContainer,
} from './styles';

import Logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffe Delivery" />

      <RightContainer>
        <LocationContainer>
          <MapPin weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <CartButton>
          <ShoppingCartSimple weight="fill" />
        </CartButton>
      </RightContainer>
    </HeaderContainer>
  );
};
