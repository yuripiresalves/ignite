import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 91.2rem;
  margin: 0 auto;
  padding: 0 2.4rem;
`;

export const PostsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 7.2rem;

  @media (max-width: 560px) {
    margin-top: 4.8rem;
  }
`;

export const PostsHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  h2 {
    font-size: 1.8rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-span']};
  }
`;

export const PostsContainer = styled.div`
  margin: 4.8rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const PostCard = styled(NavLink)`
  width: 100%;
  height: 100%;
  max-width: 41.6rem;
  max-height: 26rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 3.2rem;
  border: 2px solid transparent;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 991px) {
    max-width: 100%;
  }

  @media (max-width: 560px) {
    p {
      -webkit-line-clamp: 3;
    }
  }
`;

export const PostCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  margin-bottom: 2rem;

  h3 {
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
    width: 100%;
    max-width: 28rem;
  }

  span {
    font-size: 1.4rem;
    color: ${(props) => props.theme['base-span']};
  }

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;

    h3 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
