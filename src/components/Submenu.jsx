import React, { useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import useGlobalContext from '../hooks/useGlobalContext';

const PerspectiveProvider = styled.div`
  perspective: 250px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const SubmenuContainer = styled.div`
  position: absolute;
  top: 3.5em;
  left: 50%;
  padding-top: 0.75em;
  transform-origin: 0 0;
  transform: translate(-50%, 0);
  pointer-events: auto;

  &.submenu--enter {
    opacity: 0;
    transform: translate(-50%, 0) rotateX(-15deg);
  }

  &.submenu--enter-active {
    opacity: 1;
    transform: translate(-50%, 0) rotateX(0deg);
    transition: transform 0.2s linear, opacity 0.2s linear;
  }

  &.submenu--enter-done {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  &.submenu--exit {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  &.submenu--exit-active {
    opacity: 0;
    transform: translate(-50%, 0) rotateX(-15deg);
    transition: transform 0.2s linear, opacity 0.2s linear;
  }

  &.submenu--exit-done {
    opacity: 0;
    transform: translate(-50%, 0) rotateX(-15deg);
  }
`;

const SubmenuArrow = styled.div`
  position: absolute;
  top: 6px;
  left: 50%;
  width: 12px;
  height: 12px;
  transform: rotateZ(45deg);
  background-color: var(--clr-white-1);
`;

const SubmenuBody = styled.nav`
  background-color: var(--clr-white-1);
  box-shadow: 0 2em 2em 0.5em #00000025;
  padding: 2em 2.5em;
  border-radius: 10px;
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
  const { isSubmenuMounted } = useGlobalContext();
  const nodeRef = useRef(null);

  return (
    <PerspectiveProvider>
      <CSSTransition
        in={isSubmenuMounted}
        timeout={{ enter: 200, exit: 200 }}
        classNames={'submenu-'}
        mountOnEnter={true}
        unmountOnExit={true}
        nodeRef={nodeRef}
      >
        <SubmenuContainer ref={nodeRef}>
          <SubmenuArrow />
          <SubmenuBody>
            <ProductsCategoryContainer>
              {productsCategories.map((productsCategory, index) => (
                <ProductsCategory key={index + 1} {...productsCategory} />
              ))}
            </ProductsCategoryContainer>
          </SubmenuBody>
        </SubmenuContainer>
      </CSSTransition>
    </PerspectiveProvider>
  );
};

export default Submenu;
