import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4em;
`;

const ProductsCategories = ({ children }) => <Container>{children}</Container>;

export default ProductsCategories;
