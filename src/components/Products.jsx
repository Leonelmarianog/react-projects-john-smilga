import React from 'react';
import styled from 'styled-components';
import { Card, LinkIcon, List } from './common';

const Container = styled(Card)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2em;
  padding: 2em;
`;

const Name = styled.h1`
  color: var(--clr-blue-4);
  font-size: calc(var(--font-size-base) * 0.75);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 2em;
`;

const Category = ({ name, products }) => (
  <section>
    <Name>{name}</Name>
    <List rowGap='2em'>
      {products.map((product, index) => (
        <li key={index + 1}>
          <LinkIcon {...product} iconSize='big' />
        </li>
      ))}
    </List>
  </section>
);

const Products = ({ products }) => (
  <Container>
    {products.categories.map((category, index) => (
      <Category key={index + 1} {...category} />
    ))}
  </Container>
);

export default Products;
