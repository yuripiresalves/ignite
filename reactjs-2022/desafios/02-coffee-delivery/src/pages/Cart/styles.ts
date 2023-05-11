import { styled } from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
`;

export const OrderContainer = styled.div`
  width: 100%;
  max-width: 448px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 18px;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
  }
`;

export const Order = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 44px;
  padding: 1rem 2.5rem 2.5rem;

  .confirm-order {
    width: 100%;
    border: none;
    background: ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    font-size: 0.875rem;
    line-height: 160%;
    font-weight: 700;
    padding: 0.75rem;
    border-radius: 6px;
    transition: background 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`;

export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};

  p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-weight: 700;
    line-height: 130%;
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 64px;
    height: 64px;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      color: ${({ theme }) => theme.colors['base-subtitle']};
      font-weight: 400;
      line-height: 130%;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .counter {
        display: flex;
        align-items: center;
        padding: 0.5rem;
        gap: 0.5rem;
        background: ${({ theme }) => theme.colors['base-button']};
        border-radius: 6px;

        button {
          display: flex;
          align-items: center;
          background: transparent;
          border: none;
          color: ${({ theme }) => theme.colors.purple};
        }

        span {
          line-height: 130%;
          color: ${({ theme }) => theme.colors['base-title']};
        }
      }

      > button {
        background: ${({ theme }) => theme.colors['base-button']};
        color: ${({ theme }) => theme.colors['base-text']};
        font-size: 0.75rem;
        text-transform: uppercase;
        border-radius: 6px;
        padding: 0.5rem;
        border: none;
        transition: background 0.2s ease-in;

        display: flex;
        align-items: center;
        gap: 0.25rem;

        svg {
          width: 1.375rem;
          height: 1.375rem;
          color: ${({ theme }) => theme.colors.purple};
        }

        &:hover {
          background: ${({ theme }) => theme.colors['base-hover']};
        }
      }
    }
  }
`;

export const OrderTotal = styled.div`
  padding: 1.5rem 0;

  p,
  h3 {
    display: flex;
    justify-content: space-between;
    line-height: 130%;
  }

  p {
    margin-bottom: 0.75rem;

    span:first-child {
      font-size: 0.875rem;
    }
  }

  h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`;
