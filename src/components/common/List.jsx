import styled, { css } from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: ${({ columns }) =>
    columns ? `repeat(${columns}, 1fr)` : 'repeat(1, 1fr)'};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};

  ${({ breakpoints }) =>
    breakpoints &&
    breakpoints.map(
      ({ breakpoint, columns }) =>
        css`
          @media screen and (min-width: ${breakpoint}) {
            grid-template-columns: repeat(${columns}, 1fr);
          }
        `
    )}
`;

export default List;
