import { useContext, useState } from 'react';

import { BuyContainer, CardContainer, TagsContainer } from './styles';

import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react';
import { CartContext } from '../../contexts/CartContext';
import { priceFormat } from '../../utils/priceFormat';

interface CoffeeCardProps {
  coffee: {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: string[];
    image: string;
  };
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const [coffeeCounter, setCoffeeCounter] = useState(1);
  const { addItem } = useContext(CartContext);

  return (
    <CardContainer>
      <img src={coffee.image} alt="Xícara de café" />

      <TagsContainer>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagsContainer>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <BuyContainer>
        <span>
          R$ <strong>{priceFormat(coffee.price).replace('R$', '')}</strong>
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

          <button
            onClick={() => addItem({ ...coffee, quantity: coffeeCounter })}
          >
            <ShoppingCartSimple weight="fill" />
          </button>
        </div>
      </BuyContainer>
    </CardContainer>
  );
};
