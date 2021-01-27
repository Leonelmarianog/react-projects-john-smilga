import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 0.65rem;
    --clr-blue-1: #001325; 
    --clr-blue-2: #00478a; 
    --clr-blue-3: #0084ff;
    --clr-blue-4: #c4e2ff;
    --clr-white-1:  #ffffff;

    @media screen and (min-width: 576px) {
      :root {
        --font-size-base: 0.85rem;
      }
    }

    @media screen and (min-width: 768px) {
      :root {
        --font-size-base: 1rem;
      }
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: var(--font-size-base);
    font-family: 'Roboto', sans-serif;
    background-color: var(--clr-blue-4);
  }
`;

export default GlobalStyles;
