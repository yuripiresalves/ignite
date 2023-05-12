import { styled } from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  gap: 2rem;
  padding-bottom: 2.5rem;
`;

export const AdrressPayContainer = styled.div`
  flex: 1;
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

export const AddressForm = styled.form`
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  .header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    .text {
      h3 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }

      p {
        font-size: 0.875rem;
        line-height: 130%;
        color: ${({ theme }) => theme.colors['base-text']};
      }
    }
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      background: ${({ theme }) => theme.colors['base-input']};
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.colors['base-button']};
      padding: 0.75rem;
      font-size: 0.875rem;
      line-height: 130%;
    }

    input::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
      font-size: 0.875rem;
      line-height: 130%;
    }

    input:first-child {
      max-width: 200px;
    }

    input:focus {
      border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
      outline: none;
    }

    div {
      display: flex;
      gap: 0.75rem;
      width: 100%;

      input {
        width: 100%;
      }

      input:first-child {
        min-width: 200px;
      }

      #UF {
        width: 60px;
      }
    }
  }
`;

export const PaymentContainer = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;

  .header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${({ theme }) => theme.colors.purple};
    }

    .text {
      h3 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
        color: ${({ theme }) => theme.colors['base-subtitle']};
      }

      p {
        font-size: 0.875rem;
        line-height: 130%;
        color: ${({ theme }) => theme.colors['base-text']};
      }
    }
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const PaymentMethod = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  padding-left: 1rem;
  transition: all 0.2s ease-in-out;

  input {
    display: none;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${({ theme }) => theme.colors.purple};
  }

  label {
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;
    padding: 1rem 1rem 1rem 0;
  }

  &:has(input:checked) {
    background: ${({ theme }) => theme.colors['purple-light']};
    outline: 1px solid ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
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
    display: inline-block;
    text-align: center;
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
          transition: all 0.2s ease-in;

          &:hover {
            color: ${({ theme }) => theme.colors['purple-dark']};
          }
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
