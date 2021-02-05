import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './Form';
import GroceryList from './GroceryList';
import Flash from './Flash';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 1em;
  background-color: var(--clr-white-1);
  width: 80vw;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0 0 0.5em 0.15em #00000025;

  @media screen and (min-width: 576px) {
    max-width: 500px;
  }
`;

const Card = () => {
  const [groceries, setGroceries] = useState(['eggs', 'milk', 'fish']);

  return (
    <Container>
      <Flash />
      <Form />
      <GroceryList groceries={groceries} />
    </Container>
  );
};

export default Card;
