import styled from 'styled-components';
import { Card } from './Card';
import { list } from '../styles';

const Container = styled.ul`
  ${list};

  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  gap: 2em;
  justify-content: center;
  padding: 2em 1em;
`;

export const CardList = () => (
  <Container>
    <Card renderAs='li' />
    <Card renderAs='li' />
    <Card renderAs='li' />
    <Card renderAs='li' />
    <Card renderAs='li' />
    <Card renderAs='li' />
    <Card renderAs='li' />
    <Card renderAs='li' />
    <Card renderAs='li' />
    <Card renderAs='li' />
    <Card renderAs='li' />
    <Card renderAs='li' />
  </Container>
);
