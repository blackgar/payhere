import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    ownColor: string;
    ownColorHover: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
    boxColor: string;
  }
}
