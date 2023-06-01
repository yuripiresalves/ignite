import { Select } from '@/components/Select';

import logo from '@/assets/icons/logo.svg';
import search from '@/assets/icons/search.svg';

import {
  Container,
  AsideHeader,
  HeaderInput,
  AsideContent,
  ContentHeader,
  ContentFilters,
} from './styles';
import { NavLink } from 'react-router-dom';

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
];
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
];
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
];
const independencyOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
];

interface AsideProps {
  city: string | null;
}

export function Aside({ city }: AsideProps) {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeSearchFilters() {
    // TO DO
  }

  return (
    <Container>
      <AsideHeader>
        <div>
          <NavLink to='/'>
            <img src={logo} alt='' />
          </NavLink>
          <HeaderInput>
            <input
              type='text'
              placeholder='Insira uma cidade'
              disabled
              value={city ? city : ''}
            />
            <button>
              <img src={search} alt='ícone de lupa' />
            </button>
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select name='age' label='Idade' options={ageOptions} />

          <Select
            name='energy'
            label='Nível de energia'
            options={energyOptions}
          />

          <Select name='size' label='Porte do animal' options={sizeOptions} />

          <Select
            name='independency'
            label='Nível de independência'
            options={independencyOptions}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  );
}
