import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button {
    font: 400 1.6rem 'Nunito', sans-serif;
    color: ${(props) => props.theme['base-text']};
    line-height: 160%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme['base-background']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['base-label']};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['base-border']};
  }
`;
