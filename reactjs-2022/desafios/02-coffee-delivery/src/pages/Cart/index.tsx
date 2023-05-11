import { MapPin, Minus, Plus, Trash } from 'phosphor-react';
import {
  MainContainer,
  Order,
  OrderContainer,
  OrderInfo,
  OrderItem,
  OrderTotal,
} from './styles';

import cafeImg from '../../assets/tradicional.png';
import { useState } from 'react';

export const Cart = () => {
  const [coffeeCounter, setCoffeeCounter] = useState(1);

  return (
    <MainContainer>
      <div className="address-pay">
        <h2>Complete seu pedido</h2>
        <form>
          <div className="header">
            <MapPin />
            <div className="text">
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div className="input-group">
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>
        </form>
      </div>

      <OrderContainer>
        <h2>Cafés selecionados</h2>
        <Order>
          <OrderItem>
            <OrderInfo>
              <img src={cafeImg} alt="Café" />

              <div>
                <h3>Expresso Tradicional</h3>

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
                    <Trash />
                    <span>Remover</span>
                  </button>
                </div>
              </div>
            </OrderInfo>

            <p>R$ 9,90</p>
          </OrderItem>

          <OrderItem>
            <OrderInfo>
              <img src={cafeImg} alt="Café" />

              <div>
                <h3>Expresso Tradicional</h3>

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
                    <Trash />
                    <span>Remover</span>
                  </button>
                </div>
              </div>
            </OrderInfo>

            <p>R$ 9,90</p>
          </OrderItem>

          <OrderTotal>
            <p>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </p>
            <p>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </p>

            <h3>
              <span>Total</span>
              <span>R$ 33,20</span>
            </h3>
          </OrderTotal>

          <button className="confirm-order">Confirmar pedido</button>
        </Order>
      </OrderContainer>
    </MainContainer>
  );
};
