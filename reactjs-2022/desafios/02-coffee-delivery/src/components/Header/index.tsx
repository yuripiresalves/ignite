import { MapPin, ShoppingCartSimple } from 'phosphor-react';
import {
  CartButton,
  HeaderContainer,
  LocationContainer,
  RightContainer,
} from './styles';

import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} alt="Coffe Delivery" />
      </NavLink>

      <RightContainer>
        <LocationContainer>
          <MapPin weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <CartButton>
          <NavLink to="/checkout">
            <ShoppingCartSimple weight="fill" />
          </NavLink>
        </CartButton>
      </RightContainer>
    </HeaderContainer>
  );
};
