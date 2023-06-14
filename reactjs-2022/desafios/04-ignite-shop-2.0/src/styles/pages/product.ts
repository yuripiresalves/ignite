import { styled } from '..';

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',

  minHeight: 656,
  padding: '4rem 2rem 0',

  '@media(max-height: 780px)': {
    minHeight: 556,
    paddingTop: '2rem',
  },

  '@media(max-width: 780px)': {
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
});

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',

    '@media(max-width: 780px)': {
      width: 320,
      height: 280,
    },
  },
});

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: '1.6rem',
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    color: '$white',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'background-color 0.2s',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },

  '@media(max-width: 780px)': {
    h1: {
      fontSize: '$xl',
    },

    span: {
      fontSize: '$xl',
    },

    p: {
      marginTop: '1.5rem',
      fontSize: '$sm',
    },

    button: {
      marginTop: '1.5rem',
      padding: '1rem',
    },
  },
});
