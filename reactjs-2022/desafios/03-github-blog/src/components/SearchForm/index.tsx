import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchFormContainer } from './styles';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { PostsContext } from '../../contexts/PostsContext';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormSchemaType = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchPosts } = useContext(PostsContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchemaType>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormSchemaType) {
    try {
      await fetchPosts(data.query);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <label htmlFor='search'>Buscar conteúdo</label>
      <input
        id='search'
        type='text'
        placeholder='Buscar conteúdo'
        {...register('query')}
      />
      <button type='submit' disabled={isSubmitting}>
        <FontAwesomeIcon icon={faSearch} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
