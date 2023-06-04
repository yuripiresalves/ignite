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
import { NavLink } from 'react-router-dom';

export function Post() {
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
            <a
              href='https://github.com/yuripiresalves'
              target='_blank'
              rel='noreferrer'
            >
              VER NO GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </PostActions>

          <h1>JavaScript data types and data structures</h1>

          <PostFooter>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              yuripiresalves
            </span>

            <span>
              <FontAwesomeIcon icon={faCalendarDay} />
              Há 1 dia
            </span>

            <span>
              <FontAwesomeIcon icon={faComment} />5 comentários
            </span>
          </PostFooter>
        </PostHeader>

        <PostContent>
          <strong>
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </strong>{' '}
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
          <br />
          <br />
          Dynamic typing
          <br />
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
          <br />
          <br />
          let foo = 42; // foo is now a number
          <br />
          foo = ‘bar’; // foo is now a string
          <br />
          foo = true; // foo is now a boolean
        </PostContent>
      </Container>
    </>
  );
}
