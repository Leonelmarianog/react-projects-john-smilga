import React from 'react';
import styled from 'styled-components';
import { LinkIcon } from './common';

const ProductCategory = styled.h1`
  font-size: calc(var(--font-size-base) * 0.85);
  font-weight: bold;
  text-transform: uppercase;
  color: var(--clr-blue-4);
  margin-bottom: 2em;
`;

const ProductsList = styled.ul`
  list-style: none;

  & > li {
    margin-bottom: 2.25em;
  }

  & > li:last-child {
    margin-bottom: 0;
  }
`;

const ProductsCategory = ({ category, products }) => (
  <section>
    <ProductCategory>{category}</ProductCategory>
    <ProductsList>
      {products.map((product, index) => (
        <li key={index + 1}>
          <LinkIcon {...product} iconSize='big' />
        </li>
      ))}
    </ProductsList>
  </section>
);

export default ProductsCategory;
