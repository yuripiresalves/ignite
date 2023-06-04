import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header } from '../../components/Header';
import { Container } from '../Home/styles';
import { PostActions, PostContent, PostFooter, PostHeader } from './styles';
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { api } from '../../lib/api';

interface Post {
  number: string;
  html_url: string;
  title: string;
  comments: number;
  created_at: string;
  body: string;
  user: {
    login: string;
  };
}

export function Post() {
  const [post, setPost] = useState({} as Post);
  const { number } = useParams<{ number: string }>();

  useEffect(() => {
    api
      .get(`/repos/yuripiresalves/ignite/issues/${number}`)
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <PostHeader>
          <PostActions>
            <NavLink to='/'>
              <FontAwesomeIcon icon={faChevronLeft} />
              VOLTAR
            </NavLink>
            <a href={post.html_url} target='_blank' rel='noreferrer'>
              VER NO GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </PostActions>

          <h1>{post.title}</h1>

          <PostFooter>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {post.user?.login}
            </span>

            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há 1 dia
            </span>

            <span>
              <FontAwesomeIcon icon={faComment} />
              {post.comments}{' '}
              {post.comments === 1 ? 'comentário' : 'comentários'}
            </span>
          </PostFooter>
        </PostHeader>

        <PostContent>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </PostContent>
      </Container>
    </>
  );
}
