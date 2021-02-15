import React from 'react';
import styled from 'styled-components';

const Container = styled.nav`
  background-color: var(--clr-white-1);
  position: absolute;
  top: 10%;
  left: 50%;
  z-index: 4;
  padding: 2em 2.5em;
  border-radius: 10px;
  box-shadow: 0 2em 2em 0.5em #00000025;
  transform: translate(-50%, 0);
`;

const ProductsCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 4em;
`;

const ProductCategory = styled.h1`
  margin-bottom: 2em;
  font-size: calc(var(--font-size-base) * 0.85);
  font-weight: bold;
  text-transform: uppercase;
  color: var(--clr-blue-4);
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

const Product = styled.a`
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: repeat(2, max-content);

  &:hover {
    & > span {
      color: var(--clr-blue-1);
    }

    & > svg {
      color: var(--clr-blue-1);
    }
  }
`;

const ProductIcon = styled.span`
  grid-column: 1/2;
  grid-row: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-blue-4);

  & > svg {
    height: auto;
    width: 2em;
    margin-right: 1em;
  }
`;

const ProductName = styled.span`
  grid-column: 2/-1;
  grid-row: 1/2;
  color: var(--clr-blue-1);
  font-weight: bold;
`;

const ProductDescription = styled.span`
  grid-column: 2/-1;
  grid-row: 2/-1;
  color: var(--clr-blue-4);
`;

const ProductsCategory = ({ category, products }) => (
  <section>
    <ProductCategory>{category}</ProductCategory>
    <ProductsList>
      {products.map((product, index) => {
        const { name, description, icon, url } = product;
        return (
          <li key={index + 1}>
            <Product href={url}>
              <ProductIcon>{icon}</ProductIcon>
              <ProductName>{name}</ProductName>
              <ProductDescription>{description}</ProductDescription>
            </Product>
          </li>
        );
      })}
    </ProductsList>
  </section>
);

const Submenu = ({ productsCategories }) => {
  return (
    <Container>
      <ProductsCategoryContainer>
        {productsCategories.map((productsCategory, index) => (
          <ProductsCategory key={index + 1} {...productsCategory} />
        ))}
      </ProductsCategoryContainer>
    </Container>
  );
};

export default Submenu;
