import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  :root {
    --font-size-base: 1rem;
  }

  ${normalize};

  *, *::before, *::after {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
  }

  button {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-size: var(--font-size-base);
    font-family: 'Merriweather', serif;
    background-color: ${({ theme }) => theme.bcgColor};
    transition: background-color 0.2s linear;
  }
`;
