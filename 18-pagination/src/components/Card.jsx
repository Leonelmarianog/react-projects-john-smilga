import styled from 'styled-components';
import { button } from '../styles';

const Container = styled.article`
  background-color: var(--clr-white);
  width: 80%;
  min-width: 250px;
  max-width: 250px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1em;
  box-shadow: 0 0 0.5em 0.25em var(--clr-shadow);
`;

const Image = styled.img`
  height: 8em;
  width: 8em;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.h1`
  margin: 1em;
  font-size: calc(var(--font-size-base) * 1.25);
`;

const Button = styled.button`
  ${button};

  background-color: var(--clr-yellow-3);
  padding: 0.5em 0.75em;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: var(--clr-yellow-2);
  }
`;

export const Card = ({ renderAs, image, name }) => (
  <Container as={renderAs ? renderAs : ''}>
    <Image src={image} alt={name} />
    <Name>{name}</Name>
    <Button>View Profile</Button>
  </Container>
);
