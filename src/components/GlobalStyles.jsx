import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 0.65rem;
    --clr-yellow-1: #fff3bf;
    --clr-yellow-2: #cea800;
    --clr-white-1: #ffffff;
    --clr-black-1: #130f00;

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
    background: var(--clr-yellow-1);
    font-size: var(--font-size-base);
    font-family: 'Roboto', 'sans-serif';
    color: var(--clr-black-1);
  }
`;

export default GlobalStyles;
