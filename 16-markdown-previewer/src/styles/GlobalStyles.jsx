import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 1rem;
    --clr-shadow: #00000025;
    --clr-aquagreen-1: #d4ffea;
    --clr-aquagreen-2: #90bba6;
    --clr-black: #000000;
  }

  ${normalize};

  *, *::before, *::After {
    box-sizing: border-box;
  }

  body {
    font-size: var(--font-size-base);
    font-family: monospace;
    color: var(--clr-black);
    background-color: var(--clr-aquagreen-1);
  }
`;
