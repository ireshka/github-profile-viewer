import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      lightBackground: string;
      white: string;
      dark: string;
      lightGradient: string;
    };
    border: {
      small: string;
    };
    spacing: {
      small: string;
      medium: string;
    };
  }
}
