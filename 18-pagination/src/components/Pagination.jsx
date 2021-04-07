import styled from 'styled-components';
import { button } from '../styles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
`;

const BorderButton = styled.button`
  ${button};

  font-weight: bold;
`;

const Button = styled.button`
  ${button};

  background-color: var(--clr-yellow-3);
  padding: 0.5em 0.75em;
  border-radius: 5px;
  margin: 0 0.5em;
  font-weight: bold;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: var(--clr-yellow-2);
  }
`;

export const Pagination = () => (
  <Container>
    <BorderButton>Prev</BorderButton>
    <Button>1</Button>
    <Button>2</Button>
    <Button>3</Button>
    <Button>4</Button>
    <Button>5</Button>
    <Button>6</Button>
    <Button>7</Button>
    <Button>8</Button>
    <Button>9</Button>
    <Button>10</Button>
    <BorderButton>Next</BorderButton>
  </Container>
);
