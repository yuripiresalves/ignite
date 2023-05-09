import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Container } from './styles';

export function Default() {
  return (
    <Container>
      <Header />

      <Outlet />
    </Container>
  );
}
