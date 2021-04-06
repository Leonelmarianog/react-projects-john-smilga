import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 1rem;
    --clr-red-1: #ffc2c2;
    --clr-red-2: #be5e5e;
    --clr-red-3: #6e1f1f;
    --clr-grey: #222;
    --clr-black: #000;
    --clr-white: #fff;
    --clr-shadow: #00000025;
  }

  ${normalize};

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: var(--font-size-base);
  }
`;
