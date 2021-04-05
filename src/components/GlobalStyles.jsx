import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --clr-blue-1: #ceebfc;
    --clr-blue-2: #aae0ff;
    --clr-blue-3: #57c1ff;
    --clr-blue-4: #00a2ff;
    --clr-white-1: #ffffff;
    --clr-black-1: #000000;
    --font-size-base: 0.65rem;

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
    background: var(--clr-blue-1);
    font-size: var(--font-size-base);
    font-family: 'Open Sans', sans-serif;
    color: var(--clr-black-1);
  }
`;

export default GlobalStyles;
