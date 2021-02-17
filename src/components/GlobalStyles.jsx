import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 1rem;
    --clr-white-1: #ffffff;
    --clr-black-1: #000000;
    --clr-blue-1: #001f38;
    --clr-blue-2: #005092;
    --clr-blue-3: #647e94;
    --clr-blue-4: #8da3b6;
    --clr-blue-5: #f1f7fd;
    --clr-purple-1: #5d51ff;
    --clr-purple-2: #786eff;
    --clr-shadow: #00000025;
    --clr-transparent-1: #ffffff25;
    --clr-transparent-2: #ffffff50;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, a, button {
    font-family: 'Lato', 'sans-serif';
  }

  body {
    font-size: var(--font-size-base);
    background: var(--clr-white-1);
  }
`;

export default GlobalStyles;
