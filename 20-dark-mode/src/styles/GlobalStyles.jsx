import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 1rem;
    --clr-black: #000;
    --clr-white: #fff;
  }

  ${normalize};

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-size: var(--font-size-base);
    font-family: 'Lato', sans-serif
  }
`;
