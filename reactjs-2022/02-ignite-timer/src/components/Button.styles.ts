import styled from 'styled-components'
export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 4px;
  margin: 10px;
  background-color: ${(props) => props.theme['green-500']};
`
