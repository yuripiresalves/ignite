import { styled } from 'styled-components';

export const TitleContainer = styled.div`
  padding-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['yellow-dark']};
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    margin-bottom: 0.25px;
  }

  p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1.75rem 0 2.5rem;
`;

export const InfoContainer = styled.ul`
  padding: 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  border-radius: 6px 36px 6px 36px;
  list-style: none;
  width: 100%;
  max-width: 526px;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      line-height: 130%;
    }
  }

  li + li {
    margin-top: 2rem;
  }
`;
