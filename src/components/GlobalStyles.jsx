import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --clr-white-1: #ebe9e9;
    --clr-white-2: #ffffff;
    --clr-black: #000000;
    --clr-blue: #060aff;
    --clr-red: #ff0000;
    --clr-green: #c2ff33;
    --font-size-base: 0.65rem;

    @media screen and (min-width: 576px) {
      :root {
        --font-size-base: 0.85rem;
      }
    }

    @media screen and (min-width: 768px) {
      :root {
        --font-size-base: 1rem;
      }
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--clr-white-1);
    font-size: var(--font-size-base);
    font-family: 'Lato', sans-serif;
    color: var(--clr-black);
  }

  button {
    font-size: var(--font-size-base);
  }
`;

export default GlobalStyles;
