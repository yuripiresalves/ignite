import { MapPin, ShoppingCartSimple } from 'phosphor-react';
import {
  CartButton,
  HeaderContainer,
  LocationContainer,
  RightContainer,
} from './styles';

import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const Header = () => {
  const { items } = useContext(CartContext);
  const cartItems = items.reduce((acc, item) => acc + item.quantity, 0);

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
        <NavLink to="/checkout">
          <CartButton>
            {cartItems > 0 && <span className="cart-items">{cartItems}</span>}
            <ShoppingCartSimple weight="fill" />
          </CartButton>
        </NavLink>
      </RightContainer>
    </HeaderContainer>
  );
};
