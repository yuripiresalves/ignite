// { coffee }: CoffeeCardProps
import { useState } from 'react';

import { BuyContainer, CardContainer, TagsContainer } from './styles';

import coffeeImg from '../../assets/tradicional.png';
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';

export const CoffeeCard = () => {
  const [coffeeCounter, setCoffeeCounter] = useState(1);

  return (
    <CardContainer>
      <img src={coffeeImg} alt="Xícara de café" />

      <TagsContainer>
        <span>especial</span>
        <span>alcoólico</span>
        <span>gelado</span>
      </TagsContainer>

      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>

      <BuyContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>

        <div className="actions">
          <div className="counter">
            <button
              onClick={() => {
                if (coffeeCounter > 1) {
                  setCoffeeCounter(coffeeCounter - 1);
                }
              }}
            >
              <Minus weight="bold" />
            </button>
            <span>{coffeeCounter}</span>
            <button
              onClick={() => {
                setCoffeeCounter(coffeeCounter + 1);
              }}
            >
              <Plus weight="bold" />
            </button>
          </div>

          <button>
            <ShoppingCartSimple weight="fill" />
          </button>
        </div>
      </BuyContainer>
    </CardContainer>
  );
};
