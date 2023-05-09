import {
  HeroContent,
  HeroList,
  HeroSection,
  HeroText,
  MainContainer,
} from './styles';

import compraImg from '../../assets/compra.svg';
import embalagemImg from '../../assets/embalagem.svg';
import entregaImg from '../../assets/entrega.svg';
import cafeImg from '../../assets/cafe.svg';
import heroIlustra from '../../assets/hero-ilustra.png';
import { CoffeeCard } from '../../components/CoffeeCard';

export const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HeroText>

          <HeroList>
            <li>
              <img src={compraImg} alt="" />
              <span>Compra simples e segura</span>
            </li>

            <li>
              <img src={embalagemImg} alt="" />
              <span>Embalagem mantém o café intacto</span>
            </li>

            <li>
              <img src={entregaImg} alt="" />
              <span>Entrega rápida e rastreada</span>
            </li>

            <li>
              <img src={cafeImg} alt="" />
              <span>O café chega fresquinho até você</span>
            </li>
          </HeroList>
        </HeroContent>

        <img src={heroIlustra} alt="" />
      </HeroSection>
      <MainContainer>
        <h2>Nossos cafés</h2>

        <div className="cards">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </MainContainer>
    </>
  );
};
