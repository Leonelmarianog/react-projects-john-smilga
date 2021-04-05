import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 0.65rem;
    --clr-white-1: #ffffff;
    --clr-white-2: #f0f0f0;
    --clr-black-1: #000000;
    --clr-red-1: #ff5b5b;
    --clr-red-2: #ff0000;

    @media screen and (min-width: 576px) {
      --font-size-base: 0.85rem;
    }

    @media screen and (min-width: 768px) {
      --font-size-base: 1rem;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--clr-white-2);
    font-size: var(--font-size-base);
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
