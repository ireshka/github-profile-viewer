import { DefaultTheme } from 'styled-components';

const myDefaultTheme: DefaultTheme = {
  colors: {
    main: '#613AA2',
    secondary: '#A775F2',
    lightBackground: '#F5EEFF',
    white: '#ffffff',
    dark: '#2B1D43',
    lightGradient: 'linear-gradient(45deg, #7a34ec26, #7a34ec05, transparent)',
    error: {
      light: '#EA1E63',
      dark: '#8b113e',
    },
  },
  border: {
    small: '10px',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
  },
  font: {
    size: {
      small: '0.875rem',
      medium: '1rem',
    },
  },
};

export { myDefaultTheme };
