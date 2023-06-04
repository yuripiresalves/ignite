import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Profile } from '../../components/Profile';
import {
  Container,
  PostCard,
  PostCardHeader,
  PostsContainer,
  PostsHeader,
  PostsHeaderInfo,
} from './styles';
import { SearchForm } from '../../components/SearchForm';
import { api } from '../../lib/api';
import {
  dateFormatterWithHour,
  dateFromNowFormatter,
} from '../../utils/formatter';

interface PostCard {
  number: string;
  title: string;
  created_at: string;
  body: string;
}

export function Home() {
  const [posts, setPosts] = useState<PostCard[]>([]);

  useEffect(() => {
    api
      .get('/search/issues', {
        params: {
          q: 'repo:yuripiresalves/ignite',
        },
      })
      .then((response) => {
        setPosts(response.data.items);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Profile />

        <PostsHeader>
          <PostsHeaderInfo>
            <h2>Publicações</h2>
            <span>{posts.length} publicações</span>
          </PostsHeaderInfo>

          <SearchForm />
        </PostsHeader>

        <PostsContainer>
          {posts.map((post) => (
            <PostCard to={`/post/${post.number}`} key={post.number}>
              <PostCardHeader>
                <h3>{post.title}</h3>
                <span title={dateFormatterWithHour(post.created_at)}>
                  {dateFromNowFormatter(post.created_at)}
                </span>
              </PostCardHeader>
              <p>
                {post.body.length > 200
                  ? post.body.substring(0, 200).concat('...')
                  : post.body}
              </p>
            </PostCard>
          ))}
        </PostsContainer>
      </Container>
    </>
  );
}
