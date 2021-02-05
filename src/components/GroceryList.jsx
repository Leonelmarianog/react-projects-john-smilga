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

const GroceryList = ({ groceries, deleteGroceryCallback, setEditCallback }) => (
  <Container>
    {groceries.map((grocery) => (
      <Grocery
        key={grocery.id}
        {...grocery}
        deleteGroceryCallback={deleteGroceryCallback}
        setEditCallback={setEditCallback}
      />
    ))}
  </Container>
);

export default GroceryList;
