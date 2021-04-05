import React from 'react';
import styled from 'styled-components';
import { LinkIcon, List } from '../../common';

const transition = {
  css: '0.2s',
  value: 200,
};

const Container = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2em;
  padding: 2em;
  position: absolute;
  top: 0;
  left: 0;
  width: 946px;
  height: 378px;

  &.tab--enter {
    opacity: 0;
    transform: translateX(50%);
  }

  &.tab--enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
  }

  &.tab--enter-done {
    opacity: 1;
    transform: translateX(0);
  }

  &.tab--exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.tab--exit-active {
    opacity: 0;
    transform: translateX(50%);
    transition: transform ${transition.css} linear, opacity ${transition.css} linear;
  }

  &.tab--exit-done {
    opacity: 0;
    transform: translateX(50%);
  }
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
