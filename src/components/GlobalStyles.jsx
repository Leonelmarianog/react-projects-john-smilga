import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --clr-green-1: #e9ffb7;
    --clr-green-2: #d9ff82;
    --clr-green-3: #a2ff9f;
    --clr-green-4: #beffbc;
    --clr-blue-1: #c5eaff;
    --clr-blue-2: #96cff0;
    --clr-white-1: #ffffff;
    --clr-black-1: #000000;
    --clr-red-1: #ff0000;
    --clr-red-2: #ffb0b0;
    --clr-red-3: #ff7a7a;
    --clr-orange-1: #ffd900;
    --font-size-base: 0.65rem;

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
    background: var(--clr-green-1);
    font-size: var(--font-size-base);
    font-family: 'Roboto', 'sans-serif';
  }
`;

export default GlobalStyles;
