import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react';
import {
  AddressForm,
  AdrressPayContainer,
  MainContainer,
  Order,
  OrderContainer,
  OrderInfo,
  OrderItem,
  OrderTotal,
  PaymentContainer,
  PaymentMethod,
  PaymentMethods,
} from './styles';

import cafeImg from '../../assets/tradicional.png';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Checkout = () => {
  const [coffeeCounter, setCoffeeCounter] = useState(1);

  return (
    <MainContainer>
      <AdrressPayContainer>
        <h2>Complete seu pedido</h2>
        <AddressForm>
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

            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>

            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input id="UF" type="text" placeholder="UF" />
            </div>
          </div>
        </AddressForm>

        <PaymentContainer>
          <div className="header">
            <CurrencyDollar />
            <div className="text">
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <PaymentMethods>
            <PaymentMethod>
              <input
                type="radio"
                name="payment"
                id="creditCard"
                value="creditCard"
              />
              <CreditCard />
              <label htmlFor="creditCard">Cartão de Crédito</label>
            </PaymentMethod>

            <PaymentMethod>
              <input
                type="radio"
                name="payment"
                id="debitCard"
                value="debitCard"
              />
              <Bank />
              <label htmlFor="debitCard">Cartão de Débito</label>
            </PaymentMethod>

            <PaymentMethod>
              <input type="radio" name="payment" id="money" value="money" />
              <Money />
              <label htmlFor="money">Dinheiro</label>
            </PaymentMethod>
          </PaymentMethods>
        </PaymentContainer>
      </AdrressPayContainer>

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

          <NavLink to="/success" className="confirm-order">
            Confirmar pedido
          </NavLink>
        </Order>
      </OrderContainer>
    </MainContainer>
  );
};
