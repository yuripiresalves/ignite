import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${({ theme }) => theme.colors['purple-light']};
  padding: 0.5rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors['purple-dark']};

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${({ theme }) => theme.colors.purple};
  }

  span {
    font-size: 0.875rem;
    line-height: 130%;
  }
`;

export const CartButton = styled.div`
  background: ${({ theme }) => theme.colors['yellow-light']};
  color: ${({ theme }) => theme.colors['yellow-dark']};
  border-radius: 6px;
  padding: 0.5rem;
  border: none;
  display: flex;
  align-items: center;
  position: relative;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  .cart-items {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background: ${({ theme }) => theme.colors['yellow-dark']};
    color: ${({ theme }) => theme.colors.white};
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 130%;
  }
`;
