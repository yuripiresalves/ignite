import { styled } from 'styled-components';

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  position: relative;
  text-align: center;
  padding: 112px 20px 0; //24px no buy

  img {
    position: absolute;
    top: -20px;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
    margin: 1rem 0 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-label']};
    margin-bottom: 2rem;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    background: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    border-radius: 100px;
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
  }
`;

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.25rem;

  span {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-text']};

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-size: 24px;
      line-height: 130%;
      font-weight: 800;
    }
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
      background: ${({ theme }) => theme.colors['purple-dark']};
      color: ${({ theme }) => theme.colors['base-card']};
      border-radius: 6px;
      padding: 0.5rem;
      border: none;
      transition: background 0.2s ease-in;

      display: flex;
      align-items: center;

      svg {
        width: 1.375rem;
        height: 1.375rem;
      }

      &:hover {
        background: ${({ theme }) => theme.colors.purple};
      }
    }
  }
`;
