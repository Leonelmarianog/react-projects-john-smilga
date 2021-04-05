import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5em;

  & > div {
    margin-left: 0.5em;

    & > p:first-child {
      font-weight: bold;
      color: var(--clr-dark-pink-1);
    }

    & > p:last-child {
      color: var(--clr-dark-pink-2);
    }
  }

  & > img {
    height: 4em;
    width: 4em;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 0.5em;
  }
`;

const Card = ({ name, age, image }) => (
  <Container>
    <img src={image} alt={name} />
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  </Container>
);

export default Card;
