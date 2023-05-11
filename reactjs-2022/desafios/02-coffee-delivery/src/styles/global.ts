import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Definir a largura e cor da barra de rolagem */
  ::-webkit-scrollbar {
    width: 10px;
    height: 0px;
    background-color: ${({ theme }) => theme.colors['base-button']};
  }
  
  /* Definir a cor da thumb da barra de rolagem */
  ::-webkit-scrollbar-thumb {
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors['purple-dark']};
  }

  /* Definir a cor do hover da thumb da barra de rolagem */
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }

`;
