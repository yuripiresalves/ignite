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

export const CartButton = styled.button`
  background: ${({ theme }) => theme.colors['yellow-light']};
  color: ${({ theme }) => theme.colors['yellow-dark']};
  border-radius: 6px;
  padding: 0.5rem;
  border: none;

  display: flex;
  align-items: center;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`;
