import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 0.65rem;
    --clr-blue-1:  #edf5f8;
    --clr-blue-2: #9fb4bd;
    --clr-blue-3: #446f80;
    --clr-orange-1: #c27400;
    --clr-white-1: #ffffff;

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
    font-family: 'Roboto', 'sans-serif';
    color: var(--clr-black-1);
  }
`;

export default GlobalStyles;
