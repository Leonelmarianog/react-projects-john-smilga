import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 0.65rem;
    --clr-purple-1: #e4c6fd;
    --clr-purple-2: #c27cfc;
    --clr-purple-3: #b152ff;
    --clr-purple-4: #8c00ff;
    --clr-purple-5: #0d0018;
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
    background: var(--clr-purple-1);
    font-size: var(--font-size-base);
    font-family: 'Roboto', sans-serif;
    color: var(--clr-purple-5);
  }
`;

export default GlobalStyles;
