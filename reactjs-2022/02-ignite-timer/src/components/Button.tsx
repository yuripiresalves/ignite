import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
}

export const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
