import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchFormContainer } from './styles';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <label htmlFor='search'>Buscar conteúdo</label>
      <input id='search' type='text' placeholder='Buscar conteúdo' />
      <button type='submit'>
        <FontAwesomeIcon icon={faSearch} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
