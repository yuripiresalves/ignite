import { styled } from '@/styles';

export const HeaderContainer = styled('header', {
  padding: '2rem',
  width: '100%',
  maxWidth: 1244,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const CartButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  padding: '0.75rem',
  borderRadius: 6,
  backgroundColor: '$gray800',
  color: '$gray500',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  position: 'relative',

  span: {
    position: 'absolute',
    top: -7,
    right: -7,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    border: '3px solid $gray900',
    backgroundColor: '$green500',
    color: '$white',
    fontSize: '0.75rem',
    fontWeight: 700,
  },

  '&:hover': {
    filter: 'brightness(0.9)',
  },
});
