import styled from 'styled-components';
import { list } from '../styles';
import { Photo } from './Photo';

const Container = styled.ul`
  ${list};

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
  gap: 2em;
  justify-content: center;
  padding: 2em;
  width: 100%;
  max-width: 1500px;
`;

export const PhotoList = ({ photos }) => (
  <Container>
    {photos.map((photo, index) => (
      <Photo key={index + 1} {...photo} />
    ))}
  </Container>
);
