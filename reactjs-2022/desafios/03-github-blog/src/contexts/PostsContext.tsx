import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../lib/api';

interface Post {
  number: string;
  title: string;
  created_at: string;
  body: string;
}

interface PostsContextType {
  posts: Post[];
  fetchPosts: (query?: string) => Promise<void>;
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContextType);

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts(query: string = '') {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query}repo:yuripiresalves/ignite`,
      },
    });

    setPosts(response.data.items);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
