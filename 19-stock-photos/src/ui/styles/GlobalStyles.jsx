import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 1rem;
    --clr-white: #fff;
    --clr-black: #000;
    --clr-shadow-1: #00000025;
    --clr-shadow-2: #00000095;
    --clr-grey-1: #222;
    --clr-grey-2: #777;
  }

  ${normalize};

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', 'sans-serif';
    font-size: var(--font-size-base);
    background: var(--clr-grey-1);
  }
`;
