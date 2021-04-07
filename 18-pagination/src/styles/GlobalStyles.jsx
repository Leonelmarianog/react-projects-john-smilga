import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 1rem;
    --clr-yellow-1: #fffcd3;
    --clr-yellow-2: #fff562;
    --clr-yellow-3: #f5e93f;
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
    background: var(--clr-yellow-1);
  }
`;
