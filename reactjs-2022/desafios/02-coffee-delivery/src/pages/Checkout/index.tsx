import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
  EmptyCart,
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

import { CartContext } from '../../contexts/CartContext';
import { priceFormat } from '../../utils/priceFormat';

export const Checkout = () => {
  const { items, clearCart, shipping, totalPriceItems, removeItem } =
    useContext(CartContext);

  const [formData, setFormData] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    uf: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('');

  function finishOrder() {
    const order = {
      items,
      address: formData,
      paymentMethod,
      totalPrice: totalPriceItems + shipping,
    };
    clearCart();

    console.log(order);
  }

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
            <input
              type="text"
              placeholder="CEP"
              value={formData.cep
                .replace(/\D/g, '')
                .replace(/(\d{5})(\d)/, '$1-$2')
                .replace(/(-\d{3})\d+?$/, '$1')}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  cep: event.target.value,
                });
              }}
            />
            <input
              type="text"
              placeholder="Rua"
              value={formData.street}
              onChange={(event) => {
                setFormData({
                  ...formData,
                  street: event.target.value,
                });
              }}
            />

            <div>
              <input
                type="text"
                placeholder="Número"
                value={formData.number.replace(/\D/g, '')}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    number: event.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="Complemento"
                value={formData.complement}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    complement: event.target.value,
                  });
                }}
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Bairro"
                value={formData.neighborhood}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    neighborhood: event.target.value,
                  });
                }}
              />
              <input
                type="text"
                placeholder="Cidade"
                value={formData.city}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    city: event.target.value,
                  });
                }}
              />
              <input
                id="UF"
                type="text"
                placeholder="UF"
                value={formData.uf}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    uf: event.target.value,
                  });
                }}
              />
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

          <PaymentMethods
            onChange={(event: any) => {
              setPaymentMethod(event.target.value);
            }}
          >
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
          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <OrderItem key={item.id}>
                  <OrderInfo>
                    <img src={item.image} alt="" />

                    <div>
                      <h3>{item.name}</h3>

                      <div className="actions">
                        <div className="counter">
                          <button
                            onClick={() => {
                              if (item.quantity > 1) {
                                // setItems((prev) =>
                                //   prev.map((prevItem) => {
                                //     if (prevItem.id === item.id) {
                                //       prevItem.quantity -= 1;
                                //       return prevItem;
                                //     }
                                //   })
                                // );
                              }
                            }}
                          >
                            <Minus weight="bold" />
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => {
                              // setItems((prev) =>
                              //   prev.map((prevItem) => {
                              //     if (prevItem.id === item.id) {
                              //       prevItem.quantity += 1;
                              //       return prevItem;
                              //     }
                              //   })
                              // );
                            }}
                          >
                            <Plus weight="bold" />
                          </button>
                        </div>

                        <button onClick={() => removeItem(item.id)}>
                          <Trash />
                          <span>Remover</span>
                        </button>
                      </div>
                    </div>
                  </OrderInfo>

                  <p>{priceFormat(item.price)}</p>
                </OrderItem>
              ))}

              <OrderTotal>
                <p>
                  <span>Total de itens</span>
                  <span>{priceFormat(totalPriceItems)}</span>
                </p>
                <p>
                  <span>Entrega</span>
                  <span>{priceFormat(shipping)}</span>
                </p>

                <h3>
                  <span>Total</span>
                  <span>{priceFormat(totalPriceItems + shipping)}</span>
                </h3>
              </OrderTotal>

              <button
                disabled={
                  !Object.keys(formData).every((key) => {
                    if (key === 'complement') return true;
                    return formData[key as keyof typeof formData] !== '';
                  }) || !paymentMethod
                }
                className="confirm-order"
                onClick={finishOrder}
              >
                <NavLink to="/success">Confirmar pedido</NavLink>
              </button>
            </>
          ) : (
            <EmptyCart>
              <p>Seu carrinho está vazio :(</p>
              <NavLink to="/">Voltar às compras</NavLink>
            </EmptyCart>
          )}
        </Order>
      </OrderContainer>
    </MainContainer>
  );
};
