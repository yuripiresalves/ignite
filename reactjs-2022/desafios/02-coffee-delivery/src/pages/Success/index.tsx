import image from '../../assets/order-complete-ilustra.svg';
import locationIcon from '../../assets/location.svg';
import previsaoIcon from '../../assets/previsao.svg';
import pagamentoIcon from '../../assets/pagamento.svg';
import { ContentContainer, InfoContainer, TitleContainer } from './styles';

export const Success = () => {
  return (
    <>
      <TitleContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TitleContainer>

      <ContentContainer>
        <InfoContainer>
          <li>
            <img src={locationIcon} alt="" />
            <span>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />
              Farrapos - Porto Alegre, RS
            </span>
          </li>
          <li>
            <img src={previsaoIcon} alt="" />
            <span>
              Previsão de entrega <br />
              <strong>20 min - 30 min </strong>
            </span>
          </li>
          <li>
            <img src={pagamentoIcon} alt="" />
            <span>
              Pagamento na entrega <br />
              <strong>Cartão de Crédito</strong>
            </span>
          </li>
        </InfoContainer>

        <img src={image} alt="" />
      </ContentContainer>
    </>
  );
};
