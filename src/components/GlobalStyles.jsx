import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 0.65rem;
    --clr-light-blue-1: #a6effc;
    --clr-light-blue-2: #0093ad;
    --clr-light-blue-3: #005261;

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
    background: #a6effc;
    font-size: var(--font-size-base);
    font-family: 'Roboto', 'sans-serif';
    color: var(--clr-blue-1);
  }
`;

export default GlobalStyles;
