import { styled } from '@/styles';

export const CartContainer = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  width: 480,
  height: '100vh',
  padding: '4.5rem 3rem 3rem',
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  transition: 'transform 2s ease-in-out',
  zIndex: 9999,

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',

  '.close': {
    cursor: 'pointer',
    position: 'absolute',
    top: 24,
    right: 24,
    backgroundColor: 'transparent',
    border: 'none',
    color: '$gray500',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      color: '$gray300',
    },
  },

  '@media(max-width: 780px)': {
    width: '100%',
    height: '100%',
    inset: 0,
    padding: '2rem',
    borderRadius: 0,
  },
});

export const CartItems = styled('div', {
  margin: '2rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.5rem',
  overflowY: 'auto',
  width: '100%',

  '&::-webkit-scrollbar': {
    width: 4,
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$gray900',
    borderRadius: 6,
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '$gray800',
    borderRadius: 6,
  },
});

export const CartItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
});

export const EmptyCart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%',
  height: '100%',
  color: '$gray500',

  a: {
    color: '$green500',
    fontWeight: 700,
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      color: '$green300',
    },
  },
});

export const CartImageContainer = styled('div', {
  width: 102,
  height: 93,
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
});

export const CartInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  h3: {
    fontWeight: 400,
    fontSize: '$md',
    color: '$gray300',
    marginBottom: '2px',
  },

  strong: {
    fontWeight: 700,
    fontSize: '$md',
    color: '$gray100',
    marginBottom: '0.5rem',

    span: {
      marginLeft: '0.5rem',
      fontWeight: 400,
      fontSize: '0.875rem',
      color: '$gray300',
    },
  },

  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '$green500',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      color: '$green300',
    },
  },
});

export const CartSummary = styled('div', {
  marginTop: 'auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  fontSize: '$md',

  p: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '$gray100',

    '.quantity': {
      fontSize: '1rem',
      color: '$gray300',
    },

    '.total': {
      fontSize: '$lg',
    },
  },

  button: {
    width: '100%',
    padding: '1.25rem 2rem',
    marginTop: '3rem',
    borderRadius: 8,
    backgroundColor: '$green500',
    color: '$white',
    fontWeight: 700,
    fontSize: '$md',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
});
