import { styled } from 'styled-components';

export const HeroSection = styled.section`
  min-height: 544px;
  display: flex;
  align-items: flex-start;
  padding-top: 94px;
  justify-content: space-between;
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 588px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HeroText = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-title']};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    margin-bottom: 40px;
  }
`;

export const HeroList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px 40px;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-width: 231px;

    span {
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`;

export const MainContainer = styled.main`
  padding-bottom: 5rem;
  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    padding: 2rem 0 3.375rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 0;
  }
`;
