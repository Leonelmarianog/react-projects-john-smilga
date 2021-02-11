import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --clr-blue-1: #e0f6ff;
    --clr-blue-2: #b3e9ff;
    --clr-blue-3: #67d4ff;
    --clr-blue-4: #00b7ff;
    --clr-blue-5: #00425c;
    --clr-white-1: #ffffff;
    --clr-black-1: #000000;
    --font-size-base: 0.65rem;
    --font-size-sidebar: 1.25rem;

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
    font-family: 'Lato', sans-serif;
  }
`;

export default GlobalStyles;
