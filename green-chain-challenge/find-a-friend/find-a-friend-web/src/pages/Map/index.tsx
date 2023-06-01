import { Aside } from '~/Aside';
import { Card } from '~/Card';

import chevron from '@/assets/icons/chevron-bottom-blue.svg';
import dog from '@/assets/images/dog.png';

import {
  Container,
  Content,
  SelectWrapper,
  Header,
  HeaderSelect,
  Display,
} from './styles';
import { useQuery } from '@/hooks/useQuery';
import { useEffect, useState } from 'react';
import { api } from '@/utils/api';
import { NavLink } from 'react-router-dom';

interface Pet {
  id: string;
  name: string;
  description: string;
  city: string;
  age: string;
  energy: number;
  size: string;
  independence: string;
  type: 'dog' | 'cat';
  photo: string;
  orgId: string;
  photo_url: string;
}

export function Map() {
  const city = useQuery().get('city');
  const [pets, setPets] = useState<Pet[]>([]);
  const [selectedPetType, setSelectedPetType] = useState('all');

  function handleFilterByPetType(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedPetType(event.target.value);
  }

  async function fetchPets(type: string) {
    if (type === 'all') {
      const response = await api.get(`/pets/${city}`);
      const pets = response.data.pets;
      setPets(pets);
    }

    if (type === 'cats') {
      const response = await api.get(`/pets/${city}?type=cat`);
      const pets = response.data.pets;
      setPets(pets);
    }

    if (type === 'dogs') {
      const response = await api.get(`/pets/${city}?type=dog`);
      const pets = response.data.pets;
      setPets(pets);
    }
  }

  useEffect(() => {
    fetchPets(selectedPetType);
  }, [city, selectedPetType]);

  return (
    <Container>
      <Aside city={city} />

      <Content>
        <Header>
          <p>
            Encontre <span>{pets.length} amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              name='size'
              id='size'
              value={selectedPetType}
              onChange={handleFilterByPetType}
            >
              <option value='all'>Gatos e Cachorros</option>
              <option value='cats'>Gatos</option>
              <option value='dogs'>Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt='' />
          </SelectWrapper>
        </Header>
        <Display>
          {pets.map((pet) => (
            <NavLink to={`/pet/${pet.id}`} key={pet.id}>
              <Card path={pet.photo_url} type={pet.type} name={pet.name} />
            </NavLink>
          ))}
        </Display>
      </Content>
    </Container>
  );
}
