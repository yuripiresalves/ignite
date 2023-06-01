import { useEffect, useState } from 'react';
import { Container, Content, LeftSide, RightSide } from './styles';
import { Select } from '@/components/Select';
import { api } from '@/utils/api';

import logoImg from '@/assets/images/logo-name.svg';
import dogsIlustra from '@/assets/images/dogs-ilustra.svg';
import searchIcon from '@/assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';

interface State {
  id: number;
  nome: string;
  sigla: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
}

interface City {
  code: number;
  name: string;
}

export function Home() {
  const navigate = useNavigate();

  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  async function fetchStates() {
    const response = await api.get('/location/states');
    setStates(response.data.states);
  }

  async function fetchCities() {
    const response = await api.get(`/location/citys/${selectedState}`);
    setCities(response.data.citys);
  }

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    fetchCities();
  }, [selectedState]);

  function handleSearchPets(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedState || !selectedCity) {
      alert('Selecione um estado e uma cidade');
      return;
    }

    return navigate(`/map?state=${selectedState}&city=${selectedCity}`);
  }

  function handleChangeState(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedState(e.target.value);
  }

  function handleChangeCity(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCity(e.target.value);
  }

  return (
    <Container>
      <Content>
        <LeftSide>
          <img src={logoImg} alt='Find a Friend' />
          <h1>Leve a felicidade para o seu lar</h1>
          <p>Encontre o animal de estimação ideal para seu estilo de vida!</p>
        </LeftSide>

        <RightSide>
          <img src={dogsIlustra} alt='Cachorros ilustrados' />
          <form onSubmit={handleSearchPets}>
            <div className='input-group'>
              <div className='states'>
                <label htmlFor='state'>Busque um amigo:</label>
                <select
                  name='state'
                  id='state'
                  value={selectedState}
                  onChange={handleChangeState}
                >
                  <option value=''>...</option>
                  {states.map((state) => (
                    <option value={state.sigla}>{state.sigla}</option>
                  ))}
                </select>
              </div>

              <div className='cities'>
                <div>
                  <select
                    name='city'
                    id='city'
                    value={selectedCity}
                    onChange={handleChangeCity}
                  >
                    <option value=''></option>
                    {cities?.map((city) => (
                      <option value={city.name}>{city.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button type='submit'>
                <img src={searchIcon} alt='' />
              </button>
            </div>
          </form>
        </RightSide>
      </Content>
    </Container>
  );
}
