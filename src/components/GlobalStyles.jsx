import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 1rem;
    --clr-black-1: #000000;
    --clr-black-2: #1b1b1b;
    --clr-red-1: #ff0062;
    --clr-red-2: #ff3e88;
    --clr-red-3: #ff85b4;
    --clr-white-1: #ffffff;
    --height-header: 64px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, a, button {
    font-family: 'Noto Sans', sans-serif;
  }

  body {
    font-size: var(--font-size-base);
    color: var(--clr-white-1);
    background: var(--clr-black-2);
  }
`;

export default GlobalStyles;
