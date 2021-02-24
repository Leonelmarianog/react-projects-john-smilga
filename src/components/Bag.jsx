import React from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';
import TotalPriceCounter from './TotalPriceCounter';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2em 0.5em;
  font-size: calc(var(--font-size-base) * 0.75);

  @media screen and (min-width: 420px) {
    font-size: inherit;
  }
`;

const Heading = styled.h1`
  text-transform: capitalize;
  margin: 0 auto 2em auto;
`;

const Bag = () => (
  <Container>
    <Heading>Your Bag</Heading>
    <ItemList />
    <TotalPriceCounter />
  </Container>
);

export default Bag;
