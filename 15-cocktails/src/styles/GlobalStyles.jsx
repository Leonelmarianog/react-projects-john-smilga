import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 1rem;
    --clr-yellow-1: #fffebb;
    --clr-yellow-2: #fffd91;
    --clr-yellow-3: #fffb00;
    --clr-yellow-4: #918f2b;
    --clr-white-1: #ffffff;
    --clr-black-1: #000000;
    --clr-transparent-1: #00000025;
    --clr-transparent-2: #ffffff25;
  }

  ${normalize};

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-size: var(--font-size-base);
    font-family: 'Noto Sans', 'sans serif';
    background: var(--clr-yellow-1);
  }
`;

export default GlobalStyles;
