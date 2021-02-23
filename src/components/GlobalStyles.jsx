import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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

  ${normalize}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, ul {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Noto Sans', 'sans-serif';
    color: var(--clr-white-1);
    background: var(--clr-black-2);
  }
`;

export default GlobalStyles;
