import { styled } from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  input {
    flex: 1;
    padding: 1.2rem 1.6rem;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1.2rem 1.6rem;
    background-color: ${(props) => props.theme['base-background']};
    border: 1px solid ${(props) => props.theme.blue};
    border-radius: 6px;
    color: ${(props) => props.theme.blue};
    font-size: 1.4rem;
    transition: all 0.2s;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
    }
  }

  @media (max-width: 575px) {
    flex-direction: column;
    gap: 0.8rem;

    input {
      width: 100%;
    }

    button {
      width: 100%;
      background-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};

      &:hover {
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme.blue};
      }
    }
  }
`;
