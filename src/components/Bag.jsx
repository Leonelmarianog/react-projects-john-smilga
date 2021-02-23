import React from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

const Heading = styled.h1`
  text-transform: capitalize;
  margin: 0 auto 2em auto;
`;

const Bag = () => (
  <Container>
    <Heading>Your Bag</Heading>
    <ItemList />
  </Container>
);

export default Bag;
