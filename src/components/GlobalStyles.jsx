import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`  
  :root {
    --font-size-base: 1rem;
    --clr-black-1: #000000;
    --clr-black-2: #272727;
    --clr-red-1: #ff0000;
    --clr-orange-1: #ff8800;
    --clr-orange-2: #fdb461;
    --clr-orange-3: #ffd6a7;
    --clr-white-1: #ffffff;
    --clr-transparent-1: #ffffff25;
    --clr-transparent-2: #00000025;
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
    font-size: var(--font-size-base);
  }
`;

export default GlobalStyles;
