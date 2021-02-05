import React from 'react';
import styled from 'styled-components';
import Grocery from './Grocery';

const Container = styled.ul`
  list-style: none;
  width: 90%;
  margin-top: 3em;

  & > li {
    margin-bottom: 1em;
  }

  & > li:last-child {
    margin-bottom: 0;
  }
`;

const GroceryList = ({ groceries }) => (
  <Container>
    {groceries.map((grocery, index) => (
      <Grocery key={index + 1} grocery={grocery} />
    ))}
  </Container>
);

export default GroceryList;
