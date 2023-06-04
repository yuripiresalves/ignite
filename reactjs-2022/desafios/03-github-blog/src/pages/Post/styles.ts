import { styled } from 'styled-components';

export const PostHeader = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: -10.6rem;

  h1 {
    font-size: 2.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin: 2rem 0 0.8rem;
  }
`;

export const PostActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2.4rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  a {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    line-height: 0;
    padding: 0.5rem 0;
    border-bottom: 1px solid transparent;

    &:hover {
      border-color: ${(props) => props.theme.blue};
      border-width: 1px;
      transition: all 0.2s;

      svg {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 340px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  color: ${(props) => props.theme['base-subtitle']};

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    svg {
      font-size: 1.8rem;
      color: ${(props) => props.theme['base-label']};
    }
  }

  @media (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
  }
`;

export const PostContent = styled.div`
  width: 100%;
  padding: 4rem 3.2rem;
`;
