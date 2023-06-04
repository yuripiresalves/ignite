import { styled } from 'styled-components';

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 86.4rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 3.2rem;
  padding-left: 4rem;
  display: flex;
  align-items: end;
  gap: 3.2rem;
  margin: 0 auto;
  margin-top: -10.6rem;

  img {
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 560px) {
    img {
      width: 10rem;
      height: 10rem;
    }

    padding: 2.4rem;
    gap: 2.4rem;
  }
`;

export const ContentContainer = styled.div`
  p {
    margin: 0.8rem 0 2.4rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const ProfileHeader = styled.div`
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
    h1 {
      font-size: 2rem;
    }
  }
`;

export const ProfileFooter = styled.div`
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
