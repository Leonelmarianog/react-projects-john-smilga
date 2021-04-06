import styled from 'styled-components';

const Container = styled.div`
  position: ${({ position }) => position};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: grid;
  grid-template-rows: ${({ rows }) => rows.map((row) => row.size).join(' ')};
`;

const Row = styled.div`
  background-color: ${({ color }) => `var(${color})`};
  ${({ border }) => border && 'border-bottom: 2px solid var(--clr-shadow)'};
`;

export const Background = ({ position, rows }) => (
  <Container position={position} rows={rows}>
    {rows.map((row, index) => (
      <Row key={index + 1} color={row.color} border={row.border} />
    ))}
    ;
  </Container>
);
