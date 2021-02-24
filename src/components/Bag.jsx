import React from 'react';
import styled from 'styled-components';
import ItemList from './ItemList';
import TotalPriceCounter from './TotalPriceCounter';
import { ColourButton } from './common';

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

const ClearBagButton = styled(ColourButton)`
  border-color: var(--clr-red-1);
  margin: 0 auto;

  &:hover {
    background-color: var(--clr-red-1);
  }

  @media screen and (min-width: 420px) {
    font-size: var(--font-size-base);
  }
`;

const Bag = () => (
  <Container>
    <Heading>Your Bag</Heading>
    <ItemList />
    <TotalPriceCounter />
    <ClearBagButton>Clear Bag</ClearBagButton>
  </Container>
);

export default Bag;
