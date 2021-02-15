import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 0.65rem;
    --font-size-navbar: 1rem;
    --font-size-sidebar: 0.65rem;
    --clr-white-1: #ffffff;
    --clr-black-1: #000000;
    --clr-blue-1: #001f38;
    --clr-blue-2: #005092;
    --clr-blue-3: #647e94;
    --clr-blue-4: #8da3b6;
    --clr-blue-5: #f1f7fd;
    --clr-purple-1: #5d51ff;
    --clr-purple-2: #786eff;
    
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
    font-size: var(--font-size-base);
    font-family: 'Lato', 'sans-serif';
    background: var(--clr-white-1);
  }
`;

export default GlobalStyles;
