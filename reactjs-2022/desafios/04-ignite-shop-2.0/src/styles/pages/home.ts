import { styled } from '..';

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 656,
  padding: '4rem 2rem 0',

  '@media(max-height: 930px)': {
    minHeight: 556,
    paddingTop: '2rem',
  },
});

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

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

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    div: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',

      strong: {
        fontSize: '$lg',
        color: '$gray100',
      },

      span: {
        fontSize: '$xl',
        fontWeight: 'bold',
        color: '$green300',
      },
    },

    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      padding: '0.75rem',
      borderRadius: 6,
      backgroundColor: '$green500',
      color: '$white',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease-in-out',

      '&:hover': {
        backgroundColor: '$green300',
      },
    },

    '@media(min-width: 1080px)': {
      transform: 'translateY(110%)',
      opacity: 0,
      transition: 'all 0.2s ease-in-out',
    },

    '@media(max-width: 780px)': {
      padding: '1rem',

      div: {
        gap: '0.25rem',

        strong: {
          fontSize: '$md',
        },

        span: {
          fontSize: '$lg',
        },
      },

      button: {
        width: 48,
        height: 48,
        padding: '0.5rem',
      },
    },

    '@media(max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '1rem',

      button: {
        width: '100%',
        fontSize: '$xl',
      },
    },
  },

  '@media(min-width: 1080px)': {
    '&:hover': {
      footer: {
        transform: 'translateY(0%)',
        opacity: 1,
      },
    },
  },
});
