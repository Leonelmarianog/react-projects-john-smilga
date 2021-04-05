import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --clr-pink: #fd8bc0;
    --clr-white: #f7f7f7;
    --clr-black: #202020;
    --clr-dark-pink-1: #b94d80;
    --clr-dark-pink-2: #d85c96;
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
    background-color: var(--clr-pink);
    font-size: var(--font-size-base);
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyles;
